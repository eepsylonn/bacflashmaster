
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-app-blue-dark to-app-blue-medium text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <Mascot size="lg" animation="bounce" className="mb-4" />
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">FlashBac'</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Prépare ton baccalauréat avec des flashcards pour toutes les matières. Entraîne ta mémoire, teste tes connaissances et améliore tes résultats.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild
                    size="lg" 
                    className="bg-white text-app-blue-dark hover:bg-gray-100 font-bold px-8"
                  >
                    <Link to="/entrainement">Commencer l'entraînement</Link>
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    asChild
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 font-bold px-8"
                  >
                    <Link to="/examen">Passer un examen</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comment ça fonctionne</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-app-blue-light w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">
                  <Mascot size="sm" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Choisis une matière</h3>
                <p className="text-gray-600 text-center">
                  Sélectionne la matière que tu souhaites réviser et le niveau (Première ou Terminale).
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-app-blue-light w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">
                  <Mascot size="sm" animation="pulse" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Réponds aux questions</h3>
                <p className="text-gray-600 text-center">
                  Lis la question, réfléchis à ta réponse, puis vérifie avec la réponse correcte.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="bg-app-blue-light w-16 h-16 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">
                  <Mascot size="sm" animation="wave" />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">Suis tes progrès</h3>
                <p className="text-gray-600 text-center">
                  Analyse tes statistiques pour identifier tes points forts et les domaines à améliorer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Les matières disponibles</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {matieres.map((matiere, index) => (
                <MatiereCard key={matiere} nom={matiere} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <div className="flex justify-center items-center gap-2 mb-2">
            <Mascot size="sm" />
            <p className="font-medium">FlashBac'</p>
          </div>
          <p>&copy; {new Date().getFullYear()} - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

const matieres = [
  'Mathématiques',
  'Physique-Chimie',
  'SVT',
  'Histoire-Géographie',
  'Français',
  'Philosophie',
  'Anglais',
  'SES'
];

interface MatiereCardProps {
  nom: string;
  delay?: number;
}

const MatiereCard = ({ nom, delay = 0 }: MatiereCardProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3, delay }}
    whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
    whileTap={{ scale: 0.95 }}
  >
    <Link 
      to={`/entrainement?matiere=${encodeURIComponent(nom)}`}
      className="block bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow hover:border-app-blue-light h-full flex items-center justify-center"
    >
      <h3 className="font-medium text-lg">{nom}</h3>
    </Link>
  </motion.div>
);

export default Index;
