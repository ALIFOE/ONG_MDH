<template>
  <div class="adm-image-field" :class="{ 'is-square': square }" @dragover.prevent @drop.prevent="onDrop">
    <img v-if="modelValue" :src="modelValue" :alt="alt">
    <button v-else type="button" class="adm-image-empty" :disabled="uploading" @click="pick">
      <i class="fa-solid" :class="uploading ? 'fa-spinner fa-spin' : 'fa-image'"></i>
      <span>{{ uploading ? 'Envoi en cours…' : 'Choisir une image' }}</span>
      <small>ou glissez-la ici · JPG, PNG, WebP</small>
    </button>
    <div v-if="modelValue" class="adm-image-bar">
      <button type="button" class="adm-btn adm-btn-sm" :disabled="uploading" @click="pick">
        <i class="fa-solid" :class="uploading ? 'fa-spinner fa-spin' : 'fa-arrows-rotate'"></i>Remplacer
      </button>
      <button type="button" class="adm-btn adm-btn-sm adm-btn-ghost adm-btn-danger" @click="emit('update:modelValue', '')">
        <i class="fa-solid fa-xmark"></i>Retirer
      </button>
    </div>
    <input ref="input" type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden @change="onChange">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { uploadImage, notify } from '../api.js'

defineProps({
  modelValue: { type: String, default: '' },
  alt: { type: String, default: '' },
  square: { type: Boolean, default: false }
})
const emit = defineEmits(['update:modelValue'])

const input = ref(null)
const uploading = ref(false)

const pick = () => input.value.click()

const upload = async file => {
  if (!file) return
  if (!file.type.startsWith('image/')) {
    notify('Ce fichier n\'est pas une image.', 'error')
    return
  }
  uploading.value = true
  try {
    emit('update:modelValue', await uploadImage(file))
  } catch (e) {
    notify(e.message, 'error')
  } finally {
    uploading.value = false
  }
}

const onChange = event => {
  upload(event.target.files[0])
  event.target.value = ''
}

const onDrop = event => upload(event.dataTransfer.files[0])
</script>
