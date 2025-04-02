
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, XCircle, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

interface WriteAnswerProps {
  onSubmit: (answer: string, isCorrect: boolean) => void;
  correctAnswer: string;
}

const WriteAnswer = ({ onSubmit, correctAnswer }: WriteAnswerProps) => {
  const [answer, setAnswer] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { toast } = useToast();
  
  const handleSubmit = () => {
    if (!answer.trim()) {
      toast({
        title: "Réponse vide",
        description: "Veuillez écrire une réponse avant de valider",
        variant: "destructive"
      });
      return;
    }
    
    // Vérification simpliste - si la réponse contient un mot clé de la bonne réponse
    const userAnswer = answer.toLowerCase().trim();
    const correctKeywords = correctAnswer.toLowerCase()
      .split(/\s+/)
      .filter(word => word.length > 3) // Ignorer les mots courts
      .map(word => word.replace(/[.,;:!?()]/g, '')); // Enlever la ponctuation
      
    // Considérer correcte si au moins 40% des mots clés sont présents
    const matches = correctKeywords.filter(keyword => userAnswer.includes(keyword));
    const matchPercentage = correctKeywords.length > 0 ? matches.length / correctKeywords.length : 0;
    
    const result = matchPercentage >= 0.4;
    setIsCorrect(result);
    setSubmitted(true);
    
    // Informer le parent directement avec la correction
    onSubmit(answer, result);
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    setIsTyping(true);
    // Reset typing animation after a delay
    setTimeout(() => setIsTyping(false), 500);
  };

  // Fonction pour formater la réponse avec des sauts de ligne pour les options
  const formatAnswer = (text: string) => {
    // On remplace les options numérotées ou avec des lettres par des options avec retour à la ligne
    return text
      .replace(/([0-9]+\)|\([0-9]+\)|[a-z]\)|\([a-z]\))\s*/g, '\n$1 ')
      .trim();
  };

  useEffect(() => {
    return () => {
      // Reset state on unmount
      setAnswer('');
      setSubmitted(false);
      setIsCorrect(false);
    };
  }, []);
  
  return (
    <div className="space-y-4">
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            <div className="relative">
              <Textarea
                placeholder="Écrivez votre réponse ici..."
                value={answer}
                onChange={handleTextareaChange}
                className="min-h-[120px] resize-none pr-10 border-2 border-app-blue-light/50 focus:border-app-blue-medium focus:ring focus:ring-app-blue-light/30 shadow-sm"
              />
              <motion.div 
                className="absolute bottom-3 right-3 text-gray-400"
                animate={isTyping ? { scale: [1, 1.2, 1] } : {}}
                transition={{ duration: 0.3 }}
              >
                <Send size={18} />
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark hover:opacity-90 text-white relative overflow-hidden"
              >
                <motion.span 
                  className="absolute inset-0 bg-white/10" 
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear" 
                  }}
                />
                Valider ma réponse
              </Button>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 30 
            }}
            className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700' : 'bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-700'}`}
          >
            <div className="flex items-center mb-3">
              {isCorrect ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15 
                  }}
                >
                  <div className="relative">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mr-2" />
                    <motion.div 
                      className="absolute -top-1 -right-1"
                      animate={{ 
                        rotate: [0, 15, -15, 0],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity,
                        repeatType: "loop"
                      }}
                    >
                      <Sparkles size={12} className="text-yellow-500" />
                    </motion.div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15 
                  }}
                >
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400 mr-2" />
                </motion.div>
              )}
              
              <motion.span 
                className={`font-medium ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                {isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}
              </motion.span>
            </div>
            
            <div className="text-sm space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <span className="font-medium">Votre réponse:</span> 
                <p className="mt-1 p-2 bg-white/50 dark:bg-white/10 rounded border border-gray-100 dark:border-gray-700">
                  {answer}
                </p>
              </motion.div>
              
              {!isCorrect && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="font-medium">Réponse correcte:</span> 
                  <p className="mt-1 p-2 bg-green-50/50 dark:bg-green-900/20 rounded border border-green-100 dark:border-green-800 text-gray-800 dark:text-gray-200 whitespace-pre-line">
                    {formatAnswer(correctAnswer)}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WriteAnswer;
