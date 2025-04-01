
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  matiere: string;
  niveau: 'premiere' | 'terminale';
  diplome?: 'baccalaureat' | 'toeic' | 'tage-mage';
}

export interface AnsweredQuestion {
  flashcard: Flashcard;
  isCorrect: boolean;
}

export interface TrainingResult {
  id: string;
  date: string;
  matiere: string;
  niveau: 'premiere' | 'terminale';
  nombreQuestions: number;
  score: number;
  pourcentage: number;
  note: number;
  questions?: AnsweredQuestion[];
  diplome?: 'baccalaureat' | 'toeic' | 'tage-mage';
}

export type NombreQuestions = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 200;

export type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage' | undefined;
