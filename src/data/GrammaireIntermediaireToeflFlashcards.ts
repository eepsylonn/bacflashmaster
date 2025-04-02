
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Explain the difference between restrictive and non-restrictive relative clauses, including appropriate punctuation.",
    answer: "Restrictive relative clauses provide essential information to identify the noun they modify and do not use commas (e.g., 'The book that I bought yesterday is excellent'). Non-restrictive relative clauses provide additional, non-essential information and are set off by commas (e.g., 'The book, which I bought yesterday, is excellent'). Non-restrictive clauses often use 'which' rather than 'that.'",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What is the difference between the past perfect and past perfect continuous tenses?",
    answer: "The past perfect (had + past participle) emphasizes the completion of an action before another past action (e.g., 'I had finished my homework before dinner'). The past perfect continuous (had been + present participle) emphasizes the duration of an ongoing past action that occurred before another past action (e.g., 'I had been studying for three hours before my friend called').",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "How do you form and use reduced relative clauses?",
    answer: "Reduced relative clauses are formed by removing the relative pronoun (who, which, that) and the form of 'be' from a relative clause. Active voice clauses with continuous tenses become present participles (e.g., 'The woman who is standing there' → 'The woman standing there'). Passive voice clauses become past participles (e.g., 'The building that was destroyed' → 'The building destroyed'). Reduced relative clauses can only be formed when the relative pronoun is the subject of the relative clause.",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Explain the concept of subject-verb agreement with collective nouns.",
    answer: "Collective nouns (e.g., team, family, committee) can take either singular or plural verbs depending on whether the group is viewed as a single unit or as individuals. In American English, collective nouns typically take singular verbs (e.g., 'The team is winning'), while British English often uses plural verbs when emphasizing the individuals in the group (e.g., 'The team are arguing among themselves'). Context determines whether the collective is acting as a unit or as separate individuals.",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "What are parallel structures and why are they important in academic writing?",
    answer: "Parallel structures are phrases or clauses that are similar in form to show that the ideas they express are equal in importance. Elements in a series, items in a list, or comparative structures should maintain the same grammatical form (noun, verb, adjective, etc.). For example: 'She enjoys swimming, hiking, and camping' (all gerunds) rather than 'She enjoys swimming, to hike, and camping.' Parallel structures improve clarity, rhythm, and readability in academic writing while highlighting relationships between ideas.",
    matiere: "TOEFL Grammar",
    niveau: "intermediaire",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const GrammaireIntermediaireToeflFlashcards = grammaireIntermediaireToeflFlashcards;
