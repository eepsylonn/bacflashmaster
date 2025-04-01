
import { Progress } from '@/components/ui/progress';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Award, ArrowRight, TrendingUp, Sparkles, Target } from 'lucide-react';

interface TrainingProgressProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
}

const TrainingProgress = ({ currentIndex, totalQuestions, score }: TrainingProgressProps) => {
  const progress = Math.round((currentIndex / totalQuestions) * 100);
  
  // S'assurer que les valeurs incorrectes ne sont jamais négatives
  const safeScore = Math.max(0, score);
  const incorrect = Math.max(0, currentIndex - safeScore);
  
  // Assurer que le taux de réussite est entre 0% et 100%
  const successRate = currentIndex > 0 
    ? Math.min(100, Math.max(0, Math.round((safeScore / currentIndex) * 100))) 
    : 0;
  
  return (
    <motion.div 
      className="mb-8 relative bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex justify-between items-center mb-3">
        <motion.div 
          className="text-gray-700 dark:text-gray-200 font-medium flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Target className="h-4 w-4 mr-2 text-app-blue-medium" />
          Progression
        </motion.div>
        <motion.div 
          className="text-sm bg-app-blue-light/20 text-app-blue-dark dark:text-blue-300 px-3 py-1 rounded-full flex items-center"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span>Question </span>
          <motion.span 
            className="mx-1 font-semibold"
            key={currentIndex}
            initial={{ scale: 1.5, color: "#3b82f6" }}
            animate={{ scale: 1, color: "currentColor" }}
            transition={{ duration: 0.3 }}
          >
            {currentIndex + 1}
          </motion.span>
          <span>/ {totalQuestions}</span>
        </motion.div>
      </div>
      
      <div className="mb-4 relative">
        {/* Background track with shadow for better visibility */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden h-4 shadow-inner"
        >
          {/* Actual progress bar */}
          <motion.div 
            className="h-full bg-gradient-to-r from-app-blue-light to-app-blue-medium rounded-full relative overflow-hidden"
            style={{ width: `${progress}%` }}
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Shine effect */}
            <motion.div 
              className="absolute inset-0 bg-white/20" 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                delay: 0.5
              }}
            />
          </motion.div>
        </motion.div>
        
        {/* Animated dot showing current position */}
        {progress > 0 && progress < 100 && (
          <motion.div 
            className="absolute top-0 h-4 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1, 
              left: `${progress}%`,
            }}
            style={{ transform: 'translateX(-50%)' }}
          >
            <motion.div 
              className="w-6 h-6 bg-app-blue-medium rounded-full border-2 border-white flex items-center justify-center shadow-lg"
              animate={{ 
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 rgba(59, 130, 246, 0.4)",
                  "0 0 10px rgba(59, 130, 246, 0.6)",
                  "0 0 0 rgba(59, 130, 246, 0.4)"
                ]
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
      
      <div className="flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center bg-gradient-to-r from-green-100 to-green-50 dark:from-green-900/50 dark:to-green-800/30 text-green-700 dark:text-green-300 px-4 py-2 rounded-full shadow-sm">
            <CheckCircle className="h-5 w-5 mr-2" />
            <motion.span 
              className="text-sm font-medium"
              key={safeScore}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 5 }}
            >
              {safeScore}
            </motion.span>
          </div>
        </motion.div>
        
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center bg-gradient-to-r from-red-100 to-red-50 dark:from-red-900/50 dark:to-red-800/30 text-red-700 dark:text-red-300 px-4 py-2 rounded-full shadow-sm">
            <XCircle className="h-5 w-5 mr-2" />
            <motion.span 
              className="text-sm font-medium"
              key={incorrect}
              initial={{ scale: 1.5 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 5 }}
            >
              {incorrect}
            </motion.span>
          </div>
        </motion.div>
      </div>
      
      <AnimatePresence>
        {currentIndex > 0 && (
          <motion.div 
            className="flex justify-center mt-4 items-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
          >
            <div className="relative flex items-center bg-gray-50 dark:bg-gray-700/50 px-4 py-2 rounded-full shadow-sm">
              {successRate >= 70 && (
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ 
                    background: "linear-gradient(to right, rgba(250, 204, 21, 0.1), rgba(250, 204, 21, 0.3), rgba(250, 204, 21, 0.1))" 
                  }}
                />
              )}
              
              <motion.div
                animate={successRate >= 70 ? { 
                  rotate: [0, 10, -10, 10, 0],
                } : {}}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >
                <Award className={`h-5 w-5 mr-2 ${
                  successRate >= 70 ? 'text-yellow-500' : 'text-gray-400'
                }`} />
              </motion.div>
              
              <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                <span>Taux de réussite:</span>
                <motion.div 
                  className={`font-medium ml-2 flex items-center ${
                    successRate >= 80 ? 'text-green-600 dark:text-green-400' : 
                    successRate >= 60 ? 'text-blue-600 dark:text-blue-400' : 
                    successRate >= 40 ? 'text-orange-600 dark:text-orange-400' : 'text-red-600 dark:text-red-400'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={successRate}
                >
                  <motion.span
                    initial={{ scale: 1.3 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 5 }}
                  >
                    {successRate}%
                  </motion.span>
                  
                  {currentIndex > 1 && (
                    <motion.div 
                      className="ml-2"
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      {successRate >= 50 ? (
                        <TrendingUp size={14} className="text-green-500" />
                      ) : (
                        <ArrowRight size={14} className="text-orange-500" />
                      )}
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Sparkles animation at milestones */}
      <AnimatePresence>
        {[25, 50, 75, 100].includes(progress) && (
          <motion.div 
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: [0, -20],
                }}
                transition={{
                  duration: 1 + Math.random(),
                  delay: Math.random(),
                  repeat: 1,
                  repeatType: "reverse"
                }}
              >
                <Sparkles 
                  size={8 + Math.random() * 12} 
                  className="text-yellow-400" 
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default TrainingProgress;
