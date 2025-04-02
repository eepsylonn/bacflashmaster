
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { useAuth } from '@/contexts/AuthContext';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Methodology = () => {
  const { isSubscribed } = useAuth();
  const navigate = useNavigate();

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
              
              <h2 className="text-2xl font-bold mb-4 text-app-blue-dark">Contenu Verrouillé</h2>
              <p className="text-gray-600 mb-6">
                Cette section est disponible uniquement pour les utilisateurs premium. 
                Abonnez-vous pour accéder aux fiches méthodologiques complètes.
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

  // Sinon, afficher le contenu normal de la page
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
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
            <h1 className="text-3xl font-bold">Fiches Méthodologiques</h1>
          </div>
          
          {/* Contenu des fiches méthodologiques */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Exemple de fiches */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Analyser un texte littéraire</h3>
              <p className="text-gray-600 mb-4">
                Techniques et méthodes pour décrypter et analyser efficacement un texte littéraire.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Dissertation philosophique</h3>
              <p className="text-gray-600 mb-4">
                Guide complet pour structurer et argumenter une dissertation philosophique.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Résolution de problèmes mathématiques</h3>
              <p className="text-gray-600 mb-4">
                Méthodes et astuces pour aborder et résoudre les problèmes complexes.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Commentaire de documents historiques</h3>
              <p className="text-gray-600 mb-4">
                Comment analyser et contextualiser des sources historiques primaires et secondaires.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Rédaction scientifique</h3>
              <p className="text-gray-600 mb-4">
                Structure et méthodologie pour les rapports et dissertations scientifiques.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2 text-app-blue-dark">Techniques de mémorisation</h3>
              <p className="text-gray-600 mb-4">
                Stratégies efficaces pour retenir l'information à court et long terme.
              </p>
              <Button variant="outline" className="w-full">Voir la fiche</Button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Methodology;
