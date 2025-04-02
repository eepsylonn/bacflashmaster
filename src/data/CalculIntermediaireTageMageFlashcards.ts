
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const calculIntermediaireTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Si le prix d'un produit augmente de 20% puis diminue de 10%, quelle est la variation totale en pourcentage ?",
    answer: "+8%",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : (3/4) × (8/15)",
    answer: "2/5",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un investissement de 5000€ rapporte 7% par an. Combien vaudra-t-il après 2 ans (intérêts composés) ?",
    answer: "5724,50€",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Résoudre : 2x + 5 = 3x - 7",
    answer: "x = 12",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : √(9 + 16)",
    answer: "5",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si a = 2b et b = 3c, exprimer a en fonction de c",
    answer: "a = 6c",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Factoriser : x² - 4x + 4",
    answer: "(x - 2)²",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un magasin propose -30% sur tous les articles. Quel est le pourcentage de remise supplémentaire nécessaire pour atteindre -50% au total ?",
    answer: "-28,6%",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Calculer : log₁₀(100) + log₁₀(10)",
    answer: "3",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si x² + y² = 25 et x + y = 7, calculer xy",
    answer: "12",
    matiere: "Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  }
];
