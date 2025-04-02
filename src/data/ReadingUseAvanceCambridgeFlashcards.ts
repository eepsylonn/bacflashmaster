
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingUseAvanceCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence: 'Not only _____ the deadline, but she also submitted additional supporting documentation.'",
    answer: "did she meet",
    matiere: "Reading & Use of English",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Read the text and identify: 'The author's argument relies heavily on a conflation of correlation and causation, a methodological weakness that undermines the otherwise compelling narrative.' What logical fallacy does the author identify in the argument?",
    answer: "Mistaking correlation for causation",
    matiere: "Reading & Use of English",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Word formation: 'The government's _____ (RIGID) stance on the issue has drawn criticism from various international organizations.'",
    answer: "rigidity",
    matiere: "Reading & Use of English",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct collocation: 'The report _____ attention to the growing disparity between urban and rural educational resources.' (draws/pulls/takes)",
    answer: "draws",
    matiere: "Reading & Use of English",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete with the correct idiom: 'The new legislation is a wolf in _____ clothing, purporting to protect privacy while actually expanding surveillance capabilities.'",
    answer: "sheep's",
    matiere: "Reading & Use of English",
    niveau: "avance",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const ReadingUseAvanceCambridgeFlashcards = readingUseAvanceCambridgeFlashcards;
