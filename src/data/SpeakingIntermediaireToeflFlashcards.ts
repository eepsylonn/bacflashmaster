
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const speakingIntermediaireToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "The university has announced a new policy that would limit the number of hours students can work on campus. Some students support this policy while others oppose it. Discuss both perspectives and give your opinion.",
    answer: "Sample response: Supporters argue that limiting work hours helps students focus on academics and avoid burnout, potentially improving graduation rates. Opponents contend that many students rely on campus employment to finance their education, and restrictions could cause financial hardship. In my view, a flexible policy with exceptions for students with financial need would balance academic concerns with economic realities.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some universities require all students to take courses in many subjects, while others allow students to specialize in a specific field. Which approach do you think is better for students and why?",
    answer: "Sample response: A broad education exposes students to diverse perspectives and helps develop well-rounded individuals with transferable skills. However, specialization allows for depth of knowledge and expertise in one's chosen field. I believe the ideal approach combines both: a foundation of general education requirements followed by focused study in a major, preparing students for both career specialization and adaptability in a changing world.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Listen to a conversation between two students discussing a change in the university library's operating hours. Summarize the students' opinions about this change.",
    answer: "Sample response: The female student supports the reduced library hours because it will save the university money during budget cuts and most resources are available online anyway. The male student opposes the change because he relies on the library's quiet environment for late-night studying and believes the university should prioritize academic resources. They ultimately disagree about whether convenience for some justifies inconvenience for others.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that technology has made it easier for people to connect with one another, while others believe it has made personal relationships more difficult to maintain. Discuss both views and give your opinion.",
    answer: "Sample response: Technology facilitates connection across distances through video calls, social media, and messaging apps, enabling relationships despite geographical separation. Conversely, it may reduce meaningful in-person interaction, create distractions during face-to-face time, and foster superficial connections. In my assessment, technology's impact depends largely on how we use it—as a supplement to rather than replacement for direct interaction—and our awareness of its potential pitfalls.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Listen to a lecture excerpt about the concept of 'flow' in psychology. Explain what flow is and provide the examples the professor uses to illustrate this concept.",
    answer: "Sample response: Flow is a psychological state of complete immersion in an activity, characterized by focused concentration, loss of self-consciousness, and altered perception of time. The professor illustrates this concept with examples including a musician performing a challenging piece, an athlete in peak performance, and a programmer solving complex problems. These examples demonstrate how flow occurs when skill level matches challenge level in engaging activities.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people prefer to work for large, established companies, while others prefer to work for small companies or startups. Which would you prefer and why?",
    answer: "Sample response: Large companies typically offer job security, established career paths, comprehensive benefits, and extensive resources. Small companies or startups often provide broader responsibilities, greater input in decision-making, potential for rapid advancement, and a more intimate work culture. I would prefer a startup environment because I value having direct impact on company direction, wearing multiple hats to develop diverse skills, and the innovation-focused culture typically found in smaller organizations.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Listen to a conversation between a student and an academic advisor about the student's graduation requirements. Summarize the problem the student is facing and the solution suggested by the advisor.",
    answer: "Sample response: The student is concerned about not graduating on time because they need one more science credit but can't fit a traditional lab course into their final semester schedule due to a conflict with a required major course. The advisor suggests two alternatives: taking an intensive weekend field course that provides the necessary credit in a condensed timeframe, or completing an independent research project with a faculty member that would satisfy the science requirement while offering flexible scheduling.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that university students should be required to attend classes, while others believe attendance should be optional. Which view do you support and why?",
    answer: "Sample response: Mandatory attendance ensures students receive direct instruction, participate in discussions, and develop professional habits. Optional attendance respects students' autonomy as adults and recognizes diverse learning styles and circumstances. I support a middle-ground approach where attendance contributes to the grade for discussion-based or collaborative courses, but remains optional for lecture-based classes with materials available online, allowing students to demonstrate mastery through assessments regardless of attendance patterns.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Listen to a lecture excerpt about sustainable urban planning. Explain the concept and describe two examples the professor discusses.",
    answer: "Sample response: Sustainable urban planning integrates environmental considerations into city development to reduce ecological impact while improving quality of life. The professor discusses two examples: green infrastructure like rooftop gardens and permeable pavements that manage stormwater naturally while reducing heat island effects; and transit-oriented development that creates walkable neighborhoods around public transportation hubs, reducing car dependence and associated emissions while promoting community interaction.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that it is better to save money for the future, while others think it is better to spend money and enjoy life now. Discuss both perspectives and give your opinion.",
    answer: "Sample response: Saving prioritizes long-term security through emergency funds, retirement planning, and goal achievement, preventing future hardship. Spending focuses on present experiences and opportunities that may not be available later, particularly during youth or good health. I believe in balanced financial management that secures essential future needs while allowing for meaningful present experiences, as both extreme saving at the expense of current quality of life and complete disregard for future needs represent suboptimal approaches.",
    matiere: "TOEFL Speaking",
    niveau: "intermediaire",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const SpeakingIntermediaireToeflFlashcards = speakingIntermediaireToeflFlashcards;
