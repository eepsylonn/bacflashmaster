
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingAvanceCambridgeFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "To what extent does economic growth conflict with environmental sustainability? Is it possible to achieve both simultaneously?",
    answer: "Begin with a conceptual analysis of the tension between growth and sustainability, examine multiple economic models (linear economy vs. circular economy), evaluate real-world case studies of sustainable development initiatives (both successes and failures), analyze policy instruments (carbon pricing, green subsidies, regulatory approaches), consider different stakeholder perspectives (businesses, governments, future generations), and propose a nuanced framework for reconciliation. Use sophisticated economic and environmental terminology, complex sentence structures with accurate subordination, hypothetical constructions, and well-structured argumentation spanning 3-4 minutes.",
    matiere: "Speaking",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "How does the concept of national identity evolve in an increasingly globalized world? Consider both cultural and political dimensions.",
    answer: "Define national identity through multiple lenses (historical, cultural, linguistic, institutional), analyze how globalization forces (migration, digital connectivity, economic integration) both challenge and reinforce identity, compare different national responses (isolationism, multiculturalism, cultural protectionism), discuss specific case studies of evolving identities in different regions, consider generational differences in identity formation, and reflect on potential future trajectories. Use abstract conceptual vocabulary, complex grammatical structures, cultural references, historical allusions, and balanced analytical tone.",
    matiere: "Speaking",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "Evaluate the ethical implications of artificial intelligence systems making decisions that affect human lives, particularly in healthcare, criminal justice, and financial sectors.",
    answer: "Establish a framework for ethical analysis (consequentialist, deontological, virtue ethics), examine domain-specific challenges in each sector with concrete examples, analyze key ethical concerns (algorithmic bias, transparency, accountability, human autonomy), consider competing stakeholder interests (developers, users, regulators, subjects), evaluate existing and proposed governance mechanisms, and propose ethical principles that should guide future AI development. Use precise terminology, philosophical concepts, conditional and speculative language, and well-structured ethical reasoning.",
    matiere: "Speaking",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "In what ways might the concept of work fundamentally change over the next few decades? Consider technological, social, and economic factors.",
    answer: "Analyze historical patterns of work transformation, examine current technological drivers (automation, AI, remote collaboration tools), discuss potential economic models (gig economy, universal basic income, post-scarcity scenarios), consider changing social attitudes toward work-life integration, evaluate sector-specific transformations, address potential inequalities in work transformation, and consider implications for education and skills development. Use future perfect and continuous forms, specialized vocabulary related to employment and technology, complex causal relationships, and evidence-based speculation.",
    matiere: "Speaking",
    niveau: "avance",
    diplome: "cambridge"
  },
  {
    id: generateId(),
    question: "To what extent should freedom of expression be limited in democratic societies? Consider both legal and ethical perspectives.",
    answer: "Examine philosophical foundations of free expression (Mill, Voltaire), analyze legal frameworks in different democracies, evaluate competing rights and interests (personal dignity, public safety, truth in discourse), discuss contemporary challenges (hate speech, misinformation, digital platforms), consider different regulatory approaches with specific examples, analyze unintended consequences of various limitations, and propose a coherent framework balancing competing values. Use legal terminology, conditional constructions for hypothetical scenarios, balanced evaluative language, concessive structures acknowledging opposing viewpoints, and nuanced argumentative techniques.",
    matiere: "Speaking",
    niveau: "avance",
    diplome: "cambridge"
  }
];

// Pour compatibilité
export const SpeakingAvanceCambridgeFlashcards = speakingAvanceCambridgeFlashcards;
