
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyIntermediaireCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the correct word: 'She's very _____ of her children and always praises their achievements.' (proud/conceited/arrogant)",
    answer: "proud",
    matiere: "Vocabulary",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What's the difference between 'raise' and 'rise'?",
    answer: "'Raise' is a transitive verb (needs an object) meaning to lift something up. 'Rise' is an intransitive verb (no object) meaning to move upward or increase.",
    matiere: "Vocabulary",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the idiom: 'It's not rocket _____' (something that's not difficult)",
    answer: "science",
    matiere: "Vocabulary",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What's the meaning of the word 'controversial'?",
    answer: "Causing disagreement or discussion, especially because it's a sensitive or divisive topic",
    matiere: "Vocabulary",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct collocation: 'She wants to _____ experience in the marketing industry.' (make/do/gain)",
    answer: "gain",
    matiere: "Vocabulary",
    niveau: "intermediaire",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const VocabularyIntermediaireCambridgeFlashcards = vocabularyIntermediaireCambridgeFlashcards;
