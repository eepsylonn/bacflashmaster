
import React, { useEffect, useState } from 'react';
import FlashcardComponent from '@/components/FlashcardComponent';
import ReadingTextDisplay from '@/components/ReadingTextDisplay';
import { Flashcard } from '@/types';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';

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

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };

  return (
    <motion.div 
      className={`space-y-4 ${isMobile ? 'px-2' : 'space-y-6'}`}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      key={flashcard.id}
    >
      {isReadingComprehension && (
        loading ? (
          <motion.div variants={childVariants}>
            <Card className={`mb-4 p-4 ${isMobile ? 'max-h-[40vh] overflow-auto' : 'mb-6 p-6'} relative border-2 border-app-blue-light/30 bg-gradient-to-r from-blue-50 to-indigo-50`}>
              <div className="absolute -top-3 -right-3">
                <Mascot size="sm" animation="bounce" />
              </div>
              <Skeleton className={`${isMobile ? 'h-[200px]' : 'h-[300px]'} w-full bg-gradient-to-r from-gray-200 to-gray-100`} />
            </Card>
          </motion.div>
        ) : (
          text && (
            <motion.div variants={childVariants}>
              <ReadingTextDisplay text={text} />
            </motion.div>
          )
        )
      )}
      <motion.div variants={childVariants}>
        <FlashcardComponent {...props} />
      </motion.div>
      
      {/* Éléments décoratifs */}
      <motion.div 
        className="fixed top-20 right-4 opacity-20 pointer-events-none z-0"
        animate={{ 
          rotate: [0, 5, -5, 0],
          y: [0, -5, 5, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-300/30 to-purple-300/30 blur-3xl" />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-20 left-4 opacity-20 pointer-events-none z-0"
        animate={{ 
          rotate: [0, -5, 5, 0],
          y: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-r from-yellow-200/30 to-orange-300/30 blur-3xl" />
      </motion.div>
    </motion.div>
  );
};

export default FlashcardComponentWrapper;
