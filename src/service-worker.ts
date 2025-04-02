
/// <reference lib="webworker" />

import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate, CacheFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

clientsClaim();

// Précache tous les actifs générés par webpack
precacheAndRoute(self.__WB_MANIFEST);

// Cache des pages pour le mode hors ligne
const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Retour à une navigation pour tous les URL qui n'aboutissent pas à un actif statique
  ({ request, url }: { request: Request; url: URL }) => {
    if (request.mode !== 'navigate') {
      return false;
    }
    if (url.pathname.startsWith('/_')) {
      return false;
    }
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    }
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

// Cache d'images avec une stratégie Cache First
registerRoute(
  ({ request }) => request.destination === 'image',
  new CacheFirst({
    cacheName: 'images',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 jours
      }),
    ],
  })
);

// Cache des fichiers audio avec une stratégie Cache First
registerRoute(
  ({ request }) => request.destination === 'audio',
  new CacheFirst({
    cacheName: 'audio-files',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 60 * 24 * 60 * 60, // 60 jours
      }),
    ],
  })
);

// Cache des fichiers spécifiques du TOEIC
registerRoute(
  ({ url }) => url.pathname.startsWith('/audio/toeic/'),
  new CacheFirst({
    cacheName: 'toeic-audio',
    plugins: [
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 90 * 24 * 60 * 60, // 90 jours
      }),
    ],
  })
);

// Cache des polices et des styles avec une stratégie StaleWhileRevalidate
registerRoute(
  ({ request }) =>
    request.destination === 'style' ||
    request.destination === 'font',
  new StaleWhileRevalidate({
    cacheName: 'static-resources',
  })
);

// Gestion des événements d'installation et d'activation
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Service worker personnalisé pour la fonctionnalité hors ligne
const CACHE_NAME = 'flashbac-v2';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/entrainement',
  '/examen',
  '/statistiques',
  '/historique',
  '/reglages',
  '/audio/toeic/facile/conversation-email.mp3',
  '/audio/toeic/facile/commande-cafe.mp3',
  '/audio/toeic/facile/annonce-train.mp3',
  '/audio/toeic/facile/reunion-objectifs.mp3',
  '/audio/toeic/facile/heures-ouverture.mp3',
  '/audio/toeic/facile/fermeture-bureau.mp3',
  '/audio/toeic/facile/recherche-imprimante.mp3',
  '/audio/toeic/facile/annonce-avion.mp3',
  '/audio/toeic/facile/format-rapport.mp3',
  '/audio/toeic/facile/changement-salle.mp3',
  '/audio/toeic/intermediaire/rapport-region.mp3',
  '/audio/toeic/intermediaire/message-thompson.mp3',
  '/audio/toeic/intermediaire/retard-train.mp3',
  '/audio/toeic/intermediaire/approbation-budget.mp3',
  '/audio/toeic/intermediaire/choix-ateliers.mp3',
  '/audio/toeic/intermediaire/planification-reunion.mp3',
  '/audio/toeic/intermediaire/heure-rappel.mp3',
  '/audio/toeic/intermediaire/strategie-marketing.mp3',
  '/audio/toeic/intermediaire/fermeture-entree.mp3',
  '/audio/toeic/intermediaire/compensation-client.mp3',
  '/audio/toeic/avance/marches-asiatiques.mp3',
  '/audio/toeic/avance/migration-donnees.mp3',
  '/audio/toeic/avance/rapport-financier.mp3',
  '/audio/toeic/avance/preoccupations-juridiques.mp3',
  '/audio/toeic/avance/problemes-ux.mp3',
  '/audio/toeic/avance/delais-livraison.mp3',
  '/audio/toeic/avance/segments-marche.mp3',
  '/audio/toeic/avance/consommation-energie.mp3',
  '/audio/toeic/avance/mesures-securite.mp3',
  '/audio/toeic/avance/reglementations-futures.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache ouvert');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then((response) => {
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });
            return response;
          });
      })
  );
});

// Nettoyage des anciens caches
self.addEventListener('activate', (event) => {
  const cacheAllowlist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheAllowlist.indexOf(cacheName) === -1) {
            console.log('Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
