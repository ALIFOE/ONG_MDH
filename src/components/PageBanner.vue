<template>
  <div
    class="inner-banner-one header-space-fix text-center position-relative z-1"
    :style="image ? { backgroundImage: `url(${image})` } : null"
  >
    <div class="container">
      <h1 class="banner-title">{{ title }}</h1>
      <div class="breadcrumb-content">
        <ul class="style-none d-inline-flex flex-wrap justify-content-center position-relative z-1">
          <li><router-link to="/">Accueil</router-link></li>
          <template v-for="(crumb, index) in crumbs" :key="index">
            <li>-</li>
            <li>
              <router-link v-if="crumb.to" :to="crumb.to">{{ crumb.label }}</router-link>
              <template v-else>{{ crumb.label }}</template>
            </li>
          </template>
        </ul>
      </div>
      <p v-if="subtitle" class="banner-subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  // [{ label, to? }] — le dernier élément représente la page courante
  crumbs: { type: Array, default: () => [] },
  image: { type: String, default: '' },
  subtitle: { type: String, default: '' }
})
</script>
