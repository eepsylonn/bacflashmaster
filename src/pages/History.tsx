
import Header from '@/components/Header';
import HistoryList from '@/components/HistoryList';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const History = () => {
  const { trainingHistory } = useFlashcards();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Historique des entraînements</h1>
            
            <Button asChild>
              <Link to="/entrainement">Nouvel entraînement</Link>
            </Button>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <HistoryList history={trainingHistory} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
