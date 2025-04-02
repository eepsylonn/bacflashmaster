
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const emcQuatriemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les principales valeurs de la République française ?",
    answer: "Liberté, Égalité, Fraternité, Laïcité",
    explication: "La devise officielle 'Liberté, Égalité, Fraternité' est complétée par le principe de laïcité. La liberté garantit les droits fondamentaux, l'égalité assure les mêmes droits à tous les citoyens, la fraternité appelle à la solidarité, et la laïcité garantit la neutralité de l'État et la liberté de conscience.",
    niveau: "quatrieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que la laïcité et comment s'applique-t-elle en France ?",
    answer: "Principe de séparation des Églises et de l'État; neutralité de l'État, liberté de conscience, égalité de traitement des croyances",
    explication: "La laïcité, fondée sur la loi de 1905, établit la séparation des Églises et de l'État. Elle implique la neutralité de l'État qui ne reconnaît, ne salarie ni ne subventionne aucun culte, garantit la liberté de conscience (croire ou ne pas croire) et assure l'égalité de tous devant la loi sans distinction de religion.",
    niveau: "quatrieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quelles sont les différentes formes de discrimination et comment sont-elles sanctionnées ?",
    answer: "Discriminations basées sur l'origine, le sexe, le handicap, les opinions, etc.; sanctionnées par la loi (amendes, prison)",
    explication: "La discrimination est le traitement défavorable d'une personne en raison de critères interdits par la loi (20 critères comme l'origine, le sexe, l'orientation sexuelle, le handicap, les opinions politiques...). Elle est sanctionnée pénalement avec des peines pouvant aller jusqu'à 3 ans d'emprisonnement et 45 000€ d'amende.",
    niveau: "quatrieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que l'engagement citoyen et quelles formes peut-il prendre ?",
    answer: "Participation active à la vie de la cité; vote, association, bénévolat, service civique, délégué de classe",
    explication: "L'engagement citoyen est la participation active des individus à la vie collective. Il peut prendre différentes formes: exercice du droit de vote, adhésion à des associations, bénévolat, service civique, militantisme, ou encore, pour les collégiens, l'engagement comme délégué de classe ou au conseil de la vie collégienne.",
    niveau: "quatrieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les droits et les devoirs d'un citoyen français ?",
    answer: "Droits civils, politiques et sociaux; devoirs de respecter la loi, payer les impôts, participer à la défense",
    explication: "Le citoyen français bénéficie de droits civils (libertés fondamentales), politiques (voter, être élu) et sociaux (éducation, santé, protection sociale). En contrepartie, il a des devoirs: respecter les lois, participer aux charges publiques (impôts), contribuer à la défense nationale, et plus généralement respecter les droits d'autrui et participer à la vie démocratique.",
    niveau: "quatrieme",
    matiere: "EMC",
    diplome: "brevet"
  }
];
