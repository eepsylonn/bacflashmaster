
export type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage' | 'toefl' | 'ielts' | 'cambridge' | 'gmat' | 'brevet';
export type NiveauType = 'premiere' | 'terminale' | 'facile' | 'intermediaire' | 'avance' | 'sixieme' | 'cinquieme' | 'quatrieme' | 'troisieme' | 'both';

export type BacSpecialite = 
  | 'Mathématiques'
  | 'Physique-Chimie'
  | 'SVT'
  | 'SES'
  | 'HGGSP'
  | 'Humanités-Littérature-Philosophie'
  | 'NSI'
  | 'Arts'
  | 'Mathématiques expertes'
  | 'Mathématiques complémentaires'
  | 'LVC'
  | 'Latin/Grec';

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  matiere: string;
  niveau: NiveauType;
  diplome?: DiplomeType;
  text?: string;
  audio?: string;
  options?: string[];
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
