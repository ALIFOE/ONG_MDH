<template>
  <div>
    <button
      type="button"
      class="adm-dropzone adm-dropzone-sm"
      :class="{ 'is-over': dragOver }"
      :disabled="uploading > 0"
      @click="input.click()"
      @dragover.prevent="dragOver = true"
      @dragleave="dragOver = false"
      @drop.prevent="onDrop"
    >
      <i class="fa-solid" :class="uploading ? 'fa-spinner fa-spin' : 'fa-images'"></i>
      <strong>{{ uploading ? `Envoi de ${uploading} photo${uploading > 1 ? 's' : ''}…` : 'Ajouter des photos' }}</strong>
      <span>Cliquez ou glissez vos images ici (plusieurs à la fois possible). JPG, PNG ou WebP.</span>
    </button>
    <input ref="input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" multiple hidden @change="onPick">

    <div v-if="modelValue.length" class="adm-photos mt-3">
      <figure v-for="(url, index) in modelValue" :key="url" class="adm-photos-item">
        <img :src="url" :alt="`Photo ${index + 1}`" loading="lazy">
        <div class="adm-photos-actions">
          <button type="button" class="adm-btn adm-btn-sm adm-btn-icon" title="Déplacer avant" aria-label="Déplacer avant" :disabled="index === 0" @click="move(index, -1)"><i class="fa-solid fa-arrow-left"></i></button>
          <button type="button" class="adm-btn adm-btn-sm adm-btn-icon" title="Déplacer après" aria-label="Déplacer après" :disabled="index === modelValue.length - 1" @click="move(index, 1)"><i class="fa-solid fa-arrow-right"></i></button>
          <button type="button" class="adm-btn adm-btn-sm adm-btn-icon adm-btn-danger ms-auto" title="Retirer" :aria-label="`Retirer la photo ${index + 1}`" @click="remove(index)"><i class="fa-solid fa-xmark"></i></button>
        </div>
      </figure>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { uploadImage, notify } from '../api.js'

const props = defineProps({
  modelValue: { type: Array, default: () => [] }
})
const emit = defineEmits(['update:modelValue'])

const input = ref(null)
const dragOver = ref(false)
const uploading = ref(0)

const addFiles = async files => {
  const images = [...files].filter(file => file.type.startsWith('image/'))
  if (!images.length) return
  uploading.value = images.length
  // Une à une, pour garder l'ordre choisi et ne pas saturer l'hébergement
  for (const file of images) {
    try {
      const url = await uploadImage(file)
      emit('update:modelValue', [...props.modelValue, url])
    } catch (e) {
      notify(`${file.name} : ${e.message}`, 'error')
    }
    uploading.value--
  }
}

const onPick = event => {
  addFiles(event.target.files)
  event.target.value = ''
}

const onDrop = event => {
  dragOver.value = false
  addFiles(event.dataTransfer.files)
}

const move = (index, direction) => {
  const list = [...props.modelValue]
  const [moved] = list.splice(index, 1)
  list.splice(index + direction, 0, moved)
  emit('update:modelValue', list)
}

const remove = index => {
  emit('update:modelValue', props.modelValue.filter((_, i) => i !== index))
}
</script>
