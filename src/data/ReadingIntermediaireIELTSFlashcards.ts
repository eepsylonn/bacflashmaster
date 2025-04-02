
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingIntermediaireIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "What conclusion does the author reach about the relationship between technology and productivity in modern workplaces?",
    answer: "It has a positive impact only when implemented with appropriate training and organizational changes",
    matiere: "IELTS Reading",
    niveau: "intermediaire",
    diplome: "ielts",
    text: "The relationship between technology adoption and workplace productivity presents a complex picture that challenges simplistic narratives about digital transformation. While investments in information technology have generally coincided with productivity growth across various sectors, research indicates that technology alone rarely delivers significant improvements. The \"productivity paradox\" observed in many organizations stems from implementing new technologies without the corresponding adjustments to organizational structures, work processes, and employee skills. Companies that achieve the greatest productivity gains typically approach digital transformation holistically, combining technological investments with redesigned workflows, decentralized decision-making structures, and comprehensive training programs. Additionally, productivity benefits often materialize after a lag period during which employees adapt to new systems. This adaptation process frequently involves initial productivity decreases before organizations realize gains. Cultural factors also significantly influence outcomes, with environments that encourage experimentation and tolerate constructive failure generally seeing more successful technology integration. As artificial intelligence and automation increasingly enter workplaces, this multidimensional understanding of technological change becomes even more critical for organizations seeking productivity improvements."
  },
  {
    id: generateId(),
    question: "According to the passage about urban transportation systems, what factor most significantly influences people's choice of transportation mode?",
    answer: "Convenience and reliability rather than cost or environmental concerns",
    matiere: "IELTS Reading",
    niveau: "intermediaire",
    diplome: "ielts",
    text: "Urban transportation systems worldwide face mounting challenges as cities continue to grow and evolve. Research examining transportation preferences across diverse urban environments consistently finds that convenience and reliability—rather than cost or environmental considerations—most significantly influence people's mode choices. Even environmentally conscious individuals frequently choose private vehicles when public transportation options are perceived as unreliable or insufficiently connected to their destinations. This preference underscores the importance of creating integrated transportation networks that prioritize predictable service and comprehensive coverage. Cities that have successfully reduced private vehicle usage typically implement multimodal approaches combining improvements to public transportation infrastructure with policies that simultaneously disincentivize driving, such as congestion pricing or parking restrictions. Additionally, emerging mobility options like ride-sharing services, electric scooters, and bike-sharing programs are increasingly important components of urban transportation ecosystems, though their long-term impact on congestion and emissions remains debated. The most successful urban transportation transformations generally result from coherent policies addressing both infrastructure development and behavioral incentives, while also considering equity concerns to ensure that transportation improvements benefit all community members rather than exacerbating existing socioeconomic disparities."
  },
  {
    id: generateId(),
    question: "What does the author identify as the primary misconception about language acquisition in multilingual children?",
    answer: "That learning multiple languages simultaneously causes language delays or confusion",
    matiere: "IELTS Reading",
    niveau: "intermediaire",
    diplome: "ielts",
    text: "Multilingualism in early childhood has been the subject of numerous misconceptions despite extensive research demonstrating its cognitive benefits. Perhaps the most persistent myth is that simultaneous exposure to multiple languages causes confusion or language delays in young children. Contemporary research has thoroughly debunked this notion, showing that while multilingual children might temporarily have smaller vocabularies in each individual language compared to monolingual peers, their total vocabulary size across all languages typically equals or exceeds that of monolingual children. Furthermore, multilingual children develop metalinguistic awareness—the ability to think about language as a system—earlier than their monolingual counterparts. This enhanced metalinguistic awareness correlates with advantages in certain executive functions, particularly cognitive flexibility and attentional control. Neuroimaging studies reveal that multilingual experiences actually alter brain structure and connectivity in regions associated with language processing and executive function. From a developmental perspective, children have a remarkable capacity to differentiate between languages from infancy, even when they share similar phonological features. Parents raising multilingual children most successfully typically adopt consistent language practices, such as the \"one person, one language\" approach, while ensuring sufficient exposure to each language in meaningful contexts. Educational systems supporting multilingualism through dual-language programs have demonstrated that literacy skills developed in one language transfer positively to additional languages, challenging the assumption that multilingual education compromises academic achievement."
  },
  {
    id: generateId(),
    question: "According to the passage, how has ocean acidification primarily affected marine ecosystems thus far?",
    answer: "By impairing the ability of calcifying organisms to build and maintain shells and skeletons",
    matiere: "IELTS Reading",
    niveau: "intermediaire",
    diplome: "ielts",
    text: "Ocean acidification, often characterized as climate change's \"equally evil twin,\" represents one of the most significant yet underappreciated consequences of rising atmospheric carbon dioxide levels. As oceans absorb approximately 30% of anthropogenic CO₂ emissions, seawater chemistry fundamentally alters through a series of reactions that increase hydrogen ion concentration, thereby decreasing pH and carbonate ion availability. This chemical transformation most directly impacts calcifying organisms—including corals, mollusks, echinoderms, and certain plankton species—by impairing their ability to build and maintain calcium carbonate shells and skeletons. Laboratory and field studies have demonstrated reduced calcification rates, increased shell dissolution, and compromised larval development in numerous species under acidification conditions projected for this century. These physiological effects cascade through marine food webs, potentially disrupting ecosystem functioning and the services these systems provide. For instance, pteropods—tiny swimming snails that serve as crucial components of polar and subpolar food webs—already show shell dissolution in parts of the Southern Ocean where aragonite saturation has decreased significantly. Beyond calcification impacts, research increasingly reveals that acidification can affect organisms' energy allocation, reproductive success, sensory systems, and behavior, with some fish species exhibiting impaired predator avoidance under elevated CO₂ conditions. Ocean acidification progresses against a backdrop of other stressors including warming, deoxygenation, and pollution, creating complex interactive effects that marine ecosystems have not historically experienced at current rates. While certain species demonstrate capacity for adaptation through transgenerational plasticity or evolutionary processes, the rapid pace of chemical changes may exceed adaptive capabilities for many organisms, particularly those with longer generation times."
  },
  {
    id: generateId(),
    question: "What does the author suggest is the most significant barrier to effective global disease surveillance?",
    answer: "Inadequate healthcare infrastructure in regions where new pathogens are most likely to emerge",
    matiere: "IELTS Reading",
    niveau: "intermediaire",
    diplome: "ielts",
    text: "Global disease surveillance represents the first line of defense against pandemic threats, yet significant structural and operational challenges undermine its effectiveness. Perhaps most fundamentally, regions where novel pathogens are most likely to emerge—typically biodiversity hotspots experiencing rapid environmental change and intensive human-wildlife contact—often have the least developed healthcare infrastructure for detecting unusual disease patterns. This surveillance paradox creates dangerous blind spots in our global early warning system. While international frameworks like the International Health Regulations establish reporting requirements for unusual disease events, compliance varies substantially due to concerns about economic repercussions from trade and travel restrictions that often follow outbreak announcements. These economic disincentives for transparent reporting persist despite recognition of their counterproductive effects on containing outbreaks. Additionally, surveillance systems designed for known pathogens may miss novel threats with unfamiliar clinical presentations or transmission patterns. Technological advances in pathogen detection, including metagenomic sequencing and artificial intelligence-powered syndromic surveillance, offer promising solutions but remain unevenly implemented globally. Successful surveillance requires not only technological capacity but also effective coordination across disciplines including clinical medicine, veterinary science, and ecology, reflecting the interconnected nature of human, animal, and environmental health. Recent initiatives embracing this \"One Health\" approach have demonstrated improved sensitivity in detecting emerging threats, but scaling these integrated surveillance systems requires sustained investment and cross-sectoral collaboration. The most effective global surveillance strategies combine technological innovation with strengthened local healthcare systems, community engagement, and policies that incentivize rather than penalize timely outbreak reporting."
  }
];

// Pour compatibilité
export const ReadingIntermediaireIELTSFlashcards = readingIntermediaireIELTSFlashcards;
