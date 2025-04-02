
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the definition of 'ubiquitous'?",
    answer: "Present, appearing, or found everywhere",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'ephemeral' mean?",
    answer: "Lasting for a very short time; transitory",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'surreptitious'",
    answer: "Kept secret, especially because it would not be approved of; obtained or done by stealth",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'exacerbate'?",
    answer: "To make a problem, bad situation, or negative feeling worse",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'dichotomy'",
    answer: "A division or contrast between two things that are or are represented as being opposed or entirely different",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the term 'cacophony' mean?",
    answer: "A harsh, discordant mixture of sounds; dissonance",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'perfunctory'",
    answer: "Carried out with a minimum of effort or reflection; done merely as a routine duty",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the definition of 'equivocal'?",
    answer: "Open to more than one interpretation; ambiguous or uncertain",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What does the word 'pernicious' mean?",
    answer: "Having a harmful effect, especially in a gradual or subtle way",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Define 'recalcitrant'",
    answer: "Having an obstinately uncooperative attitude toward authority or discipline; difficult to manage or operate",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const VocabularyAvanceToeflFlashcards = vocabularyAvanceToeflFlashcards;
