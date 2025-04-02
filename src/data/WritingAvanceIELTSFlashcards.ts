
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingAvanceIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "The diagrams below show the changes that have taken place at West Park Secondary School since its construction in 1950. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Construct a cohesive response with: a precise introduction contextualizing the time span; a sophisticated overview identifying patterns of expansion, repurposing, and environmental modification; detailed body paragraphs analyzing chronological development with attention to spatial relationships, functional transformations, and proportional changes; and a conclusion synthesizing the evolutionary trajectory. Employ varied sentence structures, precise spatial vocabulary, and complex passive constructions. Demonstrate insight into educational facility development by connecting physical changes to implicit pedagogical or social shifts, while maintaining objectivity appropriate to task 1.",
    matiere: "IELTS Writing",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Technological solutions alone cannot address the challenges of environmental sustainability. The most effective approach requires fundamental changes in human values and behavior. To what extent do you agree or disagree?",
    answer: "Develop a sophisticated response with: an introduction establishing the multidimensional nature of sustainability challenges and a nuanced thesis acknowledging the interdependence of technological and behavioral factors; body paragraphs examining the limitations of technological determinism (with specific case studies), the necessity but insufficiency of value shifts (with analysis of implementation barriers), and the potential for synergistic approaches integrating both dimensions; and a conclusion advancing the discourse beyond binary positioning. Demonstrate conceptual sophistication through qualified claims, concession structures, and precise environmental terminology while engaging with multi-causal thinking and systems perspective.",
    matiere: "IELTS Writing",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The table and charts below give information about population growth and life expectancy in different world regions. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Construct an analytically sophisticated response with: an introduction precisely contextualizing the demographic parameters; an overview identifying correlational patterns between population dynamics and life expectancy across regions; body paragraphs systematically analyzing regional disparities, temporal trends, and the relationship between multiple variables; and a conclusion synthesizing the demographic transition implications. Demonstrate statistical literacy through appropriate interpretation of proportional versus absolute changes, judicious selection of significant data points, and accurate representation of correlational patterns without implying causation. Employ complex comparative structures, precise demographic terminology, and varied sentence forms to convey quantitative relationships clearly.",
    matiere: "IELTS Writing",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "In many countries, government funding for the arts is being reduced, and alternative forms of support are growing in importance. Discuss the advantages and disadvantages of this trend.",
    answer: "Develop a conceptually sophisticated essay with: an introduction contextualizing the shift in arts funding paradigms with reference to broader socioeconomic factors; body paragraphs examining the advantages (market responsiveness, diversification of support, innovation incentives) and disadvantages (commercialization pressures, access inequity, volatility of support) with nuanced analysis of stakeholder impacts; a paragraph exploring the differentiated effects across artistic domains and societal contexts; and a conclusion synthesizing the complex trade-offs involved. Demonstrate disciplinary understanding through precise arts policy terminology, balanced evaluation of evidence, and consideration of both intended and unintended consequences across different timeframes and cultural contexts.",
    matiere: "IELTS Writing",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "The diagrams below show the life cycle of a species of salmon and the global capture and aquaculture production of salmon from 1980 to 2010. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    answer: "Construct an integrated analysis with: an introduction establishing the relationship between the biological cycle and production trends; an overview identifying the contrasting trajectories of wild capture versus aquaculture production in relation to the salmon life cycle; body paragraphs analyzing the biological cycle with attention to environmental requirements at each stage, followed by detailed examination of production trends with precise quantification of relative and absolute changes; and a conclusion synthesizing the ecological and economic implications. Employ sophisticated biological terminology, precise transitional phrases between the disparate data sets, and demonstrate conceptual understanding of the relationship between aquaculture development and natural resource constraints without speculation beyond the data provided.",
    matiere: "IELTS Writing",
    niveau: "avance",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const WritingAvanceIELTSFlashcards = writingAvanceIELTSFlashcards;
