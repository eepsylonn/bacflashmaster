
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the meaning of 'to enhance' in academic contexts?",
    answer: "To improve or increase the quality, value, or extent of something",
    matiere: "IELTS Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What is the difference between 'affect' and 'effect'?",
    answer: "'Affect' is typically used as a verb meaning to influence something, while 'effect' is usually a noun meaning the result or outcome of something",
    matiere: "IELTS Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What does the phrase 'a significant increase' mean in the context of describing trends?",
    answer: "A noticeable or important rise in numbers or values that is worthy of attention and likely not due to random variation",
    matiere: "IELTS Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What are three synonyms for 'advantage'?",
    answer: "Benefit, gain, merit",
    matiere: "IELTS Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Complete this common collocation: 'to make a _______' (when talking about decisions)",
    answer: "Decision",
    matiere: "IELTS Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const VocabularyFacileIELTSFlashcards = vocabularyFacileIELTSFlashcards;
