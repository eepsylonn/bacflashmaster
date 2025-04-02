
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Describe your favorite place to study and explain why you prefer it.",
    answer: "Sample response: My favorite place to study is the local library because it's quiet, has good lighting, comfortable seating, and free wifi. The peaceful atmosphere helps me concentrate, and being surrounded by other people studying motivates me to stay focused.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Talk about a hobby or activity you enjoy doing in your free time. Explain why you enjoy it and how it benefits you.",
    answer: "Sample response: I enjoy hiking in my free time because it allows me to connect with nature and get exercise. It benefits me by reducing stress, improving my physical fitness, and giving me time to clear my mind while enjoying beautiful scenery.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe an important teacher or professor who has influenced you. Explain why this person was important to you.",
    answer: "Sample response: My high school English teacher significantly influenced me because she challenged me to think critically and express my ideas clearly. She provided constructive feedback on my writing and encouraged me to pursue my interest in literature, which ultimately led me to my current field of study.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe a memorable celebration or holiday in your culture. Explain why it is important and how people typically celebrate it.",
    answer: "Sample response: A memorable celebration in my culture is the New Year festival. It's important because it represents new beginnings and brings families together. People typically celebrate by cleaning their homes, preparing special foods, exchanging gifts, and gathering with family for a large meal.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Talk about a skill you would like to learn. Explain why you want to learn this skill and how it might be useful to you in the future.",
    answer: "Sample response: I would like to learn computer programming because technology is becoming increasingly important in today's world. This skill would be useful for my future career in business, allowing me to understand technical aspects of projects and communicate more effectively with IT teams.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe a place in your hometown that you enjoy visiting. Explain why this place is special to you.",
    answer: "Sample response: I enjoy visiting the central park in my hometown because it offers a peaceful escape from the busy city. It's special to me because I've created many memories there with friends and family, from picnics in the summer to walks during the autumn when the leaves change color.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Talk about a book or movie that had a strong impact on you. Describe it and explain why it affected you.",
    answer: "Sample response: The book 'To Kill a Mockingbird' had a strong impact on me because it taught me about justice, empathy, and moral courage. Through the character of Atticus Finch, I learned about standing up for what's right even when it's difficult, a lesson that has influenced how I approach challenges in my own life.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe your ideal job or career. Explain why you are interested in this field and what qualities make you suitable for it.",
    answer: "Sample response: My ideal career is in environmental science because I'm passionate about protecting natural resources and addressing climate change. My analytical thinking skills, attention to detail, and genuine concern for the environment make me well-suited for this field.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Talk about a piece of technology that has made your life easier. Describe what it is and how it has helped you.",
    answer: "Sample response: My smartphone has made my life easier by allowing me to manage many tasks efficiently. I can check my email, navigate to new places, stay connected with friends and family, and access information instantly, all of which saves time and helps me stay organized.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe a difficult decision you had to make. Explain the situation and how you made your decision.",
    answer: "Sample response: A difficult decision I faced was choosing between studying abroad or accepting an internship in my home country. I carefully weighed the benefits of international experience against career advancement opportunities, consulted with mentors, and ultimately chose to study abroad because it aligned better with my long-term goals.",
    matiere: "TOEFL Speaking",
    niveau: "facile",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const SpeakingFacileToeflFlashcards = speakingFacileToeflFlashcards;
