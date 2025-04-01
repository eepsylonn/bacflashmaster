
import { TrainingResult } from '@/types';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface HistoryListProps {
  history: TrainingResult[];
}

const HistoryList = ({ history }: HistoryListProps) => {
  if (history.length === 0) {
    return (
      <div className="text-center p-8 text-gray-500">
        Aucun historique d'entraînement disponible.
        <p className="mt-2">Commencez un entraînement pour voir vos résultats ici.</p>
      </div>
    );
  }

  return (
    <ScrollArea className="h-[500px] pr-4">
      <div className="space-y-4">
        {history.map((result) => (
          <Card key={result.id} className="p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <h3 className="font-medium text-lg">{result.matiere}</h3>
                <p className="text-sm text-gray-500 capitalize">{result.niveau}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-app-blue-dark">
                  {result.note.toFixed(2)}/20
                </div>
                <p className="text-sm text-gray-500">
                  Score: {result.score}/{result.nombreQuestions} ({result.pourcentage.toFixed(0)}%)
                </p>
              </div>
            </div>
            <div className="mt-2 text-sm text-gray-500">
              {new Date(result.date).toLocaleDateString()} {new Date(result.date).toLocaleTimeString()}
            </div>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
};

export default HistoryList;
