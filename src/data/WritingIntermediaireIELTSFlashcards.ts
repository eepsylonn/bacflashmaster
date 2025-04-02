
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "The graph below shows average carbon dioxide (CO2) emissions per person in the United Kingdom, Sweden, Italy and Portugal between 1967 and 2007. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Begin with an introduction paraphrasing the graph description. Write an overview paragraph identifying overall trends and country rankings. Develop 2-3 body paragraphs analyzing specific time periods and comparing multiple countries simultaneously. Include precise data points, proportional language, and appropriate trend vocabulary. Conclude with a summary of the most significant patterns without repetition.",
    matiere: "IELTS Writing",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Some people believe that universities should focus on providing academic skills, while others think they should prepare students for the demands of the job market. Discuss both views and give your opinion.",
    answer: "Structure your essay with: an introduction contextualizing the debate and presenting a nuanced thesis; a paragraph on academic focus (with concessions to its limitations); a paragraph on employment preparation (acknowledging potential drawbacks); a paragraph developing your own position that synthesizes elements from both perspectives; and a conclusion. Use academic vocabulary, complex sentence structures, and develop arguments with specific examples from diverse educational contexts.",
    matiere: "IELTS Writing",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The diagrams below show the existing ground floor plan of a house and a proposed plan for remodeling the ground floor. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Begin with an introduction describing what the diagrams show. Write an overview identifying the main changes in space utilization and layout. Develop 2-3 body paragraphs analyzing: 1) structural changes (walls removed/added), 2) room function modifications, and 3) changes to accessibility/flow. Use precise spatial vocabulary, comparative structures, and passive constructions appropriately. Organize comparisons methodically, either by room or by type of change.",
    matiere: "IELTS Writing",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The widespread use of digital technology has transformed many aspects of society. To what extent do you think this has had a positive impact on individuals and communities?",
    answer: "Structure your response with an introduction acknowledging the issue's complexity and stating your qualified position. Develop two paragraphs on positive impacts (individual benefits and community/social advantages) with specific examples and evidence. Write one paragraph addressing significant negative consequences while evaluating their relative importance. Conclude by synthesizing your arguments and offering a balanced assessment. Use evaluative language, concession structures, and precise technological terminology throughout.",
    matiere: "IELTS Writing",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The charts below give information about travel to and from the UK by UK residents and overseas residents from 1979 to 1999. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Begin with an introduction paraphrasing what the charts show. Write an overview paragraph identifying long-term trends and the relationship between the data sets. Develop body paragraphs analyzing: 1) trends in UK residents' travel, 2) trends in overseas visitors, and 3) comparative analysis of the relationship between the two patterns. Use appropriate range of cohesive devices, accurate data comparisons, and demonstrate understanding of proportional changes versus absolute figures.",
    matiere: "IELTS Writing",
    niveau: "intermediaire",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const WritingIntermediaireIELTSFlashcards = writingIntermediaireIELTSFlashcards;
