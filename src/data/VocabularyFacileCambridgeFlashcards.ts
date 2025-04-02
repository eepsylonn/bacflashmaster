
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyFacileCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the synonym for 'beautiful': pretty, ugly, sad, angry",
    answer: "pretty",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What's the opposite of 'expensive'?",
    answer: "cheap/inexpensive",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the collocation: 'make a _____' (when talking about decisions)",
    answer: "decision",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Which word doesn't belong in this group: apple, banana, carrot, orange",
    answer: "carrot (it's a vegetable, the others are fruits)",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What's the meaning of the phrasal verb 'look after'?",
    answer: "to take care of someone or something",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const VocabularyFacileCambridgeFlashcards = vocabularyFacileCambridgeFlashcards;
