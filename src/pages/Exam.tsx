
import { useState } from 'react';
import Header from '@/components/Header';
import FlashcardComponent from '@/components/FlashcardComponent';
import TrainingProgress from '@/components/TrainingProgress';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useFlashcards } from '@/hooks/useFlashcards';

const Exam = () => {
  const {
    currentQuestion,
    currentIndex,
    currentQuestions,
    isFlipped,
    score,
    startExam,
    flipCard,
    markCorrect,
    markIncorrect,
    examMode
  } = useFlashcards();
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center text-app-blue-dark">
            <span className="animate-bounce inline-block">E</span>
            <span className="animate-bounce inline-block delay-75">x</span>
            <span className="animate-bounce inline-block delay-100">a</span>
            <span className="animate-bounce inline-block delay-125">m</span>
            <span className="animate-bounce inline-block delay-150">e</span>
            <span className="animate-bounce inline-block delay-175">n</span>
          </h1>
          
          {!examMode ? (
            <div className="max-w-md mx-auto">
              <Card className="p-8 shadow-lg bg-white rounded-xl border-2 border-app-blue-light">
                <h2 className="text-xl font-semibold mb-6 text-center">Examen Baccalauréat</h2>
                <p className="text-gray-600 mb-6 text-center">
                  Préparez-vous à passer un examen comprenant 200 questions aléatoires 
                  portant sur toutes les matières du programme de première et terminale.
                </p>
                
                <Button 
                  onClick={startExam} 
                  className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg py-3 rounded-lg transform transition hover:scale-105"
                >
                  Commencer l'examen
                </Button>
              </Card>
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

export default Exam;
