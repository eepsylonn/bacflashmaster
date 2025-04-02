
import { useState, useEffect, useCallback, useMemo } from 'react';
import { Flashcard, TrainingResult } from '@/types';
import { useLocalStorage } from './useLocalStorage';
import { 
  filterFlashcards, 
  getStandardizedMatiere, 
  getStandardizedNiveau,
  getStandardizedDiplome
} from '@/utils/flashcardUtils';
import { shuffleArray } from '@/utils/arrayUtils';
import { allFlashcards } from '@/data/flashcards';
import { v4 as uuidv4 } from 'uuid';

export function useFlashcards() {
  // States for configuration
  const [matiere, setMatiere] = useState<string | undefined>(undefined);
  const [niveau, setNiveau] = useState<string | undefined>(undefined);
  const [nombreQuestions, setNombreQuestions] = useState<number>(10);
  
  // States for training
  const [training, setTraining] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [currentResult, setCurrentResult] = useState<TrainingResult | null>(null);
  
  // Local storage for past results
  const [pastResults, setPastResults] = useLocalStorage<TrainingResult[]>('pastResults', []);

  // Get the current question
  const currentQuestion = useMemo(() => {
    if (currentQuestions.length > 0 && currentIndex < currentQuestions.length) {
      return currentQuestions[currentIndex];
    }
    return null;
  }, [currentQuestions, currentIndex]);

  // Start training session
  const startTraining = useCallback(() => {
    if (!matiere || !niveau) return;
    
    // Filter flashcards by subject and level
    const standardizedMatiere = getStandardizedMatiere(matiere);
    const standardizedNiveau = getStandardizedNiveau(niveau);
    
    let filteredCards = allFlashcards.filter(card => 
      getStandardizedMatiere(card.matiere) === standardizedMatiere && 
      getStandardizedNiveau(card.niveau) === standardizedNiveau
    );
    
    // If no cards, try without standardization as fallback
    if (filteredCards.length === 0) {
      filteredCards = allFlashcards.filter(card => 
        card.matiere === matiere && 
        card.niveau === niveau
      );
    }
    
    // Shuffle and limit to requested number
    const shuffled = shuffleArray([...filteredCards]);
    const selected = shuffled.slice(0, Math.min(nombreQuestions, shuffled.length));
    
    setCurrentQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsFlipped(false);
    setTraining(true);
    setShowResult(false);
    setCurrentResult(null);
    
    console.log(`Started training with ${selected.length} questions for ${matiere} (${niveau})`);
  }, [matiere, niveau, nombreQuestions]);

  // Flip the current flashcard
  const flipCard = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  // Mark the current answer as correct
  const markCorrect = useCallback(() => {
    setScore(prev => prev + 1);
    
    if (currentIndex === currentQuestions.length - 1) {
      // Last question, show results
      const newResult: TrainingResult = {
        id: uuidv4(),
        date: new Date(),
        matiere: matiere || '',
        niveau: niveau || '',
        diplome: currentQuestion?.diplome || '',
        totalQuestions: currentQuestions.length,
        correctAnswers: score + 1,
        pourcentage: ((score + 1) / currentQuestions.length) * 100,
        nombreQuestions: currentQuestions.length,
        score: score + 1,
        note: ((score + 1) / currentQuestions.length) * 20,
        questions: currentQuestions
      };
      
      setCurrentResult(newResult);
      setPastResults(prev => [...prev, newResult]);
      setShowResult(true);
    } else {
      // Move to next question
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, currentQuestions.length, score, currentQuestion, matiere, niveau, setPastResults, currentQuestions]);

  // Mark the current answer as incorrect
  const markIncorrect = useCallback(() => {
    if (currentIndex === currentQuestions.length - 1) {
      // Last question, show results
      const newResult: TrainingResult = {
        id: uuidv4(),
        date: new Date(),
        matiere: matiere || '',
        niveau: niveau || '',
        diplome: currentQuestion?.diplome || '',
        totalQuestions: currentQuestions.length,
        correctAnswers: score,
        pourcentage: (score / currentQuestions.length) * 100,
        nombreQuestions: currentQuestions.length,
        score: score,
        note: (score / currentQuestions.length) * 20,
        questions: currentQuestions
      };
      
      setCurrentResult(newResult);
      setPastResults(prev => [...prev, newResult]);
      setShowResult(true);
    } else {
      // Move to next question
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  }, [currentIndex, currentQuestions.length, score, currentQuestion, matiere, niveau, setPastResults, currentQuestions]);

  // Move to the next question without marking
  const nextQuestion = useCallback(() => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    } else {
      // Last question, show results
      const newResult: TrainingResult = {
        id: uuidv4(),
        date: new Date(),
        matiere: matiere || '',
        niveau: niveau || '',
        diplome: currentQuestion?.diplome || '',
        totalQuestions: currentQuestions.length,
        correctAnswers: score,
        pourcentage: (score / currentQuestions.length) * 100,
        nombreQuestions: currentQuestions.length,
        score: score,
        note: (score / currentQuestions.length) * 20,
        questions: currentQuestions
      };
      
      setCurrentResult(newResult);
      setPastResults(prev => [...prev, newResult]);
      setShowResult(true);
    }
  }, [currentIndex, currentQuestions.length, score, currentQuestion, matiere, niveau, setPastResults, currentQuestions]);

  // Continue after viewing results
  const continueAfterResult = useCallback(() => {
    setShowResult(false);
    setTraining(false);
  }, []);

  // Finish training early
  const finishTraining = useCallback(() => {
    if (currentQuestions.length > 0) {
      const newResult: TrainingResult = {
        id: uuidv4(),
        date: new Date(),
        matiere: matiere || '',
        niveau: niveau || '',
        diplome: currentQuestion?.diplome || '',
        totalQuestions: currentIndex + 1, // Only count questions seen
        correctAnswers: score,
        pourcentage: (score / (currentIndex + 1)) * 100,
        nombreQuestions: currentIndex + 1,
        score: score,
        note: (score / (currentIndex + 1)) * 20,
        questions: currentQuestions.slice(0, currentIndex + 1)
      };
      
      setCurrentResult(newResult);
      setPastResults(prev => [...prev, newResult]);
      setShowResult(true);
    } else {
      setTraining(false);
    }
  }, [currentQuestions, currentIndex, score, currentQuestion, matiere, niveau, setPastResults]);

  // Calculate improvement rate compared to past results
  const calculateImprovementRate = useCallback((currentPercentage: number, currentMatiere: string): number | null => {
    const relevantResults = pastResults
      .filter(result => 
        result.matiere === currentMatiere && 
        result.date.getTime() < (currentResult?.date.getTime() || Date.now())
      )
      .sort((a, b) => b.date.getTime() - a.date.getTime());
    
    if (relevantResults.length === 0) return null;
    
    // Get the average of the last 3 results or fewer if not enough
    const recentResults = relevantResults.slice(0, 3);
    const averagePercentage = recentResults.reduce((sum, result) => sum + result.pourcentage, 0) / recentResults.length;
    
    return currentPercentage - averagePercentage;
  }, [pastResults, currentResult]);

  // For backward compatibility with pages that expect trainingHistory
  const trainingHistory = pastResults;

  // Add exam mode compatibility functions
  const startExam = startTraining;
  const examMode = training;

  return {
    // Configuration
    matiere,
    setMatiere,
    niveau, 
    setNiveau,
    nombreQuestions,
    setNombreQuestions,
    
    // Training state
    training,
    currentQuestion,
    currentIndex,
    currentQuestions,
    isFlipped,
    score,
    showResult,
    currentResult,
    
    // Actions
    startTraining,
    flipCard,
    markCorrect,
    markIncorrect,
    nextQuestion,
    continueAfterResult,
    finishTraining,
    
    // Data
    allFlashcards,
    pastResults,
    
    // Utilities
    calculateImprovementRate,
    
    // Backward compatibility
    trainingHistory,
    startExam,
    examMode
  };
}
