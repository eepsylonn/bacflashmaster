
import { Flashcard, NiveauType, NombreQuestions, DiplomeType } from '@/types';
// Import TOEIC flashcards
import { listeningFacileToeicFlashcards } from './ListeningFacileToeicFlashcards';
import { listeningIntermediaireToeicFlashcards } from './ListeningIntermediaireToeicFlashcards';
import { listeningAvanceToeicFlashcards } from './ListeningAvanceToeicFlashcards';
import { grammaireAvanceToeicFlashcards } from './GrammaireAvanceToeicFlashcards';
import { grammaireFacileToeicFlashcards } from './GrammaireFacileToeicFlashcards';
import { grammaireIntermediaireToeicFlashcards } from './GrammaireIntermediaireToeicFlashcards';
import { readingFacileToeicFlashcards } from './ReadingFacileToeicFlashcards';
import { readingIntermediaireToeicFlashcards } from './ReadingIntermediaireToeicFlashcards';
import { readingAvanceToeicFlashcards } from './ReadingAvanceToeicFlashcards';
import { vocabulaireFacileToeicFlashcards } from './VocabulaireFacileToeicFlashcards';
import { vocabulaireIntermediaireToeicFlashcards } from './VocabulaireIntermediaireToeicFlashcards';
import { vocabulaireAvanceToeicFlashcards } from './VocabulaireAvanceToeicFlashcards';

// Import TOEFL flashcards
import { readingFacileToeflFlashcards } from './ReadingFacileToeflFlashcards';
import { readingIntermediaireToeflFlashcards } from './ReadingIntermediaireToeflFlashcards';
import { readingAvanceToeflFlashcards } from './ReadingAvanceToeflFlashcards';
import { speakingFacileToeflFlashcards } from './SpeakingFacileToeflFlashcards';
import { speakingIntermediaireToeflFlashcards } from './SpeakingIntermediaireToeflFlashcards';
import { speakingAvanceToeflFlashcards } from './SpeakingAvanceToeflFlashcards';
import { writingFacileToeflFlashcards } from './WritingFacileToeflFlashcards';
import { writingIntermediaireToeflFlashcards } from './WritingIntermediaireToeflFlashcards';
import { writingAvanceToeflFlashcards } from './WritingAvanceToeflFlashcards';
import { grammaireFacileToeflFlashcards } from './GrammaireFacileToeflFlashcards';
import { grammaireIntermediaireToeflFlashcards } from './GrammaireIntermediaireToeflFlashcards';
import { grammaireAvanceToeflFlashcards } from './GrammaireAvanceToeflFlashcards';
import { vocabulaireFacileToeflFlashcards } from './VocabulaireFacileToeflFlashcards';
import { vocabulaireIntermediaireToeflFlashcards } from './VocabulaireIntermediaireToeflFlashcards';
import { vocabulaireAvanceToeflFlashcards } from './VocabulaireAvanceToeflFlashcards';

// Import TAGE MAGE flashcards
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

// Import IELTS flashcards
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

// Import Cambridge flashcards
import { readingUseFacileCambridgeFlashcards } from './ReadingUseFacileCambridgeFlashcards';
import { readingUseIntermediaireCambridgeFlashcards } from './ReadingUseIntermediaireCambridgeFlashcards';
import { readingUseAvanceCambridgeFlashcards } from './ReadingUseAvanceCambridgeFlashcards';
import { writingFacileCambridgeFlashcards } from './WritingFacileCambridgeFlashcards';
import { writingIntermediaireCambridgeFlashcards } from './WritingIntermediaireCambridgeFlashcards';
import { writingAvanceCambridgeFlashcards } from './WritingAvanceCambridgeFlashcards';
import { speakingFacileCambridgeFlashcards } from './SpeakingFacileCambridgeFlashcards';
import { speakingIntermediaireCambridgeFlashcards } from './SpeakingIntermediaireCambridgeFlashcards';
import { speakingAvanceCambridgeFlashcards } from './SpeakingAvanceCambridgeFlashcards';
import { grammaireFacileCambridgeFlashcards } from './GrammaireFacileCambridgeFlashcards';
import { grammaireIntermediaireCambridgeFlashcards } from './GrammaireIntermediaireCambridgeFlashcards';
import { grammaireAvanceCambridgeFlashcards } from './GrammaireAvanceCambridgeFlashcards';
import { vocabularyFacileCambridgeFlashcards } from './VocabularyFacileCambridgeFlashcards';
import { vocabularyIntermediaireCambridgeFlashcards } from './VocabularyIntermediaireCambridgeFlashcards';
import { vocabularyAvanceCambridgeFlashcards } from './VocabularyAvanceCambridgeFlashcards';

// Import GMAT flashcards
import { quantitativeFacileGMATFlashcards } from './QuantitativeFacileGMATFlashcards';
import { quantitativeIntermediaireGMATFlashcards } from './QuantitativeIntermediaireGMATFlashcards';
import { quantitativeAvanceGMATFlashcards } from './QuantitativeAvanceGMATFlashcards';
import { verbalFacileGMATFlashcards } from './VerbalFacileGMATFlashcards';
import { verbalIntermediaireGMATFlashcards } from './VerbalIntermediaireGMATFlashcards';
import { verbalAvanceGMATFlashcards } from './VerbalAvanceGMATFlashcards';
import { integratedReasoningFacileGMATFlashcards } from './IntegratedReasoningFacileGMATFlashcards';
import { integratedReasoningIntermediaireGMATFlashcards } from './IntegratedReasoningIntermediaireGMATFlashcards';
import { integratedReasoningAvanceGMATFlashcards } from './IntegratedReasoningAvanceGMATFlashcards';
import { analyticalWritingFacileGMATFlashcards } from './AnalyticalWritingFacileGMATFlashcards';
import { analyticalWritingIntermediaireGMATFlashcards } from './AnalyticalWritingIntermediaireGMATFlashcards';
import { analyticalWritingAvanceGMATFlashcards } from './AnalyticalWritingAvanceGMATFlashcards';

// Import Brevet flashcards
import { francaisGrammaireQuatriemeBrevetFlashcards } from './FrancaisGrammaireQuatriemeBrevetFlashcards';
import { francaisGrammaireTrioisemeBrevetFlashcards } from './FrancaisGrammaireTrioisemeBrevetFlashcards';
import { francaisComprehensionQuatriemeBrevetFlashcards } from './FrancaisComprehensionQuatriemeBrevetFlashcards';
import { francaisComprehensionTrioisemeBrevetFlashcards } from './FrancaisComprehensionTrioisemeBrevetFlashcards';
import { francaisRedactionQuatriemeBrevetFlashcards } from './FrancaisRedactionQuatriemeBrevetFlashcards';
import { francaisRedactionTrioisemeBrevetFlashcards } from './FrancaisRedactionTrioisemeBrevetFlashcards';
import { mathematiquesCalculsQuatriemeBrevetFlashcards } from './MathematiquesCalculsQuatriemeBrevetFlashcards';
import { mathematiquesCalculsTrioisemeBrevetFlashcards } from './MathematiquesCalculsTrioisemeBrevetFlashcards';
import { mathematiquesGeometrieQuatriemeBrevetFlashcards } from './MathematiquesGeometrieQuatriemeBrevetFlashcards';
import { mathematiquesGeometrieTrioisemeBrevetFlashcards } from './MathematiquesGeometrieTrioisemeBrevetFlashcards';
import { mathematiquesProgrammationQuatriemeBrevetFlashcards } from './MathematiquesProgrammationQuatriemeBrevetFlashcards';
import { mathematiquesProgrammationTrioisemeBrevetFlashcards } from './MathematiquesProgrammationTrioisemeBrevetFlashcards';
import { histoireQuatriemeBrevetFlashcards } from './HistoireQuatriemeBrevetFlashcards';
import { histoireTrioisemeBrevetFlashcards } from './HistoireTrioisemeBrevetFlashcards';
import { geographieQuatriemeBrevetFlashcards } from './GeographieQuatriemeBrevetFlashcards';
import { geographieTrioisemeBrevetFlashcards } from './GeographieTrioisemeBrevetFlashcards';
import { emcQuatriemeBrevetFlashcards } from './EMCQuatriemeBrevetFlashcards';
import { emcTrioisemeBrevetFlashcards } from './EMCTrioisemeBrevetFlashcards';
import { physiqueChimieQuatriemeBrevetFlashcards } from './PhysiqueChimieQuatriemeBrevetFlashcards';
import { physiqueChimieTrioisemeBrevetFlashcards } from './PhysiqueChimieTrioisemeBrevetFlashcards';
import { svtQuatriemeBrevetFlashcards } from './SVTQuatriemeBrevetFlashcards';
import { svtTrioisemeBrevetFlashcards } from './SVTTrioisemeBrevetFlashcards';
import { technologieQuatriemeBrevetFlashcards } from './TechnologieQuatriemeBrevetFlashcards';
import { technologieTrioisemeBrevetFlashcards } from './TechnologieTrioisemeBrevetFlashcards';

// Import extra flashcards
import { toeicExtraFlashcards, tageMageExtraFlashcards } from './extraFlashcards';

// Map les noms de matières affichés dans l'interface vers les noms utilisés dans les fichiers
const matiereMapping: Record<string, string> = {
  // TOEIC
  'Compréhension orale': 'TOEIC Listening',
  'Compréhension écrite': 'TOEIC Reading',
  'Grammaire': 'TOEIC Grammar',
  'Vocabulaire': 'TOEIC Business Vocabulary',
  
  // TOEFL
  'TOEFL Compréhension orale': 'TOEFL Listening',
  'TOEFL Compréhension écrite': 'TOEFL Reading',
  'TOEFL Expression orale': 'TOEFL Speaking',
  'TOEFL Expression écrite': 'TOEFL Writing',
  'TOEFL Grammaire': 'TOEFL Grammar',
  'TOEFL Vocabulaire': 'TOEFL Vocabulary',
  
  // TAGE MAGE
  'Calcul': 'TAGE MAGE - Calcul',
  'Logique': 'TAGE MAGE - Logique',
  'Verbal': 'TAGE MAGE - Verbal',
  'Problèmes': 'TAGE MAGE - Problèmes',
  
  // IELTS
  'IELTS Reading': 'IELTS Reading',
  'IELTS Speaking': 'IELTS Speaking',
  'IELTS Writing': 'IELTS Writing',
  'IELTS Vocabulary': 'IELTS Vocabulary',
  'IELTS Academic': 'IELTS Academic',
  'IELTS General Training': 'IELTS General Training',
  
  // Cambridge
  'Reading & Use of English': 'Reading & Use of English',
  'Writing': 'Writing',
  'Speaking': 'Speaking',
  'Grammar': 'Grammar',
  'Vocabulary': 'Vocabulary',
  
  // GMAT
  'Quantitative': 'Quantitative',
  'GMAT Verbal': 'Verbal',
  'Integrated Reasoning': 'Integrated Reasoning',
  'Analytical Writing': 'Analytical Writing',
  
  // Brevet
  'Français (Grammaire)': 'Français - Grammaire',
  'Français (Compréhension)': 'Français - Compréhension',
  'Français (Rédaction)': 'Français - Rédaction',
  'Mathématiques (Calculs)': 'Mathématiques - Calculs',
  'Mathématiques (Géométrie)': 'Mathématiques - Géométrie',
  'Mathématiques (Programmation)': 'Mathématiques - Programmation',
  'Histoire': 'Histoire',
  'Géographie': 'Géographie',
  'EMC': 'EMC',
  'Physique-Chimie': 'Physique-Chimie',
  'SVT': 'SVT',
  'Technologie': 'Technologie',
  
  // Baccalauréat
  'Philosophie': 'Philosophie',
  'Français': 'Français',
  'Anglais': 'Anglais',
  'Espagnol': 'Espagnol',
  'Mathématiques': 'Mathématiques',
  'SES': 'SES',
  'HGGSP': 'HGGSP',
  'Humanités-Littérature-Philosophie': 'HLP',
  'NSI': 'NSI',
  'Arts': 'Arts',
  'Mathématiques expertes': 'Mathématiques expertes',
  'Mathématiques complémentaires': 'Mathématiques complémentaires',
  'LVC': 'LVC',
  'Latin/Grec': 'Latin/Grec',
};

// Mapping des niveaux affichés vers les niveaux utilisés dans les fichiers
const niveauMapping: Record<string, string> = {
  'facile': 'facile',
  'intermediaire': 'intermediaire',
  'avance': 'avance',
  'troisieme': 'troisieme',
  'quatrieme': 'quatrieme',
  'premiere': 'premiere',
  'terminale': 'terminale',
};

// Fonction qui récupère les flashcards en fonction des critères
export const getFlashcards = (
  matiere: string | undefined,
  niveau: NiveauType | undefined,
  nombreQuestions: NombreQuestions,
  diplome: string | undefined
): Flashcard[] => {
  console.log(`GetFlashcards appelé avec: matière=${matiere}, niveau=${niveau}, nombreQuestions=${nombreQuestions}, diplôme=${diplome}`);
  
  let allFlashcards: Flashcard[] = [];
  
  // TOEIC Flashcards
  if (diplome === 'toeic') {
    allFlashcards = [
      ...listeningFacileToeicFlashcards,
      ...listeningIntermediaireToeicFlashcards,
      ...listeningAvanceToeicFlashcards,
      ...grammaireFacileToeicFlashcards,
      ...grammaireIntermediaireToeicFlashcards,
      ...grammaireAvanceToeicFlashcards,
      ...readingFacileToeicFlashcards,
      ...readingIntermediaireToeicFlashcards,
      ...readingAvanceToeicFlashcards,
      ...vocabulaireFacileToeicFlashcards,
      ...vocabulaireIntermediaireToeicFlashcards,
      ...vocabulaireAvanceToeicFlashcards,
      ...toeicExtraFlashcards
    ];
  }
  
  // TOEFL Flashcards
  if (diplome === 'toefl') {
    allFlashcards = [
      ...readingFacileToeflFlashcards,
      ...readingIntermediaireToeflFlashcards,
      ...readingAvanceToeflFlashcards,
      ...speakingFacileToeflFlashcards,
      ...speakingIntermediaireToeflFlashcards,
      ...speakingAvanceToeflFlashcards,
      ...writingFacileToeflFlashcards,
      ...writingIntermediaireToeflFlashcards,
      ...writingAvanceToeflFlashcards,
      ...grammaireFacileToeflFlashcards,
      ...grammaireIntermediaireToeflFlashcards,
      ...grammaireAvanceToeflFlashcards,
      ...vocabulaireFacileToeflFlashcards,
      ...vocabulaireIntermediaireToeflFlashcards,
      ...vocabulaireAvanceToeflFlashcards
    ];
  }
  
  // TAGE MAGE Flashcards
  if (diplome === 'tage-mage') {
    allFlashcards = [
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
      ...tageMageExtraFlashcards
    ];
  }
  
  // IELTS Flashcards
  if (diplome === 'ielts') {
    allFlashcards = [
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
  }
  
  // Cambridge Flashcards
  if (diplome === 'cambridge') {
    allFlashcards = [
      ...readingUseFacileCambridgeFlashcards,
      ...readingUseIntermediaireCambridgeFlashcards,
      ...readingUseAvanceCambridgeFlashcards,
      ...writingFacileCambridgeFlashcards,
      ...writingIntermediaireCambridgeFlashcards,
      ...writingAvanceCambridgeFlashcards,
      ...speakingFacileCambridgeFlashcards,
      ...speakingIntermediaireCambridgeFlashcards,
      ...speakingAvanceCambridgeFlashcards,
      ...grammaireFacileCambridgeFlashcards,
      ...grammaireIntermediaireCambridgeFlashcards,
      ...grammaireAvanceCambridgeFlashcards,
      ...vocabularyFacileCambridgeFlashcards,
      ...vocabularyIntermediaireCambridgeFlashcards,
      ...vocabularyAvanceCambridgeFlashcards
    ];
  }
  
  // GMAT Flashcards
  if (diplome === 'gmat') {
    allFlashcards = [
      ...quantitativeFacileGMATFlashcards,
      ...quantitativeIntermediaireGMATFlashcards,
      ...quantitativeAvanceGMATFlashcards,
      ...verbalFacileGMATFlashcards,
      ...verbalIntermediaireGMATFlashcards,
      ...verbalAvanceGMATFlashcards,
      ...integratedReasoningFacileGMATFlashcards,
      ...integratedReasoningIntermediaireGMATFlashcards,
      ...integratedReasoningAvanceGMATFlashcards,
      ...analyticalWritingFacileGMATFlashcards,
      ...analyticalWritingIntermediaireGMATFlashcards,
      ...analyticalWritingAvanceGMATFlashcards
    ];
  }
  
  // Brevet Flashcards
  if (diplome === 'brevet') {
    allFlashcards = [
      ...francaisGrammaireQuatriemeBrevetFlashcards,
      ...francaisGrammaireTrioisemeBrevetFlashcards,
      ...francaisComprehensionQuatriemeBrevetFlashcards,
      ...francaisComprehensionTrioisemeBrevetFlashcards,
      ...francaisRedactionQuatriemeBrevetFlashcards,
      ...francaisRedactionTrioisemeBrevetFlashcards,
      ...mathematiquesCalculsQuatriemeBrevetFlashcards,
      ...mathematiquesCalculsTrioisemeBrevetFlashcards,
      ...mathematiquesGeometrieQuatriemeBrevetFlashcards,
      ...mathematiquesGeometrieTrioisemeBrevetFlashcards,
      ...mathematiquesProgrammationQuatriemeBrevetFlashcards,
      ...mathematiquesProgrammationTrioisemeBrevetFlashcards,
      ...histoireQuatriemeBrevetFlashcards,
      ...histoireTrioisemeBrevetFlashcards,
      ...geographieQuatriemeBrevetFlashcards,
      ...geographieTrioisemeBrevetFlashcards,
      ...emcQuatriemeBrevetFlashcards,
      ...emcTrioisemeBrevetFlashcards,
      ...physiqueChimieQuatriemeBrevetFlashcards,
      ...physiqueChimieTrioisemeBrevetFlashcards,
      ...svtQuatriemeBrevetFlashcards,
      ...svtTrioisemeBrevetFlashcards,
      ...technologieQuatriemeBrevetFlashcards,
      ...technologieTrioisemeBrevetFlashcards
    ];
  }
  
  // Baccalauréat Flashcards - Temporairement vide jusqu'à ce que les fichiers soient implémentés
  if (diplome === 'baccalaureat') {
    allFlashcards = [];
    console.log("Flashcards pour le Baccalauréat pas encore implémentées");
  }
  
  // Log pour déboguer
  console.log(`Nombre total de flashcards récupérées pour ${diplome}: ${allFlashcards.length}`);
  
  // Filtrer par diplôme si nécessaire
  if (diplome) {
    allFlashcards = allFlashcards.filter(card => card.diplome === diplome || card.diplome === undefined);
    console.log(`Après filtrage par diplôme ${diplome}: ${allFlashcards.length} flashcards`);
  }
  
  // Filtrer par matière si spécifiée
  if (matiere) {
    const mappedMatiere = matiereMapping[matiere] || matiere;
    allFlashcards = allFlashcards.filter(card => card.matiere === mappedMatiere);
    console.log(`Après filtrage par matière ${mappedMatiere}: ${allFlashcards.length} flashcards`);
  }
  
  // Filtrer par niveau si spécifié
  if (niveau && niveau !== 'both') {
    const mappedNiveau = niveauMapping[niveau] || niveau;
    allFlashcards = allFlashcards.filter(card => card.niveau === mappedNiveau);
    console.log(`Après filtrage par niveau ${mappedNiveau}: ${allFlashcards.length} flashcards`);
  }
  
  // Mélanger les flashcards
  allFlashcards = shuffleArray(allFlashcards);
  
  // Limiter au nombre demandé
  if (nombreQuestions && nombreQuestions < allFlashcards.length) {
    allFlashcards = allFlashcards.slice(0, nombreQuestions);
  }
  
  console.log(`Flashcards finales: ${allFlashcards.length}`);
  return allFlashcards;
};

// Fonction pour mélanger un tableau (algorithme de Fisher-Yates)
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// Combine all flashcards into one array and export it
export const allFlashcards: Flashcard[] = [
  // TOEIC
  ...listeningFacileToeicFlashcards,
  ...listeningIntermediaireToeicFlashcards,
  ...listeningAvanceToeicFlashcards,
  ...grammaireFacileToeicFlashcards,
  ...grammaireIntermediaireToeicFlashcards,
  ...grammaireAvanceToeicFlashcards,
  ...readingFacileToeicFlashcards,
  ...readingIntermediaireToeicFlashcards,
  ...readingAvanceToeicFlashcards,
  ...vocabulaireFacileToeicFlashcards,
  ...vocabulaireIntermediaireToeicFlashcards,
  ...vocabulaireAvanceToeicFlashcards,
  ...toeicExtraFlashcards,
  
  // TOEFL
  ...readingFacileToeflFlashcards,
  ...readingIntermediaireToeflFlashcards,
  ...readingAvanceToeflFlashcards,
  ...speakingFacileToeflFlashcards,
  ...speakingIntermediaireToeflFlashcards,
  ...speakingAvanceToeflFlashcards,
  ...writingFacileToeflFlashcards,
  ...writingIntermediaireToeflFlashcards,
  ...writingAvanceToeflFlashcards,
  ...grammaireFacileToeflFlashcards,
  ...grammaireIntermediaireToeflFlashcards,
  ...grammaireAvanceToeflFlashcards,
  ...vocabulaireFacileToeflFlashcards,
  ...vocabulaireIntermediaireToeflFlashcards,
  ...vocabulaireAvanceToeflFlashcards,
  
  // TAGE MAGE
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
  ...tageMageExtraFlashcards,
  
  // IELTS
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
  ...generalAvanceIELTSFlashcards,
  
  // Cambridge
  ...readingUseFacileCambridgeFlashcards,
  ...readingUseIntermediaireCambridgeFlashcards,
  ...readingUseAvanceCambridgeFlashcards,
  ...writingFacileCambridgeFlashcards,
  ...writingIntermediaireCambridgeFlashcards,
  ...writingAvanceCambridgeFlashcards,
  ...speakingFacileCambridgeFlashcards,
  ...speakingIntermediaireCambridgeFlashcards,
  ...speakingAvanceCambridgeFlashcards,
  ...grammaireFacileCambridgeFlashcards,
  ...grammaireIntermediaireCambridgeFlashcards,
  ...grammaireAvanceCambridgeFlashcards,
  ...vocabularyFacileCambridgeFlashcards,
  ...vocabularyIntermediaireCambridgeFlashcards,
  ...vocabularyAvanceCambridgeFlashcards,
  
  // GMAT
  ...quantitativeFacileGMATFlashcards,
  ...quantitativeIntermediaireGMATFlashcards,
  ...quantitativeAvanceGMATFlashcards,
  ...verbalFacileGMATFlashcards,
  ...verbalIntermediaireGMATFlashcards,
  ...verbalAvanceGMATFlashcards,
  ...integratedReasoningFacileGMATFlashcards,
  ...integratedReasoningIntermediaireGMATFlashcards,
  ...integratedReasoningAvanceGMATFlashcards,
  ...analyticalWritingFacileGMATFlashcards,
  ...analyticalWritingIntermediaireGMATFlashcards,
  ...analyticalWritingAvanceGMATFlashcards,
  
  // Brevet
  ...francaisGrammaireQuatriemeBrevetFlashcards,
  ...francaisGrammaireTrioisemeBrevetFlashcards,
  ...francaisComprehensionQuatriemeBrevetFlashcards,
  ...francaisComprehensionTrioisemeBrevetFlashcards,
  ...francaisRedactionQuatriemeBrevetFlashcards,
  ...francaisRedactionTrioisemeBrevetFlashcards,
  ...mathematiquesCalculsQuatriemeBrevetFlashcards,
  ...mathematiquesCalculsTrioisemeBrevetFlashcards,
  ...mathematiquesGeometrieQuatriemeBrevetFlashcards,
  ...mathematiquesGeometrieTrioisemeBrevetFlashcards,
  ...mathematiquesProgrammationQuatriemeBrevetFlashcards,
  ...mathematiquesProgrammationTrioisemeBrevetFlashcards,
  ...histoireQuatriemeBrevetFlashcards,
  ...histoireTrioisemeBrevetFlashcards,
  ...geographieQuatriemeBrevetFlashcards,
  ...geographieTrioisemeBrevetFlashcards,
  ...emcQuatriemeBrevetFlashcards,
  ...emcTrioisemeBrevetFlashcards,
  ...physiqueChimieQuatriemeBrevetFlashcards,
  ...physiqueChimieTrioisemeBrevetFlashcards,
  ...svtQuatriemeBrevetFlashcards,
  ...svtTrioisemeBrevetFlashcards,
  ...technologieQuatriemeBrevetFlashcards,
  ...technologieTrioisemeBrevetFlashcards
];
