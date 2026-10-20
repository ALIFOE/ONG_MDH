<template>
  <!-- L'espace admin a sa propre mise en page -->
  <router-view v-if="route.meta.admin" />

  <div v-else class="main-page-wrapper">
    <!-- Meta Tags Manager -->
    <MetaTags />

    <!-- Navigation -->
    <Navbar />

    <!-- Contenu de la page -->
    <main id="main-content">
      <router-view />
    </main>

    <!-- Bandeau d'appel à l'action (chevauché par le pied de page, comme dans le template) -->
    <CtaBanner />

    <!-- Footer -->
    <Footer />

    <button v-show="showScrollTop" class="scroll-top" type="button" aria-label="Remonter en haut de la page" @click="scrollToTop">
      <i class="bi bi-arrow-up-short"></i>
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import MetaTags from './components/MetaTags.vue'
import Navbar from './components/Navbar.vue'
import CtaBanner from './components/CtaBanner.vue'
import Footer from './components/Footer.vue'
import { setupScrollAnimations } from './utils/animations.js'

const route = useRoute()
const showScrollTop = ref(false)
let teardownAnimations = () => {}

const onScroll = () => {
  showScrollTop.value = window.scrollY > 400
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  teardownAnimations = setupScrollAnimations(document.getElementById('app'))
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  teardownAnimations()
  window.removeEventListener('scroll', onScroll)
})
</script>
