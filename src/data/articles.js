import { reactive } from 'vue'
import images from './images.js'
import { fetchPublic } from '@/api/public.js'

// Articles historiques, intégrés au code (une page .vue chacun), du plus récent au plus ancien.
export const staticArticles = [
  {
    to: '/article/academies-super-enfants',
    title: "Rapport d'Activité du Programme Académie des Super-Enfants",
    date: 'Septembre - Novembre 2025',
    category: 'Éducation',
    image: images.rapport1,
    excerpt: "Un programme complet d'occupation saine et éducative pour les enfants durant les vacances scolaires avec apprentissage et divertissement."
  },
  {
    to: '/article/vacances-utiles-2025',
    title: 'Vacances Utiles 2025 à Apédokoè',
    date: 'Juillet - Août 2025',
    category: 'Éducation',
    image: images.article1,
    excerpt: 'Le siège social accueille le programme « Vacances Utiles 2025 » : ateliers éducatifs, jeux, activités sportives et bien plus !'
  },
  {
    to: '/article/mobilisation-parlementaire',
    title: 'Mobilisation parlementaire pour le droit foncier',
    date: 'Mai 2025',
    category: 'Plaidoyer',
    image: images.article2,
    excerpt: "L'Organisation MDH et ses partenaires ont mobilisé le Caucus des femmes parlementaires pour les droits fonciers."
  },
  {
    to: '/article/activites-pratiques',
    title: 'Participation aux activités pratiques à Logoté',
    date: 'Décembre 2023',
    category: 'Développement',
    image: images.debutChantier,
    excerpt: "Préparation du sable et fabrication des briques écologiques dans la construction d'un bâtiment de formation."
  },
  {
    to: '/article/soutien-scolaire',
    title: 'Soutien scolaire et enseignement',
    date: 'Décembre 2023',
    category: 'Éducation',
    image: images.ecole5,
    excerpt: "Les cours de soutien sont au cœur de nos activités pour l'éducation inclusive. Les élèves sont accompagnés toute l'année scolaire."
  },
  {
    to: '/article/sejour-allemands',
    title: 'Deux jeunes Allemands ont séjourné au Togo',
    date: 'Novembre 2023',
    category: 'Volontariat',
    image: images.article3,
    excerpt: "Deux jeunes bénévoles allemands ont participé au projet « Hallo je voyage en Afrique » au sein de l'Organisation MDH."
  },
  {
    to: '/article/sensibilisation-genre-foncier',
    title: 'Sensibilisation genre et foncier à Bangéli',
    date: 'Février 2023',
    category: 'Plaidoyer',
    image: images.sensibilisation1,
    excerpt: 'Sensibilisations communautaires sur le genre et le foncier. Les femmes agricultrices de Bangéli apprennent leurs droits fonciers.'
  },
  {
    to: '/article/rapport-activites-2019',
    title: 'Rapport Général de la Mise en Œuvre des Activités de 2019',
    date: 'Année 2019',
    category: 'Environnement',
    image: images.rapport2,
    excerpt: "Sensibilisation sur l'utilisation des pesticides et renforcement de capacités des pépiniéristes dans la région des savanes."
  }
]

// Liste affichée par la page Actualités, l'accueil, le pied de page et la barre latérale des articles :
// les articles publiés depuis l'admin d'abord, puis les articles historiques.
export const articles = reactive([...staticArticles])

const countCategories = () => [...new Set(articles.map(a => a.category).filter(Boolean))].map(name => ({
  name,
  count: articles.filter(a => a.category === name).length
}))

export const categories = reactive(countCategories())

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

let remoteLoad = null

export function loadRemoteArticles() {
  remoteLoad ??= fetchPublic('/articles')
    .then(data => {
      articles.splice(0, articles.length, ...data.items.map(toArticleCard), ...staticArticles)
      categories.splice(0, categories.length, ...countCategories())
    })
    .catch(() => {
      // API indisponible : seuls les articles historiques sont affichés
    })
  return remoteLoad
}
