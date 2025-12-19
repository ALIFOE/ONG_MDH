<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-20 bg-gradient-to-br from-[#090e15]/30 via-white to-yellow-100/30 mt-24">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h1 class="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
            <span class="text-yellow-400">L'Organisation</span>
          </h1>
          <div class="w-24 h-1 bg-yellow-400 mx-auto rounded-full mb-8"></div>
          
          <div class="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <!-- Who Are We -->
            <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
              <h2 class="text-2xl font-bold text-[#090e15] mb-4">Qui sommes-nous ?</h2>
              <p class="text-gray-700 leading-relaxed text-lg">
                Mobilisation pour le Développement Humain est une organisation non gouvernementale fondée en 2018, fruit d'une initiative portée par des jeunes bénévoles animés d'une vision commune : placer l'être humain au cœur de toutes leurs actions pour édifier une société véritablement responsable.
              </p>
            </div>

            <!-- Vision -->
            <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-400/30 hover:scale-105 transition-transform duration-300">
              <h3 class="text-xl font-bold text-yellow-400 mb-2">Vision</h3>
              <p class="text-gray-700 leading-relaxed text-lg">
                L'Organisation MDH vise à contribuer à l'amélioration des conditions de vie socioéconomique et culturelle des communautés de base dans une approche de développement humain durable et participatif.
              </p>
            </div>
          </div>
        </div>

        <!-- Mission & Objectives -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Left Column: Image & Objectives -->
          <div class="relative flex flex-col gap-8">
            <div class="absolute -inset-4 bg-yellow-400/20 rounded-3xl blur-lg"></div>
            <img src="/images/votreecole.jpg" alt="Association MDH" class="rounded-2xl h-96 w-full object-cover relative" />
            
            <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-400/30 relative z-10">
              <h2 class="text-2xl font-bold text-[#090e15] mb-4">Objectifs</h2>
              <ul class="list-disc list-inside text-gray-700 space-y-2 text-lg">
                <li>S'investir dans l'éducation inclusive</li>
                <li>Mettre un programme de parrainage en faveur des enfants en situation de vulnérabilité</li>
                <li>Faciliter l'accès des soins de qualité aux populations</li>
                <li>Promouvoir la démocratie, la Paix, la non-violence, la tolérance</li>
                <li>Promouvoir les échanges culturels</li>
                <li>Soutenir les initiatives des femmes et jeunes</li>
                <li>Œuvrer pour la bonne gouvernance</li>
                <li>Promouvoir l'équité genre</li>
              </ul>
            </div>
          </div>

          <!-- Right Column: Mission & Values -->
          <div class="space-y-8">
            <!-- Mission -->
            <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-400/30">
              <h2 class="text-2xl font-bold text-[#090e15] mb-4">Notre Mission</h2>
              <p class="text-gray-700 leading-relaxed text-lg">
                MDH est une organisation non gouvernementale dédiée au développement humain durable. Notre mission est de créer un impact positif dans les communautés à travers l'éducation, la santé et le développement durable en favorisant l'autonomisation des populations locales.
              </p>
            </div>

            <!-- Core Values -->
            <div class="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-yellow-400/30">
              <h3 class="text-2xl font-bold text-[#090e15] mb-4">Nos Valeurs Fondamentales</h3>
              <div class="space-y-3">
                <div class="flex items-start">
                  <i class="fas fa-heart text-yellow-400 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 class="font-bold text-[#090e15]">Intégrité</h4>
                    <p class="text-gray-700">Nous agissons avec transparence et honnêteté dans toutes nos actions</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-handshake text-yellow-400 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 class="font-bold text-[#090e15]">Engagement</h4>
                    <p class="text-gray-700">Nous sommes profondément engagés envers nos bénéficiaires et partenaires</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-leaf text-yellow-400 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 class="font-bold text-[#090e15]">Durabilité</h4>
                    <p class="text-gray-700">Nous créons des solutions durables et pérennes pour les communautés</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <i class="fas fa-users text-yellow-400 text-xl mr-3 mt-1"></i>
                  <div>
                    <h4 class="font-bold text-[#090e15]">Inclusion</h4>
                    <p class="text-gray-700">Nous promouvons l'égalité et l'inclusion sociale pour tous</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-[#090e15] text-white py-16 mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Découvrez Notre Équipe</h2>
        <p class="text-gray-300 mb-8 max-w-2xl mx-auto">
          Rencontrez les personnes passionnées qui font fonctionner notre organisation chaque jour.
        </p>
        <router-link to="/notre-equipe" class="px-8 py-3 bg-yellow-400 text-[#090e15] rounded-full font-bold hover:bg-white transition duration-300 inline-block">
          Voir Notre Équipe →
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
