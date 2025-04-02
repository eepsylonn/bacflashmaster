
import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import DiplomeSelector from '@/components/DiplomeSelector';
import SpecialitySelector from '@/components/SpecialitySelector';

type DiplomeType = 'baccalaureat' | 'toeic' | 'tage-mage' | 'toefl' | 'ielts' | 'cambridge' | 'gmat' | 'brevet' | undefined;

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
  const [showSpecialitySelector, setShowSpecialitySelector] = useState(false);
  
  useEffect(() => {
    // Charger le diplôme sélectionné du localStorage
    const savedDiplome = localStorage.getItem('diplomeType');
    const hasSelectedDiplome = localStorage.getItem('diplomeSelected') === 'true';
    const hasSelectedSpecialities = localStorage.getItem('hasSelectedSpecialities') === 'true';
    
    if (hasSelectedDiplome && savedDiplome) {
      setDiplomeState(savedDiplome as DiplomeType);
      setIsFirstOpen(false);
      
      // Si le diplôme est baccalauréat et les spécialités n'ont pas été choisies, montrer le sélecteur de spécialités
      if (savedDiplome === 'baccalaureat' && !hasSelectedSpecialities) {
        setShowSpecialitySelector(true);
      }
    } else {
      // Si aucun diplôme n'a été sélectionné, montrer le sélecteur de diplôme automatiquement
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
      
      // Si le diplôme est baccalauréat, montrer automatiquement le sélecteur de spécialités
      if (newDiplome === 'baccalaureat') {
        setIsSelectorOpen(false); // Fermer le sélecteur de diplôme d'abord
        setTimeout(() => {
          setShowSpecialitySelector(true); // Puis ouvrir le sélecteur de spécialités avec un léger délai
        }, 300);
      }
    }
  };
  
  const closeSpecialitySelector = () => {
    setShowSpecialitySelector(false);
    localStorage.setItem('hasSelectedSpecialities', 'true');
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
      <SpecialitySelector
        isOpen={showSpecialitySelector}
        onClose={closeSpecialitySelector}
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
