
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Enregistrer le service worker pour le mode hors ligne
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW enregistré: ', registration);
    }).catch(registrationError => {
      console.log('SW échec d\'enregistrement: ', registrationError);
    });
  });
}

// Gestion spécifique aux appareils mobiles
if (window.matchMedia('(max-width: 768px)').matches) {
  // Désactiver le zoom sur double-tap sur iOS
  document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }, { passive: false });
  
  // Prévenir le comportement de défilement du navigateur sur iOS
  document.addEventListener('touchmove', function(event) {
    if (event.scale !== 1) {
      event.preventDefault();
    }
  }, { passive: false });
}
