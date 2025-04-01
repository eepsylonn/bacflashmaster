
import { useState, useEffect } from 'react';
import { Flashcard } from '@/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface FlashcardComponentProps {
  flashcard: Flashcard;
  isFlipped: boolean;
  onFlip: () => void;
  onCorrect?: () => void;
  onIncorrect?: () => void;
  showAnswerButtons?: boolean;
}

const FlashcardComponent = ({
  flashcard,
  isFlipped,
  onFlip,
  onCorrect,
  onIncorrect,
  showAnswerButtons = false
}: FlashcardComponentProps) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 300);
    return () => clearTimeout(timer);
  }, [flashcard.id]);

  return (
    <div 
      className={`flashcard w-full max-w-3xl mx-auto ${isFlipped ? 'flipped' : ''} ${isAnimating ? 'animate-fade-in' : ''}`}
      onClick={onFlip}
    >
      <div className="flashcard-inner relative w-full">
        <Card className="flashcard-front p-6 min-h-[300px] flex flex-col justify-center cursor-pointer">
          <div className="mb-2 flex justify-between text-sm text-gray-500">
            <span>{flashcard.matiere}</span>
            <span className="capitalize">{flashcard.niveau}</span>
          </div>
          <h3 className="text-xl md:text-2xl text-center font-medium my-4">{flashcard.question}</h3>
          <p className="text-center text-gray-500 mt-4">Cliquez pour voir la réponse</p>
        </Card>
        
        <Card className="flashcard-back p-6 min-h-[300px] flex flex-col justify-center absolute inset-0">
          <div className="mb-2 flex justify-between text-sm text-gray-500">
            <span>{flashcard.matiere}</span>
            <span className="capitalize">{flashcard.niveau}</span>
          </div>
          <div className="text-lg md:text-xl text-center my-4 overflow-auto">
            {flashcard.answer}
          </div>
          
          {showAnswerButtons && (
            <div className="flex justify-center space-x-4 mt-4">
              <Button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  onIncorrect && onIncorrect(); 
                }}
                variant="outline" 
                className="border-red-500 hover:bg-red-50 text-red-500"
              >
                Incorrect
              </Button>
              <Button 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  onCorrect && onCorrect(); 
                }}
                variant="outline" 
                className="border-green-500 hover:bg-green-50 text-green-500"
              >
                Correct
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default FlashcardComponent;
