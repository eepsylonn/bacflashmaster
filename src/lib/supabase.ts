
// This file re-exports the Supabase client from the correct location
import { supabase, isLocalDev, getFlashcardsFromSupabase, saveTrainingResult } from '@/integrations/supabase/client';

export { supabase, isLocalDev, getFlashcardsFromSupabase, saveTrainingResult };
