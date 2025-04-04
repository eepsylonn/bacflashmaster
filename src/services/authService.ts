
import { supabase } from '@/integrations/supabase/client';

// Function for signing in with email/username and password
export const signInWithEmailOrUsername = async (
  emailOrUsername: string, 
  password: string
) => {
  // Determine if the input is an email
  const isEmail = emailOrUsername.includes('@');

  // Special case for admin
  if (emailOrUsername === 'admin' && password === 'admin') {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'admin@example.com',
      password: 'admin',
    });
    return { data, error };
  }

  // If it's an email, sign in directly
  if (isEmail) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailOrUsername,
      password,
    });
    return { data, error };
  }

  // If it's a username, try to find the associated email
  try {
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('email')
      .eq('username', emailOrUsername)
      .maybeSingle();

    if (userError || !userData?.email) {
      console.error('Erreur lors de la recherche du nom d\'utilisateur:', userError);
      return { data: null, error: new Error('Identifiants invalides') };
    }

    // Sign in with the email retrieved from the profiles table
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password,
    });

    if (error) {
      console.error('Erreur lors de la connexion avec l\'email récupéré:', error);
    }

    return { data, error };
    
  } catch (error) {
    console.error('Error in signInWithEmailOrUsername:', error);
    return { data: null, error: new Error('Une erreur est survenue lors de la connexion') };
  }
};

// Function for signing up with email and password
export const signUpWithEmail = async (
  email: string,
  password: string,
  username?: string
) => {
  try {
    // Vérifier d'abord si l'email existe déjà
    const { data: existingUserByEmail, error: emailCheckError } = await supabase
      .from('profiles')
      .select('email')
      .eq('email', email)
      .maybeSingle();
      
    if (emailCheckError) {
      console.error('Erreur lors de la vérification de l\'email:', emailCheckError);
      return { data: null, error: new Error('Erreur lors de la vérification de l\'email') };
    }
      
    if (existingUserByEmail) {
      return { data: null, error: new Error('Cet email est déjà utilisé') };
    }
    
    // Vérifier si le nom d'utilisateur existe déjà (si fourni)
    if (username) {
      const { data: existingUsername, error: usernameCheckError } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', username)
        .maybeSingle();
        
      if (usernameCheckError) {
        console.error('Erreur lors de la vérification du nom d\'utilisateur:', usernameCheckError);
        return { data: null, error: new Error('Erreur lors de la vérification du nom d\'utilisateur') };
      }
        
      if (existingUsername) {
        return { data: null, error: new Error('Ce nom d\'utilisateur est déjà utilisé') };
      }
    }
    
    // Procéder à l'inscription
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username || email.split('@')[0],
        },
      },
    });
    
    if (error) {
      console.error('Erreur lors de l\'inscription:', error);
      
      // Gérer spécifiquement l'erreur de type user_role si c'est celle-ci
      if (error.message && error.message.includes('user_role')) {
        return { data: null, error: new Error('Une erreur technique est survenue. Veuillez réessayer.') };
      }
      
      return { data: null, error };
    }
    
    return { data, error: null };
  } catch (error) {
    console.error('Error in signUpWithEmail:', error);
    return { data: null, error: new Error('Une erreur est survenue lors de l\'inscription') };
  }
};

// Function for signing out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (error) {
    console.error('Error in signOut:', error);
    return { error: new Error('Une erreur est survenue lors de la déconnexion') };
  }
};

// Function to get the current user session
export const getCurrentUser = async () => {
  try {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    
    if (data.session?.user) {
      // Get the user profile to check if admin
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.session.user.id)
        .maybeSingle();
        
      if (profileError) {
        console.error('Erreur lors de la récupération du profil:', profileError);
      }
        
      return {
        user: data.session.user,
        isAdmin: profileData?.role === 'admin',
      };
    }
    
    return { user: null, isAdmin: false };
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    return { user: null, isAdmin: false };
  }
};

// Function to update user preferences
export const updateUserPreferences = async (preferences: any) => {
  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      return { data: null, error: sessionError };
    }
    
    if (!sessionData?.session?.user) {
      return { data: null, error: new Error('Utilisateur non authentifié') };
    }
    
    const userId = sessionData.session.user.id;
    
    // Check if preferences exist for the user
    const { data: existingPrefs, error: fetchError } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();
      
    if (fetchError) {
      console.error('Error fetching preferences:', fetchError);
      throw fetchError;
    }
    
    if (existingPrefs) {
      // Update existing preferences
      const { data, error } = await supabase
        .from('user_preferences')
        .update(preferences)
        .eq('user_id', userId)
        .select();
        
      if (error) {
        console.error('Error updating preferences:', error);
      }
        
      return { data, error };
    } else {
      // Create new preferences
      const { data, error } = await supabase
        .from('user_preferences')
        .insert([{ ...preferences, user_id: userId }])
        .select();
        
      if (error) {
        console.error('Error creating preferences:', error);
      }
        
      return { data, error };
    }
  } catch (error) {
    console.error('Error in updateUserPreferences:', error);
    return { data: null, error };
  }
};

// Function to get user preferences
export const getUserPreferences = async () => {
  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      return { data: null, error: sessionError };
    }
    
    if (!sessionData?.session?.user) {
      return { data: null, error: new Error('Utilisateur non authentifié') };
    }
    
    const userId = sessionData.session.user.id;
    
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();
      
    if (error) {
      console.error('Error fetching preferences:', error);
    }
      
    return { data, error };
  } catch (error) {
    console.error('Error in getUserPreferences:', error);
    return { data: null, error };
  }
};
