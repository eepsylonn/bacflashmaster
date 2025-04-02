import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Write a paragraph explaining the advantages of learning a second language in early childhood.",
    answer: "Learning a second language during early childhood offers numerous advantages. Young children's brains are highly adaptable, making language acquisition more natural and effortless compared to learning later in life. They develop native-like pronunciation and internalize grammar rules intuitively rather than through conscious study. Bilingual children often demonstrate enhanced cognitive abilities, including better problem-solving skills, creativity, and mental flexibility. They also develop greater cultural awareness and empathy. These early language skills create a foundation for academic success and broader career opportunities later in life, while also preserving connections to family heritage when learning ancestral languages.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that technology has made life more complicated. Others argue it has simplified our daily tasks. Which perspective do you agree with and why?",
    answer: "Sample response could discuss: Technology's role in simplifying tasks like communication and information access, while acknowledging complications from constant connectivity, social media pressure, and technical troubleshooting. A balanced view might recognize both perspectives while emphasizing one side with specific examples like remote work flexibility or digital healthcare innovations.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Write a paragraph describing an important event from your country's history and explain its significance.",
    answer: "Sample response should include: A clear identification of a specific historical event, accurate details about when it occurred and key figures involved, explanation of the immediate impact of the event, and analysis of its long-term significance for the country's development, culture, or international relations.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some educators believe traditional lectures remain the best teaching method, while others argue that interactive approaches are more effective. Discuss both views and give your opinion.",
    answer: "Sample response could compare: Traditional lectures (efficient information delivery to large groups, clear structure, expert guidance) versus interactive approaches (active engagement, practical application, peer learning, personalized feedback). The response should acknowledge merits of both while taking a position based on learning effectiveness, student engagement, or development of critical thinking skills.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Describe a place you have visited that made a strong impression on you. Why was it memorable?",
    answer: "Sample response should include: Vivid descriptive language about a specific location (natural setting, city, building, etc.), sensory details that bring the place to life, personal reaction and emotional response to the location, and reflection on why this place was particularly significant or memorable compared to others.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const WritingFacileToeflFlashcards = writingFacileToeflFlashcards;
