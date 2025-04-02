
import Header from '@/components/Header';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import TrainingResultPage from '@/pages/TrainingResult';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion, AnimatePresence } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useDiplome } from '@/contexts/DiplomeContext';

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
    nextQuestion,
    examMode,
    showResult,
    currentResult,
    continueAfterResult,
    calculateImprovementRate,
    finishTraining
  } = useFlashcards();
  
  const { diplome } = useDiplome();
  
  // Textes spécifiques selon le diplôme
  const getExamTitle = () => {
    switch(diplome) {
      case 'toeic': return 'Simulation TOEIC';
      case 'tage-mage': return 'Simulation TAGE MAGE';
      case 'baccalaureat':
      default: return 'Examen Baccalauréat';
    }
  };
  
  const getExamDescription = () => {
    switch(diplome) {
      case 'toeic': 
        return 'Teste tes compétences en anglais avec cette simulation TOEIC de 200 questions couvrant la compréhension orale et écrite.';
      case 'tage-mage': 
        return 'Entraîne-toi pour le TAGE MAGE avec 200 questions mêlant calcul, logique et compréhension verbale.';
      case 'baccalaureat':
      default: 
        return 'Prépare-toi à passer un examen comprenant 200 questions aléatoires portant sur toutes les matières du programme de première et terminale.';
    }
  };
  
  // Calculer le taux d'amélioration pour afficher dans la page de résultat
  const improvementRate = currentResult 
    ? calculateImprovementRate(currentResult.pourcentage, currentResult.matiere)
    : null;

  // Déterminer si c'est la dernière question
  const isLastQuestion = currentIndex === currentQuestions.length - 1;

  // Variantes d'animation pour la carte d'examen
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: {
        duration: 0.3
      }
    }
  };

  // Variantes d'animation pour les éléments internes
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

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
            {!examMode ? (
              <motion.div
                key="exam-start"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={cardVariants}
                className="max-w-md mx-auto"
              >
                <Card className="p-8 shadow-lg bg-white rounded-xl border-2 border-app-blue-light overflow-hidden relative">
                  <motion.div 
                    className="absolute -top-20 -right-20 w-40 h-40 bg-app-blue-light/20 rounded-full"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <motion.div 
                    className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-100 rounded-full"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: -360,
                    }}
                    transition={{ 
                      duration: 15, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center mb-6">
                      <motion.div
                        custom={0}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Mascot size="lg" animation="bounce" />
                      </motion.div>
                      <motion.h2 
                        custom={1}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-semibold ml-4 text-app-blue-dark text-center"
                      >
                        {getExamTitle()}
                      </motion.h2>
                    </div>
                    
                    <motion.p 
                      custom={2}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-gray-600 mb-6 text-center"
                    >
                      {getExamDescription()}
                    </motion.p>
                    
                    <motion.div
                      custom={3}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button 
                        onClick={startExam} 
                        className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg py-6 rounded-lg shadow-lg relative overflow-hidden group"
                      >
                        <motion.span 
                          className="absolute inset-0 bg-white/10"
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: [0, 1, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatType: "loop"
                          }}
                          style={{ transformOrigin: 'left' }}
                        />
                        <motion.span 
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          Commencer l'examen
                        </motion.span>
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div 
                key="exam-questions"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
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

export default Exam;
