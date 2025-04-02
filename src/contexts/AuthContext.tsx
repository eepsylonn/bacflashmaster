
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { supabase } from '@/lib/supabase';
import { Session, User } from '@supabase/supabase-js';

interface AuthContextType {
  session: Session | null;
  user: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  isAdmin: boolean;
  isSubscribed: boolean;
  signOut: () => Promise<void>;
  checkSubscription: () => Promise<boolean>;
}

interface UserProfile {
  id: string;
  username: string | null;
  email: string | null;
  role: string;
  created_at: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Vérification si on est en mode développement local
  const isLocalDev = 
    (!import.meta.env.VITE_SUPABASE_URL || 
     !import.meta.env.VITE_SUPABASE_ANON_KEY ||
     import.meta.env.VITE_SUPABASE_URL === 'https://your-supabase-url.supabase.co' ||
     import.meta.env.VITE_SUPABASE_ANON_KEY === 'your-anon-key');
  
  // Pour déboguer
  console.log("Mode développement local:", isLocalDev);
  
  useEffect(() => {
    const setData = async () => {
      try {
        if (isLocalDev) {
          // Vérifier si l'utilisateur est connecté en local (localStorage)
          const storedSession = localStorage.getItem('supabase.auth.session');
          
          if (storedSession) {
            const sessionData = JSON.parse(storedSession);
            console.log("Session locale récupérée:", sessionData);
            setSession(sessionData.session);
            setUser(sessionData.session?.user ?? null);
            
            if (sessionData.session?.user) {
              // Vérifier si c'est l'admin en mode développement
              const isAdminAccount = 
                sessionData.session.user.email === 'admin@example.com' || 
                sessionData.session.user.user_metadata?.role === 'admin';
                
              console.log("Vérification admin:", isAdminAccount, sessionData.session.user);
              
              if (isAdminAccount) {
                console.log("Utilisateur admin détecté! Active les fonctionnalités admin.");
                const adminProfile = {
                  id: sessionData.session.user.id,
                  username: 'admin',
                  email: 'admin@example.com',
                  role: 'admin',
                  created_at: new Date().toISOString()
                };
                setUserProfile(adminProfile);
                setIsAdmin(true);
              } else {
                console.log("Utilisateur standard détecté");
                const userProfile = {
                  id: sessionData.session.user.id,
                  username: sessionData.session.user.user_metadata?.username || sessionData.session.user.email?.split('@')[0],
                  email: sessionData.session.user.email,
                  role: 'user',
                  created_at: new Date().toISOString()
                };
                setUserProfile(userProfile);
                setIsAdmin(false);
              }
              // Vérifier l'abonnement
              const subscribed = await checkSubscription();
              setIsSubscribed(subscribed);
            }
          }
        } else {
          // Mode production avec Supabase
          const { data: { session }, error } = await supabase.auth.getSession();
          if (error) throw error;
          
          setSession(session);
          setUser(session?.user ?? null);
          
          if (session?.user) {
            // Vérifier si l'utilisateur est admin et obtenir son profil
            const { data, error } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .single();
            
            if (!error && data) {
              setUserProfile(data);
              setIsAdmin(data.role === 'admin');
              console.log("Rôle utilisateur:", data.role);
            }
            
            // Vérifier l'abonnement
            const subscribed = await checkSubscription();
            setIsSubscribed(subscribed);
          }
        }
      } catch (error) {
        console.error('Erreur lors de la récupération de la session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    setData();

    // Écouter les changements d'authentification
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (_event, session) => {
        console.log("Changement d'état d'authentification:", _event, session?.user);
        
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(true);
        
        if (session?.user) {
          if (isLocalDev) {
            // Mode développement local
            localStorage.setItem('supabase.auth.session', JSON.stringify({ session }));
            
            // Vérifier si c'est l'admin en mode développement
            const isAdminAccount = 
              session.user.email === 'admin@example.com' || 
              session.user.user_metadata?.role === 'admin';
            
            console.log("Est admin?", isAdminAccount);
            
            if (isAdminAccount) {
              console.log("Admin connecté en mode dev");
              const adminProfile = {
                id: session.user.id,
                username: 'admin',
                email: 'admin@example.com',
                role: 'admin',
                created_at: new Date().toISOString()
              };
              setUserProfile(adminProfile);
              setIsAdmin(true);
            } else {
              const userProfile = {
                id: session.user.id,
                username: session.user.user_metadata?.username || session.user.email?.split('@')[0],
                email: session.user.email,
                role: 'user',
                created_at: new Date().toISOString()
              };
              setUserProfile(userProfile);
              setIsAdmin(false);
            }
          } else {
            // Mode production avec Supabase
            // Vérifier si l'utilisateur est admin et obtenir son profil
            const { data, error } = await supabase
              .from('profiles')
              .select('*')
              .eq('id', session.user.id)
              .single();
            
            if (!error && data) {
              console.log("Profil utilisateur récupéré:", data);
              setUserProfile(data);
              setIsAdmin(data.role === 'admin');
            }
          }
          
          // Vérifier l'abonnement
          const subscribed = await checkSubscription();
          setIsSubscribed(subscribed);
        } else {
          if (isLocalDev) {
            localStorage.removeItem('supabase.auth.session');
          }
          setUserProfile(null);
          setIsAdmin(false);
          setIsSubscribed(false);
        }
        
        setIsLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [isLocalDev]);

  const signOut = async () => {
    if (isLocalDev) {
      localStorage.removeItem('supabase.auth.session');
      setSession(null);
      setUser(null);
      setUserProfile(null);
      setIsAdmin(false);
      setIsSubscribed(false);
    } else {
      await supabase.auth.signOut();
    }
  };

  const checkSubscription = async (): Promise<boolean> => {
    if (!user) return false;

    if (isLocalDev) {
      // En mode développement, on considère l'admin comme abonné
      if (user.email === 'admin@example.com' || user.user_metadata?.role === 'admin') {
        return true;
      }
      
      // Vérifier si l'utilisateur a un abonnement dans le localStorage
      const storedSubscription = localStorage.getItem('user.subscription');
      return storedSubscription === 'active';
    }

    try {
      // Vérifier si l'utilisateur a un abonnement actif
      const { data, error } = await supabase
        .from('subscriptions')
        .select('*')
        .eq('user_id', user.id)
        .eq('status', 'active')
        .single();

      if (error) {
        console.error('Erreur lors de la vérification de l\'abonnement:', error);
        return false;
      }

      return !!data;
    } catch (error) {
      console.error('Erreur lors de la vérification de l\'abonnement:', error);
      return false;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        user,
        userProfile,
        isLoading,
        isAdmin,
        isSubscribed,
        signOut,
        checkSubscription
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l\'intérieur d\'un AuthProvider');
  }
  return context;
};
