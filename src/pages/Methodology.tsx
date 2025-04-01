
import { useState } from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, FileText, Book, ChevronRight, BookOpen, GraduationCap, ListChecks } from 'lucide-react';
import { useDiplome } from '@/contexts/DiplomeContext';
import { motion } from 'framer-motion';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Types pour notre contenu structuré
type ContentType = 'methodologie' | 'cours';
type NiveauBac = 'premiere' | 'terminale';
type ChapitreType = {
  id: string;
  title: string;
  content: string[];
};

// Structure des fiches par diplôme
const methodologiesMatieres = {
  'baccalaureat': [
    { id: 'maths', name: 'Mathématiques', icon: <Book className="h-5 w-5 text-blue-600" /> },
    { id: 'francais', name: 'Français', icon: <Book className="h-5 w-5 text-red-600" /> },
    { id: 'histoire', name: 'Histoire-Géographie', icon: <Book className="h-5 w-5 text-amber-600" /> },
    { id: 'philo', name: 'Philosophie', icon: <Book className="h-5 w-5 text-purple-600" /> },
    { id: 'sciences', name: 'Sciences', icon: <Book className="h-5 w-5 text-green-600" /> },
    { id: 'physique', name: 'Physique', icon: <Book className="h-5 w-5 text-cyan-600" /> },
    { id: 'chimie', name: 'Chimie', icon: <Book className="h-5 w-5 text-pink-600" /> },
    { id: 'svt', name: 'SVT', icon: <Book className="h-5 w-5 text-emerald-600" /> },
    { id: 'ses', name: 'SES', icon: <Book className="h-5 w-5 text-yellow-600" /> },
    { id: 'anglais', name: 'Anglais', icon: <Book className="h-5 w-5 text-indigo-600" /> },
  ],
  'toeic': [
    { id: 'listening', name: 'Listening', icon: <Book className="h-5 w-5 text-blue-600" /> },
    { id: 'reading', name: 'Reading', icon: <Book className="h-5 w-5 text-indigo-600" /> },
    { id: 'grammar', name: 'Grammar', icon: <Book className="h-5 w-5 text-violet-600" /> },
    { id: 'vocabulary', name: 'Vocabulary', icon: <Book className="h-5 w-5 text-pink-600" /> },
  ],
  'tage-mage': [
    { id: 'calcul', name: 'Calcul', icon: <Book className="h-5 w-5 text-green-600" /> },
    { id: 'logique', name: 'Logique', icon: <Book className="h-5 w-5 text-orange-600" /> },
    { id: 'verbal', name: 'Verbal', icon: <Book className="h-5 w-5 text-purple-600" /> },
  ]
};

// Base de données des fiches méthodologiques
const fichesMatieres: Record<string, Record<string, { title: string, content: string[] }[]>> = {
  'baccalaureat': {
    'maths': [
      {
        title: "Comment aborder un problème de géométrie",
        content: [
          "1. Lisez attentivement l'énoncé et identifiez ce qui est demandé.",
          "2. Faites un schéma clair et précis, même s'il n'est pas demandé explicitement.",
          "3. Notez toutes les données fournies directement sur le schéma.",
          "4. Identifiez les théorèmes pertinents (Pythagore, Thalès, trigonométrie...).",
          "5. Procédez étape par étape en justifiant chaque affirmation mathématique.",
          "6. Vérifiez votre résultat par cohérence avec les données initiales.",
          "7. Présentez clairement votre démarche et vos calculs."
        ]
      },
      {
        title: "Techniques efficaces pour résoudre les équations différentielles",
        content: [
          "1. Identifiez d'abord le type d'équation différentielle (ordre, linéarité...).",
          "2. Pour les équations à variables séparables: réarrangez sous forme ∫dy/g(y) = ∫f(x)dx.",
          "3. Pour les équations linéaires du premier ordre: utilisez un facteur intégrant e^∫p(x)dx.",
          "4. Pour les équations du second ordre à coefficients constants: cherchez des solutions de la forme e^rx.",
          "5. N'oubliez pas de déterminer les constantes d'intégration avec les conditions initiales.",
          "6. Vérifiez votre solution en la substituant dans l'équation originale.",
          "7. Analysez le comportement de votre solution (limites, asymptotes, périodicité...)."
        ]
      },
      {
        title: "Stratégies pour optimiser son temps pendant les épreuves",
        content: [
          "1. Lisez l'ensemble du sujet avant de commencer pour identifier les parties les plus accessibles.",
          "2. Commencez par les questions que vous maîtrisez pour gagner des points rapidement.",
          "3. Gérez votre temps en fonction du barème: accordez plus de temps aux questions qui rapportent plus de points.",
          "4. Si vous bloquez sur une question, passez à la suivante et revenez-y plus tard.",
          "5. Laissez 10-15 minutes à la fin pour relire et vérifier vos calculs.",
          "6. Soignez la présentation: encadrez vos résultats, numérotez clairement vos réponses.",
          "7. Même si vous n'êtes pas sûr, proposez une méthode de résolution - les points de méthode comptent."
        ]
      }
    ],
    'francais': [
      {
        title: "Structure d'une dissertation littéraire efficace",
        content: [
          "1. Introduction (environ 10% du devoir):",
          "   • Accroche en lien avec le sujet (citation, référence culturelle...)",
          "   • Contextualisation du sujet dans l'histoire littéraire",
          "   • Formulation claire de la problématique",
          "   • Annonce du plan détaillé",
          "2. Développement (environ 80% du devoir):",
          "   • Organisé en 3 parties équilibrées, chacune subdivisée en 2-3 sous-parties",
          "   • Chaque partie commence par une phrase d'introduction annonçant l'idée directrice",
          "   • Chaque sous-partie développe un argument illustré par 1-2 exemples littéraires précis",
          "   • Chaque exemple doit comporter: auteur, titre de l'œuvre, date, contexte, analyse détaillée",
          "   • Conclusion partielle à la fin de chaque grande partie",
          "3. Conclusion (environ 10% du devoir):",
          "   • Synthèse des arguments principaux",
          "   • Réponse explicite à la problématique",
          "   • Ouverture vers une question connexe ou un élargissement du sujet",
          "4. Conseils généraux:",
          "   • Utilisez des connecteurs logiques pour structurer votre argumentation",
          "   • Variez le vocabulaire et évitez les répétitions",
          "   • Soignez la syntaxe et l'orthographe"
        ]
      },
      {
        title: "L'art du commentaire composé",
        content: [
          "1. Préparation:",
          "   • Lisez attentivement le texte plusieurs fois",
          "   • Repérez les champs lexicaux, figures de style, tonalités, mouvements du texte",
          "   • Identifiez les enjeux principaux du texte (esthétiques, philosophiques, historiques...)",
          "   • Élaborez un plan thématique (et non linéaire)",
          "2. Introduction:",
          "   • Présentez l'auteur et l'œuvre (mouvement littéraire, contexte)",
          "   • Situez le passage dans l'œuvre",
          "   • Dégagez l'intérêt principal du texte",
          "   • Formulez une problématique claire",
          "   • Annoncez le plan",
          "3. Développement:",
          "   • Organisez 2-3 axes de lecture thématiques",
          "   • Pour chaque axe, analysez plusieurs procédés d'écriture en lien avec le sens du texte",
          "   • Citez précisément le texte (entre guillemets, avec références des lignes)",
          "   • Analysez l'effet produit par chaque procédé",
          "4. Conclusion:",
          "   • Résumez les grandes lignes de votre analyse",
          "   • Répondez à la problématique",
          "   • Élargissez sur l'œuvre complète ou le mouvement littéraire"
        ]
      }
    ],
    // Autres matières du baccalauréat...
  },
  'toeic': {
    'listening': [
      {
        title: "Techniques d'écoute efficaces pour le TOEIC",
        content: [
          "1. Préparation avant l'écoute:",
          "   • Lisez attentivement les questions et les options de réponse",
          "   • Anticipez le vocabulaire et les thèmes qui pourraient apparaître",
          "   • Soulignez les mots-clés dans les questions pour orienter votre écoute",
          "2. Pendant l'écoute:",
          "   • Concentrez-vous sur les informations spécifiques demandées (qui, quoi, où, quand, pourquoi)",
          "   • Identifiez le contexte général dès les premières secondes (lieu, situation, personnes)",
          "   • Repérez les mots de transition qui signalent des informations importantes",
          "   • Soyez attentif aux nuances et changements d'avis des locuteurs",
          "   • Notez rapidement les chiffres, dates et noms propres entendus",
          "3. Stratégies par section:",
          "   • Photos (Part 1): regardez tous les détails avant l'écoute, anticipez le vocabulaire",
          "   • Questions-réponses (Part 2): identifiez le type de question pour anticiper la réponse",
          "   • Conversations (Parts 3-4): identifiez la relation entre les locuteurs et le contexte",
          "   • Monologues (Parts 4): repérez la structure du discours et les points principaux",
          "4. Gestion des pièges courants:",
          "   • Méfiez-vous des homophones (mots qui se prononcent de façon similaire)",
          "   • Attention aux corrections ou changements d'avis des locuteurs",
          "   • Ne vous fixez pas sur les mots inconnus, essayez de comprendre le contexte global",
          "5. Entraînement régulier:",
          "   • Pratiquez avec des enregistrements de différents accents (américain, britannique, australien...)",
          "   • Habituez-vous à écouter à vitesse normale, sans ralentir les audios",
          "   • Diversifiez les sources: podcasts, émissions radio, séries en anglais..."
        ]
      },
      {
        title: "Comment gérer les différents accents dans la partie Listening",
        content: [
          "1. Familiarisez-vous avec les accents principaux:",
          "   • Accent américain: prononciation du 'r', voyelles plus nasales",
          "   • Accent britannique: 't' prononcé plus distinctement, intonation différente",
          "   • Accent australien: voyelles plus allongées, intonation montante en fin de phrase",
          "   • Accent canadien: mélange d'influences américaines et britanniques",
          "2. Techniques d'adaptation:",
          "   • Écoutez activement des médias avec différents accents régulièrement",
          "   • Identifiez les schémas de prononciation spécifiques à chaque accent",
          "   • Concentrez-vous sur le contexte global plutôt que sur chaque mot",
          "   • Développez une 'flexibilité auditive' en alternant les accents dans votre pratique",
          "3. Stratégies pendant l'examen:",
          "   • Identifiez l'accent dès les premières secondes pour ajuster votre écoute",
          "   • Si un accent est difficile, concentrez-vous davantage sur les mots-clés",
          "   • Utilisez les indices contextuels pour déduire les informations manquées",
          "   • Restez calme face à un accent moins familier - votre cerveau s'adaptera",
          "4. Pratique ciblée:",
          "   • Utilisez des ressources comme TED Talks, BBC, CNN, pour varier les accents",
          "   • Essayez de transcrire des extraits audio avec différents accents",
          "   • Comparez votre transcription avec le texte réel pour identifier vos difficultés",
          "5. Vocabulaire spécifique aux différentes variétés d'anglais:",
          "   • Apprenez les différences lexicales courantes (ex: elevator/lift, subway/underground)",
          "   • Familiarisez-vous avec les expressions idiomatiques propres à chaque variété d'anglais"
        ]
      }
    ],
    'reading': [
      {
        title: "Stratégies de lecture rapide pour le TOEIC",
        content: [
          "1. Techniques de scanning:",
          "   • Recherchez uniquement les informations spécifiques demandées dans les questions",
          "   • Repérez les mots-clés, dates, noms propres, chiffres qui pourraient être importants",
          "   • Utilisez votre doigt ou un stylo pour guider votre regard et maintenir la concentration",
          "2. Techniques de skimming:",
          "   • Lisez rapidement la première et dernière phrase de chaque paragraphe",
          "   • Identifiez l'idée principale de chaque section sans vous arrêter sur les détails",
          "   • Repérez la structure du texte (introduction, points principaux, conclusion)",
          "3. Gestion du temps par section:",
          "   • Incomplete Sentences: maximum 20-30 secondes par question",
          "   • Text Completion: 2-3 minutes pour comprendre le contexte global puis 30 secondes par lacune",
          "   • Single Passages: 1 minute pour lire le texte, puis 30 secondes par question",
          "   • Multiple Passages: 2-3 minutes pour lire les textes, puis 30-40 secondes par question",
          "4. Stratégies pour les différents types de questions:",
          "   • Questions de vocabulaire: analysez le contexte pour déduire le sens",
          "   • Questions grammaticales: identifiez la fonction grammaticale nécessaire",
          "   • Questions de compréhension: repérez les informations explicites et implicites",
          "   • Questions d'inférence: déduisez à partir des indices du texte",
          "5. Gestion des pièges courants:",
          "   • Méfiez-vous des distracteurs qui contiennent des mots du texte mais changent le sens",
          "   • Attention aux négations qui peuvent inverser complètement la signification",
          "   • Vérifiez la cohérence grammaticale et sémantique de votre réponse avec le reste du texte",
          "6. Amélioration du vocabulaire business:",
          "   • Créez des fiches thématiques: RH, marketing, finance, négociation, etc.",
          "   • Apprenez le vocabulaire par champs lexicaux plutôt que par listes aléatoires",
          "   • Notez les collocations (associations habituelles de mots) spécifiques au monde professionnel"
        ]
      }
    ],
    'grammar': [
      {
        title: "Les structures grammaticales essentielles pour le TOEIC",
        content: [
          "1. Maîtrise des temps:",
          "   • Present Simple/Continuous: habitudes vs actions en cours",
          "   • Past Simple/Continuous: actions terminées vs contexte passé",
          "   • Present Perfect: expériences passées avec impact présent",
          "   • Present Perfect Continuous: actions commencées dans le passé et toujours en cours",
          "   • Past Perfect: actions antérieures à d'autres actions passées",
          "   • Future forms: will, be going to, present continuous for future",
          "2. Structures verbales spécifiques:",
          "   • Modaux et semi-modaux (can, could, may, might, must, should, have to, etc.)",
          "   • Verbes suivis de gérondifs ou d'infinitifs (enjoy doing vs decide to do)",
          "   • Phrasal verbs courants dans le monde professionnel (set up, carry out, etc.)",
          "   • Voix passive, particulièrement fréquente dans les documents professionnels",
          "3. Éléments de construction de phrase:",
          "   • Propositions relatives (defining vs non-defining)",
          "   • Propositions conditionnelles (zero, first, second, third, mixed conditionals)",
          "   • Discours indirect (reported speech) avec concordance des temps",
          "   • Structures de comparaison (as...as, more/less than, the most/least)",
          "4. Connecteurs logiques et expressions de transition:",
          "   • Expressions de cause et conséquence (because, therefore, as a result)",
          "   • Expressions de contraste (however, nevertheless, despite, although)",
          "   • Expressions de but (in order to, so as to, so that)",
          "   • Expressions temporelles (before, after, while, during, since)",
          "5. Erreurs fréquentes à éviter:",
          "   • Confusion entre prepositions (in, on, at, by, with, etc.)",
          "   • Articles (a, an, the) mal utilisés ou oubliés",
          "   • Accords singulier/pluriel incorrects",
          "   • Faux amis et calques linguistiques"
        ]
      }
    ],
    'vocabulary': [
      {
        title: "Vocabulaire professionnel essentiel par domaine",
        content: [
          "1. Ressources Humaines:",
          "   • Recrutement: job posting, applicant, resume/CV, cover letter, interview, hiring, onboarding",
          "   • Gestion du personnel: performance review, promotion, pay raise, benefits, retirement plan",
          "   • Formation: training, workshop, skill development, mentor, coaching, certification",
          "2. Marketing et Ventes:",
          "   • Publicité: advertising campaign, target audience, billboard, commercial, ad placement",
          "   • Stratégie: market research, brand awareness, customer loyalty, consumer behavior",
          "   • Commerce: retail, wholesale, discount, markup, profit margin, revenue, turnover",
          "3. Finance et Comptabilité:",
          "   • Documents financiers: balance sheet, income statement, cash flow, audit, tax return",
          "   • Termes bancaires: loan, interest rate, mortgage, investment, dividend, shareholder",
          "   • Indicateurs: profit, loss, deficit, budget, forecast, expense, revenue, assets",
          "4. Production et Logistique:",
          "   • Chaîne d'approvisionnement: supply chain, inventory, warehouse, shipment, delivery",
          "   • Fabrication: manufacturing process, assembly line, quality control, raw materials",
          "   • Transport: freight, shipping, customs, import/export, carrier, transportation costs",
          "5. Communication professionnelle:",
          "   • Réunions: agenda, minutes, conference call, attendees, chairperson, brainstorming",
          "   • Correspondance: memo, email, attachment, cc, bcc, signature, letterhead",
          "   • Négociation: agreement, contract, terms and conditions, deadline, negotiation",
          "6. Technologie et Bureau:",
          "   • Équipement: hardware, software, device, network, server, printer, scanner",
          "   • Outils numériques: database, spreadsheet, presentation, cloud storage, backup",
          "   • Problèmes techniques: troubleshoot, bug, crash, update, upgrade, maintenance",
          "7. Événements professionnels:",
          "   • Conférences: trade show, exhibition, booth, keynote speech, panel discussion",
          "   • Networking: business card, contact, referral, connection, professional network"
        ]
      }
    ]
  },
  'tage-mage': {
    'calcul': [
      {
        title: "Techniques de calcul mental rapide pour le TAGE MAGE",
        content: [
          "1. Multiplication efficace:",
          "   • Multiplier par 5: diviser par 2 puis multiplier par 10 (23×5 = 23÷2×10 = 115)",
          "   • Multiplier par 9: multiplier par 10 puis soustraire le nombre (46×9 = 460-46 = 414)",
          "   • Multiplier par 11: pour les nombres à 2 chiffres, additionner les chiffres et placer entre eux (35×11 = 3(3+5)5 = 385)",
          "   • Carré des nombres se terminant par 5: carré du premier chiffre + ce chiffre, suivi de 25 (35² = 3×4 suivi de 25 = 1225)",
          "   • Décomposition stratégique: 32×76 = 32×(75+1) = 32×75 + 32 = 2400 + 32 = 2432",
          "2. Division rapide:",
          "   • Diviser par 5: multiplier par 2 puis diviser par 10 (85÷5 = 85×2÷10 = 17)",
          "   • Diviser par 0,5: multiplier par 2 (45÷0,5 = 45×2 = 90)",
          "   • Diviser par 0,25: multiplier par 4 (32÷0,25 = 32×4 = 128)",
          "   • Diviser par 0,1: multiplier par 10 (7,6÷0,1 = 7,6×10 = 76)",
          "3. Calcul avec pourcentages:",
          "   • Trouver 10% = diviser par 10, puis en déduire les autres pourcentages",
          "   • 15% = 10% + 5% (5% étant la moitié de 10%)",
          "   • Augmentation de x%: multiplier par (1+x/100)",
          "   • Diminution de x%: multiplier par (1-x/100)",
          "   • Variations successives: multiplier les coefficients (augmentation de 10% puis diminution de 10% = ×1,1×0,9 = ×0,99)",
          "4. Fractions et proportions:",
          "   • Simplifiez toujours avant de calculer",
          "   • Mémorisez les fractions décimales courantes (1/4 = 0,25; 1/3 ≈ 0,33; 2/3 ≈ 0,67)",
          "   • Pour additionner des fractions, trouvez le plus petit dénominateur commun",
          "   • Règle de trois pour les proportions: a/b = c/d → d = bc/a",
          "5. Puissances et racines:",
          "   • Mémorisez les carrés des nombres de 1 à 15 et les cubes jusqu'à 10",
          "   • Décomposez les racines: √18 = √(9×2) = 3√2",
          "   • Utilisez les identités remarquables: (a+b)² = a² + 2ab + b²",
          "6. Astuce pour les grands nombres:",
          "   • Arrondir pour estimer rapidement (987×1002 ≈ 1000×1000 = 1 000 000)",
          "   • Vérifiez l'ordre de grandeur de votre résultat (si on multiplie deux nombres à 2 chiffres, le résultat a entre 3 et 4 chiffres)"
        ]
      },
      {
        title: "Stratégies pour les problèmes d'optimisation et la résolution d'équations",
        content: [
          "1. Équations du premier degré:",
          "   • Isolez l'inconnue en regroupant les termes semblables",
          "   • Vérifiez toujours votre solution en la substituant dans l'équation d'origine",
          "   • Pour les problèmes de mise en équation, identifiez clairement ce que représente x",
          "2. Équations du second degré:",
          "   • Forme canonique: ax² + bx + c = 0",
          "   • Discriminant: Δ = b² - 4ac",
          "   • Solutions: x = (-b ± √Δ) / 2a",
          "   • Cas particuliers à reconnaître: produit nul (x² - a² = 0), trinôme carré parfait",
          "3. Systèmes d'équations:",
          "   • Méthode de substitution pour 2 équations à 2 inconnues",
          "   • Méthode de combinaison linéaire pour éliminer une variable",
          "   • Vérifiez la solution dans les deux équations",
          "4. Inéquations:",
          "   • Attention au sens de l'inégalité lors des multiplications/divisions par des nombres négatifs",
          "   • Représentez graphiquement les solutions pour les vérifier",
          "   • Pour les inéquations du second degré, étudiez le signe du trinôme",
          "5. Optimisation:",
          "   • Identifiez clairement la fonction à optimiser et les contraintes",
          "   • Dérivez pour trouver les points critiques (f'(x) = 0)",
          "   • Étudiez le signe de la dérivée seconde ou les valeurs aux bornes",
          "   • N'oubliez pas de vérifier les extrémités du domaine de définition",
          "6. Problèmes de mélange:",
          "   • Utilisez la formule: Quantité × Concentration = Quantité de substance pure",
          "   • Pour les problèmes d'alliage: Masse × Titre = Masse de métal pur",
          "7. Suites numériques:",
          "   • Suite arithmétique: Un = U0 + n×r (r étant la raison)",
          "   • Suite géométrique: Un = U0 × q^n (q étant la raison)",
          "   • Somme des n premiers termes d'une suite arithmétique: Sn = n(U0 + Un)/2",
          "   • Somme des n premiers termes d'une suite géométrique: Sn = U0(1-q^n)/(1-q) (si q≠1)"
        ]
      }
    ],
    'logique': [
      {
        title: "Méthodologie pour les séries logiques",
        content: [
          "1. Étapes d'analyse d'une série:",
          "   • Observez attentivement la série pour identifier le type de pattern",
          "   • Testez différentes hypothèses de transformation entre les termes",
          "   • Vérifiez votre hypothèse sur plusieurs termes consécutifs",
          "   • Appliquez la règle identifiée pour trouver le terme manquant",
          "2. Types de séries numériques courants:",
          "   • Progression arithmétique: différence constante entre termes successifs",
          "   • Progression géométrique: rapport constant entre termes successifs",
          "   • Série de carrés, cubes, nombres premiers, nombres triangulaires",
          "   • Alternance de plusieurs règles (ex: +2, ×3, +2, ×3...)",
          "   • Séries basées sur la position des chiffres (ex: 13, 27, 43, 61... → 1+3=4, 2+7=9, 4+3=7, 6+1=7)",
          "3. Séries figuratives:",
          "   • Analysez le nombre d'éléments, leur position, orientation, taille",
          "   • Cherchez des rotations, symétries, translations",
          "   • Identifiez les éléments qui apparaissent/disparaissent systématiquement",
          "   • Observez l'évolution des couleurs ou des formes",
          "4. Séries alphabétiques:",
          "   • Repérez les sauts dans l'alphabet (ex: B, E, H, K → +3 lettres)",
          "   • Attention aux séries basées sur la valeur numérique des lettres (A=1, B=2...)",
          "   • Cherchez des patterns dans l'alternance voyelles/consonnes",
          "   • Vérifiez si certaines lettres correspondent aux initiales de mots d'une suite logique",
          "5. Conseils pour éviter les erreurs:",
          "   • Ne vous fixez pas sur une seule hypothèse trop rapidement",
          "   • Vérifiez systématiquement votre règle sur tous les termes de la série",
          "   • Si une règle fonctionne pour tous les termes sauf un, elle est probablement fausse",
          "   • Attention aux coïncidences qui peuvent paraître significatives",
          "   • Si vous êtes bloqué, essayez d'analyser la série sous un angle différent",
          "6. Gestion du temps:",
          "   • Accordez maximum 1-1,5 minute par question",
          "   • Si vous bloquez après 30 secondes, notez la question et passez à la suivante",
          "   • Privilégiez les séries qui vous semblent immédiatement abordables"
        ]
      },
      {
        title: "Techniques pour les problèmes de logique",
        content: [
          "1. Syllogismes et déductions:",
          "   • Identifiez clairement les prémisses et la conclusion",
          "   • Reformulez les propositions si nécessaire pour clarifier leur structure",
          "   • Vérifiez la validité du raisonnement indépendamment de la vérité des prémisses",
          "   • Méfiez-vous des conclusions hâtives qui ne découlent pas directement des prémisses",
          "2. Problèmes de classement et d'ordonnancement:",
          "   • Utilisez des tableaux ou des schémas pour organiser l'information",
          "   • Commencez par les indices les plus restrictifs",
          "   • Éliminez systématiquement les possibilités incompatibles",
          "   • Vérifiez que votre solution est compatible avec tous les indices",
          "3. Raisonnement conditionnel:",
          "   • Maîtrisez les implications logiques: Si P alors Q",
          "   • Identifiez les règles de déduction valides: modus ponens, modus tollens",
          "   • Évitez les erreurs courantes: négation de l'antécédent, affirmation du conséquent",
          "   • Utilisez les contraposées: \"Si P alors Q\" équivaut à \"Si non-Q alors non-P\"",
          "4. Problèmes de sélection et de probabilité:",
          "   • Identifiez l'ensemble des possibilités (espace de probabilité)",
          "   • Distinguez les événements incompatibles et indépendants",
          "   • Utilisez des arbres de probabilité pour visualiser les scénarios",
          "   • Attention aux pièges des probabilités conditionnelles",
          "5. Méthodes de résolution par l'absurde:",
          "   • Supposez le contraire de ce que vous voulez prouver",
          "   • Démontrez que cette supposition mène à une contradiction",
          "   • Concluez que votre hypothèse initiale était correcte",
          "6. Analyse des énoncés complexes:",
          "   • Décomposez l'énoncé en propositions simples",
          "   • Identifiez les relations logiques entre ces propositions (et, ou, si...alors)",
          "   • Construisez une table de vérité si nécessaire",
          "   • Vérifiez la cohérence interne de l'ensemble des propositions"
        ]
      }
    ],
    'verbal': [
      {
        title: "Méthodologie pour la partie verbale du TAGE MAGE",
        content: [
          "1. Compréhension de texte:",
          "   • Lecture active: survolez d'abord le texte pour identifier la structure et le sujet principal",
          "   • Repérez les mots de liaison qui structurent l'argumentation",
          "   • Identifiez la thèse de l'auteur et les arguments principaux",
          "   • Distinguez faits, opinions et hypothèses dans le texte",
          "   • Reformulez mentalement chaque paragraphe pour vérifier votre compréhension",
          "2. Types de questions et stratégies:",
          "   • Questions sur l'idée principale: cherchez ce qui revient régulièrement dans le texte",
          "   • Questions de détail: relisez précisément la partie concernée",
          "   • Questions d'inférence: déduisez logiquement à partir des informations du texte",
          "   • Questions sur le ton ou l'intention: analysez le vocabulaire et la structure",
          "   • Questions sur la structure: identifiez les étapes du raisonnement",
          "3. Identification des pièges courants:",
          "   • Options trop générales ou trop spécifiques par rapport au texte",
          "   • Propositions partiellement vraies mais incomplètes",
          "   • Options contenant des exagérations ou des généralisations abusives",
          "   • Confusions entre corrélation et causalité",
          "   • Réponses plausibles mais non soutenues par le texte",
          "4. Techniques pour les textes argumentatifs:",
          "   • Identifiez la position de l'auteur: est-il neutre, critique, favorable?",
          "   • Repérez les concessions et contre-arguments",
          "   • Distinguez les arguments principaux des exemples illustratifs",
          "   • Suivez l'évolution du raisonnement: présentation, analyse, conclusion",
          "5. Analyse critique:",
          "   • Évaluez la solidité des arguments présentés",
          "   • Identifiez les présupposés et les implications",
          "   • Repérez les éventuels biais ou failles logiques",
          "   • Distinguez les faits vérifiables des opinions subjectives",
          "6. Gestion du temps:",
          "   • Adaptez votre vitesse de lecture à la difficulté du texte",
          "   • Accordez plus de temps aux questions complexes d'interprétation",
          "   • Si une question vous bloque, marquez-la et revenez-y plus tard",
          "   • Prévoyez du temps pour vérifier vos réponses"
        ]
      },
      {
        title: "Maîtrise du vocabulaire et des expressions idiomatiques",
        content: [
          "1. Enrichissement lexical méthodique:",
          "   • Organisez votre apprentissage par champs lexicaux thématiques",
          "   • Créez des fiches avec synonymes, antonymes et exemples d'usage",
          "   • Établissez des connexions entre les mots (dérivés, famille lexicale)",
          "   • Apprenez les nuances de sens entre quasi-synonymes",
          "2. Vocabulaire économique et des affaires:",
          "   • Termes microéconomiques: offre, demande, élasticité, utilité marginale...",
          "   • Termes macroéconomiques: inflation, PIB, balance commerciale, politique monétaire...",
          "   • Vocabulaire de la finance: investissement, rendement, dividende, plus-value...",
          "   • Vocabulaire du management: stratégie, gouvernance, processus décisionnel...",
          "3. Expressions idiomatiques et locutions figées:",
          "   • Expressions courantes dans le langage soutenu",
          "   • Proverbes et maximes fréquemment utilisés",
          "   • Périphrases et euphémismes dans le discours économique",
          "   • Formules stylistiques récurrentes dans les textes académiques",
          "4. Stratégies pour déduire le sens des mots inconnus:",
          "   • Analyse morphologique: préfixes, suffixes, racines",
          "   • Utilisation du contexte pour inférer le sens probable",
          "   • Repérage des indices textuels (définitions, exemples, reformulations)",
          "   • Identification des relations sémantiques avec d'autres mots du texte",
          "5. Vocabulaire des débats contemporains:",
          "   • Environnement et développement durable",
          "   • Nouvelles technologies et transformation digitale",
          "   • Mondialisation et relations internationales",
          "   • Éthique des affaires et responsabilité sociale",
          "6. Techniques mnémotechniques:",
          "   • Association d'images mentales aux mots nouveaux",
          "   • Création d'histoires connectant plusieurs termes",
          "   • Regroupement par sonorité ou étymologie",
          "   • Révision espacée pour une mémorisation durable"
        ]
      }
    ]
  }
};

// Structure pour les fiches de cours
const fichesCours: Record<string, Record<string, Record<string, ChapitreType[]>>> = {
  'baccalaureat': {
    'maths': {
      'premiere': [
        {
          id: 'fonctions',
          title: "Fonctions et modélisation",
          content: [
            "Définition: Une fonction f associe à tout élément x d'un ensemble de départ un unique élément f(x) d'un ensemble d'arrivée.",
            "Domaine de définition: Ensemble des valeurs de x pour lesquelles f(x) est défini.",
            "Représentation graphique: Ensemble des points M(x,y) tels que y = f(x).",
            "Fonctions de référence: linéaires (f(x) = ax), affines (f(x) = ax + b), carrée (f(x) = x²), cube (f(x) = x³), inverse (f(x) = 1/x), racine carrée (f(x) = √x).",
            "Parité: f est paire si f(-x) = f(x) pour tout x; f est impaire si f(-x) = -f(x) pour tout x.",
            "Variations: Une fonction est croissante sur un intervalle I si pour tout a < b de I, on a f(a) ≤ f(b). Elle est décroissante si f(a) ≥ f(b).",
            "Extrema: Un maximum (resp. minimum) local de f est une valeur f(a) telle que f(x) ≤ f(a) (resp. f(x) ≥ f(a)) pour tout x voisin de a.",
            "Limites: Comportement de f(x) quand x tend vers l'infini ou vers un point particulier.",
            "Asymptotes: Droites dont la courbe se rapproche indéfiniment (horizontale, verticale ou oblique)."
          ]
        },
        {
          id: 'derivees',
          title: "Dérivation",
          content: [
            "Nombre dérivé: Coefficient directeur de la tangente à la courbe au point d'abscisse a, noté f'(a).",
            "Interprétation géométrique: La dérivée représente la pente de la tangente à la courbe en un point.",
            "Interprétation physique: Vitesse instantanée pour une fonction position-temps.",
            "Formules de dérivation:",
            "- (kf)' = k·f' (où k est une constante)",
            "- (f + g)' = f' + g'",
            "- (f × g)' = f'g + fg'",
            "- (f/g)' = (f'g - fg')/g²",
            "- (f∘g)' = (f'∘g) × g'",
            "Dérivées usuelles:",
            "- (xⁿ)' = n·xⁿ⁻¹",
            "- (sin x)' = cos x",
            "- (cos x)' = -sin x",
            "- (eˣ)' = eˣ",
            "- (ln x)' = 1/x",
            "Applications: Étude des variations d'une fonction, recherche d'extrema, optimisation."
          ]
        }
      ],
      'terminale': [
        {
          id: 'limites',
          title: "Limites et continuité",
          content: [
            "Définition intuitive: La limite de f(x) quand x tend vers a est L si f(x) se rapproche arbitrairement près de L lorsque x se rapproche de a.",
            "Continuité: Une fonction est continue en a si lim(x→a) f(x) = f(a).",
            "Théorème des valeurs intermédiaires: Si f est continue sur [a,b] et que f(a) < 0 < f(b), alors il existe c ∈ [a,b] tel que f(c) = 0.",
            "Opérations sur les limites:",
            "- lim(f + g) = lim(f) + lim(g)",
            "- lim(f × g) = lim(f) × lim(g)",
            "- lim(f/g) = lim(f)/lim(g) si lim(g) ≠ 0",
            "Formes indéterminées: 0/0, ∞/∞, 0×∞, ∞-∞, 1^∞, 0^0, ∞^0.",
            "Limites usuelles:",
            "- lim(x→∞) (1/x) = 0",
            "- lim(x→∞) (ln x / x) = 0",
            "- lim(x→0) (sin x / x) = 1",
            "- lim(x→∞) ((1 + 1/x)^x) = e",
            "Asymptotes horizontales, verticales et obliques."
          ]
        },
        {
          id: 'integrales',
          title: "Intégration",
          content: [
            "Définition: ∫[a,b] f(x)dx représente l'aire algébrique sous la courbe de f entre a et b.",
            "Propriétés:",
            "- Linéarité: ∫(f + g) = ∫f + ∫g et ∫(kf) = k∫f",
            "- Relation avec la dérivée: Si F' = f, alors ∫[a,b] f(x)dx = F(b) - F(a)",
            "- Positivité: Si f ≥ 0 sur [a,b], alors ∫[a,b] f(x)dx ≥ 0",
            "- Relation d'ordre: Si f ≤ g sur [a,b], alors ∫[a,b] f(x)dx ≤ ∫[a,b] g(x)dx",
            "- Additivité: ∫[a,c] f(x)dx + ∫[c,b] f(x)dx = ∫[a,b] f(x)dx",
            "Techniques d'intégration:",
            "- Primitivation immédiate",
            "- Intégration par parties: ∫ u(x)v'(x)dx = u(x)v(x) - ∫ u'(x)v(x)dx",
            "- Changement de variable",
            "Applications: Calcul d'aires, de volumes, de valeurs moyennes, travail d'une force."
          ]
        }
      ]
    },
    // Autres matières du baccalauréat...
  },
  'toeic': {
    'listening': {
      'general': [
        {
          id: 'structure',
          title: "Structure de la partie Listening du TOEIC",
          content: [
            "Le test TOEIC Listening comprend 100 questions divisées en 4 parties:",
            "Partie 1: Photos (Questions 1-6)",
            "- Vous voyez une photo et entendez 4 descriptions",
            "- Choisissez la description qui correspond le mieux à l'image",
            "- Durée: environ 5 minutes",
            "Partie 2: Questions-Réponses (Questions 7-31)",
            "- Vous entendez une question et 3 réponses possibles",
            "- Choisissez la réponse la plus appropriée à la question",
            "- Durée: environ 15 minutes",
            "Partie 3: Conversations (Questions 32-70)",
            "- Vous écoutez un dialogue entre 2 personnes suivi de 3 questions",
            "- Chaque question a 4 réponses possibles",
            "- Durée: environ 25 minutes",
            "Partie 4: Exposés courts (Questions 71-100)",
            "- Vous écoutez un monologue ou une annonce suivie de 3 questions",
            "- Chaque question a 4 réponses possibles",
            "- Durée: environ 15 minutes",
            "Temps total: 45 minutes environ."
          ]
        },
        {
          id: 'vocab',
          title: "Vocabulaire essentiel du monde professionnel",
          content: [
            "1. Environnement de bureau:",
            "   • Office supplies: stapler, paper clip, binder, printer, scanner, photocopier",
            "   • Office layout: cubicle, conference room, reception area, lounge, lobby, cafeteria",
            "   • Technology: computer network, database, server, software, hardware, application",
            "2. Ressources humaines:",
            "   • Recruitment: job posting, interview, resume, cover letter, references, hire, fire",
            "   • Benefits: health insurance, retirement plan, paid time off, sick leave, maternity leave",
            "   • Career development: promotion, raise, performance review, training, workshop",
            "3. Marketing et ventes:",
            "   • Advertising: campaign, target audience, market research, brand awareness",
            "   • Sales: retail, wholesale, discount, markup, profit margin, commission",
            "   • Customer service: complaint, refund, warranty, satisfaction guarantee",
            "4. Voyages d'affaires:",
            "   • Transportation: flight, layover, boarding pass, business class, economy class",
            "   • Accommodation: reservation, check-in, check-out, amenities, room service",
            "   • Planning: itinerary, schedule, appointment, meeting, conference, trade show",
            "5. Finance et comptabilité:",
            "   • Banking: deposit, withdrawal, transfer, exchange rate, interest rate",
            "   • Financial documents: invoice, receipt, statement, balance sheet, budget",
            "   • Payments: cash, credit card, check, wire transfer, installment plan",
            "6. Communication professionnelle:",
            "   • Email vocabulary: attachment, forward, reply, cc, bcc, subject line",
            "   • Phone calls: hold the line, transfer, leave a message, voicemail, extension",
            "   • Meetings: agenda, minutes, schedule, postpone, reschedule, attendance"
          ]
        }
      ]
    },
    // Autres matières du TOEIC...
  },
  'tage-mage': {
    'calcul': {
      'general': [
        {
          id: 'structure',
          title: "Structure de la partie Calcul du TAGE MAGE",
          content: [
            "Le test TAGE MAGE comprend 3 sous-tests de calcul de 15 questions chacun:",
            "Sous-test 1: Calcul 1 (15 questions, 20 minutes)",
            "- Problèmes mathématiques de niveau lycée/classes préparatoires",
            "- Met l'accent sur le calcul mental et la rapidité d'exécution",
            "Sous-test 7: Calcul 2 (15 questions, 20 minutes)",
            "- Similaire au sous-test 1 mais avec des problèmes différents",
            "- Évalue la constance dans la performance de calcul",
            "Sous-test 11: Calcul 3 (15 questions, 20 minutes)",
            "- Dernière série de calcul, souvent perçue comme la plus difficile",
            "- Évalue l'endurance et la concentration en fin de test",
            "Types de problèmes abordés:",
            "- Arithmétique: fractions, pourcentages, proportions, moyennes",
            "- Algèbre: équations, inéquations, systèmes d'équations",
            "- Suites numériques: arithmétiques, géométriques, récurrentes",
            "- Problèmes concrets: mélanges, alliages, intérêts composés, vitesse-temps-distance",
            "- Dénombrement et probabilités: arrangements, combinaisons, probabilités simples",
            "Notation: +1 point par bonne réponse, 0 point par absence de réponse, -0,5 point par mauvaise réponse."
          ]
        }
      ]
    },
    // Autres matières du TAGE MAGE...
  }
};

const Methodology = () => {
  const { diplome } = useDiplome();
  const [selectedMatiere, setSelectedMatiere] = useState<string | null>(null);
  const [contentType, setContentType] = useState<ContentType>('methodologie');
  const [niveauBac, setNiveauBac] = useState<NiveauBac>('premiere');
  const [chapitreId, setChapitreId] = useState<string | null>(null);
  
  const diplomeName = {
    'baccalaureat': 'Baccalauréat',
    'toeic': 'TOEIC',
    'tage-mage': 'TAGE MAGE'
  }[diplome || 'baccalaureat'] || 'votre diplôme';
  
  const matieres = methodologiesMatieres[diplome as keyof typeof methodologiesMatieres] || methodologiesMatieres.baccalaureat;
  
  // Récupérer les fiches de méthodologie ou de cours en fonction du type sélectionné
  const getFiches = () => {
    if (contentType === 'methodologie') {
      return selectedMatiere && fichesMatieres[diplome as keyof typeof fichesMatieres]?.[selectedMatiere];
    } else {
      // Pour les fiches de cours
      if (diplome === 'baccalaureat') {
        const chapitres = selectedMatiere && fichesCours[diplome]?.[selectedMatiere]?.[niveauBac];
        if (chapitreId && chapitres) {
          return chapitres.find(c => c.id === chapitreId);
        }
        return chapitres;
      } else {
        // TOEIC et TAGE MAGE n'ont pas de niveau, juste 'general'
        return selectedMatiere && fichesCours[diplome as keyof typeof fichesCours]?.[selectedMatiere]?.general;
      }
    }
  };
  
  const fiches = getFiches();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-2">
              Fiches de {contentType === 'methodologie' ? 'méthodologie' : 'cours'}
            </h1>
            <p className="text-amber-700">
              Découvrez nos fiches pour vous aider à réussir {diplomeName}.
            </p>
          </motion.div>
          
          <Tabs defaultValue="methodologie" value={contentType} onValueChange={(value) => setContentType(value as ContentType)} className="mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-4">
              <TabsTrigger value="methodologie" className="text-sm sm:text-base">
                <BookOpenText className="w-4 h-4 mr-2" />
                Méthodologie
              </TabsTrigger>
              <TabsTrigger value="cours" className="text-sm sm:text-base">
                <GraduationCap className="w-4 h-4 mr-2" />
                Fiches de cours
              </TabsTrigger>
            </TabsList>
          </Tabs>
          
          {contentType === 'cours' && diplome === 'baccalaureat' && (
            <div className="mb-6">
              <Select value={niveauBac} onValueChange={(value) => setNiveauBac(value as NiveauBac)}>
                <SelectTrigger className="w-full max-w-xs mx-auto">
                  <SelectValue placeholder="Sélectionnez un niveau" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="premiere">Première</SelectItem>
                  <SelectItem value="terminale">Terminale</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Matières</CardTitle>
                  <CardDescription>Sélectionnez une matière</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {matieres.map((matiere) => (
                      <li key={matiere.id}>
                        <button
                          onClick={() => {
                            setSelectedMatiere(matiere.id);
                            setChapitreId(null); // Réinitialiser le chapitre sélectionné
                          }}
                          className={`w-full text-left p-3 flex items-center hover:bg-amber-50 transition-colors ${
                            selectedMatiere === matiere.id ? 'bg-amber-100 font-medium' : ''
                          }`}
                        >
                          <span className="mr-3">{matiere.icon}</span>
                          {matiere.name}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              {selectedMatiere ? (
                contentType === 'methodologie' ? (
                  // Affichage des fiches de méthodologie
                  fiches && fiches.length > 0 ? (
                    <div className="space-y-6">
                      {fiches.map((fiche, index) => (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          key={index}
                        >
                          <Card className="bg-white border-amber-200 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                              <CardTitle className="text-amber-800 flex items-center">
                                <FileText className="h-5 w-5 mr-2 text-amber-600" />
                                {fiche.title}
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="pt-4">
                              <ul className="space-y-2">
                                {fiche.content.map((point, idx) => (
                                  <li key={idx} className="text-gray-700">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <Card className="bg-amber-50">
                      <CardContent className="p-6 text-center">
                        <BookOpenText className="h-12 w-12 mx-auto text-amber-400 mb-3" />
                        <p className="text-amber-800">
                          Les fiches de méthodologie pour cette matière seront bientôt disponibles.
                        </p>
                      </CardContent>
                    </Card>
                  )
                ) : (
                  // Affichage des fiches de cours
                  diplome === 'baccalaureat' ? (
                    // Pour le baccalauréat, afficher la liste des chapitres ou le contenu d'un chapitre
                    chapitreId ? (
                      // Afficher le contenu du chapitre sélectionné
                      Array.isArray(fiches) && fiches.find(c => c.id === chapitreId) ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Card className="bg-white border-blue-200 overflow-hidden">
                            <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50 flex flex-row items-center justify-between">
                              <div>
                                <button 
                                  onClick={() => setChapitreId(null)}
                                  className="mb-2 text-blue-600 hover:text-blue-800 flex items-center text-sm"
                                >
                                  <ChevronRight className="h-4 w-4 rotate-180 mr-1" />
                                  Retour aux chapitres
                                </button>
                                <CardTitle className="text-blue-800 flex items-center">
                                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                                  {(fiches as ChapitreType[]).find(c => c.id === chapitreId)?.title}
                                </CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent className="pt-4">
                              <ul className="space-y-3">
                                {(fiches as ChapitreType[]).find(c => c.id === chapitreId)?.content.map((point, idx) => (
                                  <li key={idx} className="text-gray-700">
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ) : (
                        <Card className="bg-blue-50">
                          <CardContent className="p-6 text-center">
                            <BookOpen className="h-12 w-12 mx-auto text-blue-400 mb-3" />
                            <p className="text-blue-800">
                              Le contenu de ce chapitre sera bientôt disponible.
                            </p>
                          </CardContent>
                        </Card>
                      )
                    ) : (
                      // Afficher la liste des chapitres
                      Array.isArray(fiches) && fiches.length > 0 ? (
                        <div>
                          <h2 className="text-xl font-semibold text-blue-800 mb-4 flex items-center">
                            <ListChecks className="mr-2 h-5 w-5" />
                            Chapitres disponibles - {niveauBac === 'premiere' ? 'Première' : 'Terminale'}
                          </h2>
                          <div className="grid gap-4 sm:grid-cols-2">
                            {(fiches as ChapitreType[]).map((chapitre, index) => (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                key={chapitre.id}
                              >
                                <Card className="hover:shadow-md transition-shadow cursor-pointer" onClick={() => setChapitreId(chapitre.id)}>
                                  <CardContent className="p-4">
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center">
                                        <BookOpen className="h-5 w-5 text-blue-500 mr-3" />
                                        <h3 className="font-medium">{chapitre.title}</h3>
                                      </div>
                                      <ChevronRight className="h-4 w-4 text-blue-400" />
                                    </div>
                                  </CardContent>
                                </Card>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Card className="bg-blue-50">
                          <CardContent className="p-6 text-center">
                            <BookOpen className="h-12 w-12 mx-auto text-blue-400 mb-3" />
                            <p className="text-blue-800">
                              Les fiches de cours pour cette matière seront bientôt disponibles.
                            </p>
                          </CardContent>
                        </Card>
                      )
                    )
                  ) : (
                    // Pour TOEIC et TAGE MAGE
                    Array.isArray(fiches) && fiches.length > 0 ? (
                      <div className="space-y-6">
                        {(fiches as ChapitreType[]).map((fiche, index) => (
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            key={index}
                          >
                            <Card className="bg-white border-blue-200 overflow-hidden">
                              <CardHeader className="bg-gradient-to-r from-blue-100 to-blue-50">
                                <CardTitle className="text-blue-800 flex items-center">
                                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                                  {fiche.title}
                                </CardTitle>
                              </CardHeader>
                              <CardContent className="pt-4">
                                <ul className="space-y-2">
                                  {fiche.content.map((point, idx) => (
                                    <li key={idx} className="text-gray-700">
                                      {point}
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <Card className="bg-blue-50">
                        <CardContent className="p-6 text-center">
                          <BookOpen className="h-12 w-12 mx-auto text-blue-400 mb-3" />
                          <p className="text-blue-800">
                            Les fiches de cours pour cette matière seront bientôt disponibles.
                          </p>
                        </CardContent>
                      </Card>
                    )
                  )
                )
              ) : (
                <Card className={contentType === 'methodologie' ? "bg-amber-50" : "bg-blue-50"}>
                  <CardContent className="p-6 text-center">
                    {contentType === 'methodologie' ? (
                      <>
                        <BookOpenText className="h-12 w-12 mx-auto text-amber-400 mb-3" />
                        <p className="text-amber-800">
                          Sélectionnez une matière pour voir les fiches de méthodologie associées.
                        </p>
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-12 w-12 mx-auto text-blue-400 mb-3" />
                        <p className="text-blue-800">
                          Sélectionnez une matière pour voir les fiches de cours associées.
                        </p>
                      </>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Methodology;
