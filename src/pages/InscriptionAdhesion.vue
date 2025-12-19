<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-12 bg-gradient-to-br from-yellow-50 via-white to-amber-50 px-4 py-12 mt-24">
      <div class="max-w-4xl mx-auto">
        <span class="inline-block px-4 py-2 bg-yellow-200 text-yellow-800 rounded-full text-sm font-bold mb-4">Formulaire d'Adhésion</span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Complétez votre Adhésion</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Remplissez ce formulaire pour devenir membre officiel de l'ONG MDH
        </p>
      </div>
    </section>

    <!-- Form Section -->
    <section class="mb-16 max-w-3xl mx-auto px-4">
      <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <!-- Type d'Adhésion -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Type d'Adhésion</h2>
          <div class="space-y-4">
            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-yellow-600 transition" :class="{ 'border-yellow-600 bg-yellow-50': form.typeAdhesion === 'individuelle' }">
              <input v-model="form.typeAdhesion" type="radio" value="individuelle" class="w-5 h-5 text-yellow-600">
              <span class="ml-4">
                <span class="font-bold text-[#090e15]">Adhésion Individuelle</span>
                <span class="block text-sm text-gray-600">Pour personnes physiques</span>
              </span>
            </label>
            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-yellow-600 transition" :class="{ 'border-yellow-600 bg-yellow-50': form.typeAdhesion === 'famille' }">
              <input v-model="form.typeAdhesion" type="radio" value="famille" class="w-5 h-5 text-yellow-600">
              <span class="ml-4">
                <span class="font-bold text-[#090e15]">Adhésion Famille</span>
                <span class="block text-sm text-gray-600">Pour familles engagées (jusqu'à 4 personnes)</span>
              </span>
            </label>
            <label class="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-yellow-600 transition" :class="{ 'border-yellow-600 bg-yellow-50': form.typeAdhesion === 'entreprise' }">
              <input v-model="form.typeAdhesion" type="radio" value="entreprise" class="w-5 h-5 text-yellow-600">
              <span class="ml-4">
                <span class="font-bold text-[#090e15]">Adhésion Entreprise</span>
                <span class="block text-sm text-gray-600">Pour entreprises et organisations</span>
              </span>
            </label>
          </div>
        </div>

        <!-- Informations Personnelles -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Informations Personnelles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
              <input v-model="form.prenom" type="text" placeholder="Votre prénom" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition" required>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
              <input v-model="form.nom" type="text" placeholder="Votre nom" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition" required>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email *</label>
              <input v-model="form.email" type="email" placeholder="votre@email.com" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition" required>
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Téléphone *</label>
              <input v-model="form.telephone" type="tel" placeholder="+228 92 12 95 49" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition" required>
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Adresse</label>
              <input v-model="form.adresse" type="text" placeholder="Votre adresse complète" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Date de Naissance</label>
              <input v-model="form.dateNaissance" type="date" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Genre</label>
              <select v-model="form.genre" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
                <option value="">-- Sélectionner --</option>
                <option value="masculin">Masculin</option>
                <option value="feminin">Féminin</option>
                <option value="autre">Autre</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Informations Professionnelles -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Informations Professionnelles</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Profession</label>
              <input v-model="form.profession" type="text" placeholder="Votre profession" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Lieu de Travail</label>
              <input v-model="form.lieuTravail" type="text" placeholder="Votre lieu de travail" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Secteur d'Activité</label>
              <select v-model="form.secteur" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
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

        <!-- Informations Spécifiques à l'Adhésion Famille -->
        <div v-if="form.typeAdhesion === 'famille'" class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Membres de la Famille</h2>
          <p class="text-gray-700 mb-4">Vous avez sélectionné l'adhésion famille. Indiquez les autres membres (jusqu'à 3)</p>
          <div class="space-y-4">
            <div v-for="(membre, index) in form.membresFamilie" :key="index" class="border-2 border-gray-200 rounded-lg p-4">
              <h3 class="font-semibold text-[#090e15] mb-4">Membre {{ index + 2 }}</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Prénom</label>
                  <input v-model="membre.prenom" type="text" placeholder="Prénom" class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Nom</label>
                  <input v-model="membre.nom" type="text" placeholder="Nom" class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Relation avec le principal adhérent</label>
                  <select v-model="membre.relation" class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
                    <option value="">-- Sélectionner --</option>
                    <option value="conjoint">Conjoint(e)</option>
                    <option value="enfant">Enfant</option>
                    <option value="parent">Parent</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-2">Âge</label>
                  <input v-model="membre.age" type="number" placeholder="Âge" class="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Informations Spécifiques à l'Adhésion Entreprise -->
        <div v-if="form.typeAdhesion === 'entreprise'" class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Informations Entreprise</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nom de l'Entreprise *</label>
              <input v-model="form.entreprise.nom" type="text" placeholder="Nom de l'entreprise" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">RCCM/NINEA</label>
              <input v-model="form.entreprise.registre" type="text" placeholder="Numéro RCCM ou NINEA" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Nombre d'Employés</label>
              <input v-model="form.entreprise.employes" type="number" placeholder="Nombre d'employés" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div class="md:col-span-2">
              <label class="block text-sm font-semibold text-gray-700 mb-2">Adresse de l'Entreprise</label>
              <input v-model="form.entreprise.adresse" type="text" placeholder="Adresse complète" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Téléphone Entreprise</label>
              <input v-model="form.entreprise.telephone" type="tel" placeholder="Téléphone" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
            <div>
              <label class="block text-sm font-semibold text-gray-700 mb-2">Email Entreprise</label>
              <input v-model="form.entreprise.email" type="email" placeholder="Email entreprise" class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition">
            </div>
          </div>
        </div>

        <!-- Motivations et Intérêts -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Motivations et Intérêts</h2>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Pourquoi souhaitez-vous rejoindre l'ONG MDH ? *</label>
            <textarea v-model="form.motivation" placeholder="Décrivez vos motivations..." class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition resize-none" rows="4" required></textarea>
          </div>
          <div class="mt-6">
            <label class="block text-sm font-semibold text-gray-700 mb-3">Domaines d'Intérêt</label>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="education" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Éducation</span>
              </label>
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="sante" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Santé</span>
              </label>
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="agriculture" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Agriculture</span>
              </label>
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="environnement" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Environnement</span>
              </label>
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="gouvernance" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Gouvernance</span>
              </label>
              <label class="flex items-center">
                <input v-model="form.domaines" type="checkbox" value="autre" class="w-4 h-4 text-yellow-600">
                <span class="ml-3 text-gray-700">Autre</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Compétences et Expérience -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Compétences et Expérience</h2>
          <div>
            <label class="block text-sm font-semibold text-gray-700 mb-3">Décrivez vos compétences et expériences pertinentes</label>
            <textarea v-model="form.competences" placeholder="Compétences, formations, expériences pertinentes..." class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-600 transition resize-none" rows="4"></textarea>
          </div>
        </div>

        <!-- Acceptations -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold text-[#090e15] mb-6 pb-4 border-b-2 border-yellow-600">Consentements et Acceptations</h2>
          <div class="space-y-4">
            <label class="flex items-start cursor-pointer">
              <input v-model="form.accepteReglement" type="checkbox" class="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" required>
              <span class="ml-3 text-gray-700">
                <span class="font-semibold">J'accepte le règlement interne de l'ONG MDH *</span>
              </span>
            </label>
            <label class="flex items-start cursor-pointer">
              <input v-model="form.accepteConditions" type="checkbox" class="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" required>
              <span class="ml-3 text-gray-700">
                <span class="font-semibold">J'accepte les conditions d'adhésion *</span>
              </span>
            </label>
            <label class="flex items-start cursor-pointer">
              <input v-model="form.acceptePhotos" type="checkbox" class="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0">
              <span class="ml-3 text-gray-700">
                <span class="font-semibold">J'accepte que mes photos soient utilisées</span>
              </span>
            </label>
            <label class="flex items-start cursor-pointer">
              <input v-model="form.accepteNewsletter" type="checkbox" class="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0">
              <span class="ml-3 text-gray-700">
                <span class="font-semibold">Je souhaite recevoir la newsletter de l'ONG MDH</span>
              </span>
            </label>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="pt-8 border-t-2 border-gray-200">
          <button type="submit" :disabled="isSubmitting" class="w-full px-8 py-4 bg-gradient-to-r from-yellow-600 to-emerald-600 text-white rounded-lg font-bold text-lg hover:from-yellow-700 hover:to-amber-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            <span v-if="isSubmitting" class="inline-block animate-spin">
              <i class="fas fa-spinner"></i>
            </span>
            <span>{{ isSubmitting ? 'Envoi en cours...' : 'Soumettre mon adhésion' }}</span>
          </button>
          <p class="text-center text-gray-600 text-sm mt-4">
            Les champs marqués d'un astérisque (*) sont obligatoires
          </p>
        </div>
      </form>

      <!-- Success Message -->
      <div v-if="submitSuccess" class="mt-8 bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-lg">
        <div class="flex items-start gap-4">
          <i class="fas fa-check-circle text-3xl text-yellow-600 flex-shrink-0"></i>
          <div>
            <h3 class="text-xl font-bold text-yellow-800 mb-2">Adhésion Enregistrée !</h3>
            <p class="text-yellow-700">
              Merci de votre adhésion. Un email de confirmation a été envoyé à votre adresse. Nous vous accueillerons bientôt dans notre communauté !
            </p>
            <router-link to="/adhesion" class="inline-block mt-4 px-6 py-2 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition">
              Retour à la page Adhésion
            </router-link>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="submitError" class="mt-8 bg-red-50 border-l-4 border-red-600 p-6 rounded-lg">
        <div class="flex items-start gap-4">
          <i class="fas fa-exclamation-circle text-3xl text-red-600 flex-shrink-0"></i>
          <div>
            <h3 class="text-xl font-bold text-red-800 mb-2">Erreur lors de l'envoi</h3>
            <p class="text-red-700">
              {{ submitError }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = ref({
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

const isSubmitting = ref(false)
const submitSuccess = ref(false)
const submitError = ref(null)

const handleSubmit = async () => {
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
      // Réinitialiser le formulaire
      form.value = {
        typeAdhesion: 'individuelle',
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        adresse: '',
        dateNaissance: '',
        genre: '',
        profession: '',
        lieuTravail: '',
        secteur: '',
        membresFamily: [
          { prenom: '', nom: '', relation: '', age: '' },
          { prenom: '', nom: '', relation: '', age: '' },
          { prenom: '', nom: '', relation: '', age: '' }
        ],
        entreprise: {
          nom: '',
          registre: '',
          employes: '',
          adresse: '',
          telephone: '',
          email: ''
        },
        motivation: '',
        domaines: [],
        competences: '',
        accepteReglement: false,
        accepteConditions: false,
        acceptePhotos: false,
        accepteNewsletter: false
      }
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

