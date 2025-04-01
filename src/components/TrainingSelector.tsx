
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { useState } from 'react';
import { getMatieres } from '@/data/flashcards';
import { NombreQuestions } from '@/types';
import { BookOpen, Users, Book, ListChecks } from 'lucide-react';

interface TrainingSelectorProps {
  matiere: string | undefined;
  setMatiere: (matiere: string) => void;
  niveau: 'premiere' | 'terminale' | undefined;
  setNiveau: (niveau: 'premiere' | 'terminale') => void;
  nombreQuestions: NombreQuestions;
  setNombreQuestions: (nombre: NombreQuestions) => void;
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
  const matieres = getMatieres();
  const nombreQuestionsOptions: NombreQuestions[] = [5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  
  // Find the current slider index based on the selected number of questions
  const currentSliderIndex = nombreQuestionsOptions.indexOf(nombreQuestions) !== -1 
    ? nombreQuestionsOptions.indexOf(nombreQuestions) 
    : 2; // Default to 20 questions (index 2)
  
  const [sliderValue, setSliderValue] = useState<number[]>([currentSliderIndex]);
  
  const handleSliderChange = (values: number[]) => {
    const value = values[0];
    const questionsCount = nombreQuestionsOptions[value];
    setSliderValue([value]);
    setNombreQuestions(questionsCount);
  };

  return (
    <Card className="p-6 shadow-lg bg-white rounded-xl border-2 border-app-blue-light">
      <h2 className="text-2xl font-semibold mb-6 text-center text-app-blue-dark flex items-center justify-center gap-2">
        <BookOpen className="h-6 w-6 text-app-blue-medium" />
        <span>Configurer l'entraînement</span>
      </h2>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <Label htmlFor="matiere" className="flex items-center gap-2 text-lg">
            <Book className="h-5 w-5 text-app-blue-medium" />
            <span>Matière</span>
          </Label>
          <Select 
            value={matiere} 
            onValueChange={(value) => setMatiere(value)}
          >
            <SelectTrigger id="matiere" className="h-12 rounded-lg border-app-blue-light">
              <SelectValue placeholder="Sélectionner une matière" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              {matieres.map(m => (
                <SelectItem key={m} value={m} className="cursor-pointer hover:bg-blue-50">
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="niveau" className="flex items-center gap-2 text-lg">
            <Users className="h-5 w-5 text-app-blue-medium" />
            <span>Niveau</span>
          </Label>
          <Select 
            value={niveau} 
            onValueChange={(value: 'premiere' | 'terminale') => setNiveau(value)}
          >
            <SelectTrigger id="niveau" className="h-12 rounded-lg border-app-blue-light">
              <SelectValue placeholder="Sélectionner un niveau" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="premiere" className="cursor-pointer hover:bg-blue-50">Première</SelectItem>
              <SelectItem value="terminale" className="cursor-pointer hover:bg-blue-50">Terminale</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-3">
          <Label htmlFor="nombre-questions" className="flex items-center gap-2 text-lg">
            <ListChecks className="h-5 w-5 text-app-blue-medium" />
            <span>Nombre de questions: {nombreQuestions}</span>
          </Label>
          
          <div className="pt-4 px-2">
            <Slider
              id="nombre-questions"
              min={0}
              max={nombreQuestionsOptions.length - 1}
              step={1}
              value={sliderValue}
              onValueChange={handleSliderChange}
              className="py-4"
            />
            
            <div className="flex justify-between text-xs text-gray-500 mt-2 px-1">
              {nombreQuestionsOptions.map((n, index) => (
                <span 
                  key={n} 
                  className={`text-center ${index === sliderValue[0] ? 'text-app-blue-dark font-bold' : ''}`}
                  style={{ width: `${100 / nombreQuestionsOptions.length}%`, textAlign: 'center' }}
                >
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
        
        <Button 
          onClick={onStartTraining} 
          className="w-full h-14 bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg rounded-lg transform transition hover:scale-105"
        >
          Commencer l'entraînement
        </Button>
      </div>
    </Card>
  );
};

export default TrainingSelector;
