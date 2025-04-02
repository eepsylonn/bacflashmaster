
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const technologieQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un algorithme et à quoi sert-il ?",
    answer: "Suite finie et non ambiguë d'opérations permettant de résoudre un problème; sert à automatiser des tâches",
    explication: "Un algorithme est une méthode de résolution de problème constituée d'étapes précises et ordonnées. Il est à la base de tout programme informatique et permet d'automatiser des tâches répétitives, de traiter des données ou de contrôler des systèmes. Les algorithmes se retrouvent dans de nombreux domaines: GPS, traitement d'images, réseaux sociaux, etc.",
    niveau: "quatrieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un réseau informatique et quels sont ses composants principaux ?",
    answer: "Ensemble d'équipements connectés pour échanger des informations; composants: ordinateurs, routeurs, commutateurs, câbles, protocoles",
    explication: "Un réseau informatique permet à différents appareils de communiquer et de partager des ressources. Il comprend des équipements terminaux (ordinateurs, smartphones), des équipements d'interconnexion (routeurs, commutateurs), des supports de transmission (câbles, ondes) et des protocoles qui définissent les règles de communication (comme le TCP/IP).",
    niveau: "quatrieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les étapes principales d'un projet technologique ?",
    answer: "Analyse du besoin, cahier des charges, recherche de solutions, choix d'une solution, réalisation, tests, validation",
    explication: "Un projet technologique suit une démarche structurée: identifier le besoin, établir un cahier des charges fonctionnel, rechercher différentes solutions techniques, choisir la plus adaptée en fonction de critères, concevoir et réaliser le prototype, tester son fonctionnement et valider qu'il répond bien au besoin initial.",
    niveau: "quatrieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un système automatisé et quels sont ses constituants ?",
    answer: "Système qui effectue des tâches sans intervention humaine; constituants: partie commande (programme), partie opérative (actionneurs), capteurs",
    explication: "Un système automatisé exécute des tâches prédéfinies de manière autonome. Il comprend une partie commande (processeur, programme) qui traite les informations et prend les décisions, des capteurs qui récoltent des informations sur l'environnement, et une partie opérative avec des actionneurs (moteurs, vérins) qui agissent sur l'environnement.",
    niveau: "quatrieme",
    matiere: "Technologie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les principaux impacts environnementaux des objets techniques et comment les réduire ?",
    answer: "Impacts: consommation de ressources, pollution, déchets; réduction: éco-conception, recyclage, réparation, économie circulaire",
    explication: "Les objets techniques impactent l'environnement tout au long de leur cycle de vie: extraction de matières premières, fabrication (énergie, pollution), utilisation (consommation d'énergie) et fin de vie (déchets). Pour réduire ces impacts, on peut pratiquer l'éco-conception (conception minimisant l'impact environnemental), favoriser la réparabilité, le recyclage des matériaux et adopter une approche d'économie circulaire.",
    niveau: "quatrieme",
    matiere: "Technologie",
    diplome: "brevet"
  }
];
