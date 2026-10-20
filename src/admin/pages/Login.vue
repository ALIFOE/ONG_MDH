<template>
  <div class="adm">
    <div class="adm-login">
      <div class="adm-login-side">
        <div>
          <img :src="images.logo" alt="Logo MDH">
          <h1>Espace d'administration</h1>
          <p>Gérez les demandes reçues, les actualités, la galerie et les informations du site MDH International Togo.</p>
        </div>
        <small>Accès réservé aux membres de l'équipe MDH.</small>
      </div>

      <div class="adm-login-form">
        <form novalidate @submit.prevent="submit">
          <h2>Connexion</h2>
          <p>Saisissez vos identifiants pour continuer.</p>

          <div v-if="error" class="adm-alert is-error mb-3" role="alert">
            <i class="fa-solid fa-circle-exclamation"></i><span>{{ error }}</span>
          </div>

          <label class="adm-field">
            <span class="adm-label">Email</span>
            <input v-model.trim="email" class="adm-input" type="email" autocomplete="username" required autofocus>
          </label>
          <label class="adm-field">
            <span class="adm-label">Mot de passe</span>
            <span class="adm-password">
              <input v-model="password" class="adm-input" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" required>
              <button type="button" :aria-label="showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'" @click="showPassword = !showPassword">
                <i class="fa-solid" :class="showPassword ? 'fa-eye-slash' : 'fa-eye'"></i>
              </button>
            </span>
          </label>

          <button type="submit" class="adm-btn adm-btn-primary adm-btn-block mt-4" :disabled="loading">
            <i v-if="loading" class="fa-solid fa-spinner fa-spin"></i>
            {{ loading ? 'Connexion…' : 'Se connecter' }}
          </button>
          <p class="text-center mt-4 mb-0"><a href="/">← Retour au site</a></p>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import images from '@/data/images.js'
import { login } from '../api.js'
import '../admin.css'

const route = useRoute()
const router = useRouter()

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const loading = ref(false)
const error = ref('')

const submit = async () => {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Saisissez votre email et votre mot de passe.'
    return
  }
  loading.value = true
  try {
    await login(email.value, password.value)
    const redirect = typeof route.query.redirect === 'string' && route.query.redirect.startsWith('/admin') ? route.query.redirect : '/admin'
    router.replace(redirect)
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}
</script>
