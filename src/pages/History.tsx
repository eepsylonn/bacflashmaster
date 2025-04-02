
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import HistoryList from '@/components/HistoryList';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Mascot from '@/components/Mascot';

const History = () => {
  const { trainingHistory } = useFlashcards();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<'all' | 'entrainement' | 'examen'>('all');
  
  // Filtrer l'historique selon le type sélectionné
  const filteredHistory = trainingHistory.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'entrainement') return item.matiere !== 'Tous les sujets';
    if (filter === 'examen') return item.matiere === 'Tous les sujets';
    return true;
  });
  
  const handleItemClick = (id: string) => {
    navigate(`/historique/${id}`);
  };
  
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
            <h1 className="text-3xl font-bold">Historique des entraînements</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <Tabs defaultValue="all" value={filter} onValueChange={(v) => setFilter(v as any)}>
              <TabsList className="w-full mb-6 p-1 rounded-lg overflow-hidden grid grid-cols-3">
                <TabsTrigger value="all">
                  Tout
                </TabsTrigger>
                <TabsTrigger value="entrainement">
                  Entraînements
                </TabsTrigger>
                <TabsTrigger value="examen">
                  Examens
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HistoryList history={filteredHistory} onItemClick={handleItemClick} />
                </motion.div>
              </TabsContent>
              
              <TabsContent value="entrainement" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HistoryList history={filteredHistory} onItemClick={handleItemClick} />
                </motion.div>
              </TabsContent>
              
              <TabsContent value="examen" className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <HistoryList history={filteredHistory} onItemClick={handleItemClick} />
                </motion.div>
              </TabsContent>
            </Tabs>
            
            {trainingHistory.length === 0 && (
              <div className="text-center py-12">
                <Mascot size="lg" animation="pulse" className="mx-auto mb-4" />
                <h3 className="text-xl font-medium text-gray-800 mb-2">Pas encore d'historique</h3>
                <p className="text-gray-500 mb-6">
                  Commence à t'entraîner pour voir apparaître tes résultats ici
                </p>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <button 
                    onClick={() => navigate('/entrainement')}
                    className="bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
                  >
                    Commencer l'entraînement
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;
