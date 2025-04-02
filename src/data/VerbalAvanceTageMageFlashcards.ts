
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const verbalAvanceTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Quelle est la différence entre 'conjecture' et 'réfutation' ?",
    answer: "La conjecture est une hypothèse fondée sur des apparences ou probabilités, la réfutation est la démonstration de la fausseté d'une proposition",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Que signifie le terme 'apophtegme' ?",
    answer: "Parole mémorable d'un personnage illustre, sentence ou maxime",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Expliquez le sens de l'expression 'Œuvre aporétique'",
    answer: "Œuvre qui présente une contradiction insoluble, aboutissant à une impasse logique",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est le sens du mot 'Épistémologie' ?",
    answer: "Étude critique des sciences, visant à déterminer leur origine logique, leur valeur et leur portée",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Définissez le terme 'Antonomase'",
    answer: "Figure de style qui consiste à remplacer un nom propre par un nom commun ou inversement",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un 'syllogisme' ?",
    answer: "Raisonnement logique à trois propositions : deux prémisses et une conclusion",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la différence entre 'exégèse' et 'herméneutique' ?",
    answer: "L'exégèse est l'interprétation critique d'un texte, l'herméneutique est la théorie générale de l'interprétation",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Expliquez la figure de style 'hypallage'",
    answer: "Figure qui consiste à attribuer à un mot ce qui convient logiquement à un autre dans la phrase",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un 'sophisme' ?",
    answer: "Raisonnement fallacieux conçu avec l'intention de tromper, argument qui paraît valide mais qui est en réalité incorrect",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Définissez le terme 'palimpseste'",
    answer: "Manuscrit écrit sur un parchemin préalablement utilisé, par extension, œuvre qui en dissimule une autre",
    matiere: "Verbal",
    niveau: "avance",
    diplome: "tage-mage"
  }
];
