
import { Flashcard } from '@/types';
import { v4 as uuidv4 } from 'uuid';

export const geographieTrioisemeBrevetFlashcards: Flashcard[] = [
  {
    id: uuidv4(),
    question: "Quelles sont les principales caractéristiques de l'organisation du territoire français ?",
    answer: "Centralisation autour de Paris, réseau urbain hiérarchisé, divisions administratives (régions, départements, communes), disparités territoriales",
    explication: "Le territoire français est marqué par une forte centralisation autour de Paris (macrocéphalie), un système urbain hiérarchisé (métropoles régionales, villes moyennes...), un découpage administratif en régions, départements et communes, et des inégalités territoriales entre espaces dynamiques (métropoles, littoraux) et espaces en difficulté (certaines zones rurales, anciennes régions industrielles).",
    niveau: "troisieme",
    matiere: "Géographie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les principaux enjeux du développement durable et comment se traduisent-ils dans l'aménagement des territoires ?",
    answer: "Concilier développement économique, équité sociale et préservation environnementale; transition énergétique, éco-quartiers, transports collectifs",
    explication: "Le développement durable vise à répondre aux besoins présents sans compromettre les capacités des générations futures. Dans l'aménagement, cela se traduit par la promotion des énergies renouvelables, la construction d'éco-quartiers économes en énergie, le développement des transports collectifs, la protection des espaces naturels et la lutte contre l'étalement urbain.",
    niveau: "troisieme",
    matiere: "Géographie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Qu'est-ce qu'une métropole mondiale et quelles sont ses fonctions ?",
    answer: "Grande ville exerçant un rayonnement mondial; fonctions de commandement économique, politique, culturel et d'innovation",
    explication: "Une métropole mondiale est une très grande ville (souvent plusieurs millions d'habitants) qui concentre des fonctions de commandement à l'échelle internationale: sièges de grandes entreprises et organisations internationales, centres financiers majeurs, universités prestigieuses, lieux culturels de renom. Exemples: New York, Londres, Tokyo, Paris.",
    niveau: "troisieme",
    matiere: "Géographie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Comment l'Union européenne s'organise-t-elle territorialement et quels sont ses principaux défis ?",
    answer: "27 États membres, institutions communes, espace Schengen, politique régionale; défis: inégalités territoriales, Brexit, montée des populismes",
    explication: "L'UE regroupe 27 États membres avec des institutions communes (Commission, Parlement, Conseil). Son territoire comprend l'espace Schengen de libre circulation. Sa politique régionale vise à réduire les inégalités territoriales. Elle fait face à des défis majeurs: disparités persistantes entre régions, conséquences du Brexit, euroscepticisme croissant dans certains pays.",
    niveau: "troisieme",
    matiere: "Géographie",
    diplome: "brevet"
  },
  {
    id: uuidv4(),
    question: "Quels sont les grands contrastes de développement dans le monde et comment s'expliquent-ils ?",
    answer: "Fracture Nord-Sud, émergence de certains pays, inégalités persistantes; causes historiques (colonisation), économiques (place dans les échanges) et politiques",
    explication: "Le monde est marqué par des inégalités de développement: pays développés (IDH élevé, économie tertiaire), pays émergents en forte croissance (Chine, Inde...), pays en développement (économies moins diversifiées, services publics insuffisants), pays les moins avancés (pauvreté massive). Ces contrastes s'expliquent par l'héritage colonial, l'insertion inégale dans la mondialisation et la qualité de la gouvernance.",
    niveau: "troisieme",
    matiere: "Géographie",
    diplome: "brevet"
  }
];
