
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const calculAvanceTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Si f(x) = 2x² - 3x + 1 et g(x) = x + 2, calculer f(g(3))",
    answer: "31",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "On lance deux dés équilibrés. Quelle est la probabilité d'obtenir une somme supérieure à 9 ?",
    answer: "1/6",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Résoudre dans ℝ : |2x - 3| > 5",
    answer: "x < -1 ou x > 4",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer la dérivée de f(x) = x³ - 5x² + 2x - 7 en x = 2",
    answer: "-2",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si n! = n(n-1)(n-2)...3×2×1, calculer 8! ÷ 6!",
    answer: "56",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "La suite (Un) est définie par U₁ = 3 et Un+1 = 2Un - 1. Calculer U₄",
    answer: "17",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une entreprise augmente sa production de 5% chaque année. En combien d'années sa production aura-t-elle doublé ?",
    answer: "Environ 14 ans",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Résoudre le système : { 2x + 3y = 1 ; 5x + y = 7 }",
    answer: "x = 2, y = -1",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : ∑(k=1 à 10) k²",
    answer: "385",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Déterminer le PGCD de 120 et 108",
    answer: "12",
    matiere: "Calcul",
    niveau: "avance",
    diplome: "tage-mage"
  }
];
