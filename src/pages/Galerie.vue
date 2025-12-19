<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center bg-gray-100 py-12 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-extrabold text-[#090e15] mb-4 tracking-tight">Galerie</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
          Découvrez nos projets et actions à travers une sélection de photos.
        </p>
        <div class="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Filter Buttons -->
    <section class="py-8 bg-white sticky top-20 z-40 shadow-sm">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-wrap justify-center gap-3">
          <button 
            @click="activeCategory = 'all'"
            :class="['px-6 py-2 rounded-full font-semibold transition duration-300', activeCategory === 'all' ? 'bg-[#fbbf24] text-[#090e15]' : 'bg-gray-200 text-[#090e15] hover:bg-gray-300']"
          >
            Tous
          </button>
          <button 
            @click="activeCategory = 'education'"
            :class="['px-6 py-2 rounded-full font-semibold transition duration-300', activeCategory === 'education' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-[#090e15] hover:bg-gray-300']"
          >
            Éducation
          </button>
          <button 
            @click="activeCategory = 'sante'"
            :class="['px-6 py-2 rounded-full font-semibold transition duration-300', activeCategory === 'sante' ? 'bg-orange-700 text-white' : 'bg-gray-200 text-[#090e15] hover:bg-gray-300']"
          >
            Santé
          </button>
          <button 
            @click="activeCategory = 'developpement'"
            :class="['px-6 py-2 rounded-full font-semibold transition duration-300', activeCategory === 'developpement' ? 'bg-green-700 text-white' : 'bg-gray-200 text-[#090e15] hover:bg-gray-300']"
          >
            Développement
          </button>
          <button 
            @click="activeCategory = 'equipe'"
            :class="['px-6 py-2 rounded-full font-semibold transition duration-300', activeCategory === 'equipe' ? 'bg-purple-600 text-white' : 'bg-gray-200 text-[#090e15] hover:bg-gray-300']"
          >
            Équipe
          </button>
        </div>
      </div>
    </section>

    <!-- Gallery Grid -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(image, index) in filteredImages" 
            :key="index"
            class="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer h-64"
            @click="openLightbox(image)"
          >
            <img 
              :src="image.url" 
              :alt="image.title"
              class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
              <div>
                <h3 class="text-white font-bold text-lg">{{ image.title }}</h3>
                <p class="text-yellow-400 text-sm font-semibold">{{ image.category }}</p>
              </div>
            </div>
            <div class="absolute top-4 right-4 bg-[#fbbf24] text-[#090e15] px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition">
              <i class="fas fa-search-plus mr-1"></i> Voir
            </div>
          </div>
        </div>

        <!-- Empty State -->
        <div v-if="filteredImages.length === 0" class="text-center py-20">
          <i class="fas fa-image text-6xl text-gray-300 mb-4"></i>
          <p class="text-gray-500 text-xl">Aucune image dans cette catégorie</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <transition name="fade">
      <div 
        v-if="lightboxImage"
        class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
        @click="closeLightbox"
      >
        <div 
          class="relative max-w-4xl w-full"
          @click.stop
        >
          <!-- Close Button -->
          <button 
            @click="closeLightbox"
            class="absolute -top-12 right-0 text-white hover:text-yellow-400 transition text-3xl"
          >
            <i class="fas fa-times"></i>
          </button>

          <!-- Image -->
          <img 
            :src="lightboxImage.url" 
            :alt="lightboxImage.title"
            class="w-full max-h-96 object-cover rounded-lg shadow-2xl"
          />

          <!-- Caption -->
          <div class="text-center mt-6 text-white">
            <h2 class="text-2xl font-bold mb-2">{{ lightboxImage.title }}</h2>
            <p class="text-yellow-400 font-semibold">{{ lightboxImage.category }}</p>
          </div>

          <!-- Navigation -->
          <div class="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4">
            <button 
              @click="previousImage"
              class="bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition text-xl"
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button 
              @click="nextImage"
              class="bg-white/20 hover:bg-white/40 text-white w-12 h-12 rounded-full flex items-center justify-center transition text-xl"
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- CTA Section -->
    <section class="bg-gradient-to-r from-[#090e15] to-[#1e293b] py-16">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Soutenez nos projets</h2>
        <p class="text-gray-300 mb-8 text-lg">
          Ces photos racontent l'histoire de nos initiatives. Votre soutien nous aide à faire la différence.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/donation" class="px-8 py-4 bg-[#fbbf24] text-[#090e15] rounded-full font-bold hover:bg-white transition duration-300 inline-block">
            Faire un don
          </router-link>
          <router-link to="/rejoindre" class="px-8 py-4 bg-white text-[#090e15] rounded-full font-bold hover:bg-gray-100 transition duration-300 inline-block">
            Nous rejoindre
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeCategory = ref('all')
const lightboxImage = ref(null)
const currentLightboxIndex = ref(0)

const images = ref([
  // Éducation
  { url: '/images/education1.jpg', title: 'Classe moderne', category: 'Éducation' },
  { url: '/images/education2.jpg', title: 'Apprentissage', category: 'Éducation' },
  { url: '/images/image ecole 3 MDH.jpg', title: 'École en construction', category: 'Éducation' },
  { url: '/images/image ecole 4 MDH.jpg', title: 'Infrastructure scolaire', category: 'Éducation' },
  { url: '/images/image ecole 5 MDH.jpg', title: 'Soutien scolaire', category: 'Éducation' },
  { url: '/images/image ecole 8 MDH.jpg', title: 'Notre école', category: 'Éducation' },
  { url: '/images/image formation MDH.jpg', title: 'Formation d\'enseignants', category: 'Éducation' },
  { url: '/images/photo ecole MDH.jpeg', title: 'Vie scolaire', category: 'Éducation' },
  
  // Santé
  { url: '/images/sante1.jpg', title: 'Campagne de santé', category: 'Santé' },
  
  // Développement Durable
  { url: '/images/agriculture1.jpg', title: 'Agriculture durable', category: 'Développement' },
  { url: '/images/gestion de déchets MDH.jpg', title: 'Gestion des déchets', category: 'Développement' },
  
  // Actualités et projets
  { url: '/images/article1.jpg', title: 'Vacances utiles', category: 'Éducation' },
  { url: '/images/article2.jpg', title: 'Mobilisation', category: 'Développement' },
  { url: '/images/article3.jpg', title: 'Échanges internationaux', category: 'Équipe' },
  { url: '/images/sensibilisation1.jpg', title: 'Sensibilisation', category: 'Développement' },
  { url: '/images/image debut chantier.jpg', title: 'Chantier de construction', category: 'Développement' },
  
  // Équipe et partenaires
  { url: '/images/image parrain.png', title: 'Équipe de direction', category: 'Équipe' },
  { url: '/images/saoute2.jpg', title: 'Directeur exécutif', category: 'Équipe' },
  { url: '/images/saoute3.jpg', title: 'Équipe sur le terrain', category: 'Équipe' },
  { url: '/images/saoute4.jpg', title: 'Réunion d\'équipe', category: 'Équipe' },
  
  // Autres
  { url: '/images/visite1.jpg', title: 'Visite du projet', category: 'Développement' },
  { url: '/images/votreecole.jpg', title: 'Siège de l\'organisation', category: 'Équipe' },
  { url: '/images/photo2.jpg', title: 'Activités', category: 'Éducation' },
  { url: '/images/image1.jpg', title: 'Moment du projet', category: 'Développement' },
  { url: '/images/image2.jpg', title: 'Terrain d\'action', category: 'Développement' },
  { url: '/images/image3.jpg', title: 'Bénéficiaires', category: 'Éducation' },
  { url: '/images/image4.jpg', title: 'Impact social', category: 'Développement' },
  { url: '/images/image1projet.jpg', title: 'Projet en cours', category: 'Développement' },
  { url: '/images/saoute4.jpg', title: 'Sur le terrain', category: 'Équipe' },
])

const filteredImages = computed(() => {
  if (activeCategory.value === 'all') {
    return images.value
  }
  return images.value.filter(img => img.category === 
    (activeCategory.value === 'education' ? 'Éducation' :
     activeCategory.value === 'sante' ? 'Santé' :
     activeCategory.value === 'developpement' ? 'Développement' :
     activeCategory.value === 'equipe' ? 'Équipe' : '')
  )
})

const openLightbox = (image) => {
  lightboxImage.value = image
  currentLightboxIndex.value = filteredImages.value.findIndex(img => img.url === image.url)
}

const closeLightbox = () => {
  lightboxImage.value = null
}

const nextImage = () => {
  currentLightboxIndex.value = (currentLightboxIndex.value + 1) % filteredImages.value.length
  lightboxImage.value = filteredImages.value[currentLightboxIndex.value]
}

const previousImage = () => {
  currentLightboxIndex.value = (currentLightboxIndex.value - 1 + filteredImages.value.length) % filteredImages.value.length
  lightboxImage.value = filteredImages.value[currentLightboxIndex.value]
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
