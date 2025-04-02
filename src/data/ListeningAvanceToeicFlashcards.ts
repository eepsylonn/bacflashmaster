
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningAvanceToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Écoutez la présentation et répondez : Quels sont les deux marchés asiatiques mentionnés comme ayant la plus forte croissance?",
    answer: "Le Vietnam et la Thaïlande",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/marches-asiatiques.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la discussion technique et répondez : Quelle est la durée estimée pour la migration complète des données selon l'intervenant principal?",
    answer: "8 à 10 semaines, incluant une période de test parallèle",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/migration-donnees.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le rapport financier et répondez : Quel facteur externe a le plus influencé les résultats négatifs selon l'analyste?",
    answer: "Les tensions commerciales internationales et les hausses de tarifs douaniers",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/rapport-financier.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la téléconférence et répondez : Quelles sont les deux principales préoccupations juridiques mentionnées concernant l'acquisition?",
    answer: "Les problèmes d'antitrust dans l'UE et les implications fiscales aux États-Unis",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/preoccupations-juridiques.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la mise à jour du projet et répondez : Quels sont les trois problèmes d'expérience utilisateur identifiés lors des tests beta?",
    answer: "Navigation contre-intuitive, temps de chargement excessifs et problèmes de compatibilité mobile",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/problemes-ux.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la négociation et répondez : Pourquoi le représentant veut-il modifier les délais de livraison dans le contrat?",
    answer: "En raison de problèmes d'approvisionnement chez leurs fournisseurs principaux et de retards dans la chaîne logistique",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/delais-livraison.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la réunion stratégique et répondez : Quels deux segments de marché ont montré les meilleurs taux de conversion avec l'approche personnalisée?",
    answer: "Les professionnels de 25-34 ans et les cadres supérieurs de 45-55 ans",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/segments-marche.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez le briefing logistique et répondez : Quels sont les trois ajustements proposés pour réduire la consommation d'énergie du nouveau système?",
    answer: "Optimisation des cycles de refroidissement, mise à niveau du firmware et installation de capteurs intelligents",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/consommation-energie.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez l'annonce sur la santé et la sécurité et répondez : Quelles sont les deux nouvelles mesures de sécurité qui seront mises en place le mois prochain?",
    answer: "Un système d'identification biométrique et des procédures de confinement améliorées",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/mesures-securite.mp3"
  },
  {
    id: generateId(),
    question: "Écoutez la conférence de l'industrie et répondez : Quelles sont les trois réglementations principales que l'orateur prédit pour l'année prochaine?",
    answer: "Transparence des données, conformité environnementale renforcée et nouvelles exigences de reporting financier",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic",
    audio: "/audio/toeic/avance/reglementations-futures.mp3"
  },
];
