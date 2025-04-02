
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const emcTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les institutions principales de la Ve République et leur rôle ?",
    answer: "Président (exécutif), Gouvernement (exécutif), Parlement (législatif), Conseil constitutionnel (garant de la Constitution)",
    explication: "La Ve République repose sur plusieurs institutions: le Président qui dirige l'exécutif et peut dissoudre l'Assemblée, le Gouvernement dirigé par le Premier ministre, le Parlement (Assemblée nationale et Sénat) qui vote les lois, et le Conseil constitutionnel qui veille à la conformité des lois à la Constitution.",
    niveau: "troisieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une démocratie représentative et comment fonctionne-t-elle ?",
    answer: "Système où le peuple exerce sa souveraineté par l'intermédiaire de représentants élus; élections libres, pluralisme politique, séparation des pouvoirs",
    explication: "Dans une démocratie représentative, les citoyens élisent des représentants (députés, sénateurs, président) qui exercent le pouvoir en leur nom. Ce système repose sur des élections régulières, transparentes et pluralistes, le respect des libertés fondamentales et la séparation des pouvoirs pour éviter les abus.",
    niveau: "troisieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Que sont les médias et quel est leur rôle dans une démocratie ?",
    answer: "Moyens de diffusion massive de l'information; rôles d'informer, former l'opinion publique, contre-pouvoir",
    explication: "Les médias (presse, télévision, radio, internet) sont essentiels à la démocratie car ils informent les citoyens, contribuent au débat public, et exercent un contre-pouvoir en surveillant l'action des gouvernants. Leur pluralisme et leur indépendance sont cruciaux pour garantir une information libre et diversifiée.",
    niveau: "troisieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que l'Union européenne et comment influence-t-elle la citoyenneté française ?",
    answer: "Organisation supranationale regroupant 27 pays; citoyenneté européenne complémentaire (libre circulation, droit de vote aux élections européennes)",
    explication: "L'UE est une organisation supranationale avec des institutions communes (Commission, Parlement, Conseil). Elle crée une citoyenneté européenne qui s'ajoute à la citoyenneté nationale, donnant droit à la libre circulation dans l'espace Schengen, au vote aux élections européennes et municipales dans tout pays membre où l'on réside, et à la protection consulaire par n'importe quel pays de l'UE.",
    niveau: "troisieme",
    matiere: "EMC",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce que la Défense nationale et quels en sont les principes ?",
    answer: "Protection du territoire et des intérêts nationaux; assurée par les armées, basée sur la dissuasion nucléaire et l'engagement international",
    explication: "La Défense nationale vise à protéger le territoire, la population et les intérêts de la France. Elle repose sur les forces armées professionnelles (Terre, Air, Mer), la dissuasion nucléaire, et l'engagement dans des alliances (OTAN) et opérations internationales. La Journée Défense et Citoyenneté sensibilise tous les jeunes à ces enjeux.",
    niveau: "troisieme",
    matiere: "EMC",
    diplome: "brevet"
  }
];
