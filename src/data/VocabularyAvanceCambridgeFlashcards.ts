
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyAvanceCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the difference between 'ambiguous' and 'ambivalent'?",
    answer: "'Ambiguous' refers to something that can be understood in more than one way or is unclear. 'Ambivalent' describes having mixed or contradictory feelings about something or someone.",
    matiere: "Vocabulary",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Explain the meaning of the idiomatic expression 'to throw the baby out with the bathwater.'",
    answer: "To inadvertently discard something valuable while getting rid of something unwanted; to reject the essential along with the inessential.",
    matiere: "Vocabulary",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What's the difference between 'empathize' and 'sympathize'?",
    answer: "'Empathize' means to understand and share another person's feelings by imagining yourself in their situation. 'Sympathize' means to feel sorry for someone because you understand their problems, but without necessarily sharing their feelings.",
    matiere: "Vocabulary",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Complete the sentence with the appropriate word: 'His argument contained several _____, making it difficult to follow his reasoning.' (fallacies/failures/falsehoods)",
    answer: "fallacies",
    matiere: "Vocabulary",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Explain the connotation of the word 'meticulous' and provide a sentence example.",
    answer: "'Meticulous' has a positive connotation suggesting extreme care and precision with attention to detail. Example: 'Her meticulous research uncovered facts that other scientists had overlooked.'",
    matiere: "Vocabulary",
    niveau: "avance",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const VocabularyAvanceCambridgeFlashcards = vocabularyAvanceCambridgeFlashcards;
