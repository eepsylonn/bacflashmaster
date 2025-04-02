
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingUseIntermediaireCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct form: 'By the time we arrived at the station, the train _____ (leave).'",
    answer: "had left",
    matiere: "Reading & Use of English",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Read the text and answer: 'Despite recent improvements in healthcare access, many rural communities still face significant challenges when seeking specialized medical treatment.' What does the author suggest about healthcare in rural areas?",
    answer: "It has improved but still has limitations for specialized care",
    matiere: "Reading & Use of English",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct phrasal verb: 'The meeting has been _____ until next week due to unforeseen circumstances.' (put off/put up/put away)",
    answer: "put off",
    matiere: "Reading & Use of English",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the sentence: 'She insisted _____ paying for dinner despite my objections.'",
    answer: "on",
    matiere: "Reading & Use of English",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Word formation: 'The new policy has resulted in significant _____ (IMPROVE) in customer satisfaction.'",
    answer: "improvements",
    matiere: "Reading & Use of English",
    niveau: "intermediaire",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const ReadingUseIntermediaireCambridgeFlashcards = readingUseIntermediaireCambridgeFlashcards;
