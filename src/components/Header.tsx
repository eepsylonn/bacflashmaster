
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useIsMobile } from '@/hooks/use-mobile';
import { Settings, LogIn, LogOut, Lock, User, Bell } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('/');
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const { user, isAdmin, isSubscribed, signOut } = useAuth();
  
  // Pour déboguer
  console.log("État isAdmin:", isAdmin);
  console.log("État user:", user);
  
  const tabs = [
    { value: '/', label: 'Accueil', locked: false },
    { value: '/methodologie', label: 'Fiches', locked: !isSubscribed },
    { value: '/entrainement', label: 'Entraînement', locked: false },
    { value: '/examen', label: 'Examen', locked: !isSubscribed },
    { value: '/historique', label: 'Historique', locked: false },
    { value: '/statistiques', label: 'Statistiques', locked: !isSubscribed },
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

  const handleTabClick = (tab: typeof tabs[0]) => {
    if (tab.locked) {
      // Rediriger vers la page d'abonnement si l'onglet est verrouillé
      navigate('/subscription');
    } else {
      navigate(tab.value);
    }
  };

  const handleLogout = async () => {
    await signOut();
    navigate('/');
  };
  
  return (
    <header className="relative">
      {/* Fond avec gradient */}
      <div className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white py-5 shadow-lg">
        <div className="container px-4 mx-auto">
          {/* Logo et titre - modifié pour centrer le titre */}
          <div className="flex flex-col items-center mb-5">
            <Link to="/" className="text-3xl font-bold flex items-center gap-2 group mb-2">
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

            {/* Boutons utilisateur - déplacés en haut à droite de manière absolue */}
            <div className="absolute top-5 right-4 md:right-8 flex items-center gap-2">
              {isAdmin && (
                <Button 
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => navigate('/admin')}
                >
                  <Bell className="h-5 w-5 mr-2" />
                  Panel Admin
                </Button>
              )}
              
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="text-white hover:bg-white/20">
                      <User className="h-5 w-5 mr-2" />
                      {isMobile ? '' : user.email?.split('@')[0] || 'Mon Compte'}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuLabel>Mon Compte</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => navigate('/subscription')}>
                      {isSubscribed ? (
                        <>Abonnement (Actif)</>
                      ) : (
                        <>S'abonner</>
                      )}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => navigate('/reglages')}>
                      Réglages
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Déconnexion
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  variant="ghost"
                  className="text-white hover:bg-white/20"
                  onClick={() => navigate('/login')}
                >
                  <LogIn className="h-5 w-5 mr-2" />
                  {isMobile ? '' : 'Se connecter'}
                </Button>
              )}
            </div>
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
                  onClick={() => handleTabClick(tab)}
                  className={`relative px-3 py-2 rounded-md text-sm transition-all ${isMobile ? 'min-w-[80px]' : 'min-w-[100px]'} whitespace-nowrap
                    ${activeTab === tab.value 
                      ? 'text-white font-medium z-20' 
                      : 'text-white/70 hover:text-white hover:bg-white/10 z-10'}`}
                >
                  <div className="flex items-center justify-center">
                    {tab.locked && <Lock className="h-3 w-3 mr-1" />}
                    <span>{tab.label}</span>
                  </div>
                  
                  {/* Indicateur d'onglet actif pour chaque onglet */}
                  {activeTab === tab.value && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-white/20 rounded-md z-0"
                      transition={{ 
                        type: "spring", 
                        stiffness: 500, 
                        damping: 30,
                        duration: 0.3 
                      }}
                    />
                  )}
                </button>
              ))}
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
