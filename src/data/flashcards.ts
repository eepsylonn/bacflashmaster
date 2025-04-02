import { Flashcard, NiveauType, NombreQuestions, DiplomeType } from '@/types';
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
import { toeicExtraFlashcards, tageMageExtraFlashcards, bacExtraFlashcards } from './extraFlashcards';
import { francaisGrammaireQuatriemeFlashcards } from './FrancaisGrammaireQuatriemeFlashcards';
import { francaisGrammaireTroisiemeFlashcards } from './FrancaisGrammaireTroisiemeFlashcards';
import { francaisComprehensionQuatriemeFlashcards } from './FrancaisComprehensionQuatriemeFlashcards';
import { francaisComprehensionTroisiemeFlashcards } from './FrancaisComprehensionTroisiemeFlashcards';
import { francaisRedactionQuatriemeFlashcards } from './FrancaisRedactionQuatriemeFlashcards';
import { francaisRedactionTroisiemeFlashcards } from './FrancaisRedactionTroisiemeFlashcards';
import { mathsCalculsQuatriemeFlashcards } from './MathsCalculsQuatriemeFlashcards';
import { mathsCalculsTroisiemeFlashcards } from './MathsCalculsTroisiemeFlashcards';
import { mathsGeometrieQuatriemeFlashcards } from './MathsGeometrieQuatriemeFlashcards';
import { mathsGeometrieTroisiemeFlashcards } from './MathsGeometrieTroisiemeFlashcards';
import { mathsProgrammationQuatriemeFlashcards } from './MathsProgrammationQuatriemeFlashcards';
import { mathsProgrammationTroisiemeFlashcards } from './MathsProgrammationTroisiemeFlashcards';
import { histoireQuatriemeFlashcards } from './HistoireQuatriemeFlashcards';
import { histoireTroisiemeFlashcards } from './HistoireTroisiemeFlashcards';
import { geographieQuatriemeFlashcards } from './GeographieQuatriemeFlashcards';
import { geographieTroisiemeFlashcards } from './GeographieTroisiemeFlashcards';
import { emcQuatriemeFlashcards } from './EMCQuatriemeFlashcards';
import { emcTroisiemeFlashcards } from './EMCTroisiemeFlashcards';
import { physiqueChimieQuatriemeFlashcards } from './PhysiqueChimieQuatriemeFlashcards';
import { physiqueChimieTroisiemeFlashcards } from './PhysiqueChimieTroisiemeFlashcards';
import { svtQuatriemeFlashcards } from './SVTQuatriemeFlashcards';
import { svtTroisiemeFlashcards } from './SVTTroisiemeFlashcards';
import { technologieQuatriemeFlashcards } from './TechnologieQuatriemeFlashcards';
import { technologieTroisiemeFlashcards } from './TechnologieTroisiemeFlashcards';
import { philosophieTerminaleFlashcards } from './PhilosophieTerminaleFlashcards';
import { francaisPremiereFlashcards } from './FrancaisPremiereFlashcards';
import { histoirePremiereFlashcards } from './HistoirePremiereFlashcards';
import { histoireTerminaleFlashcards } from './HistoireTerminaleFlashcards';
import { geographiePremiereFlashcards } from './GeographiePremiereFlashcards';
import { geographieTerminaleFlashcards } from './GeographieTerminaleFlashcards';
import { emcPremiereFlashcards } from './EMCPremiereFlashcards';
import { emcTerminaleFlashcards } from './EMCTerminaleFlashcards';
import { anglaisPremiereFlashcards } from './AnglaisPremiereFlashcards';
import { anglaisTerminaleFlashcards } from './AnglaisTerminaleFlashcards';
import { espagnolPremiereFlashcards } from './EspagnolPremiereFlashcards';
import { espagnolTerminaleFlashcards } from './EspagnolTerminaleFlashcards';
import { mathematiquesPremiereFlashcards } from './MathematiquesPremiereFlashcards';
import { mathematiquesTerminaleFlashcards } from './MathematiquesTerminaleFlashcards';
import { physiqueChimiePremiereFlashcards } from './PhysiqueChimiePremiereFlashcards';
import { physiqueChimieTerminaleFlashcards } from './PhysiqueChimieTerminaleFlashcards';
import { svtPremiereFlashcards } from './SVTPremiereFlashcards';
import { svtTerminaleFlashcards } from './SVTTerminaleFlashcards';
import { sesPremiereFlashcards } from './SESPremiereFlashcards';
import { sesTerminaleFlashcards } from './SESTerminaleFlashcards';
import { hggspPremiereFlashcards } from './HGGSPPremiereFlashcards';
import { hggspTerminaleFlashcards } from './HGGSPTerminaleFlashcards';
import { hlpPremiereFlashcards } from './HLPPremiereFlashcards';
import { hlpTerminaleFlashcards } from './HLPTerminaleFlashcards';
import { nsiPremiereFlashcards } from './NSIPremiereFlashcards';
import { nsiTerminaleFlashcards } from './NSITerminaleFlashcards';
import { artsPremiereFlashcards } from './ArtsPremiereFlashcards';
import { artsTerminaleFlashcards } from './ArtsTerminaleFlashcards';
import { mathsExpertesTerminaleFlashcards } from './MathsExpertesTerminaleFlashcards';
import { mathsComplementairesTerminaleFlashcards } from './MathsComplementairesTerminaleFlashcards';
import { lvcPremiereFlashcards } from './LVCPremiereFlashcards';
import { lvcTerminaleFlashcards } from './LVCTerminaleFlashcards';
import { latinGrecPremiereFlashcards } from './LatinGrecPremiereFlashcards';
import { latinGrecTerminaleFlashcards } from './LatinGrecTerminaleFlashcards';

// Map les noms de matières affichés dans l'interface vers les noms utilisés dans les fichiers
const matiereMapping: Record<string, string> = {
  // TOEIC
  'Compréhension orale': 'TOEIC Listening',
  'Compréhension écrite': 'TOEIC Reading',
  'Grammaire': 'TOEIC Grammar',
  'Vocabulaire': 'TOEIC Business Vocabulary',
  
  // TAGE MAGE
  'Calcul': 'TAGE MAGE - Calcul',
  'Logique': 'TAGE MAGE - Logique',
  'Verbal': 'TAGE MAGE - Verbal',
  'Problèmes': 'TAGE MAGE - Problèmes',
  
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
  
  // Brevet Flashcards
  if (diplome === 'brevet') {
    allFlashcards = [
      ...francaisGrammaireQuatriemeFlashcards,
      ...francaisGrammaireTroisiemeFlashcards,
      ...francaisComprehensionQuatriemeFlashcards,
      ...francaisComprehensionTroisiemeFlashcards,
      ...francaisRedactionQuatriemeFlashcards,
      ...francaisRedactionTroisiemeFlashcards,
      ...mathsCalculsQuatriemeFlashcards,
      ...mathsCalculsTroisiemeFlashcards,
      ...mathsGeometrieQuatriemeFlashcards,
      ...mathsGeometrieTroisiemeFlashcards,
      ...mathsProgrammationQuatriemeFlashcards,
      ...mathsProgrammationTroisiemeFlashcards,
      ...histoireQuatriemeFlashcards,
      ...histoireTroisiemeFlashcards,
      ...geographieQuatriemeFlashcards,
      ...geographieTroisiemeFlashcards,
      ...emcQuatriemeFlashcards,
      ...emcTroisiemeFlashcards,
      ...physiqueChimieQuatriemeFlashcards,
      ...physiqueChimieTroisiemeFlashcards,
      ...svtQuatriemeFlashcards,
      ...svtTroisiemeFlashcards,
      ...technologieQuatriemeFlashcards,
      ...technologieTroisiemeFlashcards
    ];
  }
  
  // Baccalauréat Flashcards
  if (diplome === 'baccalaureat') {
    allFlashcards = [
      ...philosophieTerminaleFlashcards,
      ...francaisPremiereFlashcards,
      ...histoirePremiereFlashcards,
      ...histoireTerminaleFlashcards,
      ...geographiePremiereFlashcards,
      ...geographieTerminaleFlashcards,
      ...emcPremiereFlashcards,
      ...emcTerminaleFlashcards,
      ...anglaisPremiereFlashcards,
      ...anglaisTerminaleFlashcards,
      ...espagnolPremiereFlashcards,
      ...espagnolTerminaleFlashcards,
      ...mathematiquesPremiereFlashcards,
      ...mathematiquesTerminaleFlashcards,
      ...physiqueChimiePremiereFlashcards,
      ...physiqueChimieTerminaleFlashcards,
      ...svtPremiereFlashcards,
      ...svtTerminaleFlashcards,
      ...sesPremiereFlashcards,
      ...sesTerminaleFlashcards,
      ...hggspPremiereFlashcards,
      ...hggspTerminaleFlashcards,
      ...hlpPremiereFlashcards,
      ...hlpTerminaleFlashcards,
      ...nsiPremiereFlashcards,
      ...nsiTerminaleFlashcards,
      ...artsPremiereFlashcards,
      ...artsTerminaleFlashcards,
      ...mathsExpertesTerminaleFlashcards,
      ...mathsComplementairesTerminaleFlashcards,
      ...lvcPremiereFlashcards,
      ...lvcTerminaleFlashcards,
      ...latinGrecPremiereFlashcards,
      ...latinGrecTerminaleFlashcards,
      ...bacExtraFlashcards
    ];
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
