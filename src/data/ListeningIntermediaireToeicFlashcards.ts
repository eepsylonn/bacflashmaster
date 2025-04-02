
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez le rapport et répondez : Quel pourcentage d'augmentation la région est a-t-elle enregistré?",
    answer: "12%",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/rapport-region.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation téléphonique et répondez : Quel message le secrétaire doit-il transmettre à M. Thompson?",
    answer: "La réunion est reportée à vendredi à 14h",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/message-thompson.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Quelle est la raison principale du retard du train?",
    answer: "Des travaux de maintenance sur les voies",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/retard-train.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion et répondez : Qui doit approuver le budget final avant la mise en œuvre?",
    answer: "Le directeur financier et le PDG",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/approbation-budget.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'information et répondez : Combien d'ateliers chaque participant peut-il choisir?",
    answer: "Trois ateliers maximum",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/choix-ateliers.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conversation sur la planification et répondez : Quelle plage horaire l'orateur propose-t-il pour la réunion?",
    answer: "Mardi à 11h ou vendredi à 15h",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/planification-reunion.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le message vocal et répondez : À quelle heure le client peut-il rappeler pour parler au responsable?",
    answer: "Après 14h30",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/heure-rappel.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion et répondez : Quel changement de stratégie marketing est suggéré?",
    answer: "Se concentrer davantage sur les médias sociaux pour atteindre un public plus jeune",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/strategie-marketing.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce et répondez : Pendant combien de temps l'entrée principale sera-t-elle fermée?",
    answer: "Deux semaines",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/fermeture-entree.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'appel du service client et répondez : Quelle compensation est offerte au client?",
    answer: "Un remboursement partiel et un bon d'achat de 50€",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic",
    audio: "/audio/toeic/intermediaire/compensation-client.mp3"
  },
];
