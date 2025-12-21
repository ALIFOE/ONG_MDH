<script setup>
import imageParrain from '@/assets/images/image parrain.png'
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center bg-gray-100 py-12 mt-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-cover bg-center opacity-20" :style="{backgroundImage: `url(${imageParrain})`}"></div>
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <h1 class="text-5xl font-extrabold text-[#090e15] mb-4 tracking-tight">Rejoindre-nous</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Devenez bénévole et contribuez à notre mission humanitaire.
        </p>
        <div class="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Form Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4">
        <form action="https://formspree.io/f/mwpbyqgw" method="post" class="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 space-y-6">
          
          <!-- Personal Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Nom <span class="text-red-500">*</span></label>
              <input type="text" name="nom" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Prénom <span class="text-red-500">*</span></label>
              <input type="text" name="prenom" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
          </div>

          <!-- Gender & DOB -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Sexe <span class="text-red-500">*</span></label>
              <select name="sexe" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
                <option value="">Sélectionner</option>
                <option value="Femme">Femme</option>
                <option value="Homme">Homme</option>
              </select>
            </div>
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Date de naissance <span class="text-red-500">*</span></label>
              <input type="date" name="date_naissance" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
          </div>

          <!-- Contact Info -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Email <span class="text-red-500">*</span></label>
              <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Téléphone <span class="text-red-500">*</span></label>
              <input type="tel" name="telephone" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
          </div>

          <!-- Address & Profession -->
          <div>
            <label class="block text-[#090e15] font-semibold mb-2">Adresse postale <span class="text-red-500">*</span></label>
            <input type="text" name="adresse" required class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
          </div>

          <div>
            <label class="block text-[#090e15] font-semibold mb-2">Profession</label>
            <input type="text" name="profession" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
          </div>

          <!-- Sponsorship Type -->
          <div>
            <label class="block text-[#090e15] font-semibold mb-3">Type de parrainage <span class="text-red-500">*</span></label>
            <div class="space-y-2">
              <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-yellow-50 transition">
                <input type="radio" name="type_parrainage" value="Ponctuel" required class="mr-3 accent-[#fbbf24]">
                <span class="font-semibold text-[#090e15]">Ponctuel</span>
              </label>
              <label class="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-yellow-50 transition">
                <input type="radio" name="type_parrainage" value="Régulier" class="mr-3 accent-[#fbbf24]">
                <span class="font-semibold text-[#090e15]">Régulier</span>
              </label>
            </div>
          </div>

          <!-- Child Preferences -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Âge préféré de l'enfant</label>
              <input type="text" name="age_prefere" placeholder="ex : 6-12 ans" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
            </div>
            <div>
              <label class="block text-[#090e15] font-semibold mb-2">Sexe préféré de l'enfant</label>
              <select name="sexe_prefere" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition">
                <option value="">Indifférent</option>
                <option value="Fille">Fille</option>
                <option value="Garçon">Garçon</option>
              </select>
            </div>
          </div>

          <!-- Message -->
          <div>
            <label class="block text-[#090e15] font-semibold mb-2">Message (optionnel)</label>
            <textarea name="message" rows="3" placeholder="Partagez vos motivations..." class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#fbbf24] focus:ring-2 focus:ring-yellow-200 transition"></textarea>
          </div>

          <!-- Checkboxes -->
          <div class="space-y-3">
            <label class="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input type="checkbox" name="rgpd" required class="mr-3 accent-[#fbbf24] mt-1">
              <span class="text-gray-700 text-sm">J'accepte que mes données soient utilisées par l'Organisation MDH conformément à la politique de confidentialité.</span>
            </label>
            <label class="flex items-start p-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition">
              <input type="checkbox" name="engagement" required class="mr-3 accent-[#fbbf24] mt-1">
              <span class="text-gray-700 text-sm">Je m'engage à respecter l'esprit du parrainage et à soutenir l'enfant dans la durée.</span>
            </label>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="w-full bg-gradient-to-r from-[#fbbf24] to-orange-400 text-[#090e15] font-bold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 text-lg">
            <i class="fas fa-heart mr-2"></i> Envoyer ma demande
          </button>

          <p class="text-center text-gray-500 text-sm">
            <i class="fas fa-lock text-green-500 mr-1"></i> Vos informations sont sécurisées
          </p>
        </form>
      </div>
    </section>
  </div>
</template>

