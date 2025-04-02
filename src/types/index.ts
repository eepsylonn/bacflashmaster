
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
  id: string;
  date: string;
  matiere: string;
  niveau: NiveauType;
  nombreQuestions: number;
  score: number;
  pourcentage: number;
  note: number;
  questions: AnsweredQuestion[];
  diplome: DiplomeType;
}

export interface UserPreferences {
  selectedSpecialities: string[];
  preferredNiveau?: NiveauType;
}

// Add the BacSpecialite type that's referenced in some components
export type BacSpecialite = 
  | 'mathematiques'
  | 'physique-chimie'
  | 'svt'
  | 'ses'
  | 'hggsp'
  | 'llce'
  | 'humanites'
  | 'arts'
  | 'nsi'
  | 'litterature-hda';
