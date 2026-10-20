<template>
  <div>
    <PageBanner
      title="Nos actualités"
      :crumbs="[{ label: 'Actualités' }]"
      :image="images.article1"
      subtitle="Suivez nos dernières actions et découvrez l'impact de nos projets sur le terrain."
    />

    <div class="blog-section-one pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Sur le terrain</div>
          <h2>Nos dernières actualités</h2>
        </div>

        <div class="gallery-filter d-flex flex-wrap justify-content-center mb-20">
          <router-link v-slot="{ navigate }" :to="{ path: '/actualites' }" custom>
            <button type="button" :class="{ active: !activeCategory }" @click="navigate">Toutes</button>
          </router-link>
          <router-link v-for="cat in categories" :key="cat.name" v-slot="{ navigate }" :to="{ path: '/actualites', query: { categorie: cat.name } }" custom>
            <button type="button" :class="{ active: activeCategory === cat.name }" @click="navigate">{{ cat.name }}</button>
          </router-link>
        </div>
      </div>

      <div v-if="!articlesState.loaded" class="text-center pt-40" aria-busy="true">
        <i class="fa-solid fa-spinner fa-spin fs-1" style="color: var(--mdh-blue);"></i>
      </div>
      <p v-else-if="!filtered.length" class="text-center pt-40">
        {{ articlesState.failed ? 'Les actualités ne peuvent pas être chargées pour le moment. Réessayez dans quelques instants.' : 'Aucune actualité pour le moment.' }}
      </p>

      <div class="box-layout-two">
        <div class="row">
          <div v-for="(post, i) in filtered" :key="post.to" class="col-xxl-3 col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="(i % 4) * 100">
            <BlogCard :post="post" show-excerpt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageBanner from '@/components/PageBanner.vue'
import BlogCard from '@/components/BlogCard.vue'
import images from '@/data/images.js'
import { articles, categories, articlesState } from '@/data/articles.js'

const route = useRoute()
const activeCategory = computed(() => route.query.categorie || '')
const filtered = computed(() => activeCategory.value
  ? articles.filter(a => a.category === activeCategory.value)
  : articles)
</script>
