<template>
  <div class="w-full overflow-hidden">
    <!-- Hero Section -->
    <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" role="banner" aria-label="Section d'accueil">
      <!-- Animated Background -->
      <div class="absolute inset-0 opacity-20">
        <div class="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0 bg-cover bg-center opacity-20" style="background-image: url('/images/photo2.jpg');"></div>
      
      <!-- Hero Content -->
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full py-20">
        <!-- <div class="mb-8 animate-fade-in">
          <span class="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 font-semibold text-sm mb-6 backdrop-blur-sm">
            Bienvenue chez MDH International
          </span>
        </div> -->
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-tight animate-fade-in-up" style="animation-delay: 0.2s">
          Mobilisation pour le <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">Développement Humain</span>
        </h1>
        <p class="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style="animation-delay: 0.4s">
          Ensemble, construisons un avenir meilleur pour les communautés vulnérables à travers l'éducation et le développement durable.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap animate-fade-in-up" style="animation-delay: 0.6s">
          <router-link to="/rejoindre" class="group px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            <i class="fas fa-heart text-amber-400 group-hover:scale-110 transition-transform"></i>
            Nous rejoindre
          </router-link>
          <router-link to="/actions" class="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            <i class="fas fa-lightbulb text-slate-900 group-hover:scale-110 transition-transform"></i>
            Découvrir nos actions
          </router-link>
          <router-link to="/parrainage" class="group px-8 py-4 bg-gradient-to-r from-white to-amber-400 text-slate-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            <i class="fas fa-handshake text-amber-500 group-hover:scale-110 transition-transform"></i>
            Parrainer
          </router-link>
        </div>
      </div>
    </section>

    <!-- Statistics Section -->
    <section class="w-full py-24 bg-gradient-to-b from-white to-slate-50" aria-label="Nos réalisations en chiffres">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 animate-fade-in-up">Notre Impact en Chiffres</h2>
          <div class="flex justify-center gap-2 mb-8">
            <div class="h-1 w-8 bg-amber-400 rounded-full"></div>
            <div class="h-1 w-24 bg-amber-400 rounded-full"></div>
            <div class="h-1 w-8 bg-amber-400 rounded-full"></div>
          </div>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Des résultats tangibles qui démontrent notre engagement envers le changement</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="group bg-gradient-to-br from-amber-50 via-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-amber-100/50 hover:border-amber-400 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="text-6xl font-black bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">230</div>
              <p class="text-slate-700 font-bold text-lg group-hover:text-amber-600 transition-colors">Enfants accompagnés</p>
              <p class="text-sm text-slate-500 mt-2">Une éducation de qualité</p>
            </div>
          </div>
          <div class="group bg-gradient-to-br from-blue-50 via-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-blue-100/50 hover:border-blue-400 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="text-6xl font-black bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">6</div>
              <p class="text-slate-700 font-bold text-lg group-hover:text-blue-600 transition-colors">Projets Réalisés</p>
              <p class="text-sm text-slate-500 mt-2">Impact durable et mesurable</p>
            </div>
          </div>
          <div class="group bg-gradient-to-br from-emerald-50 via-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-emerald-100/50 hover:border-emerald-400 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="text-6xl font-black bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">15</div>
              <p class="text-slate-700 font-bold text-lg group-hover:text-emerald-600 transition-colors">Bénévoles Actifs</p>
              <p class="text-sm text-slate-500 mt-2">Des cœurs passionnés</p>
            </div>
          </div>
          <div class="group bg-gradient-to-br from-purple-50 via-white to-slate-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 text-center border border-purple-100/50 hover:border-purple-400 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="relative">
              <div class="text-6xl font-black bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">7</div>
              <p class="text-slate-700 font-bold text-lg group-hover:text-purple-600 transition-colors">Années d'Expérience</p>
              <p class="text-sm text-slate-500 mt-2">Une expertise reconnue</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Engagement Section -->
    <section class="w-full py-24 bg-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full -mr-48 -mt-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 animate-fade-in-up">Notre Engagement</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Les trois piliers qui guident notre action au quotidien</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Card 1 -->
          <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-400 overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-slate-900 to-slate-700 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300 group-hover:scale-110">
              <i class="fas fa-hand-holding-heart text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-center mb-4 text-slate-900 group-hover:text-amber-600 transition-colors">Soutien Communautaire</h3>
            <p class="text-slate-600 text-center leading-relaxed">Nous travaillons main dans la main avec les communautés locales pour créer un impact durable et significatif.</p>
          </div>
          <!-- Card 2 -->
          <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-400 overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 to-amber-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-amber-400/50 transition-all duration-300 group-hover:scale-110">
              <i class="fas fa-book-reader text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-center mb-4 text-slate-900 group-hover:text-amber-600 transition-colors">Éducation de Qualité</h3>
            <p class="text-slate-600 text-center leading-relaxed">Nous offrons une éducation de qualité pour donner à chaque enfant la chance de réussir et de prospérer.</p>
          </div>
          <!-- Card 3 -->
          <div class="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-emerald-400 overflow-hidden">
            <div class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-emerald-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
            <div class="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-300 group-hover:scale-110">
              <i class="fas fa-seedling text-white text-2xl"></i>
            </div>
            <h3 class="text-2xl font-bold text-center mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors">Développement Durable</h3>
            <p class="text-slate-600 text-center leading-relaxed">Nous mettons en œuvre des solutions durables pour un impact positif à long terme et générateur de vie.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Notre Histoire Section -->
    <section class="w-full py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full -mr-48 -mt-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="relative group">
            <div class="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
            <div class="relative w-full h-96 bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
              <img src="/images/votreecole.jpg" alt="Notre Histoire - MDH" class="w-full h-full object-cover" />
            </div>
          </div>
          <!-- Content -->
          <div class="space-y-6">
            <div>
              <span class="inline-block px-4 py-2 bg-amber-400/10 border border-amber-400/30 rounded-full text-amber-400 font-semibold text-sm mb-4 backdrop-blur-sm">
                📖 Notre Histoire
              </span>
              <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Une Décennie d'Impact</h2>
              <div class="flex gap-2 mb-6">
                <div class="h-1 w-8 bg-amber-400 rounded-full"></div>
                <div class="h-1 w-20 bg-amber-400 rounded-full"></div>
              </div>
            </div>
            <p class="text-lg text-slate-700 leading-relaxed">
              Depuis sa fondation en 2018, MDH International Togo s'engage à transformer les vies des communautés vulnérables du Togo à travers l'éducation, la santé et le développement économique.
            </p>
            <p class="text-lg text-slate-700 leading-relaxed">
              Avec plus de 7 années d'expérience, nous avons réussi à toucher directement plus de 230 enfants et créé un réseau de 15 bénévoles dédiés. Notre approche participative garantit que chaque projet répond aux besoins réels des communautés.
            </p>
            <div class="flex items-center gap-4 pt-4">
              <div class="text-center">
                <div class="text-3xl font-black text-amber-400">7+</div>
                <p class="text-sm text-slate-600">Années d'expertise</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-amber-400">230+</div>
                <p class="text-sm text-slate-600">Vies transformées</p>
              </div>
              <div class="text-center">
                <div class="text-3xl font-black text-amber-400">6</div>
                <p class="text-sm text-slate-600">Projets majeurs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Domaines d'Action Section -->
    <section class="w-full py-24 bg-white relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Nos Domaines d'Action</h2>
          <div class="flex justify-center gap-2 mb-8">
            <div class="h-1 w-8 bg-amber-400 rounded-full"></div>
            <div class="h-1 w-24 bg-amber-400 rounded-full"></div>
            <div class="h-1 w-8 bg-amber-400 rounded-full"></div>
          </div>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Nous intervenons dans quatre domaines clés pour un développement humain durable</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Domain 1 -->
          <div class="group relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-200 hover:border-blue-400 overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-blue-400/20 rounded-full"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-book text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">Éducation</h3>
              <p class="text-slate-700 leading-relaxed">Construction d'écoles, programmes scolaires, soutien académique et formation professionnelle pour les enfants et jeunes.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-600">
                <li class="flex items-center gap-2"><i class="fas fa-check text-blue-500"></i> 230+ enfants accompagnés</li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-blue-500"></i> Programmes personnalisés</li>
              </ul>
            </div>
          </div>
          <!-- Domain 2 -->
          <div class="group relative bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-emerald-200 hover:border-emerald-400 overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-emerald-400/20 rounded-full"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-leaf text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">Développement Durable</h3>
              <p class="text-slate-700 leading-relaxed">Projets d'infrastructure, construction écologique, création d'emplois locaux et gestion des ressources naturelles.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-600">
                <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Projets verts</li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-emerald-500"></i> Emplois créés</li>
              </ul>
            </div>
          </div>
          <!-- Domain 3 -->
          <div class="group relative bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-rose-200 hover:border-rose-400 overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-rose-400/20 rounded-full"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-rose-500 to-rose-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-heart text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-rose-600 transition-colors">Santé & Bien-être</h3>
              <p class="text-slate-700 leading-relaxed">Sensibilisation à la santé, nutrition, hygiène, accès aux soins de base et soutien aux familles vulnérables.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-600">
                <li class="flex items-center gap-2"><i class="fas fa-check text-rose-500"></i> Campagnes de sensibilisation</li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-rose-500"></i> Support communautaire</li>
              </ul>
            </div>
          </div>
          <!-- Domain 4 -->
          <div class="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-purple-200 hover:border-purple-400 overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 bg-purple-400/20 rounded-full"></div>
            <div class="relative z-10">
              <div class="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i class="fas fa-users text-white text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">Autonomisation Communautaire</h3>
              <p class="text-slate-700 leading-relaxed">Formation des femmes, renforcement des capacités, gouvernance locale et droits fonciers pour tous.</p>
              <ul class="mt-4 space-y-2 text-sm text-slate-600">
                <li class="flex items-center gap-2"><i class="fas fa-check text-purple-500"></i> Formations inclusives</li>
                <li class="flex items-center gap-2"><i class="fas fa-check text-purple-500"></i> Droits des femmes</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Nos Valeurs Section -->
    <section class="w-full py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-amber-400/5 rounded-full -mr-48 -mb-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Nos Valeurs Fondamentales</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Les principes qui guident chacune de nos actions et décisions</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <!-- Value 1 -->
          <div class="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-amber-400 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🤝</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">Transparence</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Nous opérons avec intégrité et rendre compte de nos actions à nos partenaires</p>
          </div>
          <!-- Value 2 -->
          <div class="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-400 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">Impact Mesurable</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Nous mesurons et documentons l'impact réel de nos interventions</p>
          </div>
          <!-- Value 3 -->
          <div class="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-emerald-400 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🌱</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">Durabilité</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Nous créons des solutions durables pour un changement à long terme</p>
          </div>
          <!-- Value 4 -->
          <div class="group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-rose-400 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-rose-400 to-rose-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">❤️</div>
            <h3 class="text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">Inclusion</h3>
            <p class="text-slate-600 text-sm leading-relaxed">Tous les membres de la communauté sont valorisés et impliqués</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Project Section -->
    <section class="w-full py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full -ml-48 -mb-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Image -->
          <div class="relative group order-2 lg:order-1">
            <div class="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-500 group-hover:duration-200"></div>
            <div class="relative w-full h-96 bg-gradient-to-br from-blue-400 to-blue-600 rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden group-hover:shadow-2xl transition-shadow duration-300">
              <img src="/images/image ecole 3 MDH.jpg" alt="Notre dernier projet - École" class="w-full h-full object-cover" />
            </div>
            <div class="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-6 py-3 rounded-xl shadow-2xl font-bold text-lg transform group-hover:scale-110 transition-transform duration-300">
              <i class="fas fa-calendar-alt mr-2"></i> Juin 2025
            </div>
          </div>
          <!-- Content -->
          <div class="space-y-8 order-1 lg:order-2">
            <div>
              <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Notre Dernier Projet</h2>
              <div class="flex gap-2">
                <div class="h-1 w-8 bg-blue-500 rounded-full"></div>
                <div class="h-1 w-20 bg-blue-500 rounded-full"></div>
              </div>
            </div>
            <p class="text-xl text-slate-700 leading-relaxed font-semibold">Construction d'une nouvelle école primaire qui accueillera plus de 200 élèves dès la rentrée prochaine.</p>
            <div class="space-y-4">
              <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div class="flex-shrink-0">
                  <i class="fas fa-check-circle text-blue-500 text-2xl mt-1"></i>
                </div>
                <div>
                  <p class="text-slate-900 font-bold">6 salles de classe modernes</p>
                  <p class="text-slate-600 text-sm">Équipées avec du matériel pédagogique de qualité</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div class="flex-shrink-0">
                  <i class="fas fa-check-circle text-blue-500 text-2xl mt-1"></i>
                </div>
                <div>
                  <p class="text-slate-900 font-bold">Bibliothèque et salle informatique</p>
                  <p class="text-slate-600 text-sm">Pour l'accès au savoir et à la technologie</p>
                </div>
              </div>
              <div class="flex items-start space-x-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                <div class="flex-shrink-0">
                  <i class="fas fa-check-circle text-blue-500 text-2xl mt-1"></i>
                </div>
                <div>
                  <p class="text-slate-900 font-bold">Cantine scolaire</p>
                  <p class="text-slate-600 text-sm">Repas nutritifs pour tous les enfants</p>
                </div>
              </div>
            </div>
            <router-link to="/actions" class="group inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <span class="flex items-center gap-2">
                <i class="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
                Découvrir nos projets
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="w-full py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      <!-- Animated Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 class="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 animate-fade-in-up">Ensemble, Changeons des Vies</h2>
        <p class="text-xl text-slate-200 mb-12 leading-relaxed max-w-2xl mx-auto animate-fade-in-up" style="animation-delay: 0.2s">
          Votre soutien peut faire une réelle différence. Rejoignez-nous dans notre mission pour un monde meilleur et plus équitable.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style="animation-delay: 0.4s">
          <router-link to="/galerie" class="group px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            <i class="fas fa-images text-slate-900 group-hover:animate-pulse"></i>
            Voir nos projets
          </router-link>
          <router-link to="/contact" class="group px-8 py-4 bg-white text-slate-900 rounded-full text-lg font-bold shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 inline-flex items-center gap-2">
            <i class="fas fa-envelope group-hover:translate-x-1 transition-transform"></i>
            Nous contacter
          </router-link>
        </div>
      </div>
    </section>

    <!-- Nos Partenaires Section -->
    <section class="w-full py-24 bg-white relative overflow-hidden">
      <div class="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full -ml-48 -mt-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Nos Partenaires de Confiance</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Ensemble, nous créons un impact plus grand pour les communautés</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <!-- Partner 1 -->
          <div class="group flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-400 cursor-pointer">
            <div class="text-center">
              <i class="fas fa-globe text-3xl text-slate-400 group-hover:text-amber-400 transition-colors mb-2"></i>
              <p class="text-sm font-semibold text-slate-700">ONG Internationale</p>
            </div>
          </div>
          <!-- Partner 2 -->
          <div class="group flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-400 cursor-pointer">
            <div class="text-center">
              <i class="fas fa-school text-3xl text-slate-400 group-hover:text-blue-400 transition-colors mb-2"></i>
              <p class="text-sm font-semibold text-slate-700">Gouvernement Local</p>
            </div>
          </div>
          <!-- Partner 3 -->
          <div class="group flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-400 cursor-pointer">
            <div class="text-center">
              <i class="fas fa-handshake text-3xl text-slate-400 group-hover:text-emerald-400 transition-colors mb-2"></i>
              <p class="text-sm font-semibold text-slate-700">Associations Locales</p>
            </div>
          </div>
          <!-- Partner 4 -->
          <div class="group flex items-center justify-center p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-amber-400 cursor-pointer">
            <div class="text-center">
              <i class="fas fa-university text-3xl text-slate-400 group-hover:text-rose-400 transition-colors mb-2"></i>
              <p class="text-sm font-semibold text-slate-700">Institutions Éducatives</p>
            </div>
          </div>
        </div>
        <div class="mt-16 text-center">
          <p class="text-slate-700 text-lg mb-6">Vous souhaitez devenir partenaire de MDH?</p>
          <router-link to="/contact" class="group inline-block px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 rounded-full font-bold shadow-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
            <span class="flex items-center gap-2">
              <i class="fas fa-envelope"></i>
              Nous contacter pour un partenariat
            </span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Social Proof / Testimonials -->
    <section class="w-full py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div class="absolute top-0 left-0 w-96 h-96 bg-emerald-400/5 rounded-full -ml-48 -mt-48"></div>
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-20">
          <h2 class="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4 animate-fade-in-up">Ils Nous Font Confiance</h2>
          <p class="text-slate-600 text-lg max-w-2xl mx-auto">Découvrez les témoignages authentiques de nos partenaires et bénéficiaires</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Testimonial 1 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-emerald-400 relative overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-20 h-20 bg-emerald-400/10 rounded-full group-hover:bg-emerald-400/20 transition-colors"></div>
            <div class="flex items-center mb-6 relative z-10">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">ML</div>
              <div class="ml-4">
                <h3 class="font-bold text-slate-900 text-lg">Marie Laurent</h3>
                <p class="text-sm text-slate-500 flex items-center gap-1"><i class="fas fa-star text-amber-400"></i> Enseignante</p>
              </div>
            </div>
            <p class="text-slate-700 leading-relaxed italic text-lg relative z-10">« L'impact sur nos élèves est remarquable. Les nouvelles installations ont vraiment changé leur manière d'apprendre. »</p>
            <div class="flex gap-1 mt-4">
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
            </div>
          </div>
          <!-- Testimonial 2 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-400 relative overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-20 h-20 bg-blue-400/10 rounded-full group-hover:bg-blue-400/20 transition-colors"></div>
            <div class="flex items-center mb-6 relative z-10">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">PD</div>
              <div class="ml-4">
                <h3 class="font-bold text-slate-900 text-lg">Paul Dubois</h3>
                <p class="text-sm text-slate-500 flex items-center gap-1"><i class="fas fa-star text-amber-400"></i> Partenaire Local</p>
              </div>
            </div>
            <p class="text-slate-700 leading-relaxed italic text-lg relative z-10">« MDH a transformé notre communauté avec des projets durables qui continuent de porter leurs fruits. »</p>
            <div class="flex gap-1 mt-4">
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
            </div>
          </div>
          <!-- Testimonial 3 -->
          <div class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-400 relative overflow-hidden">
            <div class="absolute top-0 right-0 -mr-8 -mt-8 w-20 h-20 bg-purple-400/10 rounded-full group-hover:bg-purple-400/20 transition-colors"></div>
            <div class="flex items-center mb-6 relative z-10">
              <div class="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">SM</div>
              <div class="ml-4">
                <h3 class="font-bold text-slate-900 text-lg">Sophie Martin</h3>
                <p class="text-sm text-slate-500 flex items-center gap-1"><i class="fas fa-star text-amber-400"></i> Bénéficiaire</p>
              </div>
            </div>
            <p class="text-slate-700 leading-relaxed italic text-lg relative z-10">« Grâce à MDH, j'ai pu continuer mes études. Merci pour votre soutien constant et votre dévouement. »</p>
            <div class="flex gap-1 mt-4">
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
              <i class="fas fa-star text-amber-400"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// State pour les sections visibles
const visibleSections = ref({
  hero: false,
  statistics: false,
  engagement: false,
  project: false,
  cta: false,
  testimonials: false
})

// Intersection Observer pour les animations au scroll
let observerInstances = []

onMounted(() => {
  // Observer pour les sections
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionName = entry.target.dataset.section
        if (sectionName) {
          visibleSections.value[sectionName] = true
        }
      }
    })
  }, observerOptions)

  // Observer toutes les sections
  document.querySelectorAll('[data-section]').forEach(section => {
    observer.observe(section)
  })

  observerInstances.push(observer)

  // Scroll smooth
  document.documentElement.style.scrollBehavior = 'smooth'
})

onBeforeUnmount(() => {
  // Nettoyer les observers
  observerInstances.forEach(observer => observer.disconnect())
  observerInstances = []
})

// Fonction pour tracker les clics
const trackClick = (action) => {
  console.log(`Utilisateur a cliqué sur: ${action}`)
}
</script>

