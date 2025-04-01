
export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  matiere: string;
  niveau: 'premiere' | 'terminale';
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
}

export type NombreQuestions = 5 | 20 | 50 | 100 | 200;
