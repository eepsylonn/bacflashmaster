
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, ArrowRight, CheckCircle, XCircle, Sparkles, Eye } from 'lucide-react';
import { Flashcard } from '@/types';
import Mascot from '@/components/Mascot';
import WriteAnswer from '@/components/WriteAnswer';

interface FlashcardProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext?: () => void;
  showAnswerButtons: boolean;
}

const FlashcardComponent = ({
  flashcard,
  isFlipped,
  onFlip,
  onCorrect,
  onIncorrect,
  onNext,
  showAnswerButtons,
}: FlashcardProps) => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [hasWriteAnswerEnabled, setHasWriteAnswerEnabled] = useState<boolean>(false);
  const [hasSubmittedAnswer, setHasSubmittedAnswer] = useState<boolean>(false);
  const [answerCorrectness, setAnswerCorrectness] = useState<boolean | null>(null);
  const [showConfetti, setShowConfetti] = useState<boolean>(false);
  
  // Vérifier si l'option d'écrire les réponses est activée
  useEffect(() => {
    const writeAnswersEnabled = localStorage.getItem('writeAnswers') === 'true';
    setHasWriteAnswerEnabled(writeAnswersEnabled);
  }, []);
  
  // Récupérer les dimensions de la carte pour l'animation
  useEffect(() => {
    const card = document.querySelector('.flashcard-container');
    if (card) {
      const { width, height } = card.getBoundingClientRect();
      setDimension({ width: width > 0 ? width : 350, height: height > 0 ? height : 250 });
    }
  }, [flashcard]);

  // Réinitialiser l'état quand la flashcard change
  useEffect(() => {
    setHasSubmittedAnswer(false);
    setAnswerCorrectness(null);
    setShowConfetti(false);
  }, [flashcard]);
  
  // Gestionnaire pour la soumission de réponse écrite
  const handleAnswerSubmit = (answer: string, isCorrect: boolean) => {
    setHasSubmittedAnswer(true);
    setAnswerCorrectness(isCorrect);
    
    if (isCorrect) {
      setShowConfetti(true);
    }
    
    // On retourne automatiquement la carte pour voir la réponse
    if (!isFlipped) {
      onFlip();
    }
  };

  // Gestionnaire pour passer à la question suivante
  const handleNextQuestion = () => {
    if (answerCorrectness === true) {
      onCorrect();
    } else if (answerCorrectness === false) {
      onIncorrect();
    } else if (onNext) {
      onNext();
    }
  };

  // Animation variants
  const cardVariants = {
    hidden: (isBack: boolean) => ({
      rotateY: isBack ? -90 : 90,
      opacity: 0,
    }),
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        type: "tween",
        ease: "easeOut"
      }
    },
    exit: (isBack: boolean) => ({
      rotateY: isBack ? 90 : -90,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    })
  };

  // Button animation variants
  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
    tap: { scale: 0.95 }
  };

  // Content animation variants
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <div className="p-4">
      {showConfetti && (
        <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
          <div className="confetti-container">
            {[...Array(50)].map((_, i) => {
              const size = Math.random() * 10 + 5;
              const left = Math.random() * 100;
              const animationDuration = Math.random() * 3 + 2;
              
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor: `hsl(${Math.random() * 360}, 90%, 65%)`,
                    left: `${left}%`,
                    top: -20,
                  }}
                  initial={{ y: -20 }}
                  animate={{
                    y: window.innerHeight + 50,
                    x: Math.sin(Math.random() * 5) * 150,
                    rotate: Math.random() * 360 * 2
                  }}
                  transition={{
                    duration: animationDuration,
                    ease: "easeOut",
                    delay: Math.random() * 0.5
                  }}
                  onAnimationComplete={() => {
                    if (i === 49) {
                      setShowConfetti(false);
                    }
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
      
      <div className="relative mx-auto max-w-2xl perspective-1000">
        <div className="flashcard-container w-full" style={{ minHeight: '550px' }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isFlipped ? 'back' : 'front'}
              custom={isFlipped}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ width: '100%', minHeight: '550px' }}
              className="w-full absolute inset-0"
            >
              <Card
                className={`flashcard-${isFlipped ? 'back' : 'front'} p-6 w-full shadow-lg border-2 ${
                  isFlipped 
                    ? 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/80 dark:to-blue-900/80 dark:border-indigo-600' 
                    : 'border-app-blue-light dark:border-app-blue-medium bg-white dark:bg-gray-800'
                }`}
                style={{ minHeight: '550px' }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        Matière: <span className="font-medium text-app-blue-dark dark:text-blue-300">{flashcard.matiere}</span>
                      </span>
                      {flashcard.niveau && (
                        <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">
                          Niveau: <span className="font-medium text-app-blue-dark dark:text-blue-300">{flashcard.niveau}</span>
                        </span>
                      )}
                    </div>
                    <motion.div
                      animate={isFlipped ? { y: [0, -10, 0] } : {}}
                      transition={{ repeat: isFlipped ? Infinity : 0, duration: 1.5 }}
                    >
                      <Mascot size="sm" animation={isFlipped ? 'bounce' : 'none'} />
                    </motion.div>
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    {isFlipped ? (
                      <div className="space-y-4">
                        <motion.div
                          custom={0}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="relative"
                        >
                          <motion.div 
                            className="absolute -right-2 -top-2 z-10"
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                          >
                            <Sparkles className="h-6 w-6 text-yellow-500" />
                          </motion.div>
                          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 bg-yellow-100 dark:bg-yellow-800/70 p-3 rounded-lg shadow-md relative">
                            Réponse:
                          </h3>
                        </motion.div>
                        
                        <motion.div
                          custom={1}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="text-app-blue-dark dark:text-blue-200 text-lg p-5 bg-white dark:bg-gray-700/90 rounded-lg shadow-md border border-gray-100 dark:border-gray-600"
                        >
                          <p className="font-medium">{flashcard.answer || "Pas de réponse disponible"}</p>
                        </motion.div>
                        
                        {(showAnswerButtons || hasSubmittedAnswer) && (
                          <motion.div
                            custom={2}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                          >
                            {hasSubmittedAnswer ? (
                              <div className="mb-4">
                                <div className={`p-3 rounded-lg ${
                                  answerCorrectness 
                                    ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                                    : 'bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800'
                                }`}>
                                  <div className="flex items-center">
                                    {answerCorrectness ? (
                                      <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                                    ) : (
                                      <XCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                                    )}
                                    <span className={`font-medium ${
                                      answerCorrectness 
                                        ? 'text-green-800 dark:text-green-200' 
                                        : 'text-red-800 dark:text-red-200'
                                    }`}>
                                      {answerCorrectness ? 'Bien joué !' : 'Pas tout à fait...'}
                                    </span>
                                  </div>
                                </div>
                                
                                <motion.div 
                                  className="w-full mt-4"
                                  variants={buttonVariants}
                                  initial="initial"
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                  <Button
                                    onClick={handleNextQuestion}
                                    className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white py-3 text-base"
                                  >
                                    <ArrowRight className="h-5 w-5 mr-2" />
                                    Question suivante
                                  </Button>
                                </motion.div>
                              </div>
                            ) : (
                              <div className="flex space-x-2">
                                <motion.div 
                                  className="flex-1"
                                  variants={buttonVariants}
                                  initial="initial"
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                  <Button
                                    onClick={onCorrect}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white py-3 text-base"
                                  >
                                    <ThumbsUp className="h-5 w-5 mr-2" />
                                    Correct
                                  </Button>
                                </motion.div>
                                <motion.div 
                                  className="flex-1"
                                  variants={buttonVariants}
                                  initial="initial"
                                  whileHover="hover"
                                  whileTap="tap"
                                >
                                  <Button
                                    onClick={onIncorrect}
                                    className="w-full bg-red-500 hover:bg-red-600 text-white py-3 text-base"
                                  >
                                    <ThumbsDown className="h-5 w-5 mr-2" />
                                    Incorrect
                                  </Button>
                                </motion.div>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <motion.h3 
                          custom={0}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2"
                        >
                          Question:
                        </motion.h3>
                        
                        <motion.div 
                          custom={1}
                          variants={contentVariants}
                          initial="hidden"
                          animate="visible"
                          className="p-5 bg-white dark:bg-gray-700/90 rounded-lg shadow-md border border-gray-100 dark:border-gray-600"
                        >
                          <p className="text-app-blue-dark dark:text-blue-200 text-lg">
                            {flashcard.question}
                          </p>
                        </motion.div>
                        
                        {hasWriteAnswerEnabled && !hasSubmittedAnswer && !isFlipped ? (
                          <motion.div 
                            custom={2}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                          >
                            <WriteAnswer 
                              onSubmit={handleAnswerSubmit} 
                              correctAnswer={flashcard.answer || ""}
                            />
                          </motion.div>
                        ) : (!hasWriteAnswerEnabled && !isFlipped) ? (
                          <motion.div
                            custom={2}
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            className="mt-6"
                          >
                            <motion.div
                              variants={buttonVariants}
                              initial="initial"
                              whileHover="hover"
                              whileTap="tap"
                            >
                              <Button
                                onClick={onFlip}
                                className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white py-3 text-base relative overflow-hidden group"
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
                                <Eye className="h-5 w-5 mr-2" />
                                Voir la réponse
                              </Button>
                            </motion.div>
                          </motion.div>
                        ) : null}
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    {(isFlipped && !showAnswerButtons && !hasSubmittedAnswer) && (
                      <motion.div
                        variants={buttonVariants}
                        initial="initial"
                        whileHover="hover"
                        whileTap="tap"
                      >
                        <Button
                          onClick={onFlip}
                          className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white py-3 text-base relative overflow-hidden group"
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
                          Retour à la question
                        </Button>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FlashcardComponent;
