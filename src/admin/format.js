const dateTime = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'medium', timeStyle: 'short' })
const dateOnly = new Intl.DateTimeFormat('fr-FR', { dateStyle: 'long' })
const money = new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' })

export const formatDateTime = value => (value ? dateTime.format(new Date(value)) : '—')

// Date simple « AAAA-MM-JJ » (sans fuseau horaire)
export const formatDate = value => (value ? dateOnly.format(new Date(`${value}T12:00:00`)) : '—')

export const formatMoney = value => (value === null || value === undefined ? '—' : money.format(value))

export function timeAgo(value) {
  if (!value) return ''
  const seconds = Math.round((Date.now() - new Date(value).getTime()) / 1000)
  if (seconds < 60) return "à l'instant"
  const minutes = Math.round(seconds / 60)
  if (minutes < 60) return `il y a ${minutes} min`
  const hours = Math.round(minutes / 60)
  if (hours < 24) return `il y a ${hours} h`
  const days = Math.round(hours / 24)
  if (days < 30) return `il y a ${days} j`
  return formatDateTime(value)
}
