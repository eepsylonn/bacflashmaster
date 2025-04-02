
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const verbalIntermediaireTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Quel est le sens du mot 'Dichotomie' ?",
    answer: "Division en deux parties distinctes et souvent opposées",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est l'antonyme de 'Pléthore' ?",
    answer: "Pénurie",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez l'expression : 'L'exception qui confirme...'",
    answer: "la règle",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Que signifie 'Quintessence' ?",
    answer: "Ce qu'il y a de plus raffiné, de plus essentiel dans quelque chose",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un texte 'sibyllin' est :",
    answer: "Mystérieux, énigmatique, difficile à comprendre",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est le synonyme de 'Pusillanime' ?",
    answer: "Craintif, timoré",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Que signifie l'expression 'Faire amende honorable' ?",
    answer: "Reconnaître publiquement ses torts et s'en excuser",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est l'antonyme de 'Prolixe' ?",
    answer: "Concis, laconique",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une personne 'acariâtre' est :",
    answer: "D'humeur désagréable, revêche, grincheuse",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est le sens du mot 'Velléité' ?",
    answer: "Volonté faible, incomplète, qui ne se traduit pas par des actes",
    matiere: "Verbal",
    niveau: "intermediaire",
    diplome: "tage-mage"
  }
];
