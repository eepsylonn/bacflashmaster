
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
      .single();

    if (userError || !userData?.email) {
      return { data: null, error: new Error('Identifiants invalides') };
    }

    // Sign in with the email retrieved from the profiles table
    const { data, error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password,
    });

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
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: username || email.split('@')[0],
        },
      },
    });
    
    return { data, error };
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
      const { data: profileData } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.session.user.id)
        .single();
        
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
    const { data: sessionData } = await supabase.auth.getSession();
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
      
    if (fetchError) throw fetchError;
    
    if (existingPrefs) {
      // Update existing preferences
      const { data, error } = await supabase
        .from('user_preferences')
        .update(preferences)
        .eq('user_id', userId)
        .select();
        
      return { data, error };
    } else {
      // Create new preferences
      const { data, error } = await supabase
        .from('user_preferences')
        .insert([{ ...preferences, user_id: userId }])
        .select();
        
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
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData?.session?.user) {
      return { data: null, error: new Error('Utilisateur non authentifié') };
    }
    
    const userId = sessionData.session.user.id;
    
    const { data, error } = await supabase
      .from('user_preferences')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();
      
    return { data, error };
  } catch (error) {
    console.error('Error in getUserPreferences:', error);
    return { data: null, error };
  }
};
