
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const vocabulaireAvanceToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the meaning of 'amortization'?",
    answer: "The process of gradually writing off the initial cost of an asset or paying off a debt over a period",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'arbitration'?",
    answer: "The use of an independent person or body to settle a dispute without resorting to court proceedings",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'diversification'?",
    answer: "The process of a company enlarging or varying its range of products or field of operation",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'due diligence'?",
    answer: "A comprehensive appraisal of a business undertaken by a prospective buyer to establish its assets and liabilities and evaluate its commercial potential",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'equity'?",
    answer: "The value of shares issued by a company; the value of a property after any mortgage or other liability has been subtracted",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'fiscal'?",
    answer: "Relating to government revenue, especially taxes",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'leverage'?",
    answer: "The use of borrowed capital to increase the potential return of an investment; also used as a verb meaning to use something to maximum advantage",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'hostile takeover'?",
    answer: "The acquisition of a company, despite opposition from its management, achieved by directly approaching its shareholders",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'indemnity'?",
    answer: "Security or protection against a loss or other financial burden; compensation for damage or loss",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'liquidity'?",
    answer: "The availability of liquid assets to a market or company; the ease with which an asset can be converted into cash",
    matiere: "TOEIC Vocabulary",
    niveau: "avance",
    diplome: "toeic"
  },
];
