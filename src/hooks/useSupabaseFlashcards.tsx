
import { useNavigate } from 'react-router-dom';
import { useTrainingSession } from './useTrainingSession';

export const useSupabaseFlashcards = () => {
  const navigate = useNavigate();
  const trainingSession = useTrainingSession();
  
  const continueAfterResult = () => {
    // Fix: Access the setShowResult function from trainingSession
    if (trainingSession.setShowResult) {
      trainingSession.setShowResult(false);
      navigate('/');
    } else {
      console.error('setShowResult is not defined in trainingSession');
      navigate('/');
    }
  };
  
  return {
    ...trainingSession,
    continueAfterResult
  };
};
