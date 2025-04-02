
import { Flashcard } from '@/types';

export const quantitativeAvanceGMATFlashcards: Flashcard[] = [
  {
    id: 'quant-avance-gmat-1',
    question: "A shopkeeper buys a number of identical items for a total of $800. If he had bought 5 more items for the same total cost, each item would have cost $5 less. How many items did he buy?",
    answer: "40 items",
    explication: "Let's say he bought n items for $800. Then each item costs $800/n. If he had bought (n+5) items, each would cost $800/(n+5). We know that $800/n - $800/(n+5) = $5. Solving this equation: 800/n - 800/(n+5) = 5. Cross-multiply to get 800(n+5) - 800n = 5n(n+5). Simplify to get 4000 = 5n² + 25n, or 5n² + 25n - 4000 = 0. This can be factored to 5(n - 40)(n + 20) = 0, so n = 40 or n = -20. Since n must be positive, n = 40.",
    matiere: "Quantitative",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'quant-avance-gmat-2',
    question: "How many different ways can 8 people be seated in a row if 3 specific people must sit next to each other (in any order)?",
    answer: "720",
    explication: "First, consider the 3 specific people as one unit. This gives us 6 units to arrange (the group of 3 plus the other 5 individuals). These 6 units can be arranged in 6! = 720 ways. Within the group of 3, these people can be arranged in 3! = 6 ways. So, the total number of arrangements is 6! × 3! = 720 × 6 = 4,320.",
    matiere: "Quantitative",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'quant-avance-gmat-3',
    question: "In a sequence, each term after the first two is the sum of the two previous terms. If the 5th term is 29 and the 8th term is 155, what is the 10th term?",
    answer: "418",
    explication: "Let's denote the sequence as a₁, a₂, ..., and we know that aₙ = aₙ₋₁ + aₙ₋₂ for n > 2. We're given that a₅ = 29 and a₈ = 155. Now, a₆ = a₅ + a₄ = 29 + a₄. Also, a₇ = a₆ + a₅ = (29 + a₄) + 29 = 58 + a₄. Next, a₈ = a₇ + a₆ = (58 + a₄) + (29 + a₄) = 87 + 2a₄. Since a₈ = 155, we have 87 + 2a₄ = 155, which gives a₄ = 34. Now we can find a₆ and a₇: a₆ = 29 + 34 = 63, a₇ = 58 + 34 = 92. Finally, a₉ = a₈ + a₇ = 155 + 92 = 247, and a₁₀ = a₉ + a₈ = 247 + 155 = 402.",
    matiere: "Quantitative",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'quant-avance-gmat-4',
    question: "A fair die is rolled 5 times. What is the probability of getting exactly 3 even numbers?",
    answer: "5C3 × (1/2)³ × (1/2)² = 10/32 = 5/16",
    explication: "When rolling a fair die, the probability of getting an even number (2, 4, or 6) is 3/6 = 1/2. The probability of getting an odd number (1, 3, or 5) is also 1/2. Using the binomial probability formula, the probability of getting exactly 3 even numbers in 5 rolls is C(5,3) × (1/2)³ × (1/2)² = 10 × (1/2)⁵ = 10/32 = 5/16.",
    matiere: "Quantitative",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'quant-avance-gmat-5',
    question: "If the sum of the first n positive integers is 78, what is the value of n?",
    answer: "n = 12",
    explication: "The sum of the first n positive integers is given by the formula n(n+1)/2. So we have n(n+1)/2 = 78. Multiplying both sides by 2, we get n(n+1) = 156. This means we need to find two consecutive integers whose product is 156. Testing some values: 11×12 = 132, 12×13 = 156, 13×14 = 182. So n = 12.",
    matiere: "Quantitative",
    niveau: "avance",
    diplome: "gmat"
  }
];
