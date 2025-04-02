
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingFacileToeicFlashcards: Flashcard[] = [
  {
    id: "jk345n2k3j43",
    question: "What is the date of the office supplies delivery?",
    answer: "Tuesday, May 15th",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: "d9234kj2n3kj",
    question: "How many boxes of printer paper were ordered?",
    answer: "10 boxes",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: "23k4n23j4n2",
    question: "What is the total amount for the order?",
    answer: "$450",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: "l2m34n2k3j4n",
    question: "What is the phone number for customer service?",
    answer: "555-123-4567",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: "n2k3j4n2k3j4",
    question: "Who is the sender of the email?",
    answer: "Sarah Thompson",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: "2j34n2k3j4n2",
    question: "What is the order number?",
    answer: "#45678",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: generateId(),
    question: "Read the email and answer: How will the payment be processed?",
    answer: "Charged to the company credit card",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic",
    text: "/texts/toeic/facile/email-commercial.txt"
  },
  {
    id: generateId(),
    question: "According to the memo, when is the quarterly review meeting scheduled?",
    answer: "Next Tuesday at 10 AM",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is required from all department heads according to the notice?",
    answer: "Monthly progress reports",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Based on the advertisement, what is the main selling point of the new office chair?",
    answer: "Ergonomic design for improved posture",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "According to the schedule, which day will the maintenance crew service the elevators?",
    answer: "Wednesday",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What does the policy state about parking in reserved spaces?",
    answer: "Vehicles will be towed at owner's expense",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Based on the invoice, when is the payment due?",
    answer: "Within 30 days of receipt",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is required for all visitors according to the safety guidelines?",
    answer: "Sign in at reception and wear identification badges",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What option does the rental agreement offer for lease extension?",
    answer: "Monthly extension with 15% premium",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the maximum occupancy of Conference Room B according to the facility guidelines?",
    answer: "25 people",
    matiere: "TOEIC Reading",
    niveau: "facile",
    diplome: "toeic"
  },
];

// For backwards compatibility
export const ReadingFacileToeicFlashcards = readingFacileToeicFlashcards;
