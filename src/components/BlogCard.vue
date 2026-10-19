<template>
  <article class="blog-meta-one mt-30">
    <div class="post-info">
      <ul class="style-none post-author d-flex justify-content-center flex-wrap">
        <li><span>{{ post.category }}</span></li>
        <li><i class="fa-regular fa-calendar"></i> <router-link :to="post.to">{{ post.date }}</router-link></li>
      </ul>
    </div>
    <router-link :to="post.to" class="d-block" tabindex="-1" aria-hidden="true">
      <div class="img-meta" :style="{ backgroundImage: `url(${post.image})` }"></div>
    </router-link>
    <div class="post-meta">
      <h4 class="blog-title"><router-link :to="post.to" class="line-bg">{{ post.title }}</router-link></h4>
      <p v-if="showExcerpt" class="fs-16">{{ post.excerpt }}</p>
      <ul class="style-none bottom-widget d-flex flex-wrap">
        <li><router-link :to="post.to" class="details-cta tran3s">Lire la suite</router-link></li>
      </ul>
    </div>
  </article>
</template>

<script setup>
defineProps({
  // élément de src/data/articles.js
  post: { type: Object, required: true },
  showExcerpt: { type: Boolean, default: false }
})
</script>
