
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingUseFacileCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence: Jane _____ to the cinema every weekend when she was younger.",
    answer: "used to go",
    matiere: "Reading & Use of English",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct word: I don't know _____ he's coming to the party. (weather/whether)",
    answer: "whether",
    matiere: "Reading & Use of English",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the sentence with the correct form: If I _____ (know) the answer, I would tell you.",
    answer: "knew",
    matiere: "Reading & Use of English",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Read the text and answer: 'The café opens at 8am and closes at 6pm from Monday to Friday. On weekends, it opens at 9am.' What time does the café open on Saturday?",
    answer: "9am",
    matiere: "Reading & Use of English",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the text with the correct word: 'Sarah was tired _____ studying all night for her exam.'",
    answer: "from/after",
    matiere: "Reading & Use of English",
    niveau: "facile",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const ReadingUseFacileCambridgeFlashcards = readingUseFacileCambridgeFlashcards;
