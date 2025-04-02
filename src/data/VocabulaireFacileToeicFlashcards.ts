
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the meaning of 'deadline'?",
    answer: "The latest time or date by which something should be completed",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'schedule'?",
    answer: "A plan for carrying out a process or procedure, giving lists of intended events and times",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'employee'?",
    answer: "A person who works for a company or organization",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'meeting'?",
    answer: "An assembly of people for discussion or business",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'email'?",
    answer: "Messages distributed by electronic means from one computer user to one or more recipients",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'document'?",
    answer: "A piece of written, printed, or electronic matter that provides information or evidence",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'office'?",
    answer: "A room, set of rooms, or building where work is done",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'manager'?",
    answer: "A person responsible for controlling or administering an organization or group of staff",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'department'?",
    answer: "A division of a large organization that deals with a specific area of activity",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'customer'?",
    answer: "A person who buys goods or services from a business",
    matiere: "TOEIC Vocabulary",
    niveau: "facile",
    diplome: "toeic"
  },
];
