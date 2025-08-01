const fs = require('fs');
const path = require('path');

function addFloatingButton(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        const originalContent = content;

        // Vérifier si le fichier est en UTF-8
        if (!content.includes('charset=UTF-8') && !content.includes('charset="UTF-8"')) {
            content = content.replace('<head>', '<head>\n    <meta charset="UTF-8">');
        }
        
        // Ajouter le lien CSS dans le head, juste avant la fermeture
        if (!content.includes('floating-button.css')) {
            const headEndPos = content.toLowerCase().lastIndexOf('</head>');
            if (headEndPos !== -1) {
                content = content.slice(0, headEndPos) + 
                    '\n    <link rel="stylesheet" href="css/floating-button.css">\n' + 
                    content.slice(headEndPos);
            }
        }
        
        // Ajouter le bouton flottant juste avant la fermeture du body
        // Forcer la mise à jour du bouton flottant
        const hasButton = content.includes('class="floating-button"');
            const bodyEndPos = content.toLowerCase().lastIndexOf('</body>');
            if (bodyEndPos !== -1) {
                content = content.slice(0, bodyEndPos) + 
                    '\n    <a href="vacances-utiles-2025.html" class="floating-button">Programme de Vacances Utiles 2025</a>\n    ' + 
                    content.slice(bodyEndPos);
            }
        }
        
        // Ne sauvegarder que si des modifications ont été apportées
        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated ${filePath}`);
        } else {
            console.log(`No changes needed for ${filePath}`);
        }
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Liste des fichiers HTML à exclure
const excludeList = ['public', 'vacances-utiles-2025.html'];

// Parcourir tous les fichiers HTML de manière récursive
function processDirectory(dirPath) {
    const files = fs.readdirSync(dirPath);
    
    files.forEach(file => {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !excludeList.includes(file)) {
            processDirectory(fullPath);
        } else if (
            file.toLowerCase().endsWith('.html') && 
            !excludeList.some(exclude => fullPath.includes(exclude))
        ) {
            addFloatingButton(fullPath);
        }
    });
}

// Démarrer le traitement depuis le répertoire courant
processDirectory('.');

console.log('Finished updating HTML files');
