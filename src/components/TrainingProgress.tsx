
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';

interface TrainingProgressProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
}

const TrainingProgress = ({ currentIndex, totalQuestions, score }: TrainingProgressProps) => {
  const progress = Math.round((currentIndex / totalQuestions) * 100);
  const incorrect = currentIndex - score;
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-2">
        <motion.div 
          className="text-gray-700 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Progression
        </motion.div>
        <motion.div 
          className="text-sm bg-app-blue-light/20 text-app-blue-dark px-3 py-1 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Question {currentIndex + 1} / {totalQuestions}
        </motion.div>
      </div>
      
      <div className="mb-4">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
        >
          <Progress value={progress} className="h-3" />
        </motion.div>
      </div>
      
      <div className="flex justify-between">
        <motion.div 
          className="flex items-center space-x-1"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <CheckCircle className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{score}</span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center space-x-1"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center bg-red-100 text-red-700 px-3 py-1 rounded-full">
            <XCircle className="h-4 w-4 mr-1" />
            <span className="text-sm font-medium">{incorrect}</span>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.div 
            className="flex justify-center mt-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="text-sm text-gray-500">
              Taux de réussite: <span className="font-medium">{Math.round((score / currentIndex) * 100)}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingProgress;
