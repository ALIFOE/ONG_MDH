<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-orange-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Participation aux activités pratiques à Logoté</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Décembre 2023</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <img src="/images/image debut chantier.jpg" alt="Chantier" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              Préparation du sable et fabrication des briques écologiques dans la construction d'un bâtiment de formation.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Un projet de construction communautaire</h2>
            <p>
              En décembre 2023, l'Organisation MDH a lancé la construction d'un bâtiment de formation polyvalent à Logoté. Cette initiative mobilise la communauté locale dans un processus participatif de construction utilisant des techniques écologiques et durables.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Activités pratiques menées</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Préparation et tri du sable</li>
              <li>Fabrication de briques écologiques</li>
              <li>Sensibilisation aux techniques de construction durable</li>
              <li>Formation des jeunes aux métiers du bâtiment</li>
              <li>Mobilisation communautaire</li>
              <li>Création d'emplois locaux</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Briques écologiques : une innovation</h2>
            <p>
              Nous utilisons des briques écologiques fabriquées localement à partir de matériaux naturels. Cette approche réduit l'impact environnemental tout en créant de l'emploi pour la communauté et en promenant les savoir-faire locaux.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Impact communautaire</h2>
            <p>
              Plus de 100 jeunes ont participé aux activités pratiques. Le bâtiment de formation servira à accueillir des ateliers de formation professionnelle, des réunions communautaires et des activités éducatives pour la région.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Durabilité et environnement</h2>
            <p>
              Ce projet contribue à la promotion du développement durable en utilisant des matériaux locaux, en créant de l'emploi, et en formant la communauté aux techniques de construction respectueuses de l'environnement.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-orange-700 to-orange-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Développement durable</h2>
        <p class="text-orange-100 mb-8 text-lg">
          Aidez-nous à construire des infrastructures durables pour les communautés.
        </p>
        <router-link to="/donation" class="inline-block px-8 py-4 bg-[#fbbf24] text-[#090e15] rounded-full font-bold hover:bg-white transition">
          <i class="fas fa-heart mr-2"></i>Faire un don
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
