
import { Flashcard } from '@/types';

export const quantitativeIntermediaireGMATFlashcards: Flashcard[] = [
  {
    id: 'quant-inter-gmat-1',
    question: "The average (arithmetic mean) of 5 consecutive integers is m. In terms of m, what is the largest of these integers?",
    answer: "m + 2",
    explication: "If we have 5 consecutive integers, we can represent them as (n-2), (n-1), n, (n+1), and (n+2). The average is (n-2 + n-1 + n + n+1 + n+2)/5 = (5n)/5 = n. Since the average is m, we have n = m. The largest integer is (n+2) = (m+2).",
    matiere: "Quantitative",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'quant-inter-gmat-2',
    question: "A circle has its center at (3, 4) and passes through the point (0, 0). What is the area of the circle?",
    answer: "25π",
    explication: "The distance between the center (3, 4) and the point (0, 0) is the radius of the circle. Using the distance formula: r = √[(3-0)² + (4-0)²] = √[9 + 16] = √25 = 5. The area of a circle is π × r² = π × 5² = 25π.",
    matiere: "Quantitative",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'quant-inter-gmat-3',
    question: "If a, b, and c are consecutive positive integers such that a < b < c, and a × b × c = 120, what is the value of a + b + c?",
    answer: "14",
    explication: "Since a, b, and c are consecutive positive integers, we can represent them as n, n+1, and n+2 for some positive integer n. Thus, n × (n+1) × (n+2) = 120. This gives n³ + 3n² + 2n = 120. Trying values, we get n = 4. So a = 4, b = 5, c = 6, and a + b + c = 15.",
    matiere: "Quantitative",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'quant-inter-gmat-4',
    question: "Company X's profit increased by 25% in 2019 compared to 2018. In 2020, the profit decreased by 20% compared to 2019. The profit in 2020 was what percent of the profit in 2018?",
    answer: "100%",
    explication: "Let the profit in 2018 be $P. In 2019, it was $P × 1.25 = $1.25P. In 2020, it was $1.25P × 0.8 = $P. So the profit in 2020 was 100% of the profit in 2018.",
    matiere: "Quantitative",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'quant-inter-gmat-5',
    question: "If x² + y² = 41 and xy = 20, what is the value of (x - y)²?",
    answer: "1",
    explication: "We can use the formula (x - y)² = x² + y² - 2xy. Given that x² + y² = 41, and xy = 20, we get (x - y)² = 41 - 2(20) = 41 - 40 = 1.",
    matiere: "Quantitative",
    niveau: "intermediaire",
    diplome: "gmat"
  }
];
