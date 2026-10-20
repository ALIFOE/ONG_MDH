<template>
  <div>
    <PageBanner
      title="Galerie"
      :crumbs="[{ label: `L'Organisation`, to: '/association' }, { label: 'Galerie' }]"
      :image="images.image4"
      subtitle="Découvrez nos projets et actions à travers une sélection de photos."
    />

    <div class="pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-40" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">En images</div>
          <h2>Nos projets sur le terrain</h2>
        </div>

        <div class="gallery-filter d-flex flex-wrap justify-content-center mb-40" role="group" aria-label="Filtrer par catégorie">
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            :class="{ active: activeCategory === filter.value }"
            :aria-pressed="activeCategory === filter.value ? 'true' : 'false'"
            @click="activeCategory = filter.value"
          >
            {{ filter.label }}
          </button>
        </div>

        <div v-if="!galleryState.loaded" class="text-center py-5" aria-busy="true">
          <i class="fa-solid fa-spinner fa-spin fs-1" style="color: var(--mdh-blue);"></i>
        </div>

        <div class="row g-4">
          <div v-for="(image, index) in filteredImages" :key="image.id" class="col-lg-4 col-md-6">
            <button type="button" class="gallery-item" @click="lightboxIndex = index">
              <img :src="image.url" :alt="image.title" loading="lazy">
              <span class="caption">
                <strong>{{ image.title }}</strong>
                <span>{{ image.category }}</span>
              </span>
            </button>
          </div>
        </div>

        <!-- État vide -->
        <div v-if="galleryState.loaded && filteredImages.length === 0" class="text-center py-5">
          <i class="fa-solid fa-image fs-1 mb-3 d-block" style="color: #c6ceda;"></i>
          <p>{{ galleryState.failed ? 'La galerie ne peut pas être chargée pour le moment. Réessayez dans quelques instants.' : 'Aucune image dans cette catégorie' }}</p>
        </div>
      </div>
    </div>

    <PhotoLightbox v-model="lightboxIndex" :photos="filteredImages" />
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import PhotoLightbox from '@/components/PhotoLightbox.vue'
import images from '@/data/images.js'
import { fetchPublic } from '@/api/public.js'

const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'Éducation', label: 'Éducation' },
  { value: 'Santé', label: 'Santé' },
  { value: 'Développement', label: 'Développement' },
  { value: 'Équipe', label: 'Équipe' }
]

const activeCategory = ref('all')
const lightboxIndex = ref(null)

// Photos gérées depuis l'admin (« Galerie »), dans l'ordre choisi
const gallery = ref([])
const galleryState = reactive({ loaded: false, failed: false })

const filteredImages = computed(() => activeCategory.value === 'all'
  ? gallery.value
  : gallery.value.filter(img => img.category === activeCategory.value))

onMounted(async () => {
  try {
    gallery.value = (await fetchPublic('/gallery')).items
  } catch {
    galleryState.failed = true
  } finally {
    galleryState.loaded = true
  }
})
</script>
