
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const physiqueChimieTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Expliquez le principe de conservation de l'énergie et donnez un exemple.",
    answer: "L'énergie ne peut être ni créée ni détruite, seulement transformée d'une forme à une autre; ex: transformation d'énergie électrique en lumière et chaleur dans une ampoule",
    explication: "Le principe de conservation de l'énergie stipule que l'énergie totale d'un système isolé reste constante. Elle peut changer de forme (cinétique, potentielle, thermique, électrique...) mais sa quantité totale reste identique. Par exemple, dans un barrage hydroélectrique, l'énergie potentielle de l'eau se transforme en énergie cinétique puis en énergie électrique.",
    niveau: "troisieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un ion et comment se forme-t-il ?",
    answer: "Atome ou groupe d'atomes ayant gagné ou perdu un ou plusieurs électrons; cation (perte d'électrons), anion (gain d'électrons)",
    explication: "Un ion est un atome ou une molécule électriquement chargé(e) suite à un gain ou une perte d'électrons. Un cation (ion positif) se forme quand un atome perd un ou plusieurs électrons (ex: Na⁺). Un anion (ion négatif) se forme quand un atome gagne un ou plusieurs électrons (ex: Cl⁻). Les ions jouent un rôle essentiel dans les réactions chimiques et la conduction électrique dans les solutions.",
    niveau: "troisieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les trois lois de Newton et que décrivent-elles ?",
    answer: "Principe d'inertie, relation fondamentale de la dynamique (F=m×a), principe des actions réciproques",
    explication: "Les trois lois de Newton sont: 1) Le principe d'inertie: tout corps persévère dans son état de repos ou de mouvement rectiligne uniforme si aucune force ne s'exerce sur lui. 2) La relation fondamentale: F=m×a (la force est proportionnelle à l'accélération). 3) Le principe des actions réciproques: à toute action correspond une réaction égale et opposée.",
    niveau: "troisieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que le pH d'une solution et que permet-il de déterminer ?",
    answer: "Grandeur mesurant l'acidité ou la basicité d'une solution; pH < 7: acide, pH = 7: neutre, pH > 7: basique",
    explication: "Le pH mesure la concentration en ions hydrogène H⁺ d'une solution. L'échelle va de 0 à 14. Une solution est acide quand son pH est inférieur à 7 (concentration élevée en H⁺), neutre quand il est égal à 7, et basique quand il est supérieur à 7. On peut le mesurer avec du papier pH ou un pH-mètre.",
    niveau: "troisieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un circuit électrique en série et en parallèle ? Quelles sont les lois qui s'y appliquent ?",
    answer: "Circuit série: composants sur un seul chemin (même intensité partout); circuit parallèle: plusieurs branches (même tension aux bornes). Lois: Tension totale = somme des tensions (série), Intensité totale = somme des intensités (parallèle)",
    explication: "Dans un circuit en série, les composants sont placés les uns à la suite des autres, l'intensité est la même en tout point et la tension totale est la somme des tensions. Dans un circuit en parallèle, les composants sont branchés entre les mêmes points, la tension est identique aux bornes de chaque branche et l'intensité totale est la somme des intensités dans chaque branche.",
    niveau: "troisieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  }
];
