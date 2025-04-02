
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const calculFacileTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Calculer : 125 × 8",
    answer: "1000",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : 15% de 80",
    answer: "12",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : 7² - 2³",
    answer: "41",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : (18 + 12) ÷ 6",
    answer: "5",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si un article à 80€ est soldé à -20%, quel est son nouveau prix ?",
    answer: "64€",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : 1/4 + 1/2",
    answer: "3/4",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la racine carrée de 100 ?",
    answer: "10",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si 3x = 18, combien vaut x ?",
    answer: "6",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : 112 ÷ 8",
    answer: "14",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : 5³",
    answer: "125",
    matiere: "Calcul",
    niveau: "facile",
    diplome: "tage-mage"
  }
];
