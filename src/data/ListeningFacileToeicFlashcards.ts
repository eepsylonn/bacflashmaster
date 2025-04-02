
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "In the TOEIC Listening Part 1 (Photos), you hear: 'The man is typing on a computer.' What should you look for in the photos?",
    answer: "A man using a computer keyboard",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conversation, you hear: 'Would you like coffee or tea?' What is the speaker doing?",
    answer: "Offering beverage options",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'The train will depart from platform 3 at 9:15.' What time will the train leave?",
    answer: "9:15",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'I think we should meet tomorrow at 2 PM.' What is being planned?",
    answer: "A meeting for tomorrow afternoon",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conversation, you hear: 'I'm sorry, but we're closed on Sundays.' What information is being given?",
    answer: "The business's operating hours",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear an announcement: 'The office will close early today at 4 PM due to the holiday.' What time will the office close?",
    answer: "4 PM",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conversation, you hear: 'Can I help you find something?' Where is this conversation likely taking place?",
    answer: "In a store or shop",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'Please turn off all electronic devices before takeoff.' Where would you hear this?",
    answer: "On an airplane",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conversation, you hear: 'Do you want me to email you the report?' What is being offered?",
    answer: "To send a report by email",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'The meeting has been moved from Room A to Room B.' What has changed?",
    answer: "The location of the meeting",
    matiere: "TOEIC Listening",
    niveau: "facile",
    diplome: "toeic"
  },
];
