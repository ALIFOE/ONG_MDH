const fs = require('fs');
const path = require('path');

function fixEncoding(filePath) {
    try {
        // Lire le fichier avec l'encodage Latin1
        const content = fs.readFileSync(filePath, 'latin1');
        
        // Réécrire le fichier en UTF-8
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Encodage corrigé pour ${filePath}`);
    } catch (error) {
        console.error(`Erreur lors du traitement de ${filePath}:`, error);
    }
}

// Chemin vers le fichier actions.html
const filePath = path.join(__dirname, 'public', 'actions.html');
fixEncoding(filePath);
