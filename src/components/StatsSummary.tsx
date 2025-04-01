
import { Card } from '@/components/ui/card';

interface StatsSummaryProps {
  averageNote: number;
  improvementRate: number | null;
  weakestSubject: { subject: string; average: number } | null;
}

const StatsSummary = ({ 
  averageNote, 
  improvementRate, 
  weakestSubject 
}: StatsSummaryProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card className="p-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-medium text-gray-500">Note moyenne</h3>
        <div className="mt-2 text-3xl font-bold text-app-blue-dark">
          {averageNote.toFixed(2)}/20
        </div>
        <p className="mt-1 text-sm text-gray-500">
          {averageNote < 8 && "Il faut continuer à travailler !"}
          {averageNote >= 8 && averageNote < 12 && "C'est pas mal, mais tu peux faire mieux !"}
          {averageNote >= 12 && averageNote < 16 && "Bon travail !"}
          {averageNote >= 16 && "Excellent !"}
        </p>
      </Card>
      
      <Card className="p-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-medium text-gray-500">Progression</h3>
        {improvementRate !== null ? (
          <>
            <div className={`mt-2 text-3xl font-bold ${improvementRate >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {improvementRate >= 0 ? '+' : ''}{improvementRate.toFixed(1)}%
            </div>
            <p className="mt-1 text-sm text-gray-500">
              {improvementRate >= 0 ? "Tu t'améliores !" : "Continue tes efforts !"}
            </p>
          </>
        ) : (
          <div className="mt-2 text-xl text-gray-400">
            Pas assez de données
          </div>
        )}
      </Card>
      
      <Card className="p-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-lg font-medium text-gray-500">Point à améliorer</h3>
        {weakestSubject ? (
          <>
            <div className="mt-2 text-2xl font-bold text-orange-500">
              {weakestSubject.subject}
            </div>
            <p className="mt-1 text-sm text-gray-500">
              Note moyenne: {weakestSubject.average.toFixed(2)}/20
            </p>
          </>
        ) : (
          <div className="mt-2 text-xl text-gray-400">
            Pas assez de données
          </div>
        )}
      </Card>
    </div>
  );
};

export default StatsSummary;
