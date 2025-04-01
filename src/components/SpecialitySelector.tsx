import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useUserPreferences } from '@/contexts/UserPreferencesContext';
import { BacSpecialite } from '@/types';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Check, Sparkles } from 'lucide-react';
import Mascot from '@/components/Mascot';
import { useIsMobile } from '@/hooks/use-mobile';

const specialitiesData: {
  id: BacSpecialite;
  description: string;
  category: string;
  icon: string;
  color: string;
}[] = [
  {
    id: 'Mathématiques',
    description: 'Algèbre, géométrie, analyse et probabilités',
    category: 'Sciences',
    icon: '📊',
    color: 'bg-blue-100 border-blue-300'
  },
  {
    id: 'Physique-Chimie',
    description: 'Lois physiques et réactions chimiques',
    category: 'Sciences',
    icon: '⚗️',
    color: 'bg-purple-100 border-purple-300'
  },
  {
    id: 'SVT',
    description: 'Sciences de la vie et de la Terre',
    category: 'Sciences',
    icon: '🌿',
    color: 'bg-green-100 border-green-300'
  },
  {
    id: 'NSI',
    description: 'Numérique et sciences informatiques',
    category: 'Sciences',
    icon: '💻',
    color: 'bg-indigo-100 border-indigo-300'
  },
  {
    id: 'SES',
    description: 'Économie, sociologie et science politique',
    category: 'Sciences sociales',
    icon: '📈',
    color: 'bg-yellow-100 border-yellow-300'
  },
  {
    id: 'HGGSP',
    description: 'Histoire-géographie, géopolitique et sciences politiques',
    category: 'Sciences humaines',
    icon: '🌍',
    color: 'bg-orange-100 border-orange-300'
  },
  {
    id: 'Humanités-Littérature-Philosophie',
    description: 'Littérature, philosophie et sciences humaines',
    category: 'Lettres',
    icon: '📚',
    color: 'bg-pink-100 border-pink-300'
  },
  {
    id: 'Arts',
    description: 'Arts plastiques, musique, théâtre, cinéma',
    category: 'Arts',
    icon: '🎨',
    color: 'bg-violet-100 border-violet-300'
  },
  {
    id: 'Mathématiques expertes',
    description: 'Approfondissement en mathématiques (Terminale)',
    category: 'Options',
    icon: '🔢',
    color: 'bg-blue-100 border-blue-300'
  },
  {
    id: 'Mathématiques complémentaires',
    description: 'Mathématiques supplémentaires (Terminale)',
    category: 'Options',
    icon: '➗',
    color: 'bg-sky-100 border-sky-300'
  },
  {
    id: 'LVC',
    description: 'Troisième langue vivante',
    category: 'Langues',
    icon: '🗣️',
    color: 'bg-teal-100 border-teal-300'
  },
  {
    id: 'Latin/Grec',
    description: "Langues et cultures de l'Antiquité",
    category: 'Langues',
    icon: '🏛️',
    color: 'bg-amber-100 border-amber-300'
  }
];

interface SpecialitySelectorProps {
  isOpen: boolean;
  onClose: () => void;
}

const SpecialitySelector = ({ isOpen, onClose }: SpecialitySelectorProps) => {
  const { selectedSpecialities, setSelectedSpecialities } = useUserPreferences();
  const [showMoreSpecialities, setShowMoreSpecialities] = useState(false);
  const isMobile = useIsMobile();
  
  const visibleSpecialities = showMoreSpecialities ? specialitiesData : specialitiesData.slice(0, 4);

  const toggleSpeciality = (speciality: BacSpecialite) => {
    if (selectedSpecialities.includes(speciality)) {
      setSelectedSpecialities(selectedSpecialities.filter(item => item !== speciality));
    } else {
      setSelectedSpecialities([...selectedSpecialities, speciality]);
    }
  };

  const selectAll = () => {
    setSelectedSpecialities(specialitiesData.map(s => s.id));
  };

  const deselectAll = () => {
    setSelectedSpecialities([]);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />
            Choisissez vos spécialités
          </DialogTitle>
          <DialogDescription>
            Sélectionnez les spécialités que vous étudiez pour personnaliser vos exercices
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <Mascot size="sm" animation="bounce" />
              <p className="text-sm text-gray-700 italic ml-3">
                Le contenu de votre entraînement sera adapté en fonction de vos spécialités. 
                Vous pourrez toujours modifier ces paramètres plus tard dans les réglages.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {visibleSpecialities.map((speciality) => (
                <motion.div 
                  key={speciality.id}
                  className={`p-3 rounded-lg border-2 ${
                    selectedSpecialities.includes(speciality.id)
                      ? `${speciality.color} border-opacity-100 shadow-sm`
                      : 'border-gray-200 hover:border-gray-300'
                  } transition-all`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <div 
                      className="flex items-center justify-center mr-3"
                      onClick={() => toggleSpeciality(speciality.id)}
                    >
                      <Checkbox 
                        id={`speciality-popup-${speciality.id}`}
                        checked={selectedSpecialities.includes(speciality.id)}
                        onCheckedChange={() => toggleSpeciality(speciality.id)}
                        className="h-5 w-5 rounded border-2 data-[state=checked]:bg-app-blue-medium data-[state=checked]:border-app-blue-medium"
                      />
                    </div>
                    <div
                      className="flex-1 cursor-pointer"
                      onClick={() => toggleSpeciality(speciality.id)}
                    >
                      <div className="flex items-center">
                        <span className="text-2xl mr-2">{speciality.icon}</span>
                        <Label 
                          htmlFor={`speciality-popup-${speciality.id}`}
                          className="font-medium"
                        >
                          {speciality.id}
                        </Label>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        {speciality.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={() => setShowMoreSpecialities(!showMoreSpecialities)} 
              className="w-full mt-2 text-app-blue-dark hover:bg-app-blue-light/10 p-1 h-8"
            >
              {showMoreSpecialities ? (
                <>
                  <span>Afficher moins</span>
                  <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  <span>Afficher plus</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>

            {showMoreSpecialities && (
              <div className="space-y-4 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {specialitiesData.slice(4).map((speciality) => (
                    <motion.div 
                      key={speciality.id}
                      className={`p-3 rounded-lg border-2 ${
                        selectedSpecialities.includes(speciality.id)
                          ? `${speciality.color} border-opacity-100 shadow-sm`
                          : 'border-gray-200 hover:border-gray-300'
                      } transition-all`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-start">
                        <div 
                          className="flex items-center justify-center mr-3"
                          onClick={() => toggleSpeciality(speciality.id)}
                        >
                          <Checkbox 
                            id={`speciality-popup-extra-${speciality.id}`}
                            checked={selectedSpecialities.includes(speciality.id)}
                            onCheckedChange={() => toggleSpeciality(speciality.id)}
                            className="h-5 w-5 rounded border-2 data-[state=checked]:bg-app-blue-medium data-[state=checked]:border-app-blue-medium"
                          />
                        </div>
                        <div
                          className="flex-1 cursor-pointer"
                          onClick={() => toggleSpeciality(speciality.id)}
                        >
                          <div className="flex items-center">
                            <span className="text-2xl mr-2">{speciality.icon}</span>
                            <Label 
                              htmlFor={`speciality-popup-extra-${speciality.id}`}
                              className="font-medium"
                            >
                              {speciality.id}
                            </Label>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {speciality.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              size="sm"
              onClick={deselectAll}
              className="text-gray-600"
            >
              Tout désélectionner
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={selectAll}
              className="text-app-blue-medium"
            >
              Tout sélectionner
            </Button>
          </div>
          
          <div className="mt-4 text-center text-sm">
            {selectedSpecialities.length === 0 ? (
              <p className="text-amber-600">Aucune spécialité sélectionnée (tronc commun uniquement)</p>
            ) : (
              <p className="text-green-600">{selectedSpecialities.length} spécialité{selectedSpecialities.length > 1 ? 's' : ''} sélectionnée{selectedSpecialities.length > 1 ? 's' : ''}</p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button 
            onClick={onClose}
            className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white"
          >
            <Check className="h-4 w-4 mr-2" />
            Valider mes spécialités
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SpecialitySelector;
