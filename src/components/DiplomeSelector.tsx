
import { useState, useEffect } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { GraduationCap, BookOpenCheck, BrainCircuit } from 'lucide-react';

interface DiplomeSelectorProps {
  onSelectDiplome: (diplome: string) => void;
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

const DiplomeSelector = ({ onSelectDiplome }: DiplomeSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Vérifier si c'est la première ouverture de l'app
    const isFirstOpen = localStorage.getItem('diplomeSelected') !== 'true';
    
    if (isFirstOpen) {
      setIsOpen(true);
    }
  }, []);
  
  const handleSelectDiplome = (diplomeId: string) => {
    localStorage.setItem('diplomeSelected', 'true');
    localStorage.setItem('diplomeType', diplomeId);
    onSelectDiplome(diplomeId);
    setIsOpen(false);
  };
  
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <div className="hidden">Trigger invisible</div>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 max-w-md" align="center">
        <Card className="border-2 border-app-blue-light overflow-hidden">
          <div className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white p-6">
            <div className="flex items-center justify-center mb-4">
              <Mascot size="lg" animation="wave" />
              <h2 className="text-2xl font-bold ml-4">Bienvenue sur FlashBac'</h2>
            </div>
            <p className="text-center text-white/90">
              Quel diplôme souhaitez-vous réviser ?
            </p>
          </div>
          
          <div className="p-6">
            <div className="grid gap-4">
              {diplomes.map((diplome) => (
                <motion.button
                  key={diplome.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 rounded-lg bg-white border-2 border-gray-200 hover:border-app-blue-medium flex items-center transition-all"
                  onClick={() => handleSelectDiplome(diplome.id)}
                >
                  <div className="h-12 w-12 rounded-full bg-app-blue-light/20 flex items-center justify-center text-app-blue-dark mr-4">
                    {diplome.icon}
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg text-app-blue-dark">{diplome.nom}</h3>
                    <p className="text-sm text-gray-600">{diplome.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};

export default DiplomeSelector;
