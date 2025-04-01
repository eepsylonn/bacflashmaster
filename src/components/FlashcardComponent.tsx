
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ThumbsUp, ThumbsDown, ArrowRight } from 'lucide-react';
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
  }, [flashcard]);
  
  // Gestionnaire pour la soumission de réponse écrite
  const handleAnswerSubmit = (answer: string, isCorrect: boolean) => {
    setHasSubmittedAnswer(true);
    setAnswerCorrectness(isCorrect);
    
    // On ne retourne pas encore la carte, on laisse l'utilisateur le faire
    if (!isFlipped) {
      onFlip(); // Retourner automatiquement la carte pour voir la réponse
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

  return (
    <div className="p-4">
      <div className="relative mx-auto max-w-2xl perspective-1000">
        <div className="flashcard-container w-full" style={{ minHeight: '320px' }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={isFlipped ? 'back' : 'front'}
              initial={{ rotateY: isFlipped ? -90 : 90, opacity: 0 }}
              animate={{ rotateY: 0, opacity: 1 }}
              exit={{ rotateY: isFlipped ? 90 : -90, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              style={{ width: '100%', minHeight: '320px' }}
              className="w-full"
            >
              <Card
                className={`flashcard-${isFlipped ? 'back' : 'front'} p-6 w-full shadow-lg border-2 ${
                  isFlipped ? 'border-indigo-300 bg-gradient-to-br from-indigo-50 to-blue-50' : 'border-app-blue-light'
                }`}
                style={{ minHeight: '320px' }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <span className="text-xs text-gray-500">
                        Matière: <span className="font-medium text-app-blue-dark">{flashcard.matiere}</span>
                      </span>
                      {flashcard.niveau && (
                        <span className="text-xs text-gray-500 ml-2">
                          Niveau: <span className="font-medium text-app-blue-dark">{flashcard.niveau}</span>
                        </span>
                      )}
                    </div>
                    <Mascot size="sm" animation={isFlipped ? 'bounce' : 'none'} />
                  </div>

                  <div className="flex-grow flex flex-col justify-center">
                    {isFlipped ? (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">Réponse:</h3>
                        <p className="text-app-blue-dark">{flashcard.answer || "Pas de réponse disponible"}</p>
                        
                        {showAnswerButtons && (
                          <div className="mt-4 flex space-x-2">
                            <Button
                              onClick={onCorrect}
                              className="flex-1 bg-green-500 hover:bg-green-600 text-white"
                            >
                              <ThumbsUp className="h-4 w-4 mr-2" />
                              Correct
                            </Button>
                            <Button
                              onClick={onIncorrect}
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                            >
                              <ThumbsDown className="h-4 w-4 mr-2" />
                              Incorrect
                            </Button>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-700 mb-1">Question:</h3>
                        <p className="text-app-blue-dark">{flashcard.question}</p>
                        
                        {hasWriteAnswerEnabled && !hasSubmittedAnswer && !isFlipped && (
                          <div className="mt-4">
                            <WriteAnswer 
                              onSubmit={handleAnswerSubmit} 
                              correctAnswer={flashcard.answer || ""}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="mt-6">
                    {(!isFlipped || !showAnswerButtons) && (
                      <Button
                        onClick={onFlip}
                        className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white"
                        disabled={hasWriteAnswerEnabled && !hasSubmittedAnswer && !isFlipped}
                      >
                        {isFlipped ? 'Retour à la question' : 'Voir la réponse'}
                      </Button>
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
