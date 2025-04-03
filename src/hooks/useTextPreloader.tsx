
import { useState } from 'react';
import { supabase, isLocalDev } from '@/integrations/supabase/client';
import { Flashcard } from '@/types';

// Cache for the files texte chargés
const textCache: Record<string, string> = {};

export const useTextPreloader = () => {
  const [loadingText, setLoadingText] = useState<boolean>(false);

  const preloadTextFiles = async (questions: Flashcard[]) => {
    const textPaths = questions
      .filter(q => q.text && typeof q.text === 'string' && q.text.startsWith('/') && !textCache[q.text])
      .map(q => q.text as string);
    
    if (textPaths.length === 0) return;
    
    setLoadingText(true);
    
    for (const path of textPaths) {
      if (!textCache[path]) {
        try {
          // Use encodeURI to properly encode the path
          const encodedPath = encodeURI(path);
          
          // Try to fetch from Supabase Storage first if not in local dev mode
          if (!isLocalDev) {
            try {
              const bucket = 'texts';
              const filePath = path.startsWith('/') ? path.substring(1) : path;
              
              const { data, error } = await supabase.storage
                .from(bucket)
                .download(filePath);
                
              if (!error && data) {
                const text = await data.text();
                textCache[path] = text;
                
                // Update questions with actual text content
                questions.forEach(q => {
                  if (q.text === path) {
                    q.text = text;
                  }
                });
                
                console.log(`Préchargement du texte depuis Supabase réussi: ${path}`);
                continue; // Skip the public folder fetch if Supabase fetch was successful
              }
            } catch (storageError) {
              console.error(`Erreur lors du préchargement du texte depuis Supabase: ${path}`, storageError);
              // Continue to try fetching from public folder as fallback
            }
          }
          
          // Fallback to public folder
          const response = await fetch(encodedPath);
          if (response.ok) {
            const text = await response.text();
            textCache[path] = text;
            
            // Update questions with actual text content
            questions.forEach(q => {
              if (q.text === path) {
                q.text = text;
              }
            });
            
            console.log(`Préchargement du texte depuis public réussi: ${path}`);
          } else {
            console.error(`Échec du préchargement du texte: ${path}`);
          }
        } catch (error) {
          console.error(`Erreur lors du préchargement du texte: ${path}`, error);
        }
      }
    }
    
    setLoadingText(false);
  };

  return {
    loadingText,
    preloadTextFiles,
    textCache
  };
};
