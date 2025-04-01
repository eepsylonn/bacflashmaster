import { useState, useEffect } from 'react';
import { Flashcard, TrainingResult, NombreQuestions, AnsweredQuestion, NiveauType, DiplomeType } from '@/types';
import { getFlashcards } from '@/data/flashcards';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { useDiplome } from '@/contexts/DiplomeContext';

export const useFlashcards = () => {
  const [matiere, setMatiere] = useState<string | undefined>(undefined);
  const [niveau, setNiveau] = useState<NiveauType | undefined>(undefined);
  const [nombreQuestions, setNombreQuestions] = useState<NombreQuestions>(20);
  const [currentQuestions, setCurrentQuestions] = useState<Flashcard[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = useState<AnsweredQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [training, setTraining] = useState<boolean>(false);
  const [examMode, setExamMode] = useState<boolean>(false);
  const [trainingHistory, setTrainingHistory] = useState<TrainingResult[]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<TrainingResult | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { diplome } = useDiplome();

  // Load training history from localStorage
  useEffect(() => {
    const savedHistory = localStorage.getItem('trainingHistory');
    if (savedHistory) {
      try {
        const parsed = JSON.parse(savedHistory);
        setTrainingHistory(parsed);
      } catch (error) {
        console.error('Error parsing training history:', error);
      }
    }
  }, []);

  // Save training history to localStorage
  useEffect(() => {
    if (trainingHistory.length > 0) {
      localStorage.setItem('trainingHistory', JSON.stringify(trainingHistory));
    }
  }, [trainingHistory]);

  // Start a new training session
  const startTraining = () => {
    if (!matiere) {
      toast({
        title: "Sélection requise",
        description: "Veuillez sélectionner une matière avant de commencer",
        variant: "destructive"
      });
      return;
    }

    // Utiliser 'any' pour contourner l'erreur de type temporairement
    const questions = getFlashcards(matiere, niveau as any, nombreQuestions, diplome);
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour les critères sélectionnés",
        variant: "destructive"
      });
      return;
    }

    setCurrentQuestions(questions);
    setAnsweredQuestions([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore(0);
    setTraining(true);
    setExamMode(false);
    setShowResult(false);
    setCurrentResult(null);
  };

  // Start a new exam
  const startExam = () => {
    // Get 200 random questions from all subjects, with both levels if it's baccalaureat
    const questions = getFlashcards(undefined, undefined, 200, diplome);
    
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour l'examen",
        variant: "destructive"
      });
      return;
    }

    setCurrentQuestions(questions);
    setAnsweredQuestions([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore(0);
    setExamMode(true);
    setTraining(false);
    setShowResult(false);
    setCurrentResult(null);
  };

  // Flip the current flashcard
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Mark the current question as correct
  const markCorrect = () => {
    setScore(score + 1);
    // Ajouter à la liste des questions répondues
    if (currentIndex < currentQuestions.length) {
      setAnsweredQuestions(prev => [
        ...prev, 
        { 
          flashcard: currentQuestions[currentIndex],
          isCorrect: true
        }
      ]);
    }
    nextQuestion();
  };

  // Mark the current question as incorrect
  const markIncorrect = () => {
    // Ajouter à la liste des questions répondues
    if (currentIndex < currentQuestions.length) {
      setAnsweredQuestions(prev => [
        ...prev, 
        { 
          flashcard: currentQuestions[currentIndex],
          isCorrect: false
        }
      ]);
    }
    nextQuestion();
  };

  // Go to the next question
  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      finishTraining();
    }
  };

  // Calculer le taux d'amélioration par rapport à la moyenne passée
  const calculateImprovementRate = (pourcentage: number, matiere: string) => {
    const relevantHistory = trainingHistory
      .filter(item => (item.matiere === matiere || matiere === 'Tous les sujets'))
      .slice(0, 5); // Utilise jusqu'à 5 derniers résultats

    if (relevantHistory.length === 0) return null;

    const averagePercentage = relevantHistory.reduce(
      (acc, item) => acc + item.pourcentage, 0
    ) / relevantHistory.length;

    return ((pourcentage - averagePercentage) / averagePercentage) * 100;
  };

  // Finish the training or exam session
  const finishTraining = () => {
    const pourcentage = (score / currentQuestions.length) * 100;
    const note = (score / currentQuestions.length) * 20;
    
    const result: TrainingResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      matiere: examMode ? 'Tous les sujets' : (matiere || 'Inconnue'),
      niveau: niveau || 'premiere',
      nombreQuestions: currentQuestions.length,
      score,
      pourcentage,
      note,
      questions: answeredQuestions,
      diplome: diplome as DiplomeType
    };

    // Add to history and keep only the last 10 entries
    const newHistory = [result, ...trainingHistory].slice(0, 10);
    setTrainingHistory(newHistory);
    
    // Calculer le taux d'amélioration
    const improvementRate = calculateImprovementRate(pourcentage, result.matiere);
    
    // Définir le résultat actuel et afficher la page de résultats
    setCurrentResult(result);
    setShowResult(true);
  };

  // Continuer après avoir vu le résultat
  const continueAfterResult = () => {
    setShowResult(false);
    setTraining(false);
    setExamMode(false);
    
    // Retourner à la page d'accueil
    navigate('/');
  };

  return {
    matiere,
    setMatiere,
    niveau,
    setNiveau,
    nombreQuestions,
    setNombreQuestions,
    currentQuestions,
    answeredQuestions,
    currentIndex,
    isFlipped,
    score,
    training,
    examMode,
    trainingHistory,
    showResult,
    currentResult,
    startTraining,
    startExam,
    flipCard,
    markCorrect,
    markIncorrect,
    nextQuestion,
    finishTraining,
    continueAfterResult,
    calculateImprovementRate,
    currentQuestion: currentQuestions[currentIndex]
  };
};
