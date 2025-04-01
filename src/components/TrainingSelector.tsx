
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { getMatieres } from '@/data/flashcards';
import { NombreQuestions } from '@/types';

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
  const nombreQuestionsOptions: NombreQuestions[] = [5, 20, 50, 100, 200];

  return (
    <Card className="p-6 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Configurer l'entraînement</h2>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="matiere">Matière</Label>
          <Select 
            value={matiere} 
            onValueChange={(value) => setMatiere(value)}
          >
            <SelectTrigger id="matiere">
              <SelectValue placeholder="Sélectionner une matière" />
            </SelectTrigger>
            <SelectContent>
              {matieres.map(m => (
                <SelectItem key={m} value={m}>
                  {m}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="niveau">Niveau</Label>
          <Select 
            value={niveau} 
            onValueChange={(value: 'premiere' | 'terminale') => setNiveau(value)}
          >
            <SelectTrigger id="niveau">
              <SelectValue placeholder="Sélectionner un niveau" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="premiere">Première</SelectItem>
              <SelectItem value="terminale">Terminale</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Nombre de questions</Label>
          <RadioGroup 
            value={nombreQuestions.toString()} 
            onValueChange={(value) => setNombreQuestions(parseInt(value) as NombreQuestions)}
            className="flex flex-wrap gap-2"
          >
            {nombreQuestionsOptions.map(n => (
              <div key={n} className="flex items-center space-x-1">
                <RadioGroupItem value={n.toString()} id={`n-${n}`} />
                <Label htmlFor={`n-${n}`}>{n}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        
        <Button onClick={onStartTraining} className="w-full bg-app-blue-medium hover:bg-app-blue-dark">
          Commencer l'entraînement
        </Button>
      </div>
    </Card>
  );
};

export default TrainingSelector;
