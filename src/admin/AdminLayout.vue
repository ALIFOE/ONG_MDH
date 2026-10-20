<template>
  <div class="adm">
    <div class="adm-shell">
      <aside id="adm-sidebar" class="adm-sidebar" :class="{ 'is-open': menuOpen }" aria-label="Menu de l'administration">
        <router-link to="/admin" class="adm-brand">
          <img :src="images.logo" alt="">
          <span>
            <strong>MDH Admin</strong>
            <small>Gestion du site</small>
          </span>
        </router-link>

        <nav class="adm-nav">
          <router-link to="/admin" :class="{ 'is-active': route.name === 'AdminDashboard' }">
            <i class="fa-solid fa-gauge-high"></i>Tableau de bord
          </router-link>

          <template v-if="isAdmin()">
            <div class="adm-nav-title">Demandes reçues</div>
            <router-link
              v-for="type in submissionTypes"
              :key="type.value"
              :to="`/admin/demandes/${type.value}`"
              :class="{ 'is-active': activeType === type.value }"
            >
              <i class="fa-solid" :class="type.icon"></i>{{ type.label }}
              <span v-if="unread[type.value]" class="adm-count" :aria-label="`${unread[type.value]} nouvelle(s)`">{{ unread[type.value] }}</span>
            </router-link>
          </template>

          <div class="adm-nav-title">Contenu du site</div>
          <router-link to="/admin/articles" :class="{ 'is-active': route.path.startsWith('/admin/articles') }">
            <i class="fa-solid fa-newspaper"></i>Articles
          </router-link>
          <router-link to="/admin/galerie" :class="{ 'is-active': route.name === 'AdminGallery' }">
            <i class="fa-solid fa-images"></i>Galerie photos
          </router-link>
          <router-link to="/admin/equipe" :class="{ 'is-active': route.name === 'AdminTeam' }">
            <i class="fa-solid fa-people-group"></i>Équipe
          </router-link>
          <router-link to="/admin/parametres" :class="{ 'is-active': route.name === 'AdminSettings' }">
            <i class="fa-solid fa-circle-info"></i>Infos du site
          </router-link>

          <template v-if="isAdmin()">
            <div class="adm-nav-title">Administration</div>
            <router-link to="/admin/utilisateurs" :class="{ 'is-active': route.name === 'AdminUsers' }">
              <i class="fa-solid fa-user-shield"></i>Utilisateurs
            </router-link>
          </template>
        </nav>

        <div class="adm-sidebar-foot">
          <a href="/" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i>Voir le site</a>
          <a href="#" @click.prevent="signOut"><i class="fa-solid fa-right-from-bracket"></i>Se déconnecter</a>
        </div>
      </aside>
      <div v-if="menuOpen" class="adm-backdrop" @click="menuOpen = false"></div>

      <div class="adm-main">
        <header class="adm-topbar">
          <button
            type="button"
            class="adm-menu-toggle"
            aria-controls="adm-sidebar"
            :aria-expanded="menuOpen ? 'true' : 'false'"
            aria-label="Ouvrir le menu"
            @click="menuOpen = !menuOpen"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <router-link to="/admin/mon-compte" class="adm-user" title="Mon compte">
            <span class="adm-user-text">
              <strong>{{ session.user?.name }}</strong>
              <small>{{ roleLabel(session.user?.role) }}</small>
            </span>
            <span class="adm-avatar" aria-hidden="true">{{ initials }}</span>
          </router-link>
        </header>

        <main class="adm-content">
          <router-view />
        </main>
      </div>
    </div>

    <div class="adm-toasts" aria-live="polite">
      <TransitionGroup name="adm-toast">
        <div v-for="toast in toasts" :key="toast.id" class="adm-toast" :class="{ 'is-error': toast.type === 'error' }" :role="toast.type === 'error' ? 'alert' : 'status'">
          <i class="fa-solid" :class="toast.type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-check'"></i>
          <span>{{ toast.message }}</span>
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import images from '@/data/images.js'
import { session, toasts, unread, isAdmin, logout, refreshUnread, notify } from './api.js'
import { submissionTypes, roleLabel } from './constants.js'
import './admin.css'

const route = useRoute()
const router = useRouter()
const menuOpen = ref(false)

const activeType = computed(() => (route.name === 'AdminSubmissions' ? route.params.type : null))

const initials = computed(() => (session.user?.name || '?')
  .split(/\s+/)
  .slice(0, 2)
  .map(part => part[0])
  .join('')
  .toUpperCase())

let signingOut = false

const signOut = async () => {
  signingOut = true
  try {
    await logout()
  } catch {
    session.user = null
  }
  router.push('/admin/connexion')
}

// Session expirée pendant l'utilisation : retour à la connexion
watch(() => session.user, user => {
  if (!user && !signingOut) {
    notify('Votre session a expiré. Veuillez vous reconnecter.', 'error')
    router.replace({ path: '/admin/connexion', query: { redirect: route.fullPath } })
  }
})

watch(() => route.fullPath, () => {
  menuOpen.value = false
  refreshUnread()
})

onMounted(refreshUnread)
</script>
