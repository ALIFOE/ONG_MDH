const fs = require('fs');
const path = require('path');

// Structure HTML du menu mobile mise à jour
const newMobileMenuHTML = `            <!-- Mobile menu button -->
            <div class="md:hidden">
                <button id="mobile-menu-button" class="inline-flex items-center p-2 rounded-md hover:bg-gray-100 focus:outline-none" aria-label="Menu" aria-expanded="false" aria-controls="mobile-menu">
                    <svg class="h-6 w-6 menu-open" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg class="h-6 w-6 menu-close hidden" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div id="mobile-menu" class="hidden md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="index.html" class="nav-link block w-full text-left px-4 py-2" data-page="index">Accueil</a>
                <a href="association.html" class="nav-link block w-full text-left px-4 py-2" data-page="association">L'Organisation</a>
                <a href="actions.html" class="nav-link block w-full text-left px-4 py-2" data-page="actions">Nos Actions</a>
                <a href="actualites.html" class="nav-link block w-full text-left px-4 py-2" data-page="actualites">Nos Actualités</a>
                <a href="rejoindre.html" class="nav-link block w-full text-left px-4 py-2" data-page="rejoindre">Rejoindre-nous</a>
                <a href="ecole.html" class="nav-link block w-full text-left px-4 py-2" data-page="ecole">Notre École</a>
                <a href="contact.html" class="nav-link block w-full text-left px-4 py-2" data-page="contact">Contactez-nous</a>
                <a href="donation.html" class="nav-link block w-full text-left px-4 py-2 bg-mdh-blue text-white hover:bg-mdh-yellow" data-page="donation">Faire un don</a>
            </div>
        </div>`;

// Patterns regex plus flexibles pour trouver l'ancien menu mobile
const mobileMenuPatterns = [
    /<!-- Mobile menu button -->[\s\S]*?<\/div>\s*<\/div>\s*<!-- Mobile menu -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/,
    /<!-- Mobile menu button -->[\s\S]*?<\/div>\s*<\/div>\s*<!-- Mobile menu -->[\s\S]*?<\/div>\s*<\/div>/,
    /<!-- Mobile menu button -->[\s\S]*?<\/div>\s*<!-- Mobile menu -->[\s\S]*?<\/div>\s*<\/div>/
];

// Liste des fichiers HTML à traiter
const htmlFiles = [
    'index.html',
    'actions.html',
    'actualites.html',
    'association.html',
    'contact.html',
    'donation.html',
    'ecole.html',
    'rejoindre.html'
];

// Fonction pour mettre à jour un fichier HTML
function updateFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let updated = false;
        
        // Essayer chaque pattern jusqu'à ce qu'un fonctionne
        for (const pattern of mobileMenuPatterns) {
            if (content.match(pattern)) {
                content = content.replace(pattern, newMobileMenuHTML);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ Mise à jour réussie : ${filePath}`);
                updated = true;
                break;
            }
        }

        if (!updated) {
            console.warn(`⚠️ Menu mobile non trouvé dans : ${filePath}`);
            // Chercher une position d'insertion appropriée
            const insertPos = content.indexOf('</header>');
            if (insertPos !== -1) {
                content = content.slice(0, insertPos) + newMobileMenuHTML + content.slice(insertPos);
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`✅ Menu mobile inséré dans : ${filePath}`);
            } else {
                console.error(`❌ Impossible de trouver la position d'insertion dans : ${filePath}`);
            }
        }
    } catch (error) {
        console.error(`❌ Erreur lors de la mise à jour de ${filePath}:`, error.message);
    }
}

// Mettre à jour tous les fichiers HTML
console.log('Début de la mise à jour des fichiers HTML...\n');
htmlFiles.forEach(file => {
    updateFile(file);
});
console.log('\nMise à jour terminée.');
