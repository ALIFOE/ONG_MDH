const fs = require('fs');
const path = require('path');

function addFloatingButton(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Supprimer d'abord tout bouton flottant existant
        content = content.replace(/<link[^>]*floating-button\.css[^>]*>/g, '');
        content = content.replace(/<a[^>]*class="floating-button"[^>]*>.*?<\/a>/g, '');
        
        // Ajouter le lien CSS dans le head
        const headEndPos = content.toLowerCase().lastIndexOf('</head>');
        if (headEndPos !== -1) {
            content = content.slice(0, headEndPos) + 
                '\n    <link rel="stylesheet" href="css/floating-button.css">\n' + 
                content.slice(headEndPos);
        }
        
        // Ajouter le bouton flottant
        const bodyEndPos = content.toLowerCase().lastIndexOf('</body>');
        if (bodyEndPos !== -1) {
            content = content.slice(0, bodyEndPos) + 
                '\n    <a href="vacances-utiles-2025.html" class="floating-button">Programme de Vacances Utiles 2025</a>\n    ' + 
                content.slice(bodyEndPos);
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
    }
}

// Liste des fichiers HTML à exclure
const excludeList = ['public', 'vacances-utiles-2025.html', 'node_modules'];

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
