
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Some people argue that advancements in artificial intelligence primarily benefit large corporations rather than ordinary citizens. Do you agree or disagree? Provide specific reasons and examples to support your position.",
    answer: "Sample response might discuss: Economic concentration from AI technologies, accessibility issues, employment disruption versus democratization of powerful tools, cost reduction for services, and quality-of-life improvements. A sophisticated response would analyze systemic versus individual impacts, consider various stakeholder perspectives, and develop nuanced arguments supported by concrete examples.",
    matiere: "TOEFL Speaking",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "In some cultures, living with extended family is common, while in others, nuclear family arrangements predominate. What factors influence these different living arrangements, and what are their implications for individuals and society?",
    answer: "Sample response should address: Economic considerations (housing costs, childcare, eldercare), cultural values (familial obligation, individualism vs. collectivism), historical context, urbanization patterns, and policy environments. It should analyze implications across multiple dimensions (social support, privacy, intergenerational knowledge transfer, conflict resolution) while avoiding oversimplified cultural stereotypes.",
    matiere: "TOEFL Speaking",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some educators argue that standardized testing provides valuable objective measures of achievement, while others contend it narrows curriculum and disadvantages certain students. Evaluate these perspectives and explain your own view on the role of standardized testing in education.",
    answer: "Sample response should analyze: Benefits (comparability across schools/regions, accountability mechanisms, diagnostic information) versus limitations (teaching to the test, cultural biases, stress impacts, assessment narrowness). A sophisticated response would consider how testing functions within broader assessment systems, analyze design choices that mitigate drawbacks, and evaluate contextual factors affecting test validity and utility.",
    matiere: "TOEFL Speaking",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Explain how a particular technological innovation has transformed a specific field or industry. Discuss both the benefits and challenges this transformation has created.",
    answer: "Sample response should: Identify a specific technology and industry/field, explain the pre-innovation status quo, analyze transformative mechanisms and outcomes, evaluate winners and losers in the transformation, and consider second-order effects and adaptations. It should demonstrate nuanced understanding of both technical and social dimensions of innovation.",
    matiere: "TOEFL Speaking",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that solving major environmental challenges requires fundamental changes to economic systems and consumption patterns, while others argue that technological solutions within existing frameworks are sufficient. Evaluate these perspectives.",
    answer: "Sample response should demonstrate: Understanding of ecological economics versus neoclassical perspectives, limits of efficiency improvements and rebound effects, examples of both technological successes and failures in environmental protection, and institutional factors affecting solution implementation. It should develop a nuanced position acknowledging complexities and potential complementarities between approaches.",
    matiere: "TOEFL Speaking",
    niveau: "avance",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const SpeakingAvanceToeflFlashcards = speakingAvanceToeflFlashcards;
