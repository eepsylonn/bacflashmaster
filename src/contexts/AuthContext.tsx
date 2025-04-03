
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import * as authService from '@/services/authService';

interface AuthContextType {
  user: any | null;
  isAdmin: boolean;
  isSubscribed: boolean;
  isLoading: boolean;
  signIn: (emailOrUsername: string, password: string) => Promise<{ success: boolean, error?: string }>;
  signUp: (email: string, password: string, username?: string) => Promise<{ success: boolean, error?: string }>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      try {
        // Get the initial session
        const { user, isAdmin: userIsAdmin } = await authService.getCurrentUser();
        setUser(user);
        setIsAdmin(userIsAdmin);
        
        // In a real app, you would check subscription status here
        // For now, we'll simulate that admins are always subscribed
        setIsSubscribed(userIsAdmin || false);
      } catch (error) {
        console.error('Error initializing auth:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          
          // Get the user profile to check if admin
          const { data } = await supabase
            .from('profiles')
            .select('role')
            .eq('id', session.user.id)
            .single();
            
          const userIsAdmin = data?.role === 'admin';
          setIsAdmin(userIsAdmin);
          
          // In a real app, you would check subscription status here
          setIsSubscribed(userIsAdmin || false);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setIsAdmin(false);
          setIsSubscribed(false);
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (emailOrUsername: string, password: string) => {
    try {
      const { data, error } = await authService.signInWithEmailOrUsername(emailOrUsername, password);
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const signUp = async (email: string, password: string, username?: string) => {
    try {
      const { data, error } = await authService.signUpWithEmail(email, password, username);
      
      if (error) {
        return { success: false, error: error.message };
      }
      
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  };

  const handleSignOut = async () => {
    try {
      await authService.signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAdmin,
        isSubscribed,
        isLoading,
        signIn,
        signUp,
        signOut: handleSignOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
