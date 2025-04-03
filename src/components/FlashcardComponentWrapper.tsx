
import React, { useEffect, useState } from 'react';
import FlashcardComponent from '@/components/FlashcardComponent';
import ReadingTextDisplay from '@/components/ReadingTextDisplay';
import { Flashcard } from '@/types';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { useIsMobile } from '@/hooks/use-mobile';
import { supabase, isLocalDev } from '@/integrations/supabase/client';
import { TextToSpeech } from '@/components/AudioTools';

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
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const isMobile = useIsMobile();
  
  const isReadingComprehension = flashcard.matiere === 'Compréhension écrite' || 
                               flashcard.matiere === 'TOEIC Reading' || 
                               flashcard.matiere === 'Reading';

  const isListening = flashcard.matiere === 'Compréhension orale' || 
                      flashcard.matiere === 'TOEIC Listening' || 
                      flashcard.matiere === 'Listening';

  useEffect(() => {
    const loadText = async () => {
      if (isReadingComprehension && flashcard.text && typeof flashcard.text === 'string') {
        // Check if the text is a URL (starts with /)
        if (flashcard.text.startsWith('/')) {
          setLoading(true);
          try {
            // Try to get from Supabase Storage first if not in local dev mode
            if (!isLocalDev) {
              try {
                const bucket = 'texts';
                const filePath = flashcard.text.startsWith('/') ? flashcard.text.substring(1) : flashcard.text;
                
                const { data, error } = await supabase.storage
                  .from(bucket)
                  .download(filePath);
                  
                if (!error && data) {
                  const textContent = await data.text();
                  setText(textContent);
                  console.log(`Texte chargé depuis Supabase: ${filePath}`);
                  setLoading(false);
                  return;
                }
              } catch (storageError) {
                console.error(`Erreur lors du chargement du texte depuis Supabase: ${flashcard.text}`, storageError);
                // Continue to try fetching from public folder as fallback
              }
            }
            
            // Fallback to public folder
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
    <div className={`space-y-4 ${isMobile ? 'px-2' : 'space-y-6'}`}>
      {isReadingComprehension && (
        loading ? (
          <Card className={`mb-4 p-4 ${isMobile ? 'max-h-[40vh] overflow-auto' : 'mb-6 p-6'}`}>
            <Skeleton className={`${isMobile ? 'h-[200px]' : 'h-[300px]'} w-full`} />
          </Card>
        ) : (
          text && <ReadingTextDisplay text={text} />
        )
      )}
      
      <div className="flex flex-col space-y-2">
        <FlashcardComponent {...props} />
        
        {(props.isFlipped && !isAudioPlaying) && (
          <div className="flex justify-center mt-4">
            <TextToSpeech 
              text={props.isFlipped ? flashcard.answer : flashcard.question}
              voice="alloy"
              onPlayStateChange={setIsAudioPlaying}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default FlashcardComponentWrapper;
