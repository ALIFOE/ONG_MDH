#!/usr/bin/env node

/**
 * GA4 Integration Test Script
 * Vérifie que GA4 et les événements sont correctement intégrés
 */

const fs = require('fs');
const path = require('path');

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

console.log(`\n${colors.cyan}╔════════════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.cyan}║     🧪 Test d'Intégration GA4 - MDH International Togo  ║${colors.reset}`);
console.log(`${colors.cyan}╚════════════════════════════════════════════════════════╝${colors.reset}\n`);

// Fichiers à vérifier
const filesToCheck = [
  'donation.html',
  'contact.html',
  'js/ga4-events.js'
];

// Patterns à chercher
const patternsToFind = {
  'donation.html': [
    { pattern: /js\/ga4-events\.js/, description: 'GA4 Events JS chargé' },
    { pattern: /trackDonation/, description: 'Fonction trackDonation appelée' },
    { pattern: /onclick="trackDonation/, description: 'Onclick handler sur bouton' },
    { pattern: /donation-type/, description: 'Type de don tracké' }
  ],
  'contact.html': [
    { pattern: /js\/ga4-events\.js/, description: 'GA4 Events JS chargé' },
    { pattern: /trackContactForm/, description: 'Fonction trackContactForm appelée' },
    { pattern: /onclick="trackContactForm/, description: 'Onclick handler sur bouton' },
    { pattern: /subject/, description: 'Sujet du formulaire tracké' }
  ],
  'js/ga4-events.js': [
    { pattern: /function trackDonation/, description: 'Fonction trackDonation existe' },
    { pattern: /function trackContactForm/, description: 'Fonction trackContactForm existe' },
    { pattern: /gtag\('event'/, description: 'Événements GA4 envoyés' },
    { pattern: /console\.log.*Tracked/, description: 'Logs de débogage présents' }
  ]
};

let totalTests = 0;
let passedTests = 0;

function testFile(filename) {
  const filepath = path.join(__dirname, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`${colors.red}❌ ${filename}${colors.reset} - Fichier non trouvé`);
    return;
  }
  
  console.log(`\n${colors.blue}📄 Vérification: ${filename}${colors.reset}`);
  
  const content = fs.readFileSync(filepath, 'utf-8');
  const patterns = patternsToFind[filename] || [];
  
  patterns.forEach(({ pattern, description }) => {
    totalTests++;
    if (pattern.test(content)) {
      console.log(`  ${colors.green}✅${colors.reset} ${description}`);
      passedTests++;
    } else {
      console.log(`  ${colors.red}❌${colors.reset} ${description}`);
    }
  });
}

// Exécuter les tests
filesToCheck.forEach(testFile);

// Résumé
console.log(`\n${colors.cyan}╔════════════════════════════════════════════════════════╗${colors.reset}`);
console.log(`${colors.cyan}║                    📊 RÉSUMÉ DES TESTS                ║${colors.reset}`);
console.log(`${colors.cyan}╚════════════════════════════════════════════════════════╝${colors.reset}`);

const percentage = Math.round((passedTests / totalTests) * 100);
const status = passedTests === totalTests ? `${colors.green}✨ RÉUSSI${colors.reset}` : `${colors.yellow}⚠️  ATTENTION${colors.reset}`;

console.log(`\n${status}`);
console.log(`Tests réussis: ${colors.green}${passedTests}/${totalTests}${colors.reset} (${percentage}%)\n`);

if (passedTests === totalTests) {
  console.log(`${colors.green}✅ Toutes les vérifications sont passées!${colors.reset}`);
  console.log(`${colors.green}✅ GA4 est correctement intégré sur donation.html et contact.html${colors.reset}`);
  console.log(`${colors.green}✅ Les événements sont prêts à être trackés!${colors.reset}\n`);
} else {
  console.log(`${colors.yellow}⚠️  Certains tests ont échoué.${colors.reset}`);
  console.log(`${colors.yellow}⚠️  Consultez GA4_INTEGRATION_TEST.md pour plus de détails.${colors.reset}\n`);
}

// Instructions de test manuel
console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}`);
console.log(`${colors.cyan}📝 PROCHAINES ÉTAPES:${colors.reset}`);
console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}\n`);

console.log(`1️⃣  ${colors.yellow}Ouvrez https://modehumain.org/donation${colors.reset}`);
console.log(`   - Appuyez sur F12 pour ouvrir la console`);
console.log(`   - Tapez: ${colors.cyan}trackDonation(50, 'test')${colors.reset}`);
console.log(`   - Devrait afficher: "✅ Donation Tracked..."\n`);

console.log(`2️⃣  ${colors.yellow}Ouvrez https://modehumain.org/contact${colors.reset}`);
console.log(`   - Appuyez sur F12 pour ouvrir la console`);
console.log(`   - Tapez: ${colors.cyan}trackContactForm(true, 'test')${colors.reset}`);
console.log(`   - Devrait afficher: "✅ Contact Form Tracked..."\n`);

console.log(`3️⃣  ${colors.yellow}Vérifiez dans Google Analytics${colors.reset}`);
console.log(`   - Allez sur: https://analytics.google.com`);
console.log(`   - Propriété: G-Z7HJ66X9Q0`);
console.log(`   - Section: Real-time → Vue d'ensemble`);
console.log(`   - Vous devriez voir 1 utilisateur actif\n`);

console.log(`${colors.cyan}═══════════════════════════════════════════════════════${colors.reset}\n`);

process.exit(passedTests === totalTests ? 0 : 1);
