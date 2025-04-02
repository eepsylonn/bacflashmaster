
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesCalculsTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Résolvez l'inéquation : 3(2x - 4) > 5x - 1",
    answer: "x > 11/5 ou x > 2,2",
    explication: "On développe : 6x - 12 > 5x - 1. On regroupe : 6x - 5x > 12 - 1. Donc x > 11/5.",
    niveau: "troisieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Factoriser complètement l'expression : x² - 9x + 20",
    answer: "(x - 5)(x - 4)",
    explication: "Pour factoriser un trinôme de la forme x² + bx + c, on cherche deux nombres dont la somme est b et le produit est c. Ici, -5 et -4 ont pour somme -9 et pour produit 20.",
    niveau: "troisieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Résolvez le système d'équations suivant : { 2x + y = 7\n 3x - 2y = 8 }",
    answer: "x = 3 et y = 1",
    explication: "De la première équation, on tire y = 7 - 2x. On remplace dans la seconde : 3x - 2(7 - 2x) = 8. Donc 3x - 14 + 4x = 8, ce qui donne 7x = 22, donc x = 22/7 = 3,14. On en déduit y = 7 - 2×3 = 1.",
    niveau: "troisieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelle est la forme canonique du trinôme : 2x² - 12x + 15 ?",
    answer: "2(x - 3)² - 3",
    explication: "Pour obtenir la forme canonique a(x - α)² + β, on complète le carré : 2x² - 12x + 15 = 2(x² - 6x) + 15 = 2(x² - 6x + 9 - 9) + 15 = 2(x - 3)² - 18 + 15 = 2(x - 3)² - 3",
    niveau: "troisieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Calculez la valeur exacte de (√3 + 1)² - (√3 - 1)²",
    answer: "4√3",
    explication: "(√3 + 1)² - (√3 - 1)² = (3 + 2√3 + 1) - (3 - 2√3 + 1) = 4√3",
    niveau: "troisieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  }
];
