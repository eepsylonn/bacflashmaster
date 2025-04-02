
/**
 * Utilitaire pour standardiser les valeurs des flashcards entre différents diplômes
 */

// Standardisation des noms de matières
export const standardizeMatiere = (matiere: string): string => {
  // Standardize vocabulary subjects
  if (matiere === "Vocabulary" || 
      matiere === "IELTS Vocabulary" || 
      matiere === "TOEFL Vocabulary" ||
      matiere === "Cambridge Vocabulary" ||
      matiere === "Vocabulaire") {
    return "Vocabulary";
  }
  
  // Standardize speaking subjects
  if (matiere === "Speaking" || 
      matiere === "IELTS Speaking" || 
      matiere === "TOEFL Speaking" ||
      matiere === "Cambridge Speaking" ||
      matiere === "Expression orale") {
    return "Speaking";
  }
  
  // Standardize writing subjects
  if (matiere === "Writing" || 
      matiere === "IELTS Writing" || 
      matiere === "TOEFL Writing" ||
      matiere === "Cambridge Writing" ||
      matiere === "Expression écrite") {
    return "Writing";
  }
  
  // Standardize academic subjects
  if (matiere === "IELTS Academic" || 
      matiere === "TOEFL Academic" || 
      matiere === "Academic") {
    return "Academic";
  }
  
  // Standardize reading subjects
  if (matiere === "Reading" || 
      matiere === "IELTS Reading" || 
      matiere === "TOEFL Reading" ||
      matiere === "Cambridge Reading" ||
      matiere === "Compréhension écrite") {
    return "Reading";
  }
  
  // Standardize grammar subjects
  if (matiere === "Grammar" || 
      matiere === "IELTS Grammar" || 
      matiere === "TOEFL Grammar" ||
      matiere === "Cambridge Grammar" ||
      matiere === "Grammaire") {
    return "Grammar";
  }
  
  // If no standardization match is found, return the original subject
  return matiere;
};

// Standardisation des niveaux
export const standardizeNiveau = (niveau: string): string => {
  // Mapping pour les niveaux
  if (niveau === "facile" || niveau === "troisieme" || niveau === "quatrieme") {
    return "facile";
  }
  if (niveau === "intermediaire" || niveau === "premiere") {
    return "intermediaire";
  }
  if (niveau === "avance" || niveau === "terminale") {
    return "avance";
  }
  
  // Si aucune correspondance n'est trouvée, retourner le niveau d'origine
  return niveau;
};
