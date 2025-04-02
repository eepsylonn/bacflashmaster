
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const logiqueFacileTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complétez la suite : 2, 4, 6, 8, ?",
    answer: "10",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel nombre manque dans la série : 3, 6, 9, 12, ?",
    answer: "15",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez l'analogie : Main est à doigt ce que pied est à ?",
    answer: "Orteil",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la prochaine lettre dans la série : A, C, E, G, ?",
    answer: "I",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez la suite logique : 1, 4, 9, 16, ?",
    answer: "25",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si tous les Zorbs sont des Yips et que certains Yips sont des Xans, alors :",
    answer: "Certains Zorbs peuvent être des Xans",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Dans une file de 10 personnes, Pierre est 7ème en partant du début. Quelle est sa position en partant de la fin ?",
    answer: "4ème",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Identifiez l'intrus : chien, chat, canari, poisson, pommier",
    answer: "Pommier (c'est une plante, les autres sont des animaux)",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si A = 1, B = 2, C = 3, etc., combien vaut le mot CODE ?",
    answer: "3 + 15 + 4 + 5 = 27",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez : Lundi, Mercredi, Vendredi, ?",
    answer: "Dimanche",
    matiere: "Logique",
    niveau: "facile",
    diplome: "tage-mage"
  }
];
