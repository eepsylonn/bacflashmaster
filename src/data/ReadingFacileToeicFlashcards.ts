
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingFacileToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Read the notice: 'Employees must wash hands before returning to work.' Where would you most likely see this?",
    answer: "In a restaurant kitchen or food preparation area",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the sign: 'No parking between 8 AM and 6 PM.' What time can you park here?",
    answer: "After 6 PM and before 8 AM",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the email: 'The meeting is rescheduled for Friday at 2 PM.' What was changed?",
    answer: "The time and/or date of the meeting",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the notice: 'Sale! 50% off all items this weekend only.' When will the discount end?",
    answer: "At the end of the weekend",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the message: 'Please submit your reports by Monday.' When is the deadline?",
    answer: "Monday",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the sign: 'Exit Only. Do Not Enter.' What should you do here?",
    answer: "Only use this door to leave, not to enter",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the note: 'Out of order. Please use stairs.' What is not working?",
    answer: "An elevator or escalator",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the announcement: 'Free coffee for customers on Monday mornings.' Who gets free coffee?",
    answer: "Customers, but only on Monday mornings",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the notice: 'Return library books by 5 PM.' What happens after 5 PM?",
    answer: "You cannot return books / You may incur a late fee",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the sign: 'Please turn off your mobile phones.' Where would you most likely see this?",
    answer: "In a theater, meeting room, hospital, or classroom",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
];
