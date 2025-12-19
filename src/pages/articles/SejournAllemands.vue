<template>
  <div>
    <section class="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Deux jeunes Allemands ont séjourné au Togo</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Novembre 2023</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <img src="/images/article3.jpg" alt="Jeunes Allemands au Togo" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              Un échange international riche en apprentissages et en partage culturel.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Un échange interculturel significatif</h2>
            <p>
              Deux jeunes Allemands ont récemment effectué un séjour mémorable au Togo dans le cadre d'un programme d'échange international organisé par l'Organisation MDH. Cette expérience leur a permis de découvrir les réalités sociales, culturelles et éducatives du Togo.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Objectifs du séjour</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Découvrir les projets de développement en cours</li>
              <li>Partager les expériences et les bonnes pratiques</li>
              <li>Renforcer la coopération internationale</li>
              <li>Sensibiliser aux enjeux de développement local</li>
              <li>Créer des liens de solidarité et d'amitié</li>
              <li>Participer aux activités de terrain</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Activités et visites</h2>
            <p>
              Pendant leur séjour, les jeunes Allemands ont participé à diverses activités : visite des écoles bénéficiaires, rencontres avec les communautés locales, participation aux chantiers de construction, et discussions avec les équipes de l'Organisation MDH. Ils ont pu constater directement l'impact des projets menés.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Apprentissages et impressions</h2>
            <p>
              Les visiteurs ont exprimé leur admiration pour l'engagement des équipes locales et la résilience des communautés. Ils ont découvert comment l'éducation, la santé et le développement économique sont interconnectés. Cette expérience a profondément marqué leur compréhension de la coopération internationale.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Renforcement des partenariats</h2>
            <p>
              Ce séjour symbolise le renforcement des liens entre l'Allemagne et le Togo au travers de l'Organisation MDH. Il ouvre la voie à de futurs partenariats, échanges de volontaires et projets collaboratifs. La solidarité internationale est au cœur de notre mission.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Impact durable</h2>
            <p>
              Ces jeunes ambassadeurs retourneront en Allemagne avec des histoires inspirantes à partager. Ils deviendront des relais pour sensibiliser leurs pairs aux enjeux de développement et à l'importance de la coopération nord-sud. Leur engagement contribue à créer une communauté mondiale consciente et solidaire.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gradient-to-r from-blue-700 to-blue-900">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Rejoindre notre réseau international</h2>
        <p class="text-blue-100 mb-8 text-lg">
          Participez à nos projets d'échange et de coopération internationale.
        </p>
        <router-link to="/rejoindre" class="inline-block px-8 py-4 bg-[#fbbf24] text-[#090e15] rounded-full font-bold hover:bg-white transition">
          <i class="fas fa-handshake mr-2"></i>Nous rejoindre
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
