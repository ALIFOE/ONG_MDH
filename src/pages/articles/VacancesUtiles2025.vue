<template>
  <ArticleLayout :cta="{ title: 'Inscrivez vos enfants dès maintenant !', text: 'Offrez à vos enfants une expérience enrichissante qui les marquera pour la vie.', to: '/inscription-vacances-2025', label: `S'inscrire au programme` }">
    <p class="lead-text">L'Académie des Super-Enfants : une expérience enrichissante et ludique pour favoriser l'épanouissement de vos enfants pendant les vacances.</p>

    <h3>À propos du programme</h3>
    <p>
      Dans le cadre de ses activités de vacances utiles, l'ONG MDH a lancé ce programme unique destiné à favoriser l'épanouissement des enfants et adolescents du village d'Apédokoè.
    </p>
    <p>
      Ce programme original permet à chaque enfant et jeune de découvrir ses talents, renforcer sa confiance en soi, s'amuser tout en mettant ses vacances à profit.
    </p>
    <div class="mark-text position-relative z-1">
      <blockquote>« À l'Académie, chaque enfant devient un « super-héros » du savoir, du cœur et de l'engagement. »</blockquote>
    </div>
    <p>Le tout se déroule dans une ambiance ludique, bienveillante et stimulante.</p>

    <h3>Informations pratiques</h3>
    <div class="row">
      <div class="col-md-6 mt-15">
        <div class="mdh-card">
          <div class="card-icon"><i class="fa-solid fa-location-dot"></i></div>
          <h5>Lieu</h5>
          <p><strong>Siège de l'ONG MDH</strong><br>Sagbado Apédokoè</p>
        </div>
      </div>
      <div class="col-md-6 mt-15">
        <div class="mdh-card">
          <div class="card-icon"><i class="fa-solid fa-clock"></i></div>
          <h5>Horaires</h5>
          <p><strong>Tous les mercredis et samedis</strong><br>À 14h</p>
        </div>
      </div>
    </div>

    <h3>Au programme</h3>
    <div class="row">
      <div v-for="activity in activities" :key="activity.title" class="col-md-6 mt-15">
        <div class="mdh-card">
          <div class="card-icon"><i class="fa-solid" :class="activity.icon"></i></div>
          <h5>{{ activity.title }}</h5>
          <p>{{ activity.text }}</p>
        </div>
      </div>
    </div>

    <h3>Nos objectifs</h3>
    <ul class="mdh-check-list">
      <li><strong>Développement personnel :</strong> renforcer la confiance en soi et l'autonomie des enfants à travers des activités stimulantes</li>
      <li><strong>Éducation continue :</strong> maintenir et enrichir les acquis scolaires pendant les vacances</li>
      <li><strong>Socialisation :</strong> favoriser l'interaction sociale et le développement des compétences relationnelles</li>
      <li><strong>Engagement communautaire :</strong> sensibiliser à l'importance de la participation active dans la communauté</li>
    </ul>

    <h3>Besoin d'informations ?</h3>
    <p>
      Écrivez-nous à <a :href="`mailto:${contact.email}`">{{ contact.email }}</a> ou appelez le <a :href="contact.phoneHref">{{ contact.phone }}</a>.
      Nous sommes situés à {{ contact.address }}, {{ contact.city }}.
    </p>
  </ArticleLayout>
</template>

<script setup>
import ArticleLayout from '@/components/ArticleLayout.vue'
import { contact } from '@/data/site.js'

const activities = [
  { icon: 'fa-users', title: 'Sensibilisation des parents', text: 'Implication active des parents dans le développement de leurs enfants.' },
  { icon: 'fa-gamepad', title: 'Jeux éducatifs', text: 'Apprentissage ludique et interactif.' },
  { icon: 'fa-palette', title: 'Ateliers créatifs', text: "Développement de la créativité et de l'expression artistique." },
  { icon: 'fa-music', title: 'Animations culturelles', text: 'Découverte et célébration de notre culture.' },
  { icon: 'fa-laptop', title: 'Initiation informatique', text: 'Préparation aux outils numériques modernes.' },
  { icon: 'fa-hands-holding', title: 'Actions solidaires', text: "Développement de l'esprit d'entraide et de partage." }
]
</script>
