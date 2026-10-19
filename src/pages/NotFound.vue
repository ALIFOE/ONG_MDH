<template>
  <div>
    <PageBanner title="Page non trouvée" :crumbs="[{ label: 'Erreur 404' }]" :image="images.image3" />

    <div class="pt-130 lg-pt-80 pb-140 lg-pb-80 text-center">
      <div class="container">
        <div class="not-found-code">404</div>
        <h2 class="mt-20 mb-20">Désolé, la page que vous cherchez n'existe pas.</h2>
        <p class="mb-40">Elle a peut-être été déplacée ou supprimée. Revenez à l'accueil ou découvrez nos actions.</p>
        <div class="d-flex flex-wrap justify-content-center gap-3">
          <router-link to="/" class="btn-one">Retour à l'accueil</router-link>
          <router-link to="/actions" class="btn-two">Nos actions</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'
</script>
