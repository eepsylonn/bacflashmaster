
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const francaisGrammaireTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Dans la phrase 'Bien qu'il soit malade, il est venu travailler', quel est le type de la proposition subordonnée ?",
    answer: "Proposition subordonnée conjonctive circonstancielle de concession",
    explication: "La proposition 'Bien qu'il soit malade' est une subordonnée circonstancielle de concession introduite par la conjonction 'bien que'.",
    niveau: "troisieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Identifiez la valeur du conditionnel dans la phrase : 'Selon le journal, un accident se serait produit hier soir.'",
    answer: "Conditionnel de l'information incertaine ou rapportée",
    explication: "Le conditionnel 'se serait produit' exprime ici une information non vérifiée, rapportée par une source (le journal).",
    niveau: "troisieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Dans la phrase 'Plus il mange, plus il grossit', quelle figure de style est utilisée ?",
    answer: "Parallélisme",
    explication: "Cette phrase utilise un parallélisme avec la répétition de la structure 'plus... plus...' qui souligne le rapport de proportion entre les deux actions.",
    niveau: "troisieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Réécrivez la phrase au style indirect : Il m'a demandé : 'Viendras-tu demain ?'",
    answer: "Il m'a demandé si je viendrais le lendemain.",
    explication: "Au style indirect, les guillemets disparaissent, le temps du verbe change (futur → conditionnel), le pronom personnel est modifié, et 'demain' devient 'le lendemain'.",
    niveau: "troisieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Analysez la construction de la phrase suivante : 'Je pense qu'il est important que nous participions tous à ce projet.'",
    answer: "Phrase complexe avec une proposition principale et deux propositions subordonnées",
    explication: "Cette phrase contient : la principale 'Je pense', une première subordonnée complétive 'qu'il est important' et une seconde subordonnée complétive 'que nous participions tous à ce projet'.",
    niveau: "troisieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  }
];
