
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the definition of 'ambiguous'?",
    answer: "Open to more than one interpretation; not having one obvious meaning",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'paradigm' mean?",
    answer: "A typical example or pattern of something; a model or framework",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'scrutinize'",
    answer: "To examine or inspect closely and thoroughly",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'pragmatic'?",
    answer: "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'exemplify'",
    answer: "To be a typical example of something; to illustrate or demonstrate",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the term 'arbitrary' mean?",
    answer: "Based on random choice or personal whim, rather than any reason or system",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'mitigate'",
    answer: "To make less severe, serious, or painful; to alleviate",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the definition of 'propensity'?",
    answer: "A natural tendency or inclination to behave in a particular way",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'profound' mean?",
    answer: "Very great or intense; having or showing great knowledge or insight",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'analogous'",
    answer: "Comparable in certain respects, typically in a way that makes clearer the nature of the things compared",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const VocabularyIntermediaireToeflFlashcards = vocabularyIntermediaireToeflFlashcards;
