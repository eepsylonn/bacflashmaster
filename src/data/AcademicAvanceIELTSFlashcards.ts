
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const academicAvanceIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Analyze the challenges in interpreting 'cause and effect' relationships in IELTS Task 1 data, and explain strategies for accurately representing causality without overinterpretation",
    answer: "Interpreting causality in IELTS Task 1 presents several epistemological challenges: correlation in data doesn't necessarily imply causation; multiple variables may interact beyond what's visible in the provided data; and temporal sequence alone doesn't establish causal relationships. To navigate these challenges, first explicitly distinguish between describing patterns ('decreased concurrently with') and asserting causation. Use cautious language acknowledging limited information ('appears associated with,' 'coincided with'). When relationships seem evident, employ appropriate hedging ('may have contributed to,' 'suggests a possible relationship'). Avoid definitive causal claims unless explicitly stated in the question prompt. Recognize that your role is primarily descriptive—focus on reporting trends, correlations, and patterns rather than explaining underlying mechanisms. Where multiple interpretations are possible, acknowledge this limitation implicitly through your linguistic choices. This approach demonstrates sophisticated analytical awareness while avoiding speculation beyond the data provided.",
    matiere: "IELTS Academic",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Evaluate the effectiveness of different concession structures in developing nuanced arguments for IELTS Writing Task 2, with attention to their rhetorical impact and linguistic sophistication",
    answer: "Concession structures vary significantly in their rhetorical effectiveness and demonstration of linguistic sophistication. Simple 'although/but' constructions acknowledge opposing views but often subordinate them excessively to the writer's position, potentially creating a straw man effect. More sophisticated structures include 'while X has merit, Y offers a more comprehensive perspective' formations that validate alternative viewpoints while establishing a hierarchical relationship between positions. The 'not only/but also' structure effectively acknowledges partial validity while redirecting focus. Particularly advanced is the 'far from X suggesting Y, it actually indicates Z' construction, which reframes opposing arguments entirely. The sophisticated 'paradoxically' structure highlights apparent contradictions before resolving them through deeper analysis. Advanced concession requires precise deployment of stance adverbials ('admittedly,' 'granted,' 'undeniably') paired with evaluative lexis indicating the degree of acceptance. The most sophisticated approaches acknowledge gradations rather than binary oppositions by distinguishing contexts where alternative views have varying validity. Ultimately, advanced concession demonstrates critical thinking not merely by acknowledging alternatives but by engaging with their strongest elements before articulating a measured, qualified position that demonstrates the complexity of the issue under examination.",
    matiere: "IELTS Academic",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Explain the concept of pragmatic implicature as it relates to understanding inference questions in IELTS Reading, and identify effective approaches for recognizing implied meanings beyond literal text",
    answer: "Pragmatic implicature—meaning communicated beyond what is explicitly stated—presents particular challenges in IELTS Reading inference questions. These questions assess ability to recognize conversational implicatures (meaning derived from breaking conversational maxims), presuppositions (implied background assumptions), scalar implicatures (meaning derived from choosing weaker terms on a scale), and conventional implicatures attached to specific constructions. Effective resolution requires recognizing several textual cues: qualification patterns that suggest contrasting implicit information; evaluative lexis revealing authorial stance; strategic uses of evidentials that distance the author from assertions; and metadiscoursal elements signaling how information should be interpreted contextually. Particular attention should be paid to counterfactual constructions, rhetorical questions, and concessive structures which frequently contain embedded implications. Beyond identifying these features, successful inference requires understanding their functional significance—whether they're used to hedge claims, strengthen assertions, introduce counter-arguments, or establish scope limitations. Cultural references and discipline-specific conventions may further contextualize implied meanings. Rather than seeking a single 'hidden meaning,' sophisticated inference involves constructing a coherent interpretation that reconciles explicit content with textual signals, authorial positioning, and discourse context.",
    matiere: "IELTS Academic",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Analyze how nominalizations function in academic discourse, and explain their strategic use in IELTS Writing to develop complex arguments while maintaining concision and objectivity",
    answer: "Nominalization—converting processes, actions and qualities into noun forms—functions as a distinctive feature of academic register that facilitates information density, abstraction, and thematic development. Transforming verbal processes into nominal groups ('implement' → 'implementation') enables multiple linguistic advantages: it permits precise modification through pre/post-nominal elements; creates cohesion through thematic progression as nominalized concepts become subjects of subsequent clauses; allows complex relationships to be expressed within rather than between clauses; and facilitates objective discourse by backgrounding agents and foregrounding concepts and relationships. Strategically in IELTS writing, nominalizations serve as powerful thematic condensation devices at paragraph boundaries ('This transformation of urban environments has multiple implications'). They enable sophisticated causal relationships expressed concisely ('The proliferation of misinformation necessitates improved digital literacy'). They facilitate nuanced evaluation by embedding judgment within nominal groups rather than expressing it predicatively ('the inadequacy of conventional approaches' versus 'conventional approaches are inadequate'). However, excessive nominalization risks creating unnecessarily abstract prose and taxing processing capacity. Effective academic writing alternates between nominalized forms for conceptual density and verbal constructions for clarity and dynamism, strategically selecting nominalization where it contributes to conceptual precision, cohesive development, or argumentative sophistication.",
    matiere: "IELTS Academic",
    niveau: "avance",
    diplome: "ielts"
  },
  {
    id: generateId(),
    question: "Critically evaluate the limitations of the IELTS Task 1 format for representing complex multivariate data, and explain sophisticated approaches to addressing these constraints while maintaining assessment criteria compliance",
    answer: "The IELTS Task 1 format imposes significant representational constraints on complex multivariate data: the 150-word minimum restricts comprehensive analysis; the 20-minute timeframe limits interpretive depth; and the linear text medium inadequately represents multidimensional relationships compared to visual analytics tools. These constraints are particularly problematic for data sets with interaction effects, conditional relationships, or temporal dependencies that resist simplistic description. Sophisticated approaches work within these limitations by implementing strategic selectivity—prioritizing relationships that illuminate systemic patterns rather than isolated fluctuations. Macrostructurally, this involves establishing hierarchical organization where overview statements articulate relationships between variables before examining specific interactions. Linguistically, it requires developing compressed expressions that maintain precision while reducing word count—employing carefully selected nominalizations, strategic embedding, and specialized statistical collocations. Advanced responses develop parallel structures mapping correspondent relationships across variables and time periods, creating textual patterns that mirror data patterns. They employ mathematical language economically by integrating proportional expressions and relational qualifiers directly into descriptive statements rather than separating them. Most importantly, they demonstrate metacognitive awareness of descriptive limitations by strategically selecting representational approaches appropriate to specific data types—time series, proportional relationships, multifactorial comparisons—and subtly adapting conventional IELTS structures to accommodate data complexity without violating assessment expectations.",
    matiere: "IELTS Academic",
    niveau: "avance",
    diplome: "ielts"
  }
];

// Pour compatibilité
export const AcademicAvanceIELTSFlashcards = academicAvanceIELTSFlashcards;
