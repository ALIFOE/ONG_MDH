import images from './images.js'

// Liste des actualités, de la plus récente à la plus ancienne.
// Utilisée par la page Actualités, l'accueil, le pied de page et la barre latérale des articles.
export const articles = [
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

export const categories = [...new Set(articles.map(a => a.category))].map(name => ({
  name,
  count: articles.filter(a => a.category === name).length
}))
