
import { Flashcard, NiveauType, DiplomeType } from '@/types';
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

// Mock flashcard data for the base subjects
const flashcardsData: Flashcard[] = [
  // Baccalauréat flashcards
  {
    id: '1',
    question: 'Quelle est la capitale de la France ?',
    answer: 'Paris',
    matiere: 'Géographie',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '2',
    question: 'Résoudre : 2 + 2 = ?',
    answer: '4',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '3',
    question: 'Quel est l\' past simple de "go" ?',
    answer: 'went',
    matiere: 'Anglais',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '4',
    question: 'Qui a peint la Joconde ?',
    answer: 'Léonard de Vinci',
    matiere: 'Histoire',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '5',
    question: 'Définition de la photosynthèse',
    answer: 'Processus par lequel les plantes convertissent la lumière en énergie chimique',
    matiere: 'SVT',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '6',
    question: 'Expliquez la théorie de la relativité',
    answer: 'Théorie d\'Einstein sur l\'espace et le temps',
    matiere: 'Physique-Chimie',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '7',
    question: 'Quel est le rôle du marketing ?',
    answer: 'Promouvoir et vendre des produits ou services',
    matiere: 'SES',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '8',
    question: 'Qu\'est-ce que le PIB ?',
    answer: 'Produit Intérieur Brut, mesure de la richesse économique',
    matiere: 'SES',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '13',
    question: 'Quel est l\'antonyme de "bénéfique" ?',
    answer: 'Néfaste',
    matiere: 'Français',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '14',
    question: 'Définition de la mondialisation',
    answer: 'Processus d\'intégration des marchés et des cultures à l\'échelle mondiale',
    matiere: 'Géographie',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '15',
    question: 'Qui a écrit "Le Rouge et le Noir" ?',
    answer: 'Stendhal',
    matiere: 'Français',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '16',
    question: 'Expliquez le concept de l\'existentialisme',
    answer: 'Courant philosophique mettant l\'accent sur la liberté et la responsabilité individuelle',
    matiere: 'Philosophie',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '17',
    question: 'Résoudre : 5! (factorielle de 5)',
    answer: '120',
    matiere: 'Mathématiques',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '18',
    question: 'Décrire la structure de l\'atome',
    answer: 'Noyau composé de protons et de neutrons, entouré d\'électrons',
    matiere: 'Physique-Chimie',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  {
    id: '19',
    question: 'Quel est le rôle de l\'ONU ?',
    answer: 'Maintenir la paix et la sécurité internationales, promouvoir la coopération entre les nations',
    matiere: 'Histoire',
    niveau: 'terminale',
    diplome: 'baccalaureat'
  },
  {
    id: '20',
    question: 'Définition de la démocratie',
    answer: 'Régime politique où le pouvoir est exercé par le peuple',
    matiere: 'Philosophie',
    niveau: 'premiere',
    diplome: 'baccalaureat'
  },
  // TOEIC flashcards
  {
    id: '9',
    question: 'Identifier un synonyme de "content"',
    answer: 'Happy',
    matiere: 'Vocabulaire',
    niveau: 'intermediaire',
    diplome: 'toeic'
  },
  {
    id: '10',
    question: 'Compléter : The meeting will be held ____ Tuesday.',
    answer: 'on',
    matiere: 'Grammaire',
    niveau: 'avance',
    diplome: 'toeic'
  },
  // TAGE MAGE flashcards
  {
    id: '11',
    question: 'Calculer : 15 * 3',
    answer: '45',
    matiere: 'Calcul',
    niveau: 'intermediaire',
    diplome: 'tage-mage'
  },
  {
    id: '12',
    question: 'Résoudre la suite logique : 2, 4, 6, ?',
    answer: '8',
    matiere: 'Logique',
    niveau: 'avance',
    diplome: 'tage-mage'
  },
  // BREVET flashcards
  {
    id: '21',
    question: 'Quelles sont les trois grandes périodes de l\'histoire ?',
    answer: 'L\'Antiquité, le Moyen Âge, les Temps modernes',
    matiere: 'Histoire',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  {
    id: '22',
    question: 'Quelle est la formule de l\'aire d\'un triangle ?',
    answer: 'A = (base × hauteur) ÷ 2',
    matiere: 'Mathématiques (Géométrie)',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  {
    id: '23',
    question: 'Quel est le théorème de Pythagore ?',
    answer: 'Dans un triangle rectangle, le carré de l\'hypoténuse est égal à la somme des carrés des deux autres côtés',
    matiere: 'Mathématiques (Géométrie)',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  {
    id: '24',
    question: 'Citez les trois valeurs fondamentales de la République française',
    answer: 'Liberté, Égalité, Fraternité',
    matiere: 'EMC',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  {
    id: '25',
    question: 'Qu\'est-ce qu\'un développement durable ?',
    answer: 'Un développement qui répond aux besoins du présent sans compromettre la capacité des générations futures à répondre à leurs propres besoins',
    matiere: 'Géographie',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  {
    id: '26',
    question: 'Quels sont les constituants d\'un atome ?',
    answer: 'Protons, neutrons et électrons',
    matiere: 'Physique-Chimie',
    niveau: 'troisieme',
    diplome: 'brevet'
  },
  // TOEFL flashcards
  {
    id: '27',
    question: 'What is the difference between "affect" and "effect"?',
    answer: '"Affect" is usually a verb meaning to influence; "effect" is usually a noun meaning result or consequence',
    matiere: 'Grammar',
    niveau: 'avance',
    diplome: 'toefl'
  },
  {
    id: '28',
    question: 'What\'s the meaning of "to procrastinate"?',
    answer: 'To delay or postpone action; put off doing something',
    matiere: 'Vocabulary',
    niveau: 'intermediaire',
    diplome: 'toefl'
  },
  // IELTS flashcards
  {
    id: '29',
    question: 'What\'s the recommended structure for IELTS Writing Task 2?',
    answer: 'Introduction, 2-3 body paragraphs, and conclusion. About 250 words minimum.',
    matiere: 'Writing',
    niveau: 'avance',
    diplome: 'ielts'
  },
  {
    id: '30',
    question: 'What\'s the difference between IELTS Academic and General Training?',
    answer: 'Academic is for higher education studies; General Training is for work experience or migration purposes. Reading and Writing sections differ.',
    matiere: 'Academic',
    niveau: 'intermediaire',
    diplome: 'ielts'
  },
  // Cambridge flashcards
  {
    id: '31',
    question: 'Which phrasal verb means "to cancel"?',
    answer: 'To call off',
    matiere: 'Reading & Use of English',
    niveau: 'intermediaire',
    diplome: 'cambridge'
  },
  {
    id: '32',
    question: 'What\'s a "collocation"?',
    answer: 'A group of words that usually go together, like "make a mistake" or "heavy rain"',
    matiere: 'Reading & Use of English',
    niveau: 'avance',
    diplome: 'cambridge'
  },
  // GMAT flashcards
  {
    id: '33',
    question: 'What is the difference between the mean and the median?',
    answer: 'The mean is the average of all values; the median is the middle value when arranged in order',
    matiere: 'Quantitative',
    niveau: 'intermediaire',
    diplome: 'gmat'
  },
  {
    id: '34',
    question: 'What type of triangle has all sides of equal length?',
    answer: 'Equilateral triangle',
    matiere: 'Quantitative',
    niveau: 'intermediaire',
    diplome: 'gmat'
  }
];

// Combine the history flashcards from both levels
const historyFlashcards = [
    ...historyPremiereFlashcards,
    ...historyTerminaleFlashcards
];

// Combine all physique-chimie flashcards
const physiqueChimieFlashcards = [
    ...physiqueChimiePremiereFlashcards,
    ...physiqueChimieTerminaleFlashcards
];

// Combine all géographie flashcards
const geographieFlashcards = [
    ...geographiePremiereFlashcards,
    ...geographieTerminaleFlashcards
];

// Combine all EMC flashcards
const emcFlashcards = [
    ...emcPremiereFlashcards,
    ...emcTerminaleFlashcards
];

// Combine all anglais flashcards
const anglaisFlashcards = [
    ...anglaisPremiereFlashcards,
    ...anglaisTerminaleFlashcards
];

// Combine the base flashcards with the subject-specific flashcards
const allFlashcards = [
    ...flashcardsData,
    ...philosophyFlashcards,
    ...historyFlashcards,
    ...physiqueChimieFlashcards,
    ...geographieFlashcards,
    ...emcFlashcards,
    ...anglaisFlashcards
];

// Function to get flashcards based on criteria
export const getFlashcards = (
  matiere?: string, 
  niveau?: NiveauType, 
  limit?: number,
  diplome?: string
): Flashcard[] => {
  // Start with an empty array to avoid combining cards prematurely
  let filteredFlashcards: Flashcard[] = [];
  
  // First, filter by diploma
  const byDiplome = diplome 
    ? allFlashcards.filter(card => card.diplome === diplome)
    : allFlashcards;

  // Then filter by matiere if specified
  if (matiere) {
    filteredFlashcards = byDiplome.filter(card => card.matiere === matiere);
  } else {
    filteredFlashcards = byDiplome;
  }

  // Filter by niveau - critical part that was causing the issue
  if (niveau && niveau !== 'both') {
    filteredFlashcards = filteredFlashcards.filter(card => card.niveau === niveau);
  }

  // Randomize the array
  filteredFlashcards.sort(() => Math.random() - 0.5);

  // Limit the number of flashcards
  if (limit && limit > 0 && filteredFlashcards.length > limit) {
    filteredFlashcards = filteredFlashcards.slice(0, limit);
  }

  return filteredFlashcards;
};

// Combine all flashcards into one array for general access
// This section doesn't affect the filtering above since we're building the filtered array from scratch
const allFlashcards = [
  ...flashcardsData,
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
  ...anglaisTerminaleFlashcards
];
