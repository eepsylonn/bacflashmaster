
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct subjunctive form: 'The ethics committee insists that each researcher _____ strict confidentiality protocols and _____ any potential conflicts of interest before proceeding with human subjects research.'",
    answer: "maintain, disclose",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct inverted conditional: '_____ the research team to obtain additional funding, they _____ able to extend their longitudinal study for another five years, significantly enhancing the validity of their findings.'",
    answer: "Were, would be",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the appropriate reduced relative clauses: 'The theory _____ in the journal last month has generated considerable debate among scholars _____ in quantum mechanics.'",
    answer: "published, specializing",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct cleft sentence construction: '_____ by implementing a comprehensive methodological approach _____ the researchers were able to control for previously unexamined variables.'",
    answer: "It was, that",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct participle clauses: '_____ the limitations of previous studies, the team developed a novel approach, _____ multiple analytical frameworks to address the research question.'",
    answer: "Recognizing, integrating",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct nominalization: 'The _____ of greenhouse gases has led to the _____ of global temperatures, despite initial _____ by some regarding the scientific consensus.'",
    answer: "accumulation, elevation, skepticism",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct complex preposition phrases: '_____ the theoretical framework proposed by Johnson, several anomalies remain unexplained, _____ suggesting the need for further refinement of the model.'",
    answer: "In spite of/Despite/Notwithstanding, thereby/thus",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct complex coordination: 'The research not only challenges conventional wisdom regarding cognitive development, _____ presents compelling evidence for alternative explanatory models, _____ raises important questions about research methodology in the field.'",
    answer: "but also, and",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct emphatic structure: '_____ through rigorous experimental design and meticulous data analysis _____ the researchers able to identify the causal mechanism underlying the observed phenomenon.'",
    answer: "Only, were",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct fronted negative adverbial with inversion: '_____ the researchers consider alternative hypotheses, nor _____ adequately address methodological criticisms raised by peers in the field.'",
    answer: "Never did, did they",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const GrammaireAvanceToeflFlashcards = grammaireAvanceToeflFlashcards;
