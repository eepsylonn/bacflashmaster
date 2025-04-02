
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const physiqueChimieQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelle est la différence entre un atome et une molécule ?",
    answer: "Un atome est la plus petite partie d'un élément chimique; une molécule est un assemblage d'atomes liés entre eux",
    explication: "L'atome est constitué d'un noyau (protons et neutrons) autour duquel gravitent des électrons. Une molécule est formée par l'association d'au moins deux atomes unis par des liaisons chimiques, comme H₂O (eau) qui associe deux atomes d'hydrogène et un d'oxygène.",
    niveau: "quatrieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Énoncez la loi d'Ohm et donnez sa formule.",
    answer: "La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité qui le traverse : U = R × I",
    explication: "La loi d'Ohm établit que la tension U (en volts) aux bornes d'un conducteur ohmique est égale au produit de sa résistance R (en ohms) par l'intensité du courant I (en ampères) qui le traverse. Cette relation s'écrit U = R × I.",
    niveau: "quatrieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une transformation chimique et comment la représente-t-on ?",
    answer: "Phénomène où des substances (réactifs) se transforment en d'autres substances (produits); représentée par une équation chimique équilibrée",
    explication: "Une transformation chimique est un processus où les liaisons entre atomes sont modifiées, créant de nouvelles substances avec des propriétés différentes. On la représente par une équation équilibrée avec les réactifs à gauche, les produits à droite et des coefficients stœchiométriques pour respecter la conservation des atomes.",
    niveau: "quatrieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les trois caractéristiques d'un son et à quoi correspondent-elles ?",
    answer: "Hauteur (fréquence - grave/aigu), intensité (amplitude - fort/faible), timbre (forme de l'onde - reconnaissance de la source)",
    explication: "Un son est caractérisé par sa hauteur, liée à sa fréquence en hertz (Hz) - plus elle est élevée, plus le son est aigu; son intensité, liée à l'amplitude de l'onde sonore et mesurée en décibels (dB); et son timbre, lié à la forme de l'onde, qui permet de distinguer deux sons de même hauteur et intensité mais produits par des instruments différents.",
    niveau: "quatrieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que la masse volumique d'un matériau et comment la calcule-t-on ?",
    answer: "Grandeur qui caractérise la masse d'un matériau par unité de volume; ρ = m/V (en kg/m³)",
    explication: "La masse volumique (ρ) est une grandeur physique qui représente la masse (m) d'un matériau par unité de volume (V). Elle s'exprime généralement en kg/m³ ou g/cm³. Sa formule est ρ = m/V. Elle permet par exemple de comparer la densité de différents matériaux ou de déterminer si un objet flotte dans un liquide.",
    niveau: "quatrieme",
    matiere: "Physique-Chimie",
    diplome: "brevet"
  }
];
