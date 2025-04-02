
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
  const [pendingAnswer, setPendingAnswer] = useState<{isCorrect: boolean} | null>(null);

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

  useEffect(() => {
    if (trainingHistory.length > 0) {
      localStorage.setItem('trainingHistory', JSON.stringify(trainingHistory));
    }
  }, [trainingHistory]);

  const startTraining = () => {
    if (!matiere) {
      toast({
        title: "Sélection requise",
        description: "Veuillez sélectionner une matière avant de commencer",
        variant: "destructive"
      });
      return;
    }

    console.log(`Démarrage de l'entraînement: niveau=${niveau}, matière=${matiere}, diplôme=${diplome}`);
    
    // Nous passons explicitement le niveau à getFlashcards pour un filtrage correct
    const questions = getFlashcards(matiere, niveau, nombreQuestions, diplome);
    
    if (questions.length === 0) {
      toast({
        title: "Aucune question disponible",
        description: "Aucune question n'est disponible pour les critères sélectionnés",
        variant: "destructive"
      });
      return;
    }

    console.log(`Questions récupérées: ${questions.length}`);
    
    // Vérification des niveaux des questions récupérées pour le débogage
    if (niveau === 'premiere' || niveau === 'terminale') {
      const niveauCount = questions.filter(q => q.niveau === niveau).length;
      console.log(`Questions de niveau ${niveau}: ${niveauCount} (doit être égal au total: ${questions.length})`);
      
      // Vérification supplémentaire pour s'assurer qu'il n'y a pas de questions du mauvais niveau
      const autreNiveau = niveau === 'premiere' ? 'terminale' : 'premiere';
      const autreNiveauCount = questions.filter(q => q.niveau === autreNiveau).length;
      console.log(`Questions de niveau ${autreNiveau}: ${autreNiveauCount} (doit être 0)`);
      
      if (autreNiveauCount > 0) {
        console.error(`ERREUR: ${autreNiveauCount} questions du niveau ${autreNiveau} trouvées alors que seul le niveau ${niveau} est demandé`);
      }
    } else if (niveau === 'both' || niveau === undefined) {
      const premiereCount = questions.filter(q => q.niveau === 'premiere').length;
      const terminaleCount = questions.filter(q => q.niveau === 'terminale').length;
      console.log(`Avec niveau=${niveau}, mélange des deux niveaux: première=${premiereCount}, terminale=${terminaleCount}`);
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
    setPendingAnswer(null);
  };

  const startExam = () => {
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
    setPendingAnswer(null);
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

  const calculateImprovementRate = (pourcentage: number, matiere: string) => {
    const relevantHistory = trainingHistory
      .filter(item => (item.matiere === matiere || matiere === 'Tous les sujets'))
      .slice(0, 5);

    if (relevantHistory.length === 0) return null;

    const averagePercentage = relevantHistory.reduce(
      (acc, item) => acc + item.pourcentage, 0
    ) / relevantHistory.length;

    return ((pourcentage - averagePercentage) / averagePercentage) * 100;
  };

  const finishTraining = () => {
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

    const newHistory = [result, ...trainingHistory].slice(0, 10);
    setTrainingHistory(newHistory);
    
    const improvementRate = calculateImprovementRate(pourcentage, result.matiere);
    
    setCurrentResult(result);
    setShowResult(true);
    
    setPendingAnswer(null);
  };

  const continueAfterResult = () => {
    setShowResult(false);
    setTraining(false);
    setExamMode(false);
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
    pendingAnswer,
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
