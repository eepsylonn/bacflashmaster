
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { NombreQuestions } from '@/types';
import { MascotSlider } from '@/components/MascotSlider';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';

interface TrainingSelectorProps {
  matiere: string | undefined;
  setMatiere: (matiere: string) => void;
  niveau: 'premiere' | 'terminale' | undefined;
  setNiveau: (niveau: 'premiere' | 'terminale' | undefined) => void;
  nombreQuestions: NombreQuestions;
  setNombreQuestions: (nombreQuestions: NombreQuestions) => void;
  onStartTraining: () => void;
}

const matieres = [
  'Mathématiques',
  'Physique-Chimie',
  'SVT',
  'Histoire-Géographie',
  'Français',
  'Philosophie',
  'Anglais',
  'SES'
];

const questionOptions: NombreQuestions[] = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const TrainingSelector = ({
  matiere,
  setMatiere,
  niveau,
  setNiveau,
  nombreQuestions,
  setNombreQuestions,
  onStartTraining
}: TrainingSelectorProps) => {
  const [sliderValue, setSliderValue] = useState<number[]>([questionOptions.indexOf(nombreQuestions)]);
  
  // Mettre à jour le nombre de questions lorsque le slider change
  useEffect(() => {
    const index = sliderValue[0];
    if (index >= 0 && index < questionOptions.length) {
      setNombreQuestions(questionOptions[index]);
    }
  }, [sliderValue, setNombreQuestions]);
  
  return (
    <Card className="p-6 shadow-lg bg-white rounded-xl border-2 border-app-blue-light">
      <div className="flex items-center justify-center mb-6">
        <Mascot size="lg" animation="wave" />
        <h2 className="text-2xl font-semibold ml-4 text-app-blue-dark">Paramètres d'entraînement</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Matière
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {matieres.map((m) => (
              <motion.button
                key={m}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMatiere(m)}
                className={`p-3 rounded-lg text-center text-sm transition-all ${
                  matiere === m
                    ? 'bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white font-medium shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {m}
              </motion.button>
            ))}
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Niveau
          </label>
          <Tabs 
            defaultValue={niveau || "both"} 
            onValueChange={(value) => {
              if (value === "both") {
                setNiveau(undefined);
              } else {
                setNiveau(value as 'premiere' | 'terminale');
              }
            }}
            className="w-full"
          >
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="premiere" className="data-[state=active]:bg-app-blue-medium data-[state=active]:text-white">
                Première
              </TabsTrigger>
              <TabsTrigger value="terminale" className="data-[state=active]:bg-app-blue-medium data-[state=active]:text-white">
                Terminale
              </TabsTrigger>
              <TabsTrigger value="both" className="data-[state=active]:bg-app-blue-medium data-[state=active]:text-white">
                Les deux
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre de questions: <span className="text-app-blue-dark font-bold">{nombreQuestions}</span>
          </label>
          
          <div className="px-2 pt-6 pb-2">
            <MascotSlider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={questionOptions.length - 1}
              step={1}
              steps={questionOptions}
              showLabels={true}
            />
          </div>
        </div>
        
        <Button 
          onClick={onStartTraining} 
          className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg py-6 rounded-lg transform transition hover:scale-105"
          disabled={!matiere}
        >
          <motion.span 
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex items-center"
          >
            Lancer l'entraînement
          </motion.span>
        </Button>
      </div>
    </Card>
  );
};

export default TrainingSelector;
