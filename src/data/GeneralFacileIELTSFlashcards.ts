
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const generalFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What are the essential elements you should include when writing a formal letter for IELTS General Training Task 1?",
    answer: "A formal letter should include: your address in the top right (but not your name), the recipient's address on the left below yours, the date, a formal greeting (Dear Sir/Madam or Dear Mr/Mrs/Dr [Name]), a clear introduction stating your purpose, body paragraphs with your main points, a conclusion requesting action or summarizing, a formal closing (Yours faithfully if you don't know the name, Yours sincerely if you do), and your full name (and signature in a real letter). The tone should remain formal throughout, using proper grammar and avoiding contractions or colloquial expressions.",
    matiere: "IELTS General Training",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What strategies can you use to match headings to paragraphs in the IELTS General Training Reading section?",
    answer: "First, quickly skim all paragraphs to understand the overall text structure. Read all headings to identify key themes. For each paragraph, identify the main idea or topic sentence (usually at the beginning or end). Look for synonyms or paraphrases between the heading and paragraph rather than expecting exact wording. Be careful of paragraphs that mention multiple topics but focus on the central theme. Eliminate headings that are clearly wrong for each paragraph to narrow your choices. Check your answers by ensuring each selected heading accurately represents the paragraph's main point rather than just mentioning a detail from it.",
    matiere: "IELTS General Training",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "How should you approach the 'True/False/Not Given' question type in the IELTS General Training Reading test?",
    answer: "Read the statement carefully and understand exactly what it claims. Locate the relevant section in the text by scanning for keywords. Compare the statement precisely with what the text says—True means the statement matches the text, False means it contradicts the text, and Not Given means the information isn't mentioned at all. Be careful not to use your own knowledge; base your answer solely on the text. Watch for qualifying words (all, some, never, always) that might change meaning. Don't overthink—if you've thoroughly checked the relevant sections and the information isn't there, choose Not Given. Don't assume information that would make the statement logical but isn't explicitly stated in the text.",
    matiere: "IELTS General Training",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What is the difference between a formal and informal letter in IELTS General Training Writing Task 1?",
    answer: "Formal letters (to officials, employers, organizations) use formal language without contractions, slang or idioms. They include proper addresses, Dear Sir/Madam or Dear Mr/Ms [Name], and close with Yours faithfully/sincerely. The content is directly stated with clear paragraphing and formal linking words (furthermore, consequently). Informal letters (to friends/family) use contractions (I'm, don't), casual expressions, and conversational tone. They typically start with Dear [First name] and close with Best wishes or Love. They may include personal questions, exclamations, and direct references to shared experiences. Semi-formal letters (to people you don't know well but not in official capacity) blend elements of both, maintaining politeness while being less rigid than formal correspondence.",
    matiere: "IELTS General Training",
    niveau: "facile",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What are 'signpost words' and how do they help you in the IELTS General Training Reading section?",
    answer: "Signpost words (also called discourse markers or transition signals) are words or phrases that indicate the organization and flow of ideas in a text. Examples include 'firstly/secondly', 'however', 'consequently', 'in contrast', and 'for example'. They help in reading comprehension by signaling relationships between ideas (addition, contrast, cause-effect, examples, sequence), indicating the writer's purpose for different sections, and highlighting important information. When answering questions, these words can help you quickly locate specific information, understand the text structure, and follow the development of arguments, making your reading more efficient, especially under time constraints.",
    matiere: "IELTS General Training",
    niveau: "facile",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const GeneralFacileIELTSFlashcards = generalFacileIELTSFlashcards;
