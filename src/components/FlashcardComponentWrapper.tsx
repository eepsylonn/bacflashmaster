
import React, { useEffect, useState } from 'react';
import FlashcardComponent from '@/components/FlashcardComponent';
import ReadingTextDisplay from '@/components/ReadingTextDisplay';
import { Flashcard } from '@/types';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

interface FlashcardComponentWrapperProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onCorrect: () => void;
  onIncorrect: () => void;
  onNext: () => void;
  showAnswerButtons: boolean;
  isLastQuestion: boolean;
  finishTraining: () => void;
}

const FlashcardComponentWrapper: React.FC<FlashcardComponentWrapperProps> = (props) => {
  const { flashcard } = props;
  const [text, setText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  const isReadingComprehension = flashcard.matiere === 'Compréhension écrite' || 
                               flashcard.matiere === 'TOEIC Reading' || 
                               flashcard.matiere === 'Reading';

  useEffect(() => {
    const loadText = async () => {
      if (isReadingComprehension && flashcard.text && typeof flashcard.text === 'string') {
        // Check if the text is a URL (starts with /)
        if (flashcard.text.startsWith('/')) {
          setLoading(true);
          try {
            // First encode the URI to handle special characters properly
            const encodedPath = encodeURI(flashcard.text);
            const response = await fetch(encodedPath);
            if (response.ok) {
              const textContent = await response.text();
              setText(textContent);
            } else {
              setText('Erreur lors du chargement du texte.');
            }
          } catch (error) {
            setText('Erreur lors du chargement du texte.');
            console.error('Erreur de chargement du texte:', error);
          } finally {
            setLoading(false);
          }
        } else {
          // The text is already loaded
          setText(flashcard.text);
        }
      }
    };

    loadText();
  }, [flashcard, isReadingComprehension]);

  // Animation variants pour le conteneur principal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.2,
        duration: 0.5 
      }
    }
  };

  // Animation variants pour les éléments enfants
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div 
      className={`space-y-4 ${isMobile ? 'px-2' : 'space-y-6'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {isReadingComprehension && (
        loading ? (
          <motion.div variants={itemVariants}>
            <Card className={`mb-4 p-4 ${isMobile ? 'max-h-[40vh] overflow-auto' : 'mb-6 p-6'}`}>
              <div className="flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-app-blue-medium mr-2" />
                <h3 className="text-lg font-medium text-app-blue-dark">Chargement du texte...</h3>
              </div>
              <Skeleton className={`${isMobile ? 'h-[200px]' : 'h-[300px]'} w-full`} />
            </Card>
          </motion.div>
        ) : (
          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {text && (
              <>
                <motion.div 
                  className="absolute -top-2 -right-2 z-10 bg-app-blue-light text-white rounded-full px-2 py-1 text-xs font-bold shadow-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3
                  }}
                >
                  Texte
                </motion.div>
                <ReadingTextDisplay text={text} />
              </>
            )}
          </motion.div>
        )
      )}
      <motion.div variants={itemVariants}>
        <FlashcardComponent {...props} />
      </motion.div>
    </motion.div>
  );
};

export default FlashcardComponentWrapper;
