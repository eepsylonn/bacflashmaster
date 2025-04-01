
import { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpenCheck, BrainCircuit } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

interface DiplomeSelectorProps {
  onSelectDiplome: (diplome: string) => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const diplomes = [
  { 
    id: 'baccalaureat',
    nom: 'Baccalauréat', 
    icon: <GraduationCap className="h-6 w-6" />,
    description: 'Programme de Première et Terminale'
  },
  { 
    id: 'toeic',
    nom: 'TOEIC', 
    icon: <BookOpenCheck className="h-6 w-6" />,
    description: 'Test d\'anglais international'
  },
  { 
    id: 'tage-mage',
    nom: 'TAGE MAGE', 
    icon: <BrainCircuit className="h-6 w-6" />,
    description: 'Test d\'aptitude aux études de gestion'
  }
];

const DiplomeSelector = ({ onSelectDiplome, isOpen, setIsOpen }: DiplomeSelectorProps) => {
  const isMobile = useIsMobile();
  
  const handleSelectDiplome = (diplomeId: string) => {
    localStorage.setItem('diplomeSelected', 'true');
    localStorage.setItem('diplomeType', diplomeId);
    onSelectDiplome(diplomeId);
    setIsOpen(false);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} modal={true}>
      <DialogContent className="p-0 border-0 max-w-md mx-auto backdrop-blur-md">
        <Card className="border-2 border-app-blue-light overflow-hidden shadow-xl">
          <div className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white p-4 sm:p-6">
            <div className="flex items-center justify-center mb-4">
              <h2 className="text-xl sm:text-2xl font-bold">Bienvenue sur FlashBac'</h2>
            </div>
            <p className="text-center text-white/90 text-sm sm:text-base">
              Quel diplôme souhaitez-vous réviser ?
            </p>
          </div>
          
          <div className="p-4 sm:p-6">
            <div className="grid gap-3 sm:gap-4">
              {diplomes.map((diplome) => (
                <motion.button
                  key={diplome.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-3 sm:p-4 rounded-lg bg-white border-2 border-gray-200 hover:border-app-blue-medium flex items-center transition-all"
                  onClick={() => handleSelectDiplome(diplome.id)}
                >
                  <div className="h-10 w-10 rounded-full bg-app-blue-light/20 flex items-center justify-center text-app-blue-dark mr-3">
                    {diplome.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-base sm:text-lg text-app-blue-dark">{diplome.nom}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{diplome.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default DiplomeSelector;
