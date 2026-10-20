<template>
  <!-- Rendue dans <body> : un parent rogné ou transformé (mise en page de l'article) la masquerait -->
  <Teleport to="body">
  <Transition name="fade">
    <div v-if="photo" class="lightbox" role="dialog" aria-modal="true" :aria-label="photo.title || photo.alt || 'Photo'" @click="close">
      <button type="button" class="lb-btn lb-close" aria-label="Fermer" @click.stop="close"><i class="fa-solid fa-xmark"></i></button>
      <button v-if="photos.length > 1" type="button" class="lb-btn lb-prev" aria-label="Image précédente" @click.stop="step(-1)"><i class="fa-solid fa-chevron-left"></i></button>
      <figure @click.stop>
        <img :src="photo.url" :alt="photo.alt || photo.title || ''">
        <figcaption v-if="photo.title || photo.category">
          {{ photo.title }}
          <span v-if="photo.category">{{ photo.category }}</span>
        </figcaption>
      </figure>
      <button v-if="photos.length > 1" type="button" class="lb-btn lb-next" aria-label="Image suivante" @click.stop="step(1)"><i class="fa-solid fa-chevron-right"></i></button>
    </div>
  </Transition>
  </Teleport>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'

// Visionneuse plein écran : v-model = index de la photo affichée, null quand elle est fermée
const props = defineProps({
  // [{ url, title?, category?, alt? }] — titre et catégorie s'affichent sous la photo
  photos: { type: Array, required: true },
  modelValue: { type: Number, default: null }
})
const emit = defineEmits(['update:modelValue'])

const photo = computed(() => (props.modelValue === null ? null : props.photos[props.modelValue] || null))

const close = () => emit('update:modelValue', null)

const step = direction => {
  const count = props.photos.length
  emit('update:modelValue', (props.modelValue + direction + count) % count)
}

const onKeydown = event => {
  if (props.modelValue === null) return
  if (event.key === 'Escape') close()
  if (event.key === 'ArrowRight') step(1)
  if (event.key === 'ArrowLeft') step(-1)
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
