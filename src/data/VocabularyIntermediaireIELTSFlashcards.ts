
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What's the difference between 'to mitigate' and 'to exacerbate'?",
    answer: "'To mitigate' means to make something less severe, serious, or painful, while 'to exacerbate' means to make a problem, situation, or negative feeling worse or more severe",
    matiere: "IELTS Vocabulary",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Explain the following phrasal verb: 'to draw on' (as in 'to draw on experience')",
    answer: "To use knowledge, experience, or a resource to help you do something. It means to utilize or access previously acquired information or skills",
    matiere: "IELTS Vocabulary",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'demographic' and provide an example of its use in a sentence",
    answer: "Demographic refers to statistical data relating to the population and particular groups within it. Example: 'The aging demographic in many developed countries is creating challenges for healthcare systems.'",
    matiere: "IELTS Vocabulary",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What's the difference between 'economic' and 'economical'?",
    answer: "'Economic' relates to the economy, the system of money and resources (e.g., economic growth, economic policy). 'Economical' means providing good value or return in relation to the resources used; being efficient or thrifty (e.g., an economical car that uses little fuel).",
    matiere: "IELTS Vocabulary",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What does 'to advocate for' mean and in what contexts is it commonly used?",
    answer: "To advocate for something means to publicly support or recommend a particular cause or policy. It's commonly used in contexts related to social issues, legal matters, healthcare, education, and political activism where someone speaks in favor of a change or supports the rights of a particular group.",
    matiere: "IELTS Vocabulary",
    niveau: "intermediaire",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const VocabularyIntermediaireIELTSFlashcards = vocabularyIntermediaireIELTSFlashcards;
