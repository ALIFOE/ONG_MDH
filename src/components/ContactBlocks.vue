<template>
  <div class="row">
    <div class="col-lg-4">
      <div class="address-block text-center mt-25">
        <div class="icon m-auto rounded-circle d-flex align-items-end justify-content-center">
          <div class="icon-bg d-flex align-items-center justify-content-center"><i class="fa-solid fa-location-dot"></i></div>
        </div>
        <h6 class="font-amita">Notre adresse</h6>
        <p>{{ contact.address }} <br>{{ contact.city }}</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="address-block text-center mt-25">
        <div class="icon m-auto rounded-circle d-flex align-items-end justify-content-center">
          <div class="icon-bg d-flex align-items-center justify-content-center"><i class="fa-solid fa-phone"></i></div>
        </div>
        <h6 class="font-amita">Téléphone</h6>
        <p><a :href="contact.phoneHref">{{ contact.phone }}</a> <br>{{ contact.hours }}</p>
      </div>
    </div>
    <div class="col-lg-4">
      <div class="address-block text-center mt-25">
        <div class="icon m-auto rounded-circle d-flex align-items-end justify-content-center">
          <div class="icon-bg d-flex align-items-center justify-content-center"><i class="fa-solid fa-envelope"></i></div>
        </div>
        <h6 class="font-amita">Email</h6>
        <p><a :href="`mailto:${contact.email}`">{{ contact.email }}</a> <br>Réponse sous 24-48 heures</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { contact } from '@/data/site.js'
</script>
