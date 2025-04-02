
import { Flashcard } from '@/types';

export const integratedReasoningAvanceGMATFlashcards: Flashcard[] = [
  {
    id: 'ir-avance-gmat-1',
    question: "Multi-Source Reasoning: Using the survey data, market trend analysis, and financial projections, determine which product line should be discontinued if the company needs to reduce production costs by 15% while minimizing impact on total revenue.",
    answer: "Product Line C",
    explication: "This complex analysis requires synthesizing information from multiple sources. Calculate each product line's contribution to both costs and revenue, then determine which has the highest cost-to-revenue ratio while accounting for market trends that might affect future performance.",
    matiere: "Integrated Reasoning",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'ir-avance-gmat-2',
    question: "Graphics Interpretation: Based on the stacked area chart showing energy source distribution by country over time, which country experienced the most significant reduction in fossil fuel dependency as a percentage of their total energy mix between 2000 and 2020?",
    answer: "Denmark",
    explication: "This advanced visualization requires calculating percentage changes in composition over time. For each country, determine the fossil fuel percentage in 2000 and 2020, then calculate the reduction. Denmark showed a 32 percentage point decrease from 78% to 46%.",
    matiere: "Integrated Reasoning",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'ir-avance-gmat-3',
    question: "Two-Part Analysis: A pharmaceutical company has two drug candidates. Drug A has a 70% chance of FDA approval and would generate $800 million in profit if approved. Drug B has a 40% chance of approval and would generate $1.6 billion if approved. The company can invest in improvements that would increase the approval probability by 10 percentage points for either drug at a cost of $100 million. What is the expected value of each drug after the optimal investment decision, and which drug should receive the investment?",
    answer: "Drug A: $560 million; Drug B: $640 million; Invest in Drug B",
    explication: "Calculate the expected value (EV) of each drug without investment: EV-A = 0.7 × $800M = $560M; EV-B = 0.4 × $1.6B = $640M. With investment: EV-A' = 0.8 × $800M - $100M = $540M; EV-B' = 0.5 × $1.6B - $100M = $700M. The optimal decision is to invest in Drug B for an EV of $700M.",
    matiere: "Integrated Reasoning",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'ir-avance-gmat-4',
    question: "Table Analysis: Using the data table showing customer segments with various metrics, identify all segments that meet these criteria: Customer Acquisition Cost (CAC) below industry average, Customer Lifetime Value (CLV) to CAC ratio above 3:1, and annual growth rate above 15%.",
    answer: "Millennial Urban Professionals, Enterprise Healthcare, Small Business Tech",
    explication: "This complex filtering requires understanding relationships between multiple metrics. First, identify segments with below-average CAC. Then filter for CLV:CAC > 3:1. Finally, filter for growth > 15%. Only three segments meet all criteria.",
    matiere: "Integrated Reasoning",
    niveau: "avance",
    diplome: "gmat"
  },
  {
    id: 'ir-avance-gmat-5',
    question: "Multi-Source Reasoning: Based on the clinical trial results, patient demographic data, and competitive treatment profiles, what is the optimal dosage regimen for maximizing efficacy while minimizing adverse events for female patients over 65 with comorbid hypertension?",
    answer: "15mg twice daily with food",
    explication: "This complex medical analysis requires synthesizing information from multiple sources. The clinical trial shows different efficacy and side effect profiles by dose and administration. The demographic data reveals risk factors for specific populations. The competitive profiles help establish benchmarks for acceptable efficacy-to-risk ratios.",
    matiere: "Integrated Reasoning",
    niveau: "avance",
    diplome: "gmat"
  }
];
