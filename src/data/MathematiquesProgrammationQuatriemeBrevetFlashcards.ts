
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesProgrammationQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quel est le résultat du programme suivant ?\n```\nx ← 5\ny ← 3\nx ← x + y\ny ← x - y\nx ← x - y\nAfficher x, y\n```",
    answer: "x = 3 et y = 5",
    explication: "On suit les étapes : x = 5, y = 3, puis x = 5 + 3 = 8, puis y = 8 - 3 = 5, puis x = 8 - 5 = 3. Donc à la fin x = 3 et y = 5. C'est un algorithme qui échange les valeurs de deux variables.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Écrivez un algorithme qui calcule la somme des entiers de 1 à n.",
    answer: "```\nSomme ← 0\nPour i allant de 1 à n faire\n    Somme ← Somme + i\nFin Pour\nAfficher Somme\n```",
    explication: "Cet algorithme initialise une variable Somme à 0, puis ajoute successivement chaque entier de 1 à n à cette variable. À la fin, Somme contient la somme de tous les entiers de 1 à n.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Que fait l'algorithme suivant ?\n```\nFonction Mystère(n)\n    Si n = 0 ou n = 1 alors\n        Renvoyer 1\n    Sinon\n        Renvoyer n * Mystère(n-1)\n    Fin Si\nFin Fonction\n```",
    answer: "Il calcule la factorielle de n",
    explication: "Cette fonction récursive calcule n! (factorielle de n). Par exemple, Mystère(4) = 4 × Mystère(3) = 4 × 3 × Mystère(2) = 4 × 3 × 2 × Mystère(1) = 4 × 3 × 2 × 1 = 24.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Convertissez le nombre décimal 42 en binaire.",
    answer: "101010",
    explication: "Pour convertir un nombre décimal en binaire, on divise successivement par 2 et on retient les restes : 42 ÷ 2 = 21 reste 0, 21 ÷ 2 = 10 reste 1, 10 ÷ 2 = 5 reste 0, 5 ÷ 2 = 2 reste 1, 2 ÷ 2 = 1 reste 0, 1 ÷ 2 = 0 reste 1. On lit les restes de bas en haut : 101010.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'affiche le programme suivant ? (les indices commencent à 0)\n```\nTableau T[5] ← [4, 8, 2, 6, 1]\nPour i allant de 1 à 4 faire\n    Si T[i] < T[i-1] alors\n        temp ← T[i]\n        T[i] ← T[i-1]\n        T[i-1] ← temp\n    Fin Si\nFin Pour\nAfficher T\n```",
    answer: "[4, 2, 6, 1, 8]",
    explication: "Ce programme compare chaque élément avec le précédent et les échange si nécessaire. Voici les étapes : [4, 8, 2, 6, 1] → [4, 2, 8, 6, 1] (échange de 8 et 2) → [4, 2, 6, 8, 1] (échange de 8 et 6) → [4, 2, 6, 1, 8] (échange de 8 et 1).",
    niveau: "quatrieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  }
];
