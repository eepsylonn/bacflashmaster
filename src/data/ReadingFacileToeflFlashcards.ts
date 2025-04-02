
import { Flashcard } from "@/types";

// Helper function to generate IDs
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const readingFacileToeflFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "According to the passage about climate change, what is the main cause of global warming?",
    answer: "Increased greenhouse gas emissions from human activities",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Climate change is one of the most pressing issues of our time. Scientists have determined that the main cause of global warming is the increase in greenhouse gases, primarily carbon dioxide, methane, and nitrous oxide, released into the atmosphere through human activities such as burning fossil fuels for energy, industrial processes, and deforestation. These gases trap heat in the Earth's atmosphere, leading to a gradual increase in global temperatures. This warming has already resulted in melting ice caps, rising sea levels, and more frequent extreme weather events. While natural climate variations do occur, the rate and magnitude of current changes far exceed historical patterns."
  },
  {
    id: generateId(),
    question: "What does the author of the passage about renewable energy suggest is the main benefit of solar power?",
    answer: "It's a clean, abundant source of energy that doesn't produce emissions",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Renewable energy sources, particularly solar power, have gained significant attention in recent years as alternatives to fossil fuels. Solar energy offers numerous benefits: it's a clean, abundant source that doesn't produce emissions when generating electricity, helping to combat climate change. The cost of solar panels has decreased dramatically over the past decade, making this technology increasingly accessible. Additionally, solar power systems require minimal maintenance and have long operational lifespans. In many regions, homeowners can even sell excess electricity back to the grid, offsetting installation costs. While initial setup expenses and intermittent generation remain challenges, technological advances continue to improve efficiency and storage capabilities."
  },
  {
    id: generateId(),
    question: "Based on the passage about language acquisition, at what age do children typically begin to produce their first meaningful words?",
    answer: "Around 12 months",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Language acquisition is a fascinating aspect of human development. Children begin their journey to language mastery from birth, initially communicating through cries and coos. By 6 months, most babies start babbling, producing consonant-vowel combinations like 'ba-ba' or 'ma-ma.' Around 12 months, children typically produce their first meaningful words, often naming familiar people or objects in their environment. Vocabulary grows slowly at first, but between 18-24 months, many children experience a 'vocabulary explosion,' rapidly adding new words. By age 3, most children speak in simple sentences and understand basic grammar. This remarkable process occurs naturally as children are exposed to language, demonstrating the human brain's innate capacity for communication."
  },
  {
    id: generateId(),
    question: "According to the passage about coffee production, which step follows the harvesting of coffee cherries?",
    answer: "Processing the cherries to extract the beans",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Coffee production is a complex process that begins with the cultivation of coffee plants, typically grown in subtropical regions along the 'Bean Belt' near the equator. Once the coffee cherries ripen to a bright red color, they are harvested, either by hand-picking (selecting only ripe cherries) or strip-picking (removing all cherries at once). After harvesting, the cherries must be processed quickly to prevent spoilage. Processing involves extracting the beans from the fruit, either through the dry method (sun-drying cherries before removing the dried pulp) or the wet method (removing the pulp before drying). The beans are then milled to remove any remaining layers, sorted by size and quality, and finally exported to roasters worldwide, who transform the green beans into the aromatic coffee we enjoy."
  },
  {
    id: generateId(),
    question: "What is the main point of the passage about online education?",
    answer: "Online education offers flexibility but requires strong self-discipline",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Online education has revolutionized access to learning opportunities worldwide. Students can now attend courses from prestigious institutions regardless of geographic location, often at lower costs than traditional programs. The flexibility to study according to one's own schedule is particularly beneficial for working professionals and those with family responsibilities. However, online learning requires strong self-discipline and time management skills. Without the structure of in-person classes and direct supervision, some students struggle to stay motivated and complete coursework. Additionally, certain subjects requiring hands-on experience may be challenging to teach effectively in virtual environments. Despite these limitations, technological advancements continue to enhance online learning experiences, making education more accessible to diverse populations globally."
  },
  {
    id: generateId(),
    question: "According to the passage about honeybees, what is the primary role of worker bees?",
    answer: "Collecting nectar and pollen and maintaining the hive",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Honeybees live in highly organized colonies with sophisticated social structures. Each colony consists of three types of bees: the queen, drones, and workers. The queen, the only reproductive female, lays up to 2,000 eggs daily and can live for several years. Drones are males whose primary purpose is to mate with new queens. Worker bees, all sterile females, perform numerous tasks essential for colony survival. Young workers care for developing larvae and maintain the hive, while older workers forage for nectar and pollen. Through their pollination activities, honeybees play a crucial ecological role, facilitating the reproduction of many flowering plants and crops. Unfortunately, honeybee populations have declined in recent years due to habitat loss, pesticide use, climate change, and disease, raising concerns about agriculture and ecosystem health."
  },
  {
    id: generateId(),
    question: "What does the author of the passage about exercise suggest is a key benefit of regular physical activity?",
    answer: "Improved cognitive function and mental health",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Regular exercise offers benefits far beyond physical fitness. While the cardiovascular and muscular improvements are well documented, research increasingly shows that physical activity significantly enhances cognitive function and mental health. Exercise increases blood flow to the brain, promoting the growth of new neurons and strengthening neural connections. This translates to improved memory, sharper focus, and better problem-solving abilities. Furthermore, exercise triggers the release of endorphins and other neurotransmitters that reduce symptoms of depression and anxiety while boosting overall mood. Even moderate activities like brisk walking for 30 minutes several times weekly can provide these cognitive and emotional benefits, suggesting that physical activity should be considered essential for both physical and mental wellbeing."
  },
  {
    id: generateId(),
    question: "According to the passage about ocean pollution, what is the most common type of marine debris?",
    answer: "Plastic waste",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Ocean pollution poses a severe threat to marine ecosystems worldwide. Plastic waste constitutes the most common type of marine debris, with an estimated 8 million metric tons entering our oceans annually. Unlike organic materials, plastic does not biodegrade but rather breaks down into smaller microplastics that persist in the environment for hundreds of years. These particles are often ingested by marine animals, causing internal injuries, starvation, and death. Chemical pollutants, including oil spills, agricultural runoff, and industrial waste, further contaminate marine habitats. Additionally, noise pollution from shipping, sonar, and offshore construction disrupts communication and navigation for marine mammals. Addressing these issues requires coordinated global efforts to reduce waste generation, improve waste management systems, and develop sustainable alternatives to harmful products and practices."
  },
  {
    id: generateId(),
    question: "What technology does the passage about urban transportation suggest is most promising for reducing traffic congestion?",
    answer: "Integrated smart transportation systems",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Urban transportation faces growing challenges as city populations expand worldwide. Traffic congestion not only wastes time and fuel but also contributes significantly to air pollution and greenhouse gas emissions. Various strategies have emerged to address these issues, from expanding public transit networks to implementing congestion pricing in city centers. However, integrated smart transportation systems show the most promise for comprehensive improvements. These systems use real-time data and artificial intelligence to optimize traffic flow, predict congestion, and suggest alternate routes. When combined with ride-sharing platforms, bicycle infrastructure, pedestrian-friendly design, and efficient public transportation, smart systems can dramatically reduce personal vehicle usage. Additionally, the emergence of electric and autonomous vehicles may further transform urban mobility, potentially decreasing emissions and improving safety while maximizing road capacity."
  },
  {
    id: generateId(),
    question: "According to the passage about sleep, what happens during deep sleep?",
    answer: "The body repairs tissues and strengthens the immune system",
    matiere: "TOEFL Reading",
    niveau: "facile",
    diplome: "toefl",
    text: "Sleep is a complex biological process essential for physical and mental health. The sleep cycle consists of several stages, each serving different functions. During light sleep, heart rate and body temperature decrease as the body prepares for deeper sleep. In deep sleep (slow-wave sleep), the body repairs tissues, builds bone and muscle, and strengthens the immune system. During REM (rapid eye movement) sleep, the brain processes emotions and consolidates memories while most muscles are temporarily paralyzed. Most adults require 7-9 hours of sleep daily, though individual needs vary. Chronic sleep deprivation has been linked to numerous health problems, including impaired cognitive function, weakened immunity, and increased risk of heart disease, diabetes, and obesity. Despite its importance, many people in modern society regularly sacrifice sleep due to work demands, technological distractions, and lifestyle choices."
  },
];

// For backwards compatibility
export const ReadingFacileToeflFlashcards = readingFacileToeflFlashcards;
