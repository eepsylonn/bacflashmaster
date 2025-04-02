
import { Flashcard } from '@/types';

export const integratedReasoningIntermediaireGMATFlashcards: Flashcard[] = [
  {
    id: 'ir-inter-gmat-1',
    question: "Multi-Source Reasoning: Based on the market research report, financial statements, and competitor analysis, which of the following strategies would most likely increase the company's market share?",
    answer: "Reducing price points by 8% while increasing marketing spend by 15%",
    explication: "This question requires analyzing multiple documents to evaluate strategic options. The market research shows price sensitivity, financial statements reveal margin room for price cuts, and competitor analysis shows marketing effectiveness.",
    matiere: "Integrated Reasoning",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'ir-inter-gmat-2',
    question: "Graphics Interpretation: From the heat map showing customer complaints by product type and region, which region shows the highest regional variation in complaint rates across product types?",
    answer: "Midwest",
    explication: "This question requires analyzing patterns in a complex visualization. Calculate the range or standard deviation of complaint rates across product types for each region to determine which has the highest variation.",
    matiere: "Integrated Reasoning",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'ir-inter-gmat-3',
    question: "Two-Part Analysis: A company is considering two investment options. Option A yields 8% annually compounded quarterly, while Option B yields 8.2% annually compounded annually. For an investment of $10,000 over 3 years, which option provides the greater return and by how much?",
    answer: "Option A; $25.36",
    explication: "For Option A: $10,000(1 + 0.08/4)^12 = $10,000(1.02)^12 = $10,000 × 1.26824 = $12,682.40. For Option B: $10,000(1.082)^3 = $10,000 × 1.26657 = $12,665.70. Option A yields $12,682.40 - $12,665.70 = $16.70 more.",
    matiere: "Integrated Reasoning",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'ir-inter-gmat-4',
    question: "Table Analysis: Using the data table of employee performance metrics, identify all departments where the average employee satisfaction score exceeds 4.0 AND turnover rate is below 12%.",
    answer: "Marketing, Research & Development, Customer Service",
    explication: "This question requires filtering data based on multiple criteria. Sort the table to find departments meeting both conditions: satisfaction > 4.0 and turnover < 12%.",
    matiere: "Integrated Reasoning",
    niveau: "intermediaire",
    diplome: "gmat"
  },
  {
    id: 'ir-inter-gmat-5',
    question: "Multi-Source Reasoning: Based on the production schedule, inventory report, and shipping manifest, what is the minimum number of additional units that must be produced to fulfill all pending orders while maintaining the required safety stock?",
    answer: "3,450 units",
    explication: "Calculate total order quantity from the shipping manifest. Compare with available inventory from the inventory report. Factor in the required safety stock level. Determine how many additional units need to be produced according to the production schedule.",
    matiere: "Integrated Reasoning",
    niveau: "intermediaire",
    diplome: "gmat"
  }
];
