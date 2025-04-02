
// Service Worker pour l'application bacflashmaster
const CACHE_NAME = 'bacflashmaster-v1';

// Ressources à mettre en cache lors de l'installation
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/lovable-uploads/c641b0c7-64fb-466c-be4c-766e165a4b10.png'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting()) // Activer immédiatement le service worker
  );
});

// Activation du service worker et nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName !== CACHE_NAME;
        }).map((cacheName) => {
          console.log(`Suppression de l'ancien cache: ${cacheName}`);
          return caches.delete(cacheName);
        })
      );
    }).then(() => self.clients.claim()) // Prendre le contrôle immédiatement
  );
});

// Gestion des requêtes
self.addEventListener('fetch', (event) => {
  // Ne pas interférer avec les requêtes de chrome-extension
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }
  
  // Stratégie Cache First pour les ressources statiques, Network First pour les autres
  if (event.request.url.match(/\.(js|css|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$/)) {
    // Stratégie Cache First pour les ressources statiques
    event.respondWith(
      caches.match(event.request)
        .then((response) => {
          if (response) {
            return response;
          }
          
          // Cloner la requête car elle ne peut être utilisée qu'une fois
          const fetchRequest = event.request.clone();
          
          return fetch(fetchRequest)
            .then((response) => {
              // Vérifier que c'est une réponse valide
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }
              
              // Cloner la réponse car elle ne peut être utilisée qu'une fois
              const responseToCache = response.clone();
              
              caches.open(CACHE_NAME)
                .then((cache) => {
                  cache.put(event.request, responseToCache);
                });
                
              return response;
            })
            .catch(() => {
              // Si la requête échoue et que c'est une image, on peut retourner une image par défaut
              if (event.request.url.match(/\.(png|jpg|jpeg|gif|svg)$/)) {
                return caches.match('/placeholder.svg');
              }
            });
        })
    );
  } else {
    // Stratégie Network First pour les autres ressources (API, HTML, etc.)
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          // Cloner la réponse car elle ne peut être utilisée qu'une fois
          const responseToCache = response.clone();
          
          caches.open(CACHE_NAME)
            .then((cache) => {
              cache.put(event.request, responseToCache);
            });
            
          return response;
        })
        .catch(() => {
          return caches.match(event.request)
            .then((response) => {
              if (response) {
                return response;
              }
              
              // Si la ressource n'est pas en cache et qu'il n'y a pas de connexion, 
              // on retourne la page index.html pour éviter une erreur 404
              if (event.request.mode === 'navigate') {
                return caches.match('/');
              }
              
              return new Response('Contenu non disponible hors ligne', {
                status: 503,
                statusText: 'Service Unavailable',
                headers: new Headers({
                  'Content-Type': 'text/plain'
                })
              });
            });
        })
    );
  }
});

// Gestion des notifications push
self.addEventListener('push', (event) => {
  const options = {
    body: event.data.text(),
    icon: '/icon-192x192.png',
    badge: '/apple-touch-icon.png',
    vibrate: [100, 50, 100]
  };
  
  event.waitUntil(
    self.registration.showNotification('bacflashmaster', options)
  );
});

// Gestion du clic sur une notification
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  event.waitUntil(
    clients.matchAll({ type: 'window' })
      .then((clientList) => {
        // Si une fenêtre de l'application est déjà ouverte, on la focus
        for (const client of clientList) {
          if (client.url.includes(self.location.origin) && 'focus' in client) {
            return client.focus();
          }
        }
        
        // Sinon on ouvre une nouvelle fenêtre
        if (clients.openWindow) {
          return clients.openWindow('/');
        }
      })
  );
});

// Mise à jour automatique en arrière-plan
setInterval(() => {
  self.registration.update();
}, 60 * 60 * 1000); // Vérifier les mises à jour toutes les heures
