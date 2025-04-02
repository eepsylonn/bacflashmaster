
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Describe your favorite place to relax. You should say: where it is, what you do there, who you usually go there with, and explain why you like this place.",
    answer: "Talk about a specific location (park, beach, café, room at home), activities you do there, who accompanies you (or if you go alone), and give 2-3 reasons why this place helps you relax.",
    matiere: "IELTS Speaking",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about a hobby you enjoy. You should say: what the hobby is, how you became interested in it, how often you do it, and explain why you find it enjoyable.",
    answer: "Describe a specific hobby, explain how/when you started it, mention frequency (daily/weekly/monthly), and give 2-3 reasons why you enjoy it (e.g., relaxation, skill development, social aspects).",
    matiere: "IELTS Speaking",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a special meal you remember. You should say: what the meal was, who you shared it with, where you had it, and explain why it was memorable.",
    answer: "Specify the type of meal/occasion, mention who was present, describe the location, and explain why it was memorable (food quality, special occasion, emotional significance).",
    matiere: "IELTS Speaking",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Talk about an interesting person you have met. You should say: who this person is, how you met them, what makes them interesting, and explain how knowing this person has influenced you.",
    answer: "Identify the person (but not a family member), explain how/when you met, describe 2-3 qualities that make them interesting, and discuss their specific influence on your life or thinking.",
    matiere: "IELTS Speaking",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Describe a book you have read that you found interesting. You should say: what type of book it is, what it is about, when you read it, and explain why you found it interesting.",
    answer: "Name a specific book and its genre, summarize the main plot/content briefly, mention when you read it, and explain 2-3 reasons why it captured your interest (characters, writing style, themes, etc.).",
    matiere: "IELTS Speaking",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const SpeakingFacileIELTSFlashcards = speakingFacileIELTSFlashcards;
