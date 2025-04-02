
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const academicFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the purpose of a topic sentence in an academic paragraph?",
    answer: "A topic sentence introduces the main idea of a paragraph and tells the reader what the paragraph will be about. It usually appears at the beginning of the paragraph and helps organize the writer's thoughts while guiding the reader's understanding.",
    matiere: "IELTS Academic",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "When describing a graph or chart in IELTS Task 1, what key features should you include in your overview paragraph?",
    answer: "In your overview paragraph, you should identify 2-3 major trends, main comparisons, or significant features without repeating specific data. This might include the highest/lowest values, general trends over time, notable exceptions, or significant differences between categories. The overview provides a 'big picture' summary of what the data shows.",
    matiere: "IELTS Academic",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What are 'linking words' and why are they important in academic writing?",
    answer: "Linking words (also called connectives or transitions) are words or phrases like 'however,' 'therefore,' 'furthermore,' and 'in contrast' that show relationships between ideas. They are important in academic writing because they improve cohesion and coherence, help guide the reader through your argument, demonstrate logical thinking, and make your writing more sophisticated and easier to follow.",
    matiere: "IELTS Academic",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What is the difference between 'skimming' and 'scanning' when reading academic texts?",
    answer: "Skimming involves quickly reading a text to get a general overview of the main ideas and structure. You might read the introduction, conclusion, first sentences of paragraphs, and look at headings. Scanning is searching for specific information (like dates, names, or particular facts) without reading the entire text closely. Both are important reading strategies for the IELTS exam to help manage time effectively.",
    matiere: "IELTS Academic",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What does it mean to 'paraphrase' in academic writing, and why is it important for the IELTS test?",
    answer: "Paraphrasing means restating information or ideas in your own words while maintaining the original meaning. In academic writing, it demonstrates understanding of source material and helps avoid plagiarism. For IELTS, paraphrasing is essential because it shows language flexibility, helps you avoid copying from question prompts or reading passages, and demonstrates a wider vocabulary and grammatical range—all of which contribute to higher band scores.",
    matiere: "IELTS Academic",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const AcademicFacileIELTSFlashcards = academicFacileIELTSFlashcards;
