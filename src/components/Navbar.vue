<template>
  <header class="bg-white shadow-md fixed w-full z-50 border-b-2 border-[#fbbf24]/20 transition-all duration-300">
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <router-link to="/" class="flex items-center gap-2 group" aria-label="Retour à l'accueil">
            <img src="/images/logo_mdh.png" alt="MDH International Togo" class="h-14 w-auto object-contain group-hover:opacity-80 transition">
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center gap-1">
          <a href="/" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Accueil</a>
          
          <!-- Organisation Dropdown -->
          <div class="relative group">
            <button class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 flex items-center gap-1 group-hover:text-[#fbbf24] group-hover:bg-[#fbbf24]/5">
              L'Organisation
              <svg class="w-4 h-4 transition group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50">
              <router-link to="/association" class="flex items-center gap-2 px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] first:rounded-t-xl font-medium transition">
                <i class="fas fa-building w-4"></i>L'Organisation
              </router-link>
              <router-link to="/notre-equipe" class="flex items-center gap-2 px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] last:rounded-b-xl font-medium transition">
                <i class="fas fa-users w-4"></i>Notre équipe
              </router-link>
            </div>
          </div>

          <router-link to="/actions" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Nos Actions</router-link>
          <router-link to="/benevole" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Bénévole</router-link>
          <router-link to="/adhesion" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Adhésion</router-link>
          <router-link to="/ecole" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">L'École</router-link>
          <router-link to="/actualites" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Actualités</router-link>
          <router-link to="/galerie" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Galerie</router-link>
          <router-link to="/contact" class="px-3 py-2 rounded-lg font-semibold text-[#090e15] transition-all duration-300 hover:text-[#fbbf24] hover:bg-[#fbbf24]/5">Contact</router-link>
        </div>

        <!-- Donation Button -->
        <div class="hidden lg:flex items-center gap-4">
          <router-link to="/donation" class="px-6 py-2.5 bg-gradient-to-r from-[#fbbf24] to-orange-400 text-[#090e15] rounded-full font-bold hover:shadow-lg hover:shadow-[#fbbf24]/40 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2 whitespace-nowrap">
            <i class="fas fa-heart"></i>Donner
          </router-link>
        </div>

        <!-- Mobile Navigation Toggle -->
        <div class="lg:hidden flex items-center gap-3">
          <router-link to="/donation" class="px-3 py-2 bg-[#fbbf24] text-[#090e15] rounded-lg font-bold hover:shadow-md transition text-sm">
            Donner
          </router-link>
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="p-2.5 rounded-lg hover:bg-gray-100 focus:outline-none transition"
            :aria-expanded="mobileMenuOpen"
            aria-label="Menu"
          >
            <svg class="h-6 w-6 text-[#090e15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <transition name="slide-down">
        <div v-if="mobileMenuOpen" class="lg:hidden border-t border-gray-100 bg-white">
          <div class="px-4 py-4 space-y-1 max-h-96 overflow-y-auto">
            <router-link to="/" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Accueil</router-link>
            
            <!-- Organisation Section Mobile -->
            <details class="group">
              <summary class="flex items-center justify-between px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 rounded-lg cursor-pointer font-semibold transition select-none">
                <span class="flex items-center gap-2"><i class="fas fa-chevron-down w-4 group-open:rotate-180 transition"></i>L'Organisation</span>
              </summary>
              <div class="pl-6 space-y-1 mt-1">
                <router-link to="/association" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">L'Organisation</router-link>
                <router-link to="/notre-equipe" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Notre équipe</router-link>
              </div>
            </details>

            <router-link to="/actions" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Nos Actions</router-link>
            <router-link to="/benevole" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Bénévole</router-link>
            <router-link to="/adhesion" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Adhésion</router-link>
            <router-link to="/ecole" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">L'École</router-link>
            <router-link to="/actualites" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Actualités</router-link>
            <router-link to="/galerie" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Galerie</router-link>
            <router-link to="/contact" class="block px-4 py-3 text-[#090e15] hover:bg-[#fbbf24]/10 hover:text-[#fbbf24] rounded-lg font-medium transition" @click="mobileMenuOpen = false">Contact</router-link>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileMenuOpen = ref(false)
const route = useRoute()

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}
</script>

<style scoped>
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
