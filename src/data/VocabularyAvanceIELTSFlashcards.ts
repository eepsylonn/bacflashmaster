
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabularyAvanceIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Explain the nuanced difference between 'ambiguous', 'equivocal', and 'vague' with examples",
    answer: "'Ambiguous' refers to something open to multiple interpretations due to inherent complexity (e.g., 'The ambiguous ending of the film sparked debate'). 'Equivocal' suggests deliberate noncommittal language to avoid taking a clear position (e.g., 'His equivocal response avoided addressing the accusation directly'). 'Vague' indicates a lack of necessary detail or precision (e.g., 'The report contained vague recommendations without specific implementation steps').",
    matiere: "IELTS Vocabulary",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'paradigm shift' and provide an example from a scientific context",
    answer: "A paradigm shift refers to a fundamental change in approach, underlying assumptions, or way of thinking that replaces the previous framework. In science, the transition from Newtonian physics to Einstein's theory of relativity represents a classic paradigm shift—the fundamental understanding of space, time, and gravity was transformed, requiring scientists to abandon long-held assumptions about the absoluteness of time and space in favor of a framework where these dimensions are relative to the observer's frame of reference.",
    matiere: "IELTS Vocabulary",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Explain the concept of 'cognitive dissonance' and its relevance in social psychology",
    answer: "Cognitive dissonance refers to the mental discomfort experienced when simultaneously holding contradictory beliefs, values, or attitudes, or when new information conflicts with existing beliefs. In social psychology, it explains how individuals strive for internal consistency and may change attitudes, justify behaviors, or selectively perceive information to reduce this psychological tension. Its relevance extends to understanding rationalization of decisions, attitude change following counter-attitudinal behavior, and resistance to persuasion—providing insight into how people maintain psychological coherence despite inconsistencies.",
    matiere: "IELTS Vocabulary",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "What does the term 'hegemony' mean in political discourse, and how does it differ from simple dominance?",
    answer: "Hegemony refers to the indirect dominance or leadership of one group over others through cultural and ideological means rather than direct force. Unlike simple dominance that relies primarily on coercion or military power, hegemony involves the 'consent' of subordinated groups who accept the dominant group's worldview, values, and leadership as natural or common sense. In political discourse, it describes how power is maintained through cultural institutions, media, education, and other means that normalize particular perspectives while marginalizing alternatives—creating power structures that appear consensual rather than imposed.",
    matiere: "IELTS Vocabulary",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Distinguish between 'ephemeral', 'transient', and 'evanescent' with appropriate contexts for each",
    answer: "'Ephemeral' describes something lasting for a very short time, often with an emphasis on its inherent brevity (e.g., 'ephemeral art installations designed to decompose naturally'). 'Transient' focuses on something passing through quickly rather than staying, suggesting movement or transition (e.g., 'the transient population of a tourist destination changes seasonally'). 'Evanescent' emphasizes the quality of quickly fading away or vanishing, often with poetic connotations of delicacy (e.g., 'the evanescent beauty of morning mist over the lake'). While all three describe temporary phenomena, they differ in emphasis—inherent brevity, passage/movement, or the process of disappearing.",
    matiere: "IELTS Vocabulary",
    niveau: "avance",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const VocabularyAvanceIELTSFlashcards = vocabularyAvanceIELTSFlashcards;
