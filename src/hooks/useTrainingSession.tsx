
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Flashcard, AnsweredQuestion, NiveauType, DiplomeType, NombreQuestions, TrainingResult } from '@/types';
import { getFlashcardsFromSupabase } from '@/integrations/supabase/client';
import { getFlashcards as getLocalFlashcards } from '@/data/flashcards';
import { useDiplome } from '@/contexts/DiplomeContext';
import { useTextPreloader } from './useTextPreloader';
import { useTrainingHistory } from './useTrainingHistory';
import { supabase, isLocalDev } from '@/integrations/supabase/client';

export const useTrainingSession = () => {
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
  const [showResult, setShowResult] = useState<boolean>(false);
  const [currentResult, setCurrentResult] = useState<TrainingResult | null>(null);
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [pendingAnswer, setPendingAnswer] = useState<{isCorrect: boolean} | null>(null);

  const { toast } = useToast();
  const { diplome } = useDiplome();
  const { loadingText, preloadTextFiles } = useTextPreloader();
  const { trainingHistory, setTrainingHistory, calculateImprovementRate } = useTrainingHistory();

  const startTraining = async () => {
    if (!matiere) {
      toast({
        title: "Sélection requise",
        description: "Veuillez sélectionner une matière avant de commencer",
        variant: "destructive"
      });
      return;
    }

    console.log(`Démarrage de l'entraînement: niveau=${niveau}, matière=${matiere}, diplôme=${diplome}`);
    setLoadingData(true);
    
    let questions: Flashcard[] = [];
    
    // Try to get questions from Supabase first if not in local dev mode
    if (!isLocalDev) {
      try {
        const fetchedQuestions = await getFlashcardsFromSupabase(
          matiere, 
          niveau, 
          nombreQuestions, 
          diplome
        );
        
        if (fetchedQuestions && fetchedQuestions.length > 0) {
          questions = fetchedQuestions;
          console.log(`Questions récupérées depuis Supabase: ${questions.length}`);
        }
      } catch (error) {
        console.error('Error fetching flashcards from Supabase:', error);
      }
    }
    
    // Fallback to local data if no questions were fetched from Supabase
    if (questions.length === 0) {
      questions = getLocalFlashcards(matiere, niveau, nombreQuestions, diplome);
      console.log(`Questions récupérées localement: ${questions.length}`);
    }
    
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour les critères sélectionnés",
        variant: "destructive"
      });
      console.error(`Aucune question trouvée pour: niveau=${niveau}, matière=${matiere}, diplôme=${diplome}`);
      setLoadingData(false);
      return;
    }

    console.log(`Questions récupérées: ${questions.length}`);
    console.log('Première question:', questions[0]);
    
    // Précharger les textes si nécessaire
    await preloadTextFiles(questions);
    
    setCurrentQuestions(questions);
    setAnsweredQuestions([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore(0);
    setTraining(true);
    setExamMode(false);
    setShowResult(false);
    setCurrentResult(null);
    setPendingAnswer(null);
    setLoadingData(false);
  };

  const startExam = async () => {
    setLoadingData(true);
    
    let questions: Flashcard[] = [];
    
    // Try to get questions from Supabase first if not in local dev mode
    if (!isLocalDev) {
      try {
        const fetchedQuestions = await getFlashcardsFromSupabase(
          undefined, 
          undefined, 
          200, 
          diplome
        );
        
        if (fetchedQuestions && fetchedQuestions.length > 0) {
          questions = fetchedQuestions;
          console.log(`Questions d'examen récupérées depuis Supabase: ${questions.length}`);
        }
      } catch (error) {
        console.error('Error fetching exam flashcards from Supabase:', error);
      }
    }
    
    // Fallback to local data if no questions were fetched from Supabase
    if (questions.length === 0) {
      questions = getLocalFlashcards(undefined, undefined, 200, diplome);
      console.log(`Questions d'examen récupérées localement: ${questions.length}`);
    }
    
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour l'examen",
        variant: "destructive"
      });
      setLoadingData(false);
      return;
    }

    // Précharger les textes si nécessaire
    await preloadTextFiles(questions);

    setCurrentQuestions(questions);
    setAnsweredQuestions([]);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore(0);
    setExamMode(true);
    setTraining(false);
    setShowResult(false);
    setCurrentResult(null);
    setPendingAnswer(null);
    setLoadingData(false);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const markCorrect = () => {
    // Garantir que le score ne dépasse pas le nombre de questions
    setScore(prev => Math.min(prev + 1, currentQuestions.length));
    
    if (currentIndex < currentQuestions.length) {
      setAnsweredQuestions(prev => [
        ...prev, 
        { 
          flashcard: currentQuestions[currentIndex],
          isCorrect: true
        }
      ]);
    }
    
    if (currentIndex < currentQuestions.length - 1) {
      nextQuestion();
    } else {
      if (pendingAnswer) {
        setPendingAnswer({ isCorrect: true });
      }
    }
  };

  const markIncorrect = () => {
    // Le score reste inchangé, mais on enregistre la réponse comme incorrecte
    if (currentIndex < currentQuestions.length) {
      setAnsweredQuestions(prev => [
        ...prev, 
        { 
          flashcard: currentQuestions[currentIndex],
          isCorrect: false
        }
      ]);
    }
    
    if (currentIndex < currentQuestions.length - 1) {
      nextQuestion();
    } else {
      if (pendingAnswer) {
        setPendingAnswer({ isCorrect: false });
      }
    }
  };

  const nextQuestion = () => {
    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      finishTraining();
    }
  };

  const finishTraining = async () => {
    const correctAnswers = Math.max(0, answeredQuestions.filter(q => q.isCorrect).length);
    const totalQuestions = currentQuestions.length;
    
    // S'assurer que le pourcentage est entre 0 et 100
    const pourcentage = Math.min(Math.max((correctAnswers / totalQuestions) * 100, 0), 100);
    // S'assurer que la note est entre 0 et 20
    const note = Math.min(Math.max((correctAnswers / totalQuestions) * 20, 0), 20);
    
    const result: TrainingResult = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      matiere: examMode ? 'Tous les sujets' : (matiere || 'Inconnue'),
      niveau: niveau || 'premiere',
      nombreQuestions: totalQuestions,
      score: correctAnswers,
      pourcentage,
      note,
      questions: answeredQuestions,
      diplome: diplome as DiplomeType
    };

    // Save to Supabase if not in local dev mode
    if (!isLocalDev) {
      try {
        const { data: sessionData } = await supabase.auth.getSession();
        if (sessionData.session?.user) {
          // Map to Supabase format
          const resultForSupabase = {
            date: result.date,
            matiere: result.matiere,
            niveau: result.niveau,
            nombre_questions: result.nombreQuestions, // Use the correct field name for Supabase
            score: result.score,
            pourcentage: result.pourcentage,
            note: result.note,
            questions: result.questions,
            diplome: result.diplome,
            user_id: sessionData.session.user.id
          };
          
          await saveTrainingResult(resultForSupabase);
          console.log('Training result saved to Supabase');
        }
      } catch (error) {
        console.error('Error saving training result to Supabase:', error);
      }
    }

    const newHistory = [result, ...trainingHistory].slice(0, 10);
    setTrainingHistory(newHistory);
    
    setCurrentResult(result);
    setShowResult(true);
    
    setPendingAnswer(null);
  };

  return {
    // State
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
    pendingAnswer,
    loadingData,
    loadingText,
    
    // Actions
    startTraining,
    startExam,
    flipCard,
    markCorrect,
    markIncorrect,
    nextQuestion,
    finishTraining,
    calculateImprovementRate,
    
    // Computed
    currentQuestion: currentQuestions[currentIndex]
  };
};

// Helper function for saving training results to Supabase
const saveTrainingResult = async (result: any) => {
  if (isLocalDev) return null;
  
  try {
    const { data, error } = await supabase
      .from('training_results')
      .insert([result])
      .select();
      
    if (error) {
      console.error('Error saving training result:', error);
      return null;
    }
    
    return data?.[0] || null;
  } catch (error) {
    console.error('Error in saveTrainingResult:', error);
    return null;
  }
};
