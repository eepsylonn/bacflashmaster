
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// Use environment variables if available, otherwise use the default values
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://awgkohazhjewjtsirjqf.supabase.co";
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3Z2tvaGF6aGpld2p0c2lyanFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3MTg3MDcsImV4cCI6MjA1OTI5NDcwN30.gcG2gY_avjNNKzbILBxzmqxN49jwqES8IU655gU4hpQ";

// Create the Supabase client with explicit auth configuration
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: localStorage
  }
});

console.log('Client Supabase initialisé avec URL:', SUPABASE_URL);

// Determine if we're in development mode with undefined Supabase credentials
export const isLocalDev = 
  (!import.meta.env.VITE_SUPABASE_URL || 
   !import.meta.env.VITE_SUPABASE_ANON_KEY ||
   import.meta.env.VITE_SUPABASE_URL === 'https://your-supabase-url.supabase.co' ||
   import.meta.env.VITE_SUPABASE_ANON_KEY === 'your-anon-key');

// Extended Supabase client for use with tables not in the Database type
// Use this client when working with tables not fully defined in the types
export const supabaseExt = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    storage: localStorage
  }
});

// Helper function to get flashcards from Supabase
export async function getFlashcardsFromSupabase(
  matiere?: string,
  niveau?: string,
  limit?: number,
  diplome?: string
) {
  try {
    let query = supabase
      .from('flashcards')
      .select('*');
    
    // Apply filters if provided
    if (matiere) {
      // Utiliser une recherche avec ilike pour plus de flexibilité
      query = query.ilike('matiere', `%${matiere}%`);
    }
    
    if (niveau) {
      // Use a more type-safe approach by checking valid values
      const validNiveau = niveau as Database['public']['Enums']['niveau_type'];
      query = query.eq('niveau', validNiveau);
    }
    
    if (diplome) {
      // Use a more type-safe approach by checking valid values
      const validDiplome = diplome as Database['public']['Enums']['diplome_type'];
      query = query.eq('diplome', validDiplome);
    }
    
    // Apply limit if provided
    if (limit !== undefined) {
      const limitValue = typeof limit === 'number' 
        ? limit 
        : parseInt(String(limit), 10);
      query = query.limit(limitValue);
    }
    
    // Execute query
    const { data, error } = await query;
    
    if (error) {
      console.error('Error fetching flashcards:', error);
      console.error('Query parameters:', { matiere, niveau, diplome, limit });
      return [];
    }
    
    if (data && data.length > 0) {
      console.log(`Récupéré ${data.length} flashcards depuis Supabase avec critères:`, {
        matiere, niveau, diplome, limit
      });
      
      // Log first flashcard as example
      console.log('Exemple de flashcard récupérée:', data[0]);
    } else {
      console.log('Aucune flashcard trouvée dans Supabase avec les critères:', {
        matiere, niveau, diplome, limit
      });
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in getFlashcardsFromSupabase:', error);
    return [];
  }
}

// Helper for saving training results
export async function saveTrainingResult(result: any) {
  if (!supabase || isLocalDev) return null;
  
  try {
    const { data, error } = await supabase
      .from('training_results')
      .insert([result])
      .select();
      
    if (error) {
      console.error('Error saving training result:', error);
      return null;
    }
    
    return data[0];
  } catch (error) {
    console.error('Error in saveTrainingResult:', error);
    return null;
  }
}
