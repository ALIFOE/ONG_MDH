#!/usr/bin/env node

/**
 * Script pour ajouter Google Analytics 4 (gtag.js) à toutes les pages
 * ID: G-Z7HJ66X9Q0
 */

const fs = require('fs');
const path = require('path');

const GA4_CODE = `    <!-- Google Analytics 4 (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z7HJ66X9Q0"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-Z7HJ66X9Q0');
    </script>`;

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

console.log('\n📊 Ajout de Google Analytics 4 à toutes les pages...\n');

let updated = 0;
let skipped = 0;

pages.forEach(page => {
  const filePath = path.join(mainDir, page);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${page} - Fichier non trouvé`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Vérifier si GA4 est déjà présent
    if (content.includes('G-Z7HJ66X9Q0')) {
      console.log(`⏭️  ${page} - GA4 déjà présent`);
      skipped++;
      return;
    }

    // Trouver la position d'insertion (avant </head>)
    const headEndIndex = content.indexOf('</head>');
    
    if (headEndIndex === -1) {
      console.log(`❌ ${page} - Pas de balise </head> trouvée`);
      return;
    }

    // Insérer le code GA4
    const updatedContent = content.substring(0, headEndIndex) +
                          '\n' + GA4_CODE + '\n    ' +
                          content.substring(headEndIndex);

    fs.writeFileSync(filePath, updatedContent, 'utf8');
    console.log(`✅ ${page} - GA4 ajouté avec succès`);
    updated++;
  } catch (error) {
    console.log(`❌ ${page} - Erreur: ${error.message}`);
  }
});

console.log(`\n📊 Résumé:`);
console.log(`✅ Pages mises à jour: ${updated}`);
console.log(`⏭️  Pages déjà configurées: ${skipped}`);
console.log(`\n✨ Google Analytics 4 configuré!\n`);
console.log('📈 Suivez vos données sur: https://analytics.google.com\n');
