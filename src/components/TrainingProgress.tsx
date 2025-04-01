
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Check, X, Award, Target } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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

  const getProgressColorClass = () => {
    if (progressPercent >= 80) return "bg-emerald-500";
    if (progressPercent >= 50) return "bg-blue-500";
    if (progressPercent >= 25) return "bg-amber-500";
    return "bg-indigo-500";
  };
  
  return (
    <motion.div 
      className="mb-8 space-y-4 bg-white p-5 rounded-xl shadow-lg overflow-hidden"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
        <motion.div 
          className="flex items-center gap-3"
          whileHover={{ scale: 1.03 }}
        >
          <motion.div 
            className="bg-gradient-to-r from-indigo-400 to-purple-500 p-3 rounded-full"
            initial={{ rotate: 0 }}
            animate={{ rotate: progressPercent >= 100 ? 360 : 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <Target className="w-5 h-5 text-white" />
          </motion.div>
          <div>
            <span className="text-sm text-gray-500">Progression</span>
            <div className="text-lg font-bold flex items-baseline gap-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-indigo-700"
                >
                  Question {currentIndex + 1}
                </motion.span>
              </AnimatePresence>
              <span className="text-gray-400">/ {totalQuestions}</span>
            </div>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-3">
          <motion.div 
            className="flex items-center gap-2 bg-green-100 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Check className="w-4 h-4 text-green-600" />
            <AnimatePresence mode="wait">
              <motion.span 
                key={score}
                className="font-bold text-green-700"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {score}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            className="flex items-center gap-2 bg-red-100 px-3 py-2 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-4 h-4 text-red-600" />
            <AnimatePresence mode="wait">
              <motion.span 
                key={currentIndex - score}
                className="font-bold text-red-700"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                {currentIndex - score}
              </motion.span>
            </AnimatePresence>
          </motion.div>
          
          {currentIndex > 0 && (
            <motion.div 
              className="flex items-center gap-2 bg-blue-100 px-3 py-2 rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Award className="w-4 h-4 text-blue-600" />
              <AnimatePresence mode="wait">
                <motion.span 
                  key={Math.round(scorePercent)}
                  className={`font-bold ${getScoreColor()}`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  {scorePercent.toFixed(0)}%
                </motion.span>
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
      
      <div className="relative pt-2">
        <Progress 
          value={progressPercent} 
          className="h-4 bg-gray-100 rounded-full overflow-hidden" 
        />
        
        <motion.div 
          className={`absolute left-0 top-0 h-4 ${getProgressColorClass()} rounded-full`}
          style={{ width: `${progressPercent}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ 
            duration: 0.5,
            ease: "easeOut"
          }}
        >
          {progressPercent >= 25 && (
            <motion.div 
              className="absolute inset-0 overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div 
                className="absolute inset-0 bg-white/30"
                animate={{ 
                  x: ["-100%", "100%"], 
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: "50%" }}
              />
            </motion.div>
          )}
        </motion.div>
      </div>
      
      {currentIndex > 0 && (
        <div className="flex justify-between text-sm mt-1">
          <span className="text-gray-500">0%</span>
          <span className="text-gray-500">50%</span>
          <span className="text-gray-500">100%</span>
        </div>
      )}
    </motion.div>
  );
};

export default TrainingProgress;
