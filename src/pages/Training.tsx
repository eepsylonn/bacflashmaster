import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import TrainingSelector from '@/components/TrainingSelector';
import FlashcardComponentWrapper from '@/components/FlashcardComponentWrapper';
import TrainingProgress from '@/components/TrainingProgress';
import TrainingResultPage from '@/pages/TrainingResult';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

const isOralComprehensionSubject = (matiere: string | undefined): boolean => {
  if (!matiere) return false;
  
  return matiere === 'Compréhension orale' || matiere === 'Listening';
};

const Training = () => {
  const location = useLocation();
  const { toast } = useToast();
  const {
    matiere,
    setMatiere,
    niveau,
    setNiveau,
    nombreQuestions,
    setNombreQuestions,
    currentQuestion,
    currentIndex,
    currentQuestions,
    isFlipped,
    score,
    training,
    startTraining,
    flipCard,
    markCorrect,
    markIncorrect,
    nextQuestion,
    showResult,
    currentResult,
    continueAfterResult,
    calculateImprovementRate,
    finishTraining
  } = useFlashcards();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const matiereParam = searchParams.get('matiere');
    if (matiereParam) {
      if (!isOralComprehensionSubject(matiereParam)) {
        setMatiere(matiereParam);
      } else {
        toast({
          title: "Matière verrouillée",
          description: "La compréhension orale est actuellement verrouillée et n'est pas disponible.",
          duration: 5000,
        });
      }
    }
  }, [location.search, setMatiere, toast]);

  useEffect(() => {
    console.log(`Configuration d'entraînement: matière=${matiere}, niveau=${niveau}, nombreQuestions=${nombreQuestions}`);
  }, [matiere, niveau, nombreQuestions]);

  useEffect(() => {
    if (training && currentQuestions.length > 0 && matiere === 'TOEIC Listening') {
      const preloadCount = 3;
      
      for (let i = currentIndex; i < Math.min(currentIndex + preloadCount, currentQuestions.length); i++) {
        if (currentQuestions[i] && currentQuestions[i].audio) {
          const audio = new Audio();
          audio.src = currentQuestions[i].audio;
          
          audio.load();
          
          console.log(`Préchargement de l'audio pour la question ${i + 1}: ${currentQuestions[i].audio}`);
        }
      }
      
      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        if (navigator.onLine) {
        } else {
          toast({
            title: "Mode hors ligne détecté",
            description: "L'application fonctionne en mode hors ligne. Les fichiers audio préchargés sont disponibles.",
            duration: 5000,
          });
        }
      }
    }
  }, [training, currentIndex, currentQuestions, matiere, toast]);

  const improvementRate = currentResult 
    ? calculateImprovementRate(currentResult.pourcentage, currentResult.matiere)
    : null;

  const isLastQuestion = currentIndex === currentQuestions.length - 1;

  if (showResult && currentResult) {
    return (
      <TrainingResultPage 
        result={currentResult}
        improvementRate={improvementRate}
        onClose={continueAfterResult}
      />
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {!training ? (
              <motion.div 
                className="max-w-md mx-auto"
                key="selector"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <TrainingSelector
                  matiere={matiere}
                  setMatiere={setMatiere}
                  niveau={niveau}
                  setNiveau={setNiveau}
                  nombreQuestions={nombreQuestions}
                  setNombreQuestions={setNombreQuestions}
                  onStartTraining={startTraining}
                />
              </motion.div>
            ) : (
              <motion.div 
                key="training"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-4xl mx-auto"
              >
                <TrainingProgress
                  currentIndex={currentIndex}
                  totalQuestions={currentQuestions.length}
                  score={score}
                />
                
                {currentQuestion && (
                  <FlashcardComponentWrapper
                    flashcard={currentQuestion}
                    isFlipped={isFlipped}
                    onFlip={flipCard}
                    onCorrect={markCorrect}
                    onIncorrect={markIncorrect}
                    onNext={nextQuestion}
                    showAnswerButtons={isFlipped}
                    isLastQuestion={isLastQuestion}
                    finishTraining={finishTraining}
                  />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Training;
