
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Describe a situation where you had to adapt to a significant change. You should say: what the change was, how it affected your life, what challenges you faced, and explain how you managed to adapt to this change.",
    answer: "Discuss a specific major life change (e.g., moving countries, career change), detail its impact on multiple aspects of your life, identify 2-3 specific challenges it presented, and explain your adaptation strategies with examples of both successes and difficulties.",
    matiere: "IELTS Speaking",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about a time when you solved a difficult problem. You should say: what the problem was, why it was challenging, what steps you took to solve it, and explain what you learned from this experience.",
    answer: "Describe a specific problem with context, explain multiple factors that made it challenging, outline your problem-solving process chronologically with clear steps, and reflect on both practical skills and personal growth resulting from the experience.",
    matiere: "IELTS Speaking",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a skill you would like to improve. You should say: what this skill is, why it is important to you, how you might go about improving it, and explain how this improvement would benefit your life.",
    answer: "Identify a specific skill (professional or personal), explain its importance in both immediate and long-term contexts, outline a detailed and realistic improvement plan with multiple approaches, and discuss diverse benefits across different areas of your life.",
    matiere: "IELTS Speaking",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about a tradition in your country that you find interesting. You should say: what the tradition is, how people celebrate or observe it, how it has changed over time, and explain why you find this tradition particularly interesting.",
    answer: "Name and describe a cultural tradition with specific details, explain typical observances with examples, discuss historical evolution noting both preserved and changed elements, and provide multiple perspectives on its cultural significance including personal connections.",
    matiere: "IELTS Speaking",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a technological device that has changed your life. You should say: what the device is, when you first started using it, how you use it in your daily life, and explain why it has been so influential for you.",
    answer: "Name a specific technology beyond just 'smartphone', provide context for when you adopted it, detail diverse usage patterns across different domains of your life, and analyze its impact on your behavior, productivity, relationships, and thinking processes.",
    matiere: "IELTS Speaking",
    niveau: "intermediaire",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const SpeakingIntermediaireIELTSFlashcards = speakingIntermediaireIELTSFlashcards;
