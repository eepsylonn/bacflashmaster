
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Progress } from '@/components/ui/progress';
import { Check, X, Trophy, Target, Zap } from 'lucide-react';

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
  const [progressPercent, setProgressPercent] = useState(0);
  const [scorePercent, setScorePercent] = useState(0);
  
  // Animation de la progression
  useEffect(() => {
    // Petite animation pour un effet plus fluide
    const timer = setTimeout(() => {
      setProgressPercent((currentIndex / totalQuestions) * 100);
      setScorePercent(currentIndex > 0 ? (score / currentIndex) * 100 : 0);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [currentIndex, totalQuestions, score]);
  
  // Détermine la couleur en fonction du pourcentage de score
  const getScoreColor = () => {
    if (scorePercent >= 80) return "text-green-600";
    if (scorePercent >= 60) return "text-yellow-600";
    if (scorePercent >= 40) return "text-orange-600";
    return "text-red-600";
  };
  
  // Détermine l'icône de performance
  const getPerformanceIcon = () => {
    if (scorePercent >= 80) return <Trophy className="w-5 h-5 text-yellow-500" />;
    if (scorePercent >= 60) return <Target className="w-5 h-5 text-green-500" />;
    if (scorePercent >= 40) return <Zap className="w-5 h-5 text-blue-500" />;
    return <Zap className="w-5 h-5 text-gray-500" />;
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-8 space-y-3 bg-white p-5 rounded-xl shadow-md border border-gray-100"
    >
      <div className="flex justify-between items-center">
        <motion.span 
          className="text-lg font-medium flex items-center gap-2"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <span className="bg-app-blue-light/20 text-app-blue-dark px-3 py-1.5 rounded-lg font-semibold">
            Question {currentIndex + 1} / {totalQuestions}
          </span>
        </motion.span>
        
        <div className="flex items-center gap-3">
          <motion.span 
            className="text-lg font-medium flex items-center gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg flex items-center font-semibold">
              <Check className="w-5 h-5 mr-1.5" /> {score}
            </span>
          </motion.span>
          
          <motion.span 
            className="text-lg font-medium flex items-center gap-2"
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-lg flex items-center font-semibold">
              <X className="w-5 h-5 mr-1.5" /> {currentIndex - score}
            </span>
          </motion.span>
        </div>
      </div>
      
      <div className="relative pt-1">
        <div className="flex items-center justify-between mb-1">
          <div className="text-xs font-semibold inline-block text-app-blue-dark">
            Progression
          </div>
          <div className="text-xs font-semibold inline-block text-app-blue-dark">
            {Math.round(progressPercent)}%
          </div>
        </div>
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Progress value={progressPercent} className="h-3 bg-gray-200" />
        </motion.div>
      </div>
      
      {currentIndex > 0 && (
        <motion.div 
          className={`text-sm font-medium flex justify-end items-center ${getScoreColor()}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {getPerformanceIcon()}
          <span className="ml-2">Performance actuelle: <span className="font-bold ml-1">{scorePercent.toFixed(0)}%</span></span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default TrainingProgress;
