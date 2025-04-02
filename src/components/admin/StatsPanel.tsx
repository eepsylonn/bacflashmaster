
import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { supabase } from '@/lib/supabase';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const StatsPanel = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalSubscribers: 0,
    activeToday: 0,
    activeThisMonth: 0
  });
  const [userGrowthData, setUserGrowthData] = useState<any[]>([]);
  const [trainingData, setTrainingData] = useState<any[]>([]);

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true);
      try {
        // Récupérer le nombre total d'utilisateurs
        const { count: totalUsers } = await supabase
          .from('profiles')
          .select('*', { count: 'exact', head: true });

        // Récupérer le nombre d'abonnés
        const { count: totalSubscribers } = await supabase
          .from('subscriptions')
          .select('*', { count: 'exact', head: true })
          .eq('status', 'active');

        // Récupérer le nombre d'utilisateurs actifs aujourd'hui
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const { count: activeToday } = await supabase
          .from('user_activity')
          .select('*', { count: 'exact', head: true })
          .gte('timestamp', today.toISOString());

        // Récupérer le nombre d'utilisateurs actifs ce mois
        const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const { count: activeThisMonth } = await supabase
          .from('user_activity')
          .select('*', { count: 'exact', head: true })
          .gte('timestamp', firstDayOfMonth.toISOString());

        // Générer des données fictives pour le graphique de croissance des utilisateurs
        const mockUserGrowthData = [
          { month: 'Jan', users: 120 },
          { month: 'Fév', users: 150 },
          { month: 'Mar', users: 200 },
          { month: 'Avr', users: 220 },
          { month: 'Mai', users: 270 },
          { month: 'Juin', users: 310 },
          { month: 'Juil', users: 350 },
          { month: 'Aoû', users: 410 },
          { month: 'Sep', users: 450 },
          { month: 'Oct', users: 490 },
          { month: 'Nov', users: 530 },
          { month: 'Déc', users: totalUsers || 580 }
        ];

        // Données fictives pour l'entraînement par matière
        const mockTrainingData = [
          { matiere: 'Mathématiques', sessions: 245 },
          { matiere: 'Français', sessions: 198 },
          { matiere: 'Histoire-Géo', sessions: 176 },
          { matiere: 'Physique-Chimie', sessions: 154 },
          { matiere: 'SVT', sessions: 132 },
          { matiere: 'Anglais', sessions: 210 }
        ];

        setStats({
          totalUsers: totalUsers || 0,
          totalSubscribers: totalSubscribers || 0,
          activeToday: activeToday || 0,
          activeThisMonth: activeThisMonth || 0
        });

        setUserGrowthData(mockUserGrowthData);
        setTrainingData(mockTrainingData);
      } catch (error) {
        console.error('Erreur lors de la récupération des statistiques:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Chargement des statistiques...</div>;
  }

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Tableau de Bord</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Utilisateurs Totaux</h3>
          <p className="text-3xl font-bold text-app-blue-dark">{stats.totalUsers}</p>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Abonnés</h3>
          <p className="text-3xl font-bold text-app-blue-dark">{stats.totalSubscribers}</p>
          <p className="text-sm text-gray-500 mt-2">
            {stats.totalUsers > 0 
              ? `${Math.round((stats.totalSubscribers / stats.totalUsers) * 100)}% des utilisateurs` 
              : '0% des utilisateurs'}
          </p>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Actifs Aujourd'hui</h3>
          <p className="text-3xl font-bold text-app-blue-dark">{stats.activeToday}</p>
        </Card>
        
        <Card className="p-6 text-center">
          <h3 className="text-lg font-medium text-gray-500 mb-2">Actifs ce Mois</h3>
          <p className="text-3xl font-bold text-app-blue-dark">{stats.activeThisMonth}</p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Croissance des Utilisateurs</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userGrowthData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="users" 
                  name="Utilisateurs" 
                  stroke="#3273DC" 
                  strokeWidth={2} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <Card className="p-6">
          <h3 className="text-lg font-medium mb-4">Sessions d'Entraînement par Matière</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={trainingData}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="matiere" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar 
                  dataKey="sessions" 
                  name="Sessions" 
                  fill="#78AAFF" 
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StatsPanel;
