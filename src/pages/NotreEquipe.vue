<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center bg-gray-100 py-12 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-extrabold text-[#090e15] mb-4 tracking-tight">
          <span class="text-[#fbbf24]">Notre équipe</span>
        </h1>
        <div class="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full mb-8"></div>
        <p class="text-lg text-gray-700 max-w-2xl mx-auto">
          Découvrez les membres du Conseil d'Administration, du Bureau Exécutif, ainsi que nos bénévoles et partenaires qui font vivre L'Organisation MDH.
        </p>
      </div>
    </section>

    <!-- Conseil d'Administration Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-[#090e15]">Conseil d'Administration (CA)</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- Président -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-blue-300 to-blue-100 h-56 flex items-center justify-center">
              <img src="/images/image parrain.png" alt="Prof N'kERE komi" class="h-56 w-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">Prof N'kERE komi</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Président</p>
              <p class="text-gray-700">Enseignant chercheur à l'UL/Kara.</p>
            </div>
          </div>

          <!-- Secrétaire Général -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-purple-300 to-purple-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-purple-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">TOHOULEBA Koboyo</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Secrétaire Général</p>
              <p class="text-gray-700">----</p>
            </div>
          </div>

          <!-- Trésorière -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-pink-300 to-pink-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-pink-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">DZOMEDA Adjo Elom</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Trésorière</p>
              <p class="text-gray-700">Entrepreneuse.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Bureau Exécutif Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-8 text-[#090e15]">Bureau Exécutif</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <!-- Directeur Exécutif -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-green-300 to-green-100 h-56 flex items-center justify-center">
              <img src="/images/saoute2.jpg" alt="ATARMILA Saoute" class="h-56 w-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">ATARMILA Saoute</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Directeur Exécutif</p>
              <p class="text-gray-700">---.</p>
            </div>
          </div>

          <!-- Assistant Administratif -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-orange-300 to-orange-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-orange-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">AGBOKOU Paul</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Assistant Administratif</p>
              <p class="text-gray-700">---.</p>
            </div>
          </div>

          <!-- Chargé de projet -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-indigo-300 to-indigo-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-indigo-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">N'DAH Lafoh</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Chargé de projet</p>
              <p class="text-gray-700">---.</p>
            </div>
          </div>

          <!-- Comptable -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-red-300 to-red-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-red-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">YAKOUBA Djibril</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">Comptable</p>
              <p class="text-gray-700">---.</p>
            </div>
          </div>

          <!-- IT & web support Technician -->
          <div class="bg-white/90 rounded-2xl shadow-xl overflow-hidden border border-[#090e15]/10">
            <div class="bg-gradient-to-br from-cyan-300 to-cyan-100 h-56 flex items-center justify-center">
              <i class="fas fa-user text-5xl text-cyan-500 opacity-50"></i>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-[#090e15]">Baudoin Kokou ALIFOE</h3>
              <p class="text-[#fbbf24] mb-2 font-semibold">IT & web support Technician</p>
              <p class="text-gray-700">Développeur web mobile.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-6 text-[#090e15]">Rejoignez-nous !</h2>
        <p class="text-gray-700 text-lg mb-8">
          Grâce à notre dédication collective et à notre équipe de bénévoles, nous accomplissons chaque jour des actions qui changent les vies.
        </p>
        <router-link to="/rejoindre" class="inline-block bg-gradient-to-r from-[#fbbf24] to-orange-400 text-[#090e15] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
          <i class="fas fa-heart mr-2"></i> Devenir bénévole
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// Notre Équipe page component
</script>
