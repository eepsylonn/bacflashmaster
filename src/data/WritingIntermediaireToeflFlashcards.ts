
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they cast doubt on specific points made in the reading passage. (Reading passage about coral reef conservation efforts and lecture presenting challenges to these approaches)",
    answer: "An effective integrated writing response would: Accurately identify 3 main points from the reading about coral reef conservation approaches, clearly explain how the lecture challenges each of these points with specific evidence, maintain a balanced structure that connects reading points with corresponding lecture counterpoints, use appropriate transitional language to indicate the relationship between the passages, and paraphrase information from both sources without copying verbatim.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that university students should be required to attend all classes. Others believe that students should be able to decide for themselves which classes to attend. Which view do you agree with? Use specific reasons and examples to support your answer.",
    answer: "A strong response would: Present a clear thesis with nuanced positioning, develop 3-4 logically organized supporting points with specific examples and analysis (e.g., for mandatory attendance: accountability, correlation with academic success, preparation for professional expectations; for optional attendance: student autonomy, diverse learning styles, practical realities of student life), address counterarguments substantively rather than dismissively, and conclude by contextualizing your position within broader educational philosophy about effective learning environments and student development.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they respond to the specific concerns about urbanization raised in the reading passage.",
    answer: "An effective integrated writing response would: Accurately identify the reading's main concerns about urbanization (e.g., environmental degradation, social isolation, infrastructure strain), clearly explain how the lecture addresses each concern with specific examples of innovative urban solutions, explicitly connect each lecture point to its corresponding reading concern using clear transitional phrases, maintain objective tone while accurately representing both perspectives, and synthesize rather than merely listing the points made in both sources.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'It is more important for governments to spend money on public infrastructure such as roads, parks, and environmental protection than to spend money on cultural institutions like museums and theaters.' Use specific reasons and examples to support your answer.",
    answer: "A strong response would: Present a nuanced thesis that goes beyond simple agreement/disagreement, develop a well-structured argument with 3-4 substantive paragraphs exploring concepts like economic multiplier effects, collective social goods, quality of life factors, and governmental priorities, incorporate specific examples from different contexts or countries to illustrate your points, address potential counterarguments thoughtfully, and conclude by connecting your position to broader principles about government responsibilities and the balanced needs of society.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture about animal migration, being sure to explain how they challenge specific points made in the reading passage about traditional understanding of migration patterns.",
    answer: "An effective integrated writing response would: Clearly identify 3 traditional understandings about animal migration from the reading (e.g., genetic programming, consistent routes, predictable timing), accurately explain how the lecture challenges each understanding with specific research findings and examples, maintain cohesive organization that pairs each reading point with its corresponding lecture counterpoint, use appropriate signal phrases to attribute ideas to their respective sources, and synthesize the information to show how new research has complicated traditional understandings.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some educators believe that international exchange programs should focus primarily on languages and cultural experiences. Others believe they should emphasize academic courses and professional development. Discuss both views and give your own opinion with reasons.",
    answer: "A strong response would: Present both perspectives fairly before developing your own position, analyze the cultural approach's benefits (intercultural competence, linguistic immersion, personal growth) and limitations, evaluate the academic approach's advantages (career advancement, specialized knowledge, credential recognition) and shortcomings, develop your own nuanced position that may incorporate elements of both approaches or propose conditions under which different emphases might be appropriate, and support your arguments with specific examples from educational contexts or personal experiences with international exchanges.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they cast doubt on specific points made in the reading passage about the historical significance of a particular archaeological discovery.",
    answer: "An effective integrated writing response would: Accurately identify the reading's main claims about the archaeological discovery's significance, clearly explain the specific evidence and alternative interpretations presented in the lecture that challenge each claim, maintain parallel structure that methodically connects each point in the reading with its counter in the lecture, use accurate academic vocabulary for archaeological concepts, and demonstrate critical synthesis of the contrasting views without inserting personal opinion.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that the best way to improve public health is through education programs. Others believe that more significant improvements would result from making healthcare more affordable and accessible. Discuss both views and give your own opinion.",
    answer: "A strong response would: Analyze the education-focused approach comprehensively (prevention benefits, behavioral change potential, cost-effectiveness, limitations regarding structural barriers), evaluate the accessibility-focused approach thoroughly (addressing immediate needs, overcoming socioeconomic disparities, systemic limitations), develop a sophisticated position that might recognize complementary roles, contextual factors, or sequencing considerations, support arguments with concrete examples from specific health challenges or regional contexts, and conclude with implications that connect to broader public health principles and priorities.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Summarize the points made in the lecture, being sure to explain how they relate to specific points made in the reading passage about renewable energy technologies.",
    answer: "An effective integrated writing response would: Accurately identify the reading's main points about specific renewable energy technologies and their potential, clearly explain how the lecture either supports, challenges, or expands upon each point with current research and implementation examples, explicitly connect each lecture point to its corresponding reading point using appropriate transitional language, maintain objective tone while accurately conveying the technical content from both sources, and demonstrate understanding of the relationship between the theoretical potential described in the reading and the practical realities presented in the lecture.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'The rapid pace of technology change means that traditional education systems cannot effectively prepare students for their future careers.' Use specific reasons and examples to support your answer.",
    answer: "A strong response would: Present a nuanced thesis addressing the relationship between technological change and educational effectiveness, develop 3-4 logically structured supporting points with specific examples and analysis (considering aspects like transferable skills development, knowledge obsolescence rates, educational system adaptability, and industry-education partnerships), substantively address counterarguments and limitations to your position, and conclude by contextualizing your argument within broader implications for educational policy, lifelong learning approaches, or the evolving relationship between education and employment in the digital age.",
    matiere: "TOEFL Writing",
    niveau: "intermediaire",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const WritingIntermediaireToeflFlashcards = writingIntermediaireToeflFlashcards;
