
/**
 * Utilitaire pour standardiser les valeurs des flashcards entre différents diplômes
 */

// Standardisation des noms de matières
export const standardizeMatiere = (matiere: string): string => {
  // Mapping pour les matières de Cambridge
  if (matiere === "Vocabulary" || matiere === "IELTS Vocabulary" || matiere === "TOEFL Vocabulary") {
    return "Vocabulary";
  }
  if (matiere === "Speaking" || matiere === "IELTS Speaking" || matiere === "TOEFL Speaking") {
    return "Speaking";
  }
  if (matiere === "Writing" || matiere === "IELTS Writing" || matiere === "TOEFL Writing") {
    return "Writing";
  }
  if (matiere === "IELTS Academic" || matiere === "TOEFL Academic" || matiere === "Academic") {
    return "Academic";
  }
  
  // Si aucune correspondance n'est trouvée, retourner la matière d'origine
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
