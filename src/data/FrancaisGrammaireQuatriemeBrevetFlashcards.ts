
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const francaisGrammaireQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Identifiez la proposition subordonnée dans la phrase : 'Le livre que j'ai lu était passionnant.'",
    answer: "que j'ai lu",
    explication: "La proposition subordonnée relative 'que j'ai lu' complète le nom 'livre' et est introduite par le pronom relatif 'que'.",
    niveau: "quatrieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelle est la fonction du groupe nominal 'un cadeau magnifique' dans la phrase : 'Pierre a offert un cadeau magnifique à sa mère.' ?",
    answer: "COD (Complément d'Objet Direct)",
    explication: "Le groupe nominal 'un cadeau magnifique' est le complément d'objet direct du verbe 'offrir' et répond à la question 'quoi ?'.",
    niveau: "quatrieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Transformez la phrase suivante à la voix passive : 'Les élèves préparent un spectacle.'",
    answer: "Un spectacle est préparé par les élèves.",
    explication: "À la voix passive, le COD de la phrase active devient le sujet, et le sujet devient le complément d'agent introduit par 'par'.",
    niveau: "quatrieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quel est le mode du verbe dans la phrase : 'Il faut que tu viennes demain.' ?",
    answer: "Subjonctif",
    explication: "Le verbe 'viennes' est au subjonctif présent, utilisé après l'expression 'il faut que' qui exprime une nécessité.",
    niveau: "quatrieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Identifiez la nature du mot 'rapidement' dans la phrase : 'Il court rapidement.'",
    answer: "Adverbe",
    explication: "Le mot 'rapidement' est un adverbe qui modifie le verbe 'court' en précisant la manière dont l'action est réalisée.",
    niveau: "quatrieme",
    matiere: "Français - Grammaire",
    diplome: "brevet"
  }
];
