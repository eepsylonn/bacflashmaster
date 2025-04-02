
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the correct use of the present perfect tense?",
    answer: "The present perfect tense (have/has + past participle) is used to describe actions that started in the past and continue to the present or have relevance to the present moment. Example: 'I have lived in Paris for three years.' (and still live there)",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Explain the difference between 'few' and 'a few'.",
    answer: "'Few' has a negative connotation, meaning 'almost none' (e.g., 'Few students passed the exam' suggests most failed). 'A few' has a positive connotation, meaning 'some' (e.g., 'A few students passed the exam' suggests that some successfully passed).",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "When should you use the definite article 'the'?",
    answer: "Use 'the' when referring to: 1) Something specific previously mentioned, 2) Something unique or one of a kind, 3) When the noun is made specific by an adjective clause or phrase, 4) With superlative adjectives, 5) With ordinal numbers, 6) With certain geographical features and locations.",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is a run-on sentence and how can it be corrected?",
    answer: "A run-on sentence occurs when two independent clauses are joined without proper punctuation or connecting words. It can be corrected by: 1) Adding a period to create separate sentences, 2) Adding a semicolon between clauses, 3) Adding a comma and coordinating conjunction (and, but, or, nor, for, so, yet), or 4) Adding a subordinating conjunction to create a dependent clause.",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the correct order of adjectives in English?",
    answer: "The general order is: opinion/value, size, age/temperature, shape, color, origin, material, purpose. Example: 'A beautiful large old rectangular brown Italian wooden dining table.'",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const GrammaireFacileToeflFlashcards = grammaireFacileToeflFlashcards;
