
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const writingFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'It is better to have a few close friends than many acquaintances.' Provide reasons and examples to support your opinion.",
    answer: "A strong response would include: A clear thesis stating your position, 2-3 main points with specific examples from personal experience or observations, consideration of the counterargument, and a conclusion that reinforces your position. For example, if you agree, you might discuss the depth of emotional support close friends provide, the trust built over time, and how quality relationships contribute more to well-being than quantity.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people prefer to live in a small town while others prefer to live in a big city. Which do you prefer and why? Use specific reasons and examples to support your answer.",
    answer: "An effective response would include: A clear introduction stating your preference, 2-3 paragraphs with specific benefits of your chosen location (e.g., for a city: career opportunities, cultural diversity, public transportation; for a small town: community connections, lower cost of living, proximity to nature), acknowledgment of potential drawbacks, and a conclusion restating your preference with a broader perspective on quality of life.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'Technology has made it easier for people to communicate with one another.' Use specific reasons and examples to support your answer.",
    answer: "A strong response would include: A clear thesis statement, discussion of specific technologies (e.g., smartphones, social media, video conferencing) with examples of how they facilitate communication, consideration of potential negative impacts (e.g., reduced face-to-face interaction), and a conclusion that synthesizes your arguments. Focus on personal examples and concrete situations rather than general statements.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "If you could make one important change to your school or workplace, what change would you make? Use reasons and specific examples to support your answer.",
    answer: "An effective response would: Clearly identify one specific change (e.g., flexible working hours, updated technology, environmental initiatives), explain why this change is important using 2-3 main reasons with concrete examples, address potential challenges or objections to implementing this change, and conclude by emphasizing the positive impact this change would have on the school/workplace community.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people prefer to plan activities for their free time very carefully. Others prefer to take things as they come and not plan. Which do you prefer and why?",
    answer: "A strong response would: State your preference clearly in the introduction, provide 2-3 well-developed reasons with specific examples from your own experience (e.g., for planning: efficiency, ability to participate in popular activities, reduced stress; for spontaneity: flexibility, serendipitous discoveries, freedom), acknowledge the merits of the opposing approach, and conclude by reinforcing your preference while recognizing that different situations might call for different approaches.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'Parents are the best teachers.' Give specific reasons and examples to support your response.",
    answer: "An effective response would include: A clear stance on whether parents are the best teachers, 2-3 main arguments supported by specific examples (e.g., parents' deep knowledge of their children, continuous presence during formative years, transmission of values), consideration of other influential teachers in a person's life (e.g., professional educators, peers, mentors), and a nuanced conclusion that may acknowledge the complementary roles of different types of teachers in a person's development.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people believe that students should be given one long vacation each year, while others believe that students should have several short vacations throughout the year. Which viewpoint do you agree with and why?",
    answer: "A strong response would: Clearly state your position, develop 2-3 main arguments with specific supporting details (e.g., for one long vacation: opportunity for extended travel, deeper relaxation, fewer disruptions to learning; for several short vacations: regular stress relief, better retention of information, opportunities to experience different seasons), address potential counterarguments, and conclude by reinforcing your position with a broader perspective on educational effectiveness and student well-being.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'It is more important to spend time with family than to work overtime for more money.' Use specific reasons and examples to support your opinion.",
    answer: "An effective response would: Present a clear thesis, develop 2-3 supporting arguments with concrete examples (e.g., importance of family relationships for emotional well-being, irreplaceable nature of time with growing children, diminishing returns of additional income beyond basic needs), acknowledge valid reasons why some might prioritize work in certain situations, and conclude by reinforcing your values while recognizing the need for balance based on individual circumstances.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Some people prefer to eat meals at restaurants, while others prefer to prepare and eat food at home. Which do you prefer and why? Use specific reasons and examples to support your answer.",
    answer: "A strong response would: State your preference clearly, provide 2-3 well-developed reasons with specific examples (e.g., for restaurants: convenience, variety of cuisines, social experience; for home cooking: healthier ingredients, cost savings, customization to personal taste), consider some advantages of the alternative option, and conclude by reinforcing your preference with a broader perspective on how food choices affect daily life and well-being.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
  {
    id: generateId(),
    question: "Do you agree or disagree with the following statement? 'Playing games teaches us important life skills.' Use specific reasons and examples to support your answer.",
    answer: "An effective response would: Clearly state your position, provide 2-3 well-developed paragraphs with specific examples of life skills learned through games (e.g., strategic thinking from board games, teamwork from team sports, persistence from challenging video games), address potential counterarguments about the limitations of games as teaching tools, and conclude by connecting game-based learning to real-world applications and success.",
    matiere: "TOEFL Writing",
    niveau: "facile",
    diplome: "toefl"
  },
];

// For backwards compatibility
export const WritingFacileToeflFlashcards = writingFacileToeflFlashcards;
