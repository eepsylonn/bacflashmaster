
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Some economists argue that the pursuit of continuous economic growth is incompatible with environmental sustainability, while others contend that technological innovation can enable sustainable growth. Critically evaluate these positions, drawing on specific examples to support your analysis.",
    answer: "Sample response should demonstrate sophisticated understanding of: the tension between growth-based economic models and planetary boundaries, various definitions of sustainability, evidence of decoupling or its limitations, technological optimism versus precautionary approaches, and alternative economic frameworks. It should engage critically with underlying assumptions of both positions while developing a nuanced perspective that acknowledges complexity and uncertainty.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "The digital surveillance capabilities of governments and corporations have expanded dramatically in recent years. Evaluate the ethical implications of these developments, considering both security benefits and privacy concerns.",
    answer: "Sample response should analyze: competing conceptions of privacy and security, specific surveillance technologies and their capabilities, power asymmetries, legal frameworks and their limitations, cross-cultural perspectives, and long-term societal implications. It should demonstrate sophisticated ethical reasoning that weighs consequentialist and deontological perspectives, addresses potential cognitive biases, and develops a principled position on appropriate limits and safeguards.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Artificial intelligence systems increasingly make or influence decisions that affect human lives in areas such as hiring, lending, and criminal justice. What principles should govern the development and deployment of AI in these contexts?",
    answer: "Sample response should address: technical challenges (explainability, bias, robustness), ethical frameworks (consequentialism, rights-based approaches, virtue ethics), governance models (self-regulation, government oversight, participatory design), and potential societal impacts. It should demonstrate nuanced understanding of both technical and ethical dimensions while articulating principled positions on accountability, transparency, fairness, and human agency.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "In many societies, there is growing polarization along political, cultural, and social lines. Analyze the causes of this phenomenon and evaluate strategies for addressing it while preserving democratic values.",
    answer: "Sample response should examine: media ecosystems and information environments, economic factors, identity politics, institutional design, and historical context. It should critically evaluate proposed interventions (media regulation, educational approaches, deliberative forums, electoral reforms) with attention to implementation challenges, potential unintended consequences, and tensions between different democratic values.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some scholars argue that globalization has fundamentally transformed the nation-state system, while others contend that nation-states remain the primary actors in world affairs. Evaluate these perspectives, drawing on specific examples from politics, economics, and culture.",
    answer: "Sample response should demonstrate sophisticated understanding of: evolving conceptions of sovereignty, transnational challenges and governance mechanisms, economic integration and its limitations, cultural flows and localization, and power dynamics between different types of actors. It should develop a nuanced position that acknowledges both transformation and continuity while evaluating implications for governance, identity, and justice.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  }
];

// For backwards compatibility
export const WritingAvanceToeflFlashcards = writingAvanceToeflFlashcards;
