
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "The chart below shows the amount of leisure time enjoyed by men and women of different employment status. Write a report for a university lecturer describing the information shown below.",
    answer: "Structure your response with an introduction (paraphrase the chart description), overview (identify 2-3 main trends), 2-3 body paragraphs with specific data, and a brief summary. Compare leisure time between genders and employment categories, using specific figures. Include appropriate linking words and a variety of sentence structures.",
    matiere: "IELTS Writing",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Some people think that parents should teach children how to be good members of society. Others, however, believe that school is the place to learn this. Discuss both these views and give your own opinion.",
    answer: "Write a 4-paragraph essay: introduction (paraphrase topic, thesis statement), paragraph supporting parents' role (2-3 points with examples), paragraph supporting schools' role (2-3 points with examples), and conclusion with your balanced opinion. Use appropriate connectives, varied vocabulary, and clear topic sentences.",
    matiere: "IELTS Writing",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The pie charts below show the main reasons for migration to and from the UK in 2007. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Begin with an introduction paraphrasing what the charts show. Include an overview paragraph identifying the main reasons for immigration and emigration. Write 2-3 body paragraphs comparing specific data points between the two charts. Conclude with a summary sentence. Include specific percentages and proportional language throughout.",
    matiere: "IELTS Writing",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "In many countries, the proportion of older people is steadily increasing. What problems will this cause for individuals and society? Suggest some measures that could be taken to reduce the impact of an aging population.",
    answer: "Structure your essay with an introduction (background and thesis), two body paragraphs on problems (individual problems and societal problems with examples), one body paragraph with solutions (2-3 practical measures), and a conclusion. Use cohesive devices, specific examples, and appropriate academic vocabulary.",
    matiere: "IELTS Writing",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The diagram below shows the production of cement and concrete. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Write a 4-paragraph response: introduction (paraphrase what the diagram shows), overview (summarize the main stages), detailed description of cement production, and detailed description of concrete production. Use passive voice, sequencing language, and technical vocabulary appropriate to the process described.",
    matiere: "IELTS Writing",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const WritingFacileIELTSFlashcards = writingFacileIELTSFlashcards;
