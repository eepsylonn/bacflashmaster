
import { Flashcard, NiveauType, DiplomeType } from '@/types';

// Mock flashcard data
const flashcardsData: Flashcard[] = [
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
    matiere: 'Physique',
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
    matiere: 'Physique',
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
];

// Function to get flashcards based on criteria
export const getFlashcards = (
  matiere?: string, 
  niveau?: NiveauType, // Accepte désormais correctement NiveauType
  limit?: number,
  diplome?: string
): Flashcard[] => {
  let filteredFlashcards = flashcardsData;

  if (diplome) {
    filteredFlashcards = filteredFlashcards.filter(card => card.diplome === diplome);
  }

  if (matiere) {
    filteredFlashcards = filteredFlashcards.filter(card => card.matiere === matiere);
  }

  if (niveau) {
    filteredFlashcards = filteredFlashcards.filter(card => card.niveau === niveau);
  }

  // Randomize the array
  filteredFlashcards.sort(() => Math.random() - 0.5);

  // Limit the number of flashcards
  if (limit) {
    filteredFlashcards = filteredFlashcards.slice(0, limit);
  }

  return filteredFlashcards;
};
