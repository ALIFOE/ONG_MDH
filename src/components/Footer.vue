<template>
  <footer class="bg-[#090e15] text-white pt-12 pb-6 mt-12">
    <div class="max-w-7xl mx-auto px-4">
      <!-- Footer Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <!-- About Section -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-[#fbbf24]">À propos de MDH</h3>
          <img src="/images/logo_mdh.png" alt="MDH Logo" class="h-10 w-auto mb-4">
          <p class="text-gray-300 text-sm leading-relaxed">
            MDH œuvre pour le développement humain à travers l'éducation et le soutien aux communautés vulnérables.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-[#fbbf24]">Liens Rapides</h3>
          <ul class="space-y-2">
            <li><router-link to="/association" class="text-gray-300 hover:text-[#fbbf24] transition">L'Organisation</router-link></li>
            <li><router-link to="/actions" class="text-gray-300 hover:text-[#fbbf24] transition">Nos Actions</router-link></li>
            <li><router-link to="/ecole" class="text-gray-300 hover:text-[#fbbf24] transition">Notre École</router-link></li>
            <li><router-link to="/actualites" class="text-gray-300 hover:text-[#fbbf24] transition">Actualités</router-link></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-[#fbbf24]">Contact</h3>
          <ul class="space-y-3 text-sm text-gray-300">
            <li class="flex items-start">
              <i class="fas fa-envelope mr-3 mt-1 text-[#fbbf24]"></i>
              <span>Email: modehumain@gmail.com</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-phone mr-3 mt-1 text-[#fbbf24]"></i>
              <span>Tél: +228 92 12 95 49</span>
            </li>
            <li class="flex items-start">
              <i class="fas fa-map-marker-alt mr-3 mt-1 text-[#fbbf24]"></i>
              <span>Adresse: Aflao-Sagbado (Apedokoè), Lomé, Togo</span>
            </li>
          </ul>
        </div>

        <!-- Social Media -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-[#fbbf24]">Suivez-nous</h3>
          <div class="flex space-x-4">
            <a href="https://www.facebook.com/mdhtogoofficial" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#fbbf24] text-[#090e15] rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/mdhtogo" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#fbbf24] text-[#090e15] rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/mdhtogo" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#fbbf24] text-[#090e15] rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/mdh-togo" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-[#fbbf24] text-[#090e15] rounded-full flex items-center justify-center hover:bg-white transition">
              <i class="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <hr class="border-gray-700 my-8">

      <!-- Bottom Footer -->
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-400 text-sm mb-4 md:mb-0">
          &copy; 2025 MDH International Togo. Tous droits réservés.
        </p>
        <!-- <div class="flex space-x-6 text-gray-400 text-sm">
          <a href="#" class="hover:text-[#fbbf24] transition">Politique de confidentialité</a>
          <a href="#" class="hover:text-[#fbbf24] transition">Conditions d'utilisation</a>
          <a href="#" class="hover:text-[#fbbf24] transition">Mentions légales</a>
        </div> -->
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component - no state needed
</script>

<style scoped>
footer a {
  transition: color 0.3s ease;
}
</style>
