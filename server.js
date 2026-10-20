import express from 'express';
import compression from 'compression';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware with proper CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "https://www.googletagmanager.com"],
      // Polices Google + icônes Font Awesome / Bootstrap Icons chargées depuis les CDN
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"],
      imgSrc: ["'self'", "data:", "https:"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com", "https://cdn.jsdelivr.net"],
      connectSrc: ["'self'", "https://www.google-analytics.com", "https://*.google-analytics.com", "https://www.googletagmanager.com"],
      // Carte Google Maps de la page Contact
      frameSrc: ["'self'", "https://maps.google.com", "https://www.google.com"]
    }
  },
  crossOriginEmbedderPolicy: false
}));

// API PHP de l'espace admin et images téléversées : transmises au serveur PHP (« npm run api »)
const API_TARGET = new URL(process.env.API_URL || 'http://127.0.0.1:8000');

app.use(['/api', '/uploads'], (req, res) => {
  const upstream = http.request({
    hostname: API_TARGET.hostname,
    port: API_TARGET.port,
    path: req.originalUrl,
    method: req.method,
    headers: { ...req.headers, host: API_TARGET.host }
  }, (apiRes) => {
    res.writeHead(apiRes.statusCode, apiRes.headers);
    apiRes.pipe(res);
  });
  upstream.on('error', () => {
    if (!res.headersSent) {
      res.status(502).json({ error: "L'API PHP ne répond pas : lancez « npm run api »." });
    }
  });
  req.pipe(upstream);
});

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.use(limiter);

// Compression
app.use(compression());

// Custom middleware to set correct MIME types
app.use((req, res, next) => {
  if (req.url.endsWith('.js') || req.url.endsWith('.mjs')) {
    res.setHeader('Content-Type', 'application/javascript; charset=utf-8');
  } else if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css; charset=utf-8');
  } else if (req.url.endsWith('.woff') || req.url.endsWith('.woff2')) {
    res.setHeader('Content-Type', 'application/font-woff');
  }
  next();
});

// Serve static files from dist folder with caching
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1d',
  etag: false,
  // index.html must always be revalidated so a new build is picked up immediately
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// Handle SPA routing - redirect all requests to index.html
app.use((req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Erreur serveur:', err);
  res.status(500).json({ error: 'Erreur serveur interne' });
});

app.listen(PORT, () => {
  console.log(`✅ Serveur lancé sur http://localhost:${PORT}`);
});
