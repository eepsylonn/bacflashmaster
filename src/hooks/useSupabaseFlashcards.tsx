
import { useNavigate } from 'react-router-dom';
import { useTrainingSession } from './useTrainingSession';

export const useSupabaseFlashcards = () => {
  const navigate = useNavigate();
  const trainingSession = useTrainingSession();
  
  const continueAfterResult = () => {
    trainingSession.setShowResult(false);
    navigate('/');
  };
  
  return {
    ...trainingSession,
    continueAfterResult
  };
};
