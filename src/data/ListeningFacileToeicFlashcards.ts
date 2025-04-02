
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez l'audio et répondez : Que fait la femme à la fin de la conversation?",
    answer: "Elle accepte d'envoyer un email avec les détails",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-1.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Quelle boisson l'homme choisit-il?",
    answer: "Un café noir",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-2.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Quelle information est donnée concernant le train?",
    answer: "Il y aura un retard de 15 minutes",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-3.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Quel est le sujet principal de la réunion mentionnée?",
    answer: "Les nouveaux objectifs trimestriels",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-4.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'audio et répondez : Quelles sont les heures d'ouverture mentionnées?",
    answer: "De 9h à 17h du lundi au vendredi",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Pourquoi le bureau fermera-t-il plus tôt aujourd'hui?",
    answer: "En raison d'une réunion du personnel",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-clear-announce-tones-2861.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Quel produit le client cherche-t-il?",
    answer: "Une imprimante sans fil",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-doorbell-tone-2864.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Qu'est-ce que les passagers doivent faire maintenant?",
    answer: "Attacher leur ceinture de sécurité",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Quel format le rapport doit-il avoir?",
    answer: "Un document PDF",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Où la réunion aura-t-elle lieu maintenant?",
    answer: "Dans la salle de conférence B au deuxième étage",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
  },
];
