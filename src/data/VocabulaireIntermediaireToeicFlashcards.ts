
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the meaning of 'procurement'?",
    answer: "The action of obtaining or acquiring something, especially goods or services",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'quarterly'?",
    answer: "Occurring or produced at three-month intervals",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'invoice'?",
    answer: "A document that lists goods sent or services provided, with a statement of the sum due",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'agenda'?",
    answer: "A list of items to be discussed at a formal meeting",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'subsidiary'?",
    answer: "A company controlled by a larger company",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'revenue'?",
    answer: "Income, especially when of an organization and of a substantial nature",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'deadline extension'?",
    answer: "An increase in the time allowed to complete a task or submit a deliverable",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'negotiate'?",
    answer: "To discuss something in order to reach an agreement",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'liability'?",
    answer: "The state of being legally responsible for something",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'inventory'?",
    answer: "A complete list of items such as property, goods, or stock",
    matiere: "TOEIC Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
];
