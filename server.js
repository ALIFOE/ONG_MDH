const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const app = express();

// Limiter la taille des requêtes
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Protection contre les attaques par force brute
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limite chaque IP à 100 requêtes par fenêtre
});
app.use('/api/', limiter);

// Activation des middlewares de sécurité
app.use(helmet());

// Configuration des en-têtes de sécurité supplémentaires
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", "https://cdnjs.cloudflare.com", "https://cdn.tailwindcss.com"],
        scriptSrc: ["'self'", "'unsafe-inline'", "https://cdn.tailwindcss.com"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'", "https://cdnjs.cloudflare.com"]
    },
}));

// Validation des en-têtes
app.use((req, res, next) => {
    const contentType = req.get('Content-Type');
    if (req.method === 'POST' && !contentType) {
        return res.status(400).json({ error: 'Content-Type header is required' });
    }
    next();
});

// Servir les fichiers statiques depuis le dossier public
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        res.set('X-Content-Type-Options', 'nosniff');
        res.set('X-Frame-Options', 'SAMEORIGIN');
        res.set('X-XSS-Protection', '1; mode=block');
    }
}));

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

// Gestion des erreurs 500
app.use((err, req, res, next) => {
    console.error(`[${new Date().toISOString()}] Error:`, err);
    
    // Gestion des erreurs de payload trop grand
    if (err instanceof SyntaxError && err.status === 413) {
        return res.status(413).json({ error: 'Payload too large' });
    }
    
    // Gestion des erreurs de timeout
    if (err.timeout) {
        return res.status(504).json({ error: 'Gateway timeout' });
    }
    
    // Gestion des autres erreurs
    res.status(500).sendFile(path.join(__dirname, 'public', '500.html'));
});

const PORT = process.env.PORT || 3000;

// Pour le développement, on peut utiliser HTTP
if (process.env.NODE_ENV === 'development') {
    app.listen(PORT, () => {
        console.log(`Server running in development mode at http://localhost:${PORT}/`);
    });
} else {
    // En production, utilisez HTTPS
    // Vous devrez générer ces fichiers SSL ou obtenir un certificat
    // const options = {
    //     key: fs.readFileSync('chemin/vers/votre/key.pem'),
    //     cert: fs.readFileSync('chemin/vers/votre/cert.pem')
    // };
    
    // https.createServer(options, app).listen(PORT, () => {
    //     console.log(`Server running securely at https://localhost:${PORT}/`);
    // });
    
    // En attendant d'avoir un certificat SSL, on utilise HTTP avec les en-têtes de sécurité
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}/`);
    });
}
