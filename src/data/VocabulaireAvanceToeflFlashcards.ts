
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The philosopher's arguments, while initially appearing cogent, ultimately proved to be _____ upon closer examination of their logical structure.'",
    answer: "specious",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The critic's _____ review of the acclaimed novel challenged prevailing interpretations and offered unprecedented insight into the author's symbolic framework.'",
    answer: "trenchant",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The researcher's _____ to acknowledge conflicting data undermined the credibility of an otherwise methodologically sound study.'",
    answer: "reticence",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'Contemporary ecological research increasingly recognizes the _____ nature of environmental systems, wherein seemingly minor perturbations can generate disproportionate and unpredictable consequences.'",
    answer: "nonlinear",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The study's findings, while preliminary, appear to _____ conventional assumptions about the relationship between socioeconomic factors and educational outcomes.'",
    answer: "contravene",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The latest archaeological evidence _____ long-held theories about the chronology of human migration patterns across the ancient world.'",
    answer: "corroborates",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The research methodology demonstrates remarkable _____, effectively addressing potential confounding variables through innovative statistical approaches.'",
    answer: "perspicacity",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The critic's _____ interpretation of the historical text revealed previously unrecognized sociopolitical dimensions that have transformed scholarly discourse on the period.'",
    answer: "seminal",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The professor's lecture offered a _____ examination of how seemingly disparate theoretical frameworks can be synthesized to generate novel research paradigms.'",
    answer: "perspicuous",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the word that best completes the sentence: 'The documentary's _____ portrayal of complex socioeconomic factors avoids reductionist explanations and instead embraces the multifaceted nature of urban development.'",
    answer: "veracious",
    matiere: "TOEFL Vocabulary",
    niveau: "avance",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const VocabulaireAvanceToeflFlashcards = vocabulaireAvanceToeflFlashcards;
