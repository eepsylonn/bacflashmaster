
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MascotSlider } from '@/components/MascotSlider';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useDiplome } from '@/contexts/DiplomeContext';
import { NiveauType, NombreQuestions } from '@/types';
import { ChevronDown, ChevronUp } from 'lucide-react';

// Matières selon le diplôme
const getMatieresByDiplome = (diplome: string | undefined) => {
  switch(diplome) {
    case 'toeic':
      return ['Compréhension orale', 'Compréhension écrite', 'Grammaire', 'Vocabulaire'];
    case 'tage-mage':
      return ['Calcul', 'Logique', 'Verbal', 'Problèmes'];
    case 'toefl':
      return ['Reading', 'Listening', 'Speaking', 'Writing', 'Grammar', 'Vocabulary'];
    case 'ielts':
      return ['Reading', 'Listening', 'Speaking', 'Writing', 'Vocabulary', 'Academic', 'General Training'];
    case 'cambridge':
      return ['Reading & Use of English', 'Writing', 'Listening', 'Speaking', 'Grammar', 'Vocabulary'];
    case 'gmat':
      return ['Quantitative', 'Verbal', 'Integrated Reasoning', 'Analytical Writing'];
    case 'brevet':
      return [
        'Français (Grammaire)',
        'Français (Compréhension)',
        'Français (Rédaction)',
        'Mathématiques (Calculs)',
        'Mathématiques (Géométrie)',
        'Mathématiques (Programmation)',
        'Histoire',
        'Géographie',
        'EMC',
        'Physique-Chimie',
        'SVT',
        'Technologie'
      ];
    case 'baccalaureat':
    default:
      return [
        'Philosophie',
        'Français',
        'Histoire-Géographie',
        'EMC',
        'Anglais',
        'Espagnol',
        'Mathématiques',
        'Physique-Chimie',
        'SVT',
        'SES',
        'HGGSP',
        'Humanités-Littérature-Philosophie',
        'NSI',
        'Arts',
        'Mathématiques expertes',
        'Mathématiques complémentaires',
        'LVC',
        'Latin/Grec'
      ];
  }
};

const getNiveauByDiplome = (diplome: string | undefined) => {
  switch(diplome) {
    case 'toeic':
    case 'toefl':
    case 'ielts':
    case 'cambridge':
    case 'gmat':
    case 'tage-mage':
      return [
        { value: "intermediaire", label: "Intermédiaire" },
        { value: "avance", label: "Avancé" }
      ];
    case 'brevet':
      return [
        { value: "troisieme", label: "Troisième" },
        { value: "quatrieme", label: "Quatrième" },
        { value: "both", label: "Les deux" }
      ];
    case 'baccalaureat':
    default:
      return [
        { value: "premiere", label: "Première" },
        { value: "terminale", label: "Terminale" },
        { value: "both", label: "Les deux" }
      ];
  }
};

const questionOptions: NombreQuestions[] = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

interface TrainingSelectorProps {
  matiere: string | undefined;
  setMatiere: (matiere: string) => void;
  niveau: NiveauType | undefined;
  setNiveau: (niveau: NiveauType | undefined) => void;
  nombreQuestions: NombreQuestions;
  setNombreQuestions: (nombreQuestions: NombreQuestions) => void;
  onStartTraining: () => void;
}

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
  const { diplome } = useDiplome();
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  
  // Obtenir les matières selon le diplôme sélectionné
  const matieres = getMatieresByDiplome(diplome);
  const visibleMatieres = showAllSubjects ? matieres : matieres.slice(0, 6);
  const hasMoreSubjects = matieres.length > 6;
  
  // Obtenir les niveaux selon le diplôme
  const niveaux = getNiveauByDiplome(diplome);
  const defaultNiveau = niveaux[0]?.value || "both";
  
  // Mettre à jour le nombre de questions lorsque le slider change
  useEffect(() => {
    const index = sliderValue[0];
    if (index >= 0 && index < questionOptions.length) {
      setNombreQuestions(questionOptions[index]);
    }
  }, [sliderValue, setNombreQuestions]);
  
  // Réinitialiser la matière si elle n'existe pas dans la nouvelle liste
  useEffect(() => {
    if (matiere && !matieres.includes(matiere)) {
      setMatiere(matieres[0]);
    }
  }, [diplome, matiere, matieres, setMatiere]);
  
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
          <div className="grid grid-cols-2 gap-2">
            {visibleMatieres.map((m) => (
              <motion.button
                key={m}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMatiere(m)}
                className={`p-3 h-14 rounded-lg text-center text-sm transition-all flex items-center justify-center ${
                  matiere === m
                    ? 'bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white font-medium shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {m}
              </motion.button>
            ))}
          </div>
          
          {hasMoreSubjects && (
            <Button 
              variant="outline" 
              onClick={() => setShowAllSubjects(!showAllSubjects)} 
              className="w-full mt-2 text-app-blue-dark border-app-blue-light hover:bg-app-blue-light/10"
            >
              {showAllSubjects ? (
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
          )}
        </div>
        
        {niveaux.length > 0 && (
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Niveau
            </label>
            <Tabs 
              defaultValue={niveau || defaultNiveau} 
              onValueChange={(value) => {
                if (value === "both") {
                  setNiveau(undefined);
                } else {
                  setNiveau(value as NiveauType);
                }
              }}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 w-full">
                {niveaux.map((niv) => (
                  <TabsTrigger key={niv.value} value={niv.value}>
                    {niv.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}
        
        <div className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Nombre de questions
          </label>
          
          <div className="px-2 pt-2 pb-2">
            <MascotSlider
              value={sliderValue}
              onValueChange={setSliderValue}
              max={questionOptions.length - 1}
              step={1}
              steps={questionOptions}
              currentValue={nombreQuestions}
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
