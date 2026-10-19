<template>
  <div>
    <PageBanner
      title="Formulaire d'adhésion"
      :crumbs="[{ label: 'Adhésion', to: '/adhesion' }, { label: 'Inscription' }]"
      :image="images.image2"
      subtitle="Remplissez ce formulaire pour devenir membre officiel de l'ONG MDH."
    />

    <div class="pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-10 m-auto">
            <div class="form-wrapper-card form-style-one">
              <form novalidate @submit.prevent="handleSubmit">
                <!-- Type d'adhésion -->
                <h4 class="form-section-title"><i class="fa-solid fa-id-card"></i>Type d'adhésion</h4>
                <div class="row mb-10">
                  <div v-for="type in types" :key="type.value" class="col-md-4 mb-20">
                    <label class="mdh-choice" :class="{ 'is-checked': form.typeAdhesion === type.value }">
                      <input v-model="form.typeAdhesion" type="radio" :value="type.value">
                      <span>
                        <strong>{{ type.label }}</strong>
                        <small>{{ type.hint }}</small>
                      </span>
                    </label>
                  </div>
                </div>

                <!-- Informations personnelles -->
                <h4 class="form-section-title"><i class="fa-solid fa-user"></i>Informations personnelles</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Prénom *</label>
                      <input v-model="form.prenom" type="text" placeholder="Votre prénom" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Nom *</label>
                      <input v-model="form.nom" type="text" placeholder="Votre nom" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Email *</label>
                      <input v-model="form.email" type="email" placeholder="votre@email.com" required>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Téléphone *</label>
                      <input v-model="form.telephone" type="tel" placeholder="+228 92 12 95 49" required>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Adresse</label>
                      <input v-model="form.adresse" type="text" placeholder="Votre adresse complète">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Date de naissance</label>
                      <input v-model="form.dateNaissance" type="date">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Genre</label>
                      <select v-model="form.genre">
                        <option value="">-- Sélectionner --</option>
                        <option value="masculin">Masculin</option>
                        <option value="feminin">Féminin</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Informations professionnelles -->
                <h4 class="form-section-title"><i class="fa-solid fa-briefcase"></i>Informations professionnelles</h4>
                <div class="row">
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Profession</label>
                      <input v-model="form.profession" type="text" placeholder="Votre profession">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Lieu de travail</label>
                      <input v-model="form.lieuTravail" type="text" placeholder="Votre lieu de travail">
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="input-wrapper mb-20">
                      <label class="field-label">Secteur d'activité</label>
                      <select v-model="form.secteur">
                        <option value="">-- Sélectionner --</option>
                        <option value="education">Éducation</option>
                        <option value="sante">Santé</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="technologie">Technologie</option>
                        <option value="finance">Finance</option>
                        <option value="commerce">Commerce</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Membres de la famille -->
                <template v-if="form.typeAdhesion === 'famille'">
                  <h4 class="form-section-title"><i class="fa-solid fa-people-roof"></i>Membres de la famille</h4>
                  <p class="fs-16">Vous avez sélectionné l'adhésion famille. Indiquez les autres membres (jusqu'à 3).</p>
                  <div v-for="(membre, index) in form.membresFamily" :key="index" class="mdh-card mb-20">
                    <h5>Membre {{ index + 2 }}</h5>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="input-wrapper mb-20">
                          <label class="field-label">Prénom</label>
                          <input v-model="membre.prenom" type="text" placeholder="Prénom">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-wrapper mb-20">
                          <label class="field-label">Nom</label>
                          <input v-model="membre.nom" type="text" placeholder="Nom">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-wrapper mb-20">
                          <label class="field-label">Relation avec l'adhérent principal</label>
                          <select v-model="membre.relation">
                            <option value="">-- Sélectionner --</option>
                            <option value="conjoint">Conjoint(e)</option>
                            <option value="enfant">Enfant</option>
                            <option value="parent">Parent</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="input-wrapper mb-20">
                          <label class="field-label">Âge</label>
                          <input v-model="membre.age" type="number" placeholder="Âge">
                        </div>
                      </div>
                    </div>
                  </div>
                </template>

                <!-- Entreprise -->
                <template v-if="form.typeAdhesion === 'entreprise'">
                  <h4 class="form-section-title"><i class="fa-solid fa-building"></i>Informations entreprise</h4>
                  <div class="row">
                    <div class="col-12">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">Nom de l'entreprise *</label>
                        <input v-model="form.entreprise.nom" type="text" placeholder="Nom de l'entreprise">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">RCCM/NINEA</label>
                        <input v-model="form.entreprise.registre" type="text" placeholder="Numéro RCCM ou NINEA">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">Nombre d'employés</label>
                        <input v-model="form.entreprise.employes" type="number" placeholder="Nombre d'employés">
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">Adresse de l'entreprise</label>
                        <input v-model="form.entreprise.adresse" type="text" placeholder="Adresse complète">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">Téléphone entreprise</label>
                        <input v-model="form.entreprise.telephone" type="tel" placeholder="Téléphone">
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="input-wrapper mb-20">
                        <label class="field-label">Email entreprise</label>
                        <input v-model="form.entreprise.email" type="email" placeholder="Email entreprise">
                      </div>
                    </div>
                  </div>
                </template>

                <!-- Motivations -->
                <h4 class="form-section-title"><i class="fa-solid fa-lightbulb"></i>Motivations et intérêts</h4>
                <div class="input-wrapper mb-20">
                  <label class="field-label">Pourquoi souhaitez-vous rejoindre l'ONG MDH ? *</label>
                  <textarea v-model="form.motivation" placeholder="Décrivez vos motivations..." required></textarea>
                </div>
                <label class="field-label d-block mb-15">Domaines d'intérêt</label>
                <div class="row mb-10">
                  <div v-for="domaine in domaines" :key="domaine.value" class="col-md-4 col-6">
                    <label class="mdh-check">
                      <input v-model="form.domaines" type="checkbox" :value="domaine.value">
                      <span>{{ domaine.label }}</span>
                    </label>
                  </div>
                </div>

                <!-- Compétences -->
                <h4 class="form-section-title"><i class="fa-solid fa-star"></i>Compétences et expérience</h4>
                <div class="input-wrapper mb-20">
                  <label class="field-label">Décrivez vos compétences et expériences pertinentes</label>
                  <textarea v-model="form.competences" placeholder="Compétences, formations, expériences pertinentes..."></textarea>
                </div>

                <!-- Consentements -->
                <h4 class="form-section-title"><i class="fa-solid fa-file-signature"></i>Consentements et acceptations</h4>
                <label class="mdh-check">
                  <input v-model="form.accepteReglement" type="checkbox" required>
                  <span><strong>J'accepte le règlement interne de l'ONG MDH *</strong></span>
                </label>
                <label class="mdh-check">
                  <input v-model="form.accepteConditions" type="checkbox" required>
                  <span><strong>J'accepte les conditions d'adhésion *</strong></span>
                </label>
                <label class="mdh-check">
                  <input v-model="form.acceptePhotos" type="checkbox">
                  <span>J'accepte que mes photos soient utilisées</span>
                </label>
                <label class="mdh-check mb-30">
                  <input v-model="form.accepteNewsletter" type="checkbox">
                  <span>Je souhaite recevoir la newsletter de l'ONG MDH</span>
                </label>

                <button type="submit" :disabled="isSubmitting" class="btn-one w-100">
                  <i v-if="isSubmitting" class="fa-solid fa-spinner fa-spin me-2"></i>
                  {{ isSubmitting ? 'Envoi en cours...' : 'Soumettre mon adhésion' }}
                </button>
                <p class="text-center fs-16 mt-20 mb-0">Les champs marqués d'un astérisque (*) sont obligatoires</p>
              </form>

              <div v-if="submitSuccess" class="mdh-alert success" role="status">
                <h5 class="mb-2"><i class="fa-solid fa-circle-check me-2"></i>Adhésion enregistrée !</h5>
                <p class="mb-15">Merci de votre adhésion. Un email de confirmation a été envoyé à votre adresse. Nous vous accueillerons bientôt dans notre communauté !</p>
                <router-link to="/adhesion" class="btn-two xs">Retour à la page Adhésion</router-link>
              </div>

              <div v-if="submitError" class="mdh-alert error" role="alert">
                <h5 class="mb-2"><i class="fa-solid fa-circle-exclamation me-2"></i>Erreur lors de l'envoi</h5>
                <p class="mb-0">{{ submitError }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

const types = [
  { value: 'individuelle', label: 'Adhésion Individuelle', hint: 'Pour personnes physiques' },
  { value: 'famille', label: 'Adhésion Famille', hint: "Pour familles engagées (jusqu'à 4 personnes)" },
  { value: 'entreprise', label: 'Adhésion Entreprise', hint: 'Pour entreprises et organisations' }
]

const domaines = [
  { value: 'education', label: 'Éducation' },
  { value: 'sante', label: 'Santé' },
  { value: 'agriculture', label: 'Agriculture' },
  { value: 'environnement', label: 'Environnement' },
  { value: 'gouvernance', label: 'Gouvernance' },
  { value: 'autre', label: 'Autre' }
]

const emptyForm = () => ({
  typeAdhesion: 'individuelle',
  // Informations personnelles
  prenom: '',
  nom: '',
  email: '',
  telephone: '',
  adresse: '',
  dateNaissance: '',
  genre: '',
  // Informations professionnelles
  profession: '',
  lieuTravail: '',
  secteur: '',
  // Adhésion Famille
  membresFamily: [
    { prenom: '', nom: '', relation: '', age: '' },
    { prenom: '', nom: '', relation: '', age: '' },
    { prenom: '', nom: '', relation: '', age: '' }
  ],
  // Adhésion Entreprise
  entreprise: {
    nom: '',
    registre: '',
    employes: '',
    adresse: '',
    telephone: '',
    email: ''
  },
  // Motivations
  motivation: '',
  domaines: [],
  competences: '',
  // Acceptations
  accepteReglement: false,
  accepteConditions: false,
  acceptePhotos: false,
  accepteNewsletter: false
})

const form = ref(emptyForm())

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(null)

const handleSubmit = async () => {
  submitSuccess.value = false

  // Validation
  if (!form.value.prenom || !form.value.nom || !form.value.email || !form.value.telephone || !form.value.motivation) {
    submitError.value = 'Veuillez remplir tous les champs obligatoires'
    return
  }

  if (!form.value.accepteReglement || !form.value.accepteConditions) {
    submitError.value = 'Veuillez accepter le règlement et les conditions d\'adhésion'
    return
  }

  isSubmitting.value = true
  submitError.value = null

  try {
    // Préparer les données du formulaire
    const formData = {
      'Type d\'adhésion': form.value.typeAdhesion,
      'Prénom': form.value.prenom,
      'Nom': form.value.nom,
      'Email': form.value.email,
      'Téléphone': form.value.telephone,
      'Adresse': form.value.adresse,
      'Date de naissance': form.value.dateNaissance,
      'Genre': form.value.genre,
      'Profession': form.value.profession,
      'Lieu de travail': form.value.lieuTravail,
      'Secteur d\'activité': form.value.secteur,
      'Motivation': form.value.motivation,
      'Domaines d\'intérêt': form.value.domaines.join(', '),
      'Compétences': form.value.competences,
      'Accepte règlement': form.value.accepteReglement ? 'Oui' : 'Non',
      'Accepte conditions': form.value.accepteConditions ? 'Oui' : 'Non',
      'Accepte photos': form.value.acceptePhotos ? 'Oui' : 'Non',
      'Newsletter': form.value.accepteNewsletter ? 'Oui' : 'Non'
    }

    // Ajouter les informations supplémentaires si applicable
    if (form.value.typeAdhesion === 'famille') {
      form.value.membresFamily.forEach((membre, index) => {
        if (membre.prenom || membre.nom) {
          formData[`Membre ${index + 2} - Prénom`] = membre.prenom
          formData[`Membre ${index + 2} - Nom`] = membre.nom
          formData[`Membre ${index + 2} - Relation`] = membre.relation
          formData[`Membre ${index + 2} - Âge`] = membre.age
        }
      })
    }

    if (form.value.typeAdhesion === 'entreprise') {
      formData['Nom entreprise'] = form.value.entreprise.nom
      formData['RCCM/NINEA'] = form.value.entreprise.registre
      formData['Nombre employés'] = form.value.entreprise.employes
      formData['Adresse entreprise'] = form.value.entreprise.adresse
      formData['Téléphone entreprise'] = form.value.entreprise.telephone
      formData['Email entreprise'] = form.value.entreprise.email
    }

    // Envoyer à Formspree
    const response = await fetch('https://formspree.io/f/movwrnad', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      submitSuccess.value = true
      form.value = emptyForm()
    } else {
      submitError.value = 'Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer.'
    }
  } catch (error) {
    console.error('Erreur:', error)
    submitError.value = 'Une erreur est survenue. Veuillez réessayer plus tard.'
  } finally {
    isSubmitting.value = false
  }
}
</script>
