<template>
  <div>
    <!-- Bouton flottant : Vacances Utiles 2025 -->
    <router-link to="/actualites/vacances-utiles-2025" class="btn-one inverse floating-cta">
      <i class="fa-solid fa-star"></i>Programme de Vacances Utiles 2025
    </router-link>

    <PageBanner
      title="Devenir bénévole"
      :crumbs="[{ label: `S'engager` }, { label: 'Devenir bénévole' }]"
      :image="images.article3"
      subtitle="Rejoignez notre mission de solidarité et d'engagement humain à travers le volontariat."
    />

    <!-- Qu'est-ce que c'est ? -->
    <div class="feature-block-two position-relative z-1 pt-140 lg-pt-80 pb-130 lg-pb-60">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 d-flex" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5 w-100">
              <div class="title-one mb-30">
                <div class="upper-title">Le programme de volontariat</div>
                <h2>Qu'est-ce que c'est ?</h2>
              </div>
              <p>
                Le programme de volontariat de l'ONG MDH a pour ambition de renforcer la coopération pour le développement humain et durable entre les communautés togolaises et les citoyens du monde.
              </p>
              <p>
                Notre idée est simple : ouvrir nos portes à des volontaires internationaux tout au long de l'année, afin d'allier solidarité, engagement humain et rencontre interculturelle.
              </p>
              <p>
                Ce programme se veut une véritable expérience touristique participative. Les volontaires apportent leur temps, leurs compétences et leur énergie à des projets de développement local tout en découvrant les richesses du Togo : ses paysages, ses traditions, sa gastronomie et l'hospitalité chaleureuse de sa population.
              </p>
              <div class="mdh-note mt-30">
                <strong>Conditions de participation :</strong> être âgé d'au moins 18 ans ou être accompagné d'au moins un parent pour les mineurs.
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-8 me-auto ms-auto d-flex md-mt-60" data-sal="slide-left" data-sal-duration="900">
            <div class="media-bg position-relative z-1 w-100" :style="{ backgroundImage: `url(${images.visite1})` }">
              <div class="card-one d-flex align-items-center">
                <div class="icon rounded-circle d-flex align-items-center justify-content-center"><i class="fa-solid fa-earth-africa"></i></div>
                <div class="text">
                  <div class="main-count">Toute l'année</div>
                  <p>accueil des volontaires</p>
                </div>
              </div>
              <div class="card-two text-center">
                <div class="main-count">18 ans</div>
                <p>âge minimum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="shapes shape_01"></div>
    </div>

    <!-- Comment participer ? -->
    <div class="mdh-section-soft pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Deux options</div>
          <h2>Comment participer ?</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 mt-30" data-sal="slide-up" data-sal-duration="900">
            <div class="mdh-card">
              <div class="card-icon"><i class="fa-solid fa-users"></i></div>
              <h4>Camps chantiers</h4>
              <p>Participer à un camp chantier géré par l'ONG MDH pour une durée minimale de deux semaines.</p>
              <div class="mdh-note mt-20">
                <i class="fa-solid fa-calendar"></i>Les camps chantiers sont ouverts de fin juin à début septembre et nécessitent un minimum de cinq volontaires inscrits aux mêmes dates, pour au moins deux semaines.
              </div>
              <p class="mt-20">Si vous êtes intéressé mais indisponible à cette période, vous pouvez contacter le Bureau de l'association pour proposer d'autres dates.</p>
            </div>
          </div>
          <div class="col-lg-6 mt-30" data-sal="slide-up" data-sal-duration="900" data-sal-delay="200">
            <div class="mdh-card">
              <div class="card-icon"><i class="fa-solid fa-bolt"></i></div>
              <h4>Volontaires en Action</h4>
              <p>S'adresse aux volontaires disponibles tout au long de l'année pour un séjour d'un mois maximum. Contribuez activement à :</p>
              <ul class="mdh-check-list">
                <li>Travaux de réfection de salles de classe et de médiathèques</li>
                <li>Réhabilitation d'unités de soins périphériques</li>
                <li>Travaux sur la ferme agroécologique</li>
                <li>Cours de soutien aux élèves du primaire et du collège</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Missions solidaires -->
    <div class="pt-130 lg-pt-80 pb-100 lg-pb-60">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Où vous rendre utile</div>
          <h2>Nos missions solidaires</h2>
        </div>
        <div class="row">
          <div v-for="(mission, i) in missions" :key="mission.title" class="col-lg-3 col-md-6 mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
            <div class="mdh-card">
              <span class="tag-label">Mission {{ i + 1 }}</span>
              <div class="card-icon"><i class="fa-solid" :class="mission.icon"></i></div>
              <h5>{{ mission.title }}</h5>
              <p>{{ mission.text }}</p>
              <ul v-if="mission.points" class="mdh-check-list">
                <li v-for="point in mission.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Engagement solidaire -->
    <div class="feature-block-three position-relative z-1 pt-60 pb-130 lg-pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7 order-lg-last" data-sal="slide-left" data-sal-duration="900">
            <div class="ps-lg-5">
              <div class="title-one mb-30">
                <div class="upper-title">2 mois minimum</div>
                <h2>Engagement solidaire</h2>
              </div>
              <p>
                Spécialement conçue pour les volontaires de longue durée dans le cadre d'un stage, d'une année de césure ou d'une envie forte de s'investir. L'ONG MDH accueille ces volontaires toute l'année.
              </p>
              <p>
                Travaillez directement au sein de l'association sur un ou plusieurs domaines d'action et participez concrètement à la réalisation de projets à fort impact social.
              </p>
              <h4 class="mt-30 mb-20">C'est une opportunité unique pour :</h4>
              <ul class="style-none list-style-two">
                <li v-for="item in opportunities" :key="item"><span>{{ item }}</span></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-5 md-mt-50" data-sal="slide-right" data-sal-duration="900">
            <img :src="images.image3" alt="Volontaires sur le terrain" class="mdh-rounded-img">
          </div>
        </div>
      </div>
    </div>

    <!-- Conditions d'accueil et tarifs -->
    <div class="mdh-section-mint pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Une immersion authentique au cœur de la vie togolaise</div>
          <h2>Conditions d'accueil et tarifs</h2>
        </div>
        <div class="row">
          <div class="col-lg-6 mt-30" data-sal="slide-right" data-sal-duration="900">
            <div class="mdh-card">
              <div class="card-icon"><i class="fa-solid fa-house"></i></div>
              <h4>Hébergement en famille</h4>
              <p>
                Pour offrir aux volontaires une expérience humaine riche et inoubliable, l'ONG MDH propose un hébergement en immersion totale au sein des familles membres de l'association, quelle que soit l'option choisie.
              </p>
              <p class="mt-15">
                Cette formule permet de découvrir le Togo « de l'intérieur », de partager le quotidien d'une famille locale et de créer des liens forts tout en apportant votre soutien au projet.
              </p>
              <h5 class="mt-25">Notre offre d'hébergement comprend :</h5>
              <ul class="mdh-check-list">
                <li>Accueil et accompagnement à l'aéroport</li>
                <li>Pension complète : eau potable, petit-déjeuner, déjeuner et dîner</li>
                <li>Hébergement confortable : eau, électricité et accès au wifi</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 mt-30" data-sal="slide-left" data-sal-duration="900">
            <div class="mdh-card">
              <div class="card-icon"><i class="fa-solid fa-euro-sign"></i></div>
              <h4>Des tarifs solidaires et transparents</h4>
              <p>
                Consciente de l'engagement personnel et financier des volontaires, l'ONG MDH ne réalise aucun bénéfice sur les frais d'accueil. Les contributions couvrent uniquement les coûts réels liés à votre séjour.
              </p>
              <div v-for="plan in plans" :key="plan.name" class="mt-25">
                <h5>{{ plan.name }}</h5>
                <div v-for="price in plan.prices" :key="price.duration" class="mdh-price">
                  <span>{{ price.duration }}</span>
                  <strong>{{ price.amount }}</strong>
                </div>
              </div>
              <div class="mdh-note mt-25">
                <i class="fa-solid fa-circle-info"></i>Pour les missions en groupe (plus d'une personne), un seul type de forfait doit être choisi pour tout le groupe afin de faciliter l'organisation.
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-60">
          <div class="col-lg-9 m-auto text-center" data-sal="slide-up" data-sal-duration="900">
            <h3 class="mb-20">Une expérience humaine unique</h3>
            <p>
              Ce mode d'hébergement économique favorise les échanges, le partage culturel et l'intégration dans la communauté. Il permet à chaque volontaire de vivre une expérience authentique, chaleureuse et enrichissante au sein d'une famille togolaise.
            </p>
            <p>
              Bien entendu, chaque volontaire reste libre de choisir un autre mode d'hébergement. Dans ce cas, l'ONG MDH se tient disponible pour apporter aide et conseils dans les démarches.
            </p>
            <div class="d-flex flex-wrap justify-content-center gap-3 mt-40">
              <router-link to="/rejoindre" class="btn-one">Rejoindre maintenant</router-link>
              <router-link to="/contact" class="btn-two">Nous contacter</router-link>
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

const missions = [
  {
    icon: 'fa-building',
    title: "Réhabilitation d'infrastructures",
    text: "Participez à la rénovation de salles de classe et d'Unités de Soins Périphériques :",
    points: ['Crépissage et peinture des murs', 'Rénovation des logements du personnel', 'Installation de forage et points d\'eau', 'Réhabilitation des latrines']
  },
  {
    icon: 'fa-water',
    title: 'Construction de puits',
    text: "Contribuez à l'accès à l'eau potable pour les communautés locales en participant à la mise en place de puits durables."
  },
  {
    icon: 'fa-book',
    title: 'Soutien scolaire',
    text: 'Aidez les élèves en difficulté et participez à :',
    points: ['Soutien en Français, Mathématiques, Anglais', 'Activités culturelles et sportives', 'Épanouissement des enfants']
  },
  {
    icon: 'fa-briefcase',
    title: 'Stages',
    text: "Intégrez nos équipes dans les domaines de l'éducation, santé, agroécologie ou gestion de projets. Une expérience immersive utile pour votre parcours."
  }
]

const opportunities = [
  'Développer votre expérience professionnelle',
  'Renforcer vos compétences',
  'Découvrir la réalité du terrain humanitaire',
  'Vivre une immersion culturelle riche et authentique',
  'Avoir un impact réel auprès des communautés locales'
]

const plans = [
  {
    name: 'Forfait Basic',
    prices: [
      { duration: '2 semaines', amount: '200 € (131 191 FCFA)' },
      { duration: '3 semaines à 1 mois', amount: '300 € (196 787 FCFA)' }
    ]
  },
  {
    name: 'Forfait Basic Plus',
    prices: [
      { duration: '2 semaines', amount: '225 € (147 590 FCFA)' },
      { duration: '3 semaines à 1 mois', amount: '400 € (262 383 FCFA)' }
    ]
  }
]
</script>
