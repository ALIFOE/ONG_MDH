<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12 mt-24">
      <div class="max-w-4xl mx-auto">
        <router-link to="/article/vacances-utiles-2025" class="inline-flex items-center gap-2 text-blue-600 hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour au programme
        </router-link>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Inscription Vacances Utiles 2025</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Inscrivez votre enfant au programme « L'Académie des Super-Enfants »
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Inscription Form Section -->
    <section class="max-w-4xl mx-auto px-4 mb-20">
      <div class="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-12 text-white shadow-xl border-l-4 border-blue-400">
        <h2 class="text-3xl font-bold mb-8 text-center">Formulaire d'Inscription</h2>
        
        <form @submit.prevent="submitInscription" class="space-y-8">
          <!-- Parent Information Section -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <i class="fas fa-user-tie"></i>
              Informations du Parent/Tuteur
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                v-model="form.parentNom" 
                type="text" 
                placeholder="Nom du parent *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <input 
                v-model="form.parentPrenom" 
                type="text" 
                placeholder="Prénom du parent *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <input 
                v-model="form.parentEmail" 
                type="email" 
                placeholder="Email *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <input 
                v-model="form.parentTelephone" 
                type="tel" 
                placeholder="Téléphone *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <input 
                v-model="form.parentAdresse" 
                type="text" 
                placeholder="Adresse *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300 md:col-span-2" 
                required 
              />
              <input 
                v-model="form.parentProfession" 
                type="text" 
                placeholder="Profession" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300 md:col-span-2" 
              />
            </div>
          </div>

          <!-- Child Information Section -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <i class="fas fa-child"></i>
              Informations de l'Enfant
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                v-model="form.enfantNom" 
                type="text" 
                placeholder="Nom de l'enfant *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <input 
                v-model="form.enfantPrenom" 
                type="text" 
                placeholder="Prénom de l'enfant *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <select 
                v-model="form.enfantSexe" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required
              >
                <option value="">Sexe *</option>
                <option value="male">Garçon</option>
                <option value="female">Fille</option>
              </select>
              <input 
                v-model="form.enfantDateNaissance" 
                type="date" 
                placeholder="Date de naissance *" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required 
              />
              <select 
                v-model="form.enfantClasse" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
                required
              >
                <option value="">Classe *</option>
                <option value="cp">CP</option>
                <option value="ce1">CE1</option>
                <option value="ce2">CE2</option>
                <option value="cm1">CM1</option>
                <option value="cm2">CM2</option>
                <option value="6eme">6ème</option>
                <option value="5eme">5ème</option>
                <option value="4eme">4ème</option>
                <option value="3eme">3ème</option>
              </select>
              <select 
                v-model="form.enfantEcole" 
                class="px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300" 
              >
                <option value="">École actuelle</option>
                <option value="ecole-mdh">École MDH</option>
                <option value="autre">Autre école</option>
              </select>
            </div>
          </div>

          <!-- Program Options Section -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <i class="fas fa-calendar-alt"></i>
              Options du Programme
            </h3>
            <div class="space-y-3">
              <div class="flex items-center">
                <input 
                  v-model="form.periodes" 
                  type="checkbox" 
                  value="mercredi" 
                  class="w-4 h-4 rounded"
                  id="mercredi"
                >
                <label for="mercredi" class="ml-3 cursor-pointer">
                  Mercredis à 14h
                </label>
              </div>
              <div class="flex items-center">
                <input 
                  v-model="form.periodes" 
                  type="checkbox" 
                  value="samedi" 
                  class="w-4 h-4 rounded"
                  id="samedi"
                >
                <label for="samedi" class="ml-3 cursor-pointer">
                  Samedis à 14h
                </label>
              </div>
            </div>
            <div class="bg-blue-900 p-4 rounded-lg">
              <p class="text-sm">
                <i class="fas fa-info-circle mr-2"></i>
                Sélectionnez au moins une journée pour que votre enfant participe au programme
              </p>
            </div>
          </div>

          <!-- Special Needs Section -->
          <div class="space-y-6">
            <h3 class="text-2xl font-bold mb-6 flex items-center gap-2">
              <i class="fas fa-star"></i>
              Informations Supplémentaires
            </h3>
            <div class="space-y-3">
              <label class="block">
                <p class="mb-2 font-semibold">Allergies ou restrictions alimentaires :</p>
                <textarea 
                  v-model="form.restrictions" 
                  placeholder="Décrivez les allergies ou restrictions (optionnel)" 
                  rows="3" 
                  class="w-full px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </label>
              <label class="block">
                <p class="mb-2 font-semibold">Besoins spéciaux ou remarques :</p>
                <textarea 
                  v-model="form.besoinsSpeciaux" 
                  placeholder="Décrivez les besoins spéciaux ou autres remarques (optionnel)" 
                  rows="3" 
                  class="w-full px-4 py-3 rounded-lg text-[#090e15] focus:outline-none focus:ring-2 focus:ring-blue-300"
                ></textarea>
              </label>
            </div>
          </div>

          <!-- Agreement Section -->
          <div class="space-y-4 bg-blue-900 p-6 rounded-lg">
            <div class="flex items-start">
              <input 
                v-model="form.acceptTermes" 
                type="checkbox" 
                id="acceptTermes"
                class="w-4 h-4 rounded mt-1"
                required
              >
              <label for="acceptTermes" class="ml-3 text-sm cursor-pointer">
                J'accepte que les données de mon enfant soient traitées pour l'inscription au programme de vacances utiles. Je comprends que l'ONG MDH utilisera ces informations uniquement à des fins pédagogiques et de sécurité. *
              </label>
            </div>
            <div class="flex items-start">
              <input 
                v-model="form.acceptPhotos" 
                type="checkbox" 
                id="acceptPhotos"
                class="w-4 h-4 rounded mt-1"
              >
              <label for="acceptPhotos" class="ml-3 text-sm cursor-pointer">
                J'accepte que des photos de mon enfant soient prises pendant le programme à des fins documentaires et promotionnelles
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <div class="text-center pt-4">
            <button 
              type="submit" 
              :disabled="isSubmitting || form.periodes.length === 0"
              class="px-8 py-4 bg-gradient-to-r from-white to-blue-300 text-slate-900 rounded-full font-bold text-lg hover:from-blue-50 hover:to-blue-400 transition duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i class="fas fa-check mr-2"></i>
              {{ isSubmitting ? 'Inscription en cours...' : 'Inscrire mon enfant' }}
            </button>
            <p class="text-gray-300 text-sm mt-4">* Champs obligatoires</p>
          </div>
        </form>
      </div>
    </section>

    <!-- Program Information Section -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-blue-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">Important à savoir</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-[#090e15] flex items-center gap-2">
              <i class="fas fa-map-marker-alt text-blue-600"></i>
              Lieu
            </h3>
            <p>Siège de l'ONG MDH, Sagbado Apédokoè, Lomé, Togo</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-[#090e15] flex items-center gap-2">
              <i class="fas fa-clock text-blue-600"></i>
              Horaires
            </h3>
            <p>Mercredis et Samedis à 14h</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-[#090e15] flex items-center gap-2">
              <i class="fas fa-heart text-blue-600"></i>
              Prix
            </h3>
            <p>Programme gratuit pour tous les enfants</p>
          </div>
          <div class="space-y-3">
            <h3 class="font-bold text-lg text-[#090e15] flex items-center gap-2">
              <i class="fas fa-envelope text-blue-600"></i>
              Contact
            </h3>
            <p>
              <a href="mailto:modehumain@gmail.com" class="text-blue-600 hover:underline">modehumain@gmail.com</a><br>
              <a href="tel:+22892129549" class="text-blue-600 hover:underline">+228 92 12 95 49</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 max-w-7xl mx-auto px-4 mb-16 text-center text-white">
      <h2 class="text-3xl font-bold mb-4">Des questions ?</h2>
      <p class="text-lg text-blue-100 mb-8">
        Contactez-nous pour plus d'informations sur le programme
      </p>
      <router-link to="/contact" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:bg-blue-50 transition duration-300">
        <i class="fas fa-envelope mr-2"></i>
        Nous contacter
      </router-link>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isSubmitting = ref(false)

const form = ref({
  parentNom: '',
  parentPrenom: '',
  parentEmail: '',
  parentTelephone: '',
  parentAdresse: '',
  parentProfession: '',
  enfantNom: '',
  enfantPrenom: '',
  enfantSexe: '',
  enfantDateNaissance: '',
  enfantClasse: '',
  enfantEcole: '',
  periodes: [],
  restrictions: '',
  besoinsSpeciaux: '',
  acceptTermes: false,
  acceptPhotos: false
})

const submitInscription = async () => {
  isSubmitting.value = true
  
  try {
    // Validation
    if (!form.value.parentNom || !form.value.parentPrenom || !form.value.parentEmail) {
      alert('Veuillez remplir tous les champs obligatoires du parent')
      isSubmitting.value = false
      return
    }

    if (!form.value.enfantNom || !form.value.enfantPrenom || !form.value.enfantSexe || !form.value.enfantDateNaissance) {
      alert('Veuillez remplir tous les champs obligatoires de l\'enfant')
      isSubmitting.value = false
      return
    }

    if (form.value.periodes.length === 0) {
      alert('Veuillez sélectionner au moins une journée de participation')
      isSubmitting.value = false
      return
    }

    if (!form.value.acceptTermes) {
      alert('Vous devez accepter les conditions pour inscrire votre enfant')
      isSubmitting.value = false
      return
    }

    // Préparer les données pour Formspree
    const formData = {
      'Nom du parent': form.value.parentNom,
      'Prénom du parent': form.value.parentPrenom,
      'Email': form.value.parentEmail,
      'Téléphone': form.value.parentTelephone,
      'Adresse': form.value.parentAdresse,
      'Profession': form.value.parentProfession,
      'Nom de l\'enfant': form.value.enfantNom,
      'Prénom de l\'enfant': form.value.enfantPrenom,
      'Sexe': form.value.enfantSexe,
      'Date de naissance': form.value.enfantDateNaissance,
      'Classe': form.value.enfantClasse,
      'École': form.value.enfantEcole,
      'Jours de participation': form.value.periodes.join(', '),
      'Allergies/Restrictions': form.value.restrictions || 'Aucune',
      'Besoins spéciaux': form.value.besoinsSpeciaux || 'Aucun',
      'Accepte conditions': form.value.acceptTermes ? 'Oui' : 'Non',
      'Accepte photos': form.value.acceptPhotos ? 'Oui' : 'Non'
    }

    // Envoyer les données à Formspree
    const response = await fetch('https://formspree.io/f/xwpqqyza', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (!response.ok) {
      throw new Error('Erreur lors de l\'envoi du formulaire')
    }

    // Message de succès
    alert('Inscription réussie ! Merci d\'avoir inscrit votre enfant. Nous vous contacterons bientôt pour confirmer.')
    
    // Réinitialiser le formulaire
    form.value = {
      parentNom: '',
      parentPrenom: '',
      parentEmail: '',
      parentTelephone: '',
      parentAdresse: '',
      parentProfession: '',
      enfantNom: '',
      enfantPrenom: '',
      enfantSexe: '',
      enfantDateNaissance: '',
      enfantClasse: '',
      enfantEcole: '',
      periodes: [],
      restrictions: '',
      besoinsSpeciaux: '',
      acceptTermes: false,
      acceptPhotos: false
    }
    
    // Redirection vers la page précédente ou accueil
    setTimeout(() => {
      router.push('/article/vacances-utiles-2025')
    }, 2000)
  } catch (error) {
    console.error('Erreur lors de l\'inscription:', error)
    alert('Une erreur s\'est produite lors de l\'envoi du formulaire. Veuillez réessayer ou nous contacter directement.')
  } finally {
    isSubmitting.value = false
  }
}
</script>
