const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
const readdir = util.promisify(fs.readdir);

async function updateNavbar() {
    try {
        // Lire le contenu de la navbar
        const navbar = await readFile('./public/includes/navbar.html', 'utf8');
        
        // Lire tous les fichiers HTML dans le dossier public
        const files = await readdir('./public');
        
        for (const file of files) {
            if (file.endsWith('.html') && !['404.html', '500.html', 'navbar.html'].includes(file)) {
                const filePath = path.join('./public', file);
                let content = await readFile(filePath, 'utf8');
                
                // Supprimer l'ancienne navbar si elle existe
                content = content.replace(/<header[\s\S]*?<\/header>\s*/g, '');
                
                // Insérer la nouvelle navbar après la balise body
                content = content.replace(/(<body[^>]*>)/, `$1\n${navbar}`);
                
                // Sauvegarder le fichier
                await writeFile(filePath, content, 'utf8');
                console.log(`Updated navbar in: ${file}`);
            }
        }
        
        console.log('Navigation bar update completed successfully!');
    } catch (error) {
        console.error('Error updating navigation:', error);
    }
}

updateNavbar();
