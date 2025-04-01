import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { useDiplome } from '@/contexts/DiplomeContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Slider } from '@/components/ui/slider';
import { Settings as SettingsIcon, Save, RotateCcw, BookOpen, PenTool, BellRing, Palette, EyeOff, Sun, Moon, GraduationCap, BookOpenText, ChevronDown, ChevronUp, Globe, BookmarkCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';

const Settings = () => {
  const { diplome, setDiplome, showDiplomeSelector } = useDiplome();
  const [selectedDiplome, setSelectedDiplome] = useState<string>(diplome || '');
  const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');
  const [notificationsEnabled, setNotificationsEnabled] = useState<boolean>(localStorage.getItem('notifications') !== 'false');
  const [fontSize, setFontSize] = useState<number>(Number(localStorage.getItem('fontSize') || 100));
  const [cardsPerDay, setCardsPerDay] = useState<number>(Number(localStorage.getItem('cardsPerDay') || 20));
  const [hideAnsweredCards, setHideAnsweredCards] = useState<boolean>(localStorage.getItem('hideAnsweredCards') === 'true');
  const [writeAnswers, setWriteAnswers] = useState<boolean>(localStorage.getItem('writeAnswers') === 'true');
  const [showMoreDiplomas, setShowMoreDiplomas] = useState<boolean>(false);
  const { toast } = useToast();

  useEffect(() => {
    setSelectedDiplome(diplome || '');
  }, [diplome]);

  const handleSaveSettings = () => {
    setDiplome(selectedDiplome as any);
    
    localStorage.setItem('darkMode', darkMode.toString());
    localStorage.setItem('notifications', notificationsEnabled.toString());
    localStorage.setItem('fontSize', fontSize.toString());
    localStorage.setItem('cardsPerDay', cardsPerDay.toString());
    localStorage.setItem('hideAnsweredCards', hideAnsweredCards.toString());
    localStorage.setItem('writeAnswers', writeAnswers.toString());
    
    document.documentElement.style.fontSize = `${fontSize}%`;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    toast({
      title: "Paramètres enregistrés",
      description: "Vos préférences ont été mises à jour.",
      duration: 3000,
    });
  };

  const handleReset = () => {
    localStorage.removeItem('diplomeSelected');
    localStorage.removeItem('diplomeType');
    localStorage.removeItem('darkMode');
    localStorage.removeItem('notifications');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('cardsPerDay');
    localStorage.removeItem('hideAnsweredCards');
    localStorage.removeItem('writeAnswers');
    window.location.reload();
  };

  const mainDiplomas = [
    {
      id: 'baccalaureat',
      title: 'Baccalauréat',
      description: 'Programme de Première et Terminale',
      icon: <GraduationCap className="h-5 w-5" />
    },
    {
      id: 'toeic',
      title: 'TOEIC',
      description: 'Test d\'anglais international',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 'tage-mage',
      title: 'TAGE MAGE',
      description: 'Test d\'aptitude aux études de gestion',
      icon: <PenTool className="h-5 w-5" />
    }
  ];

  const extraDiplomas = [
    {
      id: 'toefl',
      title: 'TOEFL',
      description: 'Test d\'anglais langue étrangère',
      icon: <Globe className="h-5 w-5" />
    },
    {
      id: 'ielts',
      title: 'IELTS',
      description: 'Système international de test de langue anglaise',
      icon: <BookmarkCheck className="h-5 w-5" />
    },
    {
      id: 'cambridge',
      title: 'Cambridge',
      description: 'Examens d\'anglais de Cambridge',
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      id: 'gmat',
      title: 'GMAT',
      description: 'Test d\'admission aux études de gestion',
      icon: <PenTool className="h-5 w-5" />
    },
    {
      id: 'brevet',
      title: 'Brevet',
      description: 'Diplôme national du brevet',
      icon: <GraduationCap className="h-5 w-5" />
    }
  ];

  const allDiplomas = [...mainDiplomas, ...(showMoreDiplomas ? extraDiplomas : [])];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 dark:text-white">
      <Header />
      
      <main className="flex-grow py-6 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-app-blue-dark to-indigo-700 text-white rounded-t-lg">
                <div className="flex items-center">
                  <SettingsIcon className="h-6 w-6 mr-2" />
                  <CardTitle>Réglages</CardTitle>
                </div>
                <CardDescription className="text-gray-200">
                  Personnalisez votre expérience d'apprentissage
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-0">
                <Tabs defaultValue="diplome" className="w-full">
                  <TabsList className="w-full grid grid-cols-4 rounded-none h-auto">
                    <TabsTrigger value="diplome" className="py-2">
                      <div className="flex flex-col items-center justify-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1">
                        <BookOpen className="h-4 w-4" /> 
                        <span className="text-xs sm:text-sm">Diplôme</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="apparence" className="py-2">
                      <div className="flex flex-col items-center justify-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1">
                        <Palette className="h-4 w-4" /> 
                        <span className="text-xs sm:text-sm">Apparence</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="etude" className="py-2">
                      <div className="flex flex-col items-center justify-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1">
                        <PenTool className="h-4 w-4" /> 
                        <span className="text-xs sm:text-sm">Étude</span>
                      </div>
                    </TabsTrigger>
                    <TabsTrigger value="notification" className="py-2">
                      <div className="flex flex-col items-center justify-center space-y-1 sm:flex-row sm:space-y-0 sm:space-x-1">
                        <BellRing className="h-4 w-4" /> 
                        <span className="text-xs sm:text-sm">Notif.</span>
                      </div>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="diplome" className="pt-4 px-4 pb-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Diplôme à réviser</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {allDiplomas.map((diploma) => (
                          <motion.div 
                            key={diploma.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`border-2 rounded-lg p-4 cursor-pointer transition-all relative ${selectedDiplome === diploma.id ? 'border-app-blue-medium bg-app-blue-light/10' : 'border-gray-200 hover:border-gray-300'}`}
                            onClick={() => setSelectedDiplome(diploma.id)}
                          >
                            <div className="flex flex-col items-center text-center">
                              <div className={`h-12 w-12 rounded-full flex items-center justify-center mb-2 ${selectedDiplome === diploma.id ? 'bg-app-blue-medium text-white' : 'bg-gray-100 text-gray-600'}`}>
                                {diploma.icon}
                              </div>
                              <h4 className="font-semibold">{diploma.title}</h4>
                              <p className="text-sm text-gray-500 mt-1">{diploma.description}</p>
                            </div>
                            
                            {selectedDiplome === diploma.id && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="absolute bottom-0 right-0 bg-app-blue-medium text-white rounded-full p-1 flex items-center justify-center"
                                style={{ width: 20, height: 20, right: 8, bottom: 8 }}
                              />
                            )}
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="mt-4 flex flex-col space-y-2">
                        <button 
                          onClick={() => setShowMoreDiplomas(!showMoreDiplomas)}
                          className="text-app-blue-medium hover:text-app-blue-dark flex items-center justify-center text-sm self-center py-1"
                        >
                          {showMoreDiplomas ? (
                            <>
                              <ChevronUp className="h-4 w-4 mr-1" />
                              Afficher moins
                            </>
                          ) : (
                            <>
                              <ChevronDown className="h-4 w-4 mr-1" />
                              Afficher plus de diplômes
                            </>
                          )}
                        </button>
                        
                        <Button 
                          onClick={showDiplomeSelector}
                          variant="outline" 
                          className="w-full"
                        >
                          Ouvrir le sélecteur de diplôme
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="apparence" className="pt-4 px-4 pb-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Apparence</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="dark-mode" className="font-medium">Mode sombre</Label>
                            <p className="text-sm text-muted-foreground">Activer le thème sombre</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Sun className="h-4 w-4 text-gray-500" />
                            <Switch 
                              id="dark-mode"
                              checked={darkMode}
                              onCheckedChange={setDarkMode}
                            />
                            <Moon className="h-4 w-4 text-gray-500" />
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <Label htmlFor="font-size" className="font-medium">Taille de la police</Label>
                            <span className="text-sm font-medium">{fontSize}%</span>
                          </div>
                          <Slider
                            id="font-size"
                            min={80}
                            max={150}
                            step={5}
                            value={[fontSize]}
                            onValueChange={(values) => setFontSize(values[0])}
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>Petit</span>
                            <span>Normal</span>
                            <span>Grand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="etude" className="pt-4 px-4 pb-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Paramètres d'étude</h3>
                      
                      <div className="space-y-4">
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <Label htmlFor="cards-per-day" className="font-medium">Nombre de cartes par jour</Label>
                            <span className="text-sm font-medium">{cardsPerDay} cartes</span>
                          </div>
                          <Slider
                            id="cards-per-day"
                            min={5}
                            max={100}
                            step={5}
                            value={[cardsPerDay]}
                            onValueChange={(values) => setCardsPerDay(values[0])}
                          />
                          <div className="flex justify-between text-sm text-gray-500">
                            <span>5</span>
                            <span>50</span>
                            <span>100</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="hide-answered" className="font-medium">Masquer les cartes répondues</Label>
                            <p className="text-sm text-muted-foreground">Ne plus afficher les cartes correctement répondues</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <EyeOff className="h-4 w-4 text-gray-500" />
                            <Switch 
                              id="hide-answered"
                              checked={hideAnsweredCards}
                              onCheckedChange={setHideAnsweredCards}
                            />
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="write-answers" className="font-medium">Écrire les réponses</Label>
                            <p className="text-sm text-muted-foreground">Possibilité d'écrire vos réponses avant de vérifier</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <BookOpenText className="h-4 w-4 text-gray-500" />
                            <Switch 
                              id="write-answers"
                              checked={writeAnswers}
                              onCheckedChange={setWriteAnswers}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="notification" className="pt-4 px-4 pb-6 space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Notifications</h3>
                      
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-0.5">
                            <Label htmlFor="notifications" className="font-medium">Activer les notifications</Label>
                            <p className="text-sm text-muted-foreground">Rappels quotidiens pour réviser</p>
                          </div>
                          <Switch 
                            id="notifications"
                            checked={notificationsEnabled}
                            onCheckedChange={setNotificationsEnabled}
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="p-4 border-t">
                  <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3">
                    <Button 
                      onClick={handleSaveSettings}
                      className="bg-app-blue-medium hover:bg-app-blue-dark flex-1"
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
                      Réinitialiser
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
