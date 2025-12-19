<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-green-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Sensibilisation genre et foncier à Bangéli</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Février 2023</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <img src="/images/sensibilisation1.jpg" alt="Sensibilisation" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              Sensibilisations communautaires sur le genre et le foncier. Les femmes agricultrices de Bangéli apprennent leurs droits fonciers.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Enjeux du foncier et du genre</h2>
            <p>
              Les femmes agricultrices de Bangéli font face à des défis majeurs concernant l'accès et le contrôle des terres. Cette session de sensibilisation vise à éduquer les femmes sur leurs droits fonciers et l'égalité des genres.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Thèmes abordés</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Droits des femmes sur les terres</li>
              <li>Égalité des genres dans l'agriculture</li>
              <li>Cadre juridique et légal</li>
              <li>Autonomisation économique</li>
              <li>Gestion durable des ressources</li>
              <li>Accès au financement agricole</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Impact sur la communauté</h2>
            <p>
              Cette initiative a permis à plus de 150 femmes agricultrices de comprendre leurs droits fonciers et les mesures légales en place pour les protéger. Elles sont maintenant mieux outillées pour défendre leurs intérêts et contribuer au développement durable de leurs communautés.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Suites et perspectives</h2>
            <p>
              L'Organisation MDH continue de mener des actions de sensibilisation dans d'autres localités pour promouvoir l'égalité des genres et les droits fonciers des femmes. Des groupes de femmes ont été formés pour perpétuer ces messages dans leurs communautés respectives.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-green-700 to-green-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Soutenir l'égalité des genres</h2>
        <p class="text-green-100 mb-8 text-lg">
          Aidez-nous à promouvoir l'égalité des genres et les droits des femmes dans les communautés.
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
