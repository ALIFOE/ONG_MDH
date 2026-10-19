// Coordonnées et liens partagés par l'en-tête, le pied de page et les pages
export const contact = {
  email: 'modehumain@gmail.com',
  phone: '+228 92 12 95 49',
  phoneHref: 'tel:+22892129549',
  address: 'Aflao-Sagbado (Apedokoè)',
  city: 'Lomé, Togo',
  hours: 'Du lundi au vendredi, de 8h à 18h',
  mapQuery: 'Apédokoè, Lomé, Togo'
}

export const socials = [
  { label: 'Facebook', icon: 'fa-facebook-f', href: 'https://www.facebook.com/mdhtogoofficial' },
  { label: 'Twitter', icon: 'fa-twitter', href: 'https://twitter.com/mdhtogo' },
  { label: 'Instagram', icon: 'fa-instagram', href: 'https://www.instagram.com/mdhtogo' },
  { label: 'LinkedIn', icon: 'fa-linkedin-in', href: 'https://www.linkedin.com/company/mdh-togo' }
]

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
