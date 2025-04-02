
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The researcher's findings _____ previous theories about memory formation by providing contradictory evidence.'",
    answer: "refute",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The geological formations in the region are _____, displaying characteristics from multiple time periods.'",
    answer: "heterogeneous",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The government implemented several policies to _____ economic growth after the recession.'",
    answer: "stimulate",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'Critics argue that the study's methodology was _____ because it failed to consider several critical variables.'",
    answer: "flawed",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The professor's explanation served to _____ the complex theory, making it more accessible to undergraduate students.'",
    answer: "elucidate",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The article presents a _____ analysis of how technological innovation affects labor markets in developing economies.'",
    answer: "nuanced",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The speaker's remarks were deliberately _____, allowing multiple interpretations depending on the audience's perspective.'",
    answer: "ambiguous",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The research paper _____ several case studies to support its central thesis about organizational behavior.'",
    answer: "incorporates",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'After reviewing new evidence, the committee had to _____ its previous conclusions about the environmental impact of the project.'",
    answer: "revise",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The theory has gained _____ among researchers despite initial skepticism about its fundamental premises.'",
    answer: "credibility",
    matiere: "TOEFL Vocabulary",
    niveau: "intermediaire",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const VocabulaireIntermediaireToeflFlashcards = vocabulaireIntermediaireToeflFlashcards;
