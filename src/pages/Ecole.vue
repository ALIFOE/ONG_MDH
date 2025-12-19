<template>
  <div>
    <!-- Hero Section -->
    <section class="text-center bg-gray-100 py-12 mt-24">
      <div class="max-w-7xl mx-auto px-4">
        <h1 class="text-5xl font-extrabold text-[#1e293b] mb-4 tracking-tight">Notre École</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto mb-4">
          Un lieu d'apprentissage et d'épanouissement pour les enfants du Togo.
        </p>
        <div class="w-24 h-1 bg-[#fbbf24] mx-auto rounded-full"></div>
      </div>
    </section>

    <!-- School Overview -->
    <section class="py-16 bg-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <!-- Image Placeholder -->
          <img :src="ecoleImage" alt="Notre école au Togo" class="rounded-2xl h-96 w-full object-cover shadow-xl" />

          <!-- School Info -->
          <div class="space-y-6">
            <h2 class="text-3xl font-bold text-[#1e293b]">Une éducation de qualité pour tous</h2>
            <p class="text-gray-700">
              Située dans la région maritime, commune Golfe 7, quartier Apédokoè au Togo, l'école Primaire Bilingue PENEALE accueille plus de 200 élèves âgés de 3 à 15 ans. De la maternelle au primaire, nous offrons un enseignement complet et de qualité, alliant respect des traditions locales et ouverture sur les standards éducatifs internationaux.
            </p>
            
            <!-- Stats Grid -->
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-white/90 p-4 rounded-xl shadow border border-[#1e293b]/10 text-center">
                <div class="text-3xl font-bold text-[#1e293b]">200+</div>
                <div class="text-gray-700">Élèves</div>
              </div>
              <div class="bg-white/90 p-4 rounded-xl shadow border border-[#1e293b]/10 text-center">
                <div class="text-3xl font-bold text-[#1e293b]">12</div>
                <div class="text-gray-700">Enseignants</div>
              </div>
              <div class="bg-white/90 p-4 rounded-xl shadow border border-[#1e293b]/10 text-center">
                <div class="text-3xl font-bold text-[#1e293b]">8</div>
                <div class="text-gray-700">Classes</div>
              </div>
              <div class="bg-white/90 p-4 rounded-xl shadow border border-[#1e293b]/10 text-center">
                <div class="text-3xl font-bold text-[#1e293b]">95%</div>
                <div class="text-gray-700">Taux de réussite</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Installations détaillées -->
        <div class="mb-16">
          <h2 class="text-3xl font-bold text-center mb-8 text-[#1e293b]">Nos Installations en Détail</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Infirmerie -->
            <div class="bg-white/90 rounded-2xl shadow-xl border border-[#1e293b]/10 p-6 flex flex-col">
              <div class="flex items-center mb-3">
                <i class="fas fa-briefcase-medical text-2xl text-[#fbbf24] mr-3"></i>
                <h3 class="text-xl font-bold text-[#1e293b]">Infirmerie</h3>
              </div>
              <p class="text-gray-700 mb-2 font-semibold">Un espace sécurisé et encadré par du personnel qualifié :</p>
              <ul class="list-disc pl-6 text-gray-700 space-y-1">
                <li>Premiers soins</li>
                <li>Surveillance de la santé des enfants</li>
                <li>Prise en charge rapide en cas de malaise ou de blessure</li>
                <li>Accompagnement attentif des enfants fragiles ou souffrants</li>
              </ul>
            </div>

            <!-- Alphabétisation -->
            <div class="bg-white/90 rounded-2xl shadow-xl border border-[#1e293b]/10 p-6 flex flex-col">
              <div class="flex items-center mb-3">
                <i class="fas fa-book-open text-2xl text-[#fbbf24] mr-3"></i>
                <h3 class="text-xl font-bold text-[#1e293b]">Alphabétisation</h3>
              </div>
              <p class="text-gray-700 mb-2 font-semibold">Nous proposons un accompagnement spécifique pour les enfants et adultes n'ayant pas :</p>
              <ul class="list-disc pl-6 text-gray-700 space-y-1">
                <li>Acquis les bases de la lecture et de l'écriture</li>
                <li>Espace d'apprentissage favorisant l'inclusion scolaire</li>
                <li>Aide à progresser à son rythme, quelles que soient les origines linguistiques</li>
              </ul>
            </div>

            <!-- Salle informatique -->
            <div class="bg-white/90 rounded-2xl shadow-xl border border-[#1e293b]/10 p-6 flex flex-col">
              <div class="flex items-center mb-3">
                <i class="fas fa-laptop-code text-2xl text-[#fbbf24] mr-3"></i>
                <h3 class="text-xl font-bold text-[#1e293b]">Salle informatique</h3>
              </div>
              <p class="text-gray-700 mb-2 font-semibold">Équipée de matériel adapté, la salle informatique permet aux enfants de se familiariser avec les outils numériques :</p>
              <ul class="list-disc pl-6 text-gray-700 space-y-1">
                <li>Apprendre à utiliser un ordinateur</li>
                <li>Découvrir des contenus éducatifs</li>
                <li>Développer des compétences utiles à la réussite scolaire et à l'insertion professionnelle</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- CTA Section -->
        <section class="bg-gradient-to-r from-[#090e15] to-[#1a2332] rounded-2xl p-12 text-center text-white">
          <h3 class="text-3xl font-bold mb-4">Inscriptions 2025</h3>
          <p class="text-gray-300 mb-8">
            Les inscriptions pour l'année scolaire 2025-2026 sont ouvertes. Rejoignez notre communauté éducative !
          </p>
          <router-link to="/inscription-vacances-2025" class="inline-block bg-gradient-to-r from-[#fbbf24] to-orange-400 text-[#090e15] font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition duration-300">
            <i class="fas fa-pen-fancy mr-2"></i> S'inscrire maintenant
          </router-link>
        </section>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ecoleImage from '../../images/image ecole 8 MDH.jpg'

const router = useRouter()
const statsAnimated = ref(false)

// Animer les statistiques au scroll
onMounted(() => {
  const statsObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated.value) {
        statsAnimated.value = true
        // Déclencher l'animation des stats
        entry.target.classList.add('animate-in')
      }
    })
  }, statsObserverOptions)

  // Observer la section des statistiques
  const statsSection = document.querySelector('.grid:has(.text-3xl.font-bold.text-\\[\\#1e293b\\])')
  if (statsSection) {
    statsObserver.observe(statsSection)
  }
})
</script>
