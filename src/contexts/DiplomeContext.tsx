
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';

type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage' | undefined;

interface DiplomeContextType {
  diplome: DiplomeType;
  setDiplome: (diplome: DiplomeType) => void;
  isFirstOpen: boolean;
  setIsFirstOpen: (isFirst: boolean) => void;
}

const DiplomeContext = createContext<DiplomeContextType | undefined>(undefined);

export function DiplomeProvider({ children }: { children: ReactNode }) {
  const [diplome, setDiplomeState] = useState<DiplomeType>(undefined);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  
  useEffect(() => {
    // Charger le diplôme sélectionné du localStorage
    const savedDiplome = localStorage.getItem('diplomeType');
    const hasSelectedDiplome = localStorage.getItem('diplomeSelected') === 'true';
    
    if (hasSelectedDiplome && savedDiplome) {
      setDiplomeState(savedDiplome as DiplomeType);
      setIsFirstOpen(false);
    } else {
      setIsFirstOpen(true);
    }
  }, []);
  
  const setDiplome = (newDiplome: DiplomeType) => {
    setDiplomeState(newDiplome);
    if (newDiplome) {
      localStorage.setItem('diplomeType', newDiplome);
      localStorage.setItem('diplomeSelected', 'true');
      setIsFirstOpen(false);
    }
  };
  
  return (
    <DiplomeContext.Provider value={{ diplome, setDiplome, isFirstOpen, setIsFirstOpen }}>
      {children}
    </DiplomeContext.Provider>
  );
}

export function useDiplome() {
  const context = useContext(DiplomeContext);
  if (context === undefined) {
    throw new Error('useDiplome must be used within a DiplomeProvider');
  }
  return context;
}
