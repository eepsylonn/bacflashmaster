
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import * as authService from '@/services/authService';
import { useToast } from '@/components/ui/use-toast';

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
  const { toast } = useToast();

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
        
        console.log("État isAdmin:", userIsAdmin);
        console.log("État user:", user);
      } catch (error) {
        console.error('Error initializing auth:', error);
        toast({
          title: "Erreur d'authentification",
          description: "Une erreur est survenue lors de l'initialisation de l'authentification",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    initAuth();

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        console.log("Événement d'authentification:", event);
        
        if (event === 'SIGNED_IN' && session?.user) {
          setUser(session.user);
          
          try {
            // Get the user profile to check if admin
            const { data } = await supabase
              .from('profiles')
              .select('role')
              .eq('id', session.user.id)
              .maybeSingle();
              
            const userIsAdmin = data?.role === 'admin';
            setIsAdmin(userIsAdmin);
            
            // In a real app, you would check subscription status here
            setIsSubscribed(userIsAdmin || false);
            
            console.log("Utilisateur connecté:", session.user);
            console.log("Est admin:", userIsAdmin);
          } catch (error) {
            console.error('Erreur lors de la récupération du profil:', error);
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setIsAdmin(false);
          setIsSubscribed(false);
          console.log("Utilisateur déconnecté");
        }
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [toast]);

  const signIn = async (emailOrUsername: string, password: string) => {
    try {
      const { data, error } = await authService.signInWithEmailOrUsername(emailOrUsername, password);
      
      if (error) {
        console.error("Erreur de connexion:", error.message);
        return { success: false, error: error.message };
      }
      
      console.log("Connexion réussie:", data);
      return { success: true };
    } catch (error: any) {
      console.error("Exception lors de la connexion:", error.message);
      return { success: false, error: error.message };
    }
  };

  const signUp = async (email: string, password: string, username?: string) => {
    try {
      const { data, error } = await authService.signUpWithEmail(email, password, username);
      
      if (error) {
        console.error("Erreur d'inscription:", error.message);
        return { success: false, error: error.message };
      }
      
      console.log("Inscription réussie:", data);
      return { success: true };
    } catch (error: any) {
      console.error("Exception lors de l'inscription:", error.message);
      return { success: false, error: error.message };
    }
  };

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      console.log("Déconnexion réussie");
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Erreur de déconnexion",
        description: "Une erreur est survenue lors de la déconnexion",
        variant: "destructive",
      });
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
