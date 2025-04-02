
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const svtQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Qu'est-ce que la reproduction sexuée et quels sont ses avantages ?",
    answer: "Reproduction impliquant deux individus et la fusion de gamètes (mâle et femelle); avantage principal: diversité génétique",
    explication: "La reproduction sexuée nécessite deux parents qui produisent des cellules reproductrices (gamètes) qui fusionnent lors de la fécondation. Elle crée de la diversité génétique grâce au brassage des caractères, ce qui favorise l'adaptation des espèces aux changements environnementaux, contrairement à la reproduction asexuée qui produit des clones.",
    niveau: "quatrieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les mécanismes de défense de l'organisme contre les microbes ?",
    answer: "Barrières naturelles (peau, muqueuses), réaction inflammatoire, phagocytose, réponse immunitaire adaptative (anticorps)",
    explication: "L'organisme dispose de plusieurs lignes de défense: les barrières physico-chimiques (peau, sueur acide, larmes) empêchent l'entrée des microbes; l'immunité innée avec l'inflammation et la phagocytose (globules blancs qui 'mangent' les microbes); l'immunité adaptative avec la production d'anticorps spécifiques et la mémoire immunitaire.",
    niveau: "quatrieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Expliquez le fonctionnement de la digestion chez l'homme.",
    answer: "Transformation mécanique et chimique des aliments en nutriments absorbables, de la bouche au gros intestin, impliquant enzymes et sucs digestifs",
    explication: "La digestion commence dans la bouche (mastication, salive), se poursuit dans l'estomac (brassage, acide), puis dans l'intestin grêle où les enzymes pancréatiques et la bile dégradent les aliments en nutriments qui sont absorbés à travers la paroi intestinale. Les déchets sont compactés dans le gros intestin avant d'être éliminés.",
    niveau: "quatrieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que la tectonique des plaques et quelles sont ses manifestations ?",
    answer: "Théorie expliquant la mobilité de la lithosphère divisée en plaques; manifestations: séismes, volcans, formation de chaînes de montagnes",
    explication: "La tectonique des plaques décrit le mouvement des plaques lithosphériques sur l'asthénosphère. Au niveau des frontières de plaques se produisent des phénomènes géologiques: zones de divergence (dorsales océaniques), de convergence (subduction, collision) créant montagnes et fosses, et zones de coulissage. Ces mouvements expliquent la répartition des séismes et volcans.",
    niveau: "quatrieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'un écosystème et quelles relations existent entre ses composantes ?",
    answer: "Ensemble formé par un milieu (biotope) et les êtres vivants qui y vivent (biocénose); relations: chaînes alimentaires, compétition, symbiose, parasitisme",
    explication: "Un écosystème comprend des éléments abiotiques (sol, climat, eau) et biotiques (organismes vivants). Les êtres vivants interagissent entre eux via diverses relations écologiques: relations trophiques (qui mange qui), compétition pour les ressources, coopération (symbiose, mutualisme), ou parasitisme. Ces interactions contribuent aux flux de matière et d'énergie dans l'écosystème.",
    niveau: "quatrieme",
    matiere: "SVT",
    diplome: "brevet"
  }
];
