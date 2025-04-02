
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct verb form: 'Had the participant _____ the instructions more carefully, they would not have made so many errors in the experiment.'",
    answer: "followed",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct gerund or infinitive: 'The researcher avoided _____ conclusions without sufficient data, despite pressure _____ preliminary results.'",
    answer: "drawing, to publish",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct conditional form: 'If the government _____ stricter regulations, businesses _____ their environmental impact sooner.'",
    answer: "had implemented, would have reduced",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct parallel structure: 'The professor emphasized the importance of taking detailed notes, _____ to all lectures, and _____ actively in discussions.'",
    answer: "listening, participating",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Complete the sentence with appropriate transitions: '_____ the experiment showed promising results, _____, several limitations must be acknowledged before drawing definitive conclusions.'",
    answer: "Although/While/Though, however/nevertheless",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct passive construction: 'The revolutionary theory _____ by the physicist in 1905, but it _____ by the scientific community until decades later.'",
    answer: "was proposed, was not accepted",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct noun clause: 'The research team could not determine _____ was responsible for the anomalous results or _____ they should proceed with the experiment.'",
    answer: "what/who, how",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Choose the correct article usage: '_____ urban development has profound effects on _____ environment, particularly in areas with _____ high population density.'",
    answer: "The, the, a",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Identify the correct reported speech: 'The lecturer said, \"Students must submit their assignments by next Friday.\" The lecturer announced that students _____ their assignments by the following Friday.'",
    answer: "had to/must submit",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Select the correct preposition combination: 'The disagreement _____ the two theories led _____ an interesting debate _____ the scholars at the conference.'",
    answer: "between, to, among",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const GrammaireIntermediaireToeflFlashcards = grammaireIntermediaireToeflFlashcards;
