
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { supabaseExt } from '@/lib/supabase';
import { useToast } from '@/components/ui/use-toast';
import { CalendarIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const NotificationsPanel = () => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [scheduledDate, setScheduledDate] = useState<Date | undefined>(undefined);
  const [isScheduled, setIsScheduled] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const { toast } = useToast();

  const handleSendNotification = async () => {
    if (!title || !message) {
      toast({
        title: "Champs manquants",
        description: "Veuillez remplir le titre et le message de la notification",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    try {
      // Créer la notification dans la base de données
      const { error } = await supabaseExt
        .from('notifications')
        .insert({
          title,
          message,
          scheduled_for: isScheduled && scheduledDate ? scheduledDate.toISOString() : null,
          status: isScheduled && scheduledDate ? 'scheduled' : 'sent',
          created_at: new Date().toISOString()
        });

      if (error) throw error;

      toast({
        title: isScheduled ? "Notification programmée" : "Notification envoyée",
        description: isScheduled 
          ? `La notification sera envoyée le ${format(scheduledDate!, 'PPP', { locale: fr })}`
          : "La notification a été envoyée à tous les utilisateurs"
      });

      // Réinitialiser le formulaire
      setTitle('');
      setMessage('');
      setScheduledDate(undefined);
      setIsScheduled(false);
    } catch (error) {
      console.error('Erreur lors de l\'envoi de la notification:', error);
      toast({
        title: "Erreur",
        description: "Impossible d'envoyer ou de programmer la notification",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Gestion des Notifications</h2>
      
      <Card className="p-6 bg-white mb-6">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Titre de la notification</Label>
            <Input
              id="title"
              placeholder="Entrez le titre"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Entrez le message de la notification"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="schedule"
              checked={isScheduled}
              onChange={(e) => setIsScheduled(e.target.checked)}
              className="rounded border-gray-300"
            />
            <Label htmlFor="schedule">Programmer l'envoi</Label>
          </div>
          
          {isScheduled && (
            <div>
              <Label>Date d'envoi</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !scheduledDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {scheduledDate ? format(scheduledDate, 'PPP', { locale: fr }) : <span>Sélectionner une date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={scheduledDate}
                    onSelect={setScheduledDate}
                    initialFocus
                    locale={fr}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </div>
          )}
          
          <Button
            onClick={handleSendNotification}
            disabled={isSending || (isScheduled && !scheduledDate)}
            className="w-full"
          >
            {isSending
              ? "En cours..."
              : isScheduled
                ? "Programmer la notification"
                : "Envoyer maintenant"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default NotificationsPanel;
