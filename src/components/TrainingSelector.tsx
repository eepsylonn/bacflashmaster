
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useFlashcards } from '@/hooks/useFlashcards';
import { motion } from 'framer-motion';
import { 
  getUniqueSubjects, 
  getUniqueLevels, 
  getUniqueDiplomas, 
  getStandardizedMatiere,
  getStandardizedNiveau,
  getStandardizedDiplome
} from '@/utils/flashcardUtils';

interface TrainingSelectorProps {
  matiere: string | undefined;
  setMatiere: (matiere: string) => void;
  niveau: string | undefined;
  setNiveau: (niveau: string) => void;
  nombreQuestions: number;
  setNombreQuestions: (nombreQuestions: number) => void;
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
  const { allFlashcards } = useFlashcards();
  const [selectedDiplome, setSelectedDiplome] = useState<string | undefined>(undefined);
  const [availableMatieres, setAvailableMatieres] = useState<string[]>([]);
  const [availableNiveaux, setAvailableNiveaux] = useState<string[]>([]);
  const [availableDiplomes, setAvailableDiplomes] = useState<string[]>([]);

  // Get all unique diplomas on first render
  useEffect(() => {
    const diplomes = getUniqueDiplomas(allFlashcards);
    setAvailableDiplomes(diplomes);
    
    // Pre-select diplome if only one is available
    if (diplomes.length === 1) {
      setSelectedDiplome(diplomes[0]);
    }
  }, [allFlashcards]);

  // Update available subjects when diplome changes
  useEffect(() => {
    if (selectedDiplome) {
      const filteredFlashcards = allFlashcards.filter(
        card => getStandardizedDiplome(card.diplome) === selectedDiplome
      );
      
      const subjects = getUniqueSubjects(filteredFlashcards);
      setAvailableMatieres(subjects);
      
      // Reset matiere if it's no longer available
      if (matiere && !subjects.includes(getStandardizedMatiere(matiere))) {
        setMatiere('');
      }
    } else {
      setAvailableMatieres([]);
      setMatiere('');
    }
  }, [selectedDiplome, allFlashcards, matiere, setMatiere]);

  // Update available levels when subject changes
  useEffect(() => {
    if (selectedDiplome && matiere) {
      const filteredFlashcards = allFlashcards.filter(
        card => 
          getStandardizedDiplome(card.diplome) === selectedDiplome && 
          getStandardizedMatiere(card.matiere) === getStandardizedMatiere(matiere)
      );
      
      const levels = getUniqueLevels(filteredFlashcards);
      setAvailableNiveaux(levels);
      
      // Reset niveau if it's no longer available
      if (niveau && !levels.includes(getStandardizedNiveau(niveau))) {
        setNiveau('');
      }
      
      // Pre-select level if only one is available
      if (levels.length === 1 && !niveau) {
        setNiveau(levels[0]);
      }
    } else {
      setAvailableNiveaux([]);
      setNiveau('');
    }
  }, [selectedDiplome, matiere, allFlashcards, niveau, setNiveau]);

  const handleStartTraining = () => {
    if (matiere && niveau) {
      onStartTraining();
    }
  };

  const isStartDisabled = !matiere || !niveau;

  return (
    <Card className="w-full shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-indigo-700">Configure ton entraînement</CardTitle>
        <CardDescription>
          Choisis les paramètres pour commencer à t'entraîner
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Diplôme</label>
          <Select
            value={selectedDiplome}
            onValueChange={setSelectedDiplome}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un diplôme" />
            </SelectTrigger>
            <SelectContent>
              {availableDiplomes.map(diplome => (
                <SelectItem key={diplome} value={diplome}>
                  {diplome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Matière</label>
          <Select
            value={matiere ? getStandardizedMatiere(matiere) : ''}
            onValueChange={setMatiere}
            disabled={availableMatieres.length === 0}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner une matière" />
            </SelectTrigger>
            <SelectContent>
              {availableMatieres.map(subject => (
                <SelectItem key={subject} value={subject}>
                  {subject}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Niveau</label>
          <Select
            value={niveau ? getStandardizedNiveau(niveau) : ''}
            onValueChange={setNiveau}
            disabled={availableNiveaux.length === 0}
          >
            <SelectTrigger>
              <SelectValue placeholder="Sélectionner un niveau" />
            </SelectTrigger>
            <SelectContent>
              {availableNiveaux.map(level => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Nombre de questions</label>
          <div className="flex justify-between items-center">
            {[5, 10, 15, 20].map(num => (
              <motion.div
                key={num}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge
                  className={`px-4 py-2 cursor-pointer ${
                    nombreQuestions === num
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  onClick={() => setNombreQuestions(num)}
                >
                  {num}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          className="w-full" 
          size="lg"
          disabled={isStartDisabled}
          onClick={handleStartTraining}
        >
          Commencer l'entraînement
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TrainingSelector;
