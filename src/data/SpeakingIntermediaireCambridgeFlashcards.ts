
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingIntermediaireCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Describe a person who has had a significant influence on your life. Who are they and how have they influenced you?",
    answer: "Introduce the person (who they are, relationship to you), describe their personality and qualities with specific examples, explain their influence on your life in different areas (values, decisions, skills), discuss a specific incident that demonstrates their impact, and reflect on how different your life might be without their influence. Use a range of descriptive vocabulary, appropriate tenses, and speak for 2 minutes.",
    matiere: "Speaking",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Do you think traditional media (newspapers, television) is being replaced by social media? What are the advantages and disadvantages of getting news from social media?",
    answer: "Address the first question directly with a nuanced opinion, discuss 2-3 advantages of social media news (immediacy, diverse perspectives, accessibility), analyze 2-3 disadvantages (misinformation, echo chambers, superficiality), compare traditional and social media using specific examples, and conclude with a balanced view. Use comparison language, discourse markers to organize ideas, and speak for 2 minutes.",
    matiere: "Speaking",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Describe a challenging situation you have faced and how you dealt with it.",
    answer: "Set the context clearly (when, where, what happened), explain why it was challenging for you personally, describe your thoughts and feelings at the time, detail the steps you took to address the challenge, reflect on what you learned from the experience, and mention how it might help you in future situations. Use narrative tenses correctly, emotional vocabulary, and problem-solution structure.",
    matiere: "Speaking",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Do you agree that it's important to maintain a work-life balance? What can employers and employees do to ensure this?",
    answer: "State your position clearly, define what work-life balance means to you, explain its importance with 2-3 specific reasons, suggest 2-3 measures employers can implement (flexible hours, remote work options, wellness programs), recommend 2-3 strategies for employees (setting boundaries, time management, prioritization), and conclude with the broader benefits to society. Use conditional structures, modal verbs for suggestions, and organize ideas logically.",
    matiere: "Speaking",
    niveau: "intermediaire",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "How has technology changed the way we learn and study compared to previous generations?",
    answer: "Compare past and present learning environments, discuss 3-4 major technological changes (internet access, digital resources, online courses, educational apps), analyze both positive impacts (accessibility, personalization, multimedia learning) and potential drawbacks (distractions, decreased interpersonal skills, digital divide), include specific examples or personal experiences, and reflect on future trends. Use comparative structures, varied vocabulary related to education and technology, and clear organization.",
    matiere: "Speaking",
    niveau: "intermediaire",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const SpeakingIntermediaireCambridgeFlashcards = speakingIntermediaireCambridgeFlashcards;
