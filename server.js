const express = require('express');
const path = require('path');
const fs = require('fs');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// Trust proxy - IMPORTANT pour les hébergeurs avec HTTPS
app.set('trust proxy', 1);

// Security and Performance Middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'", "*"],
            scriptSrc: ["'self'", "'unsafe-inline'", "*"],
            styleSrc: ["'self'", "'unsafe-inline'", "*"],
            imgSrc: ["'self'", "https:", "data:", "*"],
            connectSrc: ["'self'", "*"],
        }
    },
    hsts: false
}));

// Compression middleware for better performance
app.use(compression());

// SEO Headers
app.use((req, res, next) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    
    // Redirection HTTPS seulement si nécessaire et pas déjà HTTPS
    if (req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV === 'production') {
        return res.redirect(301, 'https://' + req.get('host') + req.url);
    }
    next();
});

// Servir les fichiers statiques avec extension automatique .html
app.use(express.static(path.join(__dirname), {
    extensions: ['html'],
    maxAge: '1d',
    etag: false
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

// Gestion des erreurs 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).sendFile(path.join(__dirname, '500.html'));
});

// Configuration du serveur
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
