// Remplace les scripts jQuery du template (sal.js + counterup) :
// - ajoute .sal-animate aux éléments [data-sal] quand ils entrent à l'écran
// - anime les nombres contenus dans les éléments .counter
// Un MutationObserver prend en charge les éléments ajoutés après une navigation.

const COUNTER_DURATION = 1500

function animateCounter(el) {
  const raw = el.textContent.trim()
  const target = parseFloat(raw.replace(/[\s,]/g, ''))
  if (Number.isNaN(target)) return

  const decimals = (raw.split('.')[1] || '').length
  const grouped = raw.includes(',')
  const format = value => grouped
    ? value.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals })
    : value.toFixed(decimals)

  const start = performance.now()
  const step = now => {
    const progress = Math.min((now - start) / COUNTER_DURATION, 1)
    const eased = 1 - Math.pow(1 - progress, 3)
    el.textContent = format(target * eased)
    if (progress < 1) requestAnimationFrame(step)
    else el.textContent = raw
  }
  requestAnimationFrame(step)
}

export function setupScrollAnimations(root = document.body) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduceMotion || !('IntersectionObserver' in window)) {
    document.body.classList.add('sal-disabled')
    return () => {}
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      const el = entry.target
      if (el.hasAttribute('data-sal')) el.classList.add('sal-animate')
      if (el.classList.contains('counter')) animateCounter(el)
      observer.unobserve(el)
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })

  const scan = () => {
    root.querySelectorAll('[data-sal]:not([data-sal-watched]), .counter:not([data-sal-watched])').forEach(el => {
      el.setAttribute('data-sal-watched', '')
      observer.observe(el)
    })
  }

  let pending = false
  const mutations = new MutationObserver(() => {
    if (pending) return
    pending = true
    requestAnimationFrame(() => {
      pending = false
      scan()
    })
  })

  scan()
  mutations.observe(root, { childList: true, subtree: true })

  return () => {
    observer.disconnect()
    mutations.disconnect()
  }
}
