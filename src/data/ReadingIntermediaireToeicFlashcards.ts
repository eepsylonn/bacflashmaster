import { Flashcard } from "@/types";

// Fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

export const ReadingIntermediaireToeicFlashcards: Flashcard[] = [
  {
    id: "rm28djsm92ns03js",
    question: "According to the annual report, what was the revenue increase percentage in fiscal year 2023?",
    answer: "15%",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "fj38dj10smskwod",
    question: "How many new employees joined the company in 2023?",
    answer: "230",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "d93mc74ksplq12",
    question: "Which of the company's products experienced exceptional growth with a 28% increase in sales?",
    answer: "InnoTech Pro",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "vmc2i3kal2903dk",
    question: "What percentage of global sales did North America represent?",
    answer: "45%",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "lpo3x90sk3mdn",
    question: "How much did the company invest in research and development?",
    answer: "$150 million",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: "3k9kdm30dk2ls",
    question: "How many subscriptions did the CloudConnect platform achieve in its first six months?",
    answer: "50,000",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic",
    text: "/texts/toeic/intermediaire/rapport-annuel.txt"
  },
  {
    id: generateId(),
    question: "Read the memo: 'Due to system maintenance, the network will be unavailable from 11 PM Friday until 2 AM Saturday. Please save all work before leaving on Friday.' What should employees do before the weekend?",
    answer: "Save their work before leaving the office on Friday",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the advertisement: 'Early bird special: Book your conference tickets before June 30 and receive a 15% discount. Regular prices apply after this date.' When is the deadline for discounted tickets?",
    answer: "June 30",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the email: 'The quarterly sales report shows a 12% increase compared to last year, but we're still 5% below our target for this fiscal year.' How is the company performing compared to its targets?",
    answer: "Below expectations despite improvement",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the notice: 'The staff parking garage will be closed for repairs from May 10-14. Alternative parking is available at the public garage on Pine Street at a reduced daily rate of $5 with employee ID.' Where should employees park during the repairs?",
    answer: "At the public garage on Pine Street",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the policy: 'Reimbursement requests must be submitted within 30 days of purchase and require original receipts as well as manager approval. Requests submitted after this period will not be processed.' What is NOT required for reimbursement?",
    answer: "A digital copy of the receipt",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the newsletter excerpt: 'The annual company picnic, originally scheduled for July 15, has been postponed until August 5 due to venue availability issues. The location and time remain unchanged.' What has changed about the company picnic?",
    answer: "Only the date has changed",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the job posting: 'Seeking a Marketing Coordinator with minimum 3 years of experience in digital marketing. Candidates must be proficient in social media management and content creation. Knowledge of graphic design software is preferred but not required.' What is a mandatory qualification for this position?",
    answer: "Experience in digital marketing",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the warranty: 'This product is guaranteed for 2 years from the date of purchase against manufacturing defects. The warranty does not cover damage resulting from improper use, accidents, or natural wear and tear.' What is covered by this warranty?",
    answer: "Manufacturing defects only",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the announcement: 'The company will transition to a new email system next month. All employees must complete the online training module by September 15. Failure to complete the training may result in temporary loss of email access when the new system launches on October 1.' What happens if an employee doesn't complete the training?",
    answer: "They may lose email access temporarily",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
  {
    id: generateId(),
    question: "Read the report excerpt: 'While customer satisfaction ratings improved by 7% this quarter, response times for customer service inquiries increased from an average of 12 hours to 18 hours.' What aspect of customer service has worsened?",
    answer: "Response times",
    matiere: "TOEIC Reading",
    niveau: "intermediaire",
    diplome: "toeic"
  },
];
