
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez le rapport et répondez : Quelle région a obtenu les meilleurs résultats?",
    answer: "La région est",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-notification-003-633.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation téléphonique et répondez : Quand M. Thompson reviendra-t-il?",
    answer: "Jeudi",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-office-telephone-ring-1350.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Quel problème est mentionné?",
    answer: "Des retards dus à des problèmes de maintenance",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-train-announcement-in-a-station-2642.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion et répondez : Qui doit être contacté?",
    answer: "Le directeur financier (CFO)",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-neutral-mechanical-notification-bell-2982.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'information et répondez : Que doivent faire les participants avant la conférence?",
    answer: "S'inscrire à des ateliers spécifiques",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation sur la planification et répondez : Quand l'orateur N'EST PAS disponible?",
    answer: "Toute la journée de jeudi",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le message vocal et répondez : Quel numéro devez-vous appeler?",
    answer: "Poste 4578",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-classic-short-phone-ring-1356.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion et répondez : Quel changement affecte l'audience de l'entreprise?",
    answer: "Ils vieillissent",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-clear-announce-tones-2861.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Par où les visiteurs doivent-ils entrer dans le bâtiment?",
    answer: "L'entrée temporaire du côté ouest",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'appel du service client et répondez : Qu'est-ce qui a causé le retard?",
    answer: "Les conditions météorologiques",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
];
