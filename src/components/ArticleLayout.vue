<template>
  <div>
    <PageBanner
      title="Actualités"
      :crumbs="[{ label: 'Actualités', to: '/actualites' }, { label: article.category }]"
      :image="article.image"
    />

    <div class="blog-section-three pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <article class="blog-meta-one version-three blog-details-meta">
              <div class="img-meta" :style="{ backgroundImage: `url(${article.image})` }" role="img" :aria-label="article.title"></div>
              <div class="post-meta">
                <div class="post-info">
                  <ul class="style-none post-author d-flex flex-wrap">
                    <li><span>{{ article.category }}</span></li>
                    <li><i class="fa-regular fa-user"></i> <router-link to="/association">Organisation MDH</router-link></li>
                    <li><i class="fa-regular fa-calendar"></i> <router-link to="/actualites">{{ article.date }}</router-link></li>
                  </ul>
                </div>
                <router-link to="/actualites" class="back-link mt-15"><i class="fa-solid fa-arrow-left"></i> Retour aux actualités</router-link>
                <h2 class="blog-title">{{ article.title }}</h2>

                <slot />

                <div v-if="cta" class="mdh-note d-sm-flex align-items-center justify-content-between mt-40">
                  <div class="pe-sm-4 mb-20 mb-sm-0">
                    <h5 v-if="cta.title" class="mb-1">{{ cta.title }}</h5>
                    <span>{{ cta.text }}</span>
                  </div>
                  <template v-if="cta.to">
                    <router-link v-if="cta.to.startsWith('/')" :to="cta.to" class="btn-one xs flex-shrink-0">{{ cta.label }}</router-link>
                    <a v-else :href="cta.to" class="btn-one xs flex-shrink-0" target="_blank" rel="noopener noreferrer">{{ cta.label }}</a>
                  </template>
                </div>

                <div class="post-tags-widget">
                  <div class="d-flex flex-wrap align-items-center">
                    <strong class="fs-20 fw-500">Thèmes :</strong>
                    <ul class="style-none d-flex flex-wrap tags ms-sm-auto">
                      <li><router-link :to="{ path: '/actualites', query: { categorie: article.category } }">{{ article.category }}</router-link></li>
                      <li><router-link to="/actions">Nos actions</router-link></li>
                      <li><router-link to="/association">MDH Togo</router-link></li>
                    </ul>
                  </div>
                </div>

                <div class="pagination-two">
                  <ul class="style-none d-flex justify-content-between">
                    <li>
                      <router-link v-if="previous" :to="previous.to">
                        <span class="d-flex align-items-center">
                          <i class="bi bi-arrow-left-circle"></i>
                          <span class="ps-3 ps-md-4">
                            <span class="pr-name d-none d-md-block tran3s">{{ previous.title }}</span>
                          </span>
                        </span>
                      </router-link>
                    </li>
                    <li>
                      <router-link v-if="next" :to="next.to">
                        <span class="d-flex align-items-center text-end">
                          <span class="pe-3 pe-md-4">
                            <span class="pr-name d-none d-md-block tran3s">{{ next.title }}</span>
                          </span>
                          <i class="bi bi-arrow-right-circle"></i>
                        </span>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>

          <div class="col-lg-4">
            <aside class="template-sidebar ps-xxl-4 md-mt-60">
              <div class="widget-banner-one text-center border-10 overflow-hidden position-relative z-1">
                <div class="amount font-amita rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-heart"></i></div>
                <h5>Votre don soutient directement nos projets sur le terrain</h5>
                <router-link to="/donation" class="btn-one inverse">Faire un don</router-link>
              </div>

              <div class="sidebar-category border-10 overflow-hidden position-relative z-1 mt-40">
                <h5 class="sidebar-title">Catégories</h5>
                <ul class="style-none">
                  <li v-for="cat in categories" :key="cat.name">
                    <router-link :to="{ path: '/actualites', query: { categorie: cat.name } }" :class="{ active: cat.name === article.category }">
                      <span>{{ cat.name }}</span>
                      <span>{{ String(cat.count).padStart(2, '0') }}</span>
                    </router-link>
                  </li>
                </ul>
              </div>

              <div class="widget-banner-three border-10 overflow-hidden position-relative z-1 mt-40">
                <h5 class="sidebar-title">Autres actualités</h5>
                <div class="latest-post-wrapper">
                  <article v-for="post in others" :key="post.to" class="d-flex align-items-center flex-wrap recent-post-data">
                    <figure class="post-img" :style="{ backgroundImage: `url(${post.image})` }"></figure>
                    <div class="post-data">
                      <div class="date"><i class="fa-regular fa-calendar"></i> {{ post.date }}</div>
                      <h6 class="post-title"><router-link :to="post.to">{{ post.title }}</router-link></h6>
                    </div>
                  </article>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import PageBanner from './PageBanner.vue'
import { articles, categories } from '@/data/articles.js'

const props = defineProps({
  // { title, text, to, label } — encart d'appel à l'action en fin d'article
  cta: { type: Object, default: null },
  // Article affiché, au format des cartes d'actualité (src/data/articles.js)
  entry: { type: Object, required: true }
})

const route = useRoute()
const index = computed(() => articles.findIndex(a => a.to === route.path))
const article = computed(() => props.entry)
// Liens vers l'article plus ancien / plus récent, une fois la liste des actualités chargée
const previous = computed(() => (index.value === -1 ? null : articles[index.value + 1] || null))
const next = computed(() => (index.value > 0 ? articles[index.value - 1] : null))
const others = computed(() => articles.filter(a => a.to !== article.value.to).slice(0, 3))
</script>
