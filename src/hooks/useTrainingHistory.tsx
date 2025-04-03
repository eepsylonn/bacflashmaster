
import { useState, useEffect } from 'react';
import { supabase, isLocalDev } from '@/integrations/supabase/client';
import { TrainingResult, AnsweredQuestion, NiveauType, DiplomeType } from '@/types';

export const useTrainingHistory = () => {
  const [trainingHistory, setTrainingHistory] = useState<TrainingResult[]>([]);

  useEffect(() => {
    const fetchTrainingHistory = async () => {
      // First try to get from local storage (for backward compatibility)
      const savedHistory = localStorage.getItem('trainingHistory');
      if (savedHistory) {
        try {
          const parsed = JSON.parse(savedHistory);
          setTrainingHistory(parsed);
        } catch (error) {
          console.error('Error parsing training history:', error);
        }
      }

      // Then try to fetch from Supabase if not in local dev mode
      if (!isLocalDev) {
        try {
          const { data: userSession } = await supabase.auth.getSession();
          if (userSession.session?.user) {
            const { data, error } = await supabase
              .from('training_results')
              .select('*')
              .eq('user_id', userSession.session.user.id)
              .order('created_at', { ascending: false })
              .limit(10);

            if (error) {
              console.error('Error fetching training history:', error);
            } else if (data && data.length > 0) {
              console.log('Training history fetched from Supabase:', data);
              
              // Transform data to match TrainingResult type with proper handling of questions field
              const mappedResults: TrainingResult[] = data.map(item => ({
                id: item.id,
                date: item.date || item.created_at,
                matiere: item.matiere,
                niveau: item.niveau as NiveauType,
                nombreQuestions: item.nombre_questions,
                score: item.score,
                pourcentage: item.pourcentage,
                note: item.note,
                // Properly transform json questions to AnsweredQuestion[] type
                questions: Array.isArray(item.questions) 
                  ? item.questions.map((q: any) => ({
                      flashcard: q.flashcard,
                      isCorrect: q.isCorrect,
                      userAnswer: q.userAnswer
                    })) as AnsweredQuestion[]
                  : [],
                diplome: item.diplome as DiplomeType
              }));
              
              setTrainingHistory(mappedResults);
            }
          }
        } catch (error) {
          console.error('Error fetching user training history:', error);
        }
      }
    };

    fetchTrainingHistory();
  }, []);

  useEffect(() => {
    // Save to localStorage for backward compatibility
    if (trainingHistory.length > 0) {
      localStorage.setItem('trainingHistory', JSON.stringify(trainingHistory));
    }
  }, [trainingHistory]);

  // Function to calculate improvement rate
  const calculateImprovementRate = (pourcentage: number, matiere: string) => {
    const relevantHistory = trainingHistory
      .filter(item => (item.matiere === matiere || matiere === 'Tous les sujets'))
      .slice(0, 5);

    if (relevantHistory.length === 0) return null;

    const averagePercentage = relevantHistory.reduce(
      (acc, item) => acc + item.pourcentage, 0
    ) / relevantHistory.length;

    return ((pourcentage - averagePercentage) / averagePercentage) * 100;
  };

  return {
    trainingHistory,
    setTrainingHistory,
    calculateImprovementRate
  };
};
