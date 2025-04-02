
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
  // Cas spécial pour le compte admin (username: admin, password: admin)
  if (emailOrUsername === 'admin' && password === 'admin') {
    // Pour le compte admin, on utilise l'email associé (admin@example.com)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'admin@example.com',
      password,
    });
    return { data, error };
  }

  // Vérifier si l'entrée est un email
  const isEmail = emailOrUsername.includes('@');

  // Si c'est un email, essayer de se connecter directement
  if (isEmail) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailOrUsername,
      password,
    });
    return { data, error };
  }

  // Si c'est un nom d'utilisateur, chercher l'email associé
  const { data: userData, error: userError } = await supabase
    .from('profiles')
    .select('email')
    .eq('username', emailOrUsername)
    .single();

  if (userError || !userData?.email) {
    return { data: null, error: new Error('Identifiants invalides.') };
  }

  // Connexion avec l'email récupéré
  const { data, error } = await supabase.auth.signInWithPassword({
    email: userData.email,
    password,
  });

  return { data, error };
};
