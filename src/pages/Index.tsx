
import { useEffect } from 'react';
import Header from '@/components/Header';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { BookOpen, Award, History, BarChart3, Settings } from 'lucide-react';
import DiplomeSelector from '@/components/DiplomeSelector';
import { useDiplome } from '@/contexts/DiplomeContext';
import Mascot from '@/components/Mascot';

const Index = () => {
  const { diplome, setDiplome } = useDiplome();
  
  // Mise à jour des styles de la page pour ajouter une police personnalisée
  useEffect(() => {
    document.body.classList.add('font-quicksand');
    
    // Ajout de la police Google Fonts
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Quicksand:wght@500;600;700&display=swap';
    document.head.appendChild(linkElement);
    
    return () => {
      document.head.removeChild(linkElement);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto">
          <DiplomeSelector onSelectDiplome={(selectedDiplome) => setDiplome(selectedDiplome as any)} />
          
          <div className="text-center mb-12 mt-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-3"
            >
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-app-blue-dark to-indigo-600">
                Révise ton {diplome === 'baccalaureat' ? 'Bac' : diplome === 'toeic' ? 'TOEIC' : diplome === 'tage-mage' ? 'TAGE MAGE' : 'examen'}
              </h1>
            </motion.div>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {diplome === 'baccalaureat' 
                ? 'Entraîne-toi avec des centaines de questions pour réussir ton Baccalauréat !'
                : diplome === 'toeic'
                ? 'Prépare-toi au Test d\'anglais avec notre collection de questions ciblées !'
                : diplome === 'tage-mage'
                ? 'Maîtrise les tests d\'aptitude aux études de gestion pour intégrer les meilleures écoles !'
                : 'Choisis ton diplôme et commence à t\'entraîner !'}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/entrainement" className="block">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-app-blue-light h-full"
              >
                <div className="bg-gradient-to-r from-app-blue-medium to-app-blue-dark p-4 text-white flex items-center">
                  <BookOpen className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Entraînement</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Entraîne-toi sur les matières de ton choix avec des cartes mémoire interactives.
                  </p>
                  <Button className="w-full bg-app-blue-medium hover:bg-app-blue-dark text-white">
                    Commencer
                  </Button>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/examen" className="block">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-indigo-400 h-full"
              >
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white flex items-center">
                  <Award className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Examen</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Passe un examen complet de 200 questions mélangeant toutes les matières.
                  </p>
                  <Button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white">
                    Commencer
                  </Button>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/historique" className="block">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-teal-300 h-full"
              >
                <div className="bg-gradient-to-r from-teal-400 to-emerald-500 p-4 text-white flex items-center">
                  <History className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Historique</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Consulte tes résultats précédents et analyse tes performances.
                  </p>
                  <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white">
                    Voir l'historique
                  </Button>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/statistiques" className="block">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-amber-300 h-full"
              >
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 p-4 text-white flex items-center">
                  <BarChart3 className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Statistiques</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Visualise ta progression et identifie tes points forts et faibles.
                  </p>
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                    Voir les statistiques
                  </Button>
                </div>
              </motion.div>
            </Link>
            
            <Link to="/reglages" className="block md:col-span-2">
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border-2 border-gray-300 h-full"
              >
                <div className="bg-gradient-to-r from-gray-500 to-gray-600 p-4 text-white flex items-center">
                  <Settings className="h-8 w-8 mr-3" />
                  <h2 className="text-2xl font-bold">Réglages</h2>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Personnalise ton expérience et configure tes paramètres d'études.
                  </p>
                  <Button className="w-full bg-gray-500 hover:bg-gray-600 text-white">
                    Modifier les réglages
                  </Button>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
