
import { supabase, getFlashcardsFromSupabase } from '@/integrations/supabase/client';
import { Flashcard, NiveauType, DiplomeType, NombreQuestions } from '@/types';
import { getFlashcards as getLocalFlashcards } from '@/data/flashcards';
import { standardizeMatiere, standardizeNiveau, standardizeDiplome } from '@/utils/standardization';

// Get flashcards from Supabase with fallback to local data
export async function getFlashcards(
  matiere?: string,
  niveau?: NiveauType | string,
  limit?: NombreQuestions,
  diplome?: DiplomeType | string
): Promise<Flashcard[]> {
  try {
    // Standardize inputs for consistency
    const standardizedMatiere = matiere ? standardizeMatiere(matiere) : undefined;
    const standardizedNiveau = niveau ? standardizeNiveau(niveau) : undefined;
    const standardizedDiplome = diplome ? standardizeDiplome(diplome) : undefined;
    
    console.log(`Récupération des flashcards avec critères standardisés:`, {
      matiere: { original: matiere, standardized: standardizedMatiere },
      niveau: { original: niveau, standardized: standardizedNiveau },
      diplome: { original: diplome, standardized: standardizedDiplome },
      limit
    });
    
    // Try to get from Supabase first
    const supabaseFlashcards = await getFlashcardsFromSupabase(
      standardizedMatiere,
      standardizedNiveau as NiveauType, // Type cast to ensure compatibility
      limit, // Pass limit directly as NombreQuestions
      standardizedDiplome as DiplomeType // Type cast to ensure compatibility
    );
    
    if (supabaseFlashcards && supabaseFlashcards.length > 0) {
      console.log(`Récupéré ${supabaseFlashcards.length} flashcards depuis Supabase`);
      return supabaseFlashcards as Flashcard[];
    }
    
    // Fallback to local data
    const localFlashcards = getLocalFlashcards(
      standardizedMatiere, 
      standardizedNiveau as NiveauType, 
      limit as NombreQuestions, 
      standardizedDiplome as DiplomeType
    );
    
    console.log(`Récupéré ${localFlashcards.length} flashcards depuis les données locales`);
    return localFlashcards;
  } catch (error) {
    console.error('Erreur lors de la récupération des flashcards:', error);
    return getLocalFlashcards(matiere, niveau as NiveauType, limit as NombreQuestions, diplome as DiplomeType);
  }
}

// Load text content from Supabase storage or public folder
export async function loadTextContent(textPath: string): Promise<string> {
  try {
    if (!textPath.startsWith('/')) return textPath;
    
    // Try to get from Supabase Storage first
    try {
      const bucket = 'texts';
      const filePath = textPath.startsWith('/') ? textPath.substring(1) : textPath;
      
      const { data, error } = await supabase.storage
        .from(bucket)
        .download(filePath);
        
      if (!error && data) {
        const text = await data.text();
        return text;
      }
    } catch (storageError) {
      console.error(`Error loading text from Supabase Storage: ${textPath}`, storageError);
      // Continue to try fetching from public folder as fallback
    }
    
    // Fallback to public folder
    const encodedPath = encodeURI(textPath);
    const response = await fetch(encodedPath);
    if (response.ok) {
      const text = await response.text();
      return text;
    } else {
      throw new Error(`Failed to load text from public folder: ${textPath}`);
    }
  } catch (error) {
    console.error(`Error loading text content: ${textPath}`, error);
    return `Error loading text: ${textPath}`;
  }
}

// Function to generate text-to-speech audio
export async function generateSpeech(text: string, voice: string = 'alloy'): Promise<string | null> {
  try {
    const { data, error } = await supabase.functions.invoke('text-to-speech', {
      body: { text, voice }
    });
    
    if (error) throw error;
    
    return data.audioContent || null;
  } catch (error) {
    console.error('Error generating speech:', error);
    return null;
  }
}

// Function to transcribe speech to text
export async function transcribeSpeech(audioBase64: string): Promise<string | null> {
  try {
    const { data, error } = await supabase.functions.invoke('speech-to-text', {
      body: { audio: audioBase64 }
    });
    
    if (error) throw error;
    
    return data.text || null;
  } catch (error) {
    console.error('Error transcribing speech:', error);
    return null;
  }
}

// Function to save a user's training result
export async function saveTrainingResult(result: any) {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session?.user) {
      console.warn('Cannot save training result: User not authenticated');
      return null;
    }
    
    const resultWithUserId = {
      ...result,
      user_id: sessionData.session.user.id
    };
    
    const { data, error } = await supabase
      .from('training_results')
      .insert([resultWithUserId])
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

// Function to get a user's training history
export async function getTrainingHistory(limit: number = 10) {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session?.user) {
      console.warn('Cannot get training history: User not authenticated');
      return [];
    }
    
    const { data, error } = await supabase
      .from('training_results')
      .select('*')
      .eq('user_id', sessionData.session.user.id)
      .order('created_at', { ascending: false })
      .limit(limit);
      
    if (error) {
      console.error('Error fetching training history:', error);
      return [];
    }
    
    return data || [];
  } catch (error) {
    console.error('Error in getTrainingHistory:', error);
    return [];
  }
}
