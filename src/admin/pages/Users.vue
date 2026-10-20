<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Utilisateurs</h1>
        <p>Personnes autorisées à se connecter à l'espace admin.</p>
      </div>
      <button type="button" class="adm-btn adm-btn-primary" @click="create"><i class="fa-solid fa-user-plus"></i>Ajouter un compte</button>
    </div>

    <div class="adm-card">
      <div v-if="error" class="adm-card-body"><div class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div></div>
      <div v-else-if="!items" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>
      <div v-else class="adm-table-wrap">
        <table class="adm-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Rôle</th>
              <th>Dernière connexion</th>
              <th><span class="visually-hidden">Actions</span></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in items" :key="user.id">
              <td>
                <span class="adm-strong d-block">{{ user.name }}<template v-if="user.id === session.user.id"> (vous)</template></span>
                <span class="adm-sub">{{ user.email }}</span>
              </td>
              <td>
                <span class="adm-chip" :class="`is-${user.role}`">{{ roleLabel(user.role) }}</span>
                <span v-if="!user.active" class="adm-chip is-inactive ms-1">Désactivé</span>
              </td>
              <td class="adm-nowrap">{{ user.last_login_at ? timeAgo(user.last_login_at) : 'Jamais' }}</td>
              <td class="adm-nowrap text-end">
                <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon" title="Modifier" :aria-label="`Modifier ${user.name}`" @click="edit(user)"><i class="fa-solid fa-pen"></i></button>
                <button v-if="user.id !== session.user.id" type="button" class="adm-btn adm-btn-ghost adm-btn-danger adm-btn-icon" title="Supprimer" :aria-label="`Supprimer ${user.name}`" @click="remove(user)"><i class="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="adm-card adm-card-body mt-4">
      <h2 class="mb-2">Rôles</h2>
      <div class="adm-meta-list">
        <div v-for="role in roles" :key="role.value"><strong>{{ role.label }}</strong><span class="text-end">{{ role.hint }}</span></div>
      </div>
    </div>

    <Drawer :open="!!editing" :title="editing?.id ? 'Modifier le compte' : 'Nouveau compte'" :busy="saving" @close="editing = null" @submit="save">
      <template v-if="editing">
        <label class="adm-field">
          <span class="adm-label">Nom complet *</span>
          <input v-model="editing.name" class="adm-input" :class="{ 'is-invalid': fieldError === 'name' }" type="text" maxlength="120" required>
        </label>
        <label class="adm-field">
          <span class="adm-label">Email *</span>
          <input v-model="editing.email" class="adm-input" :class="{ 'is-invalid': fieldError === 'email' }" type="email" maxlength="190" required autocomplete="off">
        </label>
        <fieldset class="adm-field mt-3">
          <legend class="adm-label">Rôle</legend>
          <label v-for="role in roles" :key="role.value" class="adm-check mb-2" style="align-items: flex-start;">
            <input v-model="editing.role" type="radio" name="role" :value="role.value" :disabled="editing.id === session.user.id" style="margin-top: 3px;">
            <span><strong class="d-block">{{ role.label }}</strong><span class="adm-sub">{{ role.hint }}</span></span>
          </label>
        </fieldset>
        <label class="adm-field">
          <span class="adm-label">{{ editing.id ? 'Nouveau mot de passe' : 'Mot de passe *' }}</span>
          <input v-model="editing.password" class="adm-input" :class="{ 'is-invalid': fieldError === 'password' }" type="text" minlength="10" autocomplete="new-password" :placeholder="editing.id ? 'Laisser vide pour ne pas changer' : ''">
          <span class="adm-hint">10 caractères minimum. Transmettez-le à la personne par un moyen sûr ; elle pourra le changer dans « Mon compte ».</span>
          <button type="button" class="adm-btn adm-btn-sm mt-2" @click="editing.password = generatePassword()"><i class="fa-solid fa-wand-magic-sparkles"></i>Générer un mot de passe</button>
        </label>
        <label v-if="editing.id && editing.id !== session.user.id" class="adm-check mt-3">
          <input v-model="editing.active" type="checkbox">
          <span>Compte actif (décocher pour bloquer l'accès sans supprimer le compte)</span>
        </label>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api, session, notify } from '../api.js'
import { roles, roleLabel } from '../constants.js'
import { timeAgo } from '../format.js'
import Drawer from '../components/Drawer.vue'

const items = ref(null)
const error = ref('')
const editing = ref(null)
const saving = ref(false)
const fieldError = ref('')

onMounted(async () => {
  try {
    items.value = (await api('/admin/users')).items
  } catch (e) {
    error.value = e.message
  }
})

const generatePassword = () => {
  const alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789'
  const values = crypto.getRandomValues(new Uint32Array(14))
  return Array.from(values, v => alphabet[v % alphabet.length]).join('')
}

const create = () => {
  fieldError.value = ''
  editing.value = { name: '', email: '', role: 'editor', password: generatePassword(), active: true }
}

const edit = user => {
  fieldError.value = ''
  editing.value = { ...user, password: '' }
}

const save = async () => {
  fieldError.value = ''
  saving.value = true
  try {
    const isNew = !editing.value.id
    const saved = isNew
      ? await api('/admin/users', { method: 'POST', body: editing.value })
      : await api(`/admin/users/${editing.value.id}`, { method: 'PUT', body: editing.value })
    items.value = isNew ? [...items.value, saved] : items.value.map(u => (u.id === saved.id ? saved : u))
    if (saved.id === session.user.id) Object.assign(session.user, { name: saved.name, email: saved.email })
    notify(isNew ? `Compte créé pour ${saved.name}.` : 'Compte mis à jour.')
    editing.value = null
  } catch (e) {
    fieldError.value = e.data?.field || ''
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

const remove = async user => {
  if (!window.confirm(`Supprimer le compte de ${user.name} ? La personne ne pourra plus se connecter.`)) return
  try {
    await api(`/admin/users/${user.id}`, { method: 'DELETE' })
    items.value = items.value.filter(u => u.id !== user.id)
    notify('Compte supprimé.')
  } catch (e) {
    notify(e.message, 'error')
  }
}
</script>
