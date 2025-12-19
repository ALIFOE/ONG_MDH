<template>
  <div>
    <!-- Hero Section -->
    <section class="pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div class="max-w-4xl mx-auto px-4">
        <router-link to="/actualites" class="inline-flex items-center gap-2 text-[#fbbf24] hover:text-[#090e15] font-semibold mb-6 transition">
          <i class="fas fa-arrow-left"></i>Retour aux actualités
        </router-link>
        <h1 class="text-5xl md:text-6xl font-black text-[#090e15] mb-4">Vacances Utiles 2025 à Apédokoè</h1>
        <div class="flex items-center gap-4 text-gray-600">
          <span><i class="fas fa-calendar-alt mr-2"></i>Juillet - Août 2025</span>
          <span><i class="fas fa-user mr-2"></i>Organisation MDH</span>
        </div>
      </div>
    </section>

    <!-- Content -->
    <section class="py-16 bg-white">
      <div class="max-w-4xl mx-auto px-4">
        <div class="prose prose-lg max-w-none">
          <!-- Featured Image -->
          <img src="/images/article1.jpg" alt="Vacances Utiles 2025" class="w-full h-96 object-cover rounded-2xl shadow-xl mb-12" />

          <!-- Article Content -->
          <div class="space-y-6 text-gray-700 leading-relaxed">
            <p class="text-xl font-semibold text-[#090e15]">
              Le siège social de l'Organisation MDH accueille le programme « Vacances Utiles 2025 » : ateliers éducatifs, jeux, activités sportives et bien plus !
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Un programme riche et diversifié</h2>
            <p>
              Pendant les vacances d'été 2025, l'Organisation MDH propose un programme complet et gratuit pour les enfants des communautés locales. Ce programme vise à offrir des activités éducatives, ludiques et sportives pendant la période estivale.
            </p>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Activités proposées</h2>
            <ul class="list-disc pl-6 space-y-2">
              <li>Ateliers éducatifs et soutien scolaire</li>
              <li>Activités sportives et jeux collectifs</li>
              <li>Ateliers créatifs et artistiques</li>
              <li>Sensibilisation à l'hygiène et à la santé</li>
              <li>Activités ludiques et divertissantes</li>
              <li>Repas nutritifs pour tous les participants</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Objectifs du programme</h2>
            <p>
              Le programme « Vacances Utiles 2025 » vise à :
            </p>
            <ul class="list-disc pl-6 space-y-2">
              <li>Offrir des activités éducatives de qualité pendant les vacances</li>
              <li>Promouvoir l'inclusion et l'égalité des chances</li>
              <li>Développer les compétences sociales et créatives des enfants</li>
              <li>Garantir un environnement sûr et bienveillant</li>
              <li>Renforcer les liens communautaires</li>
            </ul>

            <h2 class="text-3xl font-bold text-[#090e15] mt-8 mb-4">Impact attendu</h2>
            <p>
              Grâce à ce programme, nous espérons toucher plus de 200 enfants des communautés locales, leur permettant de passer des vacances enrichissantes et sécurisées, loin de la rue et des risques.
            </p>
          </div>

          <!-- Share Section -->
          <div class="border-t border-gray-200 pt-8 mt-12">
            <p class="text-sm text-gray-600 mb-4">Partager cet article :</p>
            <div class="flex gap-3">
              <button class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition flex items-center gap-2">
                <i class="fab fa-facebook-f"></i>Facebook
              </button>
              <button class="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition flex items-center gap-2">
                <i class="fab fa-twitter"></i>Twitter
              </button>
              <button class="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition flex items-center gap-2">
                <i class="fab fa-whatsapp"></i>WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 bg-gradient-to-r from-[#090e15] to-[#1e293b]">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold text-white mb-4">Soutenez nos actions</h2>
        <p class="text-gray-300 mb-8 text-lg">
          Aidez-nous à continuer ces programmes pour les enfants. Votre soutien fait toute la différence.
        </p>
        <router-link to="/donation" class="inline-block px-8 py-4 bg-[#fbbf24] text-[#090e15] rounded-full font-bold hover:bg-white transition">
          <i class="fas fa-heart mr-2"></i>Faire un don
        </router-link>
      </div>
    </section>

    <!-- Related Articles -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-4xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-[#090e15] mb-8">Autres actualités</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <router-link to="/article/sensibilisation-genre-foncier" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/sensibilisation1.jpg" alt="Sensibilisation" class="w-full h-48 object-cover" />
            <div class="p-6">
              <p class="text-[#fbbf24] font-semibold mb-2">Février 2023</p>
              <h3 class="text-xl font-bold text-[#090e15]">Sensibilisation genre et foncier à Bangéli</h3>
            </div>
          </router-link>
          <router-link to="/article/mobilisation-parlementaire" class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img src="/images/article2.jpg" alt="Mobilisation" class="w-full h-48 object-cover" />
            <div class="p-6">
              <p class="text-[#fbbf24] font-semibold mb-2">Mai 2025</p>
              <h3 class="text-xl font-bold text-[#090e15]">Mobilisation parlementaire pour le droit foncier</h3>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
