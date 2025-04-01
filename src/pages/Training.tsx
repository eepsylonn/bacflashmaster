
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import TrainingSelector from '@/components/TrainingSelector';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import TrainingResultPage from '@/pages/TrainingResult';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion, AnimatePresence } from 'framer-motion';

const Training = () => {
  const location = useLocation();
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
    calculateImprovementRate
  } = useFlashcards();

  // Parse URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const matiereParam = searchParams.get('matiere');
    if (matiereParam) {
      setMatiere(matiereParam);
    }
  }, [location.search, setMatiere]);

  // Calculer le taux d'amélioration pour afficher dans la page de résultat
  const improvementRate = currentResult 
    ? calculateImprovementRate(currentResult.pourcentage, currentResult.matiere)
    : null;

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
                  <FlashcardComponent
                    flashcard={currentQuestion}
                    isFlipped={isFlipped}
                    onFlip={flipCard}
                    onCorrect={markCorrect}
                    onIncorrect={markIncorrect}
                    onNext={nextQuestion}
                    showAnswerButtons={isFlipped}
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
