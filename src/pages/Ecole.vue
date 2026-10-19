<template>
  <div>
    <PageBanner
      title="Notre école"
      :crumbs="[{ label: `L'École` }]"
      :image="images.ecole8"
      subtitle="Un lieu d'apprentissage et d'épanouissement pour les enfants du Togo."
    />

    <!-- Présentation -->
    <div class="feature-block-two position-relative z-1 pt-140 lg-pt-80 pb-130 lg-pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">École Primaire Bilingue PENEALE</div>
                <h2>Une éducation de qualité pour tous</h2>
              </div>
              <p>
                Située dans la région maritime, commune Golfe 7, quartier Apédokoè au Togo, l'école Primaire Bilingue PENEALE accueille plus de 200 élèves âgés de 3 à 15 ans. De la maternelle au primaire, nous offrons un enseignement complet et de qualité, alliant respect des traditions locales et ouverture sur les standards éducatifs internationaux.
              </p>
              <div class="row mt-10">
                <div v-for="(stat, i) in stats" :key="stat.label" class="col-sm-3 col-6">
                  <div class="counter-block-one text-center mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
                    <div class="main-count"><span class="counter">{{ stat.value }}</span>{{ stat.suffix }}</div>
                    <p>{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-left" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.ecole8})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-graduation-cap"></i></div>
                <div class="text">
                  <div class="main-count">3 à 15 ans</div>
                  <p>de la maternelle au primaire</p>
                </div>
              </div>
              <div class="card-two text-center">
                <div class="main-count">Bilingue</div>
                <p>français · anglais</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shapes shape_01"></div>
    </div>

    <!-- Installations -->
    <div class="mdh-section-soft pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Au service des élèves</div>
          <h2>Nos installations en détail</h2>
        </div>
        <div class="row">
          <div v-for="(facility, i) in facilities" :key="facility.title" class="col-lg-4 col-md-6 mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
            <div class="mdh-card">
              <div class="card-icon"><i class="fa-solid" :class="facility.icon"></i></div>
              <h4>{{ facility.title }}</h4>
              <p>{{ facility.intro }}</p>
              <ul class="mdh-check-list">
                <li v-for="point in facility.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Inscriptions -->
    <div class="feature-block-three position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-last" data-sal="slide-left" data-sal-duration="900">
            <div class="ps-lg-5">
              <div class="title-one mb-30">
                <div class="upper-title">Année scolaire 2025-2026</div>
                <h2>Inscriptions 2025</h2>
              </div>
              <p>Les inscriptions pour l'année scolaire 2025-2026 sont ouvertes. Rejoignez notre communauté éducative !</p>
              <router-link to="/inscription-vacances-2025" class="btn-one mt-30">S'inscrire maintenant</router-link>
            </div>
          </div>
          <div class="col-lg-6 md-mt-50" data-sal="slide-right" data-sal-duration="900">
            <div class="mdh-media-grid">
              <img :src="images.ecole3" alt="Bâtiment de l'école">
              <img :src="images.ecole4" alt="Salle de classe">
              <img :src="images.education2" alt="Élèves en classe">
              <img :src="images.photoEcole" alt="Vie scolaire">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

const stats = [
  { value: 200, suffix: '+', label: 'Élèves' },
  { value: 12, suffix: '', label: 'Enseignants' },
  { value: 8, suffix: '', label: 'Classes' },
  { value: 95, suffix: '%', label: 'Réussite' }
]

const facilities = [
  {
    icon: 'fa-briefcase-medical',
    title: 'Infirmerie',
    intro: 'Un espace sécurisé et encadré par du personnel qualifié :',
    points: ['Premiers soins', 'Surveillance de la santé des enfants', 'Prise en charge rapide en cas de malaise ou de blessure', 'Accompagnement attentif des enfants fragiles ou souffrants']
  },
  {
    icon: 'fa-book-open',
    title: 'Alphabétisation',
    intro: "Nous proposons un accompagnement spécifique pour les enfants et adultes n'ayant pas :",
    points: ["Acquis les bases de la lecture et de l'écriture", "Espace d'apprentissage favorisant l'inclusion scolaire", 'Aide à progresser à son rythme, quelles que soient les origines linguistiques']
  },
  {
    icon: 'fa-laptop-code',
    title: 'Salle informatique',
    intro: 'Équipée de matériel adapté, la salle informatique permet aux enfants de se familiariser avec les outils numériques :',
    points: ['Apprendre à utiliser un ordinateur', 'Découvrir des contenus éducatifs', "Développer des compétences utiles à la réussite scolaire et à l'insertion professionnelle"]
  }
]
</script>
