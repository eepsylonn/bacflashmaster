
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Trophy, TrendingUp, TrendingDown, Equal, Award, Star, BookOpen, ChevronRight, Sparkles } from 'lucide-react';
import { TrainingResult as TrainingResultType } from '@/types';
import confetti from 'canvas-confetti';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Mascot from '@/components/Mascot';
import AnimatedBackground from '@/components/AnimatedBackground';

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
      const duration = 4 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#2A9DF4', '#1A365D', '#FFC300']
        });
        confetti({
          particleCount: 3,
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
    if (improvementRate === null) return { color: 'bg-blue-100 text-blue-700', icon: <Equal className="w-5 h-5 mr-1" /> };
    
    if (improvementRate > 5) return { color: 'bg-green-100 text-green-700', icon: <TrendingUp className="w-5 h-5 mr-1" /> };
    if (improvementRate < -5) return { color: 'bg-red-100 text-red-700', icon: <TrendingDown className="w-5 h-5 mr-1" /> };
    return { color: 'bg-yellow-100 text-yellow-700', icon: <Equal className="w-5 h-5 mr-1" /> };
  };

  const improvementDisplay = getImprovementDisplay();

  // Obtenir un message motivant en fonction de la note
  const getMotivationalMessage = () => {
    if (result.note >= 16) {
      return {
        text: "Excellent ! Continue comme ça !",
        icon: <Sparkles className="h-5 w-5 text-yellow-500 mr-2" />,
        mascotColor: 'success' as const
      };
    } else if (result.note >= 12) {
      return {
        text: "Bon travail ! Tu es sur la bonne voie.",
        icon: <Award className="h-5 w-5 text-blue-500 mr-2" />,
        mascotColor: 'normal' as const
      };
    } else if (result.note >= 8) {
      return {
        text: "Continue tes efforts, tu progresses !",
        icon: <BookOpen className="h-5 w-5 text-purple-500 mr-2" />,
        mascotColor: 'normal' as const
      };
    } else {
      return {
        text: "Ne lâche pas, la persévérance paie toujours !",
        icon: <Star className="h-5 w-5 text-orange-500 mr-2" />,
        mascotColor: 'warning' as const
      };
    }
  };

  const motivationalMessage = getMotivationalMessage();

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-app-blue-light/10 to-indigo-50 p-4 relative overflow-hidden">
      <AnimatedBackground 
        type={result.note >= 16 ? 'confetti' : 'bubble'} 
        color={result.note >= 16 ? 'blue' : 'purple'} 
        intensity="low"
      />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="z-10 w-full max-w-md"
      >
        <Card className="p-8 border-2 border-app-blue-light shadow-xl rounded-2xl bg-white/90 backdrop-blur-sm overflow-hidden relative">
          <motion.div 
            className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-yellow-200/40 to-yellow-400/20 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: 360,
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-blue-200/30 to-indigo-300/10 rounded-full"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: -360,
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          <motion.div variants={itemVariants} className="text-center mb-8 relative z-10">
            <div className="flex items-center justify-center mb-2">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotateZ: [0, 10, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror"
                }}
                className="mr-3"
              >
                <Trophy className="w-8 h-8 text-yellow-500" />
              </motion.div>
              <h1 className="text-3xl font-bold text-app-blue-dark bg-clip-text text-transparent bg-gradient-to-r from-app-blue-dark via-app-blue-medium to-app-blue-dark">
                Résultat
              </h1>
            </div>
            <div className="text-gray-500 text-sm">{new Date(result.date).toLocaleDateString()} - {result.matiere}</div>
          </motion.div>

          <div className="space-y-6 relative z-10">
            <motion.div 
              variants={itemVariants} 
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl flex flex-col items-center shadow-sm border border-blue-100 relative overflow-hidden group">
                <motion.div 
                  className="absolute inset-0 bg-blue-500/5"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="text-sm text-gray-500 mb-1 relative z-10">Note</span>
                <motion.span 
                  className="text-3xl font-bold text-app-blue-dark relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ 
                    duration: 2, 
                    delay: 1,
                    repeat: 1,
                    repeatType: "reverse"
                  }}
                >
                  {result.note.toFixed(2)}/20
                </motion.span>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl flex flex-col items-center shadow-sm border border-purple-100 relative overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-purple-500/5"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.3, 0.5]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
                <span className="text-sm text-gray-500 mb-1 relative z-10">Score</span>
                <motion.span 
                  className="text-3xl font-bold text-purple-700 relative z-10"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ 
                    duration: 2, 
                    delay: 1.3,
                    repeat: 1,
                    repeatType: "reverse"
                  }}
                >
                  {result.score}/{result.nombreQuestions}
                </motion.span>
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants} 
              className="bg-gradient-to-r from-gray-50 to-slate-50 p-4 rounded-xl flex items-center justify-between shadow-sm border border-gray-100"
            >
              <span className="text-gray-600">Pourcentage</span>
              <motion.div 
                className="flex items-center"
                animate={{ 
                  x: [0, 3, -3, 3, 0],
                  y: [0, -2, 2, -2, 0]
                }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.5,
                  repeat: 1
                }}
              >
                <span className="font-semibold text-lg bg-clip-text text-transparent bg-gradient-to-r from-app-blue-dark to-app-blue-medium">
                  {result.pourcentage.toFixed(1)}%
                </span>
              </motion.div>
            </motion.div>

            {improvementRate !== null && (
              <motion.div 
                variants={itemVariants} 
                className={`p-4 rounded-xl flex items-center justify-between ${improvementDisplay.color}`}
              >
                <span>Par rapport à ta moyenne</span>
                <motion.div 
                  className="font-semibold text-lg flex items-center"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 2,
                    repeat: 1
                  }}
                >
                  {improvementDisplay.icon}
                  {improvementRate > 0 ? '+' : ''}{improvementRate.toFixed(1)}%
                </motion.div>
              </motion.div>
            )}
            
            <motion.div 
              variants={itemVariants} 
              className="border-t border-gray-200 pt-4 mt-4"
            >
              <div className="flex items-center justify-center mb-4 gap-3">
                <Mascot size="md" animation="bounce" color={motivationalMessage.mascotColor} />
                <div className={`p-3 rounded-lg ${
                  result.note >= 16 
                    ? 'bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800' 
                    : result.note >= 12 
                    ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800'
                    : result.note >= 8 
                    ? 'bg-purple-100 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-800'
                    : 'bg-orange-100 dark:bg-orange-900/30 border border-orange-200 dark:border-orange-800'
                }`}>
                  <div className="flex items-center">
                    {motivationalMessage.icon}
                    <span className={`font-medium ${
                      result.note >= 16 
                        ? 'text-green-800 dark:text-green-200' 
                        : result.note >= 12 
                        ? 'text-blue-800 dark:text-blue-200'
                        : result.note >= 8 
                        ? 'text-purple-800 dark:text-purple-200'
                        : 'text-orange-800 dark:text-orange-200'
                    }`}>
                      {motivationalMessage.text}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 mt-6">
              <Button 
                onClick={() => navigate('/historique')} 
                variant="outline" 
                className="flex-1 border-app-blue-medium text-app-blue-dark hover:bg-app-blue-light/10 relative overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 bg-app-blue-light/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                  style={{ transformOrigin: 'left' }}
                />
                Historique
              </Button>
              <Button 
                onClick={onClose} 
                className="flex-1 bg-gradient-to-r from-app-blue-medium to-app-blue-dark hover:opacity-90 relative overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 bg-white/10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                  style={{ transformOrigin: 'left' }}
                />
                Continuer <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default TrainingResultPage;
