const fs = require('fs');
const path = require('path');

function fixCharacters(content) {
    const replacements = {
        'Ã©': 'é',
        'Ã¨': 'è',
        'Ã': 'à',
        'Ãª': 'ê',
        'Ã¢': 'â',
        'Ã®': 'î',
        'Ã´': 'ô',
        'Ã¹': 'ù',
        'Ã»': 'û',
        'Ã«': 'ë',
        'Ã¯': 'ï',
        'Ã¼': 'ü',
        'Ã§': 'ç',
        'Ã‰': 'É',
        'Ãˆ': 'È',
        'Ã€': 'À',
        'ÃŠ': 'Ê',
        'Ã‚': 'Â',
        'ÃŽ': 'Î',
        'Ã"': 'Ô',
        'Ã™': 'Ù',
        'Ã›': 'Û',
        'Ã‹': 'Ë',
        'Ã¯': 'Ï',
        'Ãœ': 'Ü',
        'Ã‡': 'Ç',
        'ï¿½': 'é'
    };

    let fixedContent = content;
    for (const [wrL'Organisation, correct] of Object.entries(replacements)) {
        fixedContent = fixedContent.replaceAll(wrL'Organisation, correct);
    }
    return fixedContent;
}

function fixFile(filePath) {
    try {
        console.log(`Traitement du fichier: ${filePath}`);
        let content = fs.readFileSync(filePath, 'utf8');
        content = fixCharacters(content);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Encodage corrigé avec succès !');
    } catch (error) {
        console.error('Erreur:', error);
    }
}

const filePath = path.join(__dirname, 'public', 'actions.html');
fixFile(filePath);
