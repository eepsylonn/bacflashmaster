
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Some people believe that universities should focus primarily on preparing students for the workforce, while others argue they should prioritize developing well-rounded individuals with broad knowledge. Discuss both perspectives and give your opinion.",
    answer: "Sample response should present balanced arguments for both perspectives: workforce preparation (economic benefits, career readiness, skill development) versus liberal education (critical thinking, adaptability, citizenship). The response should evaluate the strengths and limitations of each approach, possibly considering how they might be integrated, and provide a thoughtful personal position with supporting evidence.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "The widespread use of social media has fundamentally changed how people interact with each other. Do you think these changes have been mostly positive or negative? Support your answer with specific reasons and examples.",
    answer: "Sample response might explore: positive changes (global connectivity, support communities, democratized information sharing) and negative impacts (privacy concerns, addiction, superficial relationships, echo chambers). It should develop a nuanced position that acknowledges complexity while making a clear argument about the predominant impact, using specific examples from personal experience or observation.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some critics argue that international tourism creates more problems than benefits for local communities. To what extent do you agree or disagree?",
    answer: "Sample response should analyze: economic benefits (job creation, infrastructure development, business opportunities) versus potential problems (environmental degradation, cultural commodification, unequal profit distribution, housing issues). The response should evaluate these factors in specific contexts, potentially distinguishing between different types of tourism (mass vs. sustainable) and offering solutions to maximize benefits while minimizing negative impacts.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "In some countries, the percentage of food waste is increasing every year. What are the causes of food waste, and what measures can be taken to tackle this problem?",
    answer: "Sample response could address: Causes (consumer behavior, retail practices, supply chain inefficiencies, aesthetic standards) and solutions (policy interventions, education campaigns, technological innovations, business model reforms). The response should demonstrate understanding of interconnected factors and evaluate the feasibility and potential impact of different approaches across the food system.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Many cities are facing severe housing shortages and rising costs. What factors have contributed to this problem, and what steps should governments take to address it?",
    answer: "Sample response should analyze: Contributing factors (population growth, investment properties, construction costs, zoning restrictions, short-term rentals) and potential government interventions (affordable housing requirements, rent control, tax policies, public housing, infrastructure development). The response should evaluate different approaches based on effectiveness, feasibility, and potential unintended consequences.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const WritingIntermediaireToeflFlashcards = writingIntermediaireToeflFlashcards;
