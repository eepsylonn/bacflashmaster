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

import { standardizeMatiere, standardizeNiveau, standardizeDiplome } from '@/utils/standardization';

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

export const getFlashcards = (
  matiere?: string,
  niveau?: NiveauType,
  nombreQuestions: NombreQuestions = 20,
  diplome?: DiplomeType
): Flashcard[] => {
  const stdMatiere = matiere ? standardizeMatiere(matiere) : undefined;
  const stdNiveau = niveau ? standardizeNiveau(niveau) : undefined;
  const stdDiplome = diplome ? standardizeDiplome(diplome) : undefined;
  
  console.log('Récupération des flashcards locales avec critères standardisés:', {
    matiere: { original: matiere, standard: stdMatiere },
    niveau: { original: niveau, standard: stdNiveau },
    diplome: { original: diplome, standard: stdDiplome },
    nombreQuestions
  });
  
  let filtered = allFlashcards;
  
  if (stdDiplome) {
    filtered = filtered.filter(card => 
      standardizeDiplome(card.diplome) === stdDiplome);
  }
  
  if (stdMatiere) {
    filtered = filtered.filter(card => 
      standardizeMatiere(card.matiere) === stdMatiere);
  }
  
  if (stdNiveau) {
    filtered = filtered.filter(card => 
      standardizeNiveau(card.niveau) === stdNiveau);
  }
  
  console.log(`Flashcards locales filtrées: ${filtered.length} résultats`);
  
  const shuffled = [...filtered].sort(() => Math.random() - 0.5);
  
  const result = shuffled.slice(0, Math.min(nombreQuestions, shuffled.length));
  console.log(`Flashcards locales retournées: ${result.length} résultats`);
  
  return result;
};
