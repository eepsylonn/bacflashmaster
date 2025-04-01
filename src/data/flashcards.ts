
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Mathématiques - Première
const mathPremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "Quelle est la dérivée de f(x) = x²?",
    answer: "f'(x) = 2x",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une fonction affine?",
    answer: "Une fonction de la forme f(x) = ax + b, où a et b sont des constantes réelles.",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Comment calculer la probabilité de l'union de deux événements A et B?",
    answer: "P(A∪B) = P(A) + P(B) - P(A∩B)",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelle est la formule du binôme de Newton?",
    answer: "(a + b)ⁿ = Σₖ₌₀ⁿ (n!/(k!(n-k)!)) × aⁿ⁻ᵏ × bᵏ",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une suite arithmétique?",
    answer: "Une suite où chaque terme se déduit du précédent en ajoutant toujours le même nombre (la raison).",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Comment calcule-t-on le terme général d'une suite géométrique?",
    answer: "Pour une suite géométrique de premier terme u₁ et de raison q, le terme général est uₙ = u₁ × qⁿ⁻¹",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le discriminant d'un polynôme du second degré ax² + bx + c ?",
    answer: "Le discriminant est Δ = b² - 4ac",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelle est la formule de la somme des termes d'une suite arithmétique?",
    answer: "S = n × (u₁ + uₙ)/2 où n est le nombre de termes",
    matiere: "Mathématiques",
    niveau: "premiere"
  },
];

// Mathématiques - Terminale
const mathTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "Quelle est la limite de sin(x)/x quand x tend vers 0?",
    answer: "La limite est égale à 1",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelle est la formule de la loi normale centrée réduite?",
    answer: "f(x) = (1/√(2π)) × e^(-x²/2)",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une intégrale?",
    answer: "Une intégrale est une somme continue qui permet de calculer l'aire sous une courbe, notée ∫ f(x) dx",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le logarithme népérien?",
    answer: "C'est la fonction ln(x) définie pour x > 0, qui est la fonction réciproque de la fonction exponentielle",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment calculer la primitive de la fonction exponentielle?",
    answer: "∫ e^x dx = e^x + C, où C est une constante",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Définissez la notion de continuité d'une fonction en un point.",
    answer: "Une fonction f est continue au point a si la limite de f(x) quand x tend vers a est égale à f(a)",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une dérivée seconde?",
    answer: "C'est la dérivée de la dérivée première d'une fonction, notée f''(x) ou d²f/dx²",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelle est la formule pour calculer l'espérance d'une variable aléatoire discrète X?",
    answer: "E(X) = Σ (xi × p(xi)) pour tous les xi possibles",
    matiere: "Mathématiques",
    niveau: "terminale"
  },
];

// Physique-Chimie - Première
const physiqueChimiePremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que la loi d'Ohm?",
    answer: "U = R × I, où U est la tension, R la résistance et I l'intensité du courant",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une réaction d'oxydoréduction?",
    answer: "Une réaction chimique où il y a transfert d'électrons entre deux espèces chimiques",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Énoncez la première loi de Newton (principe d'inertie).",
    answer: "Dans un référentiel galiléen, si la somme des forces extérieures appliquées à un corps est nulle, alors ce corps reste immobile ou conserve un mouvement rectiligne uniforme",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelle est la relation entre la période T et la fréquence f d'un phénomène périodique?",
    answer: "T = 1/f",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un isotope?",
    answer: "Des atomes ayant le même nombre de protons mais un nombre différent de neutrons",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelle est la formule de l'énergie cinétique?",
    answer: "Ec = (1/2) × m × v², où m est la masse et v la vitesse",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la loi de Beer-Lambert?",
    answer: "A = ε × l × c, où A est l'absorbance, ε le coefficient d'absorption molaire, l la longueur du trajet optique et c la concentration",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une liaison covalente?",
    answer: "Une liaison chimique où deux atomes partagent une ou plusieurs paires d'électrons",
    matiere: "Physique-Chimie",
    niveau: "premiere"
  },
];

// Physique-Chimie - Terminale
const physiqueChimieTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que la loi de la gravitation universelle de Newton?",
    answer: "Deux corps s'attirent avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de la distance qui les sépare: F = G × (m1 × m2)/r²",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un acide fort?",
    answer: "Un acide qui se dissocie complètement en solution aqueuse pour donner des ions H+",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'effet Doppler?",
    answer: "Un phénomène physique où la fréquence perçue d'une onde change quand la source et l'observateur sont en mouvement relatif",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le principe d'incertitude de Heisenberg?",
    answer: "Il est impossible de connaître simultanément avec une précision arbitraire la position et la quantité de mouvement d'une particule",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Comment calcule-t-on le pH d'une solution?",
    answer: "pH = -log[H3O+], où [H3O+] est la concentration en ions hydronium",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la constante d'équilibre K d'une réaction chimique?",
    answer: "Une constante qui caractérise l'état d'équilibre d'une réaction chimique. Pour une réaction aA + bB ⇌ cC + dD, K = ([C]^c × [D]^d) / ([A]^a × [B]^b)",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'énergie potentielle électrique?",
    answer: "L'énergie qu'une charge électrique possède en raison de sa position dans un champ électrique: Ep = q × V, où q est la charge et V le potentiel électrique",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la dualité onde-particule?",
    answer: "Le concept selon lequel toute particule de matière peut se comporter à la fois comme une onde et comme une particule",
    matiere: "Physique-Chimie",
    niveau: "terminale"
  },
];

// SVT - Première
const svtPremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que la méiose?",
    answer: "Division cellulaire qui permet de passer d'une cellule diploïde à quatre cellules haploïdes, essentielle pour la reproduction sexuée",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la tectonique des plaques?",
    answer: "Théorie expliquant la formation et le mouvement des plaques lithosphériques à la surface du globe terrestre",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un écosystème?",
    answer: "Ensemble formé par une communauté d'êtres vivants (biocénose) et son environnement (biotope)",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un allèle?",
    answer: "Variante d'un même gène, occupant la même position (locus) sur une paire de chromosomes homologues",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la photosynthèse?",
    answer: "Processus biochimique par lequel les plantes utilisent l'énergie lumineuse pour synthétiser des molécules organiques à partir de CO2 et d'eau",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une enzyme?",
    answer: "Protéine qui catalyse (accélère) des réactions biochimiques spécifiques",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la sélection naturelle selon Darwin?",
    answer: "Processus par lequel les traits héréditaires qui favorisent la survie et la reproduction deviennent plus fréquents dans les générations successives",
    matiere: "SVT",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un neurone?",
    answer: "Cellule du système nerveux spécialisée dans la réception, l'intégration et la transmission d'informations sous forme d'influx nerveux",
    matiere: "SVT",
    niveau: "premiere"
  },
];

// SVT - Terminale
const svtTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que l'immunité adaptative?",
    answer: "Réponse immunitaire spécifique qui s'adapte à chaque agent pathogène et qui garde une mémoire des infections antérieures",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un anticorps?",
    answer: "Protéine (immunoglobuline) produite par les lymphocytes B qui reconnaît spécifiquement un antigène",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la spéciation?",
    answer: "Processus évolutif par lequel de nouvelles espèces biologiques apparaissent",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le système HLA (Human Leukocyte Antigen)?",
    answer: "Ensemble de protéines à la surface des cellules qui permet au système immunitaire de distinguer le soi du non-soi",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la dérive génétique?",
    answer: "Modification aléatoire des fréquences alléliques dans une population due au hasard de l'échantillonnage, particulièrement importante dans les petites populations",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'épigénétique?",
    answer: "Étude des changements héréditaires dans l'expression des gènes qui ne sont pas causés par des modifications de la séquence d'ADN",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un écotone?",
    answer: "Zone de transition entre deux écosystèmes différents, caractérisée par une grande biodiversité",
    matiere: "SVT",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la PCR (Polymerase Chain Reaction)?",
    answer: "Technique de biologie moléculaire permettant d'amplifier un fragment d'ADN spécifique en le multipliant par millions",
    matiere: "SVT",
    niveau: "terminale"
  },
];

// Histoire-Géographie - Première
const histGeoPremiereHistoire: Flashcard[] = [
  {
    id: generateId(),
    question: "Quand a eu lieu la Révolution française?",
    answer: "De 1789 à 1799",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le Traité de Versailles?",
    answer: "Traité de paix signé le 28 juin 1919 qui mit officiellement fin à la Première Guerre mondiale",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelles sont les principales causes de la Première Guerre mondiale?",
    answer: "Tensions nationalistes, course aux armements, système d'alliances (Triple Alliance et Triple Entente), rivalités coloniales et impérialisme",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qui était Napoléon Bonaparte?",
    answer: "Général français devenu Premier Consul puis Empereur des Français de 1804 à 1815, connu pour ses réformes administratives et ses conquêtes militaires",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
];

const histGeoPremiereGeo: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que la métropolisation?",
    answer: "Processus de concentration des populations, des activités et des fonctions de commandement dans les grandes villes",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'une aire urbaine?",
    answer: "Ensemble formé par un pôle urbain (ville-centre et sa banlieue) et sa couronne périurbaine",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quels sont les grands défis environnementaux actuels?",
    answer: "Changement climatique, pollution de l'air et de l'eau, déforestation, perte de biodiversité, gestion des déchets",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la mondialisation?",
    answer: "Processus d'intégration des économies et des sociétés à l'échelle mondiale, caractérisé par des échanges accrus de biens, services, capitaux et informations",
    matiere: "Histoire-Géographie",
    niveau: "premiere"
  },
];

// Histoire-Géographie - Terminale
const histGeoTerminaleHistoire: Flashcard[] = [
  {
    id: generateId(),
    question: "Quelles sont les principales caractéristiques de la Guerre froide?",
    answer: "Opposition idéologique, politique et économique entre le bloc occidental mené par les États-Unis et le bloc soviétique, sans affrontement militaire direct (1947-1991)",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la décolonisation?",
    answer: "Processus d'émancipation politique des territoires colonisés, particulièrement intense après la Seconde Guerre mondiale",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelles ont été les conséquences de la chute du mur de Berlin (1989)?",
    answer: "Fin de la division de l'Allemagne, effondrement des régimes communistes en Europe de l'Est, fin de la Guerre froide et de l'URSS (1991)",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la Shoah?",
    answer: "Génocide perpétré par l'Allemagne nazie contre les Juifs d'Europe pendant la Seconde Guerre mondiale, causant la mort de six millions de personnes",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
];

const histGeoTerminaleGeo: Flashcard[] = [
  {
    id: generateId(),
    question: "Comment se manifeste la puissance des États-Unis dans le monde?",
    answer: "Puissance militaire (OTAN), économique (PIB, multinationales), culturelle (soft power), politique et diplomatique",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quels sont les enjeux de la mer de Chine méridionale?",
    answer: "Contrôle des routes maritimes, ressources énergétiques et halieutiques, revendications territoriales conflictuelles entre la Chine et plusieurs pays d'Asie du Sud-Est",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'Union européenne?",
    answer: "Organisation supranationale regroupant 27 États européens, fondée sur des valeurs démocratiques et visant l'intégration économique et politique",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quels sont les principaux défis du développement durable?",
    answer: "Concilier croissance économique, justice sociale et préservation de l'environnement tout en répondant aux besoins présents sans compromettre ceux des générations futures",
    matiere: "Histoire-Géographie",
    niveau: "terminale"
  },
];

// Français - Première
const francaisPremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "Quelles sont les caractéristiques du mouvement littéraire du romantisme?",
    answer: "Exaltation des sentiments, importance de la nature, rejet des règles classiques, expression du moi, mélancolie. Représentants: Victor Hugo, Lamartine, Musset",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un alexandrin?",
    answer: "Vers de douze syllabes, généralement avec une césure à l'hémistiche (après la sixième syllabe)",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelles sont les principales figures de style?",
    answer: "Métaphore, comparaison, personnification, allitération, assonance, hyperbole, litote, oxymore, périphrase, métonymie, etc.",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un champ lexical?",
    answer: "Ensemble de mots se rapportant à une même notion, à un même thème dans un texte",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelles sont les caractéristiques du réalisme?",
    answer: "Mouvement littéraire du XIXe siècle visant à représenter la réalité sociale de manière objective. Auteurs emblématiques: Balzac, Flaubert, Maupassant",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un registre littéraire?",
    answer: "Tonalité dominante d'un texte produisant un effet particulier: lyrique, épique, tragique, comique, pathétique, satirique, polémique, etc.",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quels sont les trois genres théâtraux classiques?",
    answer: "La tragédie, la comédie et la tragi-comédie",
    matiere: "Français",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la versification?",
    answer: "Art de composer des vers en respectant des règles précises concernant le rythme, la mesure et les sonorités",
    matiere: "Français",
    niveau: "premiere"
  },
];

// Philosophie - Terminale
const philoTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que le déterminisme?",
    answer: "Doctrine selon laquelle tous les événements, y compris les choix humains, sont causés par des événements antérieurs, suivant des lois nécessaires",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelle est la différence entre morale et éthique selon certains philosophes?",
    answer: "La morale concerne des principes universels et des devoirs impératifs, tandis que l'éthique s'intéresse davantage à la recherche du bonheur et à la vie bonne dans un contexte particulier",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'allégorie de la caverne de Platon?",
    answer: "Métaphore philosophique illustrant la condition humaine face à la connaissance: des prisonniers enchaînés ne voient que des ombres et prennent ces apparences pour la réalité",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le cogito cartésien?",
    answer: "« Je pense, donc je suis » - principe fondamental de la philosophie de Descartes établissant la certitude de l'existence du sujet pensant",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'impératif catégorique de Kant?",
    answer: "Principe moral selon lequel on doit agir uniquement d'après la maxime qui fait qu'on peut vouloir en même temps qu'elle devienne une loi universelle",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que l'existentialisme?",
    answer: "Courant philosophique qui considère que l'existence précède l'essence, c'est-à-dire que l'homme n'a pas de nature prédéfinie et doit se définir par ses choix et ses actes",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le contrat social selon Rousseau?",
    answer: "Théorie politique postulant que les individus consentent à abandonner certaines libertés naturelles pour bénéficier des avantages de l'ordre social",
    matiere: "Philosophie",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quelle est la différence entre la connaissance et l'opinion selon Platon?",
    answer: "La connaissance (epistémè) porte sur les Idées, réalités immuables et universelles, tandis que l'opinion (doxa) porte sur le monde sensible changeant et relatif",
    matiere: "Philosophie",
    niveau: "terminale"
  },
];

// Anglais - Première et Terminale
const anglaisPremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "What is the difference between 'Present Perfect' and 'Simple Past'?",
    answer: "Present Perfect (have/has + past participle) connects past actions to the present, while Simple Past (verb + ed) refers to completed actions at a specific time in the past",
    matiere: "Anglais",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "What is a 'phrasal verb'?",
    answer: "A verb combined with a preposition or adverb that creates a meaning different from the original verb (e.g., 'look after', 'give up', 'break down')",
    matiere: "Anglais",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "How do you form the passive voice in English?",
    answer: "Subject + appropriate form of 'to be' + past participle + (by + agent). Example: 'The letter was written by John'",
    matiere: "Anglais",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "What is the American Dream?",
    answer: "The belief that anyone can achieve success, prosperity, and upward social mobility through hard work, determination, and initiative in American society",
    matiere: "Anglais",
    niveau: "premiere"
  },
];

const anglaisTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "What are the main steps in the civil rights movement in the USA?",
    answer: "Brown v. Board of Education (1954), Montgomery Bus Boycott (1955), March on Washington (1963), Civil Rights Act (1964), Voting Rights Act (1965)",
    matiere: "Anglais",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "What is the difference between 'will' and 'be going to' for future expressions?",
    answer: "'Will' is used for spontaneous decisions, promises, and predictions without evidence, while 'be going to' expresses planned intentions and predictions based on evidence",
    matiere: "Anglais",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "What are conditional sentences and their types?",
    answer: "Sentences expressing hypothetical situations. Type 0: universal truths. Type 1: realistic possibilities (if + present, will + verb). Type 2: unlikely/hypothetical present (if + past, would + verb). Type 3: impossible past (if + past perfect, would have + past participle)",
    matiere: "Anglais",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "What is the Commonwealth?",
    answer: "A political association of 54 member states, most of them former territories of the British Empire, promoting democracy, human rights, good governance, and peace",
    matiere: "Anglais",
    niveau: "terminale"
  },
];

// SES - Première et Terminale
const sesPremiere: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que le PIB?",
    answer: "Produit Intérieur Brut: somme des valeurs ajoutées créées par les agents économiques sur le territoire national pendant une période donnée (généralement un an)",
    matiere: "SES",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce qu'un marché?",
    answer: "Lieu réel ou fictif de rencontre entre l'offre et la demande d'un bien ou d'un service",
    matiere: "SES",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la socialisation?",
    answer: "Processus par lequel les individus intériorisent les normes et les valeurs de la société dans laquelle ils vivent",
    matiere: "SES",
    niveau: "premiere"
  },
  {
    id: generateId(),
    question: "Quelle est la différence entre la mobilité sociale intergénérationnelle et intragénérationnelle?",
    answer: "La mobilité intergénérationnelle compare la position sociale d'un individu à celle de ses parents, tandis que la mobilité intragénérationnelle étudie les changements de position sociale au cours de la vie d'un même individu",
    matiere: "SES",
    niveau: "premiere"
  },
];

const sesTerminale: Flashcard[] = [
  {
    id: generateId(),
    question: "Qu'est-ce que la croissance économique?",
    answer: "Augmentation soutenue, sur une période longue, de la production de biens et services dans une économie. Elle est généralement mesurée par le taux de variation du PIB réel",
    matiere: "SES",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que la mondialisation?",
    answer: "Processus d'intégration croissante des économies nationales, caractérisé par l'augmentation des échanges de biens, services, capitaux et informations à l'échelle mondiale",
    matiere: "SES",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Qu'est-ce que le chômage structurel?",
    answer: "Chômage résultant d'une inadéquation entre les qualifications des travailleurs et les besoins du marché du travail, ou de changements structurels dans l'économie",
    matiere: "SES",
    niveau: "terminale"
  },
  {
    id: generateId(),
    question: "Quels sont les instruments de la politique monétaire?",
    answer: "Taux d'intérêt directeurs, opérations d'open market, réserves obligatoires, programmes d'achats d'actifs (quantitative easing), forward guidance",
    matiere: "SES",
    niveau: "terminale"
  },
];

// Combine all flashcards into a single export
const allFlashcards: Flashcard[] = [
  ...mathPremiere,
  ...mathTerminale,
  ...physiqueChimiePremiere,
  ...physiqueChimieTerminale,
  ...svtPremiere,
  ...svtTerminale,
  ...histGeoPremiereHistoire,
  ...histGeoPremiereGeo,
  ...histGeoTerminaleHistoire,
  ...histGeoTerminaleGeo,
  ...francaisPremiere,
  ...philoTerminale,
  ...anglaisPremiere,
  ...anglaisTerminale,
  ...sesPremiere,
  ...sesTerminale,
];

export const getFlashcards = (
  matiere?: string,
  niveau?: 'premiere' | 'terminale',
  count?: number
): Flashcard[] => {
  let filteredCards = [...allFlashcards];
  
  if (matiere) {
    filteredCards = filteredCards.filter(card => card.matiere === matiere);
  }
  
  if (niveau) {
    filteredCards = filteredCards.filter(card => card.niveau === niveau);
  }
  
  // Shuffle the cards
  const shuffledCards = [...filteredCards].sort(() => Math.random() - 0.5);
  
  // Return requested number or all
  return count ? shuffledCards.slice(0, count) : shuffledCards;
};

export const getMatieres = (): string[] => {
  const matieres = new Set<string>();
  allFlashcards.forEach(card => matieres.add(card.matiere));
  return Array.from(matieres);
};

export default allFlashcards;
