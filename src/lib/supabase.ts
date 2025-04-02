
import { createClient } from '@supabase/supabase-js';

// Récupération des variables d'environnement pour Supabase
// Si les variables d'environnement ne sont pas définies, utilisez ces valeurs par défaut
// pour le développement local uniquement
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-supabase-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

// Pour faciliter le développement local, nous allons simuler la connexion
// si nous sommes dans un environnement de développement et que les clés Supabase ne sont pas définies
const isLocalDev = 
  (!import.meta.env.VITE_SUPABASE_URL || 
   !import.meta.env.VITE_SUPABASE_ANON_KEY ||
   supabaseUrl === 'https://your-supabase-url.supabase.co' ||
   supabaseAnonKey === 'your-anon-key');

console.log("Mode développement local:", isLocalDev);

// Création du client Supabase
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
  // Mode développement local sans Supabase configuré
  if (isLocalDev) {
    console.log('Mode développement local activé, simulation de connexion');
    
    // Cas spécial pour le compte admin (username: admin, password: admin)
    if ((emailOrUsername === 'admin' || emailOrUsername === 'admin@example.com') && password === 'admin') {
      console.log("Connexion administrateur simulée");
      const mockAdminUser = {
        id: '00000000-0000-0000-0000-000000000000',
        email: 'admin@example.com',
        user_metadata: { 
          username: 'admin',
          role: 'admin' // Ajout explicite du rôle admin dans les métadonnées
        },
      };
      
      // Simuler une connexion réussie et stocker en localStorage
      const mockSession = { 
        access_token: 'mock-token', 
        refresh_token: 'mock-refresh-token',
        user: mockAdminUser
      };
      
      localStorage.setItem('supabase.auth.session', JSON.stringify({ session: mockSession }));
      
      return { 
        data: { 
          user: mockAdminUser,
          session: mockSession
        }, 
        error: null 
      };
    }
    
    // Pour les autres utilisateurs en mode développement
    if (password.length > 0) {
      const mockUser = {
        id: '12345678-1234-1234-1234-123456789012',
        email: emailOrUsername.includes('@') ? emailOrUsername : `${emailOrUsername}@example.com`,
        user_metadata: { 
          username: emailOrUsername.includes('@') ? emailOrUsername.split('@')[0] : emailOrUsername,
          role: 'user'
        },
      };
      
      const mockSession = { 
        access_token: 'mock-token', 
        refresh_token: 'mock-refresh-token',
        user: mockUser
      };
      
      localStorage.setItem('supabase.auth.session', JSON.stringify({ session: mockSession }));
      
      return { 
        data: { 
          user: mockUser,
          session: mockSession
        }, 
        error: null 
      };
    }
    
    return { data: null, error: new Error('Identifiants invalides.') };
  }
  
  // Mode de production avec Supabase configuré
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
