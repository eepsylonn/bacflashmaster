
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
          console.log("Session stockée en local:", storedSession ? "Présente" : "Absente");
          
          if (storedSession) {
            const sessionData = JSON.parse(storedSession);
            console.log("Données de session récupérées:", sessionData);
            setSession(sessionData.session);
            setUser(sessionData.session?.user ?? null);
            
            if (sessionData.session?.user) {
              console.log("Email de l'utilisateur:", sessionData.session.user.email);
              // Si c'est l'admin en mode développement
              if (sessionData.session.user.email === 'admin@example.com') {
                console.log("Utilisateur admin détecté dans AuthContext");
                const adminProfile = {
                  id: sessionData.session.user.id,
                  username: 'admin',
                  email: 'admin@example.com',
                  role: 'admin',
                  created_at: new Date().toISOString()
                };
                setUserProfile(adminProfile);
                setIsAdmin(true);
                console.log("IsAdmin défini à TRUE");
              } else {
                const userProfile = {
                  id: sessionData.session.user.id,
                  username: sessionData.session.user.user_metadata?.username || sessionData.session.user.email?.split('@')[0],
                  email: sessionData.session.user.email,
                  role: 'user',
                  created_at: new Date().toISOString()
                };
                setUserProfile(userProfile);
                setIsAdmin(false);
                console.log("IsAdmin défini à FALSE");
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
        console.log("Changement d'état d'authentification:", _event, session);
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(true);
        
        if (session?.user) {
          if (isLocalDev) {
            // Mode développement local
            localStorage.setItem('supabase.auth.session', JSON.stringify({ session }));
            console.log("Session enregistrée dans localStorage");
            
            // Si c'est l'admin en mode développement
            if (session.user.email === 'admin@example.com') {
              console.log("Admin connecté en mode dev dans l'écouteur d'état");
              const adminProfile = {
                id: session.user.id,
                username: 'admin',
                email: 'admin@example.com',
                role: 'admin',
                created_at: new Date().toISOString()
              };
              setUserProfile(adminProfile);
              setIsAdmin(true);
              console.log("IsAdmin mis à jour à TRUE dans l'écouteur d'état");
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
              console.log("IsAdmin mis à jour à FALSE dans l'écouteur d'état");
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
            console.log("Session supprimée du localStorage");
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
      if (user.email === 'admin@example.com') {
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
