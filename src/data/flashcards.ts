
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
    niveau: 'facile',
    diplome: 'toeic'
  },
  {
    id: '10',
    question: 'Compléter : The meeting will be held ____ Tuesday.',
    answer: 'on',
    matiere: 'Grammaire',
    niveau: 'intermediaire',
    diplome: 'toeic'
  },
  // Ajout de questions TOEIC de niveau avancé
  {
    id: '35',
    question: 'What\'s the most appropriate response to: "I\'m considering tendering my resignation."',
    answer: 'I\'m sorry to hear that. Perhaps we could discuss your concerns first.',
    matiere: 'Compréhension orale',
    niveau: 'avance',
    diplome: 'toeic'
  },
  // TAGE MAGE flashcards
  {
    id: '11',
    question: 'Calculer : 15 * 3',
    answer: '45',
    matiere: 'Calcul',
    niveau: 'facile',
    diplome: 'tage-mage'
  },
  {
    id: '12',
    question: 'Résoudre la suite logique : 2, 4, 6, ?',
    answer: '8',
    matiere: 'Logique',
    niveau: 'intermediaire',
    diplome: 'tage-mage'
  },
  // Ajout de questions TAGE MAGE de niveau avancé
  {
    id: '36',
    question: 'Résoudre : Si n² - 4n + k = 0 a une racine double, quelle est la valeur de k ?',
    answer: '4',
    matiere: 'Calcul',
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
    niveau: 'intermediaire',
    diplome: 'toefl'
  },
  {
    id: '28',
    question: 'What\'s the meaning of "to procrastinate"?',
    answer: 'To delay or postpone action; put off doing something',
    matiere: 'Vocabulary',
    niveau: 'facile',
    diplome: 'toefl'
  },
  // Ajout de questions TOEFL de niveau avancé
  {
    id: '37',
    question: 'Critique the following argument: "Censorship is justified because some information is harmful."',
    answer: 'This argument fails to consider who determines what is harmful, ignores the value of freedom of information, and assumes censorship is an effective solution to harmful content.',
    matiere: 'Writing',
    niveau: 'avance',
    diplome: 'toefl'
  },
  // IELTS flashcards
  {
    id: '29',
    question: 'What\'s the recommended structure for IELTS Writing Task 2?',
    answer: 'Introduction, 2-3 body paragraphs, and conclusion. About 250 words minimum.',
    matiere: 'Writing',
    niveau: 'intermediaire',
    diplome: 'ielts'
  },
  {
    id: '30',
    question: 'What\'s the difference between IELTS Academic and General Training?',
    answer: 'Academic is for higher education studies; General Training is for work experience or migration purposes. Reading and Writing sections differ.',
    matiere: 'Academic',
    niveau: 'facile',
    diplome: 'ielts'
  },
  // Ajout de questions IELTS de niveau avancé
  {
    id: '38',
    question: 'Describe a time when technology failed you and how you dealt with the situation.',
    answer: 'This is a speaking prompt that requires a personal anecdote about technology failure and resilience, with advanced vocabulary and complex sentence structures.',
    matiere: 'Speaking',
    niveau: 'avance',
    diplome: 'ielts'
  },
  // Cambridge flashcards
  {
    id: '31',
    question: 'Which phrasal verb means "to cancel"?',
    answer: 'To call off',
    matiere: 'Reading & Use of English',
    niveau: 'facile',
    diplome: 'cambridge'
  },
  {
    id: '32',
    question: 'What\'s a "collocation"?',
    answer: 'A group of words that usually go together, like "make a mistake" or "heavy rain"',
    matiere: 'Reading & Use of English',
    niveau: 'intermediaire',
    diplome: 'cambridge'
  },
  // Ajout de questions Cambridge de niveau avancé
  {
    id: '39',
    question: 'Explain the rule for inversion after negative or limiting adverbials.',
    answer: 'After negative or limiting adverbials (e.g., never, rarely, seldom, hardly, only then), the auxiliary verb comes before the subject: "Never have I seen such a performance."',
    matiere: 'Grammar',
    niveau: 'avance',
    diplome: 'cambridge'
  },
  // GMAT flashcards
  {
    id: '33',
    question: 'What is the difference between the mean and the median?',
    answer: 'The mean is the average of all values; the median is the middle value when arranged in order',
    matiere: 'Quantitative',
    niveau: 'facile',
    diplome: 'gmat'
  },
  {
    id: '34',
    question: 'What type of triangle has all sides of equal length?',
    answer: 'Equilateral triangle',
    matiere: 'Quantitative',
    niveau: 'intermediaire',
    diplome: 'gmat'
  },
  // Ajout de questions GMAT de niveau avancé
  {
    id: '40',
    question: 'If f(x) = x² - 3x + 2 and g(x) = 2x - 1, find f(g(3)).',
    answer: '25',
    matiere: 'Quantitative',
    niveau: 'avance',
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

// Combine all flashcards into one array for general access
const allFlashcards = [
    ...flashcardsData,
    ...philosophyFlashcards,
    ...historyFlashcards,
    ...physiqueChimieFlashcards,
    ...geographieFlashcards,
    ...emcFlashcards,
    ...anglaisFlashcards
];

// Function to get flashcards based on criteria - corrected for strict filtering by niveau
export const getFlashcards = (
  matiere?: string, 
  niveau?: NiveauType, 
  limit?: number,
  diplome?: string
): Flashcard[] => {
  console.log(`Filtrage avec : matière=${matiere}, niveau=${niveau}, diplôme=${diplome}`);
  
  // Start with all flashcards
  let filteredFlashcards = [...allFlashcards]; // Create a copy to avoid reference issues
  
  // First, filter by diploma if specified
  if (diplome) {
    filteredFlashcards = filteredFlashcards.filter(card => card.diplome === diplome);
    console.log(`Après filtrage par diplôme (${diplome}): ${filteredFlashcards.length} cartes`);
  }

  // Then filter by matiere if specified
  if (matiere) {
    filteredFlashcards = filteredFlashcards.filter(card => card.matiere === matiere);
    console.log(`Après filtrage par matière (${matiere}): ${filteredFlashcards.length} cartes`);
  }

  // Then filter by niveau - corrected to ensure strict filtering
  if (niveau) {
    // Only skip niveau filtering if niveau is explicitly 'both'
    if (niveau !== 'both') {
      filteredFlashcards = filteredFlashcards.filter(card => card.niveau === niveau);
      console.log(`Après filtrage strict par niveau (${niveau}): ${filteredFlashcards.length} cartes`);
      
      // Log some examples of filtered cards to verify correct filtering
      if (filteredFlashcards.length > 0) {
        console.log('Exemples de cartes après filtrage par niveau:');
        filteredFlashcards.slice(0, 3).forEach(card => {
          console.log(`ID: ${card.id}, Matière: ${card.matiere}, Niveau: ${card.niveau}, Diplôme: ${card.diplome}`);
        });
      }
    } else {
      // For "both" option in brevet (quatrieme and troisieme)
      if (diplome === 'brevet') {
        console.log(`Niveau 'both' sélectionné pour le brevet, inclusion des niveaux troisieme et quatrieme uniquement`);
        filteredFlashcards = filteredFlashcards.filter(card => 
          card.niveau === 'troisieme' || card.niveau === 'quatrieme'
        );
      } 
      // For "both" option in baccalaureat (premiere and terminale)
      else if (diplome === 'baccalaureat') {
        console.log(`Niveau 'both' sélectionné pour le baccalauréat, inclusion des niveaux premiere et terminale uniquement`);
        filteredFlashcards = filteredFlashcards.filter(card => 
          card.niveau === 'premiere' || card.niveau === 'terminale'
        );
      }
      // For other diploma types with "facile", "intermediaire", "avance" levels
      else {
        console.log(`Niveau 'both' sélectionné pour ${diplome}, inclusion de tous les niveaux`);
      }
    }
  }

  // Randomize the array
  filteredFlashcards.sort(() => Math.random() - 0.5);

  // Limit the number of flashcards
  if (limit && limit > 0 && filteredFlashcards.length > limit) {
    filteredFlashcards = filteredFlashcards.slice(0, limit);
  }

  return filteredFlashcards;
};
