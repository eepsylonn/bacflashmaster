
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: "234jk324jn24",
    question: "According to the annual report, what was the company's revenue growth percentage?",
    answer: "12.5%",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "983j4n2kj3n4",
    question: "What new market did the company expand into last year?",
    answer: "Southeast Asia",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "2j3n4k2j3n4k",
    question: "How many new employees were hired during the fiscal year?",
    answer: "215",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "234n23k4j2n3",
    question: "What was cited as the main challenge for the upcoming year?",
    answer: "Supply chain disruptions",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "32j4n23kj4n2",
    question: "What percentage of revenue was invested in research and development?",
    answer: "8.3%",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "n23k4j2n3k4j",
    question: "What new sustainability initiative was launched last quarter?",
    answer: "Carbon-neutral manufacturing",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: generateId(),
    question: "According to the company policy, what is the procedure for requesting overtime approval?",
    answer: "Submit request form to department manager at least 48 hours in advance",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What does the training manual indicate is the first step in the customer complaint resolution process?",
    answer: "Acknowledge the customer's concern without interrupting",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "According to the technical specifications, what is the maximum operating temperature for the industrial cooling system?",
    answer: "95 degrees Celsius",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What information must be included in all purchase requisitions according to the procurement guidelines?",
    answer: "Budget code, detailed item description, and business justification",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Based on the marketing report, which demographic showed the highest response rate to the spring campaign?",
    answer: "Urban professionals aged 25-34",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "According to the quality control protocol, how often must calibration checks be performed on measurement equipment?",
    answer: "Every 90 days or after 500 hours of operation, whichever comes first",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What does the travel policy state regarding reimbursement for meals during international business trips?",
    answer: "Actual expenses up to $75 per day with itemized receipts required",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "According to the project timeline, when is the client presentation for Phase 2 scheduled?",
    answer: "The third week of October",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What action does the emergency response procedure require when the fire alarm activates?",
    answer: "Immediately evacuate via designated routes and assemble at designated meeting points",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "According to the warehouse inventory guidelines, what is the maximum number of pallets that can be stacked in Zone C?",
    answer: "Three high for standard goods, two high for fragile items",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
];

// For backwards compatibility
export const ReadingIntermediaireToeicFlashcards = readingIntermediaireToeicFlashcards;
