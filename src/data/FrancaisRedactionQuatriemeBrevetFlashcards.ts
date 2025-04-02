
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const francaisRedactionQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les trois parties essentielles d'une introduction de dissertation ?",
    answer: "L'amorce, la présentation du sujet et l'annonce du plan",
    explication: "Une introduction complète commence par une amorce (mise en contexte), puis présente clairement le sujet et se termine par l'annonce du plan qui sera suivi.",
    niveau: "quatrieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Donnez deux connecteurs logiques exprimant la cause.",
    answer: "Car, parce que, puisque, étant donné que, comme",
    explication: "Ces connecteurs permettent d'introduire une explication ou une justification et établissent un lien de cause à effet entre deux propositions.",
    niveau: "quatrieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelle est la différence entre la rédaction d'un texte narratif et d'un texte descriptif ?",
    answer: "Un texte narratif raconte une succession d'événements alors qu'un texte descriptif présente les caractéristiques d'un lieu, d'un objet ou d'un personnage",
    explication: "Le texte narratif est centré sur l'action et la progression temporelle, tandis que le texte descriptif se concentre sur les détails visuels et sensoriels sans nécessairement suivre une chronologie.",
    niveau: "quatrieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Comment peut-on éviter les répétitions dans un texte ?",
    answer: "En utilisant des synonymes, des pronoms, des périphrases ou en reformulant les phrases",
    explication: "Pour éviter les répétitions qui alourdissent le style, on peut remplacer un mot par un synonyme, utiliser un pronom qui s'y réfère, employer une périphrase (expression qui désigne indirectement) ou restructurer la phrase.",
    niveau: "quatrieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un paragraphe argumentatif bien construit doit contenir ?",
    answer: "Une idée principale, un ou plusieurs arguments, des exemples et une mini-conclusion",
    explication: "Un paragraphe argumentatif efficace commence par l'idée défendue, la développe avec des arguments, illustre avec des exemples pertinents et se termine idéalement par une phrase qui fait la transition avec le paragraphe suivant.",
    niveau: "quatrieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  }
];
