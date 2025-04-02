
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const technologieTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un objet connecté et quelles technologies utilise-t-il ?",
    answer: "Objet physique capable d'échanger des données via Internet; technologies: capteurs, microcontrôleurs, technologies de communication (WiFi, Bluetooth, 4G/5G)",
    explication: "Un objet connecté (IoT) est un appareil équipé de capteurs qui collectent des données, d'un processeur qui les traite, et de modules de communication qui les transmettent. Il peut être contrôlé à distance et interagir avec d'autres objets. Exemples: montres connectées, thermostats intelligents, assistants vocaux.",
    niveau: "troisieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Expliquez le principe de la programmation orientée objet.",
    answer: "Paradigme de programmation basé sur le concept d'objet (structure contenant des données et des méthodes); principes: encapsulation, héritage, polymorphisme",
    explication: "La programmation orientée objet organise le code en 'objets' qui représentent des entités du monde réel. Un objet contient des attributs (caractéristiques) et des méthodes (actions). Les principes clés sont l'encapsulation (protection des données), l'héritage (réutilisation de code d'une classe à une autre) et le polymorphisme (adaptation des méthodes selon le contexte).",
    niveau: "troisieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que la domotique et quels sont ses avantages ?",
    answer: "Ensemble des technologies automatisant une habitation; avantages: confort, économies d'énergie, sécurité, accessibilité",
    explication: "La domotique intègre des technologies d'automatisation dans l'habitat pour contrôler l'éclairage, le chauffage, les volets, la sécurité, etc. Elle offre plus de confort (commandes centralisées, scénarios automatisés), des économies d'énergie (optimisation du chauffage), une meilleure sécurité (alarmes, surveillance) et améliore l'accessibilité pour les personnes à mobilité réduite.",
    niveau: "troisieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les principaux composants d'un ordinateur et leur rôle ?",
    answer: "Processeur (calculs), mémoire vive/RAM (stockage temporaire), disque dur (stockage permanent), carte mère (interconnexion), périphériques (entrée/sortie)",
    explication: "Un ordinateur comprend: le processeur (CPU) qui exécute les instructions et effectue les calculs; la mémoire vive (RAM) qui stocke temporairement les données des programmes en cours; le disque dur ou SSD pour le stockage permanent; la carte mère qui connecte tous les composants; des périphériques d'entrée (clavier, souris) et de sortie (écran, imprimante).",
    niveau: "troisieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une chaîne d'énergie dans un système technique ?",
    answer: "Ensemble des composants qui transforment et transmettent l'énergie; fonctions: alimenter, distribuer, convertir, transmettre",
    explication: "La chaîne d'énergie décrit comment l'énergie circule et se transforme dans un système. Elle comprend: l'alimentation (source d'énergie comme une batterie), la distribution (acheminement et modulation de l'énergie), la conversion (transformation en une forme d'énergie utile, par exemple électrique→mécanique) et la transmission (transfert de l'énergie aux actionneurs qui réalisent l'action).",
    niveau: "troisieme",
    matiere: "Technologie",
    diplome: "brevet"
  }
];
