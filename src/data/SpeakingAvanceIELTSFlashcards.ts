
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingAvanceIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Describe a global issue that you think deserves more attention. You should say: what the issue is, why it receives insufficient attention, what consequences might arise if it continues to be neglected, and suggest what actions should be taken to address this issue.",
    answer: "Identify a specific yet complex global challenge, analyze systemic reasons for its under-recognition using multiple perspectives, predict both immediate and long-term consequences across different domains, and propose a comprehensive multi-level approach to addressing it that acknowledges potential limitations and counterarguments.",
    matiere: "IELTS Speaking",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about a controversial development in your field of study or work. You should say: what the development is, why opinions are divided about it, what your own perspective is, and explain how you think this development might influence the future of your field.",
    answer: "Describe a specific development with technical precision, present a balanced analysis of multiple opposing viewpoints with their respective merits, articulate your own nuanced position with substantive reasoning, and discuss potential transformative impacts with consideration of contingent factors and varying timeframes.",
    matiere: "IELTS Speaking",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a time when you had to reconcile competing priorities. You should say: what the situation was, what priorities were in conflict, how you evaluated your options, and explain what this experience taught you about decision-making.",
    answer: "Detail a complex situation with significant stakes, analyze the inherent tensions between specific values or objectives, explain your decision-making process including criteria, trade-offs and consultation processes, and reflect critically on how this experience has informed your approach to subsequent dilemmas.",
    matiere: "IELTS Speaking",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about a misconception people often have about your country or culture. You should say: what the misconception is, why you think it exists, how it differs from reality, and explain the impact this misconception has on intercultural understanding.",
    answer: "Identify a specific cultural misconception with its variations, analyze its historical, media, and psychological origins, contrast it with a nuanced portrayal of the actual cultural reality acknowledging internal diversity, and examine its consequences for diplomatic relations, tourism, business interactions, and individual cross-cultural encounters.",
    matiere: "IELTS Speaking",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a philosophical idea that has influenced your thinking. You should say: what the idea is, how you first encountered it, how it changed your perspective, and explain why you find this particular idea compelling or significant.",
    answer: "Articulate a specific philosophical concept with precision, contextualize your introduction to it within your intellectual development, analyze how it transformed multiple dimensions of your worldview or approach to life, and evaluate its enduring significance with reference to both its inherent qualities and its relationship to contemporary challenges.",
    matiere: "IELTS Speaking",
    niveau: "avance",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const SpeakingAvanceIELTSFlashcards = speakingAvanceIELTSFlashcards;
