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
}
