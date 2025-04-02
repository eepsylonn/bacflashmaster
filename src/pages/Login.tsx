
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';

const Login = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<'sign_in' | 'sign_up'>('sign_in');

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
            
            <Auth
              supabaseClient={supabase}
              appearance={{ theme: ThemeSupa }}
              theme="light"
              providers={['google']}
              redirectTo={window.location.origin}
              view={view}
              localization={{
                variables: {
                  sign_in: {
                    email_label: 'Adresse email',
                    password_label: 'Mot de passe',
                    button_label: 'Se connecter',
                    social_provider_text: 'Continuer avec {{provider}}',
                    link_text: 'Vous avez déjà un compte? Connectez-vous',
                  },
                  sign_up: {
                    email_label: 'Adresse email',
                    password_label: 'Mot de passe',
                    button_label: 'S\'inscrire',
                    social_provider_text: 'Continuer avec {{provider}}',
                    link_text: 'Vous n\'avez pas de compte? Inscrivez-vous',
                  },
                }
              }}
            />
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Login;
