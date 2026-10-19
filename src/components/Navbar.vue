<template>
  <header class="theme-main-menu menu-style-one menu-overlay sticky-menu" :class="{ fixed: isFixed }">
    <div class="inner-content">
      <div class="bottom-header gap-one position-relative">
        <div class="d-flex align-items-center">
          <!-- Logo -->
          <div class="logo order-lg-0">
            <router-link to="/" class="d-flex align-items-center" aria-label="Retour à l'accueil">
              <img :src="images.logo" alt="MDH International Togo">
            </router-link>
          </div>

          <!-- Bouton de don -->
          <div class="right-widget ms-auto me-3 me-lg-0 order-lg-3">
            <ul class="d-flex align-items-center style-none">
              <li class="d-none d-xxl-block me-3">
                <div class="cta-text font-amita text-white">Rejoignez-nous</div>
              </li>
              <li class="d-none d-sm-block">
                <router-link to="/donation" class="cta-btn-one"><i class="fa-solid fa-heart"></i>Faire un don</router-link>
              </li>
            </ul>
          </div>

          <!-- Menu -->
          <nav class="navbar navbar-expand-lg p0 order-lg-2" aria-label="Navigation principale">
            <button
              class="navbar-toggler d-block d-lg-none"
              type="button"
              aria-controls="navbarNav"
              :aria-expanded="mobileOpen ? 'true' : 'false'"
              aria-label="Ouvrir le menu"
              @click="mobileOpen = !mobileOpen"
            >
              <span></span>
            </button>
            <div id="navbarNav" class="collapse navbar-collapse" :class="{ show: mobileOpen }">
              <ul class="navbar-nav align-items-lg-center">
                <li class="d-block d-lg-none">
                  <div class="logo">
                    <router-link to="/" class="d-block"><img :src="images.logo" alt="MDH International Togo"></router-link>
                  </div>
                </li>

                <template v-for="(item, index) in menu" :key="item.label">
                  <li v-if="item.children" class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      :class="{ show: openDropdown === index, 'is-active': isSectionActive(item) }"
                      role="button"
                      :aria-expanded="openDropdown === index ? 'true' : 'false'"
                      @click.prevent="toggleDropdown(index)"
                    >{{ item.label }}</a>
                    <ul class="dropdown-menu" :class="{ show: openDropdown === index }">
                      <li v-for="child in item.children" :key="child.to">
                        <router-link :to="child.to" class="dropdown-item"><span>{{ child.label }}</span></router-link>
                      </li>
                    </ul>
                  </li>
                  <li v-else class="nav-item">
                    <router-link :to="item.to" class="nav-link">{{ item.label }}</router-link>
                  </li>
                </template>

                <li class="d-sm-none ps-3 pe-3 mt-20">
                  <router-link to="/donation" class="cta-btn-one w-100 d-block"><i class="fa-solid fa-heart"></i>Faire un don</router-link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
    <div v-if="mobileOpen" class="menu-backdrop d-lg-none" @click="mobileOpen = false"></div>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import images from '@/data/images.js'
import { menu } from '@/data/site.js'

const route = useRoute()
const isFixed = ref(false)
const mobileOpen = ref(false)
const openDropdown = ref(null)

const isSectionActive = (item) => item.children.some(child => route.path.startsWith(child.to))

const toggleDropdown = (index) => {
  openDropdown.value = openDropdown.value === index ? null : index
}

const onScroll = () => {
  isFixed.value = window.scrollY > 120
}

// Fermer les menus après chaque navigation
watch(() => route.fullPath, () => {
  mobileOpen.value = false
  openDropdown.value = null
  // Le menu déroulant reste ouvert tant qu'un de ses liens a le focus
  if (document.activeElement?.closest('.theme-main-menu')) document.activeElement.blur()
})

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>
