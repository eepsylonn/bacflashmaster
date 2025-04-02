
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesCalculsQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Développez et réduisez l'expression suivante : (3x + 4)(2x - 5)",
    answer: "6x² - 15x + 8x - 20 = 6x² - 7x - 20",
    explication: "On applique la formule de distributivité (a+b)(c+d) = ac + ad + bc + bd pour développer, puis on regroupe les termes semblables pour réduire l'expression.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Factorisez l'expression : 9x² - 16",
    answer: "(3x - 4)(3x + 4)",
    explication: "Il s'agit d'une différence de deux carrés qui se factorise selon la formule a² - b² = (a - b)(a + b), avec a = 3x et b = 4.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Résolvez l'équation : 3x - 5 = 2x + 7",
    answer: "x = 12",
    explication: "On isole les termes en x d'un côté et les constantes de l'autre : 3x - 2x = 7 + 5. Donc x = 12.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Calculez la valeur exacte de (√5 - 1)(√5 + 2)",
    answer: "√5 × √5 + 2√5 - √5 - 2 = 5 + √5 - 2 = 3 + √5",
    explication: "On développe le produit en appliquant la distributivité : (√5 - 1)(√5 + 2) = (√5)² + 2√5 - √5 - 2 = 5 + √5 - 2 = 3 + √5",
    niveau: "quatrieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Simplifiez la fraction suivante : (15x²y) / (25xy²)",
    answer: "(3x) / (5y)",
    explication: "On décompose pour simplifier : (15x²y) / (25xy²) = (15/25) × (x²/x) × (y/y²) = (3/5) × x × (1/y) = (3x) / (5y)",
    niveau: "quatrieme",
    matiere: "Mathématiques - Calculs",
    diplome: "brevet"
  }
];
