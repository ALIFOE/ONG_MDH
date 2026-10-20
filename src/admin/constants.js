// Formulaires du site, dans l'ordre des onglets de l'admin
export const submissionTypes = [
  { value: 'adhesion', label: 'Adhésions', single: 'Adhésion', icon: 'fa-id-card' },
  { value: 'benevole', label: 'Bénévoles', single: 'Bénévolat', icon: 'fa-hand-holding-heart' },
  { value: 'parrainage', label: 'Parrainages', single: 'Parrainage', icon: 'fa-child' },
  { value: 'don', label: 'Dons', single: 'Don', icon: 'fa-heart' },
  { value: 'vacances', label: 'Vacances Utiles', single: 'Inscription Vacances Utiles', icon: 'fa-sun' },
  { value: 'contact', label: 'Messages', single: 'Message de contact', icon: 'fa-envelope' }
]

export const typeLabel = value => submissionTypes.find(t => t.value === value)?.single || value

export const statuses = [
  { value: 'nouveau', label: 'Nouveau' },
  { value: 'en_cours', label: 'En cours' },
  { value: 'traite', label: 'Traité' },
  { value: 'archive', label: 'Archivé' }
]

// Pour un don, « traité » signifie que le paiement a été reçu
export const statusLabel = (value, type) => {
  if (type === 'don' && value === 'traite') return 'Reçu'
  return statuses.find(s => s.value === value)?.label || value
}

export const roles = [
  { value: 'admin', label: 'Administrateur', hint: 'Accès complet : demandes reçues, contenu, comptes' },
  { value: 'editor', label: 'Éditeur', hint: 'Contenu du site uniquement : articles, galerie, équipe, infos' }
]

export const roleLabel = value => roles.find(r => r.value === value)?.label || value

export const articleCategories = ['Éducation', 'Plaidoyer', 'Développement', 'Volontariat', 'Environnement', 'Santé']

export const galleryCategories = ['Éducation', 'Santé', 'Développement', 'Équipe']
