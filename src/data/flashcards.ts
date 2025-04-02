
import { Flashcard, NiveauType, DiplomeType, NombreQuestions } from '@/types';
import { vocabularyFacileIELTSFlashcards } from './VocabularyFacileIELTSFlashcards';
import { vocabularyIntermediaireIELTSFlashcards } from './VocabularyIntermediaireIELTSFlashcards';
import { vocabularyAvanceIELTSFlashcards } from './VocabularyAvanceIELTSFlashcards';
import { speakingFacileIELTSFlashcards } from './SpeakingFacileIELTSFlashcards';
import { speakingIntermediaireIELTSFlashcards } from './SpeakingIntermediaireIELTSFlashcards';
import { speakingAvanceIELTSFlashcards } from './SpeakingAvanceIELTSFlashcards';
import { writingFacileIELTSFlashcards } from './WritingFacileIELTSFlashcards';
import { writingAvanceIELTSFlashcards } from './WritingAvanceIELTSFlashcards';
import { academicFacileIELTSFlashcards } from './AcademicFacileIELTSFlashcards';
import { academicIntermediaireIELTSFlashcards } from './AcademicIntermediaireIELTSFlashcards';
import { academicAvanceIELTSFlashcards } from './AcademicAvanceIELTSFlashcards';
import { readingFacileIELTSFlashcards } from './ReadingFacileIELTSFlashcards';
import { readingIntermediaireIELTSFlashcards } from './ReadingIntermediaireIELTSFlashcards';
import { readingAvanceIELTSFlashcards } from './ReadingAvanceIELTSFlashcards';

import { vocabularyFacileCambridgeFlashcards } from './VocabularyFacileCambridgeFlashcards';
import { vocabularyIntermediaireCambridgeFlashcards } from './VocabularyIntermediaireCambridgeFlashcards';
import { vocabularyAvanceCambridgeFlashcards } from './VocabularyAvanceCambridgeFlashcards';
import { speakingFacileCambridgeFlashcards } from './SpeakingFacileCambridgeFlashcards';
import { speakingIntermediaireCambridgeFlashcards } from './SpeakingIntermediaireCambridgeFlashcards';
import { speakingAvanceCambridgeFlashcards } from './SpeakingAvanceCambridgeFlashcards';
import { writingFacileCambridgeFlashcards } from './WritingFacileCambridgeFlashcards';
import { writingAvanceCambridgeFlashcards } from './WritingAvanceCambridgeFlashcards';
import { grammaireFacileCambridgeFlashcards } from './GrammaireFacileCambridgeFlashcards';
import { grammaireIntermediaireCambridgeFlashcards } from './GrammaireIntermediaireCambridgeFlashcards';
import { grammaireAvanceCambridgeFlashcards } from './GrammaireAvanceCambridgeFlashcards';
import { readingUseFacileCambridgeFlashcards } from './ReadingUseFacileCambridgeFlashcards';
import { readingUseIntermediaireCambridgeFlashcards } from './ReadingUseIntermediaireCambridgeFlashcards';
import { readingUseAvanceCambridgeFlashcards } from './ReadingUseAvanceCambridgeFlashcards';

import { speakingFacileToeflFlashcards } from './SpeakingFacileToeflFlashcards';
import { speakingIntermediaireToeflFlashcards } from './SpeakingIntermediaireToeflFlashcards';
import { speakingAvanceToeflFlashcards } from './SpeakingAvanceToeflFlashcards';
import { readingFacileToeflFlashcards } from './ReadingFacileToeflFlashcards';
import { readingIntermediaireToeflFlashcards } from './ReadingIntermediaireToeflFlashcards';
import { readingAvanceToeflFlashcards } from './ReadingAvanceToeflFlashcards';
import { writingFacileToeflFlashcards } from './WritingFacileToeflFlashcards';
import { writingIntermediaireToeflFlashcards } from './WritingIntermediaireToeflFlashcards';
import { writingAvanceToeflFlashcards } from './WritingAvanceToeflFlashcards';
import { grammaireFacileToeflFlashcards } from './GrammaireFacileToeflFlashcards';
import { grammaireIntermediaireToeflFlashcards } from './GrammaireIntermediaireToeflFlashcards';
import { grammaireAvanceToeflFlashcards } from './GrammaireAvanceToeflFlashcards';
import { vocabularyFacileToeflFlashcards } from './VocabularyFacileToeflFlashcards';
import { vocabularyIntermediaireToeflFlashcards } from './VocabularyIntermediaireToeflFlashcards';
import { vocabularyAvanceToeflFlashcards } from './VocabularyAvanceToeflFlashcards';

import { mathematiquesCalculsTrioisemeBrevetFlashcards } from './MathematiquesCalculsTrioisemeBrevetFlashcards';

import { standardizeMatiere, standardizeNiveau } from '@/utils/standardization';

// Liste complète des flashcards
export const allFlashcards: Flashcard[] = [
  ...vocabularyFacileIELTSFlashcards,
  ...vocabularyIntermediaireIELTSFlashcards,
  ...vocabularyAvanceIELTSFlashcards,
  ...speakingFacileIELTSFlashcards,
  ...speakingIntermediaireIELTSFlashcards,
  ...speakingAvanceIELTSFlashcards,
  ...writingFacileIELTSFlashcards,
  ...writingAvanceIELTSFlashcards,
  ...academicFacileIELTSFlashcards,
  ...academicIntermediaireIELTSFlashcards,
  ...academicAvanceIELTSFlashcards,
  ...readingFacileIELTSFlashcards,
  ...readingIntermediaireIELTSFlashcards,
  ...readingAvanceIELTSFlashcards,
  
  ...vocabularyFacileCambridgeFlashcards,
  ...vocabularyIntermediaireCambridgeFlashcards,
  ...vocabularyAvanceCambridgeFlashcards,
  ...speakingFacileCambridgeFlashcards,
  ...speakingIntermediaireCambridgeFlashcards,
  ...speakingAvanceCambridgeFlashcards,
  ...writingFacileCambridgeFlashcards,
  ...writingAvanceCambridgeFlashcards,
  ...grammaireFacileCambridgeFlashcards,
  ...grammaireIntermediaireCambridgeFlashcards,
  ...grammaireAvanceCambridgeFlashcards,
  ...readingUseFacileCambridgeFlashcards,
  ...readingUseIntermediaireCambridgeFlashcards,
  ...readingUseAvanceCambridgeFlashcards,
  
  ...speakingFacileToeflFlashcards,
  ...speakingIntermediaireToeflFlashcards,
  ...speakingAvanceToeflFlashcards,
  ...readingFacileToeflFlashcards,
  ...readingIntermediaireToeflFlashcards,
  ...readingAvanceToeflFlashcards,
  ...writingFacileToeflFlashcards,
  ...writingIntermediaireToeflFlashcards,
  ...writingAvanceToeflFlashcards,
  ...grammaireFacileToeflFlashcards,
  ...grammaireIntermediaireToeflFlashcards,
  ...grammaireAvanceToeflFlashcards,
  ...vocabularyFacileToeflFlashcards,
  ...vocabularyIntermediaireToeflFlashcards,
  ...vocabularyAvanceToeflFlashcards,
  
  ...mathematiquesCalculsTrioisemeBrevetFlashcards,
];

// Fonction pour récupérer les flashcards selon les critères
export const getFlashcards = (
  matiere?: string,
  niveau?: NiveauType,
  nombreQuestions: NombreQuestions = 20,
  diplome?: DiplomeType
): Flashcard[] => {
  // Filtration des flashcards en fonction des critères
  let filtered = allFlashcards;
  
  if (diplome) {
    filtered = filtered.filter(card => card.diplome === diplome);
  }
  
  if (matiere) {
    filtered = filtered.filter(card => 
      standardizeMatiere(card.matiere) === standardizeMatiere(matiere));
  }
  
  if (niveau) {
    filtered = filtered.filter(card => 
      standardizeNiveau(card.niveau) === standardizeNiveau(niveau));
  }
  
  // Mélange des flashcards
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  
  // Limitation au nombre demandé
  return shuffled.slice(0, Math.min(nombreQuestions, shuffled.length));
};
