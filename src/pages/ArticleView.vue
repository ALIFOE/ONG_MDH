<template>
  <NotFound v-if="notFound" />

  <div v-else-if="!entry" class="pt-130 pb-140 text-center" aria-busy="true">
    <i class="fa-solid fa-spinner fa-spin fs-1" style="color: var(--mdh-blue);"></i>
  </div>

  <ArticleLayout v-else :entry="entry" :cta="cta">
    <p v-if="entry.excerpt" class="lead-text">{{ entry.excerpt }}</p>
    <!-- Contenu nettoyé côté serveur : seules les balises de mise en forme sont conservées -->
    <div class="article-content" @click="followInternalLink" v-html="content"></div>

    <div v-if="photos.length" class="article-photos row g-3 mt-30">
      <div v-for="(photo, index) in photos" :key="photo.url" class="col-6 col-md-4">
        <button type="button" class="gallery-item" :aria-label="`Agrandir la photo ${index + 1}`" @click="lightboxIndex = index">
          <img :src="photo.url" :alt="photo.alt" loading="lazy">
        </button>
      </div>
    </div>
    <PhotoLightbox v-model="lightboxIndex" :photos="photos" />
  </ArticleLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import ArticleLayout from '@/components/ArticleLayout.vue'
import PhotoLightbox from '@/components/PhotoLightbox.vue'
import NotFound from './NotFound.vue'
import { fetchPublic } from '@/api/public.js'
import { toArticleCard, loadArticles } from '@/data/articles.js'

const route = useRoute()
const router = useRouter()
const entry = ref(null)
const content = ref('')
const cta = ref(null)
const notFound = ref(false)
// Photos de l'article, au format de la visionneuse
const photos = ref([])
const lightboxIndex = ref(null)

// Encadré affiché quand l'article n'a pas le sien
const defaultCta = {
  title: 'Soutenez nos actions',
  text: 'Votre don aide directement les enfants et les familles que nous accompagnons.',
  to: '/donation',
  label: 'Faire un don'
}

const load = async slug => {
  entry.value = null
  notFound.value = false
  lightboxIndex.value = null
  // Liste complète nécessaire pour les liens « article précédent / suivant »
  loadArticles()
  try {
    const article = await fetchPublic(`/articles/${encodeURIComponent(slug)}`)
    content.value = article.content
    photos.value = (article.photos || []).map((url, index) => ({ url, alt: `${article.title} – photo ${index + 1}` }))
    cta.value = article.cta_title || article.cta_text
      ? { title: article.cta_title, text: article.cta_text, to: article.cta_url, label: article.cta_label || 'En savoir plus' }
      : defaultCta
    entry.value = toArticleCard(article)
    document.title = `${article.title} - MDH International Togo`
  } catch {
    notFound.value = true
  }
}

// Les liens vers d'autres pages du site restent dans l'application (sans rechargement)
const followInternalLink = event => {
  const link = event.target.closest('a')
  const href = link?.getAttribute('href')
  if (!href || !href.startsWith('/') || href.startsWith('//') || link.target === '_blank') return
  if (event.ctrlKey || event.metaKey || event.shiftKey || event.button !== 0) return
  event.preventDefault()
  router.push(href)
}

watch(() => route.params.slug, slug => {
  if (slug) load(slug)
}, { immediate: true })
</script>
