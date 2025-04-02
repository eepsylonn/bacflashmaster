
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the correct verb form: 'The professor _____ the lecture with a summary of the main points.'",
    answer: "concluded",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct article: 'The researchers published _____ interesting article about climate change in _____ scientific journal.'",
    answer: "an, a",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct preposition: 'According _____ the study, there has been a significant increase _____ student participation.'",
    answer: "to, in",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct verb tense: 'By the time the conference begins next month, the research team _____ their project.'",
    answer: "will have completed",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct relative pronoun: 'The book _____ was assigned for the course covers topics _____ are essential for the exam.'",
    answer: "that/which, that/which",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct conjunction: 'The student studied diligently, _____ he still found the exam challenging.'",
    answer: "but/yet/however",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct modal verb: 'Students _____ submit their applications by Friday if they want to be considered for the scholarship.'",
    answer: "must",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct plural form: 'The analysis of the economic _____ shows that several _____ contributed to the financial crisis.'",
    answer: "phenomena, factors",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct adverb placement: 'The professor _____ explained the concept _____ so the students could understand it.'",
    answer: "clearly, (no adverb needed)",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct comparative form: 'The updated version of the textbook is _____ than the previous edition, but it's also _____.'",
    answer: "more comprehensive, more expensive",
    matiere: "TOEFL Grammar",
    niveau: "facile",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const GrammaireFacileToeflFlashcards = grammaireFacileToeflFlashcards;
