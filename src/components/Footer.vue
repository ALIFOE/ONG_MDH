<template>
  <footer class="main-footer bg-one top-space">
    <div class="container">
      <div class="position-relative top-footer">
        <div class="row">
          <div class="col-lg-3">
            <div class="footer-intro mb-30 md-mb-50">
              <router-link to="/"><img :src="images.logo" alt="MDH International Togo" class="footer-logo"></router-link>
              <p class="mt-20 mb-30 fs-16">
                MDH œuvre pour le développement humain à travers l'éducation et le soutien aux communautés vulnérables du Togo.
              </p>
              <ul class="style-none social-icon d-flex align-items-center">
                <li class="text-white">Suivez-nous</li>
                <li v-for="social in socials" :key="social.label">
                  <a :href="social.href" target="_blank" rel="noopener noreferrer" :aria-label="social.label"><i class="fa-brands" :class="social.icon"></i></a>
                </li>
              </ul>
              <router-link to="/rejoindre" class="btn-three">Nous rejoindre</router-link>
            </div>
          </div>

          <div class="col-lg-2 col-md-3">
            <div class="footer-nav ps-xxl-4 mb-30">
              <h6 class="footer-title">Liens rapides</h6>
              <ul class="footer-nav-link style-none">
                <li><router-link to="/association">L'Organisation</router-link></li>
                <li><router-link to="/actions">Nos Actions</router-link></li>
                <li><router-link to="/ecole">Notre École</router-link></li>
                <li><router-link to="/benevole">Bénévolat</router-link></li>
                <li><router-link to="/parrainage">Parrainage</router-link></li>
                <li><router-link to="/galerie">Galerie</router-link></li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-5">
            <div class="ps-xxl-4 mb-30">
              <h6 class="footer-title">Contact</h6>
              <ul class="contact-info style-none">
                <li>
                  <div class="icon d-flex align-items-center justify-content-center rounded-circle"><i class="fa-solid fa-phone"></i></div>
                  <p class="m0 d-flex flex-column">
                    <a :href="contact.phoneHref">{{ contact.phone }}</a>
                    <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                  </p>
                </li>
                <li>
                  <div class="icon d-flex align-items-center justify-content-center rounded-circle"><i class="fa-solid fa-location-dot"></i></div>
                  {{ contact.address }}, {{ contact.city }}
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-4">
            <div class="footer-news mb-30 ps-xxl-4">
              <h6 class="footer-title">Dernières actualités</h6>
              <ul class="style-none">
                <li v-for="post in latest" :key="post.to">
                  <article class="d-flex align-items-center">
                    <figure class="post-img" :style="{ backgroundImage: `url(${post.image})` }"></figure>
                    <div class="post-data">
                      <div class="date">{{ post.date }}</div>
                      <h5 class="blog-title m0"><router-link :to="post.to" class="line-bg inverse">{{ post.title }}</router-link></h5>
                    </div>
                  </article>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="bottom-footer">
        <div class="d-md-flex align-items-center justify-content-between">
          <div class="d-flex justify-content-center align-items-center sm-mb-10 order-md-last">
            <ul class="style-none d-flex justify-content-center">
              <li><router-link to="/adhesion">Adhésion</router-link></li>
              <li><router-link to="/donation">Faire un don</router-link></li>
              <li><router-link to="/contact">Contact</router-link></li>
            </ul>
          </div>
          <p class="copyright-text text-center m0">&copy; {{ year }} MDH International Togo. Tous droits réservés.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import images from '@/data/images.js'
import { contact, socials } from '@/data/site.js'
import { articles } from '@/data/articles.js'

const latest = articles.slice(0, 2)
const year = new Date().getFullYear()
</script>
