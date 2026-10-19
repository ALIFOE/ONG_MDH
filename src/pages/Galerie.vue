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

        <div class="row g-4">
          <div v-for="(image, index) in filteredImages" :key="image.url + index" class="col-lg-4 col-md-6">
            <button type="button" class="gallery-item" @click="openLightbox(index)">
              <img :src="image.url" :alt="image.title" loading="lazy">
              <span class="caption">
                <strong>{{ image.title }}</strong>
                <span>{{ image.category }}</span>
              </span>
            </button>
          </div>
        </div>

        <!-- État vide -->
        <div v-if="filteredImages.length === 0" class="text-center py-5">
          <i class="fa-solid fa-image fs-1 mb-3 d-block" style="color: #c6dad3;"></i>
          <p>Aucune image dans cette catégorie</p>
        </div>
      </div>
    </div>

    <!-- Visionneuse -->
    <Transition name="fade">
      <div v-if="lightboxImage" class="lightbox" role="dialog" aria-modal="true" :aria-label="lightboxImage.title" @click="closeLightbox">
        <button type="button" class="lb-btn lb-close" aria-label="Fermer" @click.stop="closeLightbox"><i class="fa-solid fa-xmark"></i></button>
        <button type="button" class="lb-btn lb-prev" aria-label="Image précédente" @click.stop="previousImage"><i class="fa-solid fa-chevron-left"></i></button>
        <figure @click.stop>
          <img :src="lightboxImage.url" :alt="lightboxImage.title">
          <figcaption>
            {{ lightboxImage.title }}
            <span>{{ lightboxImage.category }}</span>
          </figcaption>
        </figure>
        <button type="button" class="lb-btn lb-next" aria-label="Image suivante" @click.stop="nextImage"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

const filters = [
  { value: 'all', label: 'Tous' },
  { value: 'Éducation', label: 'Éducation' },
  { value: 'Santé', label: 'Santé' },
  { value: 'Développement', label: 'Développement' },
  { value: 'Équipe', label: 'Équipe' }
]

const activeCategory = ref('all')
const currentLightboxIndex = ref(null)

const gallery = [
  // Éducation
  { url: images.education1, title: 'Classe moderne', category: 'Éducation' },
  { url: images.education2, title: 'Apprentissage', category: 'Éducation' },
  { url: images.ecole3, title: 'École en construction', category: 'Éducation' },
  { url: images.ecole4, title: 'Infrastructure scolaire', category: 'Éducation' },
  { url: images.ecole5, title: 'Soutien scolaire', category: 'Éducation' },
  { url: images.ecole8, title: 'Notre école', category: 'Éducation' },
  { url: images.formation, title: "Formation d'enseignants", category: 'Éducation' },
  { url: images.photoEcole, title: 'Vie scolaire', category: 'Éducation' },

  // Santé
  { url: images.sante1, title: 'Campagne de santé', category: 'Santé' },

  // Développement Durable
  { url: images.agriculture1, title: 'Agriculture durable', category: 'Développement' },
  { url: images.gestionDechets, title: 'Gestion des déchets', category: 'Développement' },

  // Actualités et projets
  { url: images.article1, title: 'Vacances utiles', category: 'Éducation' },
  { url: images.article2, title: 'Mobilisation', category: 'Développement' },
  { url: images.article3, title: 'Échanges internationaux', category: 'Équipe' },
  { url: images.sensibilisation1, title: 'Sensibilisation', category: 'Développement' },
  { url: images.debutChantier, title: 'Chantier de construction', category: 'Développement' },

  // Équipe et partenaires
  { url: images.parrain, title: 'Équipe de direction', category: 'Équipe' },
  { url: images.saoute2, title: 'Directeur exécutif', category: 'Équipe' },
  { url: images.saoute3, title: 'Équipe sur le terrain', category: 'Équipe' },
  { url: images.saoute4, title: "Réunion d'équipe", category: 'Équipe' },

  // Autres
  { url: images.visite1, title: 'Visite du projet', category: 'Développement' },
  { url: images.votreecole, title: "Siège de l'organisation", category: 'Équipe' },
  { url: images.photo2, title: 'Activités', category: 'Éducation' },
  { url: images.image1, title: 'Moment du projet', category: 'Développement' },
  { url: images.image2, title: "Terrain d'action", category: 'Développement' },
  { url: images.image3, title: 'Bénéficiaires', category: 'Éducation' },
  { url: images.image4, title: 'Impact social', category: 'Développement' },
  { url: images.image1projet, title: 'Projet en cours', category: 'Développement' }
]

const filteredImages = computed(() => activeCategory.value === 'all'
  ? gallery
  : gallery.filter(img => img.category === activeCategory.value))

const lightboxImage = computed(() => currentLightboxIndex.value === null ? null : filteredImages.value[currentLightboxIndex.value])

const openLightbox = (index) => {
  currentLightboxIndex.value = index
}

const closeLightbox = () => {
  currentLightboxIndex.value = null
}

const nextImage = () => {
  currentLightboxIndex.value = (currentLightboxIndex.value + 1) % filteredImages.value.length
}

const previousImage = () => {
  currentLightboxIndex.value = (currentLightboxIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
}

const onKeydown = (event) => {
  if (currentLightboxIndex.value === null) return
  if (event.key === 'Escape') closeLightbox()
  if (event.key === 'ArrowRight') nextImage()
  if (event.key === 'ArrowLeft') previousImage()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown))
</script>
