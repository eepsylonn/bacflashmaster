
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  matiere: string;
  niveau: 'premiere' | 'terminale';
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
}

export type NombreQuestions = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 200;
