
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const generalIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "How should you effectively structure a complaint letter in IELTS General Training Task 1, and what language features should you include to convey dissatisfaction while maintaining appropriate formality?",
    answer: "Structure a complaint letter with: a formal introduction clearly stating you're writing to complain and identifying the specific issue; 1-2 body paragraphs chronologically detailing the problem with specific dates, locations, and relevant information; a paragraph explaining the negative impact or inconvenience caused; and a final paragraph explicitly stating your expected resolution (refund, replacement, apology, etc.). Use appropriate complaint language including: graduated strength adjectives (disappointed, concerned, appalled); passive constructions to emphasize problems rather than blame ('I was informed incorrectly' rather than 'You told me the wrong information'); polite but firm modal verbs ('I would expect,' 'this matter should be resolved'); formal negative evaluative phrases ('falls well below acceptable standards,' 'entirely unsatisfactory'); and conditionals for consequences ('If this matter is not resolved, I will be forced to...'). Maintain formality throughout while clearly expressing dissatisfaction and specific expectations.",
    matiere: "IELTS General Training",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What strategies can you use to effectively approach multiple-text reading tasks in IELTS General Training Section 3, particularly when texts present contrasting viewpoints on the same topic?",
    answer: "Begin by quickly surveying all texts to identify their focus, relationship to each other, and general perspective before detailed reading. Create a mental framework of how the texts relate—complementary, contrasting, or developing different aspects of the same topic. For contrasting viewpoints, construct a simple comparative table mentally, noting each author's position on key issues as you read. Identify each text's purpose (inform, persuade, instruct) and how this influences content presentation. Pay attention to tone and authorial stance through evaluative language, recognizing that contrasting viewpoints often use different terminology for the same concepts. When answering questions, carefully note which text(s) each question refers to, and maintain clear separation between information sources to avoid confusion. For synthesis questions requiring information from multiple texts, identify connections and contradictions between sources while recognizing the distinct context of each. Be particularly attentive to qualification and nuance in arguments that might initially appear completely opposed but contain areas of agreement.",
    matiere: "IELTS General Training",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Explain how to effectively transform information from workplace texts into summary form for IELTS General Training Reading, particularly with reference to workplace policies, procedures, or regulations",
    answer: "Begin by identifying the text's organizational structure—typically hierarchical in workplace documents with main requirements and subordinate details. Distinguish between critical requirements (obligations, prohibitions, deadlines) and supporting information (rationales, examples, background). Look for imperative verbs, modal verbs of obligation (must, should, required to), and conditional structures that often signal key procedural elements. Create a mental hierarchy of information importance, focusing on actions required, conditions under which they apply, and consequences of non-compliance. When answering summary completion questions, first read the summary to understand its organizational logic, which may differ from the original text. Anticipate paraphrasing between original text and summary—particularly transformation between active/passive voice, verb/noun forms, and specialized/general vocabulary. Be precise with procedural information, as small differences in conditionals or qualifiers can significantly alter meaning. When selecting words from a list, eliminate options that change the meaning of procedures or create logical inconsistencies with workplace requirements stated elsewhere in the text.",
    matiere: "IELTS General Training",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "How can you effectively analyze visual information in IELTS General Training Reading Section 1, particularly when dealing with complex forms, diagrams, or instructional graphics?",
    answer: "First identify the visual's purpose (application form, instructional diagram, process illustration) and overall organization (chronological, hierarchical, categorized). For forms, distinguish between sections requiring selection versus written information, noting any conditional elements where certain sections should only be completed under specific circumstances. With instructional graphics, identify the sequence logic (numerical steps, arrows, or implicit ordering) and differentiate between required and optional elements. For diagrams with labels, establish the relationship between textual and visual elements, recognizing that questions often test understanding of these connections. Pay particular attention to visual cues indicating warnings, priorities, or special conditions (highlighted text, exclamation marks, bold formatting). When answering questions, switch between textual and visual information systematically rather than focusing exclusively on one mode. For matching or completion tasks, ensure your answers maintain grammatical consistency with the surrounding text and logical consistency with the visual information. Be especially attentive to qualifiers in instructions (minimum/maximum values, time constraints, exceptions) that may be represented visually rather than stated explicitly.",
    matiere: "IELTS General Training",
    niveau: "intermediaire",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What approaches should you use when writing a letter of request in IELTS General Training Task 1 to maximize the likelihood of a favorable response while maintaining appropriate politeness strategies?",
    answer: "Structure your request letter with: an introduction clearly stating your purpose; background information establishing context for your request; the core request presented logically with necessary details; and a conclusion restating your request while expressing appreciation. Employ strategic politeness features including: appropriate openings and closings based on relationship with recipient; pre-request statements establishing grounds ('I am writing to inquire about...'); indirect question forms ('I would like to know whether...'); modal verbs of possibility ('would it be possible to...'); appreciation expressions ('I would be grateful if...'); acknowledgment of imposition ('I understand this may cause inconvenience...'); and offering reciprocity where appropriate ('I would be happy to provide further information...'). Give justifications for your request without being demanding. Balance brevity with sufficient detail for the recipient to respond effectively. Anticipate potential obstacles and address them preemptively. Conclude with clear action requests specifying what you want the recipient to do and by when, while maintaining politeness through conditional forms and expressing confidence in a positive response.",
    matiere: "IELTS General Training",
    niveau: "intermediaire",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const GeneralIntermediaireIELTSFlashcards = generalIntermediaireIELTSFlashcards;
