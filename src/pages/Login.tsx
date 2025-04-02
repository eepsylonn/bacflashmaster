
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase, signInWithEmailOrUsername } from '@/lib/supabase';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff, Mail, Lock, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [view, setView] = useState<'sign_in' | 'sign_up'>('sign_in');
  const [isLoading, setIsLoading] = useState(false);

  // Formulaire de connexion
  const [credentials, setCredentials] = useState({
    emailOrUsername: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
  });
  
  const [showPassword, setShowPassword] = useState(false);
  
  // Si l'utilisateur est déjà connecté, rediriger vers la page d'accueil
  if (user) {
    navigate('/');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { data, error } = await signInWithEmailOrUsername(
        credentials.emailOrUsername,
        credentials.password
      );
      
      if (error) {
        throw error;
      }
      
      // Connexion réussie
      toast({
        title: "Connexion réussie",
        description: "Vous êtes maintenant connecté.",
      });
      
      navigate('/');
    } catch (error: any) {
      toast({
        title: "Échec de la connexion",
        description: error.message || "Identifiants incorrects. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    if (credentials.password !== credentials.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas.",
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }
    
    try {
      // Vérifier si le nom d'utilisateur existe déjà
      const { data: usernameExists } = await supabase
        .from('profiles')
        .select('username')
        .eq('username', credentials.username)
        .maybeSingle();
      
      if (usernameExists) {
        throw new Error("Ce nom d'utilisateur est déjà utilisé.");
      }
      
      // Créer un compte
      const { data, error } = await supabase.auth.signUp({
        email: credentials.email,
        password: credentials.password,
        options: {
          data: {
            username: credentials.username,
          },
        }
      });
      
      if (error) throw error;
      
      // Inscription réussie
      toast({
        title: "Inscription réussie",
        description: "Veuillez vérifier votre email pour confirmer votre compte.",
      });
      
      // Rediriger vers la page de connexion
      setView('sign_in');
    } catch (error: any) {
      toast({
        title: "Échec de l'inscription",
        description: error.message || "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/login`
        }
      });
      
      if (error) throw error;
    } catch (error: any) {
      toast({
        title: "Échec de la connexion avec Google",
        description: error.message || "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-12 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="p-8 shadow-lg bg-white rounded-xl border-2 border-app-blue-light">
            <div className="flex justify-center mb-6">
              <Mascot size="lg" animation="bounce" />
            </div>
            
            <h2 className="text-2xl font-bold text-center mb-6 text-app-blue-dark">
              {view === 'sign_in' ? 'Connexion' : 'Créer un compte'}
            </h2>
            
            <div className="tabs flex justify-center mb-6">
              <button 
                className={`px-4 py-2 mx-2 rounded-full ${view === 'sign_in' ? 'bg-app-blue-medium text-white' : 'bg-gray-100'}`}
                onClick={() => setView('sign_in')}
              >
                Connexion
              </button>
              <button 
                className={`px-4 py-2 mx-2 rounded-full ${view === 'sign_up' ? 'bg-app-blue-medium text-white' : 'bg-gray-100'}`}
                onClick={() => setView('sign_up')}
              >
                Inscription
              </button>
            </div>
            
            {view === 'sign_in' ? (
              // Formulaire de connexion
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="emailOrUsername">Email ou nom d'utilisateur</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <Input
                      id="emailOrUsername"
                      name="emailOrUsername"
                      type="text"
                      placeholder="Entrez votre email ou nom d'utilisateur"
                      value={credentials.emailOrUsername}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Mot de passe</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Entrez votre mot de passe"
                      value={credentials.password}
                      onChange={handleChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-app-blue-medium hover:bg-app-blue-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion en cours..." : "Se connecter"}
                </Button>
                
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <span className="mx-4 text-sm text-gray-500">ou</span>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Continuer avec Google
                </Button>
              </form>
            ) : (
              // Formulaire d'inscription
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Mail size={18} />
                    </div>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Entrez votre email"
                      value={credentials.email}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="username">Nom d'utilisateur</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <User size={18} />
                    </div>
                    <Input
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Choisissez un nom d'utilisateur"
                      value={credentials.username}
                      onChange={handleChange}
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Mot de passe</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input
                      id="signup-password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Créez un mot de passe"
                      value={credentials.password}
                      onChange={handleChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
                      <Lock size={18} />
                    </div>
                    <Input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={showPassword ? "text" : "password"}
                      placeholder="Confirmez votre mot de passe"
                      value={credentials.confirmPassword}
                      onChange={handleChange}
                      className="pl-10 pr-10"
                      required
                    />
                    <button 
                      type="button"
                      className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-app-blue-medium hover:bg-app-blue-dark"
                  disabled={isLoading}
                >
                  {isLoading ? "Inscription en cours..." : "S'inscrire"}
                </Button>
                
                <div className="relative flex items-center justify-center my-4">
                  <div className="border-t border-gray-300 flex-grow"></div>
                  <span className="mx-4 text-sm text-gray-500">ou</span>
                  <div className="border-t border-gray-300 flex-grow"></div>
                </div>
                
                <Button 
                  type="button" 
                  variant="outline" 
                  className="w-full"
                  onClick={handleGoogleSignIn}
                  disabled={isLoading}
                >
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5 mr-2" />
                  Continuer avec Google
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
