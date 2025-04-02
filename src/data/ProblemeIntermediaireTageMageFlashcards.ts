
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const problemeIntermediaireTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Un camion part du point A à 8h et roule à 60 km/h vers le point B. Une voiture part à 9h30 du point B et roule vers A à 90 km/h. Si la distance entre A et B est de 315 km, à quelle heure se croiseront-ils ?",
    answer: "11h00",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Pour fabriquer 20 pièces, 8 ouvriers travaillent pendant 6 jours. Combien faut-il d'ouvriers pour produire 30 pièces en 4 jours ?",
    answer: "18 ouvriers",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un bassin se remplit par un robinet en 4 heures et se vide par un orifice en 6 heures. Si les deux sont ouverts simultanément, combien de temps faudra-t-il pour remplir le bassin ?",
    answer: "12 heures",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un capital de 10 000€ est placé à un taux annuel de 5%. Au bout de combien d'années ce capital aura-t-il doublé (intérêts composés) ?",
    answer: "Environ 14 ans",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Dans un groupe de 60 personnes, 35 parlent anglais, 25 parlent espagnol et 10 parlent les deux langues. Combien ne parlent ni anglais ni espagnol ?",
    answer: "10 personnes",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un produit est vendu 540€ avec une remise de 10%. Quel était son prix initial ?",
    answer: "600€",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une eau contient 3% de sel. Quelle quantité d'eau pure faut-il ajouter à 200g de cette eau salée pour obtenir une solution à 2% ?",
    answer: "100g",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un cycliste parcourt 40% d'un trajet à 20 km/h et le reste à 30 km/h. Quelle est sa vitesse moyenne sur l'ensemble du trajet ?",
    answer: "24 km/h",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Trois personnes peuvent peindre une maison en 10 jours. Combien de personnes faudrait-il pour peindre la même maison en 6 jours ?",
    answer: "5 personnes",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "A et B peuvent réaliser un travail en 12 jours. A seul peut le faire en 20 jours. En combien de temps B seul peut-il réaliser ce travail ?",
    answer: "30 jours",
    matiere: "Problème",
    niveau: "intermediaire",
    diplome: "tage-mage"
  }
];
