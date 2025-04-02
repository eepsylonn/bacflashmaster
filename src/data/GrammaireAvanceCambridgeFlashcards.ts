
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireAvanceCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct subjunctive form: 'The professor insisted that the student _____ (submit) the assignment by Friday.'",
    answer: "submit",
    matiere: "Grammar",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Rewrite using inversion: 'I had never seen such a beautiful sunset before.'",
    answer: "Never before had I seen such a beautiful sunset.",
    matiere: "Grammar",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete with the correct mixed conditional form: 'If she _____ (take) the job in London last year, she _____ (live) near her family now.'",
    answer: "had taken, would be living",
    matiere: "Grammar",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct participle clause: '_____ the report, he realized there were several errors.' (Having read/Read/To read)",
    answer: "Having read",
    matiere: "Grammar",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete with the correct emphasis structure: '_____ did I realize the implications of my decision.'",
    answer: "Little/Only then/Hardly/Rarely",
    matiere: "Grammar",
    niveau: "avance",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const GrammaireAvanceCambridgeFlashcards = grammaireAvanceCambridgeFlashcards;
