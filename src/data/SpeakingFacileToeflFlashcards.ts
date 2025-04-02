
import { Flashcard } from "@/types";
import { v4 as uuidv4 } from 'uuid';

export const speakingFacileToeflFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Describe your favorite place to study and explain why you prefer it.",
    answer: "Sample response: My favorite place to study is the local library because it's quiet, has good lighting, comfortable seating, and free wifi. The peaceful atmosphere helps me concentrate, and being surrounded by other people studying motivates me to stay focused.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: uuidv4(),
    question: "Talk about a hobby or activity you enjoy doing in your free time. Explain why you enjoy it and how it benefits you.",
    answer: "Sample response: I enjoy hiking in my free time because it allows me to connect with nature and get exercise. It benefits me by reducing stress, improving my physical fitness, and giving me time to clear my mind while enjoying beautiful scenery.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: uuidv4(),
    question: "Describe an important teacher or professor who has influenced you. Explain why this person was important to you.",
    answer: "Sample response: My high school English teacher significantly influenced me because she challenged me to think critically and express my ideas clearly. She provided constructive feedback on my writing and encouraged me to pursue my interest in literature, which ultimately led me to my current field of study.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: uuidv4(),
    question: "Describe a memorable celebration or holiday in your culture. Explain why it is important and how people typically celebrate it.",
    answer: "Sample response: A memorable celebration in my culture is the New Year festival. It's important because it represents new beginnings and brings families together. People typically celebrate by cleaning their homes, preparing special foods, exchanging gifts, and gathering with family for a large meal.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: uuidv4(),
    question: "Talk about a skill you would like to learn. Explain why you want to learn this skill and how it might be useful to you in the future.",
    answer: "Sample response: I would like to learn computer programming because technology is becoming increasingly important in today's world. This skill would be useful for my future career in business, allowing me to understand technical aspects of projects and communicate more effectively with IT teams.",
    matiere: "Speaking",
    niveau: "facile",
    diplome: "toefl"
  }
];

// Export with consistent naming
export const SpeakingFacileToeflFlashcards = speakingFacileToeflFlashcards;
