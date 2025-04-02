
import { Flashcard } from '@/types';
import { matiereMapping, niveauMapping, diplomeMapping } from '@/data/matiereMapping';

// Helper function to get standardized matiere name
export const getStandardizedMatiere = (matiere: string): string => {
  return matiereMapping[matiere] || matiere;
};

// Helper function to get standardized niveau name
export const getStandardizedNiveau = (niveau: string): string => {
  return niveauMapping[niveau] || niveau;
};

// Helper function to get standardized diplome name
export const getStandardizedDiplome = (diplome: string): string => {
  return diplomeMapping[diplome] || diplome;
};

// Filter flashcards by subject, level and diploma
export const filterFlashcards = (
  flashcards: Flashcard[],
  matiere?: string,
  niveau?: string,
  diplome?: string
): Flashcard[] => {
  return flashcards.filter(card => {
    const standardizedCardMatiere = getStandardizedMatiere(card.matiere);
    const standardizedCardNiveau = getStandardizedNiveau(card.niveau);
    const standardizedCardDiplome = getStandardizedDiplome(card.diplome);
    
    const standardizedMatiere = matiere ? getStandardizedMatiere(matiere) : undefined;
    const standardizedNiveau = niveau ? getStandardizedNiveau(niveau) : undefined;
    const standardizedDiplome = diplome ? getStandardizedDiplome(diplome) : undefined;
    
    const matiereMatch = !standardizedMatiere || standardizedCardMatiere === standardizedMatiere;
    const niveauMatch = !standardizedNiveau || standardizedCardNiveau === standardizedNiveau;
    const diplomeMatch = !standardizedDiplome || standardizedCardDiplome === standardizedDiplome;
    
    return matiereMatch && niveauMatch && diplomeMatch;
  });
};

// Get unique subjects from flashcards
export const getUniqueSubjects = (flashcards: Flashcard[]): string[] => {
  const subjects = new Set<string>();
  
  flashcards.forEach(card => {
    const standardizedMatiere = getStandardizedMatiere(card.matiere);
    subjects.add(standardizedMatiere);
  });
  
  return Array.from(subjects).sort();
};

// Get unique levels from flashcards for a given subject
export const getUniqueLevels = (flashcards: Flashcard[], matiere?: string): string[] => {
  const levels = new Set<string>();
  
  flashcards.forEach(card => {
    if (!matiere || getStandardizedMatiere(card.matiere) === getStandardizedMatiere(matiere)) {
      const standardizedNiveau = getStandardizedNiveau(card.niveau);
      levels.add(standardizedNiveau);
    }
  });
  
  return Array.from(levels).sort();
};

// Get unique diplomas from flashcards
export const getUniqueDiplomas = (flashcards: Flashcard[]): string[] => {
  const diplomas = new Set<string>();
  
  flashcards.forEach(card => {
    const standardizedDiplome = getStandardizedDiplome(card.diplome);
    diplomas.add(standardizedDiplome);
  });
  
  return Array.from(diplomas).sort();
};
