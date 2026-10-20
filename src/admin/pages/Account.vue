<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Mon compte</h1>
        <p>Connecté en tant que {{ roleLabel(session.user.role).toLowerCase() }}.</p>
      </div>
    </div>

    <form class="adm-card adm-card-body" style="max-width: 560px;" novalidate @submit.prevent="save">
      <label class="adm-field">
        <span class="adm-label">Nom complet</span>
        <input v-model="form.name" class="adm-input" :class="{ 'is-invalid': fieldError === 'name' }" type="text" maxlength="120" autocomplete="name" required>
      </label>
      <label class="adm-field">
        <span class="adm-label">Email de connexion</span>
        <input v-model="form.email" class="adm-input" :class="{ 'is-invalid': fieldError === 'email' }" type="email" maxlength="190" autocomplete="username" required>
      </label>
      <label class="adm-field">
        <span class="adm-label">Nouveau mot de passe</span>
        <input v-model="form.new_password" class="adm-input" :class="{ 'is-invalid': fieldError === 'password' }" type="password" minlength="10" autocomplete="new-password" placeholder="Laisser vide pour le garder">
        <span class="adm-hint">10 caractères minimum.</span>
      </label>
      <label class="adm-field">
        <span class="adm-label">Mot de passe actuel *</span>
        <input v-model="form.current_password" class="adm-input" :class="{ 'is-invalid': fieldError === 'current_password' }" type="password" autocomplete="current-password" required>
        <span class="adm-hint">Nécessaire pour confirmer toute modification.</span>
      </label>
      <button type="submit" class="adm-btn adm-btn-primary mt-4" :disabled="saving">
        <i class="fa-solid" :class="saving ? 'fa-spinner fa-spin' : 'fa-check'"></i>Enregistrer
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { api, session, notify } from '../api.js'
import { roleLabel } from '../constants.js'

const form = ref({ name: session.user.name, email: session.user.email, new_password: '', current_password: '' })
const saving = ref(false)
const fieldError = ref('')

const save = async () => {
  fieldError.value = ''
  if (!form.value.current_password) {
    fieldError.value = 'current_password'
    notify('Saisissez votre mot de passe actuel pour confirmer.', 'error')
    return
  }
  saving.value = true
  try {
    const data = await api('/auth/me', { method: 'PUT', body: form.value })
    Object.assign(session.user, data.user)
    form.value.new_password = ''
    form.value.current_password = ''
    notify('Votre compte a été mis à jour.')
  } catch (e) {
    fieldError.value = e.data?.field || ''
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}
</script>
