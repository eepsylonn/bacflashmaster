
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingFacileIELTSFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "According to the passage about urban parks, what is the main benefit they provide to city residents?",
    answer: "Improved mental health and reduced stress levels",
    matiere: "IELTS Reading",
    niveau: "facile",
    diplome: "ielts",
    text: "Urban parks play a crucial role in enhancing the quality of life in cities. Research has consistently shown that access to green spaces significantly improves mental health by reducing stress levels and anxiety. Studies found that even short visits to parks can lower blood pressure and decrease cortisol levels. Beyond their mental health benefits, parks also provide opportunities for physical exercise, social interaction, and community events. They help mitigate the urban heat island effect by lowering ambient temperatures and improving air quality through the filtration of pollutants. Additionally, urban parks support biodiversity by providing habitats for various plant and animal species that might otherwise struggle to survive in heavily developed areas."
  },
  {
    id: generateId(),
    question: "What does the author identify as a key challenge facing small businesses in the digital era?",
    answer: "Competing with large online retailers",
    matiere: "IELTS Reading",
    niveau: "facile",
    diplome: "ielts",
    text: "Small businesses today face numerous challenges in the digital marketplace. Perhaps the most significant is the difficulty of competing with large online retailers that can offer lower prices due to economies of scale and extensive distribution networks. These large companies often have sophisticated algorithms and marketing strategies that small businesses struggle to match. However, small enterprises can leverage certain advantages, such as providing personalized customer service, creating unique products, and building strong community relationships. Many successful small businesses have found niches that larger companies don't serve effectively. Additionally, digital tools and platforms have made it easier for small businesses to reach potential customers beyond their immediate geographic area, potentially expanding their market reach without requiring substantial investment in physical infrastructure."
  },
  {
    id: generateId(),
    question: "According to the passage about healthy eating habits, which food group should form the foundation of a balanced diet?",
    answer: "Fruits and vegetables",
    matiere: "IELTS Reading",
    niveau: "facile",
    diplome: "ielts",
    text: "Developing healthy eating habits begins with understanding the components of a balanced diet. Nutritionists recommend that fruits and vegetables should form the foundation of healthy eating patterns, ideally comprising about half of each meal. These foods provide essential vitamins, minerals, and fiber while generally being low in calories. Whole grains should replace refined grains whenever possible, as they contain more fiber and nutrients. Protein sources should be varied and include plant-based options like beans and nuts alongside lean meats, poultry, and fish. Dairy products or calcium-fortified alternatives contribute important nutrients like calcium and vitamin D. Limiting added sugars, sodium, and unhealthy fats is equally important for maintaining overall health. Rather than focusing on specific diets, health professionals increasingly emphasize sustainable eating patterns that can be maintained long-term and adapted to individual preferences, cultural traditions, and budgetary constraints."
  },
  {
    id: generateId(),
    question: "What is the main purpose of the International Space Station according to the passage?",
    answer: "To conduct scientific research in microgravity",
    matiere: "IELTS Reading",
    niveau: "facile",
    diplome: "ielts",
    text: "The International Space Station (ISS) represents one of humanity's greatest collaborative achievements. Orbiting approximately 400 kilometers above Earth, this habitable satellite serves primarily as a laboratory for conducting scientific research that wouldn't be possible on our planet's surface. The microgravity environment enables unique experiments in biology, physics, astronomy, and materials science. Since its first component launched in 1998, the ISS has been continuously occupied since November 2000, with rotating crews of astronauts and cosmonauts from various countries. Beyond its scientific mission, the station symbolizes international cooperation, with the United States, Russia, Europe, Japan, and Canada as the main partners in its development and operation. The ISS is visible from Earth with the naked eye and completes approximately 16 orbits of our planet every day, traveling at about 28,000 kilometers per hour."
  },
  {
    id: generateId(),
    question: "According to the passage about renewable energy, which renewable source currently produces the most electricity globally?",
    answer: "Hydropower",
    matiere: "IELTS Reading",
    niveau: "facile",
    diplome: "ielts",
    text: "Renewable energy has experienced remarkable growth in recent years as countries seek to reduce carbon emissions and address climate change. While solar and wind power often receive the most media attention, hydropower remains the largest renewable electricity source globally, accounting for approximately 16% of total electricity generation. Large dams and run-of-river installations harness the energy of flowing water to generate power. Solar photovoltaic technology has seen dramatic cost reductions, making it increasingly competitive with fossil fuels even without subsidies. Wind power, both onshore and offshore, continues to expand rapidly, with turbines becoming larger and more efficient. Other renewable sources include geothermal energy, which utilizes heat from within the Earth, and various forms of bioenergy. Each renewable technology has distinctive advantages and limitations related to geographical requirements, intermittency issues, and environmental impacts. The transition to a clean energy system will likely require a diverse mix of these renewable sources, alongside improvements in energy storage and grid management."
  }
];

// Pour compatibilité
export const ReadingFacileIELTSFlashcards = readingFacileIELTSFlashcards;
