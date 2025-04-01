
export type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage';
export type NiveauType = 'premiere' | 'terminale' | 'intermediaire' | 'avance';

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  matiere: string;
  niveau: NiveauType;
  image?: string;
  userCorrectCount?: number;
  userWrongCount?: number;
  diplome?: DiplomeType;
}

export interface AnsweredQuestion {
  flashcard: Flashcard;
  isCorrect: boolean;
}

export interface TrainingResult {
  id: string;
  date: string;
  matiere: string;
  niveau: NiveauType;
  nombreQuestions: number;
  score: number;
  pourcentage: number;
  note: number;
  questions?: AnsweredQuestion[];
  diplome?: DiplomeType;
}

export type NombreQuestions = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 200;
