
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { supabase } from '@/integrations/supabase/client';
import * as authService from '@/services/authService';
import { useToast } from '@/components/ui/use-toast';

interface UserProfile {
  id: string;
  username: string;
  email: string;
  role: string;
  created_at: string;
  updated_at: string;
  last_login: string | null;
}

interface AuthContextType {
  user: any | null;
  profile: UserProfile | null;
  isAdmin: boolean;
  isSubscribed: boolean;
  isLoading: boolean;
  signIn: (emailOrUsername: string, password: string) => Promise<{ success: boolean, error?: string }>;
  signUp: (email: string, password: string, username?: string) => Promise<{ success: boolean, error?: string }>;
  signOut: () => Promise<void>;
  updateProfile: (data: Partial<UserProfile>) => Promise<{ success: boolean, error?: string }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    const initAuth = async () => {
      setIsLoading(true);
      try {
        // Set up auth state change listener FIRST
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          async (event, session) => {
            console.log("Auth state change event:", event);
            
            if (event === 'SIGNED_IN' && session?.user) {
              // Use setTimeout to prevent potential recursive auth calls
              setTimeout(async () => {
                try {
                  const { user: currentUser, profile: userProfile, isAdmin: userIsAdmin } = 
                    await authService.getCurrentUser();
                  
                  setUser(currentUser);
                  setProfile(userProfile);
                  setIsAdmin(userIsAdmin);
                  setIsSubscribed(userIsAdmin || false); // Admins are subscribed by default
                  
                  console.log("User signed in:", { currentUser, userProfile, userIsAdmin });
                } catch (error) {
                  console.error("Error fetching user after auth state change:", error);
                }
              }, 0);
            } else if (event === 'SIGNED_OUT') {
              setUser(null);
              setProfile(null);
              setIsAdmin(false);
              setIsSubscribed(false);
              console.log("User signed out");
            }
          }
        );

        // THEN check for existing session
        const { user: currentUser, profile: userProfile, isAdmin: userIsAdmin } = 
          await authService.getCurrentUser();
          
        setUser(currentUser);
        setProfile(userProfile);
        setIsAdmin(userIsAdmin);
        setIsSubscribed(userIsAdmin || false);
        
        console.log("Initial auth state:", { currentUser, userProfile, userIsAdmin });
        
        return () => {
          subscription.unsubscribe();
        };
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
  }, [toast]);

  const signIn = async (emailOrUsername: string, password: string) => {
    try {
      const { data, error } = await authService.signInWithEmailOrUsername(emailOrUsername, password);
      
      if (error) {
        console.error("Login error:", error.message);
        return { success: false, error: error.message };
      }
      
      console.log("Login successful:", data);
      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté",
      });
      return { success: true };
    } catch (error: any) {
      console.error("Exception during login:", error.message);
      return { success: false, error: error.message };
    }
  };

  const signUp = async (email: string, password: string, username?: string) => {
    try {
      const { data, error } = await authService.signUpWithEmail(email, password, username);
      
      if (error) {
        console.error("Signup error:", error.message);
        toast({
          title: "Erreur d'inscription", 
          description: error.message,
          variant: "destructive",
        });
        return { success: false, error: error.message };
      }
      
      console.log("Signup successful:", data);
      toast({
        title: "Inscription réussie",
        description: "Votre compte a été créé. Vous pouvez maintenant vous connecter.",
      });
      return { success: true };
    } catch (error: any) {
      console.error("Exception during signup:", error.message);
      return { success: false, error: error.message };
    }
  };

  const handleSignOut = async () => {
    try {
      await authService.signOut();
      console.log("Logout successful");
      toast({
        title: "Déconnexion réussie",
        description: "Vous êtes maintenant déconnecté",
      });
    } catch (error) {
      console.error('Error signing out:', error);
      toast({
        title: "Erreur de déconnexion",
        description: "Une erreur est survenue lors de la déconnexion",
        variant: "destructive",
      });
    }
  };

  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      const { data: updatedProfile, error } = await authService.updateUserProfile(data);
      
      if (error) {
        console.error("Profile update error:", error);
        toast({
          title: "Erreur de mise à jour",
          description: "Une erreur est survenue lors de la mise à jour du profil",
          variant: "destructive",
        });
        return { success: false, error: error.message };
      }
      
      if (updatedProfile && updatedProfile[0]) {
        setProfile(updatedProfile[0] as UserProfile);
        toast({
          title: "Profil mis à jour",
          description: "Votre profil a été mis à jour avec succès",
        });
      }
      
      return { success: true };
    } catch (error: any) {
      console.error("Exception during profile update:", error.message);
      return { success: false, error: error.message };
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        isAdmin,
        isSubscribed,
        isLoading,
        signIn,
        signUp,
        signOut: handleSignOut,
        updateProfile
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
