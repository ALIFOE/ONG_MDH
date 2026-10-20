import { reactive } from 'vue'
import { fetchPublic } from '@/api/public.js'

// Coordonnées et liens partagés par l'en-tête, le pied de page et les pages.
// Valeurs par défaut, remplacées au chargement par celles saisies dans l'admin (« Infos du site »).
export const contact = reactive({
  email: 'modehumain@gmail.com',
  phone: '+228 92 12 95 49',
  address: 'Aflao-Sagbado (Apedokoè)',
  city: 'Lomé, Togo',
  hours: 'Du lundi au vendredi, de 8h à 18h',
  mapQuery: 'Apédokoè, Lomé, Togo',
  get phoneHref() {
    return `tel:${this.phone.replace(/[^\d+]/g, '')}`
  }
})

export const socials = reactive([
  { label: 'Facebook', icon: 'fa-facebook-f', href: 'https://www.facebook.com/mdhtogoofficial' },
  { label: 'Twitter', icon: 'fa-twitter', href: 'https://twitter.com/mdhtogo' },
  { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/mdhtogo' },
  { label: 'LinkedIn', icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/company/mdh-togo' }
])

// Moyens de paiement affichés sur la page « Faire un don »
export const donation = reactive({
  paypalUrl: 'https://www.paypal.com/mep/dashboard',
  bankName: 'IBANK',
  bankHolder: 'Mode Humain International',
  iban: 'TG80370240103902769900010133',
  mobileMoneyName: 'Mix by Yas',
  mobileMoneyNumber: '+228 92 12 95 49',
  mobileMoneyReference: 'MDH Donation'
})

export async function loadSiteSettings() {
  try {
    const settings = await fetchPublic('/settings')
    const { phoneHref, ...contactValues } = settings.contact || {}
    Object.assign(contact, contactValues)
    Object.assign(donation, settings.donation || {})
    if (Array.isArray(settings.socials)) socials.splice(0, socials.length, ...settings.socials)
  } catch {
    // API indisponible : on garde les valeurs ci-dessus
  }
}

// Menu principal : un élément avec "children" devient un menu déroulant
export const menu = [
  { label: 'Accueil', to: '/' },
  {
    label: "L'Organisation",
    children: [
      { label: "L'Organisation", to: '/association' },
      { label: 'Notre équipe', to: '/notre-equipe' },
      { label: 'Galerie', to: '/galerie' }
    ]
  },
  { label: 'Nos Actions', to: '/actions' },
  {
    label: "S'engager",
    children: [
      { label: 'Devenir bénévole', to: '/benevole' },
      { label: 'Adhésion', to: '/adhesion' },
      { label: 'Parrainage', to: '/parrainage' },
      { label: 'Faire un don', to: '/donation' }
    ]
  },
  { label: "L'École", to: '/ecole' },
  { label: 'Actualités', to: '/actualites' },
  { label: 'Contact', to: '/contact' }
]
