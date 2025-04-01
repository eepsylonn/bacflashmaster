
import { Progress } from '@/components/ui/progress';
import { Check, X } from 'lucide-react';

interface TrainingProgressProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
}

const TrainingProgress = ({
  currentIndex,
  totalQuestions,
  score
}: TrainingProgressProps) => {
  const progressPercent = (currentIndex / totalQuestions) * 100;
  const scorePercent = totalQuestions > 0 ? (score / currentIndex) * 100 : 0;
  
  // Determine color based on score percentage
  const getScoreColor = () => {
    if (scorePercent >= 80) return "text-green-600";
    if (scorePercent >= 60) return "text-yellow-600";
    if (scorePercent >= 40) return "text-orange-600";
    return "text-red-600";
  };
  
  return (
    <div className="mb-8 space-y-3 bg-white p-5 rounded-xl shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-lg font-medium flex items-center gap-2">
          <span className="bg-app-blue-light/20 text-app-blue-dark px-2 py-1 rounded-md">
            Question {currentIndex + 1} / {totalQuestions}
          </span>
        </span>
        
        <span className="text-lg font-medium flex items-center gap-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md flex items-center">
            <Check className="w-4 h-4 mr-1" /> {score}
          </span>
          <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md flex items-center">
            <X className="w-4 h-4 mr-1" /> {currentIndex - score}
          </span>
        </span>
      </div>
      
      <Progress value={progressPercent} className="h-3 bg-gray-200" />
      
      {currentIndex > 0 && (
        <div className={`text-sm font-medium flex justify-end ${getScoreColor()}`}>
          Performance actuelle: <span className="font-bold ml-1">{scorePercent.toFixed(0)}%</span>
        </div>
      )}
    </div>
  );
};

export default TrainingProgress;
