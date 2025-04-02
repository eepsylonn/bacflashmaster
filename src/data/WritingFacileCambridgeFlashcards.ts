
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingFacileCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Write an email to a friend telling them about your recent holiday. Include where you went, what you did, and why you enjoyed it. (140-160 words)",
    answer: "Your email should include: a greeting and introduction, at least 3 details about your holiday (location, activities, highlights), a description of why you enjoyed it, and a friendly conclusion. Use informal language, appropriate punctuation, and correct tenses.",
    matiere: "Writing",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a short review of a restaurant you visited recently. Mention the food, service, and atmosphere. Would you recommend it? (140-160 words)",
    answer: "Your review should include: an introduction stating when you visited, descriptions of the food (at least 2 dishes), comments on the service quality, details about the atmosphere, a clear recommendation, and a conclusion. Use appropriate adjectives and varied vocabulary.",
    matiere: "Writing",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a note to your flatmate explaining that you will be away for the weekend. Include where you are going, when you will return, and any requests. (140-160 words)",
    answer: "Your note should include: a greeting, details about your destination, clear dates for departure and return, any specific requests (e.g., watering plants, collecting mail), contact information in case of emergency, and a friendly closing. Use informal language and clear instructions.",
    matiere: "Writing",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a postcard to a relative describing a city you are visiting. Include information about the weather, activities, and your plans. (140-160 words)",
    answer: "Your postcard should include: a greeting, details about the city and its main attractions, comments on the weather, description of at least 2 activities you've done, mention of upcoming plans, and a warm closing. Use present tenses for current experiences and descriptive language.",
    matiere: "Writing",
    niveau: "facile",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a letter to a friend inviting them to a special event (birthday party, concert, etc.). Include details about the date, time, location, and what to bring. (140-160 words)",
    answer: "Your invitation should include: a friendly greeting, clear information about the event type, specific date and time, precise location (with directions if needed), suggestions about what to bring, request for RSVP, and a warm closing. Use enthusiastic language and make the invitation sound appealing.",
    matiere: "Writing",
    niveau: "facile",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const WritingFacileCambridgeFlashcards = writingFacileCambridgeFlashcards;
