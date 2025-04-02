
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import StatsChart from '@/components/StatsChart';
import StatsSummary from '@/components/StatsSummary';
import { useFlashcards } from '@/hooks/useFlashcards';
import { useStats } from '@/hooks/useStats';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useAuth } from '@/contexts/AuthContext';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Statistics = () => {
  const { isSubscribed } = useAuth();
  const navigate = useNavigate();
  const { trainingHistory } = useFlashcards();
  const { 
    selectedMatiere, 
    setSelectedMatiere, 
    matieres, 
    averageNote, 
    chartData, 
    improvementRate, 
    weakestSubject 
  } = useStats(trainingHistory);

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
              
              <h2 className="text-2xl font-bold mb-4 text-app-blue-dark">Statistiques Verrouillées</h2>
              <p className="text-gray-600 mb-6">
                Les statistiques détaillées sont disponibles uniquement pour les utilisateurs premium. 
                Abonnez-vous pour accéder à des analyses complètes de vos performances.
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              className="mr-2"
            >
              <Mascot size="sm" />
            </motion.div>
            <h1 className="text-3xl font-bold">Statistiques</h1>
          </div>
          
          {trainingHistory.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <Mascot size="lg" animation="pulse" className="mx-auto mb-4" />
              <h2 className="text-xl font-medium mb-2">Pas encore de données</h2>
              <p className="text-gray-500 mb-6">Commence à t'entraîner pour voir apparaître tes statistiques.</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <button 
                  onClick={() => window.location.href = '/entrainement'}
                  className="bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
                >
                  Commencer l'entraînement
                </button>
              </motion.div>
            </div>
          ) : (
            <div className="space-y-8">
              <StatsSummary 
                averageNote={averageNote} 
                improvementRate={improvementRate} 
                weakestSubject={weakestSubject} 
              />
              
              <StatsChart 
                data={chartData} 
                matieres={matieres} 
                selectedMatiere={selectedMatiere} 
                onMatiereChange={setSelectedMatiere} 
              />
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-sm border p-6"
              >
                <div className="flex items-center mb-4">
                  <Mascot size="sm" animation="pulse" className="mr-2" />
                  <h2 className="text-xl font-semibold">Conseils pour progresser</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h3 className="font-medium mb-1">Constance</h3>
                    <p className="text-gray-700">S'entraîner régulièrement, même pour de courtes sessions, est plus efficace qu'un bachotage intensif à la dernière minute.</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h3 className="font-medium mb-1">Méthode active</h3>
                    <p className="text-gray-700">Essaye de répondre aux questions sans regarder la réponse, puis vérifie. L'effort de rappel renforce la mémorisation.</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-medium mb-1">Variété</h3>
                    <p className="text-gray-700">Alterne les matières et les niveaux pour maintenir ton attention et créer des connexions entre les connaissances.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Statistics;
