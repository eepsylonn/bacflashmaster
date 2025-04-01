import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useDiplome } from '@/contexts/DiplomeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const location = useLocation();
  const { diplome, setDiplome } = useDiplome();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-lg text-app-blue-dark">Flashcards</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/' 
                  ? 'text-app-blue-dark' 
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Accueil
              {location.pathname === '/' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>

            <Link
              to="/methodologie"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/methodologie' 
                  ? 'text-app-blue-dark' 
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Fiches
              {location.pathname === '/methodologie' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
            
            <Link
              to="/entrainement"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/entrainement' 
                  ? 'text-app-blue-dark' 
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Entraînement
              {location.pathname === '/entrainement' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
            
            <Link
              to="/examen"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/examen'
                  ? 'text-app-blue-dark'
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Examen
              {location.pathname === '/examen' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
            
            <Link
              to="/historique"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/historique'
                  ? 'text-app-blue-dark'
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Historique
              {location.pathname === '/historique' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
            
            <Link
              to="/statistiques"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                location.pathname === '/statistiques'
                  ? 'text-app-blue-dark'
                  : 'text-gray-600 hover:text-app-blue-medium hover:bg-gray-100'
              }`}
            >
              Statistiques
              {location.pathname === '/statistiques' && (
                <motion.div
                  layoutId="navIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-app-blue-dark"
                  initial={false}
                  transition={{ type: 'spring', duration: 0.3 }}
                />
              )}
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Select value={diplome} onValueChange={setDiplome}>
              <SelectTrigger className="w-[180px] text-sm">
                <SelectValue placeholder="Sélectionner un diplôme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="baccalaureat">Baccalauréat</SelectItem>
                <SelectItem value="toeic">TOEIC</SelectItem>
                <SelectItem value="tage-mage">TAGE MAGE</SelectItem>
              </SelectContent>
            </Select>
            
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-gray-600 hover:text-app-blue-dark focus:outline-none">
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-b border-gray-200 py-2"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Accueil
            </Link>
            <Link to="/methodologie" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Fiches
            </Link>
            <Link to="/entrainement" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Entraînement
            </Link>
            <Link to="/examen" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Examen
            </Link>
            <Link to="/historique" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Historique
            </Link>
            <Link to="/statistiques" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-app-blue-medium hover:bg-gray-100">
              Statistiques
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
