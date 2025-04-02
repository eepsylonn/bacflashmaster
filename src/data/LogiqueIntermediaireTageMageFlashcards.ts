
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const logiqueIntermediaireTageMageFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Paul est plus grand que Marie. Marie est plus petite que Sophie. Sophie est plus grande que Paul. Ces affirmations sont-elles cohérentes ?",
    answer: "Non, elles sont contradictoires",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la prochaine figure dans la série : ○, □, △, ○, □, ?",
    answer: "△",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez la suite : 3, 6, 12, 24, ?",
    answer: "48",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si je dis 'Je mens toujours', est-ce vrai ou faux ?",
    answer: "C'est un paradoxe (impossible à déterminer)",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez : 1, 3, 6, 10, 15, ?",
    answer: "21",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle est la règle dans cette suite : 5, 4, 6, 3, 7, 2, 8, ?",
    answer: "1 (les nombres pairs diminuent de 1 et les nombres impairs augmentent de 1)",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Si 'pas faux' signifie 'vrai' et 'pas vrai' signifie 'faux', que signifie 'pas pas faux' ?",
    answer: "Faux",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Complétez l'analogie : Médecin est à patient ce que professeur est à ?",
    answer: "Élève",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Quelle lettre manque : A, D, G, J, ?",
    answer: "M (chaque lettre avance de 3 rangs dans l'alphabet)",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  },
  {
    id: generateId(),
    question: "Parmi ces 5 mots, lequel n'appartient pas à la même catégorie que les autres : lire, écrire, courir, nager, comprendre",
    answer: "Comprendre (c'est un processus mental, les autres sont des actions physiques)",
    matiere: "Logique",
    niveau: "intermediaire",
    diplome: "tage-mage"
  }
];
