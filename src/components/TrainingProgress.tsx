
import { Progress } from '@/components/ui/progress';

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
  
  return (
    <div className="mb-6 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Question {currentIndex + 1} / {totalQuestions}</span>
        <span>Score: {score} / {currentIndex}</span>
      </div>
      <Progress value={progressPercent} className="h-2" />
      
      {currentIndex > 0 && (
        <div className="text-sm text-gray-500 flex justify-end">
          Performance actuelle: {scorePercent.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

export default TrainingProgress;
