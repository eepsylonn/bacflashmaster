
import { NiveauType, DiplomeType } from '@/types';

/**
 * Standardise le nom de la matière pour assurer la cohérence lors des comparaisons
 * @param matiere Le nom de la matière à standardiser
 * @returns Le nom standardisé de la matière
 */
export const standardizeMatiere = (matiere: string | undefined): string => {
  if (!matiere) return '';
  
  // Convertir en minuscules et supprimer les accents
  const normalized = matiere.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  
  // Mappings spécifiques pour les matières équivalentes
  const mappings: Record<string, string> = {
    // Anglais
    'reading': 'reading',
    'reading & use of english': 'reading use',
    'reading use': 'reading use',
    'reading and use': 'reading use',
    'reading and use of english': 'reading use',
    'reading comprehension': 'reading',
    'toeic reading': 'reading',
    'toefl reading': 'reading',
    'ielts reading': 'reading',

    // Grammaire
    'grammar': 'grammaire',
    'grammaire': 'grammaire',

    // Vocabulaire
    'vocabulary': 'vocabulary',
    'vocabulaire': 'vocabulary',
    'vocabulaire anglais': 'vocabulary',

    // Expression orale
    'speaking': 'speaking',
    'expression orale': 'speaking',
    'oral expression': 'speaking',

    // Expression écrite
    'writing': 'writing',
    'expression ecrite': 'writing',
    'written expression': 'writing',

    // Mathématiques
    'mathematiques': 'mathematiques',
    'maths': 'mathematiques',
    'calculs': 'mathematiques',
    'math': 'mathematiques',
    'mathematics': 'mathematiques',

    // Sciences
    'svt': 'svt',
    'sciences de la vie et de la terre': 'svt',
    'biology': 'svt',
    'biologie': 'svt',

    // Physique-Chimie
    'physique-chimie': 'physique-chimie',
    'physical sciences': 'physique-chimie',
    'physics': 'physique-chimie',
    'chemistry': 'physique-chimie',
    'physique': 'physique-chimie',
    'chimie': 'physique-chimie',

    // Histoire-Géographie
    'histoire': 'histoire',
    'history': 'histoire',
    'geographie': 'geographie',
    'geography': 'geographie',
    'histoire-geo': 'histoire-geographie',
    'histoire-geographie': 'histoire-geographie',
    'history-geography': 'histoire-geographie',

    // Français
    'francais': 'francais',
    'french': 'francais',
    'litterature': 'francais',
    'literature': 'francais',
  };
  
  return mappings[normalized] || normalized;
};

/**
 * Standardise le niveau pour assurer la cohérence lors des comparaisons
 * @param niveau Le niveau à standardiser
 * @returns Le niveau standardisé
 */
export const standardizeNiveau = (niveau: string | NiveauType | undefined): string => {
  if (!niveau) return '';
  
  // Convertir en minuscules et supprimer les accents
  const normalized = niveau.toString().toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  
  // Mappings spécifiques pour les niveaux équivalents
  const mappings: Record<string, string> = {
    'facile': 'facile',
    'easy': 'facile',
    'beginner': 'facile',
    'debutant': 'facile',
    
    'intermediaire': 'intermediaire',
    'intermediate': 'intermediaire',
    'middle': 'intermediaire',
    'moyen': 'intermediaire',
    
    'avance': 'avance',
    'advanced': 'avance',
    'difficile': 'avance',
    'difficult': 'avance',
    
    'troisieme': 'troisieme',
    '3eme': 'troisieme',
    '3e': 'troisieme',
    
    'quatrieme': 'quatrieme',
    '4eme': 'quatrieme',
    '4e': 'quatrieme',
    
    'premiere': 'premiere',
    '1ere': 'premiere',
    '1e': 'premiere',
    
    'terminale': 'terminale',
    'term': 'terminale',
    'tle': 'terminale',
  };
  
  return mappings[normalized] || normalized;
};

/**
 * Standardise le diplôme pour assurer la cohérence lors des comparaisons
 * @param diplome Le diplôme à standardiser
 * @returns Le diplôme standardisé
 */
export const standardizeDiplome = (diplome: string | DiplomeType | undefined): string => {
  if (!diplome) return '';
  
  // Convertir en minuscules et supprimer les accents
  const normalized = diplome.toString().toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
  
  // Mappings spécifiques pour les diplômes équivalents
  const mappings: Record<string, string> = {
    'toeic': 'toeic',
    
    'toefl': 'toefl',
    
    'ielts': 'ielts',
    
    'cambridge': 'cambridge',
    'cambridge english': 'cambridge',
    'cae': 'cambridge',
    'fce': 'cambridge',
    'cpe': 'cambridge',
    
    'brevet': 'brevet',
    'dnb': 'brevet',
    'diplome national du brevet': 'brevet',
    
    'baccalaureat': 'baccalaureat',
    'bac': 'baccalaureat',
    'lycee': 'baccalaureat',
  };
  
  return mappings[normalized] || normalized;
};
