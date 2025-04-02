
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const mathematiquesGeometrieQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Dans un triangle ABC rectangle en A, si AB = 3 cm et AC = 4 cm, calculez la longueur BC.",
    answer: "BC = 5 cm",
    explication: "D'après le théorème de Pythagore dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés : BC² = AB² + AC² = 3² + 4² = 9 + 16 = 25, donc BC = 5 cm.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelle est la mesure de l'angle inscrit qui intercepte un arc de 120° dans un cercle ?",
    answer: "60°",
    explication: "Un angle inscrit a pour mesure la moitié de celle de l'arc qu'il intercepte. Donc si l'arc mesure 120°, l'angle inscrit mesure 120° ÷ 2 = 60°.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Calculez le volume d'un cylindre de rayon 5 cm et de hauteur 12 cm. Donnez la valeur exacte puis une valeur approchée au cm³ près.",
    answer: "V = π × 5² × 12 = 300π cm³ ≈ 942 cm³",
    explication: "Le volume d'un cylindre est donné par la formule V = π × r² × h où r est le rayon et h la hauteur. Ici, V = π × 5² × 12 = 300π cm³. Pour la valeur approchée, on utilise π ≈ 3,14 ce qui donne V ≈ 942 cm³.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Dans un parallélogramme ABCD, si AB = 8 cm, BC = 6 cm et l'angle ABC = 50°, calculez la mesure de l'angle BCD.",
    answer: "130°",
    explication: "Dans un parallélogramme, les angles consécutifs sont supplémentaires (leur somme vaut 180°). Donc BCD = 180° - ABC = 180° - 50° = 130°.",
    niveau: "quatrieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Calculez l'aire d'un losange dont les diagonales mesurent 8 cm et 6 cm.",
    answer: "24 cm²",
    explication: "L'aire d'un losange est égale à la moitié du produit de ses diagonales : A = (d₁ × d₂) / 2. Ici, A = (8 × 6) / 2 = 24 cm².",
    niveau: "quatrieme",
    matiere: "Mathématiques - Géométrie",
    diplome: "brevet"
  }
];
