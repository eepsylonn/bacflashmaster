
import { Flashcard } from '@/types';
import { getFlashcards } from './flashcards';
import { philosophyFlashcards } from './philosophyFlashcards';
import { historyPremiereFlashcards } from './historyPremiereFlashcards';
import { historyTerminaleFlashcards } from './historyTerminaleFlashcards';
import { physiqueChimiePremiereFlashcards } from './physiqueChimiePremiereFlashcards';
import { physiqueChimieTerminaleFlashcards } from './physiqueChimieTerminaleFlashcards';
import { geographiePremiereFlashcards } from './geographiePremiereFlashcards';
import { geographieTerminaleFlashcards } from './geographieTerminaleFlashcards';
import { emcPremiereFlashcards } from './emcPremiereFlashcards';
import { emcTerminaleFlashcards } from './emcTerminaleFlashcards';
import { anglaisPremiereFlashcards } from './anglaisPremiereFlashcards';
import { anglaisTerminaleFlashcards } from './anglaisTerminaleFlashcards';

// Importations des flashcards TOEIC par matière et niveau
import { readingFacileToeicFlashcards } from './ReadingFacileToeicFlashcards';
import { readingIntermediaireToeicFlashcards } from './ReadingIntermediaireToeicFlashcards';
import { readingAvanceToeicFlashcards } from './ReadingAvanceToeicFlashcards';
import { listeningFacileToeicFlashcards } from './ListeningFacileToeicFlashcards';
import { listeningIntermediaireToeicFlashcards } from './ListeningIntermediaireToeicFlashcards';
import { listeningAvanceToeicFlashcards } from './ListeningAvanceToeicFlashcards';
import { grammaireFacileToeicFlashcards } from './GrammaireFacileToeicFlashcards';
import { grammaireIntermediaireToeicFlashcards } from './GrammaireIntermediaireToeicFlashcards';
import { grammaireAvanceToeicFlashcards } from './GrammaireAvanceToeicFlashcards';
import { vocabulaireFacileToeicFlashcards } from './VocabulaireFacileToeicFlashcards';
import { vocabulaireIntermediaireToeicFlashcards } from './VocabulaireIntermediaireToeicFlashcards';
import { vocabulaireAvanceToeicFlashcards } from './VocabulaireAvanceToeicFlashcards';

// Importations des flashcards TAGE MAGE par matière et niveau
import { calculFacileTageMageFlashcards } from './CalculFacileTageMageFlashcards';
import { calculIntermediaireTageMageFlashcards } from './CalculIntermediaireTageMageFlashcards';
import { calculAvanceTageMageFlashcards } from './CalculAvanceTageMageFlashcards';
import { logiqueFacileTageMageFlashcards } from './LogiqueFacileTageMageFlashcards';
import { logiqueIntermediaireTageMageFlashcards } from './LogiqueIntermediaireTageMageFlashcards';
import { logiqueAvanceTageMageFlashcards } from './LogiqueAvanceTageMageFlashcards';
import { verbalFacileTageMageFlashcards } from './VerbalFacileTageMageFlashcards';
import { verbalIntermediaireTageMageFlashcards } from './VerbalIntermediaireTageMageFlashcards';
import { verbalAvanceTageMageFlashcards } from './VerbalAvanceTageMageFlashcards';
import { problemeFacileTageMageFlashcards } from './ProblemeFacileTageMageFlashcards';
import { problemeIntermediaireTageMageFlashcards } from './ProblemeIntermediaireTageMageFlashcards';
import { problemeAvanceTageMageFlashcards } from './ProblemeAvanceTageMageFlashcards';

// Importations des flashcards IELTS par matière et niveau
import { readingFacileIELTSFlashcards } from './ReadingFacileIELTSFlashcards';
import { readingIntermediaireIELTSFlashcards } from './ReadingIntermediaireIELTSFlashcards';
import { readingAvanceIELTSFlashcards } from './ReadingAvanceIELTSFlashcards';
import { speakingFacileIELTSFlashcards } from './SpeakingFacileIELTSFlashcards';
import { speakingIntermediaireIELTSFlashcards } from './SpeakingIntermediaireIELTSFlashcards';
import { speakingAvanceIELTSFlashcards } from './SpeakingAvanceIELTSFlashcards';
import { writingFacileIELTSFlashcards } from './WritingFacileIELTSFlashcards';
import { writingIntermediaireIELTSFlashcards } from './WritingIntermediaireIELTSFlashcards';
import { writingAvanceIELTSFlashcards } from './WritingAvanceIELTSFlashcards';
import { vocabularyFacileIELTSFlashcards } from './VocabularyFacileIELTSFlashcards';
import { vocabularyIntermediaireIELTSFlashcards } from './VocabularyIntermediaireIELTSFlashcards';
import { vocabularyAvanceIELTSFlashcards } from './VocabularyAvanceIELTSFlashcards';
import { academicFacileIELTSFlashcards } from './AcademicFacileIELTSFlashcards';
import { academicIntermediaireIELTSFlashcards } from './AcademicIntermediaireIELTSFlashcards';
import { academicAvanceIELTSFlashcards } from './AcademicAvanceIELTSFlashcards';
import { generalFacileIELTSFlashcards } from './GeneralFacileIELTSFlashcards';
import { generalIntermediaireIELTSFlashcards } from './GeneralIntermediaireIELTSFlashcards';
import { generalAvanceIELTSFlashcards } from './GeneralAvanceIELTSFlashcards';

// Export all flashcards for use in other files
export { getFlashcards } from './flashcards';

// Combine all flashcards from different subjects
export const getAllFlashcards = (): Flashcard[] => {
  // Call getFlashcards with undefined parameters to get all flashcards
  // without filtering by matiere, niveau, or diplome
  const baseFlashcards = getFlashcards(undefined, undefined, 200, undefined);
  
  return [
    ...baseFlashcards,
    ...philosophyFlashcards,
    ...historyPremiereFlashcards,
    ...historyTerminaleFlashcards,
    ...physiqueChimiePremiereFlashcards,
    ...physiqueChimieTerminaleFlashcards,
    ...geographiePremiereFlashcards,
    ...geographieTerminaleFlashcards,
    ...emcPremiereFlashcards,
    ...emcTerminaleFlashcards,
    ...anglaisPremiereFlashcards,
    ...anglaisTerminaleFlashcards,
    ...readingFacileToeicFlashcards,
    ...readingIntermediaireToeicFlashcards,
    ...readingAvanceToeicFlashcards,
    ...listeningFacileToeicFlashcards,
    ...listeningIntermediaireToeicFlashcards,
    ...listeningAvanceToeicFlashcards,
    ...grammaireFacileToeicFlashcards,
    ...grammaireIntermediaireToeicFlashcards,
    ...grammaireAvanceToeicFlashcards,
    ...vocabulaireFacileToeicFlashcards,
    ...vocabulaireIntermediaireToeicFlashcards,
    ...vocabulaireAvanceToeicFlashcards,
    ...calculFacileTageMageFlashcards,
    ...calculIntermediaireTageMageFlashcards,
    ...calculAvanceTageMageFlashcards,
    ...logiqueFacileTageMageFlashcards,
    ...logiqueIntermediaireTageMageFlashcards,
    ...logiqueAvanceTageMageFlashcards,
    ...verbalFacileTageMageFlashcards,
    ...verbalIntermediaireTageMageFlashcards,
    ...verbalAvanceTageMageFlashcards,
    ...problemeFacileTageMageFlashcards,
    ...problemeIntermediaireTageMageFlashcards,
    ...problemeAvanceTageMageFlashcards,
    // IELTS flashcards
    ...readingFacileIELTSFlashcards,
    ...readingIntermediaireIELTSFlashcards,
    ...readingAvanceIELTSFlashcards,
    ...speakingFacileIELTSFlashcards,
    ...speakingIntermediaireIELTSFlashcards,
    ...speakingAvanceIELTSFlashcards,
    ...writingFacileIELTSFlashcards,
    ...writingIntermediaireIELTSFlashcards,
    ...writingAvanceIELTSFlashcards,
    ...vocabularyFacileIELTSFlashcards,
    ...vocabularyIntermediaireIELTSFlashcards,
    ...vocabularyAvanceIELTSFlashcards,
    ...academicFacileIELTSFlashcards,
    ...academicIntermediaireIELTSFlashcards,
    ...academicAvanceIELTSFlashcards,
    ...generalFacileIELTSFlashcards,
    ...generalIntermediaireIELTSFlashcards,
    ...generalAvanceIELTSFlashcards
  ];
};
