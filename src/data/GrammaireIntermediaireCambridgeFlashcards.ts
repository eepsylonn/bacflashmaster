
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireIntermediaireCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct conditional form: 'If I _____ (know) the answer, I would tell you.'",
    answer: "knew",
    matiere: "Grammar",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Rewrite using the passive voice: 'Someone stole my bicycle yesterday.'",
    answer: "My bicycle was stolen yesterday.",
    matiere: "Grammar",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete with the correct phrasal verb: 'I don't want to _____ the meeting because it's very important.' (miss out on/take after/get over)",
    answer: "miss out on",
    matiere: "Grammar",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Choose the correct relative pronoun: 'The woman _____ spoke at the conference is a famous scientist.'",
    answer: "who",
    matiere: "Grammar",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the sentence with the correct modal verb for obligation: 'You _____ pay the fee by Friday or you'll be charged extra.'",
    answer: "must/have to",
    matiere: "Grammar",
    niveau: "intermediaire",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const GrammaireIntermediaireCambridgeFlashcards = grammaireIntermediaireCambridgeFlashcards;
