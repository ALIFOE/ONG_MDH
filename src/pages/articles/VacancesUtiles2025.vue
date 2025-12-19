<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4 py-12 mt-24">
      <div class="max-w-4xl mx-auto">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-blue-600 hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <span class="inline-block px-4 py-2 bg-blue-200 text-blue-800 rounded-full text-sm font-bold mb-4">2025</span>
        <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Programme de Vacances Utiles 2025</h1>
        <h2 class="text-2xl md:text-3xl text-blue-600 font-bold mb-6">L'Académie des Super-Enfants</h2>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          Une expérience enrichissante et ludique pour favoriser l'épanouissement de vos enfants pendant les vacances
        </p>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-blue-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">À propos du programme</h2>
        <div class="space-y-4 text-lg text-gray-700">
          <p class="leading-relaxed">
            Dans le cadre de ses activités de vacances utiles, l'ONG MDH a lancé ce programme unique destiné à favoriser l'épanouissement des enfants et adolescents du village d'Apédokoè.
          </p>
          <p class="leading-relaxed">
            Ce programme original permet à chaque enfant et jeune de découvrir ses talents, renforcer sa confiance en soi, s'amuser tout en mettant ses vacances à profit.
          </p>
          <div class="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-lg mt-6">
            <p class="text-blue-900 font-semibold italic">
              « À l'Académie, chaque enfant devient un « super-héros » du savoir, du cœur et de l'engagement. »
            </p>
          </div>
          <p class="leading-relaxed mt-4">
            Le tout se déroule dans une ambiance ludique, bienveillante et stimulante.
          </p>
        </div>
      </div>
    </section>

    <!-- Informations Pratiques -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-[#090e15] mb-8 text-center">Informations Pratiques</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Lieu -->
        <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-lg p-8 border-l-4 border-green-600">
          <h3 class="text-2xl font-bold text-[#090e15] mb-4 flex items-center gap-3">
            <i class="fas fa-map-marker-alt text-green-600 text-3xl"></i>
            Lieu
          </h3>
          <p class="text-lg text-gray-700">
            <strong>Siège de l'ONG MDH</strong>
          </p>
          <p class="text-lg text-gray-600">
            Sagbado Apédokoè
          </p>
        </div>

        <!-- Horaires -->
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg p-8 border-l-4 border-orange-600">
          <h3 class="text-2xl font-bold text-[#090e15] mb-4 flex items-center gap-3">
            <i class="fas fa-clock text-orange-600 text-3xl"></i>
            Horaires
          </h3>
          <p class="text-lg text-gray-700">
            <strong>Tous les mercredis et samedis</strong>
          </p>
          <p class="text-lg text-orange-600 font-semibold">
            À 14h
          </p>
        </div>
      </div>
    </section>

    <!-- Au programme -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <h2 class="text-3xl font-bold text-[#090e15] mb-8 text-center">Au Programme</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Sensibilisation des parents -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-users text-2xl text-blue-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Sensibilisation des parents</h3>
          </div>
          <p class="text-gray-700">
            Implication active des parents dans le développement de leurs enfants
          </p>
        </div>

        <!-- Jeux éducatifs -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-gamepad text-2xl text-purple-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Jeux éducatifs</h3>
          </div>
          <p class="text-gray-700">
            Apprentissage ludique et interactif
          </p>
        </div>

        <!-- Ateliers créatifs -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-palette text-2xl text-pink-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Ateliers créatifs</h3>
          </div>
          <p class="text-gray-700">
            Développement de la créativité et de l'expression artistique
          </p>
        </div>

        <!-- Animations culturelles -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-music text-2xl text-yellow-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Animations culturelles</h3>
          </div>
          <p class="text-gray-700">
            Découverte et célébration de notre culture
          </p>
        </div>

        <!-- Initiation à l'informatique -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-laptop text-2xl text-green-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Initiation informatique</h3>
          </div>
          <p class="text-gray-700">
            Préparation aux outils numériques modernes
          </p>
        </div>

        <!-- Actions solidaires -->
        <div class="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-600 hover:shadow-xl transition-all duration-300">
          <div class="flex items-center gap-3 mb-4">
            <i class="fas fa-hands-helping text-2xl text-red-600"></i>
            <h3 class="text-xl font-bold text-[#090e15]">Actions solidaires</h3>
          </div>
          <p class="text-gray-700">
            Développement de l'esprit d'entraide et de partage
          </p>
        </div>
      </div>
    </section>

    <!-- Nos Objectifs -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl shadow-xl p-12 border-l-4 border-purple-600">
        <h2 class="text-3xl font-bold text-[#090e15] mb-12 text-center">Nos Objectifs</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Développement personnel -->
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <i class="fas fa-star text-3xl text-purple-600 flex-shrink-0 mt-2"></i>
              <div>
                <h3 class="text-xl font-bold text-[#090e15] mb-2">Développement personnel</h3>
                <p class="text-gray-700">
                  Renforcer la confiance en soi et l'autonomie des enfants à travers des activités stimulantes
                </p>
              </div>
            </div>
          </div>

          <!-- Éducation continue -->
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <i class="fas fa-book text-3xl text-blue-600 flex-shrink-0 mt-2"></i>
              <div>
                <h3 class="text-xl font-bold text-[#090e15] mb-2">Éducation continue</h3>
                <p class="text-gray-700">
                  Maintenir et enrichir les acquis scolaires pendant les vacances
                </p>
              </div>
            </div>
          </div>

          <!-- Socialisation -->
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <i class="fas fa-people-group text-3xl text-green-600 flex-shrink-0 mt-2"></i>
              <div>
                <h3 class="text-xl font-bold text-[#090e15] mb-2">Socialisation</h3>
                <p class="text-gray-700">
                  Favoriser l'interaction sociale et le développement des compétences relationnelles
                </p>
              </div>
            </div>
          </div>

          <!-- Engagement communautaire -->
          <div class="space-y-4">
            <div class="flex items-start gap-4">
              <i class="fas fa-heart text-3xl text-red-600 flex-shrink-0 mt-2"></i>
              <div>
                <h3 class="text-xl font-bold text-[#090e15] mb-2">Engagement communautaire</h3>
                <p class="text-gray-700">
                  Sensibiliser à l'importance de la participation active dans la communauté
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-xl p-12 text-center text-white">
        <h2 class="text-4xl font-bold mb-4">Inscrivez vos enfants dès maintenant !</h2>
        <p class="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Offrez à vos enfants une expérience enrichissante qui les marquera pour la vie.
        </p>
        <router-link to="/inscription-vacances-2025" class="inline-block px-8 py-4 bg-white text-blue-600 rounded-full font-bold text-lg hover:bg-blue-50 transition duration-300 shadow-lg hover:shadow-xl">
          <i class="fas fa-arrow-right mr-2"></i>
          S'inscrire au programme
        </router-link>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="bg-gray-50 rounded-2xl p-12 max-w-7xl mx-auto px-4 mb-16">
      <h2 class="text-3xl font-bold text-[#090e15] mb-8 text-center">Besoin d'informations ?</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Email -->
        <div class="text-center">
          <i class="fas fa-envelope text-4xl text-blue-600 mb-4"></i>
          <h3 class="text-xl font-bold text-[#090e15] mb-2">Email</h3>
          <p class="text-gray-700">
            <a href="mailto:modehumain@gmail.com" class="text-blue-600 hover:underline">
              modehumain@gmail.com
            </a>
          </p>
        </div>

        <!-- Téléphone -->
        <div class="text-center">
          <i class="fas fa-phone text-4xl text-blue-600 mb-4"></i>
          <h3 class="text-xl font-bold text-[#090e15] mb-2">Téléphone</h3>
          <p class="text-gray-700">
            <a href="tel:+22892129549" class="text-blue-600 hover:underline">
              +228 92 12 95 49
            </a>
          </p>
        </div>

        <!-- Adresse -->
        <div class="text-center">
          <i class="fas fa-map-marker-alt text-4xl text-blue-600 mb-4"></i>
          <h3 class="text-xl font-bold text-[#090e15] mb-2">Adresse</h3>
          <p class="text-gray-700">
            Aflao-Sagbado (Apedokoè)<br>
            Lomé, Togo
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
