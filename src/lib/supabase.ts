
// This file re-exports the Supabase client from the correct location
import { supabase, supabaseExt, isLocalDev, getFlashcardsFromSupabase, saveTrainingResult } from '@/integrations/supabase/client';

export { supabase, supabaseExt, isLocalDev, getFlashcardsFromSupabase, saveTrainingResult };
