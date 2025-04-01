
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Trophy, TrendingUp, TrendingDown, Equals } from 'lucide-react';
import { TrainingResult as TrainingResultType } from '@/types';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';

interface TrainingResultPageProps {
  result: TrainingResultType;
  improvementRate: number | null;
  onClose: () => void;
}

const TrainingResultPage = ({ result, improvementRate, onClose }: TrainingResultPageProps) => {
  const navigate = useNavigate();
  
  // Lancer confetti pour une bonne note
  useEffect(() => {
    if (result.note >= 12) {
      const duration = 3 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#2A9DF4', '#1A365D', '#FFC300']
        });
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#2A9DF4', '#1A365D', '#FFC300']
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      
      frame();
    }
  }, [result.note]);

  // Déterminer couleur et icône basées sur l'amélioration
  const getImprovementDisplay = () => {
    if (improvementRate === null) return { color: 'bg-blue-100 text-blue-700', icon: <Equals className="w-5 h-5 mr-1" /> };
    
    if (improvementRate > 5) return { color: 'bg-green-100 text-green-700', icon: <TrendingUp className="w-5 h-5 mr-1" /> };
    if (improvementRate < -5) return { color: 'bg-red-100 text-red-700', icon: <TrendingDown className="w-5 h-5 mr-1" /> };
    return { color: 'bg-yellow-100 text-yellow-700', icon: <Equals className="w-5 h-5 mr-1" /> };
  };

  const improvementDisplay = getImprovementDisplay();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-app-blue-light/10 to-indigo-50 p-4">
      <Card className="w-full max-w-md p-8 border-2 border-app-blue-light shadow-xl rounded-2xl bg-white">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-app-blue-dark mb-2 flex items-center justify-center">
            <Trophy className="w-8 h-8 text-yellow-500 mr-2 animate-bounce" />
            Résultat
          </h1>
          <div className="text-gray-500 text-sm">{new Date(result.date).toLocaleDateString()} - {result.matiere}</div>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-xl flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-1">Note</span>
              <span className="text-3xl font-bold text-app-blue-dark">{result.note.toFixed(2)}/20</span>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl flex flex-col items-center">
              <span className="text-sm text-gray-500 mb-1">Score</span>
              <span className="text-3xl font-bold text-purple-700">{result.score}/{result.nombreQuestions}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-between">
            <span className="text-gray-600">Pourcentage</span>
            <span className="font-semibold text-lg">{result.pourcentage.toFixed(1)}%</span>
          </div>

          {improvementRate !== null && (
            <div className={`p-4 rounded-xl flex items-center justify-between ${improvementDisplay.color}`}>
              <span>Par rapport à ta moyenne</span>
              <span className="font-semibold text-lg flex items-center">
                {improvementDisplay.icon}
                {improvementRate > 0 ? '+' : ''}{improvementRate.toFixed(1)}%
              </span>
            </div>
          )}
          
          <div className="border-t border-gray-200 pt-4 mt-4">
            <p className="text-center text-gray-600 mb-4">
              {result.note >= 16 && "Excellent ! Continue comme ça !"}
              {result.note >= 12 && result.note < 16 && "Bon travail ! Tu es sur la bonne voie."}
              {result.note >= 8 && result.note < 12 && "Continue tes efforts, tu progresses !"}
              {result.note < 8 && "Ne lâche pas, la persévérance paie toujours !"}
            </p>
          </div>

          <div className="flex gap-3 mt-6">
            <Button 
              onClick={() => navigate('/historique')} 
              variant="outline" 
              className="flex-1 border-app-blue-medium text-app-blue-dark hover:bg-app-blue-light/10"
            >
              Historique
            </Button>
            <Button 
              onClick={onClose} 
              className="flex-1 bg-gradient-to-r from-app-blue-medium to-app-blue-dark hover:opacity-90"
            >
              Continuer
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default TrainingResultPage;
