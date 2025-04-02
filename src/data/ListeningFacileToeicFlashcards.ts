
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez l'audio et répondez : Que fait l'homme sur la photo?",
    answer: "Il utilise un clavier d'ordinateur",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-1.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Que propose la personne?",
    answer: "Des options de boissons",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-2.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : À quelle heure part le train?",
    answer: "9:15",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-3.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Qu'est-ce qui est planifié?",
    answer: "Une réunion pour demain après-midi",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://ielts-up.com/demo/cambridge-ielts-9-test-1-listening-part-4.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Quelle information est donnée?",
    answer: "Les heures d'ouverture de l'entreprise",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : À quelle heure le bureau fermera-t-il?",
    answer: "4 PM",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-clear-announce-tones-2861.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Où cette conversation a-t-elle probablement lieu?",
    answer: "Dans un magasin",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-doorbell-tone-2864.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Où pourriez-vous entendre ceci?",
    answer: "Dans un avion",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation et répondez : Qu'est-ce qui est proposé?",
    answer: "Envoyer un rapport par email",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-positive-interface-beep-221.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Qu'est-ce qui a changé?",
    answer: "L'emplacement de la réunion",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
  },
];
