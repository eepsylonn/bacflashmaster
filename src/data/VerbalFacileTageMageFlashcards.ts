
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const verbalFacileTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Quel est le synonyme de 'Vaste' ?",
    answer: "Étendu",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est l'antonyme de 'Généreux' ?",
    answer: "Avare",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez le proverbe : 'Qui sème le vent...'",
    answer: "récolte la tempête",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Que signifie l'expression 'Prendre le taureau par les cornes' ?",
    answer: "Affronter une difficulté directement",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est le synonyme de 'Prolifique' ?",
    answer: "Fécond",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel mot est mal orthographié : aquatique, acceuil, académie, acoustique ?",
    answer: "Acceuil (la bonne orthographe est 'accueil')",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez l'expression : 'Mettre la charrue...'",
    answer: "avant les bœufs",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est l'antonyme de 'Naïf' ?",
    answer: "Méfiant",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Que signifie l'expression 'Jeter l'éponge' ?",
    answer: "Abandonner, renoncer",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quel est le synonyme de 'Éloquent' ?",
    answer: "Persuasif",
    matiere: "Verbal",
    niveau: "facile",
    diplome: "tage-mage"
  }
];
