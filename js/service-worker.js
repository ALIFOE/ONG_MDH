/**
 * Service Worker - Progressive Web App
 * Permet l'offline et la mise en cache
 */

const CACHE_NAME = 'mdh-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/custom.css',
  '/css/navbar.css',
  '/css/floating-button.css',
  '/js/script.js',
  '/js/navbar.js',
  '/images/logo_mdh.png',
  '/images/favicon-mdh.png'
];

// Installation du Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.log('Erreur cache:', err))
  );
});

// Activation du Service Worker
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Ancien cache supprimé:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch events - Stratégie Cache First
self.addEventListener('fetch', event => {
  // Ne mettre en cache que les requêtes GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Si trouvé dans le cache, le retourner
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Ne pas mettre en cache si la réponse n'est pas valide
          if (!response || response.status !== 200 || response.type === 'error') {
            return response;
          }

          // Cloner la réponse
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Retourner une page offline si disponible
        return caches.match('/offline.html')
          .then(response => response || new Response('Offline - Connexion perdue'));
      })
  );
});

// Mise à jour des contenus
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
