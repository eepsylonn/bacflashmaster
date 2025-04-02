
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const francaisRedactionTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les caractéristiques d'une dissertation littéraire réussie ?",
    answer: "Une problématique claire, un plan progressif et cohérent, des arguments développés et illustrés, une expression soignée",
    explication: "Une bonne dissertation doit poser clairement la problématique, proposer un raisonnement progressif (thèse, antithèse, synthèse par exemple), développer chaque argument avec des exemples précis et soigner la qualité de l'expression.",
    niveau: "troisieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Comment construire une conclusion efficace pour un texte argumentatif ?",
    answer: "Synthétiser les arguments principaux, répondre clairement à la problématique et ouvrir éventuellement sur une nouvelle perspective",
    explication: "Une conclusion réussie rappelle brièvement les points essentiels du développement, répond de façon directe à la question posée initialement et peut se terminer par une ouverture qui élargit la réflexion.",
    niveau: "troisieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les règles à respecter pour insérer une citation dans un devoir ?",
    answer: "Mettre la citation entre guillemets, indiquer sa source, l'intégrer harmonieusement dans la phrase et l'analyser",
    explication: "Une citation doit être encadrée par des guillemets, sa source doit être précisée (auteur, œuvre), elle doit s'intégrer grammaticalement à la phrase et être suivie d'une analyse qui montre sa pertinence par rapport à l'argument.",
    niveau: "troisieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Comment améliorer le style d'un texte pour le rendre plus expressif ?",
    answer: "Varier le vocabulaire, la longueur et la structure des phrases, utiliser des figures de style adaptées",
    explication: "Pour rendre un texte plus expressif, il est important d'employer un vocabulaire riche et précis, d'alterner phrases courtes et longues, de varier les constructions syntaxiques et d'utiliser des figures de style appropriées au propos.",
    niveau: "troisieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une problématique et comment la formuler correctement ?",
    answer: "Une question qui oriente la réflexion et à laquelle le devoir répondra; elle doit être claire, ouverte et pertinente",
    explication: "La problématique est la question centrale qui structure le développement. Une bonne problématique ne se réduit pas à une question fermée (oui/non), elle permet une réflexion nuancée, est en lien direct avec le sujet et peut être formulée sous forme de question ou d'affirmation à discuter.",
    niveau: "troisieme",
    matiere: "Français - Rédaction",
    diplome: "brevet"
  }
];
