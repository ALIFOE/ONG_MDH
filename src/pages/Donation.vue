<script setup>
import { ref } from 'vue'
import imageEcole4 from '@/assets/images/image ecole 4 MDH.jpg'

const form = ref({
  amount: '',
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  message: ''
})

const submitted = ref(false)

const handleSubmit = () => {
  submitted.value = true
  
  setTimeout(() => {
    form.value = { amount: '', firstname: '', lastname: '', email: '', phone: '', message: '' }
    submitted.value = false
  }, 3000)
}
</script>

<template>
  <div>
    <!-- Hero Section - Redesigned with gradient -->
    <section class="relative overflow-hidden py-20 lg:py-32 mt-24">
      <div class="absolute inset-0 bg-cover bg-center opacity-40" :style="{backgroundImage: `url(${imageEcole4})`}"></div>
      <div class="absolute inset-0 bg-gradient-to-br from-[#090e15] via-[#334155] to-[#0f172a] opacity-85"></div>
      
      <div class="relative container mx-auto px-4 text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-[#090e15] mb-6 leading-tight">
          Transformez une vie<br>
          <span class="text-yellow-400">par votre générosité</span>
        </h1>
        <p class="text-xl md:text-2xl text-[#090e15] max-w-3xl mx-auto mb-8 leading-relaxed">
          Votre contribution soutient directement nos projets d'éducation, de santé et de développement durable au Togo.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#donation-form" class="px-8 py-4 bg-yellow-400 text-[#090e15] rounded-full font-bold text-lg hover:bg-white shadow-lg transition duration-300 inline-block">
            Donner maintenant
          </a>
          <a href="#impact" class="px-8 py-4 bg-[#090e15] text-white rounded-full font-bold text-lg hover:bg-gray-900 backdrop-blur-sm transition duration-300 inline-block">
            Voir l'impact
          </a>
        </div>
      </div>
    </section>

    <!-- Donation Form Section -->
    <section id="donation-form" class="bg-gradient-to-b from-gray-50 to-white py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-4xl font-bold text-center mb-4 text-[#090e15]">
            Faites un don <span class="text-yellow-400">dès maintenant</span>
          </h2>
          <p class="text-center text-gray-600 mb-12">
            Remplissez le formulaire ci-dessous pour effectuer votre contribution sécurisée.
          </p>

          <form @submit.prevent="handleSubmit" class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
            <!-- Donation Amount Input -->
            <div class="mb-8">
              <label class="block text-[#090e15] font-bold mb-4 text-lg" for="donation-amount">Montant du don (€) <span class="text-red-500">*</span></label>
              <input 
                type="number" 
                id="donation-amount" 
                v-model="form.amount"
                min="1" 
                step="0.01" 
                placeholder="Entrez le montant de votre choix..." 
                class="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300" 
                required
              >
            </div>

            <!-- Personal Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label class="block text-[#090e15] font-semibold mb-2" for="firstname">Prénom <span class="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="firstname" 
                  v-model="form.firstname"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300" 
                  required
                >
              </div>
              <div>
                <label class="block text-[#090e15] font-semibold mb-2" for="lastname">Nom <span class="text-red-500">*</span></label>
                <input 
                  type="text" 
                  id="lastname" 
                  v-model="form.lastname"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300" 
                  required
                >
              </div>
              <div>
                <label class="block text-[#090e15] font-semibold mb-2" for="email">Email <span class="text-red-500">*</span></label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300" 
                  required
                >
              </div>
              <div>
                <label class="block text-[#090e15] font-semibold mb-2" for="phone">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="form.phone"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300"
                >
              </div>
            </div>

            <!-- Message -->
            <div class="mb-8">
              <label class="block text-[#090e15] font-semibold mb-2" for="message">Message (optionnel)</label>
              <textarea 
                id="message" 
                v-model="form.message"
                rows="3" 
                placeholder="Partagez vos motivations..." 
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-200 transition duration-300"
              ></textarea>
            </div>

            <!-- Submit -->
            <button 
              type="submit" 
              class="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-[#090e15] font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-lg"
            >
              <i class="fas fa-heart mr-2"></i> Procéder au paiement PayPal
            </button>

            <p class="text-center text-gray-500 text-sm mt-4">
              <i class="fas fa-lock text-green-500 mr-1"></i> Paiement sécurisé via PayPal
            </p>
          </form>

          <!-- PayPal Direct Link -->
          <div class="mt-8 text-center">
            <p class="text-gray-600 mb-4 font-semibold">Ou donnez directement via PayPal:</p>
            <a href="https://www.paypal.com/mep/dashboard" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#0070ba] to-[#003087] text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
              <i class="fab fa-paypal text-xl"></i>
              Donner sur PayPal
            </a>
            <p class="text-xs text-gray-500 mt-3">Lien sécurisé PayPal - Ouvre dans une nouvelle fenêtre</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Direct Payment Section -->
    <section class="container mx-auto px-4 py-20">
      <h2 class="text-4xl font-bold text-center mb-4 text-[#090e15]">
        Autres moyens de <span class="text-yellow-400">contribuer</span>
      </h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-16">
        Si vous préférez, vous pouvez nous soutenir par virement bancaire ou Mobile Money directement.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <!-- Virement Bancaire -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-400">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
              <i class="fas fa-university text-xl text-blue-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-[#090e15]">Virement Bancaire</h3>
          </div>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 font-semibold">Banque</p>
              <p class="text-lg font-bold text-[#090e15]">IBANK</p>
            </div>
            <div>
              <p class="text-sm text-gray-600 font-semibold">Titulaire</p>
              <p class="text-lg font-bold text-[#090e15]">Mode Humain International</p>
            </div>
            <div>
              <p class="text-sm text-gray-600 font-semibold">IBAN</p>
              <p class="font-mono text-[#090e15] break-all bg-gray-100 p-3 rounded-lg">TG80370240103902769900010133</p>
            </div>
          </div>
        </div>

        <!-- Mobile Money -->
        <div class="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-green-400">
          <div class="flex items-center mb-6">
            <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
              <i class="fas fa-mobile-alt text-xl text-green-500"></i>
            </div>
            <h3 class="text-2xl font-bold text-[#090e15]">Mobile Money</h3>
          </div>
          <div class="space-y-4">
            <div>
              <p class="text-sm text-gray-600 font-semibold">Mix by YAs</p>
              <p class="text-lg font-bold text-[#090e15] bg-gray-100 p-3 rounded-lg">+228 92 12 95 49</p>
            </div>
            <div>
              <p class="text-sm text-gray-600 font-semibold">Note</p>
              <p class="text-gray-700">Référence: MDH Donation</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

