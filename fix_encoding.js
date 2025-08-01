const fs = require('fs').promises;
const path = require('path');

const replacements = {
    'Ã©': 'é',
    'Ã¨': 'è',
    'Ã ': 'à',
    'Ã¢': 'â',
    'Ã®': 'î',
    'Ã´': 'ô',
    'Ã»': 'û',
    'Ã§': 'ç',
    'Ã‰': 'É',
    'Ã€': 'À',
    'Ã‚': 'Â',
    'ÃŽ': 'Î',
    'Ã"': 'Ô',
    'Ã›': 'Û',
    'Ã‡': 'Ç',
    'Ã  travers': 'à travers',
    'Ã  l\'': 'à l\'',
    'dÃ©': 'dé',
    'Ã‰': 'É',
    'Retour Ã  l\'accueil': 'Retour à l\'accueil',
    'RÃ©joindre-nous': 'Réjoindre-nous',
    'ActualitÃ©s': 'Actualités',
    'Ã‰cole': 'École',
    'L'Organisation dÃ©diÃ©e': 'L'Organisation dédiée',
    'dÃ©veloppement': 'développement',
    'Ã©conomique': 'économique',
    'Ã©ducation': 'éducation',
    'santÃ©': 'santé'
};

function fixEncoding(text) {
    // Première passe avec les remplacements classiques
    let fixed = Object.entries(replacements).reduce(
        (str, [key, value]) => str.replace(new RegExp(key, 'g'), value),
        text
    );

    // Deuxième passe pour les méta descriptions et autres contenus lL'Organisations
    fixed = fixed.replace(/content="([^"]+)"/g, (match, p1) => {
        let content = p1;
        Object.entries(replacements).forEach(([key, value]) => {
            content = content.replace(new RegExp(key, 'g'), value);
        });
        return `content="${content}"`;
    });

    // Troisième passe pour les attributs aria-label
    fixed = fixed.replace(/aria-label="([^"]+)"/g, (match, p1) => {
        let label = p1;
        Object.entries(replacements).forEach(([key, value]) => {
            label = label.replace(new RegExp(key, 'g'), value);
        });
        return `aria-label="${label}"`;
    });

    return fixed;
}

async function processFile(filePath) {
    try {
        console.log(`Correction de l'encodage de ${path.basename(filePath)}...`);
        const content = await fs.readFile(filePath, 'utf8');
        const fixedContent = fixEncoding(content);
        await fs.writeFile(filePath, fixedContent, 'utf8');
        console.log('  - Succès');
    } catch (error) {
        console.error(`  - Erreur: ${error.message}`);
    }
}

async function main() {
    try {
        const files = await fs.readdir('.');
        const htmlFiles = files.filter(file => file.endsWith('.html'));
        
        for (const file of htmlFiles) {
            await processFile(file);
        }
        
        console.log('Encodage corrigé pour tous les fichiers HTML!');
    } catch (error) {
        console.error(`Erreur: ${error.message}`);
    }
}

main();
