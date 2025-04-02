
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireFacileCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the correct form: 'She _____ TV every evening.' (watch/watches/watching)",
    answer: "watches",
    matiere: "Grammar",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the sentence with the correct preposition: 'We arrived _____ the airport two hours before our flight.'",
    answer: "at",
    matiere: "Grammar",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct past form: 'Yesterday, I _____ to the cinema with my friends.' (go/went/gone)",
    answer: "went",
    matiere: "Grammar",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete with the correct article: 'Can you play _____ guitar?'",
    answer: "the",
    matiere: "Grammar",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct comparative form: 'This book is _____ than the one I read last week.' (interesting/more interesting/interestinger)",
    answer: "more interesting",
    matiere: "Grammar",
    niveau: "facile",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const GrammaireFacileCambridgeFlashcards = grammaireFacileCambridgeFlashcards;
