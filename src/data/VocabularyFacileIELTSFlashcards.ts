
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const vocabularyFacileIELTSFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "What is the meaning of 'to enhance' in academic contexts?",
    answer: "To improve or increase the quality, value, or extent of something",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: uuidv4(),
    question: "What is the difference between 'affect' and 'effect'?",
    answer: "'Affect' is typically used as a verb meaning to influence something, while 'effect' is usually a noun meaning the result or outcome of something",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: uuidv4(),
    question: "What does the phrase 'a significant increase' mean in the context of describing trends?",
    answer: "A noticeable or important rise in numbers or values that is worthy of attention and likely not due to random variation",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: uuidv4(),
    question: "What are three synonyms for 'advantage'?",
    answer: "Benefit, gain, merit",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: uuidv4(),
    question: "Complete this common collocation: 'to make a _______' (when talking about decisions)",
    answer: "Decision",
    matiere: "Vocabulary",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Export with consistent naming
export const VocabularyFacileIELTSFlashcards = vocabularyFacileIELTSFlashcards;
