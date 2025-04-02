
import { Flashcard } from '@/types';

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const listeningAvanceToeicFlashcards: Flashcard[] = [
  {
    id: generateId(),
    question: "In a business presentation, you hear: 'Despite initial skepticism regarding the viability of our expansion into emerging markets, the first-quarter results have exceeded projections by approximately 12%, particularly in the Southeast Asian sector where consumer adoption rates have surpassed those in our established territories.' What conclusion can be drawn about the expansion?",
    answer: "It is performing better than expected, especially in Southeast Asia",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a technical discussion, you hear: 'The implementation of the new enterprise resource planning system will necessitate a transitional period during which both platforms will operate concurrently to mitigate disruption to daily operations. We anticipate this parallel phase to last approximately six to eight weeks, after which the legacy system will be decommissioned.' What is the company's approach to implementing the new system?",
    answer: "Running both systems simultaneously for 6-8 weeks before shutting down the old one",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a financial news report, you hear: 'Market analysts are attributing the unexpected decline in the manufacturing index to a combination of supply chain disruptions in key Asian markets and increasing regulatory pressures, rather than the previously speculated decrease in consumer demand, which actually remained relatively stable throughout the quarter.' What was NOT a cause of the manufacturing index decline?",
    answer: "Decreased consumer demand",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a conference call, you hear: 'While the acquisition presents undeniable synergistic opportunities, particularly in terms of market penetration and technological integration, the due diligence process has identified potential regulatory hurdles in three of our target jurisdictions that could significantly delay implementation of our consolidated strategy.' What concern has been identified regarding the acquisition?",
    answer: "Potential regulatory issues in some jurisdictions that could cause delays",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a project update, you hear: 'The development team has requested an extension to the beta testing phase after identifying several critical but non-structural issues that, while not impacting core functionality, could substantially affect user experience if not addressed prior to the commercial release. This would postpone the launch by approximately three weeks but ultimately enhance product reception.' What is being recommended?",
    answer: "Extending the testing phase to fix user experience issues before launching",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a negotiation, you hear: 'While we're amenable to revising the payment structure to incorporate the milestone-based approach you've proposed, we would require corresponding adjustments to the delivery timeline to accommodate our resource allocation constraints, particularly during the third and fourth quarters when our team is typically operating at maximum capacity.' What is the speaker's position?",
    answer: "They agree to the payment structure change but need delivery deadlines adjusted",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a strategy meeting, you hear: 'The data from our pilot program unequivocally demonstrates the superiority of the personalized outreach model over traditional mass marketing approaches, with conversion rates nearly triple those of conventional campaigns and customer acquisition costs reduced by approximately 27% when accounting for all variables.' What does the data show about the personalized approach?",
    answer: "It achieves higher conversion rates and lower acquisition costs",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a logistics briefing, you hear: 'The implementation of the automated inventory management system has yielded substantial improvements in accuracy and efficiency, with error rates declining by 78% compared to manual processes. However, the unanticipated increase in electricity consumption and required maintenance protocols has offset approximately 30% of the projected cost savings.' What unexpected issue arose with the new system?",
    answer: "Higher than expected electricity usage and maintenance requirements",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In a health and safety announcement, you hear: 'Following the comprehensive assessment conducted by external consultants, we'll be instituting mandatory quarterly evacuation drills in addition to our current annual exercises, and implementing a new electronic access control system for restricted areas that will replace the current key card protocol by the end of Q2.' What changes to security are mentioned?",
    answer: "A new electronic access control system replacing key cards",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "In an industry conference, you hear: 'The regulatory landscape is expected to undergo significant transformation over the next 18 months, with particular emphasis on data privacy compliance and environmental sustainability metrics. Companies that proactively adapt their governance frameworks will likely gain competitive advantages through both consumer trust and operational preparedness.' What should companies do according to the speaker?",
    answer: "Proactively update their governance frameworks to address upcoming regulations",
    matiere: "TOEIC Listening",
    niveau: "avance",
    diplome: "toeic"
  },
];
