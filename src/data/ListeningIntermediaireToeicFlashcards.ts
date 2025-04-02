
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "You hear: 'The quarterly sales report indicates a 15% increase in the eastern region, while the western and northern regions experienced modest declines of 3% and 5% respectively.' Which region performed the best?",
    answer: "The eastern region",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a phone conversation, you hear: 'I'm afraid Mr. Thompson isn't available at the moment. Would you like to leave a message or should I have him call you back when he returns from his conference this Thursday?' When will Mr. Thompson return?",
    answer: "Thursday",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear an announcement: 'Due to unexpected maintenance issues, the southbound train service will be operating with delays of approximately 25 to 30 minutes. We apologize for any inconvenience and recommend passengers adjust their travel plans accordingly.' What problem is mentioned?",
    answer: "Delays due to maintenance issues",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a meeting, you hear: 'Before we proceed with the marketing campaign, we need to finalize the budget allocation and obtain approval from the finance department. Sarah, could you schedule a meeting with the CFO by the end of this week?' Who needs to be contacted?",
    answer: "The CFO (Chief Financial Officer)",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'The conference will feature keynote speeches on the first day, followed by breakout sessions on day two, and hands-on workshops on the final day. Participants should register for specific workshops in advance as space is limited.' What should participants do before the conference?",
    answer: "Register for specific workshops",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conversation about scheduling, you hear: 'I can meet either Tuesday morning before 11 or Wednesday afternoon after 2, but I'm completely booked on Thursday with client presentations.' When is the speaker NOT available?",
    answer: "All day Thursday",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear a voicemail: 'Hello, this is Rebecca from HR. I'm calling regarding your application for the marketing position. We'd like to invite you for an interview next week. Please call me back at extension 4578 to schedule a time.' What number should you call?",
    answer: "Extension 4578",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a meeting, you hear: 'The data suggests that our primary demographic is shifting from the 18-24 age range to 25-34, which means we should reconsider our social media strategy accordingly.' What change is happening to the company's audience?",
    answer: "They are getting older",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "You hear: 'While the renovations to the main lobby will be completed by Friday, the parking garage will remain under construction until the end of the month. Visitors should use the temporary entrance on the west side of the building during this period.' Where should visitors enter the building?",
    answer: "The temporary entrance on the west side",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a customer service call, you hear: 'I understand you're frustrated about the delay in your order. According to our tracking system, your package was shipped on Monday but there appears to be a weather-related delay affecting deliveries in your region. It should arrive by Thursday at the latest.' What caused the delay?",
    answer: "Weather conditions",
    matiere: "TOEIC Listening",
    niveau: "intermediaire",
    diplome: "toeic"
  },
];
