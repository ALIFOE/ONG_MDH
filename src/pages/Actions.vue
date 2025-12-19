<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-12 bg-white px-4 py-12 mt-24">
      <h1 class="text-4xl md:text-5xl font-extrabold tracking-tight text-[#090e15] mb-4">Nos Actions</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto">
        Découvrez les trois piliers de notre engagement : l'Éducation, la Santé et le Développement Durable
      </p>
    </section>

    <!-- Three Action Domains -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mb-20">
      <!-- Education -->
      <div class="bg-white/80 rounded-2xl shadow-2xl overflow-hidden group hover:scale-[1.04] transition-all duration-500 border-t-4 border-blue-500">
        <div class="h-48 bg-blue-500 relative overflow-hidden">
          <img src="/images/education1.jpg" alt="Éducation" class="w-full h-full object-cover opacity-90" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-blue-600 mb-3">Éducation</h3>
          <p class="text-[#334155] mb-4">
            Notre engagement pour une éducation de qualité inclut :
          </p>
          <ul class="space-y-2 text-[#334155] mb-4">
            <li class="flex items-start"><i class="fas fa-check text-blue-600 mt-1 mr-2"></i><span>Construction d'écoles</span></li>
            <li class="flex items-start"><i class="fas fa-check text-blue-600 mt-1 mr-2"></i><span>Formation d'enseignants</span></li>
            <li class="flex items-start"><i class="fas fa-check text-blue-600 mt-1 mr-2"></i><span>Fournitures scolaires</span></li>
          </ul>
          <a href="#education" class="text-blue-600 hover:text-blue-800 font-semibold underline underline-offset-4">En savoir plus →</a>
        </div>
      </div>

      <!-- Health -->
      <div class="bg-white/80 rounded-2xl shadow-2xl overflow-hidden group hover:scale-[1.04] transition-all duration-500 border-t-4 border-orange-700">
        <div class="h-48 bg-orange-700 relative overflow-hidden">
          <img src="/images/sante1.jpg" alt="Santé" class="w-full h-full object-cover opacity-90" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-orange-700 mb-3">Santé</h3>
          <p class="text-[#334155] mb-4">
            Nos actions pour améliorer la santé des communautés incluent :
          </p>
          <ul class="space-y-2 text-[#334155] mb-4">
            <li class="flex items-start"><i class="fas fa-check text-orange-700 mt-1 mr-2"></i><span>Campagnes de vaccination</span></li>
            <li class="flex items-start"><i class="fas fa-check text-orange-700 mt-1 mr-2"></i><span>Centres de santé</span></li>
            <li class="flex items-start"><i class="fas fa-check text-orange-700 mt-1 mr-2"></i><span>Sensibilisation hygiène</span></li>
          </ul>
          <a href="#sante" class="text-orange-700 hover:text-orange-900 font-semibold underline underline-offset-4">En savoir plus →</a>
        </div>
      </div>

      <!-- Sustainable Development -->
      <div class="bg-white/80 rounded-2xl shadow-2xl overflow-hidden group hover:scale-[1.04] transition-all duration-500 border-t-4 border-green-700">
        <div class="h-48 bg-green-700 relative overflow-hidden">
          <img src="/images/agriculture1.jpg" alt="Développement Durable" class="w-full h-full object-cover opacity-90" />
        </div>
        <div class="p-6">
          <h3 class="text-xl font-bold text-green-700 mb-3">Développement Durable</h3>
          <p class="text-[#334155] mb-4">
            Nos initiatives pour un développement durable comprennent :
          </p>
          <ul class="space-y-2 text-[#334155] mb-4">
            <li class="flex items-start"><i class="fas fa-check text-green-700 mt-1 mr-2"></i><span>Agriculture durable</span></li>
            <li class="flex items-start"><i class="fas fa-check text-green-700 mt-1 mr-2"></i><span>Accès à l'eau potable</span></li>
            <li class="flex items-start"><i class="fas fa-check text-green-700 mt-1 mr-2"></i><span>Énergies renouvelables</span></li>
          </ul>
          <a href="#developpement" class="text-green-700 hover:text-green-900 font-semibold underline underline-offset-4">En savoir plus →</a>
        </div>
      </div>
    </section>

    <!-- Education Details Section -->
    <section id="education" class="mb-16 max-w-7xl mx-auto px-4">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-3xl font-bold text-[#090e15] mb-6">Nos Actions en éducation</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <img src="/images/image formation MDH.jpg" alt="Formation en éducation" class="h-96 w-full object-cover rounded-lg shadow-lg" />
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-[#334155]">Impact en chiffres</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-[#090e15]">1</div>
                <div class="text-gray-600">École en construction</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-[#090e15]">230+</div>
                <div class="text-gray-600">Enfants accompagnés</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-[#090e15]">13</div>
                <div class="text-gray-600">Enseignants formés</div>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg text-center">
                <div class="text-3xl font-bold text-[#090e15]">95%</div>
                <div class="text-gray-600">Taux de réussite</div>
              </div>
            </div>
            <p class="text-gray-600">
              Nous construisons une nouvelle école et poursuivons nos actions pour offrir une éducation de qualité à tous les enfants, en collaboration avec les communautés locales.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Statistics -->
    <section class="bg-gradient-to-br from-yellow-50 via-white to-blue-50 rounded-2xl p-10 mb-16 max-w-7xl mx-auto px-4 shadow-xl border border-[#090e15]/10">
      <div class="text-center mb-10">
        <h2 class="text-3xl md:text-4xl font-extrabold text-[#090e15] mb-4">Notre Impact Global</h2>
        <p class="text-lg text-[#334155]">Ensemble, nous faisons la différence</p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div class="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-blue-500">
          <i class="fas fa-school text-4xl text-blue-500 mb-4"></i>
          <div class="text-4xl font-extrabold text-[#090e15] mb-2">1</div>
          <div class="text-gray-700 font-semibold">École en construction</div>
        </div>
        <div class="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-[#090e15]">
          <i class="fas fa-users text-4xl text-[#090e15] mb-4"></i>
          <div class="text-4xl font-extrabold text-[#090e15] mb-2">1200+</div>
          <div class="text-gray-700 font-semibold">Bénéficiaires directs</div>
        </div>
        <div class="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-orange-700">
          <i class="fas fa-globe-africa text-4xl text-orange-700 mb-4"></i>
          <div class="text-4xl font-extrabold text-[#090e15] mb-2">1</div>
          <div class="text-gray-700 font-semibold">Pays d'intervention</div>
        </div>
        <div class="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center border-t-4 border-yellow-400">
          <i class="fas fa-hands-helping text-4xl text-yellow-400 mb-4"></i>
          <div class="text-4xl font-extrabold text-[#090e15] mb-2">15</div>
          <div class="text-gray-700 font-semibold">Bénévoles actifs</div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#090e15] text-white rounded-2xl p-12 max-w-7xl mx-auto px-4 text-center mb-16">
      <h2 class="text-3xl font-bold mb-4">Rejoignez notre mission</h2>
      <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
        Ensemble, nous pouvons créer un impact durable. Que ce soit en tant que bénévole ou en nous contactant, votre soutien compte.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <router-link to="/contact" class="px-8 py-3 bg-yellow-400 text-[#090e15] rounded-full font-bold hover:bg-white transition duration-300">
          Nous contacter
        </router-link>
        <router-link to="/rejoindre" class="px-8 py-3 bg-gray-700 text-white rounded-full font-bold hover:bg-gray-600 transition duration-300">
          Devenir bénévole
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
