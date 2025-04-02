
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesGeometrieTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Dans un repère orthonormé, on donne les points A(3, 1) et B(7, 5). Calculez les coordonnées du vecteur AB puis sa norme.",
    answer: "AB (4, 4) et ||AB|| = 4√2 ≈ 5,66",
    explication: "Les coordonnées du vecteur AB sont obtenues en faisant la différence des coordonnées : AB (7-3, 5-1) = (4, 4). La norme de ce vecteur est donnée par ||AB|| = √(4² + 4²) = √32 = 4√2 ≈ 5,66.",
    niveau: "troisieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelle est l'équation réduite de la droite passant par les points A(2, -1) et B(4, 3) ?",
    answer: "y = 2x - 5",
    explication: "Le coefficient directeur est m = (yB - yA)/(xB - xA) = (3-(-1))/(4-2) = 4/2 = 2. L'ordonnée à l'origine est b = yA - m×xA = -1 - 2×2 = -1 - 4 = -5. Donc l'équation est y = 2x - 5.",
    niveau: "troisieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Dans un triangle ABC, M est le milieu de [AB] et N est le milieu de [AC]. Que peut-on dire de la droite (MN) ?",
    answer: "MN est parallèle à BC et MN = BC/2",
    explication: "D'après le théorème des milieux, dans un triangle, la droite qui joint les milieux de deux côtés est parallèle au troisième côté et sa longueur est égale à la moitié de celle du troisième côté.",
    niveau: "troisieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Soit un triangle ABC tel que AB = 5 cm, BC = 7 cm et AC = 8 cm. Ce triangle est-il rectangle ?",
    answer: "Non, ce triangle n'est pas rectangle",
    explication: "Pour qu'un triangle soit rectangle, il faut que le théorème de Pythagore soit vérifié pour un des angles. Vérifions : AB² + BC² = 5² + 7² = 25 + 49 = 74, mais AC² = 8² = 64. Comme 74 ≠ 64, le triangle n'est pas rectangle.",
    niveau: "troisieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Calculez le volume d'une pyramide à base rectangulaire dont la base mesure 6 cm sur 8 cm et dont la hauteur est de 10 cm.",
    answer: "160 cm³",
    explication: "Le volume d'une pyramide est donné par la formule V = (1/3) × Aire de la base × hauteur. Ici, l'aire de la base est 6 × 8 = 48 cm². Donc V = (1/3) × 48 × 10 = 160 cm³.",
    niveau: "troisieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  }
];
