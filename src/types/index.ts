export type DiplomeType = 'toeic' | 'toefl' | 'tage-mage' | 'ielts' | 'cambridge' | 'gmat' | 'brevet' | 'baccalaureat';

export type NiveauType = 'facile' | 'intermediaire' | 'avance' | 'both' | 'troisieme' | 'quatrieme' | 'premiere' | 'terminale';

export type NombreQuestions = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 | 200;

export interface Flashcard {
  id: string;
  question: string;
  answer: string;
  explication?: string;
  niveau: string;
  matiere: string;
  diplome?: string;
  text?: string;
  options?: string[];
  type?: 'mcq' | 'text' | 'audio';
  audio?: string;
}

export interface AnsweredQuestion {
  flashcard: Flashcard;
  isCorrect: boolean;
  userAnswer?: string;
}

export interface TrainingResult {
  id?: string;
  date: Date;
  matiere: string;
  niveau: string;
  diplome: string;
  totalQuestions: number;
  correctAnswers: number;
  pourcentage: number;
  nombreQuestions?: number;
  score?: number;
  note?: number;
  questions?: Flashcard[];
}

export interface UserPreferences {
  selectedSpecialities: string[];
  preferredNiveau?: NiveauType;
}

// Updated BacSpecialite type to match the actual values used in components
export type BacSpecialite = 
  | 'Mathématiques'
  | 'Physique-Chimie'
  | 'SVT'
  | 'SES'
  | 'HGGSP'
  | 'Humanités-Littérature-Philosophie'
  | 'Arts'
  | 'NSI'
  | 'Mathématiques expertes'
  | 'Mathématiques complémentaires'
  | 'LVC'
  | 'Latin/Grec';
