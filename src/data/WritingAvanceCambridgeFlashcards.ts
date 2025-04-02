
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingAvanceCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Write an essay discussing whether governments should invest in space exploration when there are still unsolved problems on Earth. Present a nuanced argument considering multiple perspectives. (280-320 words)",
    answer: "Your essay should include: a sophisticated introduction establishing the debate's complexity, examination of multiple stakeholder perspectives (scientists, economists, humanitarians), discussion of opportunity costs vs. technological benefits, consideration of short-term vs. long-term thinking, a nuanced conclusion that acknowledges complexity. Use formal academic language, complex sentence structures, precise vocabulary, cohesive devices, and well-developed argumentation.",
    matiere: "Writing",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a proposal for your city council suggesting a solution to urban congestion and pollution. Include data, analysis of options, and detailed implementation recommendations. (280-320 words)",
    answer: "Your proposal should include: executive summary, background section with supporting data, analysis of multiple solution options (public transport expansion, congestion charging, cycling infrastructure), evaluation criteria (cost, feasibility, impact), detailed implementation plan with phases, anticipated challenges and mitigations, cost-benefit analysis. Use formal register, passive constructions where appropriate, conditional language for recommendations, accurate data presentation, and persuasive yet objective tone.",
    matiere: "Writing",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a critical review of a book or academic article related to your field of study for a university publication. Evaluate its methodology, evidence, and conclusions. (280-320 words)",
    answer: "Your review should include: contextualizing introduction (author credentials, publication details, field relevance), comprehensive but concise summary of key arguments, critical analysis of methodology and evidence quality, evaluation of theoretical framework, discussion of strengths and limitations, assessment of contribution to the field, balanced conclusion. Use academic register, critical evaluative language, specialized terminology appropriate to the field, and evidence-based judgments.",
    matiere: "Writing",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write a report analyzing the effectiveness of remote work policies during the pandemic for a multinational corporation, including recommendations for future hybrid work models. (280-320 words)",
    answer: "Your report should include: clear executive summary, methodological section explaining data sources, analysis of productivity metrics before/during remote work, examination of employee satisfaction and wellbeing data, discussion of technological and management challenges, sector-specific considerations, detailed recommendations with implementation timeline, appendices referencing relevant research. Use professional business language, data visualization references, objective analytical tone, and practical, evidence-based recommendations.",
    matiere: "Writing",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Write an opinion article for an international news publication about the ethical implications of artificial intelligence in decision-making processes that affect human lives. (280-320 words)",
    answer: "Your article should include: a compelling hook illustrating the real-world impact, historical context of AI development, analysis of key ethical concerns (bias, transparency, accountability, job displacement), examination of competing philosophical frameworks, balanced discussion of benefits and risks, consideration of regulatory approaches, thought-provoking conclusion. Use sophisticated vocabulary, varied sentence structures, rhetorical devices, authoritative tone balanced with accessibility, and engagement with complex ethical concepts.",
    matiere: "Writing",
    niveau: "avance",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const WritingAvanceCambridgeFlashcards = writingAvanceCambridgeFlashcards;
