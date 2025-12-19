import { createRouter, createWebHistory } from 'vue-router'

// Import des pages
import Home from '../pages/Home.vue'
import Association from '../pages/Association.vue'
import Actions from '../pages/Actions.vue'
import Actualites from '../pages/Actualites.vue'
import Rejoindre from '../pages/Rejoindre.vue'
import Ecole from '../pages/Ecole.vue'
import Contact from '../pages/Contact.vue'
import Donation from '../pages/Donation.vue'
import NotreEquipe from '../pages/NotreEquipe.vue'
import Galerie from '../pages/Galerie.vue'
import NotFound from '../pages/NotFound.vue'

// Import des pages d'articles
import VacancesUtiles2025 from '../pages/articles/VacancesUtiles2025.vue'
import SensibilisationGenreFoncier from '../pages/articles/SensibilisationGenreFoncier.vue'
import MobilisationParlementaire from '../pages/articles/MobilisationParlementaire.vue'
import ActivitesPratiques from '../pages/articles/ActivitesPratiques.vue'
import SoutienScolaire from '../pages/articles/SoutienScolaire.vue'
import SejournAllemands from '../pages/articles/SejournAllemands.vue'

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
    path: '/article/vacances-utiles-2025',
    name: 'VacancesUtiles2025',
    component: VacancesUtiles2025,
    meta: {
      title: 'Vacances Utiles 2025 - MDH International Togo'
    }
  },
  {
    path: '/article/sensibilisation-genre-foncier',
    name: 'SensibilisationGenreFoncier',
    component: SensibilisationGenreFoncier,
    meta: {
      title: 'Sensibilisation Genre et Foncier - MDH International Togo'
    }
  },
  {
    path: '/article/mobilisation-parlementaire',
    name: 'MobilisationParlementaire',
    component: MobilisationParlementaire,
    meta: {
      title: 'Mobilisation Parlementaire - MDH International Togo'
    }
  },
  {
    path: '/article/activites-pratiques',
    name: 'ActivitesPratiques',
    component: ActivitesPratiques,
    meta: {
      title: 'Activités Pratiques - MDH International Togo'
    }
  },
  {
    path: '/article/soutien-scolaire',
    name: 'SoutienScolaire',
    component: SoutienScolaire,
    meta: {
      title: 'Soutien Scolaire - MDH International Togo'
    }
  },
  {
    path: '/article/sejour-allemands',
    name: 'SejournAllemands',
    component: SejournAllemands,
    meta: {
      title: 'Séjour des Jeunes Allemands - MDH International Togo'
    }
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
    } else {
      return { top: 0 }
    }
  }
})

// Mise à jour du titre de la page
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'MDH International Togo'
  window.scrollTo(0, 0)
  next()
})

export default router
