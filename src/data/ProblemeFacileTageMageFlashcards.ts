
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const problemeFacileTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Paul a 5 pommes de plus que Marie. Ensemble, ils ont 25 pommes. Combien de pommes a Marie ?",
    answer: "10 pommes",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un train part à 14h et roule à 80 km/h. Un autre train part à 15h30 dans la direction opposée à 100 km/h. À quelle heure seront-ils distants de 300 km ?",
    answer: "17h00",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une boîte contient 20 billes : des rouges, des bleues et des vertes. Il y a deux fois plus de billes rouges que de billes bleues, et 4 billes vertes. Combien y a-t-il de billes rouges ?",
    answer: "10 billes rouges",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un robinet remplit une baignoire en 10 minutes. Un second robinet la remplit en 15 minutes. Combien de temps mettront-ils ensemble pour remplir la baignoire ?",
    answer: "6 minutes",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Dans une classe de 30 élèves, 18 étudient l'anglais et 15 étudient l'espagnol. Combien d'élèves étudient les deux langues ?",
    answer: "3 élèves",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un livre coûte 25€. Le prix augmente de 20%. De quel pourcentage doit-il diminuer ensuite pour revenir au prix initial ?",
    answer: "16,67%",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Pierre et Jacques se partagent des billes dans le rapport 2:3. Si Pierre a 12 billes, combien Jacques en a-t-il ?",
    answer: "18 billes",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Pour un trajet de 240 km, une voiture consomme 12 litres d'essence. Combien consommera-t-elle pour un trajet de 400 km ?",
    answer: "20 litres",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un commerçant augmente ses prix de 10%, puis les baisse de 10%. Quelle est la variation totale en pourcentage ?",
    answer: "-1%",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Trois amis se partagent 85€. Le premier reçoit 15€ de plus que le deuxième, qui reçoit 5€ de moins que le troisième. Combien reçoit le premier ?",
    answer: "35€",
    matiere: "Problème",
    niveau: "facile",
    diplome: "tage-mage"
  }
];
