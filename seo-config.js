/**
 * Configuration des redirections SEO avancées
 * Pour Node.js Express
 */

module.exports = {
  // Redirections 301 (redirections permanentes)
  redirects301: {
    // Format: 'old-url': 'new-url'
    '/ancienne-page': '/nouvelle-page',
    '/blog/old-article': '/actualites',
    '/rejoins': '/rejoindre'
  },

  // Redirections 302 (temporaires)
  redirects302: {
    // Pages temporairement indisponibles
    '/maintenance': '/index.html'
  },

  // Patterns d'URLs (regex)
  urlPatterns: {
    // Accepter les URLs avec et sans trailing slash
    trailingSlash: true,
    // Accepter les URLs en minuscules
    lowercaseURLs: true
  },

  // Configuration des sitemaps
  sitemaps: {
    // Sitemaps d'index (pour sites très gros)
    useIndex: false,
    // Nombre max d'URLs par sitemap
    maxURLsPerMap: 50000
  },

  // Crawl Budget Optimization
  crawlBudget: {
    // Disallow les pages non essentielles
    disallowPages: [
      '/admin',
      '/private',
      '/temp',
      '/cache',
      '/backup'
    ],
    // Allow les ressources importantes
    allowPages: [
      '/css',
      '/js',
      '/images',
      '/fonts'
    ]
  },

  // Canonical URLs
  canonical: {
    // Format: 'path': 'canonical-url'
    '/index.html': 'https://modehumain.org/',
    '/association.html': 'https://modehumain.org/association'
  },

  // Mots-clés prioritaires par page
  keywords: {
    '/': ['MDH Togo', 'développement humain', 'ONG Togo', 'humanitaire'],
    '/association': ['qui sommes nous', 'MDH International', 'mission', 'valeurs'],
    '/actions': ['nos actions', 'humanitaire', 'projets', 'initiatives'],
    '/ecole': ['école MDH', 'éducation', 'Togo', 'projet école'],
    '/donation': ['don', 'donation', 'soutenir', 'ONG'],
    '/contact': ['contact', 'nous contacter', 'adresse', 'téléphone']
  },

  // Pages prioritaires pour les moteurs de recherche
  priority: {
    '/': 1.0,
    '/donation': 0.9,
    '/actions': 0.8,
    '/ecole': 0.8,
    '/association': 0.7,
    '/contact': 0.7
  },

  // Fréquence de mise à jour
  changeFrequency: {
    '/': 'weekly',
    '/actualites': 'daily',
    '/actions': 'monthly',
    '/donation': 'monthly',
    '/contact': 'yearly'
  },

  // Liens internes stratégiques
  internalLinks: {
    '/': ['/donation', '/actions', '/association'],
    '/donation': ['/', '/contact'],
    '/actions': ['/', '/actualites'],
    '/association': ['/', '/notre-equipe'],
    '/ecole': ['/projet-ecole', '/donation']
  },

  // Pages avec alt text requis
  imageOptimization: {
    enableWebP: true,
    enableLazyLoading: true,
    requireAltText: true,
    compressionLevel: 'high'
  },

  // Structured Data à ajouter
  structuredData: {
    localBusiness: true,
    organization: true,
    faq: true,
    breadcrumbs: true,
    newsArticle: true
  }
};
