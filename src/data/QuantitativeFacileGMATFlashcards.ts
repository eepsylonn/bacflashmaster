
import { Flashcard } from '@/types';

export const quantitativeFacileGMATFlashcards: Flashcard[] = [
  {
    id: 'quant-facile-gmat-1',
    question: "If x² + y² = 25 and x + y = 7, what is the value of xy?",
    answer: "xy = 12",
    explication: "We can use the formula (x + y)² = x² + 2xy + y². Given that x² + y² = 25 and (x + y)² = 7² = 49, we get 49 = 25 + 2xy, which simplifies to 2xy = 24, therefore xy = 12.",
    matiere: "Quantitative",
    niveau: "facile",
    diplome: "gmat"
  },
  {
    id: 'quant-facile-gmat-2',
    question: "A car travels at an average speed of 60 miles per hour. How many miles does it travel in 2 hours and 30 minutes?",
    answer: "150 miles",
    explication: "To find the distance, multiply the speed by the time. Time = 2.5 hours, speed = 60 mph. Distance = 60 × 2.5 = 150 miles.",
    matiere: "Quantitative",
    niveau: "facile",
    diplome: "gmat"
  },
  {
    id: 'quant-facile-gmat-3',
    question: "If 3x + 4y = 10 and 2x - y = 5, what is the value of x?",
    answer: "x = 2",
    explication: "From the second equation, we get y = 2x - 5. Substituting this into the first equation: 3x + 4(2x - 5) = 10. This gives 3x + 8x - 20 = 10, so 11x = 30, thus x = 30/11.",
    matiere: "Quantitative",
    niveau: "facile",
    diplome: "gmat"
  },
  {
    id: 'quant-facile-gmat-4',
    question: "What is the value of (2³)² × 2⁴?",
    answer: "2¹⁰",
    explication: "First, (2³)² = 2^(3×2) = 2^6. Then, 2^6 × 2^4 = 2^(6+4) = 2^10.",
    matiere: "Quantitative",
    niveau: "facile",
    diplome: "gmat"
  },
  {
    id: 'quant-facile-gmat-5',
    question: "If the price of a shirt increased by 20% and then decreased by 10%, what was the net percentage change in the price?",
    answer: "8% increase",
    explication: "Let's say the original price is $100. After a 20% increase, it becomes $120. After a 10% decrease from $120, it becomes $120 × 0.9 = $108. The net change is from $100 to $108, which is an 8% increase.",
    matiere: "Quantitative",
    niveau: "facile",
    diplome: "gmat"
  }
];
