
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import UsersPanel from '@/components/admin/UsersPanel';
import StatsPanel from '@/components/admin/StatsPanel';
import NotificationsPanel from '@/components/admin/NotificationsPanel';
import { Search } from 'lucide-react';

const Admin = () => {
  const { isAdmin, isLoading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('users');
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    // Rediriger si l'utilisateur n'est pas admin
    if (!isLoading && !isAdmin) {
      navigate('/');
    }
  }, [isAdmin, isLoading, navigate]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-xl font-medium">Chargement...</div>
        </main>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h1 className="text-3xl font-bold mb-4 md:mb-0">Panel d'Administration</h1>
            
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Rechercher..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          
          <Card className="p-6 bg-white rounded-xl shadow-sm">
            <Tabs defaultValue="users" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full mb-6 grid grid-cols-3">
                <TabsTrigger value="users">Utilisateurs</TabsTrigger>
                <TabsTrigger value="stats">Statistiques</TabsTrigger>
                <TabsTrigger value="notifications">Notifications</TabsTrigger>
              </TabsList>
              
              <TabsContent value="users" className="space-y-4">
                <UsersPanel searchQuery={searchQuery} />
              </TabsContent>
              
              <TabsContent value="stats" className="space-y-4">
                <StatsPanel />
              </TabsContent>
              
              <TabsContent value="notifications" className="space-y-4">
                <NotificationsPanel />
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Admin;
