
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct conditional form: 'If the project ____ on time, we would have received the bonus.'",
    answer: "had been completed",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct passive form: 'The new policy ____ to all employees last week.'",
    answer: "was announced",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct modal verb: 'Employees ____ wear their ID badges at all times while on company premises.'",
    answer: "must",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct form: 'By the time the CEO arrives, we ____ the presentation.'",
    answer: "will have prepared",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Identify the correct reported speech: 'The manager said, \"We will increase production next month.\"'",
    answer: "The manager said that they would increase production the following month.",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct relative pronoun: 'The candidate ____ resume impressed us the most will be contacted this week.'",
    answer: "whose",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct preposition: 'The company is liable ____ any damages caused by its products.'",
    answer: "for",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct participle form: '____ the report, she found several errors that needed correction.'",
    answer: "Having reviewed",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct phrasal verb: 'The meeting has been ____ until next Friday due to scheduling conflicts.'",
    answer: "put off",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete the sentence with the correct comparative structure: 'This quarter's results are not ____ we had anticipated.'",
    answer: "as good as",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
];
