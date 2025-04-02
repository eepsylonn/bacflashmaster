
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The professor's lecture was so _____ that several students fell asleep during the presentation.'",
    answer: "monotonous",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The introduction of the paper should _____ the main arguments that will be discussed in detail later.'",
    answer: "outline",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'Scientists must be _____ when recording data to ensure the accuracy of their research.'",
    answer: "meticulous",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The student's essay contained several _____ arguments that were not supported by evidence.'",
    answer: "unfounded",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The professor encouraged students to _____ their understanding of the concept through practical experiments.'",
    answer: "enhance",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The documentary provided a _____ look at the environmental challenges facing the region.'",
    answer: "comprehensive",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The conclusion of the study _____ the need for further research in this emerging field.'",
    answer: "emphasized",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'Students should _____ several sources when researching a topic rather than relying on just one.'",
    answer: "consult",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The discovery of the ancient artifacts may _____ historians to reconsider their theories about early civilizations.'",
    answer: "compel",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The professor's comments were intended to _____ the student's work, not to criticize it harshly.'",
    answer: "improve",
    matiere: "TOEFL Vocabulary",
    niveau: "facile",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const VocabulaireFacileToeflFlashcards = vocabulaireFacileToeflFlashcards;
