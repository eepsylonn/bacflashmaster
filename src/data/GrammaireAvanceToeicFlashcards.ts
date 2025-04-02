
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const grammaireAvanceToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Complete the sentence with the correct subjunctive form: 'The board insists that the new regulation ____ immediately.'",
    answer: "be implemented",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct complex conditional form: 'Had the investments been diversified more strategically, the company ____ such significant losses during the economic downturn.'",
    answer: "would not have suffered",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct inverted conditional structure: '____ we to receive the funding, the project would proceed as scheduled in the third quarter.'",
    answer: "Were",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Identify the correct use of parallelism: 'The new strategy focuses on ____ customer retention, ____ operational efficiency, and ____ market expansion.'",
    answer: "improving, enhancing, pursuing",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct gerund or infinitive structure: 'The department acknowledges ____ the deadline, but requests additional time ____ the comprehensive analysis.'",
    answer: "missing, to complete",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct cleft sentence structure: '____ the increasing competition in emerging markets ____ necessitated our strategic pivot.'",
    answer: "It is, that has",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct emphatic structure: 'Only ____ we implement the advanced security protocols ____ prevent such breaches in the future.'",
    answer: "by, can we",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Choose the correct past modal structure for speculation: 'The discrepancy in the financial reports ____ by an accounting error or deliberate manipulation.'",
    answer: "could have been caused",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Complete with the correct participle clause: '____ with the regulatory requirements, the company has avoided potential penalties while enhancing its market reputation.'",
    answer: "Having fully complied",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Identify the correct sentence containing a reduced relative clause: 'The proposal ____ yesterday addresses all the concerns raised during the preliminary consultation.'",
    answer: "submitted",
    matiere: "TOEIC Grammar",
    niveau: "avance",
    diplome: "toeic"
  },
];
