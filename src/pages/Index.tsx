
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-app-blue-dark to-app-blue-medium text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">BacFlashMaster</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Prépare ton baccalauréat avec des flashcards pour toutes les matières. Entraîne ta mémoire, teste tes connaissances et améliore tes résultats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-app-blue-dark hover:bg-gray-100"
              >
                <Link to="/entrainement">Commencer l'entraînement</Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/statistiques">Voir mes statistiques</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Comment ça fonctionne</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-app-blue-light w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">1</div>
                <h3 className="text-xl font-semibold text-center mb-3">Choisis une matière</h3>
                <p className="text-gray-600 text-center">
                  Sélectionne la matière que tu souhaites réviser et le niveau (Première ou Terminale).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-app-blue-light w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">2</div>
                <h3 className="text-xl font-semibold text-center mb-3">Réponds aux questions</h3>
                <p className="text-gray-600 text-center">
                  Lis la question, réfléchis à ta réponse, puis vérifie avec la réponse correcte.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-app-blue-light w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-xl mb-4 mx-auto">3</div>
                <h3 className="text-xl font-semibold text-center mb-3">Suis tes progrès</h3>
                <p className="text-gray-600 text-center">
                  Analyse tes statistiques pour identifier tes points forts et les domaines à améliorer.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Les matières disponibles</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <MatiereCard nom="Mathématiques" />
              <MatiereCard nom="Physique-Chimie" />
              <MatiereCard nom="SVT" />
              <MatiereCard nom="Histoire-Géographie" />
              <MatiereCard nom="Français" />
              <MatiereCard nom="Philosophie" />
              <MatiereCard nom="Anglais" />
              <MatiereCard nom="SES" />
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} BacFlashMaster - Tous droits réservés</p>
        </div>
      </footer>
    </div>
  );
};

interface MatiereCardProps {
  nom: string;
}

const MatiereCard = ({ nom }: MatiereCardProps) => (
  <Link 
    to={`/entrainement?matiere=${encodeURIComponent(nom)}`}
    className="block bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow hover:border-app-blue-light"
  >
    <h3 className="font-medium text-lg">{nom}</h3>
  </Link>
);

export default Index;
