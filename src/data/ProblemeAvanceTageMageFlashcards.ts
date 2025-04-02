
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const problemeAvanceTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Une entreprise fabrique des produits A et B. Faire un produit A nécessite 2 heures sur la machine 1 et 1 heure sur la machine 2. Faire un produit B nécessite 1 heure sur la machine 1 et 3 heures sur la machine 2. La machine 1 est disponible 16 heures par jour et la machine 2 est disponible 18 heures par jour. Combien de produits A et B au maximum l'entreprise peut-elle fabriquer par jour ?",
    answer: "6 produits A et 4 produits B",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un laboratoire teste un nouveau médicament. La probabilité qu'une personne guérisse sans le médicament est de 30%. Avec le médicament, cette probabilité passe à 45%. Si parmi 200 personnes testées, 78 ont guéri, combien ont reçu le médicament (en supposant que le groupe est représentatif) ?",
    answer: "120 personnes",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une coopérative viticole dispose de 3 cuves de 8, 12 et 18 hectolitres. On souhaite les remplir complètement avec un mélange de vins rouge et blanc en respectant deux contraintes : il doit y avoir au total autant de vin rouge que de vin blanc, et chaque cuve doit contenir au plus 75% d'un même type de vin. Comment répartir les vins ?",
    answer: "Cuve 1 (8hl) : 2hl rouge et 6hl blanc, Cuve 2 (12hl) : 9hl rouge et 3hl blanc, Cuve 3 (18hl) : 8hl rouge et 10hl blanc",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Dans un tournoi d'échecs entre 8 joueurs, chaque joueur affronte tous les autres une seule fois. Un match nul rapporte 0,5 point à chaque joueur, une victoire 1 point et une défaite 0 point. Combien de points seront distribués au total dans ce tournoi ?",
    answer: "28 points",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un investisseur place 20 000€ à intérêts composés. Une partie à 4% annuel et le reste à 6% annuel. Au bout d'un an, il a gagné 1 000€ d'intérêts. Quelle somme a-t-il placée à 4% ?",
    answer: "15 000€",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une usine produit des pièces dont 5% sont défectueuses. Un contrôle qualité détecte 98% des pièces défectueuses mais considère également comme défectueuses 3% des pièces conformes. Quelle est la probabilité qu'une pièce soit réellement défectueuse sachant qu'elle a été détectée comme telle lors du contrôle ?",
    answer: "Environ 63%",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une société pétrolière envisage deux stratégies d'exploration. La stratégie A coûte 1 million d'euros et a 60% de chances de trouver un gisement rapportant 3 millions. La stratégie B coûte 2 millions d'euros et a 80% de chances de trouver un gisement rapportant 4 millions. Quelle stratégie maximise l'espérance de gain ?",
    answer: "Stratégie B (espérance de gain de 1,2 million contre 0,8 million pour A)",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Dans un club de sport, le ratio hommes/femmes est de 3:5. Si 20% des hommes et 40% des femmes pratiquent la natation, quelle proportion des membres du club pratique la natation ?",
    answer: "32,5%",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Une entreprise fabrique deux modèles de voiture, A et B. Le coût fixe mensuel est de 200 000€. Le coût variable est de 15 000€ par voiture A et 20 000€ par voiture B. La voiture A se vend 25 000€ et la B 35 000€. Combien de voitures de chaque modèle l'entreprise doit-elle vendre mensuellement pour réaliser un bénéfice d'au moins 100 000€ ?",
    answer: "Plusieurs combinaisons possibles, par exemple : 20 voitures A et 10 voitures B",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Un pays envisage de construire trois nouvelles centrales électriques de capacités 200, 300 et 500 MW. Chaque centrale peut être soit thermique (coût de construction : 1 million d'€/MW, coût de fonctionnement : 0,03€/kWh), soit nucléaire (coût de construction : 3 millions d'€/MW, coût de fonctionnement : 0,01€/kWh). Si le budget de construction est limité à 2 milliards d'€ et que l'on souhaite minimiser les coûts de fonctionnement pour une production de 8000 heures par an, quelles centrales doivent être nucléaires et lesquelles thermiques ?",
    answer: "La centrale de 500 MW doit être nucléaire, les deux autres thermiques",
    matiere: "Problème",
    niveau: "avance",
    diplome: "tage-mage"
  }
];
