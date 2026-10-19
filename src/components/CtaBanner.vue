<template>
  <div class="fancy-banner-one position-relative z-2 style-one">
    <div class="box-layout-two">
      <div class="bg-wrapper position-relative z-1" :style="{ backgroundImage: `url(${images.ecole4})` }">
        <div class="container">
          <div class="row">
            <div class="col-xxl-8 col-xl-7 col-lg-8">
              <div class="title-one mb-25 lg-mb-20" data-sal="slide-up" data-sal-duration="900">
                <h2 class="text-white">Ensemble, changeons des vies</h2>
              </div>
              <p class="fw-500 text-white mb-50 lg-mb-30">
                Votre soutien peut faire une réelle différence. Rejoignez-nous dans notre mission pour un monde meilleur et plus équitable.
              </p>
              <div class="d-flex flex-wrap cta-group">
                <router-link to="/donation" class="btn-one inverse">Faire un don</router-link>
                <router-link to="/benevole" class="btn-two">Devenir bénévole</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import images from '@/data/images.js'
</script>
