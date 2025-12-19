<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-purple-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Mobilisation parlementaire pour le droit foncier</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Mai 2025</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <img src="/images/article2.jpg" alt="Mobilisation parlementaire" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              L'Organisation MDH et ses partenaires ont mobilisé le Caucus des femmes parlementaires pour les droits fonciers.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Une mobilisation politique importante</h2>
            <p>
              En mai 2025, l'Organisation MDH a réuni le Caucus des femmes parlementaires afin de renforcer leur engagement envers les droits fonciers des femmes. Cette mobilisation politique marque une étape cruciale dans la promotion de la justice foncière.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Objectifs de la rencontre</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Sensibiliser les parlementaires aux enjeux fonciers des femmes</li>
              <li>Promouvoir l'adoption de lois équitables</li>
              <li>Renforcer le plaidoyer pour les droits fonciers</li>
              <li>Créer des alliances politiques durables</li>
              <li>Développer une stratégie de suivi parlementaire</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Résultats obtenus</h2>
            <p>
              Cette mobilisation a permis d'obtenir des engagements précis du Caucus des femmes parlementaires. Plusieurs propositions de loi ont été discutées pour renforcer les protections légales des droits fonciers des femmes.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Perspectives d'avenir</h2>
            <p>
              L'Organisation MDH continuera de travailler avec les parlementaires pour mettre en œuvre les résolutions adoptées et assurer le suivi des initiatives législatives visant à protéger les droits fonciers des femmes.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-purple-700 to-purple-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Défendre les droits fonciers</h2>
        <p class="text-purple-100 mb-8 text-lg">
          Soutenez notre plaidoyer pour les droits fonciers des femmes.
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
