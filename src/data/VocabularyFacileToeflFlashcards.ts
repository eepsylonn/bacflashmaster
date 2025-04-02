
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the meaning of 'phenomenon'?",
    answer: "A fact or situation that is observed to exist or happen, especially one whose cause or explanation is in question",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'crucial' mean?",
    answer: "Decisive or critical, especially in the success or failure of something",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the definition of 'advocate'?",
    answer: "A person who publicly supports or recommends a particular cause or policy; or (as a verb) to publicly recommend or support",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'implement' mean?",
    answer: "To put a decision, plan, agreement, etc. into effect",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'controversy'",
    answer: "Prolonged public disagreement or heated discussion",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'diverse'?",
    answer: "Showing a great deal of variety; very different",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'fundamental'",
    answer: "Forming a necessary base or core; of central importance",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'scenario' mean?",
    answer: "A postulated sequence or development of events; a possible situation",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'perspective'",
    answer: "A particular attitude toward or way of regarding something; a point of view",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does 'reluctant' mean?",
    answer: "Unwilling and hesitant; disinclined",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const VocabularyFacileToeflFlashcards = vocabularyFacileToeflFlashcards;
