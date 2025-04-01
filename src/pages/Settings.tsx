
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { useDiplome } from '@/contexts/DiplomeContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Settings as SettingsIcon, Save, RotateCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { diplome, setDiplome } = useDiplome();
  const [selectedDiplome, setSelectedDiplome] = useState<string>(diplome || '');
  const { toast } = useToast();

  useEffect(() => {
    // Mettre à jour la sélection lorsque le diplôme change dans le contexte
    setSelectedDiplome(diplome || '');
  }, [diplome]);

  const handleSaveSettings = () => {
    setDiplome(selectedDiplome as any);
    toast({
      title: "Paramètres enregistrés",
      description: `Votre diplôme a été défini sur : ${
        selectedDiplome === 'baccalaureat' ? 'Baccalauréat' :
        selectedDiplome === 'toeic' ? 'TOEIC' :
        selectedDiplome === 'tage-mage' ? 'TAGE MAGE' : 'Non défini'
      }`,
      duration: 3000,
    });
  };

  const handleReset = () => {
    // Réinitialiser l'application
    localStorage.removeItem('diplomeSelected');
    localStorage.removeItem('diplomeType');
    window.location.reload();
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50">
      <Header />
      
      <main className="flex-grow py-8 px-4">
        <div className="container mx-auto max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <CardHeader className="bg-gradient-to-r from-app-blue-dark to-indigo-700 text-white rounded-t-lg">
                <div className="flex items-center">
                  <SettingsIcon className="h-6 w-6 mr-2" />
                  <CardTitle>Réglages</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Personnalisez votre expérience d'apprentissage
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Diplôme à réviser</h3>
                    <RadioGroup 
                      value={selectedDiplome} 
                      onValueChange={setSelectedDiplome}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                        <RadioGroupItem value="baccalaureat" id="baccalaureat" />
                        <Label htmlFor="baccalaureat" className="flex-grow cursor-pointer">
                          <div className="font-medium">Baccalauréat</div>
                          <div className="text-sm text-gray-500">Programme de Première et Terminale</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                        <RadioGroupItem value="toeic" id="toeic" />
                        <Label htmlFor="toeic" className="flex-grow cursor-pointer">
                          <div className="font-medium">TOEIC</div>
                          <div className="text-sm text-gray-500">Test d'anglais international</div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 border p-3 rounded-md hover:bg-gray-50">
                        <RadioGroupItem value="tage-mage" id="tage-mage" />
                        <Label htmlFor="tage-mage" className="flex-grow cursor-pointer">
                          <div className="font-medium">TAGE MAGE</div>
                          <div className="text-sm text-gray-500">Test d'aptitude aux études de gestion</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <div className="flex flex-col space-y-3 pt-4">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-app-blue-medium hover:bg-app-blue-dark"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Enregistrer les modifications
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      onClick={handleReset}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Réinitialiser l'application
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
