
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// TOEIC Flashcards supplémentaires
export const toeicExtraFlashcards: Flashcard[] = [
  // Grammaire
  {
    id: generateId(),
    question: "What is the correct usage of 'few' vs 'a few'?",
    answer: "'Few' has a negative meaning and suggests 'almost none'. 'A few' has a positive meaning and suggests 'some'.",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "When should I use Present Perfect Continuous?",
    answer: "Use Present Perfect Continuous for actions that started in the past and continue until now, with emphasis on the ongoing process, e.g., 'I have been working here for five years.'",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "How do you form tag questions?",
    answer: "If the main statement is positive, the tag is negative and vice versa. Use the same auxiliary verb (or 'do' if there's no auxiliary in the statement). Example: 'You work here, don't you?'",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the difference between 'may' and 'might'?",
    answer: "'May' indicates a stronger possibility than 'might'. 'May' suggests about a 50% chance, while 'might' suggests a smaller chance.",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "When do we use 'used to' vs 'would'?",
    answer: "Both describe past habits, but 'used to' can refer to states and habits while 'would' only describes habitual actions. Example: 'I used to live in Paris' vs 'Every Sunday, I would visit my grandmother.'",
    matiere: "TOEIC Grammar",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  
  // Vocabulaire business
  {
    id: generateId(),
    question: "What does 'ROI' stand for in business?",
    answer: "Return On Investment - a measure of the efficiency or profitability of an investment",
    matiere: "TOEIC Business Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What does 'to streamline' mean in business context?",
    answer: "To make a process or organization more efficient and effective by simplifying or eliminating unnecessary steps, tasks, or features",
    matiere: "TOEIC Business Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is a 'stakeholder' in business?",
    answer: "A person, group, or organization that has interest or concern in a business or project, such as investors, employees, customers, suppliers, communities, etc.",
    matiere: "TOEIC Business Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What is the meaning of 'to leverage' in business?",
    answer: "To use something to maximum advantage, e.g., 'The company leveraged its brand recognition to enter new markets'",
    matiere: "TOEIC Business Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What does 'B2B' stand for?",
    answer: "Business-to-Business - commercial transactions between businesses rather than between businesses and consumers",
    matiere: "TOEIC Business Vocabulary",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  
  // Listening comprehension
  {
    id: generateId(),
    question: "What should you listen for in Part 1 of the TOEIC test (Photographs)?",
    answer: "Focus on the main elements in the photo, people's actions, physical descriptions, locations, and objects. Prepare for prepositions of place and action verbs.",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What strategy should you use for Part 3 of the TOEIC test (Conversations)?",
    answer: "Read the questions first, identify the speakers and their relationship, listen for key details, pay attention to tone of voice for attitudes, and be aware of distractors.",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "How should you approach Part 4 of the TOEIC test (Short Talks)?",
    answer: "Read the questions first, identify the type of talk (announcement, advertisement, etc.), listen for key information (who, what, where, when, why, how), and pay attention to numbers and specific details.",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  
  // Reading comprehension
  {
    id: generateId(),
    question: "What should you focus on in Part 5 of the TOEIC test (Incomplete Sentences)?",
    answer: "Pay attention to grammar (verb tense, subject-verb agreement, etc.), vocabulary (collocations, phrasal verbs), and context to determine the correct answer.",
    matiere: "TOEIC Reading",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "What strategy is effective for Part 7 of the TOEIC test (Reading Comprehension)?",
    answer: "Read the questions first, scan the texts for keywords, understand the overall meaning and purpose of each text, look for connectors and transitions, and eliminate clearly incorrect options.",
    matiere: "TOEIC Reading",
    niveau: "avance",
    diplome: "toeic"
  }
];

// TAGE MAGE Flashcards supplémentaires
export const tageMageExtraFlashcards: Flashcard[] = [
  // Calcul
  {
    id: generateId(),
    question: "Comment calculer rapidement 25% d'un nombre?",
    answer: "Diviser le nombre par 4. Exemple: 25% de 80 = 80 ÷ 4 = 20",
    matiere: "TAGE MAGE - Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment calculer rapidement 33,33% (ou 1/3) d'un nombre?",
    answer: "Diviser le nombre par 3. Exemple: 33,33% de 90 = 90 ÷ 3 = 30",
    matiere: "TAGE MAGE - Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la règle de calcul pour les puissances de 10?",
    answer: "Pour multiplier par 10^n, ajouter n zéros. Pour diviser par 10^n, déplacer la virgule de n positions vers la gauche.",
    matiere: "TAGE MAGE - Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment calculer un taux de variation?",
    answer: "Taux de variation = (Valeur finale - Valeur initiale) / Valeur initiale × 100%. Exemple: De 80 à 100: (100 - 80) / 80 × 100% = 25%",
    matiere: "TAGE MAGE - Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment utiliser la factorisation pour résoudre des calculs complexes?",
    answer: "Rechercher des facteurs communs pour simplifier l'expression. Exemple: 35 × 4 + 35 × 6 = 35 × (4 + 6) = 35 × 10 = 350",
    matiere: "TAGE MAGE - Calcul",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  
  // Logique
  {
    id: generateId(),
    question: "Qu'est-ce qu'un syllogisme valide?",
    answer: "Un raisonnement déductif composé de deux prémisses et d'une conclusion où la conclusion découle nécessairement des prémisses si celles-ci sont vraies.",
    matiere: "TAGE MAGE - Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une conclusion abductive?",
    answer: "Un raisonnement qui infère la cause la plus probable d'un phénomène observé. Ce n'est pas déductif (certitude) mais une forme d'inférence à la meilleure explication.",
    matiere: "TAGE MAGE - Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un sophisme?",
    answer: "Un raisonnement qui semble valide mais qui contient une erreur logique rendant la conclusion non fondée. Exemple: le sophisme ad hominem attaque la personne plutôt que son argument.",
    matiere: "TAGE MAGE - Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la différence entre une condition nécessaire et une condition suffisante?",
    answer: "Une condition nécessaire doit être présente pour qu'un événement se produise, mais ne garantit pas l'événement. Une condition suffisante garantit l'événement si elle est présente.",
    matiere: "TAGE MAGE - Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment réfuter un argument?",
    answer: "1) Critiquer la validité du raisonnement, 2) Contester la vérité des prémisses, 3) Montrer que la conclusion ne découle pas des prémisses, ou 4) Proposer un contre-exemple.",
    matiere: "TAGE MAGE - Logique",
    niveau: "avance",
    diplome: "tage-mage"
  },
  
  // Compréhension de texte
  {
    id: generateId(),
    question: "Quelle est la meilleure stratégie pour répondre aux questions de compréhension de texte du TAGE MAGE?",
    answer: "1) Lire les questions d'abord, 2) Lire activement le texte en repérant les idées principales et les mots-clés, 3) Éliminer les réponses manifestement fausses, 4) Vérifier que la réponse choisie est directement soutenue par le texte.",
    matiere: "TAGE MAGE - Compréhension",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment identifier la thèse principale d'un texte argumentatif?",
    answer: "Rechercher l'idée centrale défendue par l'auteur, souvent présentée dans l'introduction et rappelée dans la conclusion. Identifier les arguments qui soutiennent cette idée.",
    matiere: "TAGE MAGE - Compréhension",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment détecter les relations logiques entre les idées d'un texte?",
    answer: "Observer les connecteurs logiques (mais, cependant, donc, par conséquent, en effet, etc.) qui indiquent des relations de cause, conséquence, opposition, addition ou concession.",
    matiere: "TAGE MAGE - Compréhension",
    niveau: "avance",
    diplome: "tage-mage"
  },
  
  // Expression
  {
    id: generateId(),
    question: "Qu'est-ce qu'un argument par analogie?",
    answer: "Un raisonnement qui établit un parallèle entre deux situations ou objets différents pour suggérer que ce qui est vrai pour l'un pourrait l'être pour l'autre.",
    matiere: "TAGE MAGE - Expression",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Comment structurer efficacement une argumentation?",
    answer: "1) Introduire clairement la thèse, 2) Développer des arguments progressifs et cohérents, 3) Anticiper et réfuter les contre-arguments potentiels, 4) Conclure en résumant les points clés et en renforçant la thèse.",
    matiere: "TAGE MAGE - Expression",
    niveau: "intermediaire",
    diplome: "tage-mage"
  }
];

// Plus de flashcards pour le Baccalauréat
export const bacExtraFlashcards: Flashcard[] = [
  // Mathématiques supplémentaires
  {
    id: generateId(),
    question: "Quelle est la formule du binôme de Newton pour (a+b)^n?",
    answer: "(a+b)^n = Σ(k=0 à n) C(n,k) a^(n-k) b^k où C(n,k) = n!/(k!(n-k)!)",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment calculer la limite de (1+1/n)^n quand n tend vers l'infini?",
    answer: "La limite de (1+1/n)^n quand n tend vers l'infini est le nombre e ≈ 2,71828...",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment démontrer qu'une suite est convergente?",
    answer: "Plusieurs méthodes: montrer qu'elle est croissante et majorée (ou décroissante et minorée), utiliser un théorème de convergence, comparer à une suite connue, ou montrer que c'est une suite de Cauchy.",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  
  // Physique-Chimie supplémentaires
  {
    id: generateId(),
    question: "Qu'est-ce que la troisième loi de Newton?",
    answer: "Loi de l'action et de la réaction: Quand un corps A exerce une force sur un corps B, le corps B exerce sur le corps A une force égale en intensité, de même direction mais de sens opposé.",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment fonctionne une pile électrochimique?",
    answer: "Une pile convertit l'énergie chimique en énergie électrique par des réactions d'oxydoréduction spontanées. À l'anode, une oxydation libère des électrons qui circulent vers la cathode où ils sont consommés par une réduction.",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une onde stationnaire?",
    answer: "Une onde stationnaire résulte de la superposition de deux ondes progressives de même fréquence se propageant en sens inverse. Elle présente des nœuds (points immobiles) et des ventres (points d'amplitude maximale).",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  
  // SVT supplémentaires
  {
    id: generateId(),
    question: "Qu'est-ce que la méiose et pourquoi est-elle importante?",
    answer: "La méiose est une division cellulaire spécialisée qui permet de passer d'une cellule diploïde (2n chromosomes) à quatre cellules haploïdes (n chromosomes). Elle est cruciale pour la reproduction sexuée car elle permet la diversité génétique et maintient le nombre de chromosomes constant entre générations.",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment fonctionne la sélection naturelle dans l'évolution des espèces?",
    answer: "La sélection naturelle agit quand: 1) Les individus présentent des variations, 2) Ces variations sont héréditaires, 3) Certaines variations confèrent un avantage reproductif, 4) Les porteurs de ces variations laissent plus de descendants. Sur plusieurs générations, cela modifie les fréquences des caractères dans la population.",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la plasticité cérébrale?",
    answer: "Capacité du cerveau à se modifier structurellement et fonctionnellement en réponse aux expériences. Elle est particulièrement importante pendant le développement mais persiste à l'âge adulte, permettant l'apprentissage, la mémorisation et la récupération après lésion.",
    matiere: "SVT",
    niveau: "terminale"
  },
  
  // Philosophie supplémentaires
  {
    id: generateId(),
    question: "Quelle est la conception kantienne du devoir moral?",
    answer: "Pour Kant, le devoir moral ne dérive pas des conséquences de l'action ni du bonheur, mais de principes rationnels universels. Une action a une valeur morale uniquement si elle est accomplie par devoir, conformément à l'impératif catégorique, et non par inclination ou intérêt.",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le doute méthodique cartésien?",
    answer: "Méthode philosophique où Descartes rejette systématiquement toute connaissance pouvant être mise en doute afin d'établir des fondements absolument certains pour le savoir. Ce doute n'est pas sceptique mais temporaire et méthodologique pour atteindre la certitude.",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelle est la conception nietzschéenne du nihilisme?",
    answer: "Pour Nietzsche, le nihilisme est la dévaluation des valeurs suprêmes traditionnelles qui donnaient sens à l'existence. Il distingue le nihilisme passif (désespoir face à cette perte) du nihilisme actif qui permet la création de nouvelles valeurs par le surhomme (Übermensch).",
    matiere: "Philosophie",
    niveau: "terminale"
  }
];
