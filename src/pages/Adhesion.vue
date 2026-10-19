<template>
  <div>
    <PageBanner
      title="Devenir membre"
      :crumbs="[{ label: `S'engager` }, { label: 'Adhésion' }]"
      :image="images.image2"
      subtitle="Rejoignez notre communauté et participez activement à nos missions de développement humain."
    />

    <!-- Introduction -->
    <div class="pt-140 lg-pt-80 pb-120 lg-pb-80">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-7" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5">
              <div class="title-one mb-30">
                <div class="upper-title">Adhésion</div>
                <h2>Qu'est-ce que l'adhésion ?</h2>
              </div>
              <p>
                L'adhésion à l'ONG MDH vous permet de devenir membre officiel de notre organisation. Vous serez partie intégrante de notre mouvement pour le développement humain et durable en Afrique.
              </p>
              <p>
                En tant que membre, vous bénéficiez d'une implication directe dans nos décisions, nos projets et la gestion de l'association.
              </p>
              <div class="mdh-note mt-30">
                <i class="fa-solid fa-seedling"></i>Ensemble, nous construisons un avenir meilleur pour les communautés que nous servons.
              </div>
              <router-link to="/inscription-adhesion" class="btn-one mt-40">Adhérer maintenant</router-link>
            </div>
          </div>
          <div class="col-lg-5 md-mt-50" data-sal="slide-left" data-sal-duration="900">
            <img :src="images.image2" alt="Membres de l'ONG MDH" class="mdh-rounded-img">
          </div>
        </div>
      </div>
    </div>

    <!-- Avantages -->
    <div class="feature-block-seven no-extend position-relative pt-120 lg-pt-80 pb-120 lg-pb-80">
      <div class="container">
        <div class="title-one text-center" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Pourquoi adhérer ?</div>
          <h2>Avantages de l'adhésion</h2>
        </div>
      </div>
      <div class="box-layout-two">
        <div class="box-wrapper d-flex flex-wrap align-items-stretch justify-content-center">
          <div v-for="(perk, i) in perks" :key="perk.title" class="card-box mt-25" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 200">
            <div class="icon rounded-circle m-auto d-flex align-items-center justify-content-center"><i class="fa-solid" :class="perk.icon"></i></div>
            <h5>{{ perk.title }}</h5>
            <p>{{ perk.text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Types d'adhésion -->
    <div class="pt-130 lg-pt-80 pb-100 lg-pb-60">
      <div class="container">
        <div class="title-one text-center mb-30" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Une formule pour chacun</div>
          <h2>Types d'adhésion</h2>
        </div>
        <div class="row">
          <div v-for="(type, i) in types" :key="type.title" class="col-lg-4 col-md-6 mt-30" data-sal="slide-up" data-sal-duration="900" :data-sal-delay="i * 150">
            <div class="mdh-card text-center" :class="{ featured: type.featured }">
              <span v-if="type.featured" class="badge-tag">Populaire</span>
              <div class="card-icon mx-auto"><i class="fa-solid" :class="type.icon"></i></div>
              <h4>{{ type.title }}</h4>
              <p><strong>Pour :</strong> {{ type.audience }}</p>
              <ul class="mdh-check-list text-start mt-25">
                <li v-for="point in type.points" :key="point">{{ point }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conditions -->
    <div class="mdh-section-mint pt-130 lg-pt-80 pb-130 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-50" data-sal="slide-up" data-sal-duration="900">
          <div class="upper-title">Simple et rapide</div>
          <h2>Conditions d'adhésion</h2>
        </div>
        <div class="row">
          <div class="col-lg-6" data-sal="slide-right" data-sal-duration="900">
            <div class="mdh-card">
              <h4>Critères d'éligibilité</h4>
              <ul class="mdh-check-list">
                <li>Être âgé(e) d'au moins 18 ans (ou représentant légal)</li>
                <li>Adhérer aux valeurs de l'ONG MDH</li>
                <li>Remplir le formulaire d'adhésion</li>
                <li>S'engager à respecter le règlement interne</li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 md-mt-30" data-sal="slide-left" data-sal-duration="900">
            <div class="mdh-card">
              <h4 class="mb-25">Processus d'adhésion</h4>
              <ol class="mdh-steps">
                <li><h5>Remplir le formulaire d'adhésion</h5></li>
                <li><h5>Recevoir la confirmation d'adhésion</h5></li>
                <li><h5>Accéder à votre espace membre</h5></li>
                <li><h5>Participer à nos activités</h5></li>
              </ol>
            </div>
          </div>
        </div>
        <div class="text-center mt-60">
          <h3 class="mb-15">Rejoignez-nous maintenant !</h3>
          <p class="mb-30">Devenez membre de l'ONG MDH et participez activement au développement de nos communautés.</p>
          <router-link to="/inscription-adhesion" class="btn-one">Adhérer maintenant</router-link>
        </div>
      </div>
    </div>

    <!-- FAQ -->
    <div class="feature-block-eight pt-130 lg-pt-80 pb-140 lg-pb-80">
      <div class="container">
        <div class="row">
          <div class="col-lg-5" data-sal="slide-right" data-sal-duration="900">
            <div class="pe-lg-5">
              <div class="title-one mb-25">
                <div class="upper-title">FAQ</div>
                <h2>Questions fréquentes</h2>
              </div>
              <p class="pe-xxl-4 mb-10">Tout ce qu'il faut savoir avant de devenir membre de l'ONG MDH.</p>
              <p class="fw-500 mb-25">Vous ne trouvez pas la réponse ? Nous pouvons vous aider.</p>
              <router-link to="/contact" class="btn-two">Nous contacter</router-link>
            </div>
          </div>
          <div class="col-lg-7 ms-auto md-mt-40" data-sal="slide-left" data-sal-duration="900">
            <FaqAccordion :items="faq" />
          </div>
        </div>
      </div>
    </div>

    <!-- Besoin d'aide -->
    <div class="contact-section pb-140 lg-pb-80">
      <div class="container">
        <div class="title-one text-center mb-30">
          <h2>Besoin d'aide ?</h2>
        </div>
        <ContactBlocks />
      </div>
    </div>
  </div>
</template>

<script setup>
import PageBanner from '@/components/PageBanner.vue'
import FaqAccordion from '@/components/FaqAccordion.vue'
import ContactBlocks from '@/components/ContactBlocks.vue'
import images from '@/data/images.js'

const perks = [
  { icon: 'fa-check-to-slot', title: 'Participation', text: "Votez et participez aux décisions importantes de l'organisation." },
  { icon: 'fa-diagram-project', title: 'Accès aux projets', text: 'Accédez directement à tous nos projets et initiatives.' },
  { icon: 'fa-network-wired', title: 'Réseautage', text: 'Rejoignez une communauté de professionnels engagés.' },
  { icon: 'fa-bell', title: 'Infos prioritaires', text: 'Recevez les informations prioritaires et les mises à jour.' }
]

const types = [
  {
    icon: 'fa-user',
    title: 'Adhésion Individuelle',
    audience: 'Personnes physiques engagées',
    points: ['Accès à toutes les activités', 'Droit de vote en assemblée générale', 'Participation aux projets', 'Accès à la newsletter']
  },
  {
    icon: 'fa-house',
    title: 'Adhésion Famille',
    audience: 'Familles engagées collectivement',
    featured: true,
    points: ['Tous les avantages individuels', "Jusqu'à 4 membres de la famille", 'Activités familiales spéciales', 'Tarif préférentiel']
  },
  {
    icon: 'fa-building',
    title: 'Adhésion Entreprise',
    audience: 'Entreprises et organisations',
    points: ['Partenariat stratégique', 'Visibilité de marque', 'Accès aux événements', 'Avantages personnalisés']
  }
]

const faq = [
  { question: "Quelle est la durée de l'adhésion ?", answer: "L'adhésion est annuelle et doit être renouvelée chaque année. Vous serez notifié avant la date d'expiration." },
  { question: 'Puis-je résilier mon adhésion ?', answer: "Oui, vous pouvez résilier votre adhésion à tout moment en nous contactant. Aucune pénalité n'est appliquée." },
  { question: "Quel est le coût de l'adhésion ?", answer: "Le coût varie selon le type d'adhésion. Consultez notre formulaire d'adhésion pour voir les tarifs à jour." },
  { question: "Comment obtenir plus d'informations ?", answer: 'Vous pouvez nous contacter directement par email ou téléphone. Notre équipe sera ravie de répondre à toutes vos questions.' }
]
</script>
