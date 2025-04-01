
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import DiplomeSelector from '@/components/DiplomeSelector';

type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage' | undefined;

interface DiplomeContextType {
  diplome: DiplomeType;
  setDiplome: (diplome: DiplomeType) => void;
  isFirstOpen: boolean;
  setIsFirstOpen: (isFirst: boolean) => void;
  showDiplomeSelector: () => void;
}

const DiplomeContext = createContext<DiplomeContextType | undefined>(undefined);

export function DiplomeProvider({ children }: { children: ReactNode }) {
  const [diplome, setDiplomeState] = useState<DiplomeType>(undefined);
  const [isFirstOpen, setIsFirstOpen] = useState(true);
  const [isSelectorOpen, setIsSelectorOpen] = useState(false);
  
  useEffect(() => {
    // Charger le diplôme sélectionné du localStorage
    const savedDiplome = localStorage.getItem('diplomeType');
    const hasSelectedDiplome = localStorage.getItem('diplomeSelected') === 'true';
    
    if (hasSelectedDiplome && savedDiplome) {
      setDiplomeState(savedDiplome as DiplomeType);
      setIsFirstOpen(false);
    } else {
      setIsFirstOpen(true);
      setIsSelectorOpen(true);
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
  
  const showDiplomeSelector = () => {
    setIsSelectorOpen(true);
  };
  
  return (
    <DiplomeContext.Provider value={{ 
      diplome, 
      setDiplome, 
      isFirstOpen, 
      setIsFirstOpen, 
      showDiplomeSelector 
    }}>
      <DiplomeSelector 
        onSelectDiplome={(diplome) => setDiplome(diplome as DiplomeType)} 
        isOpen={isSelectorOpen}
        setIsOpen={setIsSelectorOpen}
      />
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
