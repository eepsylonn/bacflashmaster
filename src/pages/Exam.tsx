
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import TrainingResultPage from '@/pages/TrainingResult';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useDiplome } from '@/contexts/DiplomeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Lock } from 'lucide-react';

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
  const { isSubscribed } = useAuth();
  const navigate = useNavigate();
  
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

  // Si l'utilisateur n'est pas abonné, afficher une page de blocage
  if (!isSubscribed) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
        <Header />
        
        <main className="flex-grow flex items-center justify-center">
          <div className="max-w-md w-full p-8 bg-white rounded-xl shadow-lg text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <Lock className="h-16 w-16 text-app-blue-dark" />
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-app-blue-dark">Mode Examen Verrouillé</h2>
              <p className="text-gray-600 mb-6">
                Le mode examen est disponible uniquement pour les utilisateurs premium. 
                Abonnez-vous pour accéder à des simulations d'examens complètes.
              </p>
              
              <div className="flex justify-center">
                <Button 
                  onClick={() => navigate('/subscription')}
                  className="bg-gradient-to-r from-app-blue-medium to-app-blue-dark"
                >
                  Voir les offres d'abonnement
                </Button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    );
  }

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
                    <h2 className="text-2xl font-semibold ml-4 text-app-blue-dark text-center">{getExamTitle()}</h2>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">
                    {getExamDescription()}
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
                  onNext={nextQuestion}
                  showAnswerButtons={isFlipped}
                  isLastQuestion={isLastQuestion}
                  finishTraining={finishTraining}
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
