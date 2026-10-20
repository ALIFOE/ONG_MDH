<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Équipe</h1>
        <p>Membres affichés sur la page « Notre équipe », regroupés par instance.</p>
      </div>
      <button type="button" class="adm-btn adm-btn-primary" @click="create()"><i class="fa-solid fa-plus"></i>Ajouter un membre</button>
    </div>

    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!items" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>
    <div v-else-if="!items.length" class="adm-card adm-empty">
      <i class="fa-solid fa-people-group d-block"></i>
      <strong>Aucun membre</strong>
      Tant que la liste est vide, le site affiche l'équipe d'origine.
    </div>

    <div v-else class="adm-stack">
      <section v-for="group in groups" :key="group.name" class="adm-card">
        <div class="adm-card-head">
          <h2>{{ group.name }}</h2>
          <button type="button" class="adm-btn adm-btn-sm" @click="create(group.name)"><i class="fa-solid fa-plus"></i>Ajouter ici</button>
        </div>
        <div v-for="(member, index) in group.members" :key="member.id" class="adm-member">
          <div class="adm-order">
            <button type="button" :disabled="index === 0" :aria-label="`Monter ${member.name}`" @click="move(member, group.members[index - 1])"><i class="fa-solid fa-chevron-up"></i></button>
            <button type="button" :disabled="index === group.members.length - 1" :aria-label="`Descendre ${member.name}`" @click="move(member, group.members[index + 1])"><i class="fa-solid fa-chevron-down"></i></button>
          </div>
          <img v-if="member.photo" :src="member.photo" alt="" class="adm-member-photo">
          <span v-else class="adm-avatar adm-member-photo" aria-hidden="true">{{ initials(member.name) }}</span>
          <div class="adm-member-text">
            <span class="adm-strong d-block">{{ member.name }}</span>
            <span class="adm-sub">{{ member.role || '—' }}<template v-if="member.bio"> · {{ member.bio }}</template></span>
          </div>
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon" :aria-label="`Modifier ${member.name}`" title="Modifier" @click="edit(member)"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-danger adm-btn-icon" :aria-label="`Retirer ${member.name}`" title="Retirer" @click="remove(member)"><i class="fa-solid fa-trash"></i></button>
        </div>
      </section>
    </div>

    <Drawer :open="!!editing" :title="editing?.id ? 'Modifier le membre' : 'Ajouter un membre'" :busy="saving" @close="editing = null" @submit="save">
      <template v-if="editing">
        <div class="mx-auto mb-3" style="max-width: 180px;">
          <ImageField v-model="editing.photo" :alt="editing.name" square />
        </div>
        <label class="adm-field">
          <span class="adm-label">Nom complet *</span>
          <input v-model="editing.name" class="adm-input" type="text" maxlength="190" required>
        </label>
        <label class="adm-field">
          <span class="adm-label">Fonction</span>
          <input v-model="editing.role" class="adm-input" type="text" maxlength="190" placeholder="Ex. : Trésorière">
        </label>
        <label class="adm-field">
          <span class="adm-label">Groupe *</span>
          <input v-model="editing.group" class="adm-input" type="text" list="team-groups" maxlength="120" required>
          <datalist id="team-groups">
            <option v-for="group in groups" :key="group.name" :value="group.name"></option>
          </datalist>
          <span class="adm-hint">Choisissez un groupe existant ou tapez un nouveau nom pour créer une section.</span>
        </label>
        <label class="adm-field">
          <span class="adm-label">Courte présentation</span>
          <textarea v-model="editing.bio" class="adm-input" rows="3" maxlength="1000"></textarea>
        </label>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { api, notify } from '../api.js'
import Drawer from '../components/Drawer.vue'
import ImageField from '../components/ImageField.vue'

const items = ref(null)
const error = ref('')
const editing = ref(null)
const saving = ref(false)

// Groupes dans l'ordre de leur premier membre
const groups = computed(() => {
  const map = new Map()
  for (const member of items.value || []) {
    if (!map.has(member.group)) map.set(member.group, [])
    map.get(member.group).push(member)
  }
  return [...map].map(([name, members]) => ({ name, members }))
})

const initials = name => name
  .replace(/^Prof\s+/i, '')
  .split(/\s+/)
  .slice(0, 2)
  .map(part => part[0])
  .join('')
  .toUpperCase()

onMounted(async () => {
  try {
    items.value = (await api('/admin/team')).items
  } catch (e) {
    error.value = e.message
  }
})

const create = (group = groups.value[0]?.name || '') => {
  editing.value = { name: '', role: '', group, bio: '', photo: '' }
}

const edit = member => {
  editing.value = { ...member }
}

const save = async () => {
  if (!editing.value.name.trim() || !editing.value.group.trim()) {
    notify('Le nom et le groupe sont obligatoires.', 'error')
    return
  }
  saving.value = true
  try {
    if (editing.value.id) {
      const updated = await api(`/admin/team/${editing.value.id}`, { method: 'PUT', body: editing.value })
      items.value = items.value.map(m => (m.id === updated.id ? updated : m))
    } else {
      items.value.push(await api('/admin/team', { method: 'POST', body: editing.value }))
    }
    notify(editing.value.id ? 'Membre mis à jour.' : 'Membre ajouté.')
    editing.value = null
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

// Échange la position de deux membres d'un même groupe
const move = async (member, other) => {
  const list = [...items.value]
  const a = list.indexOf(member)
  const b = list.indexOf(other)
  ;[list[a], list[b]] = [list[b], list[a]]
  items.value = list
  try {
    await api('/admin/team/reorder', { method: 'POST', body: { ids: list.map(m => m.id) } })
  } catch (e) {
    notify(e.message, 'error')
  }
}

const remove = async member => {
  if (!window.confirm(`Retirer ${member.name} de la page Équipe ?`)) return
  try {
    await api(`/admin/team/${member.id}`, { method: 'DELETE' })
    items.value = items.value.filter(m => m.id !== member.id)
    notify('Membre retiré.')
  } catch (e) {
    notify(e.message, 'error')
  }
}
</script>
