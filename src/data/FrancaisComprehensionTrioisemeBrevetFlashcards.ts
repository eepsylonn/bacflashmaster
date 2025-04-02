
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const francaisComprehensionTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Analysez la structure argumentative du texte suivant : 'La lecture est essentielle au développement personnel. D'abord, elle enrichit notre vocabulaire. Ensuite, elle stimule notre imagination. Enfin, elle nous ouvre à d'autres cultures.'",
    answer: "Structure argumentative par accumulation avec des connecteurs logiques",
    explication: "Le texte présente une thèse suivie de trois arguments introduits par des connecteurs logiques ('d'abord', 'ensuite', 'enfin') qui structurent le raisonnement.",
    niveau: "troisieme",
    matiere: "Français - Compréhension",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Dans l'extrait de théâtre suivant, identifiez un élément qui caractérise le genre théâtral : 'HARPAGON, à part. — Ô ciel ! j'ai perdu mon argent ! (Haut) Au voleur ! au voleur !'",
    answer: "La didascalie (indication scénique)",
    explication: "Les mentions 'à part' et 'Haut' sont des didascalies, indications scéniques typiques du genre théâtral qui précisent comment l'acteur doit jouer.",
    niveau: "troisieme",
    matiere: "Français - Compréhension",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quel mouvement littéraire est caractérisé par l'expression des sentiments personnels, l'importance de la nature et le rejet des règles classiques ?",
    answer: "Le romantisme",
    explication: "Le romantisme (début du XIXe siècle) se caractérise par l'expression du 'moi', l'importance accordée aux sentiments, à la nature et à la liberté créatrice contre les règles classiques.",
    niveau: "troisieme",
    matiere: "Français - Compréhension",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Identifiez le procédé d'écriture utilisé dans la phrase : 'Ce n'est pas un échec, c'est une opportunité d'apprentissage.'",
    answer: "L'euphémisme",
    explication: "L'euphémisme consiste à atténuer une réalité désagréable ('échec') en utilisant une expression plus douce ('opportunité d'apprentissage').",
    niveau: "troisieme",
    matiere: "Français - Compréhension",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "À partir de l'extrait suivant, déterminez le type de narrateur et sa fiabilité : 'Je suis certain que Marie m'a menti. Elle prétend être allée chez sa mère, mais j'ai vu sa voiture garée devant le cinéma.'",
    answer: "Narrateur interne potentiellement non fiable",
    explication: "Le narrateur est interne (première personne), mais sa fiabilité est questionnable car il tire une conclusion définitive ('elle m'a menti') à partir d'un indice qui peut avoir d'autres explications (quelqu'un d'autre a pu prendre sa voiture).",
    niveau: "troisieme",
    matiere: "Français - Compréhension",
    diplome: "brevet"
  }
];
