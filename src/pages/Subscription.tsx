
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Mascot from '@/components/Mascot';
import { useAuth } from '@/contexts/AuthContext';
import { Check } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';

const Subscription = () => {
  const { user, isSubscribed } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubscription = async () => {
    if (!user) {
      navigate('/login');
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulation d'un abonnement pour la démo
      // Dans un cas réel, cela serait remplacé par une intégration Stripe
      const { error } = await supabase
        .from('subscriptions')
        .insert({
          user_id: user.id,
          status: 'active',
          price: 799, // 7,99€
          currency: 'EUR',
          interval: 'month',
          start_date: new Date().toISOString(),
          next_billing_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() // +30 jours
        });
      
      if (error) throw error;
      
      toast({
        title: "Abonnement activé",
        description: "Merci pour votre abonnement! Vous avez maintenant accès à toutes les fonctionnalités.",
      });
      
      setTimeout(() => {
        navigate('/');
        window.location.reload(); // Pour recharger l'état d'abonnement
      }, 1500);
      
    } catch (error) {
      console.error('Erreur lors de l\'abonnement:', error);
      toast({
        title: "Échec de l'abonnement",
        description: "Une erreur s'est produite. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-8">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 5 }}
              className="mr-2"
            >
              <Mascot size="md" />
            </motion.div>
            <h1 className="text-3xl font-bold text-center">Abonnement Premium</h1>
          </div>
          
          <div className="max-w-md mx-auto">
            <Card className="p-8 shadow-xl bg-white rounded-xl border-2 border-app-blue-light relative overflow-hidden">
              {/* Badge Populaire */}
              <div className="absolute top-4 right-4 bg-amber-400 text-white px-3 py-1 rounded-full font-bold text-sm">
                Populaire
              </div>
              
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-app-blue-dark mb-2">Pack Premium</h2>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold">7,99€</span>
                  <span className="text-gray-500 ml-2">/mois</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Accès à toutes les fiches méthodologiques</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Accès au mode examen</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Accès aux statistiques détaillées</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Assistance prioritaire</span>
                </div>
                <div className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2" />
                  <span>Sans engagement - Annulez à tout moment</span>
                </div>
              </div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  onClick={handleSubscription}
                  disabled={isLoading || isSubscribed}
                  className="w-full bg-gradient-to-r from-app-blue-medium to-app-blue-dark text-white hover:opacity-90 text-lg py-6 rounded-lg"
                >
                  {isLoading ? (
                    "Traitement en cours..."
                  ) : isSubscribed ? (
                    "Déjà abonné"
                  ) : (
                    "S'abonner maintenant"
                  )}
                </Button>
              </motion.div>
              
              {!user && (
                <p className="text-center mt-4 text-sm text-gray-500">
                  Un compte est requis pour s'abonner. Vous serez redirigé vers la page de connexion.
                </p>
              )}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Subscription;
