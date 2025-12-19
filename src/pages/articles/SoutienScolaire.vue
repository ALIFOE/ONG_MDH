<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-pink-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Soutien scolaire et enseignement</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Décembre 2023</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <img src="/images/image ecole 5 MDH.jpg" alt="Soutien scolaire" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              Les cours de soutien sont au cœur de nos activités pour l'éducation inclusive. Les élèves sont accompagnés toute l'année scolaire.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Notre programme de soutien scolaire</h2>
            <p>
              L'Organisation MDH propose un programme complet de soutien scolaire destiné aux élèves des communautés locales. Ce programme vise à réduire les inégalités d'accès à l'éducation de qualité et à améliorer les performances académiques.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Services offerts</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Soutien scolaire en mathématiques et français</li>
              <li>Accompagnement personnalisé</li>
              <li>Préparation aux examens</li>
              <li>Atelier d'étude et de révision</li>
              <li>Encadrement socio-éducatif</li>
              <li>Orientation professionnelle</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Méthodes pédagogiques</h2>
            <p>
              Nos enseignants utilisent des méthodes pédagogiques innovantes et adaptées à chaque élève. Nous favorisons l'apprentissage actif, la participation et la confiance en soi. Chaque session de soutien est un moment d'accompagnement personnalisé.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Résultats et impact</h2>
            <p>
              Grâce à ce programme, nous avons observe une amélioration significative des résultats académiques. Les élèves accompagnés présentent une meilleure assiduité et une plus grande confiance en eux. Beaucoup d'entre eux ont réussi leurs examens avec des mentions.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Accessibilité et inclusion</h2>
            <p>
              Le soutien scolaire est gratuit et accessible à tous les élèves, sans discrimination. Nous proposons des horaires flexibles et des lieux accessibles pour faciliter la participation de tous les enfants des communautés, y compris ceux en situation de vulnérabilité.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Prochaines étapes</h2>
            <p>
              L'Organisation MDH prévoit d'étendre ce programme à d'autres localités et d'enrichir l'offre pédagogique avec de nouvelles matières et des ateliers spécialisés. Nous cherchons continuellement à améliorer la qualité de l'accompagnement offert aux élèves.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-pink-700 to-pink-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Soutenir l'éducation</h2>
        <p class="text-pink-100 mb-8 text-lg">
          Aidez-nous à offrir un soutien scolaire de qualité à tous les enfants.
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
