
import { Flashcard } from '@/types';
import { getFlashcards } from './flashcards';
import { philosophyFlashcards } from './philosophyFlashcards';
import { historyPremiereFlashcards } from './historyPremiereFlashcards';
import { historyTerminaleFlashcards } from './historyTerminaleFlashcards';
import { physiqueChimiePremiereFlashcards } from './physiqueChimiePremiereFlashcards';
import { physiqueChimieTerminaleFlashcards } from './physiqueChimieTerminaleFlashcards';

// Export all flashcards for use in other files
export { getFlashcards } from './flashcards';

// Combine all flashcards from different subjects
export const getAllFlashcards = (): Flashcard[] => {
  const baseFlashcards = getFlashcards();
  return [
    ...baseFlashcards,
    ...philosophyFlashcards,
    ...historyPremiereFlashcards,
    ...historyTerminaleFlashcards,
    ...physiqueChimiePremiereFlashcards,
    ...physiqueChimieTerminaleFlashcards
  ];
};
