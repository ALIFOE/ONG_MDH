<template>
  <ArticleLayout :cta="{ title: `Soutenir l'éducation`, text: 'Aidez-nous à offrir un soutien scolaire de qualité à tous les enfants.', to: '/donation', label: 'Faire un don' }">
    <p class="lead-text">
      Les cours de soutien sont au cœur de nos activités pour l'éducation inclusive. Les élèves sont accompagnés toute l'année scolaire.
    </p>

    <h3>Notre programme de soutien scolaire</h3>
    <p>
      L'Organisation MDH propose un programme complet de soutien scolaire destiné aux élèves des communautés locales. Ce programme vise à réduire les inégalités d'accès à l'éducation de qualité et à améliorer les performances académiques.
    </p>

    <h3>Services offerts</h3>
    <ul class="mdh-check-list">
      <li>Soutien scolaire en mathématiques et français</li>
      <li>Accompagnement personnalisé</li>
      <li>Préparation aux examens</li>
      <li>Atelier d'étude et de révision</li>
      <li>Encadrement socio-éducatif</li>
      <li>Orientation professionnelle</li>
    </ul>

    <h3>Méthodes pédagogiques</h3>
    <p>
      Nos enseignants utilisent des méthodes pédagogiques innovantes et adaptées à chaque élève. Nous favorisons l'apprentissage actif, la participation et la confiance en soi. Chaque session de soutien est un moment d'accompagnement personnalisé.
    </p>

    <h3>Résultats et impact</h3>
    <p>
      Grâce à ce programme, nous avons observé une amélioration significative des résultats académiques. Les élèves accompagnés présentent une meilleure assiduité et une plus grande confiance en eux. Beaucoup d'entre eux ont réussi leurs examens avec des mentions.
    </p>

    <h3>Accessibilité et inclusion</h3>
    <p>
      Le soutien scolaire est gratuit et accessible à tous les élèves, sans discrimination. Nous proposons des horaires flexibles et des lieux accessibles pour faciliter la participation de tous les enfants des communautés, y compris ceux en situation de vulnérabilité.
    </p>

    <h3>Prochaines étapes</h3>
    <p>
      L'Organisation MDH prévoit d'étendre ce programme à d'autres localités et d'enrichir l'offre pédagogique avec de nouvelles matières et des ateliers spécialisés. Nous cherchons continuellement à améliorer la qualité de l'accompagnement offert aux élèves.
    </p>
  </ArticleLayout>
</template>

<script setup>
import ArticleLayout from '@/components/ArticleLayout.vue'
</script>
