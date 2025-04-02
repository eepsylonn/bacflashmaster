
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const svtTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Qu'est-ce que le patrimoine génétique et comment est-il transmis ?",
    answer: "Ensemble des gènes d'un individu contenus dans l'ADN; transmis des parents aux enfants lors de la reproduction sexuée",
    explication: "Le patrimoine génétique est l'ensemble de l'information génétique portée par les chromosomes, formés d'ADN. Lors de la reproduction sexuée, chaque parent transmet la moitié de son patrimoine génétique via les gamètes (ovule et spermatozoïde). Leur fusion lors de la fécondation crée un nouvel individu avec un patrimoine génétique unique combinant celui des deux parents.",
    niveau: "troisieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Expliquez les mécanismes responsables de la diversité génétique des individus.",
    answer: "Brassage génétique lors de la méiose et de la fécondation, mutations génétiques",
    explication: "La diversité génétique provient de plusieurs mécanismes: le brassage interchromosomique lors de la méiose (répartition aléatoire des chromosomes paternels et maternels), le brassage intrachromosomique (échange de portions entre chromosomes homologues), la rencontre aléatoire des gamètes lors de la fécondation, et les mutations génétiques qui créent de nouvelles versions des gènes.",
    niveau: "troisieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que l'évolution des espèces et quels mécanismes l'expliquent ?",
    answer: "Transformation des espèces au cours du temps; expliquée par les mutations, la sélection naturelle, la dérive génétique",
    explication: "L'évolution est la modification des espèces au cours des générations. Selon la théorie synthétique, elle s'explique par l'apparition de mutations génétiques aléatoires, la sélection naturelle qui favorise les individus les mieux adaptés à leur environnement, et des phénomènes comme la dérive génétique (modifications aléatoires des fréquences alléliques dans les petites populations).",
    niveau: "troisieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les enjeux contemporains liés à la biodiversité ?",
    answer: "Érosion accélérée de la biodiversité, conséquences sur les écosystèmes et services écosystémiques, mesures de protection",
    explication: "La biodiversité subit une érosion sans précédent due aux activités humaines (déforestation, pollution, changement climatique). Cela menace le fonctionnement des écosystèmes et les services qu'ils rendent (pollinisation, épuration de l'eau, régulation du climat). Des mesures de protection sont nécessaires: création d'aires protégées, restauration d'habitats, lutte contre le changement climatique.",
    niveau: "troisieme",
    matiere: "SVT",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Expliquez le fonctionnement du système nerveux et son rôle dans les comportements.",
    answer: "Réseau de communication (neurones, nerfs, centres nerveux) qui reçoit, traite l'information et élabore des réponses; rôle dans les réflexes, mouvements volontaires, apprentissages",
    explication: "Le système nerveux comprend le système nerveux central (cerveau, moelle épinière) et périphérique (nerfs). L'information circule sous forme d'influx nerveux entre neurones via les synapses. Il permet les réflexes (réponses involontaires rapides), les mouvements volontaires, le traitement sensoriel, et est le siège des fonctions cognitives comme la mémoire et l'apprentissage.",
    niveau: "troisieme",
    matiere: "SVT",
    diplome: "brevet"
  }
];
