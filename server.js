const express = require('express');
const path = require('path');
const app = express();

// Servir les fichiers statiques avec extension automatique .html
app.use(express.static(path.join(__dirname), {
    extensions: ['html']
}));

// Middleware pour rediriger les URLs sans extension vers les fichiers .html
app.use((req, res, next) => {
    // Ignorer les requêtes pour les fichiers statiques (css, js, images, etc.)
    if (req.url.includes('.') && !req.url.endsWith('.html')) {
        return next();
    }
    
    // Si la requête est pour la racine, servir index.html
    if (req.path === '/') {
        return res.sendFile(path.join(__dirname, 'index.html'));
    }
    
    // Si l'URL ne se termine pas par .html et n'est pas un dossier, ajouter .html
    if (!req.url.endsWith('.html') && !req.url.endsWith('/') && !req.path.includes('.')) {
        const filePath = path.join(__dirname, req.url + '.html');
        
        const fs = require('fs');
        if (fs.existsSync(filePath)) {
            return res.sendFile(filePath);
        }
    }
    next();
});

// Middleware simple pour les logs
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Autoriser l'accès aux ressources
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Gestion simple des erreurs
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).sendFile(path.join(__dirname, '500.html'));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
