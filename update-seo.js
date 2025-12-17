#!/usr/bin/env node

/**
 * Script de mise à jour SEO pour toutes les pages HTML
 * Ajoute les meta tags essentiels à toutes les pages du site
 */

const fs = require('fs');
const path = require('path');

// Configuration des pages avec leurs metas
const pagesConfig = {
    'actions.html': {
        title: 'Nos Actions - MDH International Togo | Initiatives Humanitaires',
        description: 'Découvrez nos actions et initiatives humanitaires en éducation, santé et développement économique au Togo.',
        keywords: 'actions humanitaires, initiatives MDH, projets Togo, développement durable',
        ogTitle: 'Nos Actions - MDH International Togo',
        ogDescription: 'Découvrez nos initiatives humanitaires et projets de développement au Togo.',
        canonical: 'https://modehumain.org/actions'
    },
    'actualites.html': {
        title: 'Actualités - MDH International Togo | Nos Dernières Nouvelles',
        description: 'Restez informé des dernières actualités, événements et projets de MDH International Togo.',
        keywords: 'actualités MDH, news Togo, événements humanitaires, MDH Togo',
        ogTitle: 'Actualités - MDH International Togo',
        ogDescription: 'Les dernières actualités et événements de MDH International Togo.',
        canonical: 'https://modehumain.org/actualites'
    },
    'ecole.html': {
        title: 'Notre École - MDH International Togo | Éducation de Qualité',
        description: 'Découvrez notre établissement scolaire offrant une éducation de qualité aux enfants du Togo.',
        keywords: 'école MDH, éducation Togo, établissement scolaire, projet école',
        ogTitle: 'Notre École - MDH International Togo',
        ogDescription: 'Découvrez notre établissement scolaire et nos programmes éducatifs.',
        canonical: 'https://modehumain.org/ecole'
    },
    'rejoindre.html': {
        title: 'Rejoindre-Nous - MDH International Togo | Devenir Bénévole',
        description: 'Rejoignez MDH International Togo en tant que bénévole ou partenaire. Ensemble pour le développement du Togo.',
        keywords: 'bénévole MDH, rejoindre ONG, volontaire Togo, partenaire humanitaire',
        ogTitle: 'Rejoindre-Nous - MDH International Togo',
        ogDescription: 'Rejoignez notre organisation comme bénévole ou partenaire.',
        canonical: 'https://modehumain.org/rejoindre'
    },
    'donation.html': {
        title: 'Faire un Don - MDH International Togo | Contribuez au Développement',
        description: 'Soutenez les projets humanitaires de MDH International Togo par un don. Ensemble, faisons la différence.',
        keywords: 'don MDH, donation humanitaire, soutenir ONG, collecte fonds Togo',
        ogTitle: 'Faire un Don - MDH International Togo',
        ogDescription: 'Soutenez nos projets humanitaires avec un don sécurisé.',
        canonical: 'https://modehumain.org/donation'
    },
    'notre-equipe.html': {
        title: 'Notre Équipe - MDH International Togo | Qui Sommes-Nous',
        description: 'Rencontrez l\'équipe dédiée de MDH International Togo, passionnée par le développement humain durable.',
        keywords: 'équipe MDH, membres, dirigeants, équipe humanitaire',
        ogTitle: 'Notre Équipe - MDH International Togo',
        ogDescription: 'Découvrez notre équipe dévouée au service du développement.',
        canonical: 'https://modehumain.org/notre-equipe'
    },
    'parrainage.html': {
        title: 'Parrainage - MDH International Togo | Parrainer un Enfant',
        description: 'Participez à notre programme de parrainage pour soutenir l\'éducation des enfants au Togo.',
        keywords: 'parrainage enfant, sponsorship, éducation enfants Togo, soutien scolaire',
        ogTitle: 'Parrainage - MDH International Togo',
        ogDescription: 'Parrainez un enfant et transformez sa vie à travers l\'éducation.',
        canonical: 'https://modehumain.org/parrainage'
    },
    'projet-ecole.html': {
        title: 'Projet École - MDH International Togo | Construction et Développement',
        description: 'Découvrez notre projet d\'école, visant à offrir une éducation de qualité aux enfants défavorisés.',
        keywords: 'projet école, construction école, éducation qualité, MDH école',
        ogTitle: 'Projet École - MDH International Togo',
        ogDescription: 'Notre projet pour construire et développer des établissements scolaires.',
        canonical: 'https://modehumain.org/projet-ecole'
    }
};

// Template pour les meta tags
const generateMetaTags = (config) => {
    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${config.description}">
    <meta name="keywords" content="${config.keywords}">
    <meta name="author" content="MDH International Togo">
    <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
    <meta name="canonical" content="${config.canonical}">
    <title>${config.title}</title>
    
    <!-- Open Graph Tags -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${config.ogTitle}">
    <meta property="og:description" content="${config.ogDescription}">
    <meta property="og:url" content="${config.canonical}">
    <meta property="og:image" content="https://modehumain.org/images/logo_mdh.png">
    <meta property="og:site_name" content="MDH International Togo">
    <meta property="og:locale" content="fr_FR">
    
    <!-- Twitter Card Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${config.ogTitle}">
    <meta name="twitter:description" content="${config.ogDescription}">
    <meta name="twitter:image" content="https://modehumain.org/images/logo_mdh.png">`;
};

// Fonction pour mettre à jour une page
const updatePage = (filePath, config) => {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Chercher la balise <title> existante et les meta tags
        const headRegex = /<head[^>]*>([\s\S]*?)<\/head>/i;
        const headMatch = content.match(headRegex);
        
        if (!headMatch) {
            console.log(`❌ Impossible de trouver la balise <head> dans ${filePath}`);
            return false;
        }
        
        const oldHead = headMatch[1];
        
        // Supprimer les anciens meta tags
        let newHead = oldHead
            .replace(/<meta\s+name="description"[^>]*>/i, '')
            .replace(/<meta\s+name="keywords"[^>]*>/i, '')
            .replace(/<meta\s+name="author"[^>]*>/i, '')
            .replace(/<meta\s+name="robots"[^>]*>/i, '')
            .replace(/<meta\s+name="canonical"[^>]*>/i, '')
            .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
            .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
            .replace(/<title>[^<]*<\/title>/i, '')
            .replace(/<meta\s+charset[^>]*>/i, '')
            .replace(/<meta\s+name="viewport"[^>]*>/i, '');
        
        // Nettoyer les espaces vides supplémentaires
        newHead = newHead.replace(/\n\s*\n/g, '\n');
        
        // Ajouter les nouveaux meta tags après <head>
        const newMetaTags = generateMetaTags(config);
        newHead = '<head>\n' + newMetaTags + newHead;
        
        // Remplacer le head entier
        const updatedContent = content.replace(headRegex, (match) => {
            return newHead + '\n</head>';
        });
        
        // Écrire le fichier mis à jour
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`✅ ${path.basename(filePath)} mise à jour avec succès`);
        return true;
    } catch (error) {
        console.log(`❌ Erreur lors de la mise à jour de ${filePath}: ${error.message}`);
        return false;
    }
};

// Traiter toutes les pages
const mainDir = __dirname;
let updated = 0;
let failed = 0;

console.log('\n🔍 Mise à jour des meta tags SEO...\n');

for (const [filename, config] of Object.entries(pagesConfig)) {
    const filePath = path.join(mainDir, filename);
    
    if (fs.existsSync(filePath)) {
        if (updatePage(filePath, config)) {
            updated++;
        } else {
            failed++;
        }
    } else {
        console.log(`⚠️  Fichier non trouvé: ${filename}`);
        failed++;
    }
}

console.log(`\n📊 Résumé:`);
console.log(`✅ Pages mises à jour: ${updated}`);
console.log(`❌ Pages échouées: ${failed}`);
console.log(`\n✨ Mise à jour SEO terminée!\n`);
