
import { Flashcard } from '@/types';
import { getFlashcards } from './flashcards';
import { frenchFlashcards } from './frenchFlashcards';
import { philosophyFlashcards } from './philosophyFlashcards';
import { historyFlashcards } from './historyFlashcards';
import { geographyFlashcards } from './geographyFlashcards';

// Export all flashcards for use in other files
export { getFlashcards } from './flashcards';

// Combine all flashcards from different subjects
export const getAllFlashcards = (): Flashcard[] => {
  const baseFlashcards = getFlashcards();
  return [
    ...baseFlashcards,
    ...frenchFlashcards,
    ...philosophyFlashcards,
    ...historyFlashcards,
    ...geographyFlashcards
  ];
};
