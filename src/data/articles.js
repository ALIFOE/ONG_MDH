import { reactive } from 'vue'
import images from './images.js'
import { fetchPublic } from '@/api/public.js'

// Actualités publiées depuis l'admin, de la plus récente à la plus ancienne.
// Utilisées par la page Actualités, l'accueil, le pied de page et la barre latérale des articles.
export const articles = reactive([])

export const categories = reactive([])

// « loaded » passe à true une fois la liste reçue (ou si l'API ne répond pas)
export const articlesState = reactive({ loaded: false, failed: false })

const countCategories = () => [...new Set(articles.map(a => a.category).filter(Boolean))].map(name => ({
  name,
  count: articles.filter(a => a.category === name).length
}))

const dateFormat = new Intl.DateTimeFormat('fr-FR', { month: 'long', year: 'numeric' })

// Article de l'API au format des cartes d'actualité
export function toArticleCard(article) {
  const date = article.published_at ? dateFormat.format(new Date(`${article.published_at}T12:00:00`)) : ''
  return {
    to: `/actualites/${article.slug}`,
    slug: article.slug,
    title: article.title,
    date: article.date_label || date.replace(/^./, c => c.toUpperCase()),
    category: article.category,
    image: article.image || images.logo,
    excerpt: article.excerpt
  }
}

let loading = null

export function loadArticles() {
  loading ??= fetchPublic('/articles')
    .then(data => {
      articles.splice(0, articles.length, ...data.items.map(toArticleCard))
      categories.splice(0, categories.length, ...countCategories())
    })
    .catch(() => {
      articlesState.failed = true
    })
    .finally(() => {
      articlesState.loaded = true
    })
  return loading
}
