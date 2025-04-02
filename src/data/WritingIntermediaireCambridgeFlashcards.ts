
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingIntermediaireCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Write an essay discussing the advantages and disadvantages of working from home. Include your own opinion. (220-260 words)",
    answer: "Your essay should include: an introduction stating the topic, 2-3 paragraphs on advantages (flexibility, no commute, work-life balance), 2-3 paragraphs on disadvantages (isolation, distractions, blurred boundaries), a conclusion with your justified opinion. Use formal language, appropriate connectors (however, furthermore, in contrast), and a balanced analysis.",
    matiere: "Writing",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a report for your college principal suggesting improvements to the campus facilities. Include at least three recommendations with reasons. (220-260 words)",
    answer: "Your report should include: a clear title, an introduction stating the purpose, organized sections with subheadings for each recommendation, detailed explanations for each suggestion, a conclusion summarizing benefits of implementing changes. Use formal language, passive voice where appropriate, and a logical structure.",
    matiere: "Writing",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a review of a film or TV show for an English-language magazine. Discuss the plot, acting, and whether you would recommend it. (220-260 words)",
    answer: "Your review should include: an engaging introduction with basic information (title, director, genre), a brief plot summary without spoilers, analysis of acting performances, commentary on cinematography or special effects, discussion of strengths and weaknesses, and a recommendation. Use varied vocabulary, present tense for describing content, and evaluative language.",
    matiere: "Writing",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write an email to a company where you recently purchased a defective product. Explain the problem and request an appropriate solution. (220-260 words)",
    answer: "Your email should include: appropriate formal greeting, clear subject line, details of purchase (date, location, product), specific description of the defect, explanation of how it affects usage, clear statement of desired resolution (replacement, refund, repair), polite closing. Use formal language, clear paragraphing, and a courteous but firm tone.",
    matiere: "Writing",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write an article for a student website about maintaining a healthy lifestyle while studying. Include practical advice and examples. (220-260 words)",
    answer: "Your article should include: an attention-grabbing title, engaging introduction, 3-4 main sections with practical tips (nutrition, exercise, sleep, stress management), personal examples or anecdotes, conclusion emphasizing benefits. Use a mix of formal and informal language, imperative forms for advice, and second person to address readers directly.",
    matiere: "Writing",
    niveau: "intermediaire",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const WritingIntermediaireCambridgeFlashcards = writingIntermediaireCambridgeFlashcards;
