<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-16 bg-gray-100 px-4 py-12 mt-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('/images/image1.jpg');"></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Contactez-nous</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Une question ? Un projet ? N'hésitez pas à nous contacter. Nous sommes là pour vous répondre.
        </p>
      </div>
    </section>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-4 pb-20">
      <!-- Contact Form -->
      <section class="bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200">
        <h2 class="text-2xl font-bold text-[#090e15] mb-6">Formulaire de contact</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label class="block text-[#090e15] mb-2 font-semibold" for="firstname">Prénom</label>
              <input 
                type="text" 
                id="firstname" 
                v-model="form.firstname"
                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#090e15] focus:border-[#090e15] bg-gray-50"
                required
              >
            </div>
            <div>
              <label class="block text-[#090e15] mb-2 font-semibold" for="lastname">Nom</label>
              <input 
                type="text" 
                id="lastname" 
                v-model="form.lastname"
                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#090e15] focus:border-[#090e15] bg-gray-50"
                required
              >
            </div>
          </div>

          <div>
            <label class="block text-[#090e15] mb-2 font-semibold" for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="form.email"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#090e15] focus:border-[#090e15] bg-gray-50"
              required
            >
          </div>

          <div>
            <label class="block text-[#090e15] mb-2 font-semibold" for="subject">Sujet</label>
            <select 
              id="subject" 
              v-model="form.subject"
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#090e15] focus:border-[#090e15] bg-gray-50"
              required
            >
              <option value="">Choisissez un sujet</option>
              <option value="general">Question générale</option>
              <option value="donation">Question sur les dons</option>
              <option value="volunteer">Devenir bénévole</option>
              <option value="partnership">Proposition de partenariat</option>
              <option value="press">Contact presse</option>
              <option value="other">Autre</option>
            </select>
          </div>

          <div>
            <label class="block text-[#090e15] mb-2 font-semibold" for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message"
              rows="6" 
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#090e15] focus:border-[#090e15] bg-gray-50"
              required
            ></textarea>
          </div>

          <div class="flex items-start">
            <div class="flex items-center h-5">
              <input 
                id="privacy" 
                v-model="form.privacy"
                type="checkbox" 
                class="mr-2 rounded border-gray-300 focus:ring-[#090e15]"
                required
              >
            </div>
            <label class="text-sm text-gray-500" for="privacy">
              J'accepte que mes données soient traitées pour la gestion de ma demande de contact
            </label>
          </div>

          <button 
            type="submit" 
            class="bg-[#090e15] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-400 hover:text-[#090e15] transition duration-300 w-full md:w-auto"
          >
            Envoyer le message
          </button>
        </form>

        <div v-if="submitted" class="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
          <i class="fas fa-check-circle mr-2"></i> Message envoyé avec succès !
        </div>
      </section>

      <!-- Contact Info -->
      <section>
        <div class="grid grid-cols-1 gap-8">
          <!-- Image and Quick Info -->
          <div class="bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200 overflow-hidden">
            <img src="/images/votreecole.jpg" alt="Siège de MDH" class="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 class="text-2xl font-bold text-[#090e15] mb-2">Nos Locaux</h3>
            <p class="text-gray-600">Visitez notre siège pour discuter de nos projets et nos missions.</p>
          </div>

          <!-- Phone -->
          <div class="bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200">
            <h3 class="text-2xl font-bold text-[#090e15] mb-6 flex items-center">
              <i class="fas fa-phone text-yellow-400 text-3xl mr-4"></i>
              Téléphone
            </h3>
            <p class="text-lg text-gray-700 font-semibold">+228 XX XX XX XX</p>
            <p class="text-gray-600">Disponible du lundi au vendredi de 8h à 18h</p>
          </div>

          <!-- Email -->
          <div class="bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200">
            <h3 class="text-2xl font-bold text-[#090e15] mb-6 flex items-center">
              <i class="fas fa-envelope text-yellow-400 text-3xl mr-4"></i>
              Email
            </h3>
            <p class="text-lg text-gray-700 font-semibold">contact@mdh-togo.org</p>
            <p class="text-gray-600">Nous répondons sous 24-48 heures</p>
          </div>

          <!-- Address -->
          <div class="bg-white/90 rounded-3xl shadow-2xl p-8 border border-gray-200">
            <h3 class="text-2xl font-bold text-[#090e15] mb-6 flex items-center">
              <i class="fas fa-map-marker-alt text-yellow-400 text-3xl mr-4"></i>
              Adresse
            </h3>
            <p class="text-lg text-gray-700 font-semibold">Lomé, Togo</p>
            <p class="text-gray-600">Quartier/Rue principal</p>
          </div>
        </div>
      </section>
    </div>

    <!-- Map Section -->
    <section class="bg-gray-200 py-12 mt-12">
      <div class="max-w-7xl mx-auto px-4">
        <h3 class="text-2xl font-bold mb-6 text-[#090e15]">Nous Localiser</h3>
        <div class="w-full h-96 bg-gray-300 rounded-lg flex items-center justify-center">
          <p class="text-gray-600 text-lg">
            <i class="fas fa-map mr-2"></i>
            Carte Google Maps à intégrer
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  firstname: '',
  lastname: '',
  email: '',
  subject: '',
  message: '',
  privacy: false
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  
  setTimeout(() => {
    form.value = { firstname: '', lastname: '', email: '', subject: '', message: '', privacy: false }
    submitted.value = false
  }, 3000)
}
</script>
