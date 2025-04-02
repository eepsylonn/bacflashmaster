
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingFacileCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Tell me about your hometown. What is it like and what do you like about it?",
    answer: "Describe your hometown with 3-4 key features (size, location, notable places), mention what daily life is like there, and explain what you personally enjoy about it. Use present tense, descriptive adjectives, and speak for 1-2 minutes.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What kind of food do you enjoy eating? Is there a special dish from your country you would recommend?",
    answer: "Mention 2-3 types of food you enjoy, explain why you like them, describe a traditional dish in detail (ingredients, preparation, when it's eaten), and explain why you would recommend it. Use food-related vocabulary and enthusiastic expressions.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Describe a typical day in your life. What do you usually do on weekdays?",
    answer: "Structure your answer chronologically, include daily routines with specific times, use present simple tense for habitual actions, include at least 5 different activities, and mention how you feel about different parts of your day. Speak for 1-2 minutes.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "What do you enjoy doing in your free time? Do you have any hobbies?",
    answer: "Mention 2-3 specific activities you enjoy, explain why you find them interesting or relaxing, describe how often you do them, mention when you started these hobbies, and include some specific details about how you practice them. Use enthusiastic intonation and varied vocabulary.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Talk about a trip or holiday you remember well. Where did you go and what did you do?",
    answer: "Specify the destination and when you went, describe your travel companions, mention 3-4 activities you did, explain what made this trip memorable, and express how you felt about the experience. Use past tense correctly and include sensory details (sights, sounds, tastes).",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const SpeakingFacileCambridgeFlashcards = speakingFacileCambridgeFlashcards;
