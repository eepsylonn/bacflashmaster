
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const logiqueAvanceTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Dans une pièce, il y a 5 chats. Chaque chat voit 4 chats. Combien y a-t-il de chats dans la pièce ?",
    answer: "5 chats (chaque chat ne se voit pas lui-même)",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si seule une des affirmations suivantes est vraie, laquelle est vraie ? 1) 2+2=4, 2) 2+2=5, 3) 2+2=4 et 2+2=5",
    answer: "La deuxième affirmation (2+2=5) est vraie",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "J'ai deux fois l'âge que tu avais quand j'avais ton âge. Quand tu auras mon âge, la somme de nos âges sera 63 ans. Quel âge ai-je ?",
    answer: "36 ans",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si A implique B, et B implique C, laquelle de ces propositions est nécessairement vraie ?",
    answer: "A implique C",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "La négation de 'tous les chats sont noirs' est :",
    answer: "Au moins un chat n'est pas noir",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Analysez cette suite : 2, 12, 36, 80, 150, ?",
    answer: "252 (la suite suit le modèle n³ + n)",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "5 personnes (A, B, C, D et E) doivent s'asseoir en ligne. Si A doit être à côté de B, B à côté de C, et D ne peut pas être à côté de E, combien de dispositions sont possibles ?",
    answer: "12",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si un dé équilibré est lancé 4 fois, quelle est la probabilité d'obtenir au moins un 6 ?",
    answer: "0,518 ou environ 52%",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez cette analogie : CFIZ est à DGJA ce que UXOR est à ?",
    answer: "VYPS",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si tous les Blips sont des Claps, et aucun Clap n'est un Drep, alors :",
    answer: "Aucun Blip n'est un Drep",
    matiere: "Logique",
    niveau: "avance",
    diplome: "tage-mage"
  }
];
