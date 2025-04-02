
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Explain the concept of subjunctive mood in English and provide examples of common constructions that require it.",
    answer: "The subjunctive mood expresses hypothetical, wishful, imaginary, or conditional situations rather than facts. It's often used in that-clauses following verbs of demand, recommendation, suggestion, or necessity (e.g., 'The professor insisted that the student submit the assignment on time' - not 'submits'). It's also used in conditional sentences expressing impossibility (e.g., 'If I were you...' - not 'was'), and in fixed expressions like 'be that as it may' or 'come what may.'",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe the function and usage of fronting and inversion for emphasis in academic English.",
    answer: "Fronting involves placing an element that would normally occur later in a sentence at the beginning for emphasis or to create cohesion. For example: 'Particularly significant is the relationship between...' (instead of 'The relationship is particularly significant'). Inversion refers to reversing the normal subject-verb order, often following negative or limiting adverbials. For example: 'Not only did the experiment confirm our hypothesis, but it also revealed...' These techniques add variety and emphasis in academic writing but should be used judiciously to maintain clarity.",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Analyze the grammatical and semantic differences between participial, infinitive, and gerund clauses as sentence complements.",
    answer: "Participial clauses (-ing or -ed forms) often express simultaneous action or result (e.g., 'The researchers conducted the experiment, collecting data over six months'). Infinitive clauses (to + base verb) typically express purpose, intention, or potential (e.g., 'The study aims to identify key factors'). Gerund clauses (-ing form as noun) represent actions as concepts or processes (e.g., 'Conducting longitudinal studies requires significant resources'). The choice between these forms often affects meaning; compare 'She remembered to lock the door' (remembered the task) versus 'She remembered locking the door' (remembered the action already performed).",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Explain how modality is expressed in academic English and how modal expressions contribute to cautious or nuanced claims.",
    answer: "Modality in academic English refers to expressions of likelihood, certainty, necessity, or obligation. It allows writers to present claims with appropriate caution (hedging) or force (boosting). Modal auxiliaries (may, might, could, should), adverbs (possibly, certainly, necessarily), adjectives (likely, probable, essential), and lexical verbs (suggest, indicate, appear) all express different degrees of modality. For example, 'These results suggest that...' is more cautious than 'These results prove that...' Skilled academic writers use modality to accurately reflect the strength of evidence while acknowledging limitations.",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Discuss how complex noun phrases function in academic discourse, including pre- and post-modification structures.",
    answer: "Complex noun phrases in academic writing condense information and create precise references. Pre-modification uses adjectives, nouns, or participles before the head noun (e.g., 'a comprehensive longitudinal population-based study'). Post-modification uses prepositional phrases, relative clauses, or non-finite clauses after the head noun (e.g., 'the methodology adopted by researchers working in developing countries'). These structures allow precise specification but require careful construction to avoid ambiguity or excessive complexity. Skilled academic writers balance information density with readability, often unpacking complex noun phrases in subsequent sentences.",
    matiere: "TOEFL Grammar",
    niveau: "avance",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const GrammaireAvanceToeflFlashcards = grammaireAvanceToeflFlashcards;
