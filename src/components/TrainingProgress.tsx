
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award } from 'lucide-react';

interface TrainingProgressProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
}

const TrainingProgress = ({ currentIndex, totalQuestions, score }: TrainingProgressProps) => {
  const progress = Math.round((currentIndex / totalQuestions) * 100);
  const incorrect = currentIndex - score;
  const successRate = currentIndex > 0 ? Math.round((score / currentIndex) * 100) : 0;
  
  return (
    <div className="mb-8 relative bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-center mb-2">
        <motion.div 
          className="text-gray-700 dark:text-gray-200 font-medium"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          Progression
        </motion.div>
        <motion.div 
          className="text-sm bg-app-blue-light/20 text-app-blue-dark dark:text-blue-300 px-3 py-1 rounded-full"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Question {currentIndex + 1} / {totalQuestions}
        </motion.div>
      </div>
      
      <div className="mb-4 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden h-3 shadow-inner"
        >
          <Progress value={progress} className="h-3" />
        </motion.div>
        
        {progress > 0 && progress < 100 && (
          <motion.div 
            className="absolute top-0 h-3 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              left: `${progress}%`,
            }}
            style={{ transform: 'translateX(-50%)' }}
          >
            <motion.div 
              className="w-5 h-5 bg-app-blue-medium rounded-full border-2 border-white flex items-center justify-center"
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            >
              <motion.div 
                className="w-2 h-2 bg-white rounded-full"
                animate={{ 
                  scale: [1, 0.8, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.2
                }}
              />
            </motion.div>
          </motion.div>
        )}
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
            className="flex justify-center mt-3 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <Award className={`h-4 w-4 mr-1 ${successRate >= 70 ? 'text-yellow-500' : 'text-gray-400'}`} />
            <div className="text-sm text-gray-600 dark:text-gray-300">
              Taux de réussite: 
              <motion.span 
                className={`font-medium ml-1 ${
                  successRate >= 80 ? 'text-green-600 dark:text-green-400' : 
                  successRate >= 60 ? 'text-blue-600 dark:text-blue-400' : 
                  successRate >= 40 ? 'text-orange-600 dark:text-orange-400' : 'text-red-600 dark:text-red-400'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={successRate}
              >
                {successRate}%
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TrainingProgress;
