
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the correct form: 'She ____ to work every day.'",
    answer: "goes",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'We have ____ the project.'",
    answer: "completed",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'They ____ in the meeting room now.'",
    answer: "are",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'The report ____ finished yesterday.'",
    answer: "was",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'He ____ to the manager tomorrow.'",
    answer: "will speak",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct article: 'I need ____ pen to fill out this form.'",
    answer: "a",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct preposition: 'The meeting will be held ____ Monday.'",
    answer: "on",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'We ____ lunch when she called.'",
    answer: "were having",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct pronoun: 'Please give the documents to ____.'",
    answer: "her",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct conjunction: 'I want to attend the conference, ____ I don't have enough time.'",
    answer: "but",
    matiere: "TOEIC Grammar",
    niveau: "facile",
    diplome: "toeic"
  },
];
