<template>
  <NotFound v-if="notFound" />

  <div v-else-if="!entry" class="pt-130 pb-140 text-center" aria-busy="true">
    <i class="fa-solid fa-spinner fa-spin fs-1" style="color: var(--mdh-blue);"></i>
  </div>

  <ArticleLayout v-else :entry="entry" :cta="cta">
    <p v-if="entry.excerpt" class="lead-text">{{ entry.excerpt }}</p>
    <!-- Contenu nettoyé côté serveur : seules les balises de mise en forme sont conservées -->
    <div class="article-content" v-html="content"></div>
  </ArticleLayout>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleLayout from '@/components/ArticleLayout.vue'
import NotFound from './NotFound.vue'
import { fetchPublic } from '@/api/public.js'
import { toArticleCard, loadRemoteArticles } from '@/data/articles.js'

const route = useRoute()
const entry = ref(null)
const content = ref('')
const notFound = ref(false)

const cta = {
  title: 'Soutenez nos actions',
  text: 'Votre don aide directement les enfants et les familles que nous accompagnons.',
  to: '/donation',
  label: 'Faire un don'
}

const load = async slug => {
  entry.value = null
  notFound.value = false
  // Liste complète nécessaire pour les liens « article précédent / suivant »
  loadRemoteArticles()
  try {
    const article = await fetchPublic(`/articles/${encodeURIComponent(slug)}`)
    content.value = article.content
    entry.value = toArticleCard(article)
    document.title = `${article.title} - MDH International Togo`
  } catch {
    notFound.value = true
  }
}

watch(() => route.params.slug, slug => {
  if (slug) load(slug)
}, { immediate: true })
</script>
