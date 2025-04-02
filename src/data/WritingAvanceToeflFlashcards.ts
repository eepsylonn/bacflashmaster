
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingAvanceToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they challenge the specific claims made in the reading passage about the reliability of eyewitness testimony in legal proceedings.",
    answer: "An effective integrated writing response would: Precisely identify the reading's claims about eyewitness reliability and its value in legal contexts, accurately explain the cognitive science research presented in the lecture that challenges each claim (addressing issues such as memory malleability, post-event contamination, confidence-accuracy relationship, and cross-racial identification challenges), explicitly connect each lecture counterpoint to its corresponding reading claim using sophisticated transitional language, maintain academic register appropriate to cognitive psychology and legal contexts, and demonstrate sophisticated synthesis rather than mechanical point-counterpoint structure.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "In many countries, the percentage of food that people throw away has increased significantly in recent decades, despite growing concerns about resource scarcity and environmental sustainability. What factors have contributed to this trend? What measures could effectively address this problem? Develop your response with relevant examples and evidence.",
    answer: "A sophisticated response would: Analyze multiple contributing factors spanning different societal levels—individual (changing consumption patterns, food value perceptions), commercial (marketing strategies, aesthetic standards for produce, portion sizes), systemic (supply chain inefficiencies, regulatory frameworks regarding expiration dates), and cultural (abundance norms, disconnection from food production)—while employing varied examples across geographical contexts. Address potential solutions with nuanced consideration of effectiveness, feasibility, and interconnectedness, potentially including consumer education initiatives, commercial practice reforms, policy interventions, technological innovations, and infrastructure development. The response should demonstrate conceptual sophistication through recognition of competing stakeholder interests, unintended consequences of proposed solutions, and the complex relationships between consumption behaviors and broader socioeconomic structures.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they cast doubt on the specific hypotheses presented in the reading passage about the extinction of megafauna during the late Pleistocene era.",
    answer: "An effective integrated writing response would: Accurately identify the reading's main hypotheses regarding megafauna extinction (likely addressing climate change, human hunting, or disease vectors), precisely explain the paleontological and archaeological evidence presented in the lecture that challenges each hypothesis, explicitly connect lecture counterpoints to their corresponding reading claims using sophisticated academic transitional language, employ precise scientific terminology appropriate to paleontology and archaeology, demonstrate comprehensive understanding of the complex causal relationships being debated, and synthesize the information to show how the lecture's evidence complicates monocausal explanations for complex extinction patterns.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some critics argue that the application of market-based approaches to areas traditionally governed by public institutions (such as education, healthcare, and environmental protection) optimizes efficiency and innovation. Others contend that market mechanisms in these domains prioritize profit over public welfare and exacerbate inequality. Evaluate these perspectives and develop your own position with supporting evidence.",
    answer: "A sophisticated response would: Develop a conceptually rich analysis of market-based approaches' theoretical underpinnings (incentive structures, competition-driven innovation, information utilization through price mechanisms) and their limitations (externality challenges, public good characteristics, principal-agent problems, equity concerns), examine varied real-world implementations across different sectors and regulatory contexts rather than treating markets monolithically, consider hybrid models and contextual factors affecting outcomes, incorporate evidence from diverse geographical and political settings demonstrating varied success rates, and construct a nuanced position that might recognize domain-specific considerations, necessary institutional safeguards, or complementary roles for different governance mechanisms depending on specific contextual factors and desired social outcomes.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they respond to specific concerns raised in the reading passage about the ethical implications of genetic engineering technologies.",
    answer: "An effective integrated writing response would: Precisely identify the ethical concerns raised in the reading about genetic engineering (likely addressing issues such as consent, unforeseen consequences, access equity, and definitional boundaries of humanity), accurately explain the bioethicist's responses in the lecture that provide frameworks for addressing each concern, maintain sophisticated organization that methodically connects each reading concern with its corresponding lecture response, employ precise bioethical terminology and demonstrate conceptual understanding of the ethical principles being applied, and synthesize the information to show how the lecture provides nuanced ethical reasoning rather than simplistic endorsement or rejection of the technology.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Digital communication technologies have fundamentally altered the nature of social and political discourse. Some argue these changes have primarily democratized information access and empowered previously marginalized voices, while others contend they have mainly fragmented public discourse and undermined shared understanding of reality. Evaluate these perspectives with specific reference to both political and interpersonal communication contexts.",
    answer: "A sophisticated response would: Analyze democratization claims with nuanced consideration of expanded access, lowered publication barriers, and horizontal networking benefits alongside practical limitations including digital divides, platform governance issues, and algorithmic visibility disparities. Evaluate fragmentation concerns by examining filter bubble mechanisms, affective polarization dynamics, and epistemological challenges while acknowledging pre-existing divisions and potential countervailing forces. Distinguish between impacts on different communication spheres (e.g., interpersonal relationships, community formation, national politics, global movements) rather than treating effects monolithically. Incorporate specific examples from varied political and cultural contexts demonstrating differential impacts based on existing institutional structures, technological implementation, and regulatory frameworks. Develop a sophisticated position recognizing technology's dual capacity as both mirror and shaper of social dynamics, potentially identifying key inflection points, governance mechanisms, or literacy approaches that might influence which potential is realized.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they challenge specific arguments presented in the reading passage about the economic impacts of automation and artificial intelligence on labor markets.",
    answer: "An effective integrated writing response would: Precisely identify the reading's main arguments about automation's economic impacts (likely addressing productivity gains, job displacement patterns, skill premium effects, and historical precedents), accurately explain the economist's lecture points that complicate or contradict each argument using current research and theoretical models, maintain sophisticated organization that methodically connects each reading argument with its corresponding lecture counterpoint, employ precise economic terminology appropriate to labor economics and technological change, and demonstrate conceptual understanding of complex economic relationships while synthesizing the contrasting perspectives to show how the lecture presents a more nuanced view of automation's heterogeneous effects across different sectors, timeframes, and worker populations.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "The concept of cultural appropriation—using elements from another culture without proper acknowledgment, permission, or respect—has generated significant debate regarding creative expression, cultural exchange, and power dynamics. Under what circumstances, if any, does borrowing across cultural boundaries become inappropriate or harmful? What principles should guide such cross-cultural exchange? Support your position with specific examples.",
    answer: "A sophisticated response would: Distinguish between various forms of cultural exchange (appreciation, exchange, appropriation, exploitation) while examining the contextual factors that influence ethical assessment—historical power relationships, economic benefit distribution, cultural significance of borrowed elements, acknowledgment practices, and impact on source communities. Consider multiple stakeholder perspectives including source community members (recognizing internal diversity rather than assuming monolithic views), borrowing artists/industries, and audiences/consumers. Analyze specific case examples spanning different domains (fashion, music, culinary arts, religious practices) and varying ethical evaluations, identifying the specific factors that distinguish more beneficial from more harmful instances. Develop nuanced guiding principles that might include considerations of attribution, compensation, sacred versus secular elements, closed versus open cultural practices, transformative versus extractive usage, and mechanisms for genuine dialogue and consent where appropriate. Demonstrate awareness of competing values including artistic freedom, cultural preservation, historical redress, and intercultural understanding without oversimplifying complex tensions.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they expand upon the historical analysis presented in the reading passage about factors contributing to a significant political revolution.",
    answer: "An effective integrated writing response would: Precisely identify the reading's historical analysis of factors contributing to the revolution (likely addressing economic conditions, ideological movements, and leadership dynamics), accurately explain how the lecture provides additional dimensions or reinterpretations that complicate this analysis (potentially including social class complexities, international contexts, or newly discovered primary sources), explicitly connect each lecture expansion to its corresponding reading point using sophisticated transitional language appropriate to historical analysis, employ precise historiographical terminology that demonstrates disciplinary understanding, and synthesize the information to show how the lecture enriches rather than simply contradicts the reading's account, contributing to a more multifaceted understanding of complex historical causation.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Global climate change presents complex challenges requiring coordinated international action. Evaluate the relative effectiveness of top-down approaches (international treaties with binding emissions targets) versus bottom-up approaches (local initiatives, market mechanisms, and technological innovation) in addressing climate change. Which approach or combination of approaches do you believe offers the most promising path forward? Support your position with specific examples.",
    answer: "A sophisticated response would: Analyze top-down approaches' strengths (comprehensive coverage, binding commitments, collective action facilitation) and limitations (enforcement challenges, lowest-common-denominator outcomes, political vulnerability) while examining specific case examples like the Kyoto Protocol and Paris Agreement with nuanced assessment of their achievements and shortcomings. Evaluate bottom-up approaches' advantages (innovation incentives, implementation flexibility, political feasibility) and weaknesses (coordination difficulties, carbon leakage risks, inadequate scale) with specific examples of city initiatives, corporate commitments, sectoral approaches, and technological developments. Consider hybrid models that integrate elements of both approaches, potentially addressing differential responsibilities based on development status, sector-specific approaches based on technical characteristics, or sequencing strategies that leverage early momentum. Demonstrate sophisticated understanding of climate governance challenges including time horizons, free-rider problems, equity considerations, and path dependencies while developing a position that acknowledges the complex interplay between ambition, feasibility, and urgency in climate policy.",
    matiere: "TOEFL Writing",
    niveau: "avance",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const WritingAvanceToeflFlashcards = writingAvanceToeflFlashcards;
