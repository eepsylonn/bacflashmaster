
import { supabase } from '@/integrations/supabase/client';

// Function to check if user exists by email or username
export const checkUserExists = async (email: string, username?: string) => {
  try {
    // Skip the check for now as there's an issue with the profiles policy
    // This is a temporary workaround until the DB policy is fixed
    return { exists: false };
  } catch (error) {
    console.error('Error in checkUserExists:', error);
    throw error;
  }
};

// Function for signing up with email and password
export const signUpWithEmail = async (
  email: string,
  password: string,
  username?: string
) => {
  try {
    console.log(`Attempting signup with email: ${email}, username: ${username || 'not provided'}`);
    
    // Generate a username if not provided
    const generatedUsername = username || email.split('@')[0];
    
    // Proceed with signup
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username: generatedUsername,
        },
      },
    });
    
    if (error) {
      console.error('Signup error:', error);
      return { data: null, error: new Error(error.message) };
    }
    
    console.log('Signup success - waiting for profile creation');
    
    // Wait a moment for the trigger to create the profile
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Signup process completed successfully');
    return { data, error: null };
  } catch (error: any) {
    console.error('Exception in signUpWithEmail:', error);
    return { data: null, error: new Error('An error occurred during signup') };
  }
};

// Function for signing in with email/username and password
export const signInWithEmailOrUsername = async (
  emailOrUsername: string, 
  password: string
) => {
  try {
    console.log(`Attempting login with: ${emailOrUsername}`);
    
    // Special case for admin login
    if (
      (emailOrUsername === 'admin' || emailOrUsername === 'admin@example.com') && 
      password === 'admin'
    ) {
      console.log('Admin login attempt detected');
      // Try to login with admin credentials
      const { data, error } = await supabase.auth.signInWithPassword({
        email: 'admin@example.com',
        password: 'admin',
      });
      
      if (error) {
        console.error('Admin login error:', error);
        // Try to create admin account if it doesn't exist
        if (error.message.includes('Invalid login credentials')) {
          console.log('Attempting to create admin account...');
          const { data: signupData, error: signupError } = await supabase.auth.signUp({
            email: 'admin@example.com',
            password: 'admin',
            options: {
              data: {
                username: 'admin',
              },
            },
          });
          
          if (signupError) {
            console.error('Admin account creation failed:', signupError);
            return { 
              data: null, 
              error: new Error('Admin login failed. Please contact support.') 
            };
          }
          
          // Try logging in again with admin credentials
          return await supabase.auth.signInWithPassword({
            email: 'admin@example.com',
            password: 'admin',
          });
        }
      }
      
      return { data, error };
    }

    // Determine if the input is an email
    const isEmail = emailOrUsername.includes('@');

    // If it's an email, sign in directly
    if (isEmail) {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: emailOrUsername,
        password,
      });
      
      if (error) {
        console.error('Email login error:', error);
      }
      
      return { data, error };
    }

    // If it's a username, try to find the associated email
    try {
      const { data: profileData, error: profileError } = await supabase
        .from('profiles')
        .select('email')
        .eq('username', emailOrUsername)
        .maybeSingle();

      if (profileError) {
        console.error('Error finding user by username:', profileError);
        return { data: null, error: new Error('Invalid credentials') };
      }

      if (!profileData?.email) {
        console.error('Username not found:', emailOrUsername);
        return { data: null, error: new Error('Invalid credentials') };
      }

      // Sign in with the email retrieved from the profiles table
      const { data, error } = await supabase.auth.signInWithPassword({
        email: profileData.email,
        password,
      });

      if (error) {
        console.error('Username login error:', error);
      }

      return { data, error };
      
    } catch (error: any) {
      console.error('Error in username login flow:', error);
      return { data: null, error: new Error('An error occurred during login') };
    }
  } catch (error: any) {
    console.error('Error in signInWithEmailOrUsername:', error);
    return { data: null, error: new Error('An error occurred during login') };
  }
};

// Function for signing out
export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    return { error };
  } catch (error) {
    console.error('Error in signOut:', error);
    return { error: new Error('An error occurred during logout') };
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
        .select('*')
        .eq('id', data.session.user.id)
        .maybeSingle();
        
      if (profileError) {
        console.error('Error fetching profile:', profileError);
        return {
          user: data.session.user,
          profile: null,
          isAdmin: false,
        };
      }
        
      return {
        user: data.session.user,
        profile: profileData,
        isAdmin: profileData?.role === 'admin',
      };
    }
    
    return { user: null, profile: null, isAdmin: false };
  } catch (error) {
    console.error('Error in getCurrentUser:', error);
    return { user: null, profile: null, isAdmin: false };
  }
};

// Function to update user profile
export const updateUserProfile = async (profileData: any) => {
  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      return { data: null, error: sessionError };
    }
    
    if (!sessionData?.session?.user) {
      return { data: null, error: new Error('User not authenticated') };
    }
    
    const userId = sessionData.session.user.id;
    
    const { data, error } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('id', userId)
      .select();
      
    if (error) {
      console.error('Error updating profile:', error);
    }
      
    return { data, error };
  } catch (error) {
    console.error('Error in updateUserProfile:', error);
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
      return { data: null, error: new Error('User not authenticated') };
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

// Function to update user preferences
export const updateUserPreferences = async (preferences: any) => {
  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      console.error('Error getting session:', sessionError);
      return { data: null, error: sessionError };
    }
    
    if (!sessionData?.session?.user) {
      return { data: null, error: new Error('User not authenticated') };
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
