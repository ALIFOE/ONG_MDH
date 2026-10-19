<template>
  <div>
    <PageBanner
      title="Nos actions"
      :crumbs="[{ label: 'Nos actions' }]"
      :image="images.education1"
      subtitle="Les trois piliers de notre engagement : l'Éducation, la Santé et le Développement Durable."
    />

    <!-- Trois domaines -->
    <div class="causes-section-one position-relative z-1 pt-130 lg-pt-80 pb-100 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30 lg-mb-10" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Nos piliers</div>
          <h2>Trois domaines d'intervention</h2>
        </div>
        <div class="row">
          <div v-for="(domain, i) in domains" :key="domain.title" class="col-lg-4 col-md-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
            <div class="card-style-two mt-30">
              <div class="media-bg" :style="{ backgroundImage: `url(${domain.image})` }"></div>
              <div class="info-meta position-relative z-1">
                <div class="tags">{{ domain.tag }}</div>
                <h4><router-link :to="{ hash: domain.anchor }" class="line-bg">{{ domain.title }}</router-link></h4>
                <p class="fs-16">{{ domain.text }}</p>
                <ul class="mdh-check-list">
                  <li v-for="point in domain.points" :key="point">{{ point }}</li>
                </ul>
                <router-link :to="{ hash: domain.anchor }" class="btn-two xs mt-20">En savoir plus</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Éducation -->
    <div id="education" class="feature-block-two position-relative z-1 pt-140 lg-pt-80 pb-130 lg-pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Éducation</div>
                <h2>Nos actions en éducation</h2>
              </div>
              <p>
                Nous construisons une nouvelle école et poursuivons nos actions pour offrir une éducation de qualité à tous les enfants, en collaboration avec les communautés locales.
              </p>
              <ul class="style-none list-style-one d-flex flex-wrap pt-10">
                <li>Construction d'écoles</li>
                <li>Formation d'enseignants</li>
                <li>Fournitures scolaires</li>
                <li>Soutien scolaire</li>
              </ul>
              <div class="row mt-20">
                <div v-for="stat in educationStats" :key="stat.label" class="col-6">
                  <div class="counter-block-one text-start mt-25">
                    <div class="main-count"><span class="counter">{{ stat.value }}</span>{{ stat.suffix }}</div>
                    <p>{{ stat.label }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-left" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.formation})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div class="text">
                  <div class="main-count"><span class="counter">13</span></div>
                  <p>enseignants formés</p>
                </div>
              </div>
              <div class="card-two text-center">
                <div class="main-count"><span class="counter">95</span>%</div>
                <p>taux de réussite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shapes shape_01"></div>
    </div>

    <!-- Impact global -->
    <div id="impact" class="pb-130 lg-pb-80">
      <div class="counter-section-one position-relative z-2">
        <div class="bg-wrapper">
          <div class="container">
            <div class="title-one text-center mb-20">
              <div class="upper-title">Ensemble, nous faisons la différence</div>
              <h2>Notre impact global</h2>
            </div>
            <div class="row justify-content-center">
              <div v-for="(stat, i) in globalStats" :key="stat.label" class="col-md-3 col-sm-6">
                <div class="counter-block-one text-center mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
                  <div class="main-count"><span class="counter">{{ stat.value }}</span>{{ stat.suffix }}</div>
                  <p>{{ stat.label }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission 5 -->
    <div class="feature-block-three mdh-section-soft position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-last" data-sal="slide-left" data-sal-duration="900">
            <div class="ps-lg-5">
              <div class="title-one mb-30">
                <div class="upper-title">Mission 5</div>
                <h2>Encadrement et animation pour les enfants</h2>
              </div>
              <p>
                Cette mission offre aux volontaires l'opportunité de s'impliquer directement auprès des enfants accompagnés par notre ONG. Elle consiste à participer à leur éducation, leur bien-être et leur épanouissement à travers diverses activités éducatives, ludiques et socio-culturelles.
              </p>
              <h4 class="mt-30 mb-20">Principales activités</h4>
              <ul class="style-none list-style-two">
                <li v-for="activity in mission5" :key="activity"><span>{{ activity }}</span></li>
              </ul>
              <button type="button" class="btn-one mt-40" @click="goToVolunteer('mission5')">S'impliquer dans cette mission</button>
            </div>
          </div>
          <div class="col-lg-6 md-mt-50" data-sal="slide-right" data-sal-duration="900">
            <div class="mdh-media-grid">
              <img :src="images.ecole5" alt="Enfants - Animation 1">
              <img :src="images.votreecole" alt="Enfants - Animation 2">
              <img :src="images.ecole4" alt="Enfants - Animation 3">
              <img :src="images.education1" alt="Enfants - Animation 4">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Mission 6 -->
    <div id="developpement" class="feature-block-three position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5">
              <div class="title-one mb-30">
                <div class="upper-title">Mission 6</div>
                <h2>Agroécologie et agriculture durable</h2>
              </div>
              <p>
                Cette mission s'adresse aux volontaires souhaitant contribuer à la promotion de pratiques agricoles respectueuses de l'environnement et favorables à l'autonomisation des communautés locales.
              </p>
              <h4 class="mt-30 mb-20">Principales activités</h4>
              <ul class="style-none list-style-two">
                <li v-for="activity in mission6" :key="activity"><span>{{ activity }}</span></li>
              </ul>
              <button type="button" class="btn-one mt-40" @click="goToVolunteer('mission6')">Rejoindre cette mission</button>
            </div>
          </div>
          <div class="col-lg-6 md-mt-50" data-sal="slide-left" data-sal-duration="900">
            <div class="mdh-media-grid">
              <img :src="images.agriculture1" alt="Agriculture - Potager">
              <img :src="images.debutChantier" alt="Agriculture - Chantier">
              <img :src="images.image1" alt="Agriculture - Femmes">
              <img :src="images.ecole3" alt="Agriculture - Formation">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import PageBanner from '@/components/PageBanner.vue'
import images from '@/data/images.js'

const router = useRouter()

const domains = [
  {
    tag: 'Éducation',
    title: 'Éducation',
    image: images.education1,
    anchor: '#education',
    text: 'Notre engagement pour une éducation de qualité inclut :',
    points: ["Construction d'écoles", "Formation d'enseignants", 'Fournitures scolaires']
  },
  {
    tag: 'Santé',
    title: 'Santé',
    image: images.sante1,
    anchor: '#impact',
    text: 'Nos actions pour améliorer la santé des communautés incluent :',
    points: ['Campagnes de vaccination', 'Centres de santé', 'Sensibilisation hygiène']
  },
  {
    tag: 'Environnement',
    title: 'Développement durable',
    image: images.agriculture1,
    anchor: '#developpement',
    text: 'Nos initiatives pour un développement durable comprennent :',
    points: ['Agriculture durable', "Accès à l'eau potable", 'Énergies renouvelables']
  }
]

const educationStats = [
  { value: 1, suffix: '', label: 'École en construction' },
  { value: 230, suffix: '+', label: 'Enfants accompagnés' }
]

const globalStats = [
  { value: 1, suffix: '', label: 'École en construction' },
  { value: 1200, suffix: '+', label: 'Bénéficiaires directs' },
  { value: 1, suffix: '', label: "Pays d'intervention" },
  { value: 15, suffix: '', label: 'Bénévoles actifs' }
]

const mission5 = [
  "Aide à la lecture, initiation au français ou à l'anglais, activités pédagogiques adaptées",
  "Organisation d'ateliers créatifs, jeux collectifs, activités sportives et manuelles",
  'Accompagnement des enfants durant leur journée, participation à la surveillance',
  "Appui aux programmes d'éducation à l'hygiène, environnement, citoyenneté et vivre-ensemble",
  'Écoute, soutien moral et participation à leur intégration sociale'
]

const mission6 = [
  "Développement de potagers pédagogiques, cultures maraîchères, plantation d'arbres fruitiers ou forestiers",
  'Éducation aux bonnes pratiques environnementales, gestion des déchets, protection des sols et biodiversité',
  'Formation et accompagnement des femmes et des jeunes sur la sécurité alimentaire',
  'Promotion de pratiques résilientes face au changement climatique'
]

const goToVolunteer = (mission) => {
  // Rediriger vers la page de bénévolat avec la mission sélectionnée
  router.push({
    name: 'Rejoindre',
    query: { mission: mission }
  })
}
</script>
