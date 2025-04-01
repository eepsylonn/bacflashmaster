
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useIsMobile } from '@/hooks/use-mobile';
import { Settings } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('/');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const tabs = [
    { value: '/', label: 'Accueil' },
    { value: '/methodologie', label: 'Fiches' },
    { value: '/entrainement', label: 'Entraînement' },
    { value: '/examen', label: 'Examen' },
    { value: '/historique', label: 'Historique' },
    { value: '/statistiques', label: 'Statistiques' },
  ];
  
  // Effet pour définir l'onglet actif en fonction de la route
  useEffect(() => {
    const path = location.pathname;
    setActiveTab(path);
    
    // Faire défiler vers l'onglet actif sans animation
    const activeTabElement = document.querySelector(`[data-path="${path}"]`);
    if (activeTabElement && tabsContainerRef.current) {
      const containerWidth = tabsContainerRef.current.offsetWidth;
      const tabPosition = (activeTabElement as HTMLElement).offsetLeft;
      const tabWidth = (activeTabElement as HTMLElement).offsetWidth;
      
      // Calculer la position de défilement pour centrer l'onglet
      const scrollPosition = tabPosition - (containerWidth / 2) + (tabWidth / 2);
      
      // Utiliser scrollLeft au lieu de scrollTo pour éviter l'animation
      tabsContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [location.pathname]);
  
  return (
    <header className="relative">
      {/* Fond avec gradient */}
      <div className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white py-5 shadow-lg">
        <div className="container px-4 mx-auto">
          {/* Logo et titre */}
          <div className="flex justify-center items-center mb-5">
            <Link to="/" className="text-3xl font-bold flex items-center gap-2 group">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
              >
                <Mascot animation="none" size={isMobile ? "sm" : "md"} />
              </motion.div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-500 font-extrabold text-2xl md:text-4xl">
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  F
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.1, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  l
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.2, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  a
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.3, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  s
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.4, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  h
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.5, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  B
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.6, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  a
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.7, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  c
                </motion.span>
                <motion.span 
                  className="inline-block origin-bottom"
                  animate={{ 
                    y: [0, -3, 0],
                    transition: { delay: 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 3 }
                  }}
                >
                  '
                </motion.span>
              </span>
            </Link>
          </div>
          
          {/* Onglets avec défilement horizontal */}
          <div 
            ref={tabsContainerRef}
            className="overflow-x-auto scrollbar-hide max-w-full pb-1"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            <div className="flex space-x-1 p-1 bg-white/10 rounded-lg min-w-max mx-auto relative" style={{ width: 'fit-content' }}>
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  data-path={tab.value}
                  onClick={() => navigate(tab.value)}
                  className={`relative px-3 py-2 rounded-md text-sm transition-all ${isMobile ? 'min-w-[80px]' : 'min-w-[100px]'} whitespace-nowrap
                    ${activeTab === tab.value 
                      ? 'text-white font-medium z-20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10 z-10'}`}
                >
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
              
              {/* Indicateur animé d'onglet actif */}
              <motion.div
                layoutId="activeTabIndicator"
                className="absolute top-0 left-0 bg-white/20 rounded-md z-0"
                animate={{
                  width: document.querySelector(`[data-path="${activeTab}"]`)?.getBoundingClientRect().width,
                  height: document.querySelector(`[data-path="${activeTab}"]`)?.getBoundingClientRect().height,
                  x: document.querySelector(`[data-path="${activeTab}"]`)?.getBoundingClientRect().left - 
                     (tabsContainerRef.current?.getBoundingClientRect().left || 0) + 
                     (tabsContainerRef.current?.scrollLeft || 0)
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 500, 
                  damping: 30,
                  duration: 0.3 
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bouton Réglages flottant */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link 
          to="/reglages" 
          className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-amber-400 to-pink-500 text-white shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Réglages"
        >
          <motion.div
            animate={{ rotate: activeTab === '/reglages' ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <Settings className="h-6 w-6" />
          </motion.div>
        </Link>
      </motion.div>
      
      {/* Ajouter des styles pour cacher la scrollbar */}
      <style>
        {`
          /* For Webkit browsers like Chrome/Safari */
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
