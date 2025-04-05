
import { useState, useEffect } from 'react';
import { supabaseExt } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/components/ui/use-toast';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Edit, Trash, UserCheck, UserX } from 'lucide-react';

interface User {
  id: string;
  email: string;
  created_at: string;
  role: string;
  is_subscribed: boolean;
  last_login: string;
}

interface UsersPanelProps {
  searchQuery: string;
}

const UsersPanel = ({ searchQuery }: UsersPanelProps) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  // Vérifier si on est en mode développement local
  const isLocalDev = 
    (!import.meta.env.VITE_SUPABASE_URL || 
     !import.meta.env.VITE_SUPABASE_ANON_KEY ||
     import.meta.env.VITE_SUPABASE_URL === 'https://your-supabase-url.supabase.co' ||
     import.meta.env.VITE_SUPABASE_ANON_KEY === 'your-anon-key');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      if (isLocalDev) {
        console.log('Mode développement local activé, simulation des données utilisateurs');
        
        // Simuler des données utilisateurs en mode développement
        const mockUsers: User[] = [
          {
            id: '00000000-0000-0000-0000-000000000000',
            email: 'admin@example.com',
            created_at: new Date().toLocaleDateString(),
            role: 'admin',
            is_subscribed: true,
            last_login: new Date().toLocaleDateString()
          },
          {
            id: '12345678-1234-1234-1234-123456789012',
            email: 'user1@example.com',
            created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            role: 'user',
            is_subscribed: false,
            last_login: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toLocaleDateString()
          },
          {
            id: '87654321-4321-4321-4321-210987654321',
            email: 'user2@example.com',
            created_at: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toLocaleDateString(),
            role: 'user',
            is_subscribed: true,
            last_login: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toLocaleDateString()
          }
        ];
        
        setUsers(mockUsers);
      } else {
        // Mode production avec Supabase réel
        const { data: profiles, error } = await supabaseExt
          .from('profiles')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Get subscription status for each user
        const formattedUsers = await Promise.all(profiles.map(async (profile: any) => {
          const { data: subscriptions } = await supabaseExt
            .from('subscriptions')
            .select('*')
            .eq('user_id', profile.id)
            .eq('status', 'active')
            .maybeSingle();

          return {
            id: profile.id,
            email: profile.email || 'N/A',
            created_at: new Date(profile.created_at).toLocaleDateString(),
            role: profile.role || 'user',
            is_subscribed: !!subscriptions,
            last_login: profile.last_login ? new Date(profile.last_login).toLocaleDateString() : 'Jamais'
          };
        }));

        setUsers(formattedUsers);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des utilisateurs:', error);
      toast({
        title: "Erreur",
        description: "Impossible de récupérer les utilisateurs",
        variant: "destructive"
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    user => 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleRoleToggle = async (userId: string, currentRole: string) => {
    try {
      const newRole = currentRole === 'admin' ? 'user' : 'admin';
      
      if (isLocalDev) {
        // Simuler la mise à jour en mode développement
        setUsers(users.map(user => 
          user.id === userId ? { ...user, role: newRole } : user
        ));
      } else {
        // Mode production avec Supabase réel
        const { error } = await supabaseExt
          .from('profiles')
          .update({ role: newRole })
          .eq('id', userId);

        if (error) throw error;
        
        setUsers(users.map(user => 
          user.id === userId ? { ...user, role: newRole } : user
        ));
      }

      toast({
        title: "Rôle mis à jour",
        description: `L'utilisateur est maintenant ${newRole === 'admin' ? 'administrateur' : 'utilisateur standard'}`
      });
    } catch (error) {
      console.error('Erreur lors de la mise à jour du rôle:', error);
      toast({
        title: "Erreur",
        description: "Impossible de mettre à jour le rôle",
        variant: "destructive"
      });
    }
  };

  const handleSubscriptionToggle = async (userId: string, isCurrentlySubscribed: boolean) => {
    try {
      if (isLocalDev) {
        // Simuler la mise à jour en mode développement
        setUsers(users.map(user => 
          user.id === userId ? { ...user, is_subscribed: !isCurrentlySubscribed } : user
        ));
      } else {
        if (isCurrentlySubscribed) {
          // Désactiver l'abonnement existant
          const { error } = await supabaseExt
            .from('subscriptions')
            .update({ status: 'inactive' })
            .eq('user_id', userId)
            .eq('status', 'active');

          if (error) throw error;
        } else {
          // Créer un nouvel abonnement
          const { error } = await supabaseExt
            .from('subscriptions')
            .insert({
              user_id: userId,
              status: 'active',
              price: 799,
              currency: 'EUR',
              interval: 'month',
              start_date: new Date().toISOString(),
              next_billing_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
            });

          if (error) throw error;
        }
        
        setUsers(users.map(user => 
          user.id === userId ? { ...user, is_subscribed: !isCurrentlySubscribed } : user
        ));
      }

      toast({
        title: isCurrentlySubscribed ? "Abonnement désactivé" : "Abonnement activé",
        description: isCurrentlySubscribed ? 
          "L'abonnement a été désactivé avec succès" : 
          "L'abonnement a été activé avec succès"
      });
    } catch (error) {
      console.error('Erreur lors de la modification de l\'abonnement:', error);
      toast({
        title: "Erreur",
        description: "Impossible de modifier l'abonnement",
        variant: "destructive"
      });
    }
  };

  const handleDeleteUser = async (userId: string) => {
    try {
      if (isLocalDev) {
        // Simuler la suppression en mode développement
        setUsers(users.filter(user => user.id !== userId));
      } else {
        // Supprimer l'utilisateur de la base de données
        const { error } = await supabaseExt
          .from('profiles')
          .delete()
          .eq('id', userId);

        if (error) throw error;
        
        setUsers(users.filter(user => user.id !== userId));
      }
      
      setIsDialogOpen(false);
      
      toast({
        title: "Utilisateur supprimé",
        description: "L'utilisateur a été supprimé avec succès"
      });
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'utilisateur:', error);
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'utilisateur",
        variant: "destructive"
      });
    }
  };

  const openUserDetails = (user: User) => {
    setSelectedUser(user);
    setIsDialogOpen(true);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Gestion des Utilisateurs</h2>
      
      {loading ? (
        <div className="text-center py-8">Chargement des utilisateurs...</div>
      ) : (
        <>
          <div className="rounded-md border overflow-hidden mb-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Email</TableHead>
                  <TableHead>Date d'inscription</TableHead>
                  <TableHead>Dernière connexion</TableHead>
                  <TableHead>Admin</TableHead>
                  <TableHead>Abonné</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredUsers.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-8">
                      Aucun utilisateur trouvé
                    </TableCell>
                  </TableRow>
                ) : (
                  filteredUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.email}</TableCell>
                      <TableCell>{user.created_at}</TableCell>
                      <TableCell>{user.last_login}</TableCell>
                      <TableCell>
                        <Switch 
                          checked={user.role === 'admin'}
                          onCheckedChange={() => handleRoleToggle(user.id, user.role)}
                        />
                      </TableCell>
                      <TableCell>
                        <Switch 
                          checked={user.is_subscribed}
                          onCheckedChange={() => handleSubscriptionToggle(user.id, user.is_subscribed)}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={() => openUserDetails(user)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {selectedUser && (
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Détails de l'utilisateur</DialogTitle>
                  <DialogDescription>
                    Informations et actions pour {selectedUser.email}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="font-medium">Email:</div>
                    <div>{selectedUser.email}</div>
                    
                    <div className="font-medium">Inscrit le:</div>
                    <div>{selectedUser.created_at}</div>
                    
                    <div className="font-medium">Dernière connexion:</div>
                    <div>{selectedUser.last_login}</div>
                    
                    <div className="font-medium">Rôle:</div>
                    <div>{selectedUser.role === 'admin' ? 'Administrateur' : 'Utilisateur'}</div>
                    
                    <div className="font-medium">Abonnement:</div>
                    <div>{selectedUser.is_subscribed ? 'Actif' : 'Inactif'}</div>
                  </div>
                  
                  <div className="flex flex-col space-y-2 mt-4">
                    <Button 
                      variant={selectedUser.role === 'admin' ? "destructive" : "default"}
                      onClick={() => handleRoleToggle(selectedUser.id, selectedUser.role)}
                    >
                      {selectedUser.role === 'admin' ? (
                        <><UserX className="h-4 w-4 mr-2" /> Retirer les droits admin</>
                      ) : (
                        <><UserCheck className="h-4 w-4 mr-2" /> Rendre administrateur</>
                      )}
                    </Button>
                    
                    <Button 
                      variant={selectedUser.is_subscribed ? "destructive" : "default"}
                      onClick={() => handleSubscriptionToggle(selectedUser.id, selectedUser.is_subscribed)}
                    >
                      {selectedUser.is_subscribed ? "Désactiver l'abonnement" : "Activer l'abonnement"}
                    </Button>
                    
                    <Button 
                      variant="destructive" 
                      onClick={() => handleDeleteUser(selectedUser.id)}
                    >
                      <Trash className="h-4 w-4 mr-2" /> Supprimer l'utilisateur
                    </Button>
                  </div>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </>
      )}
    </div>
  );
};

export default UsersPanel;
