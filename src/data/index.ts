
import { Flashcard } from '@/types';
import { getFlashcards } from './flashcards';
import { frenchFlashcards } from './frenchFlashcards';
import { philosophyFlashcards } from './philosophyFlashcards';
import { historyPremiereFlashcards } from './historyPremiereFlashcards';
import { historyTerminaleFlashcards } from './historyTerminaleFlashcards';
import { geographyFlashcards } from './geographyFlashcards';
import { detailedGeographyFlashcards } from './geographyDetailedFlashcards';
import { emcFlashcards } from './emcFlashcards';
import { englishFlashcards } from './englishFlashcards';
import { spanishFlashcards } from './spanishFlashcards';
import { mathFlashcards } from './mathFlashcards';
import { physiqueChimieFlashcards } from './physiqueChimieFlashcards';

// Export all flashcards for use in other files
export { getFlashcards } from './flashcards';

// Combine all flashcards from different subjects
export const getAllFlashcards = (): Flashcard[] => {
  const baseFlashcards = getFlashcards();
  return [
    ...baseFlashcards,
    ...frenchFlashcards,
    ...philosophyFlashcards,
    ...historyPremiereFlashcards,
    ...historyTerminaleFlashcards,
    ...geographyFlashcards,
    ...detailedGeographyFlashcards,
    ...emcFlashcards,
    ...englishFlashcards,
    ...spanishFlashcards,
    ...mathFlashcards,
    ...physiqueChimieFlashcards
  ];
};
