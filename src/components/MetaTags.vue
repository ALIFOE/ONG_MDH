<script setup>
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const defaultMeta = {
  title: 'MDH International Togo - Développement Humain Durable',
  description: 'MDH International Togo est une organisation dédiée au développement humain durable à travers l\'éducation, la santé et le développement économique.',
  image: '/ONG_MDH/assets/logo_mdh-LVIgh_3f.png',
  url: 'https://modehumain.org/ONG_MDH/'
}

const updateMeta = () => {
  const meta = route.meta || {}
  const title = meta.title || defaultMeta.title
  const description = meta.description || defaultMeta.description
  const image = meta.image || defaultMeta.image
  const url = `https://modehumain.org/ONG_MDH${route.path}`

  // Title
  document.title = title

  // Meta description
  let descriptionTag = document.querySelector('meta[name="description"]')
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta')
    descriptionTag.name = 'description'
    document.head.appendChild(descriptionTag)
  }
  descriptionTag.content = description

  // Open Graph tags
  updateOrCreateMeta('og:title', title)
  updateOrCreateMeta('og:description', description)
  updateOrCreateMeta('og:image', image)
  updateOrCreateMeta('og:url', url)
  updateOrCreateMeta('og:type', 'website')
  updateOrCreateMeta('og:locale', 'fr_FR')

  // Twitter Card
  updateOrCreateMeta('twitter:title', title)
  updateOrCreateMeta('twitter:description', description)
  updateOrCreateMeta('twitter:image', image)
  updateOrCreateMeta('twitter:card', 'summary_large_image')

  // Canonical URL
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.rel = 'canonical'
    document.head.appendChild(canonical)
  }
  canonical.href = url

  // Alternate for mobile
  updateOrCreateMeta('mobile-alternate', null, `${url}`)
}

const updateOrCreateMeta = (property, content, href = null) => {
  let tag = document.querySelector(`meta[property="${property}"], meta[name="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(href ? 'href' : property.startsWith('og:') ? 'property' : 'name', property)
    document.head.appendChild(tag)
  }
  if (href) {
    tag.href = href
  } else {
    tag.content = content
  }
}

watch(() => route.path, updateMeta)

updateMeta()
</script>
