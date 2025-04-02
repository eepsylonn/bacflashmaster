
import React, { useEffect, useState } from 'react';
import FlashcardComponent from '@/components/FlashcardComponent';
import ReadingTextDisplay from '@/components/ReadingTextDisplay';
import { Flashcard } from '@/types';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

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
            // Use encodeURI to properly encode the path
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

  return (
    <div className="space-y-6">
      {isReadingComprehension && (
        loading ? (
          <Card className="mb-6 p-6">
            <Skeleton className="h-[300px] w-full" />
          </Card>
        ) : (
          text && <ReadingTextDisplay text={text} />
        )
      )}
      <FlashcardComponent {...props} />
    </div>
  );
};

export default FlashcardComponentWrapper;
