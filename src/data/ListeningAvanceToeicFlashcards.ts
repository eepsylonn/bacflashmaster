
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningAvanceToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez la présentation et répondez : Quelle conclusion peut-on tirer concernant l'expansion?",
    answer: "Elle fonctionne mieux que prévu, en particulier en Asie du Sud-Est",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-office-phone-ringing-1350.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la discussion technique et répondez : Quelle est l'approche de l'entreprise pour mettre en œuvre le nouveau système?",
    answer: "Faire fonctionner les deux systèmes simultanément pendant 6 à 8 semaines avant d'arrêter l'ancien",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le rapport financier et répondez : Quelle n'était PAS une cause du déclin de l'indice manufacturier?",
    answer: "La baisse de la demande des consommateurs",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-classic-short-phone-ring-1356.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la téléconférence et répondez : Quelle préoccupation a été identifiée concernant l'acquisition?",
    answer: "Des problèmes réglementaires potentiels dans certaines juridictions qui pourraient causer des retards",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-software-interface-start-2574.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la mise à jour du projet et répondez : Qu'est-ce qui est recommandé?",
    answer: "Prolonger la phase de test pour résoudre les problèmes d'expérience utilisateur avant le lancement",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la négociation et répondez : Quelle est la position de l'orateur?",
    answer: "Ils acceptent le changement de structure de paiement mais ont besoin d'ajuster les délais de livraison",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion stratégique et répondez : Que montrent les données concernant l'approche personnalisée?",
    answer: "Elle obtient des taux de conversion plus élevés et des coûts d'acquisition plus bas",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-interface-hint-notification-911.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le briefing logistique et répondez : Quel problème inattendu est survenu avec le nouveau système?",
    answer: "Une consommation d'électricité et des besoins de maintenance plus élevés que prévu",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-clear-announce-tones-2861.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce sur la santé et la sécurité et répondez : Quels changements de sécurité sont mentionnés?",
    answer: "Un nouveau système de contrôle d'accès électronique remplaçant les cartes-clés",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-clear-announce-tones-2861.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conférence de l'industrie et répondez : Que devraient faire les entreprises selon l'orateur?",
    answer: "Mettre à jour de manière proactive leurs cadres de gouvernance pour répondre aux réglementations à venir",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "https://assets.mixkit.co/sfx/preview/mixkit-modern-technology-select-notification-003-633.mp3"
  },
];
