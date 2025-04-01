
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Mascot from '@/components/Mascot';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('');
  
  const tabs = [
    { value: '/', label: 'Accueil' },
    { value: '/entrainement', label: 'Entraînement' },
    { value: '/examen', label: 'Examen' },
    { value: '/historique', label: 'Historique' },
    { value: '/statistiques', label: 'Statistiques' }
  ];
  
  useEffect(() => {
    // Trouver le tab qui correspond à la route actuelle
    const tab = tabs.find(tab => tab.value === location.pathname);
    if (tab) {
      setCurrentTab(tab.value);
    } else {
      setCurrentTab('/');
    }
  }, [location.pathname]);
  
  const handleTabChange = (value: string) => {
    setCurrentTab(value);
    navigate(value);
    // Fermer le menu mobile si ouvert
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };
  
  return (
    <header className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white py-5 shadow-md relative">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col mb-5">
          <Link to="/" className="text-3xl font-bold flex items-center gap-2 group mx-auto">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              <Mascot animation="none" />
            </motion.div>
            <span className="text-gradient-title font-extrabold">
              <span className="animate-pulse inline-block">F</span>
              <span className="animate-pulse inline-block delay-75">l</span>
              <span className="animate-pulse inline-block delay-100">a</span>
              <span className="animate-pulse inline-block delay-125">s</span>
              <span className="animate-pulse inline-block delay-150">h</span>
              <span className="animate-pulse inline-block delay-175">B</span>
              <span className="animate-pulse inline-block delay-200">a</span>
              <span className="animate-pulse inline-block delay-225">c</span>
              <span className="animate-pulse inline-block delay-250">'</span>
            </span>
          </Link>
        </div>
      
        {/* Navigation pour desktop */}
        <div className="hidden md:block">
          <Tabs
            value={currentTab}
            onValueChange={handleTabChange}
            className="w-full"
          >
            <TabsList className="w-full bg-white/10 p-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex-1 data-[state=active]:bg-white/20 data-[state=active]:text-white data-[state=active]:shadow-sm"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Navigation Mobile - Bouton burger */}
        <div className="md:hidden flex justify-center">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="bg-white/20 p-2 rounded-full"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </motion.button>
        </div>
        
        {/* Menu mobile déroulant */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-2 bg-white/10 rounded-lg p-3"
          >
            {tabs.map((tab) => (
              <motion.div
                key={tab.value}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to={tab.value} 
                  className={`block p-3 rounded-lg transition-all ${
                    location.pathname === tab.value 
                      ? 'bg-white/20 text-white font-medium' 
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {tab.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
