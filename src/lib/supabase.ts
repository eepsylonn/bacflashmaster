
import { createClient } from '@supabase/supabase-js';

// Remplacez ces variables par vos propres clés Supabase
// Ces clés seront remplacées par les valeurs des variables d'environnement VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Fonction pour se connecter avec email/username et mot de passe
export const signInWithEmailOrUsername = async (
  emailOrUsername: string, 
  password: string
) => {
  // Première tentative: essayer avec l'email
  const { data: emailData, error: emailError } = await supabase.auth.signInWithPassword({
    email: emailOrUsername,
    password,
  });

  // Si ça marche avec l'email, retourner le résultat
  if (!emailError) {
    return { data: emailData, error: null };
  }

  // Si l'email échoue, essayons de récupérer l'email associé au nom d'utilisateur
  const { data: usernameData, error: usernameError } = await supabase
    .from('profiles')
    .select('email')
    .eq('username', emailOrUsername)
    .single();

  if (usernameError || !usernameData?.email) {
    return { data: null, error: new Error('Identifiants invalides.') };
  }

  // Maintenant, essayons de se connecter avec l'email récupéré
  const { data, error } = await supabase.auth.signInWithPassword({
    email: usernameData.email,
    password,
  });

  return { data, error };
};
