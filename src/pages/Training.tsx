
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import TrainingSelector from '@/components/TrainingSelector';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import { useFlashcards } from '@/hooks/useFlashcards';
import { Card } from '@/components/ui/card';

const Training = () => {
  const location = useLocation();
  const {
    matiere,
    setMatiere,
    niveau,
    setNiveau,
    nombreQuestions,
    setNombreQuestions,
    currentQuestion,
    currentIndex,
    currentQuestions,
    isFlipped,
    score,
    training,
    startTraining,
    flipCard,
    markCorrect,
    markIncorrect
  } = useFlashcards();

  // Parse URL parameters
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const matiereParam = searchParams.get('matiere');
    if (matiereParam) {
      setMatiere(matiereParam);
    }
  }, [location.search, setMatiere]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-app-blue-dark">
            <span className="animate-bounce inline-block">E</span>
            <span className="animate-bounce inline-block delay-75">n</span>
            <span className="animate-bounce inline-block delay-100">t</span>
            <span className="animate-bounce inline-block delay-125">r</span>
            <span className="animate-bounce inline-block delay-150">a</span>
            <span className="animate-bounce inline-block delay-175">î</span>
            <span className="animate-bounce inline-block delay-200">n</span>
            <span className="animate-bounce inline-block delay-225">e</span>
            <span className="animate-bounce inline-block delay-250">m</span>
            <span className="animate-bounce inline-block delay-275">e</span>
            <span className="animate-bounce inline-block delay-300">n</span>
            <span className="animate-bounce inline-block delay-325">t</span>
          </h1>
          
          {!training ? (
            <div className="max-w-md mx-auto">
              <TrainingSelector
                matiere={matiere}
                setMatiere={setMatiere}
                niveau={niveau}
                setNiveau={setNiveau}
                nombreQuestions={nombreQuestions}
                setNombreQuestions={setNombreQuestions}
                onStartTraining={startTraining}
              />
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <TrainingProgress
                currentIndex={currentIndex}
                totalQuestions={currentQuestions.length}
                score={score}
              />
              
              {currentQuestion && (
                <FlashcardComponent
                  flashcard={currentQuestion}
                  isFlipped={isFlipped}
                  onFlip={flipCard}
                  onCorrect={markCorrect}
                  onIncorrect={markIncorrect}
                  showAnswerButtons={isFlipped}
                />
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Training;
