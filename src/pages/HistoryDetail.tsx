
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Check, X, ArrowLeft, Book } from 'lucide-react';
import { TrainingResult, AnsweredQuestion } from '@/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from 'framer-motion';

const HistoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { trainingHistory } = useFlashcards();
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  
  // Trouver le résultat d'entraînement correspondant
  const result = trainingHistory.find(item => item.id === id);
  
  if (!result) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center">
          <Card className="p-8 text-center">
            <h2 className="text-xl font-medium mb-4">Historique non trouvé</h2>
            <Button onClick={() => navigate('/historique')}>
              Retour à l'historique
            </Button>
          </Card>
        </div>
      </div>
    );
  }

  const renderAnsweredQuestions = () => {
    if (!result.questions || result.questions.length === 0) {
      return (
        <div className="text-center py-8">
          <p className="text-gray-500">Aucun détail disponible pour cet entraînement.</p>
        </div>
      );
    }

    return (
      <div className="space-y-4">
        {result.questions.map((item: AnsweredQuestion, index: number) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`p-4 border rounded-lg cursor-pointer ${
              activeQuestion === index 
                ? 'border-app-blue-medium bg-app-blue-light/5' 
                : 'hover:border-gray-300'
            }`}
            onClick={() => setActiveQuestion(activeQuestion === index ? null : index)}
          >
            <div className="flex items-start gap-3">
              <div className={`flex-shrink-0 p-2 rounded-full ${
                item.isCorrect ? 'bg-green-100' : 'bg-red-100'
              }`}>
                {item.isCorrect 
                  ? <Check className="w-5 h-5 text-green-600" /> 
                  : <X className="w-5 h-5 text-red-600" />
                }
              </div>
              <div className="flex-grow">
                <p className="font-medium text-gray-800">{item.flashcard.question}</p>
                {activeQuestion === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-3 pt-3 border-t border-gray-200"
                  >
                    <p className="text-gray-500 mb-1 text-sm">Réponse :</p>
                    <p className="text-gray-800">{item.flashcard.answer}</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  const correctAnswers = result.questions?.filter(q => q.isCorrect).length || 0;
  const incorrectAnswers = result.questions?.filter(q => !q.isCorrect).length || 0;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/historique')} 
              className="mr-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Retour
            </Button>
            <h1 className="text-2xl font-bold flex-grow">Détails de l'entraînement</h1>
          </div>
          
          <Card className="p-6 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500 mb-1">Matière</p>
                <p className="font-medium text-app-blue-dark">{result.matiere}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500 mb-1">Note</p>
                <p className="font-medium">{result.note.toFixed(2)}/20</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg text-center">
                <p className="text-sm text-gray-500 mb-1">Score</p>
                <p className="font-medium">{result.score}/{result.nombreQuestions}</p>
              </div>
            </div>
            
            <Tabs defaultValue="questions" className="w-full">
              <TabsList className="w-full mb-4">
                <TabsTrigger value="questions" className="flex-1">Questions ({result.nombreQuestions})</TabsTrigger>
                <TabsTrigger value="stats" className="flex-1">Statistiques</TabsTrigger>
              </TabsList>
              
              <TabsContent value="questions" className="space-y-4">
                {renderAnsweredQuestions()}
              </TabsContent>
              
              <TabsContent value="stats">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <div className="flex items-center text-green-600 mb-1">
                        <Check className="w-5 h-5 mr-1" />
                        <span>Bonnes réponses</span>
                      </div>
                      <p className="text-xl font-bold">{correctAnswers} 
                        <span className="text-sm font-normal text-gray-500 ml-1">
                          ({((correctAnswers / result.nombreQuestions) * 100).toFixed(1)}%)
                        </span>
                      </p>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg flex flex-col items-center justify-center">
                      <div className="flex items-center text-red-600 mb-1">
                        <X className="w-5 h-5 mr-1" />
                        <span>Mauvaises réponses</span>
                      </div>
                      <p className="text-xl font-bold">{incorrectAnswers}
                        <span className="text-sm font-normal text-gray-500 ml-1">
                          ({((incorrectAnswers / result.nombreQuestions) * 100).toFixed(1)}%)
                        </span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center text-blue-600 mb-2">
                      <Book className="w-5 h-5 mr-1" />
                      <span className="font-medium">Conseil d'apprentissage</span>
                    </div>
                    <p className="text-gray-700">
                      {result.score < result.nombreQuestions / 2
                        ? "Concentre-toi sur les concepts fondamentaux et prends le temps de comprendre les principes de base avant de passer aux questions plus complexes."
                        : result.score < result.nombreQuestions * 0.8
                        ? "Tu as une bonne compréhension globale, mais revois les erreurs commises pour t'améliorer davantage."
                        : "Excellent travail ! Pour te perfectionner, challenge-toi avec des exercices plus complexes ou approfondis le sujet."}
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default HistoryDetail;
