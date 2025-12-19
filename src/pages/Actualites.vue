<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center mb-16 bg-white px-4 py-12 mt-24">
      <h1 class="text-4xl md:text-5xl font-extrabold text-[#090e15] mb-4 tracking-tight">Nos Actualités</h1>
      <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-6">
        Suivez nos dernières actions et découvrez l'impact de nos projets sur le terrain.
      </p>
      <div class="w-24 h-1 bg-yellow-400 mx-auto rounded-full"></div>
    </section>

    <!-- Articles Grid -->
    <section class="max-w-7xl mx-auto px-4 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/rapport2.png" alt="Rapport 2019" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Année 2019</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Rapport Général de la Mise en Œuvre des Activités de 2019</h2>
            <p class="text-gray-700 mb-4">Sensibilisation sur l'utilisation des pesticides et renforcement de capacités des pépiniéristes dans la région des savanes.</p>
            <router-link to="/article/rapport-activites-2019" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/rapport1.png" alt="Académie des Super-Enfants" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Septembre - Novembre 2025</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Rapport d'Activité du Programme Académie des Super-Enfants</h2>
            <p class="text-gray-700 mb-4">Un programme complet d'occupation saine et éducative pour les enfants durant les vacances scolaires avec apprentissage et divertissement.</p>
            <router-link to="/article/academies-super-enfants" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/article1.jpg" alt="Vacances Utiles 2025" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Juillet - Août 2025</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Vacances Utiles 2025 à Apédokoè</h2>
            <p class="text-gray-700 mb-4">Le siège social accueille le programme « Vacances Utiles 2025 » : ateliers éducatifs, jeux, activités sportives et bien plus !</p>
            <router-link to="/article/vacances-utiles-2025" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/sensibilisation1.jpg" alt="Sensibilisation genre et foncier" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Février 2023</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Sensibilisation genre et foncier à Bangéli</h2>
            <p class="text-gray-700 mb-4">Sensibilisations communautaires sur le genre et le foncier. Les femmes agricultrices de Bangéli apprennent leurs droits fonciers.</p>
            <router-link to="/article/sensibilisation-genre-foncier" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">En savoir plus →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/article2.jpg" alt="Mobilisation parlementaire" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Mai 2025</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Mobilisation parlementaire pour le droit foncier</h2>
            <p class="text-gray-700 mb-4">L'Organisation MDH et ses partenaires ont mobilisé le Caucus des femmes parlementaires pour les droits fonciers.</p>
            <router-link to="/article/mobilisation-parlementaire" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/image debut chantier.jpg" alt="Activités pratiques à Logoté" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Décembre 2023</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Participation aux activités pratiques à Logoté</h2>
            <p class="text-gray-700 mb-4">Préparation du sable et fabrication des briques écologiques dans la construction d'un bâtiment de formation.</p>
            <router-link to="/article/activites-pratiques" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/image ecole 5 MDH.jpg" alt="Soutien scolaire" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Décembre 2023</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Soutien scolaire et enseignement</h2>
            <p class="text-gray-700 mb-4">Les cours de soutien sont au cœur de nos activités pour l'éducation inclusive. Les élèves sont accompagnés toute l'année scolaire.</p>
            <router-link to="/article/soutien-scolaire" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>

        <article class="bg-white/90 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-[#090e15]/10">
          <img src="/images/article3.jpg" alt="Séjour en Afrique" class="h-48 w-full object-cover" />
          <div class="p-6">
            <span class="text-yellow-400 font-semibold">Novembre 2023</span>
            <h2 class="text-xl font-bold text-[#090e15] mt-2 mb-3">Deux jeunes Allemands ont séjourné au Togo</h2>
            <p class="text-gray-700 mb-4">Deux jeunes bénévoles allemands ont participé au projet « Hallo je voyage en Afrique » au sein de l'Organisation MDH.</p>
            <router-link to="/article/sejour-allemands" class="text-[#090e15] hover:text-yellow-400 font-semibold transition duration-300">Lire la suite →</router-link>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
