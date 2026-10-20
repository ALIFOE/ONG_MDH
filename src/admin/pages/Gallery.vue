<template>
  <div>
    <div class="adm-page-head">
      <div>
        <h1>Galerie photos</h1>
        <p>Les photos ajoutées ici s'affichent en premier sur la page Galerie, avant les {{ legacyCount }} photos historiques du site.</p>
      </div>
    </div>

    <button
      type="button"
      class="adm-dropzone mb-4"
      :class="{ 'is-over': dragOver }"
      :disabled="uploading > 0"
      @click="fileInput.click()"
      @dragover.prevent="dragOver = true"
      @dragleave="dragOver = false"
      @drop.prevent="onDrop"
    >
      <i class="fa-solid" :class="uploading ? 'fa-spinner fa-spin' : 'fa-cloud-arrow-up'"></i>
      <strong>{{ uploading ? `Envoi de ${uploading} photo${uploading > 1 ? 's' : ''}…` : 'Ajouter des photos' }}</strong>
      <span>Cliquez ou glissez vos images ici (plusieurs à la fois possible). JPG, PNG ou WebP.</span>
    </button>
    <input ref="fileInput" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden @change="onPick">

    <div class="adm-filters">
      <label class="adm-label mb-0" for="new-category">Catégorie des nouvelles photos</label>
      <select id="new-category" v-model="newCategory" class="adm-input">
        <option v-for="category in galleryCategories" :key="category" :value="category">{{ category }}</option>
      </select>
    </div>

    <div v-if="error" class="adm-alert is-error" role="alert"><i class="fa-solid fa-circle-exclamation"></i>{{ error }}</div>
    <div v-else-if="!items" class="adm-loading"><i class="fa-solid fa-spinner fa-spin"></i> Chargement…</div>
    <div v-else-if="!items.length" class="adm-card adm-empty">
      <i class="fa-solid fa-images d-block"></i>
      <strong>Aucune photo ajoutée pour le moment</strong>
      Les photos que vous ajoutez apparaîtront ici et sur le site.
    </div>
    <div v-else class="adm-gallery">
      <article v-for="(item, index) in items" :key="item.id" class="adm-card adm-photo">
        <img :src="item.image" :alt="item.title" loading="lazy">
        <div class="adm-photo-body">
          <span class="adm-strong" :title="item.title">{{ item.title || 'Sans titre' }}</span>
          <span class="adm-sub">{{ item.category || 'Sans catégorie' }}</span>
        </div>
        <div class="adm-photo-actions">
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon" title="Déplacer avant" aria-label="Déplacer avant" :disabled="index === 0" @click="move(index, -1)"><i class="fa-solid fa-arrow-left"></i></button>
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon" title="Déplacer après" aria-label="Déplacer après" :disabled="index === items.length - 1" @click="move(index, 1)"><i class="fa-solid fa-arrow-right"></i></button>
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-icon ms-auto" title="Modifier" :aria-label="`Modifier ${item.title}`" @click="edit(item)"><i class="fa-solid fa-pen"></i></button>
          <button type="button" class="adm-btn adm-btn-ghost adm-btn-danger adm-btn-icon" title="Supprimer" :aria-label="`Supprimer ${item.title}`" @click="remove(item)"><i class="fa-solid fa-trash"></i></button>
        </div>
      </article>
    </div>

    <Drawer :open="!!editing" title="Modifier la photo" :busy="saving" @close="editing = null" @submit="saveEdit">
      <template v-if="editing">
        <ImageField v-model="editing.image" :alt="editing.title" />
        <label class="adm-field mt-3">
          <span class="adm-label">Légende</span>
          <input v-model="editing.title" class="adm-input" type="text" maxlength="190">
        </label>
        <label class="adm-field">
          <span class="adm-label">Catégorie</span>
          <select v-model="editing.category" class="adm-input">
            <option v-for="category in galleryCategories" :key="category" :value="category">{{ category }}</option>
          </select>
        </label>
      </template>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { api, uploadImage, notify } from '../api.js'
import { galleryCategories } from '../constants.js'
import Drawer from '../components/Drawer.vue'
import ImageField from '../components/ImageField.vue'
import { staticGallery } from '@/data/gallery.js'

const legacyCount = staticGallery.length
const items = ref(null)
const error = ref('')
const fileInput = ref(null)
const dragOver = ref(false)
const uploading = ref(0)
const newCategory = ref(galleryCategories[0])
const editing = ref(null)
const saving = ref(false)

onMounted(async () => {
  try {
    items.value = (await api('/admin/gallery')).items
  } catch (e) {
    error.value = e.message
  }
})

// Légende proposée à partir du nom du fichier
const titleFromFile = name => name
  .replace(/\.[^.]+$/, '')
  .replace(/[-_]+/g, ' ')
  .replace(/\s+/g, ' ')
  .trim()
  .replace(/^./, c => c.toUpperCase())

const addFiles = async files => {
  const images = [...files].filter(file => file.type.startsWith('image/'))
  if (!images.length) return
  uploading.value = images.length
  let added = 0
  // Une à une, pour garder l'ordre choisi et ne pas saturer l'hébergement
  for (const file of images) {
    try {
      const url = await uploadImage(file)
      const item = await api('/admin/gallery', { method: 'POST', body: { image: url, title: titleFromFile(file.name), category: newCategory.value } })
      items.value.unshift(item)
      added++
    } catch (e) {
      notify(`${file.name} : ${e.message}`, 'error')
    }
    uploading.value--
  }
  if (added) notify(`${added} photo${added > 1 ? 's ajoutées' : ' ajoutée'} à la galerie.`)
}

const onPick = event => {
  addFiles(event.target.files)
  event.target.value = ''
}

const onDrop = event => {
  dragOver.value = false
  addFiles(event.dataTransfer.files)
}

const move = async (index, direction) => {
  const list = [...items.value]
  const [moved] = list.splice(index, 1)
  list.splice(index + direction, 0, moved)
  items.value = list
  try {
    await api('/admin/gallery/reorder', { method: 'POST', body: { ids: list.map(item => item.id) } })
  } catch (e) {
    notify(e.message, 'error')
  }
}

const edit = item => {
  editing.value = { ...item }
}

const saveEdit = async () => {
  saving.value = true
  try {
    const updated = await api(`/admin/gallery/${editing.value.id}`, { method: 'PUT', body: editing.value })
    items.value = items.value.map(item => (item.id === updated.id ? updated : item))
    editing.value = null
    notify('Photo mise à jour.')
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    saving.value = false
  }
}

const remove = async item => {
  if (!window.confirm(`Retirer la photo « ${item.title || 'sans titre'} » de la galerie ?`)) return
  try {
    await api(`/admin/gallery/${item.id}`, { method: 'DELETE' })
    items.value = items.value.filter(i => i.id !== item.id)
    notify('Photo supprimée.')
  } catch (e) {
    notify(e.message, 'error')
  }
}
</script>
