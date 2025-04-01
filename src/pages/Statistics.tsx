
import Header from '@/components/Header';
import StatsChart from '@/components/StatsChart';
import StatsSummary from '@/components/StatsSummary';
import { useFlashcards } from '@/hooks/useFlashcards';
import { useStats } from '@/hooks/useStats';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Statistics = () => {
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
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Statistiques</h1>
            
            <Button asChild>
              <Link to="/entrainement">Nouvel entraînement</Link>
            </Button>
          </div>
          
          {trainingHistory.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm border p-8 text-center">
              <h2 className="text-xl font-medium mb-2">Pas encore de données</h2>
              <p className="text-gray-500 mb-6">Commencez à vous entraîner pour voir apparaître vos statistiques.</p>
              <Button asChild>
                <Link to="/entrainement">Commencer l'entraînement</Link>
              </Button>
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
              
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-xl font-semibold mb-4">Conseils pour progresser</h2>
                
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
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Statistics;
