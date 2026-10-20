<template>
  <div>
    <!-- Héros -->
    <div class="hero-banner-one header-space-fix position-relative z-1 pt-140 lg-pt-120 sm-pt-90 pb-170 xl-pb-120 md-pb-100 sm-pb-70">
      <div class="box-layout-one">
        <div class="row">
          <div class="col-xl-5 col-md-6">
            <div class="slogan font-amita fs-20" data-sal="slide-up" data-sal-duration="900">
              Bienvenue chez MDH International Togo
            </div>
            <h1 class="hero-heading" data-sal="slide-up" data-sal-duration="900" data-sal-delay="300">Mobilisation pour le Développement Humain</h1>
            <p class="fs-20" data-sal="slide-up" data-sal-duration="900" data-sal-delay="500">
              Ensemble, construisons un avenir meilleur pour les communautés vulnérables à travers l'éducation et le développement durable.
            </p>
            <div class="mt-35 d-flex flex-wrap hero-ctas" data-sal="slide-up" data-sal-duration="900" data-sal-delay="700">
              <router-link to="/actions" class="btn-one">Découvrir nos actions</router-link>
              <router-link to="/parrainage" class="btn-two">Parrainer</router-link>
            </div>
            <div class="avatar-group mt-35" data-sal="slide-up" data-sal-duration="900" data-sal-delay="900">
              <ul class="style-none d-flex align-items-center">
                <li><img :src="images.image1" alt="" class="avatar rounded-circle"></li>
                <li><img :src="images.image3" alt="" class="avatar rounded-circle"></li>
                <li><img :src="images.ecole5" alt="" class="avatar rounded-circle"></li>
                <li class="fs-20">Plus de 230 enfants accompagnés depuis 2018. <router-link to="/rejoindre" class="text-decoration-underline">Nous rejoindre</router-link></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="media-wrapper" data-sal="slide-left" data-sal-duration="900" data-sal-delay="500">
          <img :src="images.photo2" alt="Enfants accompagnés par MDH" class="main-img">
          <div class="card-wrapper d-flex align-items-center">
            <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-arrow-up-right-from-square"></i></div>
            <p class="font-amita">Rejoignez nos 15 bénévoles actifs</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Nos engagements -->
    <div class="feature-block-one pt-45 lg-pt-10 pb-75 lg-pb-40">
      <div class="box-layout-one">
        <div class="row justify-content-center">
          <div v-for="(pillar, i) in pillars" :key="pillar.title" class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
            <div class="card-style-one text-center position-relative z-1 tran3s mt-25" :class="{ 'border-style': i < pillars.length - 1 }">
              <div class="icon m-auto rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid" :class="pillar.icon"></i></div>
              <h4 v-html="pillar.title"></h4>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Notre histoire -->
    <div class="feature-block-two position-relative z-1 pt-140 lg-pt-80 pb-100 lg-pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Notre histoire</div>
                <h2>Une décennie d'impact au service des communautés</h2>
              </div>
              <div class="row">
                <div class="col-xl-11">
                  <p>
                    Depuis sa fondation en 2018, MDH International Togo s'engage à transformer les vies des communautés vulnérables du Togo à travers l'éducation, la santé et le développement économique.
                  </p>
                  <ul class="style-none list-style-one d-flex flex-wrap pt-10">
                    <li>Soutien communautaire</li>
                    <li>Éducation de qualité</li>
                    <li>Développement durable</li>
                    <li>Parrainage d'enfants</li>
                  </ul>
                  <p class="mb-45 mt-30">
                    Avec plus de 7 années d'expérience, nous avons touché directement plus de 230 enfants et créé un réseau de 15 bénévoles dédiés. Notre approche participative garantit que chaque projet répond aux besoins réels des communautés.
                  </p>
                  <router-link to="/association" class="btn-two">En savoir plus</router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-left" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.votreecole})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-children"></i></div>
                <div class="text">
                  <div class="main-count"><span class="counter">230</span>+</div>
                  <p>enfants accompagnés</p>
                </div>
              </div>
              <div class="card-two text-center">
                <div class="main-count"><span class="counter">7</span>+</div>
                <p>années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shapes shape_01"></div>
    </div>

    <!-- Chiffres clés -->
    <div class="pb-130 lg-pb-80">
      <div class="container">
        <div class="row justify-content-center">
          <div v-for="(stat, i) in stats" :key="stat.label" class="col-md-3 col-sm-6">
            <div class="counter-block-one text-center mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
              <div class="main-count"><span class="counter">{{ stat.value }}</span>{{ stat.suffix }}</div>
              <p>{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Domaines d'action -->
    <div class="causes-section-one position-relative z-1 pt-130 lg-pt-80 pb-100 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30 lg-mb-10" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Ce que nous faisons</div>
          <h2>Nos domaines d'action</h2>
        </div>
      </div>
      <div class="box-layout-one">
        <div class="row">
          <div v-for="(domain, i) in domains" :key="domain.title" class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 100">
            <div class="card-style-two mt-30">
              <div class="media-bg" :style="{ backgroundImage: `url(${domain.image})` }"></div>
              <div class="info-meta position-relative z-1">
                <div class="tags">{{ domain.tag }}</div>
                <h4><router-link to="/actions" class="line-bg">{{ domain.title }}</router-link></h4>
                <p class="fs-16">{{ domain.text }}</p>
                <ul class="mdh-check-list">
                  <li v-for="point in domain.points" :key="point">{{ point }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dernier projet -->
    <div class="feature-block-three position-relative z-1 pt-140 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex order-lg-last" data-sal="slide-left" data-sal-duration="900">
            <div class="ps-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Notre dernier projet</div>
                <h2>Une nouvelle école primaire</h2>
              </div>
              <p>Construction d'une nouvelle école primaire qui accueillera plus de 200 élèves dès la rentrée prochaine.</p>
              <div class="card-one d-flex align-items-center mt-30 mb-50 lg-mb-30">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-school"></i></div>
                <div class="text">
                  <div class="main-count font-amita"><span class="counter">200</span>+</div>
                  <p class="fs-16 fw-500">élèves accueillis dès la rentrée</p>
                </div>
              </div>
              <ul class="style-none list-style-two">
                <li><span>6 salles de classe modernes, équipées de matériel pédagogique</span></li>
                <li><span>Bibliothèque et salle informatique</span></li>
                <li><span>Cantine scolaire : des repas nutritifs pour tous</span></li>
              </ul>
              <router-link to="/actions" class="btn-one mt-45">Découvrir nos projets</router-link>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-right" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.ecole3})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-chalkboard-user"></i></div>
                <div class="text">
                  <div class="main-count"><span class="counter">6</span></div>
                  <p>salles de classe</p>
                </div>
              </div>
              <div class="years">
                Juin
                <span>2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bandeau défilant -->
    <div class="event-text-slider-bg">
      <div class="mdh-marquee" aria-hidden="true">
        <div v-for="(word, i) in [...marquee, ...marquee]" :key="i" class="item">
          <i class="fa-solid fa-heart"></i>{{ word }}
        </div>
      </div>
    </div>

    <!-- Nos valeurs -->
    <div class="feature-block-seven no-extend position-relative pt-120 lg-pt-80 pb-120 lg-pb-80">
      <div class="container">
        <div class="title-one text-center" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Ce qui nous guide</div>
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

    <!-- Témoignages -->
    <div class="feedback-section-one position-relative z-1 pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-70 lg-mb-50" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Témoignages</div>
          <h2>Ils nous font confiance</h2>
        </div>

        <div class="row">
          <div class="col-lg-10 m-auto">
            <div class="feedback-slider-one" aria-live="polite">
              <Transition name="feedback-fade" mode="out-in">
                <div :key="current" class="item">
                  <div class="feedback-wrapper">
                    <div class="avatar-initials">{{ testimonials[current].initials }}</div>
                    <div class="bg-wrapper">
                      <div class="rating">
                        <ul class="style-none d-inline-flex justify-content-center" aria-label="5 étoiles sur 5">
                          <li v-for="n in 5" :key="n"><i class="fa-solid fa-star"></i></li>
                        </ul>
                      </div>
                      <blockquote>« {{ testimonials[current].quote }} »</blockquote>
                      <div class="name-wrapper d-flex align-items-center justify-content-center mb-25">
                        <h5 class="name">{{ testimonials[current].name }}</h5>
                        <span>{{ testimonials[current].role }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
        </div>

        <ul class="slider-arrows d-flex justify-content-center style-none position-relative mt-60 md-mt-40">
          <li role="button" tabindex="0" aria-label="Témoignage précédent" @click="prevTestimonial" @keydown.enter="prevTestimonial">
            <i class="fa-solid fa-chevron-left"></i>
          </li>
          <li role="button" tabindex="0" aria-label="Témoignage suivant" @click="nextTestimonial" @keydown.enter="nextTestimonial">
            <i class="fa-solid fa-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>

    <!-- Faire un don -->
    <div class="feature-block-four position-relative z-1 pt-150 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-7" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-xl-4">
              <div class="title-one mb-30">
                <div class="upper-title">Soutenez nos actions</div>
                <h2>Votre générosité transforme des vies</h2>
              </div>
              <p>
                Votre contribution soutient directement nos projets d'éducation, de santé et de développement durable au Togo. Chaque geste compte, qu'il soit ponctuel ou régulier.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-box mt-20" style="background: #fbf8e8;">
                    <div class="d-flex align-items-center">
                      <div class="icon rounded-circle"></div>
                      <h5>Parrainage</h5>
                    </div>
                    <p class="fs-16">Permettez à un enfant d'accéder à l'école et aux soins, et créez un lien solidaire durable.</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-box mt-20" style="background: #e0e9f6;">
                    <div class="d-flex align-items-center">
                      <div class="icon rounded-circle"></div>
                      <h5>Bénévolat</h5>
                    </div>
                    <p class="fs-16">Donnez de votre temps et de vos compétences lors de nos camps chantiers et missions solidaires.</p>
                  </div>
                </div>
              </div>
              <ul class="style-none d-flex flex-wrap align-items-center justify-content-between mt-30">
                <li class="mt-15"><span>Chaque contribution compte pour les enfants du Togo</span></li>
                <li><router-link to="/donation" class="btn-two xs mt-15">Faire un don</router-link></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto">
            <div class="media-bg rounded-circle" :style="{ backgroundImage: `url(${images.ecole8})` }">
              <div class="card-one d-flex align-items-center">
                <div class="text">
                  <div class="main-count"><span class="counter">1200</span>+</div>
                  <p>bénéficiaires directs</p>
                </div>
                <i class="fa-solid fa-hand-holding-heart icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Partenaires -->
    <div class="feature-block-one pt-120 lg-pt-80 pb-100 lg-pb-60">
      <div class="container">
        <div class="title-one text-center" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Ensemble, plus loin</div>
          <h2>Nos partenaires de confiance</h2>
        </div>
        <div class="row justify-content-center mt-30">
          <div v-for="(partner, i) in partners" :key="partner.title" class="col-lg-3 col-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
            <div class="card-style-one text-center position-relative z-1 tran3s mt-25" :class="{ 'border-style': i < partners.length - 1 }">
              <div class="icon m-auto rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid" :class="partner.icon"></i></div>
              <h4>{{ partner.title }}</h4>
            </div>
          </div>
        </div>
        <div class="text-center mt-50">
          <p class="fw-500 mb-25">Vous souhaitez devenir partenaire de MDH ?</p>
          <router-link to="/contact" class="btn-one">Nous contacter</router-link>
        </div>
      </div>
    </div>

    <!-- Actualités -->
    <div class="blog-section-one pt-130 lg-pt-80 pb-170 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30 lg-mb-10" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Sur le terrain</div>
          <h2>Nos dernières actualités</h2>
        </div>
      </div>
      <div class="box-layout-two">
        <div class="row">
          <div v-for="(post, i) in latestPosts" :key="post.to" class="col-xl-3 col-md-6" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 100">
            <BlogCard :post="post" />
          </div>
        </div>
      </div>
      <div class="text-center mt-50">
        <router-link to="/actualites" class="btn-two">Toutes les actualités</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import BlogCard from '@/components/BlogCard.vue'
import images from '@/data/images.js'
import { articles } from '@/data/articles.js'

const pillars = [
  { icon: 'fa-book-open-reader', title: 'Éducation <br> de qualité' },
  { icon: 'fa-heart-pulse', title: 'Santé & <br> bien-être' },
  { icon: 'fa-seedling', title: 'Développement <br> durable' },
  { icon: 'fa-people-group', title: 'Autonomisation <br> communautaire' }
]

const stats = [
  { value: 230, suffix: '+', label: 'Enfants accompagnés' },
  { value: 6, suffix: '', label: 'Projets réalisés' },
  { value: 15, suffix: '', label: 'Bénévoles actifs' },
  { value: 7, suffix: '', label: "Années d'expérience" }
]

const domains = [
  {
    tag: 'Éducation',
    title: 'Éducation',
    image: images.education1,
    text: "Construction d'écoles, programmes scolaires, soutien académique et formation professionnelle pour les enfants et les jeunes.",
    points: ['230+ enfants accompagnés', 'Programmes personnalisés']
  },
  {
    tag: 'Environnement',
    title: 'Développement durable',
    image: images.agriculture1,
    text: "Projets d'infrastructure, construction écologique, création d'emplois locaux et gestion des ressources naturelles.",
    points: ['Projets verts', 'Emplois créés']
  },
  {
    tag: 'Santé',
    title: 'Santé & bien-être',
    image: images.sante1,
    text: "Sensibilisation à la santé, nutrition, hygiène, accès aux soins de base et soutien aux familles vulnérables.",
    points: ['Campagnes de sensibilisation', 'Soutien communautaire']
  },
  {
    tag: 'Communauté',
    title: 'Autonomisation communautaire',
    image: images.sensibilisation1,
    text: 'Formation des femmes, renforcement des capacités, gouvernance locale et droits fonciers pour tous.',
    points: ['Formations inclusives', 'Droits des femmes']
  }
]

const marquee = ['Éducation', 'Santé', 'Solidarité', 'Bénévolat', 'Parrainage', 'Développement durable']

const values = [
  { icon: 'fa-handshake', title: 'Transparence', text: 'Nous agissons avec intégrité et rendons compte de nos actions à nos partenaires.' },
  { icon: 'fa-bullseye', title: 'Impact mesurable', text: "Nous mesurons et documentons l'impact réel de nos interventions." },
  { icon: 'fa-leaf', title: 'Durabilité', text: 'Nous créons des solutions durables pour un changement à long terme.' },
  { icon: 'fa-heart', title: 'Inclusion', text: 'Tous les membres de la communauté sont valorisés et impliqués.' }
]

const testimonials = [
  { initials: 'ML', name: 'Marie Laurent', role: 'Enseignante', quote: "L'impact sur nos élèves est remarquable. Les nouvelles installations ont vraiment changé leur manière d'apprendre." },
  { initials: 'PD', name: 'Paul Dubois', role: 'Partenaire local', quote: 'MDH a transformé notre communauté avec des projets durables qui continuent de porter leurs fruits.' },
  { initials: 'SM', name: 'Sophie Martin', role: 'Bénéficiaire', quote: "Grâce à MDH, j'ai pu continuer mes études. Merci pour votre soutien constant et votre dévouement." }
]

const partners = [
  { icon: 'fa-globe', title: 'ONG internationales' },
  { icon: 'fa-scale-balanced', title: 'Gouvernement local' },
  { icon: 'fa-handshake-angle', title: 'Associations locales' },
  { icon: 'fa-building-columns', title: 'Institutions éducatives' }
]

const latestPosts = computed(() => articles.slice(0, 4))

const current = ref(0)
const nextTestimonial = () => { current.value = (current.value + 1) % testimonials.length }
const prevTestimonial = () => { current.value = (current.value - 1 + testimonials.length) % testimonials.length }

let timer = null
onMounted(() => { timer = setInterval(nextTestimonial, 7000) })
onBeforeUnmount(() => clearInterval(timer))
</script>
