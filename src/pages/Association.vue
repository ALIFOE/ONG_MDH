<template>
  <div>
    <PageBanner
      title="L'Organisation"
      :crumbs="[{ label: `L'Organisation` }]"
      :image="images.votreecole"
      subtitle="Mobilisation pour le Développement Humain : une ONG togolaise fondée en 2018 par de jeunes bénévoles."
    />

    <!-- Qui sommes-nous -->
    <div class="feature-block-two position-relative z-1 pt-140 lg-pt-80 pb-130 lg-pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Qui sommes-nous ?</div>
                <h2>L'être humain au cœur de toutes nos actions</h2>
              </div>
              <div class="row">
                <div class="col-xxl-11">
                  <p>
                    Mobilisation pour le Développement Humain est une organisation non gouvernementale fondée en 2018, fruit d'une initiative portée par des jeunes bénévoles animés d'une vision commune : placer l'être humain au cœur de toutes leurs actions pour édifier une société véritablement responsable.
                  </p>
                  <h4 class="mt-30 mb-15">Notre vision</h4>
                  <p class="mb-45">
                    L'Organisation MDH vise à contribuer à l'amélioration des conditions de vie socioéconomique et culturelle des communautés de base dans une approche de développement humain durable et participatif.
                  </p>
                  <router-link to="/notre-equipe" class="btn-two">Notre équipe</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-left" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.ecole8})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-flag"></i></div>
                <div class="text">
                  <div class="main-count">2018</div>
                  <p>année de création</p>
                </div>
              </div>
              <div class="card-two text-center">
                <div class="main-count"><span class="counter">230</span>+</div>
                <p>enfants accompagnés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shapes shape_01"></div>
    </div>

    <!-- Valeurs -->
    <div class="feature-block-seven position-relative pt-120 lg-pt-50 pb-100 lg-pb-70">
      <div class="container">
        <div class="title-one text-center" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Ce qui nous anime</div>
          <h2>Nos valeurs fondamentales</h2>
        </div>
      </div>
      <div class="box-layout-two">
        <div class="box-wrapper d-flex flex-wrap align-items-stretch justify-content-center">
          <div v-for="(value, i) in values" :key="value.title" class="card-box mt-25" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
            <div class="icon rounded-circle m-auto d-flex align-items-center justify-content-center"><i class="fa-solid" :class="value.icon"></i></div>
            <h5>{{ value.title }}</h5>
            <p>{{ value.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Chiffres -->
    <div class="counter-section-one position-relative z-2">
      <div class="bg-wrapper">
        <div class="container">
          <div class="row justify-content-center">
            <div v-for="(stat, i) in stats" :key="stat.label" class="col-md-4 col-sm-6">
              <div class="counter-block-one text-center mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
                <div class="main-count"><span class="counter">{{ stat.value }}</span>{{ stat.suffix }}</div>
                <p>{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission & objectifs -->
    <div class="feature-block-three bg-color position-relative z-1 pt-300 lg-pt-200 pb-200 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex order-lg-last" data-sal="slide-left" data-sal-duration="900">
            <div class="ps-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Notre mission</div>
                <h2>Un impact positif et durable</h2>
              </div>
              <p>
                MDH est une organisation non gouvernementale dédiée au développement humain durable. Notre mission est de créer un impact positif dans les communautés à travers l'éducation, la santé et le développement durable en favorisant l'autonomisation des populations locales.
              </p>
              <h4 class="text-white mt-40 mb-25">Nos objectifs</h4>
              <ul class="style-none list-style-two">
                <li v-for="goal in goals" :key="goal"><span>{{ goal }}</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-right" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.education2})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-hands-holding-child"></i></div>
                <div class="text">
                  <div class="main-count"><span class="counter">7</span>+</div>
                  <p>années d'expérience</p>
                </div>
              </div>
              <div class="years">
                Depuis
                <span>2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Équipe -->
    <div class="pt-130 lg-pt-80 pb-130 lg-pb-80 text-center">
      <div class="container">
        <div class="title-one mb-25" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Les visages de MDH</div>
          <h2>Découvrez notre équipe</h2>
        </div>
        <p class="mb-40">Rencontrez les personnes passionnées qui font fonctionner notre organisation chaque jour.</p>
        <router-link to="/notre-equipe" class="btn-one">Voir notre équipe</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

const values = [
  { icon: 'fa-scale-balanced', title: 'Intégrité', text: 'Nous agissons avec transparence et honnêteté dans toutes nos actions.' },
  { icon: 'fa-handshake', title: 'Engagement', text: 'Nous sommes profondément engagés envers nos bénéficiaires et partenaires.' },
  { icon: 'fa-leaf', title: 'Durabilité', text: 'Nous créons des solutions durables et pérennes pour les communautés.' },
  { icon: 'fa-users', title: 'Inclusion', text: "Nous promouvons l'égalité et l'inclusion sociale pour tous." }
]

const stats = [
  { value: 230, suffix: '+', label: 'Enfants accompagnés' },
  { value: 1200, suffix: '+', label: 'Bénéficiaires directs' },
  { value: 15, suffix: '', label: 'Bénévoles actifs' }
]

const goals = [
  "S'investir dans l'éducation inclusive",
  'Mettre en place un programme de parrainage en faveur des enfants en situation de vulnérabilité',
  "Faciliter l'accès des populations à des soins de qualité",
  'Promouvoir la démocratie, la paix, la non-violence et la tolérance',
  'Promouvoir les échanges culturels',
  'Soutenir les initiatives des femmes et des jeunes',
  'Œuvrer pour la bonne gouvernance',
  "Promouvoir l'équité genre"
]
</script>
