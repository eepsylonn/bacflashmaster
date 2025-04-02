
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
import Mascot from '@/components/Mascot';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { staggerChildren: 0.1, staggerDirection: -1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-app-blue-light/10 to-purple-200/10 rounded-full blur-3xl -z-10 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-yellow-100/10 to-app-blue-light/10 rounded-full blur-3xl -z-10" style={{ animationDelay: '2s' }}></div>
      
      <Header />
      
      <main className="flex-grow py-12 relative z-10">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            {!training ? (
              <motion.div 
                className="max-w-md mx-auto"
                key="selector"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div 
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-16 opacity-70 pointer-events-none"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Mascot size="xl" animation="wave" withGlow />
                </motion.div>
                
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
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariants}>
                  <TrainingProgress
                    currentIndex={currentIndex}
                    totalQuestions={currentQuestions.length}
                    score={score}
                  />
                </motion.div>
                
                <AnimatePresence mode="wait">
                  {currentQuestion && (
                    <motion.div
                      key={currentIndex}
                      variants={itemVariants}
                      transition={{ duration: 0.4 }}
                    >
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
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default Training;
