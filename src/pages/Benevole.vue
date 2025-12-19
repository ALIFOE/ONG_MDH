<template>
  <div>
    <!-- Floating Button for Vacances Utiles 2025 -->
    <div class="fixed bottom-6 right-6 z-40">
      <router-link 
        to="/article/vacances-utiles-2025"
        class="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 whitespace-nowrap"
      >
        <i class="fas fa-star text-lg"></i>
        <span>Programme de Vacances Utiles 2025</span>
      </router-link>
    </div>

    <!-- Hero Section -->
    <section class="text-center mb-12 bg-white px-4 py-12 mt-24">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Devenir Bénévole</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Rejoignez notre mission de solidarité et d'engagement humain à travers le volontariat
      </p>
    </section>

    <!-- Section 1: Qu'est-ce que c'est -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">Qu'est-ce que c'est ?</h2>
        
        <div class="space-y-6">
          <p class="text-gray-700 leading-relaxed text-lg">
            Le programme de volontariat de l'ONG MDH a pour ambition de renforcer la coopération pour le développement humain et durable entre les communautés togolaises et les citoyens du monde.
          </p>

          <p class="text-gray-700 leading-relaxed text-lg">
            Notre idée est simple : ouvrir nos portes à des volontaires internationaux tout au long de l'année, afin d'allier solidarité, engagement humain et rencontre interculturelle.
          </p>

          <p class="text-gray-700 leading-relaxed text-lg">
            Ce programme se veut une véritable expérience touristique participative. Les volontaires apportent leur temps, leurs compétences et leur énergie à des projets de développement local tout en découvrant les richesses du Togo : ses paysages, ses traditions, sa gastronomie et l'hospitalité chaleureuse de sa population.
          </p>

          <div class="bg-white rounded-xl p-6 border-l-4 border-blue-600">
            <h3 class="font-bold text-[#090e15] mb-3 text-lg">Conditions de participation :</h3>
            <ul class="space-y-2 text-gray-700">
              <li class="flex items-start gap-3">
                <i class="fas fa-check text-blue-600 mt-1 flex-shrink-0"></i>
                <span>Être âgé d'au moins 18 ans ou être accompagné d'au moins un parent pour les mineurs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Comment participer -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-xl p-8 border-l-4 border-green-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">Comment participer ?</h2>
        
        <div class="space-y-8">
          <p class="text-gray-700 leading-relaxed text-lg">
            Le programme offre deux options aux volontaires :
          </p>

          <!-- Option 1: Camps chantiers -->
          <div class="bg-white rounded-xl p-6 border-l-4 border-green-600">
            <h3 class="text-xl font-bold text-[#090e15] mb-3 flex items-center gap-2">
              <i class="fas fa-users text-green-600"></i>
              Camps chantiers
            </h3>
            <p class="text-gray-700 leading-relaxed mb-3">
              Participer à un camp chantier géré par l'ONG MDH pour une durée minimale de deux semaines.
            </p>
            <p class="text-gray-600 text-sm">
              <i class="fas fa-calendar text-green-600 mr-2"></i>
              Les camps chantiers sont ouverts de fin juin à début septembre et nécessitent un minimum de cinq volontaires inscrits aux mêmes dates, pour au moins deux semaines.
            </p>
            <p class="text-gray-600 text-sm mt-2">
              Si vous êtes intéressé mais indisponible à cette période, vous pouvez contacter le Bureau de l'association pour proposer d'autres dates.
            </p>
          </div>

          <!-- Option 2: Volontaires en Action -->
          <div class="bg-white rounded-xl p-6 border-l-4 border-green-600">
            <h3 class="text-xl font-bold text-[#090e15] mb-3 flex items-center gap-2">
              <i class="fas fa-bolt text-green-600"></i>
              Volontaires en Action
            </h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              S'adresse aux volontaires disponibles tout au long de l'année pour un séjour d'un mois maximum. Contribuez activement à :
            </p>
            <ul class="space-y-2 text-gray-700 ml-4">
              <li class="flex items-start gap-3">
                <i class="fas fa-arrow-right text-green-600 mt-1 flex-shrink-0"></i>
                <span>Travaux de réfection de salles de classe et de médiathèques</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-arrow-right text-green-600 mt-1 flex-shrink-0"></i>
                <span>Réhabilitation d'unités de soins périphériques</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-arrow-right text-green-600 mt-1 flex-shrink-0"></i>
                <span>Travaux sur la ferme agroécologique</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-arrow-right text-green-600 mt-1 flex-shrink-0"></i>
                <span>Cours de soutien aux élèves du primaire et du collège</span>
              </li>
            </ul>
          </div>

          <!-- Nos missions solidaires -->
          <div>
            <h3 class="text-2xl font-bold text-[#090e15] mb-4">Nos missions solidaires</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <!-- Mission 1 -->
              <div class="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 class="text-lg font-bold text-[#090e15] mb-3 flex items-center gap-2">
                  <i class="fas fa-building text-blue-600"></i>
                  Mission 1: Réhabilitation d'infrastructures
                </h4>
                <p class="text-gray-700 text-sm mb-3">Participez à la rénovation de salles de classe et d'Unités de Soins Périphériques :</p>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Crépissage et peinture des murs</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Rénovation des logements du personnel</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Installation de forage et points d'eau</li>
                  <li><i class="fas fa-check text-blue-600 mr-2"></i>Réhabilitation des latrines</li>
                </ul>
              </div>

              <!-- Mission 2 -->
              <div class="bg-white rounded-xl p-6 border-l-4 border-blue-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 class="text-lg font-bold text-[#090e15] mb-3 flex items-center gap-2">
                  <i class="fas fa-water text-blue-600"></i>
                  Mission 2: Construction de puits
                </h4>
                <p class="text-gray-700 text-sm">
                  Contribuez à l'accès à l'eau potable pour les communautés locales en participant à la mise en place de puits durables.
                </p>
              </div>

              <!-- Mission 3 -->
              <div class="bg-white rounded-xl p-6 border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 class="text-lg font-bold text-[#090e15] mb-3 flex items-center gap-2">
                  <i class="fas fa-book text-purple-600"></i>
                  Mission 3: Soutien scolaire
                </h4>
                <p class="text-gray-700 text-sm mb-3">Aidez les élèves en difficulté et participez à :</p>
                <ul class="space-y-1 text-gray-700 text-sm">
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Soutien en Français, Mathématiques, Anglais</li>
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Activités culturelles et sportives</li>
                  <li><i class="fas fa-check text-purple-600 mr-2"></i>Épanouissement des enfants</li>
                </ul>
              </div>

              <!-- Mission 4 -->
              <div class="bg-white rounded-xl p-6 border-l-4 border-purple-600 shadow-lg hover:shadow-xl transition-all duration-300">
                <h4 class="text-lg font-bold text-[#090e15] mb-3 flex items-center gap-2">
                  <i class="fas fa-briefcase text-purple-600"></i>
                  Mission 4: Stages
                </h4>
                <p class="text-gray-700 text-sm">
                  Intégrez nos équipes dans les domaines de l'éducation, santé, agroécologie ou gestion de projets. Une expérience immersive utile pour votre parcours.
                </p>
              </div>
            </div>
          </div>

          <!-- Engagement Solidaire -->
          <div class="bg-white rounded-xl p-6 border-l-4 border-orange-600">
            <h3 class="text-xl font-bold text-[#090e15] mb-3 flex items-center gap-2">
              <i class="fas fa-heart text-orange-600"></i>
              Engagement Solidaire (2 mois minimum)
            </h3>
            <p class="text-gray-700 leading-relaxed mb-4">
              Spécialement conçue pour les volontaires de longue durée dans le cadre d'un stage, d'une année de césure ou d'une envie forte de s'investir. L'ONG MDH accueille ces volontaires toute l'année.
            </p>
            <p class="text-gray-700 leading-relaxed mb-4">
              Travaillez directement au sein de l'association sur un ou plusieurs domaines d'action et participez concrètement à la réalisation de projets à fort impact social.
            </p>
            <div class="bg-orange-50 p-4 rounded-lg">
              <p class="font-semibold text-[#090e15] mb-3">C'est une opportunité unique pour :</p>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-orange-600 mt-1 flex-shrink-0"></i>
                  <span>Développer votre expérience professionnelle</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-orange-600 mt-1 flex-shrink-0"></i>
                  <span>Renforcer vos compétences</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-orange-600 mt-1 flex-shrink-0"></i>
                  <span>Découvrir la réalité du terrain humanitaire</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-orange-600 mt-1 flex-shrink-0"></i>
                  <span>Vivre une immersion culturelle riche et authentique</span>
                </li>
                <li class="flex items-start gap-3">
                  <i class="fas fa-check text-orange-600 mt-1 flex-shrink-0"></i>
                  <span>Avoir un impact réel auprès des communautés locales</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Conditions d'accueil et tarifs -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-xl p-8 border-l-4 border-yellow-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">Conditions d'accueil et tarifs</h2>
        
        <div class="space-y-8">
          <!-- Hébergement -->
          <div>
            <h3 class="text-2xl font-bold text-[#090e15] mb-4 flex items-center gap-2">
              <i class="fas fa-home text-yellow-600"></i>
              Une immersion authentique au cœur de la vie togolaise
            </h3>
            <div class="bg-white rounded-xl p-6 space-y-4">
              <p class="text-gray-700 leading-relaxed">
                Pour offrir aux volontaires une expérience humaine riche et inoubliable, l'ONG MDH propose un hébergement en immersion totale au sein des familles membres de l'association, quelle que soit l'option choisie.
              </p>
              <p class="text-gray-700 leading-relaxed">
                Cette formule permet de découvrir le Togo « de l'intérieur », de partager le quotidien d'une famille locale et de créer des liens forts tout en apportant votre soutien au projet.
              </p>
              
              <div class="bg-yellow-50 p-4 rounded-lg mt-4">
                <h4 class="font-bold text-[#090e15] mb-3">Notre offre d'hébergement comprend :</h4>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-600 flex-shrink-0 mt-1"></i>
                    <span>Accueil et accompagnement à l'aéroport</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-600 flex-shrink-0 mt-1"></i>
                    <span>Pension complète : eau potable, petit-déjeuner, déjeuner et dîner</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <i class="fas fa-check text-yellow-600 flex-shrink-0 mt-1"></i>
                    <span>Hébergement confortable : eau, électricité et accès au wifi</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Tarifs -->
          <div>
            <h3 class="text-2xl font-bold text-[#090e15] mb-4 flex items-center gap-2">
              <i class="fas fa-euro-sign text-orange-600"></i>
              Des tarifs solidaires et transparents
            </h3>
            <p class="text-gray-700 leading-relaxed mb-6">
              Consciente de l'engagement personnel et financier des volontaires, l'ONG MDH ne réalise aucun bénéfice sur les frais d'accueil. Les contributions couvrent uniquement les coûts réels liés à votre séjour.
            </p>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Forfait Basic -->
              <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-600">
                <h4 class="text-xl font-bold text-[#090e15] mb-4">Forfait Basic</h4>
                <div class="space-y-3">
                  <div class="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span class="text-gray-700">2 semaines</span>
                    <span class="font-bold text-blue-600 text-lg">200 € (131 191 FCFA)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">3 semaines à 1 mois</span>
                    <span class="font-bold text-blue-600 text-lg">300 € (196 787 FCFA)</span>
                  </div>
                </div>
              </div>

              <!-- Forfait Basic Plus -->
              <div class="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-600">
                <h4 class="text-xl font-bold text-[#090e15] mb-4">Forfait Basic Plus</h4>
                <div class="space-y-3">
                  <div class="flex justify-between items-center pb-3 border-b border-gray-200">
                    <span class="text-gray-700">2 semaines</span>
                    <span class="font-bold text-orange-600 text-lg">225 € (147 590 FCFA)</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-700">3 semaines à 1 mois</span>
                    <span class="font-bold text-orange-600 text-lg">400 € (262 383 FCFA)</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 rounded-xl p-4 mt-6 border-l-4 border-blue-600">
              <p class="text-sm text-gray-700">
                <i class="fas fa-info-circle text-blue-600 mr-2"></i>
                Pour les missions en groupe (plus d'une personne), un seul type de forfait doit être choisi pour tout le groupe afin de faciliter l'organisation.
              </p>
            </div>
          </div>

          <!-- Expérience humaine -->
          <div class="bg-white rounded-xl p-6 border-l-4 border-green-600">
            <h3 class="text-xl font-bold text-[#090e15] mb-4 flex items-center gap-2">
              <i class="fas fa-handshake text-green-600"></i>
              Une expérience humaine unique
            </h3>
            <p class="text-gray-700 leading-relaxed">
              Ce mode d'hébergement économique favorise les échanges, le partage culturel et l'intégration dans la communauté. Il permet à chaque volontaire de vivre une expérience authentique, chaleureuse et enrichissante au sein d'une famille togolaise.
            </p>
            <p class="text-gray-700 leading-relaxed mt-3">
              Bien entendu, chaque volontaire reste libre de choisir un autre mode d'hébergement. Dans ce cas, l'ONG MDH se tient disponible pour apporter aide et conseils dans les démarches.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#090e15] text-white rounded-2xl p-12 max-w-7xl mx-auto px-4 text-center mb-16">
      <h2 class="text-3xl font-bold mb-4">Prêt à vous engager ?</h2>
      <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
        Rejoignez notre communauté de bénévoles et faites une différence dans la vie des communautés togolaises.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/rejoindre" class="px-8 py-3 bg-[#fbbf24] text-[#090e15] rounded-full font-bold hover:bg-white transition duration-300">
          Rejoindre maintenant
        </router-link>
        <router-link to="/contact" class="px-8 py-3 bg-gray-700 text-white rounded-full font-bold hover:bg-gray-600 transition duration-300">
          Nous contacter
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeSection = ref(null)

// Fonction pour rediriger vers le formulaire de candidature avec la mission pré-sélectionnée
const applyForMission = (mission) => {
  router.push({
    name: 'Rejoindre',
    query: { mission: mission }
  })
}

// Observer les sections au scroll pour l'effet de surbrillance
onMounted(() => {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50% 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)

  // Observer toutes les sections avec un ID
  document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section)
  })
})
</script>
