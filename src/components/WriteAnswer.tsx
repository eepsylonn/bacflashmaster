
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface WriteAnswerProps {
  onSubmit: (answer: string, isCorrect: boolean) => void;
  correctAnswer: string;
}

const WriteAnswer = ({ onSubmit, correctAnswer }: WriteAnswerProps) => {
  const [answer, setAnswer] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  
  const handleSubmit = () => {
    if (!answer.trim()) return;
    
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
  
  return (
    <div className="space-y-4">
      {!submitted ? (
        <>
          <Textarea
            placeholder="Écrivez votre réponse ici..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-[100px] resize-none"
          />
          
          <Button 
            onClick={handleSubmit}
            className="w-full bg-app-blue-medium hover:bg-app-blue-dark"
          >
            Valider ma réponse
          </Button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`p-4 rounded-lg ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}
        >
          <div className="flex items-center mb-2">
            {isCorrect ? (
              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2" />
            ) : (
              <XCircle className="h-5 w-5 text-red-600 mr-2" />
            )}
            <span className={`font-medium ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Bonne réponse !' : 'Pas tout à fait...'}
            </span>
          </div>
          
          <div className="text-sm">
            <p className="mb-1"><span className="font-medium">Votre réponse:</span> {answer}</p>
            {!isCorrect && <p><span className="font-medium">Réponse correcte:</span> {correctAnswer}</p>}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default WriteAnswer;
