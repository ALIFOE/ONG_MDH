import { createRouter, createWebHistory } from 'vue-router'

// Import des pages
import Home from '../pages/Home.vue'
import Association from '../pages/Association.vue'
import Actions from '../pages/Actions.vue'
import Benevole from '../pages/Benevole.vue'
import Actualites from '../pages/Actualites.vue'
import Rejoindre from '../pages/Rejoindre.vue'
import Ecole from '../pages/Ecole.vue'
import Contact from '../pages/Contact.vue'
import Donation from '../pages/Donation.vue'
import NotreEquipe from '../pages/NotreEquipe.vue'
import Galerie from '../pages/Galerie.vue'
import Parrainage from '../pages/Parrainage.vue'
import Adhesion from '../pages/Adhesion.vue'
import NotFound from '../pages/NotFound.vue'

// Formulaires d'inscription
import InscriptionAdhesion from '../pages/InscriptionAdhesion.vue'
import InscriptionVacances2025 from '../pages/articles/InscriptionVacances2025.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Accueil - MDH International Togo',
      description: 'Bienvenue sur le site de MDH International Togo'
    }
  },
  {
    path: '/association',
    name: 'Association',
    component: Association,
    meta: {
      title: 'L\'Organisation - MDH International Togo',
      description: 'En savoir plus sur MDH International Togo'
    }
  },
  {
    path: '/notre-equipe',
    name: 'NotreEquipe',
    component: NotreEquipe,
    meta: {
      title: 'Notre Équipe - MDH International Togo',
      description: 'Rencontrez notre équipe'
    }
  },
  {
    path: '/actions',
    name: 'Actions',
    component: Actions,
    meta: {
      title: 'Nos Actions - MDH International Togo',
      description: 'Découvrez nos différentes actions'
    }
  },
  {
    path: '/benevole',
    name: 'Benevole',
    component: Benevole,
    meta: {
      title: 'Devenir Bénévole - MDH International Togo',
      description: 'Rejoignez notre programme de bénévolat'
    }
  },
  {
    path: '/actualites',
    name: 'Actualites',
    component: Actualites,
    meta: {
      title: 'Actualités - MDH International Togo',
      description: 'Restez informé de nos actualités'
    }
  },
  {
    path: '/galerie',
    name: 'Galerie',
    component: Galerie,
    meta: {
      title: 'Galerie - MDH International Togo',
      description: 'Découvrez nos projets en images'
    }
  },
  {
    path: '/rejoindre',
    name: 'Rejoindre',
    component: Rejoindre,
    meta: {
      title: 'Rejoindre-nous - MDH International Togo',
      description: 'Comment nous rejoindre et contribuer'
    }
  },
  {
    path: '/ecole',
    name: 'Ecole',
    component: Ecole,
    meta: {
      title: 'Notre École - MDH International Togo',
      description: 'En savoir plus sur notre école'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contactez-nous - MDH International Togo',
      description: 'Nous contacter'
    }
  },
  {
    path: '/donation',
    name: 'Donation',
    component: Donation,
    meta: {
      title: 'Faire un don - MDH International Togo',
      description: 'Soutenez nos actions par un don'
    }
  },
  {
    path: '/parrainage',
    name: 'Parrainage',
    component: Parrainage,
    meta: {
      title: 'Parrainage - MDH International Togo',
      description: 'Devenez parrain ou marraine'
    }
  },
  {
    path: '/adhesion',
    name: 'Adhesion',
    component: Adhesion,
    meta: {
      title: 'Adhésion - MDH International Togo',
      description: 'Devenir membre de l\'ONG MDH'
    }
  },
  {
    path: '/inscription-adhesion',
    name: 'InscriptionAdhesion',
    component: InscriptionAdhesion,
    meta: {
      title: 'Inscription Adhésion - MDH International Togo'
    }
  },
  {
    path: '/inscription-vacances-2025',
    name: 'InscriptionVacances2025',
    component: InscriptionVacances2025,
    meta: {
      title: 'Inscription Vacances Utiles 2025 - MDH International Togo'
    }
  },
  // Anciennes adresses des articles, d'avant leur gestion dans l'admin
  {
    path: '/article/:slug',
    redirect: to => `/actualites/${to.params.slug}`
  },
  {
    path: '/actualites/:slug',
    name: 'Article',
    component: () => import('../pages/ArticleView.vue'),
    meta: {
      title: 'Actualités - MDH International Togo'
    }
  },

  // Espace d'administration (chargé à part, uniquement quand on l'ouvre)
  {
    path: '/admin/connexion',
    name: 'AdminLogin',
    component: () => import('../admin/pages/Login.vue'),
    meta: { admin: true, title: 'Connexion - Admin MDH' }
  },
  {
    path: '/admin',
    component: () => import('../admin/AdminLayout.vue'),
    meta: { admin: true, requiresAuth: true },
    children: [
      { path: '', name: 'AdminDashboard', component: () => import('../admin/pages/Dashboard.vue'), meta: { title: 'Tableau de bord - Admin MDH' } },
      { path: 'demandes/:type(adhesion|benevole|parrainage|don|vacances|contact)', name: 'AdminSubmissions', component: () => import('../admin/pages/Submissions.vue'), meta: { title: 'Demandes reçues - Admin MDH', roles: ['admin'] } },
      { path: 'demandes/fiche/:id(\\d+)', name: 'AdminSubmission', component: () => import('../admin/pages/SubmissionDetail.vue'), meta: { title: 'Demande - Admin MDH', roles: ['admin'] } },
      { path: 'articles', name: 'AdminArticles', component: () => import('../admin/pages/Articles.vue'), meta: { title: 'Articles - Admin MDH' } },
      { path: 'articles/nouveau', name: 'AdminArticleNew', component: () => import('../admin/pages/ArticleEdit.vue'), meta: { title: 'Nouvel article - Admin MDH' } },
      { path: 'articles/:id(\\d+)', name: 'AdminArticle', component: () => import('../admin/pages/ArticleEdit.vue'), meta: { title: 'Modifier un article - Admin MDH' } },
      { path: 'galerie', name: 'AdminGallery', component: () => import('../admin/pages/Gallery.vue'), meta: { title: 'Galerie - Admin MDH' } },
      { path: 'equipe', name: 'AdminTeam', component: () => import('../admin/pages/Team.vue'), meta: { title: 'Équipe - Admin MDH' } },
      { path: 'parametres', name: 'AdminSettings', component: () => import('../admin/pages/Settings.vue'), meta: { title: 'Infos du site - Admin MDH' } },
      { path: 'utilisateurs', name: 'AdminUsers', component: () => import('../admin/pages/Users.vue'), meta: { title: 'Utilisateurs - Admin MDH', roles: ['admin'] } },
      { path: 'mon-compte', name: 'AdminAccount', component: () => import('../admin/pages/Account.vue'), meta: { title: 'Mon compte - Admin MDH' } },
      { path: 'demandes', redirect: '/admin/demandes/adhesion' },
      { path: ':pathMatch(.*)*', redirect: '/admin' }
    ]
  },

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
    meta: {
      title: 'Page non trouvée - MDH International Togo'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      // Ancres internes (ex. /actions#education), décalées sous l'en-tête fixe
      return { el: to.hash, top: 110, behavior: 'smooth' }
    } else {
      return { top: 0 }
    }
  }
})

// Accès à l'admin : session vérifiée auprès de l'API, puis rôle requis par la page
router.beforeEach(async to => {
  if (!to.meta.admin) return true
  setNoIndex()
  const { session, loadSession } = await import('../admin/api.js')
  if (!session.checked) {
    try {
      await loadSession()
    } catch {
      session.user = null
    }
  }
  if (to.name === 'AdminLogin') return session.user ? '/admin' : true
  if (!session.user) return { path: '/admin/connexion', query: to.fullPath !== '/admin' ? { redirect: to.fullPath } : {} }
  if (to.meta.roles && !to.meta.roles.includes(session.user.role)) return '/admin'
  return true
})

// Mise à jour du titre de la page
router.afterEach(to => {
  document.title = to.meta.title || 'MDH International Togo'
})

// Les pages de l'admin ne doivent pas être indexées par les moteurs de recherche
function setNoIndex() {
  if (document.querySelector('meta[name="robots"][data-admin]')) return
  document.querySelector('meta[name="robots"]')?.remove()
  const tag = document.createElement('meta')
  tag.name = 'robots'
  tag.content = 'noindex, nofollow'
  tag.dataset.admin = ''
  document.head.appendChild(tag)
}

export default router
