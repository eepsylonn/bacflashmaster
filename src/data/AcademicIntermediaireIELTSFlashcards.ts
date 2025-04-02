
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const academicIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Explain how to effectively approach a 'problem and solution' essay structure in IELTS Writing Task 2",
    answer: "For a problem-solution essay, begin with an introduction that contextualizes the issue and states your overall approach. In the body, devote 1-2 paragraphs to analyzing the causes and effects of the problem with specific examples. Then dedicate 1-2 paragraphs to evaluating potential solutions, assessing their feasibility, advantages, and limitations. Maintain clear logical connections between problems and corresponding solutions. Conclude by summarizing the main problems and most promising solutions, possibly indicating which approach you consider most effective. Throughout, use appropriate problem-solution language (e.g., 'stems from,' 'contributes to,' 'address this issue,' 'implement measures') and ensure solutions are proportionate to the problems identified.",
    matiere: "IELTS Academic",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What approaches can you use to identify the writer's purpose and attitude in an IELTS Reading passage?",
    answer: "To identify the writer's purpose and attitude, analyze their tone through evaluative language (positive/negative adjectives and adverbs). Look for modal verbs indicating certainty or tentativeness (must, might, could). Examine reporting verbs when referencing others' views (claims, suggests, demonstrates). Consider the overall structure—what receives most emphasis? Identify if the writer presents balanced viewpoints or favors one position. Note rhetorical questions that may signal skepticism. Pay attention to concessive clauses (although, despite) that often reveal the writer's true position after acknowledging opposing views. Finally, distinguish between sections presenting factual information versus those containing commentary or evaluation.",
    matiere: "IELTS Academic",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "How can you effectively incorporate data into your Task 1 response for a complex chart or graph with multiple data sets?",
    answer: "Begin by selecting only the most significant data points rather than describing everything. Group related information logically (by time periods, categories, or trends). Use precise language to describe proportions (approximately one-third, just over half) and trends (increased steadily, fluctuated slightly). Employ data ranges rather than listing every figure (between 15-20%). Make meaningful comparisons between data sets using appropriate comparative structures. Integrate specific figures as evidence supporting your identified trends, not as the focus. Balance specific data with broader pattern descriptions. Convert absolute numbers to percentages when appropriate to clarify relationships. Use approximation language for complex figures (nearly 24.8 million). Ensure data references support your overview rather than appearing as disconnected facts.",
    matiere: "IELTS Academic",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Explain the concept of hedging language in academic writing and provide examples of how to use it appropriately",
    answer: "Hedging language expresses appropriate caution and precision in academic writing, avoiding sweeping claims or absolute statements. Examples include using modal verbs (may, might, could), qualifiers (somewhat, relatively, generally), frequency adverbs (often, usually, typically), limiting phrases (in most cases, under certain conditions), approximators (approximately, around, about), and tentative verbs (suggest, indicate, appear). Appropriate hedging demonstrates academic sophistication by acknowledging limitations and alternatives while presenting claims with suitable precision. However, excessive hedging can weaken arguments, so balance is essential. For instance, instead of 'This proves that exercise cures depression,' write 'Research suggests that regular exercise may significantly reduce symptoms of depression in many patients.'",
    matiere: "IELTS Academic",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What strategies can you use to approach multiple-choice questions in the IELTS Reading section?",
    answer: "First, read the question carefully to understand exactly what information you're looking for. Preview all options before searching the text to understand the potential answers. Identify keywords in both the question and options, but be aware of synonyms and paraphrasing in the text. For each option, find the relevant passage and analyze if it matches exactly or is a distortion of the text. Eliminate obviously incorrect options first. Be cautious of options that contain true statements from the text but don't answer the specific question. Watch for qualifiers (always, never, all, some) that might make an otherwise correct statement wrong. Pay attention to the writer's attitude rather than just factual content when questions ask about opinion or purpose. After selecting your answer, quickly verify it against the text again to check for misinterpretation.",
    matiere: "IELTS Academic",
    niveau: "intermediaire",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const AcademicIntermediaireIELTSFlashcards = academicIntermediaireIELTSFlashcards;
