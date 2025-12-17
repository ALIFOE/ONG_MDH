/**
 * Script pour ajouter les PWA meta tags avancés à toutes les pages
 */

const fs = require('fs');
const path = require('path');

const pwaMetaTags = `    <!-- PWA Meta Tags -->
    <meta name="theme-color" content="#1e293b">
    <meta name="mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="apple-mobile-web-app-title" content="MDH Togo">
    <link rel="apple-touch-icon" href="images/favicon-mdh.png">
    <link rel="manifest" href="manifest.json">
    
    <!-- Preconnect pour performance -->
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <link rel="preconnect" href="https://cdn.tailwindcss.com">
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
    
    <!-- Prefetch pages importantes -->
    <link rel="prefetch" href="donation.html">
    <link rel="prefetch" href="contact.html">`;

const pages = [
  'index.html',
  'association.html',
  'contact.html',
  'actions.html',
  'actualites.html',
  'ecole.html',
  'rejoindre.html',
  'donation.html',
  'notre-equipe.html',
  'parrainage.html',
  'projet-ecole.html'
];

const mainDir = process.cwd();

console.log('\n🔧 Ajout des PWA meta tags et optimisations de performance...\n');

pages.forEach(page => {
  const filePath = path.join(mainDir, page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${page} non trouvé`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si les tags existent déjà
    if (content.includes('PWA Meta Tags')) {
      console.log(`⏭️  ${page} - PWA tags déjà présents`);
      return;
    }

    // Trouver la position d'insertion (après les canonical/robots tags)
    const insertPosition = content.indexOf('</head>');
    
    if (insertPosition === -1) {
      console.log(`❌ ${page} - Pas de balise </head> trouvée`);
      return;
    }

    // Insérer les PWA tags
    const updatedContent = content.substring(0, insertPosition) + 
                          '\n' + pwaMetaTags + '\n    ' +
                          content.substring(insertPosition);

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ ${page} - PWA tags ajoutés`);
  } catch (error) {
    console.log(`❌ ${page} - Erreur: ${error.message}`);
  }
});

console.log(`\n✨ Ajout des PWA meta tags terminé!\n`);

// Ajouter le Service Worker registration à script.js
const scriptPath = path.join(mainDir, 'js', 'script.js');

if (fs.existsSync(scriptPath)) {
  try {
    let scriptContent = fs.readFileSync(scriptPath, 'utf8');
    
    if (!scriptContent.includes('Service Worker')) {
      const swRegistration = `
// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('js/service-worker.js')
      .then(registration => {
        console.log('✅ Service Worker enregistré');
      })
      .catch(error => {
        console.log('Service Worker registration échoué:', error);
      });
  });
}
`;
      
      scriptContent = swRegistration + '\n' + scriptContent;
      fs.writeFileSync(scriptPath, scriptContent, 'utf8');
      console.log('✅ Service Worker registration ajouté à script.js');
    }
  } catch (error) {
    console.log('❌ Erreur lors de la modification de script.js:', error.message);
  }
}
