
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesProgrammationTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Écrivez un algorithme qui détermine si un nombre entier n est premier ou non.",
    answer: "```\nFonction EstPremier(n)\n    Si n ≤ 1 alors\n        Renvoyer Faux\n    Fin Si\n    Pour i allant de 2 à √n faire\n        Si n mod i = 0 alors\n            Renvoyer Faux\n        Fin Si\n    Fin Pour\n    Renvoyer Vrai\nFin Fonction\n```",
    explication: "Cet algorithme vérifie si n est divisible par un entier entre 2 et la racine carrée de n. Si c'est le cas, n n'est pas premier. Sinon, il est premier. On s'arrête à la racine carrée car si n a un diviseur d > √n, alors n a aussi un diviseur n/d < √n.",
    niveau: "troisieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Que fait l'algorithme suivant et quelle est sa complexité ?\n```\nFonction Recherche(T, x)\n    g ← 0\n    d ← longueur(T) - 1\n    Tant que g ≤ d faire\n        m ← (g + d) div 2\n        Si T[m] = x alors\n            Renvoyer m\n        Sinon Si T[m] < x alors\n            g ← m + 1\n        Sinon\n            d ← m - 1\n        Fin Si\n    Fin Tant que\n    Renvoyer -1\nFin Fonction\n```",
    answer: "Il s'agit de l'algorithme de recherche dichotomique, de complexité O(log n)",
    explication: "Cet algorithme recherche un élément x dans un tableau trié T en divisant à chaque étape l'intervalle de recherche par 2. Sa complexité est logarithmique, ce qui le rend très efficace pour les grands tableaux.",
    niveau: "troisieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Écrivez un algorithme qui calcule la suite de Fibonacci jusqu'au n-ième terme.",
    answer: "```\nFonction Fibonacci(n)\n    Si n ≤ 1 alors\n        Renvoyer n\n    Fin Si\n    a ← 0\n    b ← 1\n    Pour i allant de 2 à n faire\n        temp ← a + b\n        a ← b\n        b ← temp\n    Fin Pour\n    Renvoyer b\nFin Fonction\n```",
    explication: "Cet algorithme calcule la suite de Fibonacci (où chaque terme est la somme des deux précédents) de manière itérative, ce qui est plus efficace que la version récursive naïve.",
    niveau: "troisieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une boucle 'while' et en quoi diffère-t-elle d'une boucle 'for' ?",
    answer: "Une boucle 'while' s'exécute tant qu'une condition est vraie, alors qu'une boucle 'for' s'exécute un nombre prédéfini de fois",
    explication: "La boucle 'while' est utilisée quand on ne sait pas à l'avance combien de fois on doit répéter une action (elle vérifie la condition avant chaque itération). La boucle 'for' est préférable quand on connaît le nombre d'itérations nécessaires.",
    niveau: "troisieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Écrivez un programme qui implémente l'algorithme du tri à bulles pour trier un tableau d'entiers dans l'ordre croissant.",
    answer: "```\nProcédure TriBulles(T)\n    n ← longueur(T)\n    Pour i allant de 0 à n-2 faire\n        Pour j allant de 0 à n-2-i faire\n            Si T[j] > T[j+1] alors\n                temp ← T[j]\n                T[j] ← T[j+1]\n                T[j+1] ← temp\n            Fin Si\n        Fin Pour\n    Fin Pour\nFin Procédure\n```",
    explication: "Le tri à bulles compare des éléments adjacents et les échange s'ils ne sont pas dans l'ordre. Après chaque passage, le plus grand élément non trié se retrouve à sa place finale. Le processus est répété pour les éléments restants.",
    niveau: "troisieme",
    matiere: "Mathématiques - Programmation",
    diplome: "brevet"
  }
];
