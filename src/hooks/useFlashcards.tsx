import { useState, useEffect } from 'react';
import { Flashcard, TrainingResult, NombreQuestions } from '@/types';
import { getFlashcards } from '@/data/flashcards';
import { useToast } from '@/components/ui/use-toast';

export const useFlashcards = () => {
  const [matiere, setMatiere] = useState<string | undefined>(undefined);
  const [niveau, setNiveau] = useState<'premiere' | 'terminale' | undefined>(undefined);
  const [nombreQuestions, setNombreQuestions] = useState<NombreQuestions>(20);
  const [currentQuestions, setCurrentQuestions] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [training, setTraining] = useState<boolean>(false);
  const [trainingHistory, setTrainingHistory] = useState<TrainingResult[]>([]);
  const { toast } = useToast();

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

    const questions = getFlashcards(matiere, niveau, nombreQuestions);
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour les critères sélectionnés",
        variant: "destructive"
      });
      return;
    }

    setCurrentQuestions(questions);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore(0);
    setTraining(true);
  };

  // Flip the current flashcard
  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  // Mark the current question as correct
  const markCorrect = () => {
    setScore(score + 1);
    nextQuestion();
  };

  // Mark the current question as incorrect
  const markIncorrect = () => {
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

  // Finish the training session
  const finishTraining = () => {
    const pourcentage = (score / currentQuestions.length) * 100;
    const note = (score / currentQuestions.length) * 20;
    
    const result: TrainingResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      matiere: matiere || 'Inconnue',
      niveau: niveau || 'premiere',
      nombreQuestions: currentQuestions.length,
      score,
      pourcentage,
      note
    };

    // Add to history and keep only the last 10 entries
    const newHistory = [result, ...trainingHistory].slice(0, 10);
    setTrainingHistory(newHistory);
    
    setTraining(false);
    
    toast({
      title: "Entraînement terminé",
      description: `Votre note est de ${note.toFixed(2)}/20`,
    });
  };

  return {
    matiere,
    setMatiere,
    niveau,
    setNiveau,
    nombreQuestions,
    setNombreQuestions,
    currentQuestions,
    currentIndex,
    isFlipped,
    score,
    training,
    trainingHistory,
    startTraining,
    flipCard,
    markCorrect,
    markIncorrect,
    nextQuestion,
    finishTraining,
    currentQuestion: currentQuestions[currentIndex]
  };
};
