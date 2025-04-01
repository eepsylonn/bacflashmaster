
import Header from '@/components/Header';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import TrainingResultPage from '@/pages/TrainingResult';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';

const Exam = () => {
  const {
    currentQuestion,
    currentIndex,
    currentQuestions,
    isFlipped,
    score,
    startExam,
    flipCard,
    markCorrect,
    markIncorrect,
    examMode,
    showResult,
    currentResult,
    continueAfterResult,
    calculateImprovementRate
  } = useFlashcards();
  
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
          {!examMode ? (
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="p-8 shadow-lg bg-white rounded-xl border-2 border-app-blue-light">
                  <div className="flex items-center justify-center mb-6">
                    <Mascot size="lg" animation="bounce" />
                    <h2 className="text-2xl font-semibold ml-4 text-app-blue-dark text-center">Examen Baccalauréat</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    Prépare-toi à passer un examen comprenant 200 questions aléatoires 
                    portant sur toutes les matières du programme de première et terminale.
                  </p>
                  
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={startExam} 
                      className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg py-6 rounded-lg"
                    >
                      <motion.span 
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        Commencer l'examen
                      </motion.span>
                    </Button>
                  </motion.div>
                </Card>
              </motion.div>
            </div>
          ) : (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
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
                  showAnswerButtons={isFlipped}
                />
              )}
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Exam;
