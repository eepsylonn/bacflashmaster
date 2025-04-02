
import { Flashcard } from '@/types';

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "According to the passage about neuroplasticity, what happens to neural pathways that are used frequently?",
    answer: "They become stronger and more efficient",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Neuroplasticity, the brain's ability to reorganize itself by forming new neural connections, represents a paradigm shift in our understanding of neuroscience. Until relatively recently, scientists believed that brain development occurred primarily during childhood and adolescence, after which the brain's structure remained largely fixed. Research has now conclusively demonstrated that the brain continues to change throughout life in response to learning, experience, and injury. Neural pathways that are frequently utilized become stronger and more efficient through a process called long-term potentiation, while unused connections may weaken through long-term depression. This dynamic process allows for continual adaptation to changing environments and learning requirements. Remarkably, in cases of brain injury, intact regions can sometimes compensate for damaged areas by forming new connections and assuming new functions, though this compensatory ability varies significantly depending on the extent and location of damage, as well as the individual's age and overall health."
  },
  {
    id: generateId(),
    question: "What does the author of the passage about quantum computing suggest is the main advantage over classical computing?",
    answer: "The ability to process multiple possibilities simultaneously",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Quantum computing represents a revolutionary approach to information processing that harnesses the principles of quantum mechanics. Unlike classical computers that use bits (0s and 1s) as their fundamental units of information, quantum computers utilize quantum bits or qubits. The distinctive property of qubits is their ability to exist in multiple states simultaneously through a phenomenon called superposition. Additionally, qubits can be entangled, meaning the state of one qubit is inherently linked to the state of another, regardless of the distance between them. These properties enable quantum computers to process multiple possibilities concurrently, potentially solving certain complex problems exponentially faster than the most powerful classical supercomputers. Particularly promising applications include cryptography, drug discovery, materials science, and optimization problems. However, significant technical challenges remain, including maintaining quantum coherence (the delicate quantum state necessary for computation) and developing error correction methods robust enough for practical applications. Despite these obstacles, major technology companies and research institutions continue to advance quantum computing capabilities, suggesting that practical quantum advantages may be achieved for specific problems in the coming decade."
  },
  {
    id: generateId(),
    question: "According to the passage about behavioral economics, how does the endowment effect influence consumer behavior?",
    answer: "People value items they own more highly than identical items they don't own",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Behavioral economics integrates insights from psychology into economic analysis, challenging the traditional assumption that individuals always make rational, self-interested decisions. One significant cognitive bias identified by behavioral economists is the endowment effect, wherein people attribute higher value to items they already own compared to identical items they don't possess. This phenomenon helps explain consumers' reluctance to trade possessions even for items of greater objective value. Similarly, loss aversion—the tendency to prefer avoiding losses over acquiring equivalent gains—leads individuals to make decisions that may appear economically irrational but reflect deeper psychological processes. Status quo bias further demonstrates our preference for maintaining current states even when alternatives might offer advantages. These insights have profound implications for market behaviors, public policy, and individual decision-making. Behavioral economics doesn't entirely reject classical economic theory but rather enriches it by acknowledging the complex psychological factors that influence human choices, providing more nuanced frameworks for predicting and understanding economic behavior in real-world contexts."
  },
  {
    id: generateId(),
    question: "What does the author of the passage about coral reefs identify as the most severe threat to reef ecosystems?",
    answer: "Rising ocean temperatures due to climate change",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Coral reefs, often called the rainforests of the sea, support approximately 25% of all marine species while occupying less than 1% of the ocean floor. These diverse ecosystems provide crucial habitats, coastal protection, and economic benefits through fisheries and tourism. However, coral reefs face unprecedented threats, with rising ocean temperatures due to climate change representing the most severe. When water temperatures exceed corals' tolerance thresholds, they expel their symbiotic algae (zooxanthellae) in a process called bleaching, losing both their color and primary energy source. Without these algae, corals typically die unless conditions improve quickly. Ocean acidification, resulting from increased atmospheric carbon dioxide dissolving in seawater, further compromises corals' ability to build calcium carbonate skeletons. Additional stressors include pollution from agricultural runoff and coastal development, overfishing that disrupts reef ecosystem balance, and destructive fishing practices like dynamite fishing. The cumulative impact of these threats has already caused a 50% decline in coral reefs worldwide, with projections suggesting that without significant intervention, up to 90% of reefs could disappear by 2050, representing an ecological catastrophe with far-reaching consequences for marine biodiversity and human communities dependent on these ecosystems."
  },
  {
    id: generateId(),
    question: "According to the passage about artificial intelligence in healthcare, what is a key limitation of AI diagnostic systems?",
    answer: "Difficulty processing contextual information beyond their training data",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Artificial intelligence is transforming healthcare through advanced diagnostic capabilities, treatment recommendations, and administrative streamlining. In radiology and pathology, AI systems can analyze medical images to detect patterns associated with diseases, often with accuracy comparable to or exceeding human specialists. These systems excel at processing vast datasets to identify subtle indicators that might escape human observation, potentially enabling earlier diagnosis of conditions like cancer. Similarly, AI applications in genomics analyze genetic information to predict disease risk and suggest personalized treatment approaches. However, significant limitations persist. AI diagnostic systems may struggle with processing contextual information beyond their training data, potentially missing rare conditions or unique patient circumstances that human clinicians might recognize. The opacity of many AI algorithms creates 'black box' problems, where even developers cannot fully explain how systems reach specific conclusions. Additionally, AI systems trained on non-representative patient populations may perpetuate or amplify existing healthcare disparities. Regulatory frameworks for these rapidly evolving technologies remain incomplete, raising questions about liability when AI recommendations contribute to adverse outcomes. Despite these challenges, the integration of AI with human clinical expertise, rather than replacement of medical professionals, promises to enhance diagnostic accuracy, treatment effectiveness, and healthcare efficiency while maintaining the irreplaceable human elements of care."
  },
  {
    id: generateId(),
    question: "What biological feature does the passage about deep-sea organisms suggest is common in species living in the abyssal zone?",
    answer: "Bioluminescence as a means of communication and attracting prey",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Deep-sea environments represent one of Earth's last true frontiers, with the abyssal zone (3,000-6,000 meters deep) remaining largely unexplored despite covering over 50% of the planet's surface. This vast, perpetually dark ecosystem experiences extreme pressure (up to 600 times that at sea level), near-freezing temperatures, and minimal food resources, creating conditions that have driven remarkable evolutionary adaptations. Bioluminescence—the ability to produce light through biochemical processes—is extraordinarily common, with an estimated 90% of deep-sea organisms exhibiting this feature. This biological light serves multiple functions: attracting prey, confusing predators, communicating with potential mates, and illuminating hunting territories. Many abyssal creatures have developed extremely efficient metabolisms that allow survival on sporadic food sources, with some able to reduce their metabolic rates by up to 95% during periods of scarcity. Morphological adaptations include enhanced sensory systems to detect minimal stimuli, expandable stomachs capable of consuming prey larger than the predator itself, and reduced skeletal structures that conserve energy. Unlike surface ecosystems dependent on photosynthesis, deep-sea communities often center around hydrothermal vents, where chemosynthetic bacteria convert minerals from superheated water into energy, supporting complex food webs entirely independent from sunlight. With each research expedition yielding discoveries of previously unknown species, our understanding of these unique ecosystems continues to evolve, highlighting the remarkable ways life adapts to Earth's most challenging environments."
  },
  {
    id: generateId(),
    question: "According to the passage about urban agriculture, what is the main advantage of vertical farming systems?",
    answer: "Maximizing food production in limited urban spaces while reducing transportation distances",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Urban agriculture has emerged as a multifaceted response to challenges facing modern food systems, including climate change, food insecurity, and environmental degradation. Unlike conventional rural farming, urban agriculture integrates food production into city landscapes through various forms: community gardens, rooftop farms, indoor hydroponic systems, and vertical farming operations. Vertical farming represents a particularly innovative approach, utilizing stacked growing systems to maximize food production in limited urban spaces. These controlled-environment agriculture systems offer numerous advantages: significantly reduced water consumption (up to 95% less than conventional farming), elimination of chemical pesticides, year-round production regardless of climate conditions, and drastically shortened food transportation distances. By producing food where it's consumed, urban agriculture reduces the carbon footprint associated with food transportation while providing fresher produce with higher nutritional value. Additionally, urban farming initiatives often serve important social functions, creating employment opportunities, strengthening community bonds, and transforming abandoned properties into productive spaces. The integration of these systems with renewable energy sources and circular economy principles—such as capturing rainwater and recycling organic waste through composting—further enhances their sustainability. While challenges including high startup costs, energy requirements, and competition for urban land persist, continued technological innovation and supportive policy frameworks are expanding urban agriculture's potential to complement traditional farming in creating more resilient, sustainable food systems."
  },
  {
    id: generateId(),
    question: "What aspect of memory does the passage suggest is most affected by sleep deprivation?",
    answer: "The consolidation of new information into long-term memory",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "The relationship between sleep and memory represents one of neuroscience's most fascinating discoveries, with implications ranging from educational practices to treating cognitive disorders. Memory formation proceeds through several distinct phases: encoding (initial acquisition of information), consolidation (stabilization and integration of memories), and retrieval (accessing stored information). Sleep plays a critical role particularly in the consolidation phase, during which the brain processes and strengthens newly acquired information, transferring it from short-term to long-term storage. Different sleep stages appear to facilitate different types of memory: slow-wave sleep (deep, non-REM sleep) primarily benefits declarative memory (facts and experiences), while REM sleep enhances procedural memory (skills and habits) and emotional memory processing. During slow-wave sleep, the hippocampus—a temporary storage site for new memories—replays the day's neural activity patterns, gradually transferring information to the neocortex for long-term storage through a process called systems consolidation. This hippocampal-neocortical dialogue, characterized by unique oscillatory brain rhythms, allows memories to be integrated with existing knowledge networks, facilitating both retention and creative connections between seemingly unrelated concepts. Sleep deprivation significantly disrupts these processes, impairing particularly the formation of long-term declarative memories, with even one night of inadequate sleep reducing memory consolidation by 40% in some studies. Additionally, sleep before learning prepares the brain for new memory formation by clearing temporary storage capacity, while sleep after learning prevents interference and facilitates the stabilization processes described above. These insights highlight sleep as not merely restorative but actively involved in cognitive processes, suggesting that strategic sleep timing could optimize learning and memory performance in educational and professional contexts."
  },
  {
    id: generateId(),
    question: "According to the passage about microplastics, what unexpected environmental pathway for plastic pollution does the author identify?",
    answer: "Atmospheric transport and precipitation",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "Microplastics—plastic particles smaller than 5mm in diameter—have emerged as ubiquitous environmental contaminants with increasingly concerning implications for ecosystem and human health. These particles originate from two primary sources: the direct manufacture of microbeads for industrial and consumer products (primary microplastics) and the fragmentation of larger plastic items through weathering and degradation (secondary microplastics). Recent research has detected microplastics in virtually every environmental compartment, from deep ocean sediments to Antarctic ice, remote mountain soils, and human organs. Particularly alarming is the discovery of atmospheric transport mechanisms, with microplastics now documented in air samples from remote locations and precipitation worldwide, demonstrating their potential for global distribution through atmospheric circulation patterns. In aquatic ecosystems, microplastics adsorb persistent organic pollutants and heavy metals from surrounding waters, potentially concentrating these toxins and transferring them through food webs when ingested by organisms. Laboratory studies have demonstrated various biological effects of microplastic exposure, including inflammation, disrupted reproductive functions, altered behavior, and compromised immune responses across diverse species from zooplankton to mammals. Human exposure occurs through multiple pathways: ingestion of contaminated food and water, inhalation of airborne particles, and dermal contact with microplastic-containing products. While research on human health impacts remains in its early stages, preliminary evidence suggests potential concerns including inflammatory responses, oxidative stress, cytotoxicity, and translocation of particles to various organ systems. The persistence of conventional plastics, which may take centuries to fully degrade, means that environmental concentrations will likely continue increasing even if immediate mitigation measures are implemented. Addressing this complex pollution challenge requires integrated approaches: improving waste management infrastructure, developing truly biodegradable alternatives, implementing extended producer responsibility frameworks, and fundamentally rethinking material consumption patterns in modern society."
  },
  {
    id: generateId(),
    question: "What does the passage about the history of antibiotics identify as the main challenge facing antibiotic development today?",
    answer: "The economic disincentives for pharmaceutical companies to invest in new antibiotics",
    matiere: "TOEFL Reading",
    niveau: "intermediaire",
    diplome: "toefl",
    text: "The discovery of antibiotics fundamentally transformed medicine, converting previously lethal bacterial infections into manageable conditions and enabling complex surgical procedures by preventing infection. The serendipitous discovery of penicillin by Alexander Fleming in 1928, followed by its large-scale production during World War II, launched the \"golden age\" of antibiotic discovery (1940s-1960s), during which pharmaceutical companies identified most major antibiotic classes through systematic screening of soil microorganisms. However, this period of rapid discovery gave way to the \"innovation gap\" from the 1970s through today, during which few novel antibiotic classes have been developed. This slowdown coincided with the emergence of antimicrobial resistance (AMR), a predictable evolutionary response wherein bacterial populations develop mechanisms to survive antibiotic exposure. Resistance mechanisms include enzymatic degradation of antibiotics, modification of cellular targets, reduced membrane permeability, and active efflux systems that pump antibiotics out of bacterial cells. The situation has been exacerbated by widespread antibiotic misuse in human medicine (particularly unnecessary prescriptions for viral infections) and agricultural settings (where antibiotics are often used for growth promotion rather than treating infections). The economic landscape presents additional challenges: antibiotics, ideally used sparingly and for short durations, offer lower returns on investment compared to medications for chronic conditions, creating significant disincentives for pharmaceutical companies to invest in antibiotic development despite the clear public health need. This market failure has prompted calls for innovative financing models, including subscription-based payments, market entry rewards, and public-private partnerships to revitalize the antibiotic pipeline. Without such interventions, projections suggest antimicrobial resistance could cause 10 million deaths annually by 2050, effectively returning medicine to a pre-antibiotic era where routine infections and minor injuries could once again become life-threatening."
  },
];

// For backwards compatibility
export const ReadingIntermediaireToeflFlashcards = readingIntermediaireToeflFlashcards;
