const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const helmet = require('helmet');

const app = express();

// Activation des middlewares de sécurité
app.use(helmet());

// Configuration des en-têtes de sécurité supplémentaires
app.use(helmet.contentSecurityPolicy({
    directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        scriptSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        connectSrc: ["'self'"],
    },
}));

// Servir les fichiers statiques
app.use(express.static('.', {
    setHeaders: (res, path, stat) => {
        res.set('X-Content-Type-Options', 'nosniff');
        res.set('X-Frame-Options', 'SAMEORIGIN');
        res.set('X-XSS-Protection', '1; mode=block');
    }
}));

// Gestion des erreurs 404
app.use((req, res, next) => {
    res.status(404).send('File not found');
});

// Gestion des erreurs 500
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
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
