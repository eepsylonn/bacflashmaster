import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useDiplome } from '@/contexts/DiplomeContext';
import { Brain, BookOpen, Award, TrendingUp, History, ArrowRight, Calendar, Medal, Zap, LightbulbIcon, BookOpenText, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  const { diplome } = useDiplome();
  
  const diplomeName = {
    'baccalaureat': 'Baccalauréat',
    'toeic': 'TOEIC',
    'tage-mage': 'TAGE MAGE'
  }[diplome || 'baccalaureat'] || 'votre diplôme';
  
  const features = [
    {
      icon: <Brain className="h-7 w-7 text-indigo-600" />,
      title: "Entraînement intelligent",
      description: "Système adaptatif qui s'ajuste à votre niveau et concentre vos efforts sur ce qui est le plus important."
    },
    {
      icon: <BookOpen className="h-7 w-7 text-blue-600" />,
      title: "Contenu exhaustif",
      description: `Toutes les matières pour réussir ${diplomeName} avec des milliers de flashcards couvrant le programme officiel.`
    },
    {
      icon: <Award className="h-7 w-7 text-green-600" />,
      title: "Suivi de progression",
      description: "Visualisez votre progression et identifiez vos points forts et vos axes d'amélioration."
    }
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i, duration: 0.5 }
    })
  };
  
  return (
    <div className="space-y-8 pb-8">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-3 px-4 pt-6"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-app-blue-dark">
          Bienvenue sur FlashBac'
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {diplome ? 
            `Préparez-vous efficacement pour ${diplomeName} grâce à notre méthode de révision basée sur les flashcards.` : 
            'Choisissez un diplôme et commencez à réviser efficacement avec notre méthode de flashcards.'}
        </p>
      </motion.section>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <Card className="h-full">
              <CardContent className="p-5 flex flex-col items-center text-center space-y-3">
                <div className="mt-2 bg-blue-50 rounded-full p-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
      
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-app-blue-dark to-indigo-700 text-white overflow-hidden">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-between">
                <div className="mb-4 sm:mb-0 text-center sm:text-left">
                  <h3 className="text-xl font-bold mb-2">Commencez maintenant</h3>
                  <p className="text-gray-200 text-sm">
                    Accédez à votre entraînement quotidien ou lancez un examen pour tester vos connaissances.
                  </p>
                </div>
                <div className="flex flex-col xs:flex-row gap-3">
                  <Button asChild variant="secondary" className="bg-white text-app-blue-dark hover:bg-gray-100">
                    <Link to="/entrainement" className="flex items-center">
                      <TrendingUp className="h-4 w-4 mr-2" />
                      Entraînement
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/examen" className="flex items-center">
                      <History className="h-4 w-4 mr-2" />
                      Examen
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          <Link to="/statistiques">
            <Card className="hover:bg-gray-50 transition-colors h-full">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Mes statistiques</h3>
                  <p className="text-gray-600 text-sm">Suivez votre progression</p>
                </div>
                <TrendingUp className="h-5 w-5 text-app-blue-medium" />
              </CardContent>
            </Card>
          </Link>
          <Link to="/historique">
            <Card className="hover:bg-gray-50 transition-colors h-full">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Historique</h3>
                  <p className="text-gray-600 text-sm">Consultez vos sessions précédentes</p>
                </div>
                <History className="h-5 w-5 text-app-blue-medium" />
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      </div>
      
      {/* Nouvelle section : Astuces et conseils */}
      <div className="px-4 mt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <h2 className="text-xl font-semibold text-app-blue-dark mb-4">Astuces et conseils</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 border-indigo-100">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="bg-indigo-100 p-3 rounded-full mb-3">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="font-medium text-indigo-800">Planifiez vos révisions</h3>
                <p className="text-sm text-gray-600 mt-2">Révisez régulièrement 15-20 minutes par jour plutôt que plusieurs heures d'affilée.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-100">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="bg-blue-100 p-3 rounded-full mb-3">
                  <Medal className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-medium text-blue-800">Récompensez-vous</h3>
                <p className="text-sm text-gray-600 mt-2">Fixez-vous des objectifs et célébrez vos réussites pour rester motivé.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-50 to-teal-50 border-green-100">
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="bg-green-100 p-3 rounded-full mb-3">
                  <Zap className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-medium text-green-800">Variez les matières</h3>
                <p className="text-sm text-gray-600 mt-2">Alterner entre différents sujets améliore la mémorisation et évite la monotonie.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
      
      {/* Nouvelle section : Ressources */}
      <div className="px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-100">
            <CardContent className="p-5">
              <h3 className="font-semibold text-amber-800 flex items-center">
                <LightbulbIcon className="h-5 w-5 mr-2" />
                Ressources complémentaires
              </h3>
              
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                  <BookOpenText className="h-5 w-5 text-amber-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-sm">{diplomeName} : Les sujets probables</h4>
                    <p className="text-xs text-gray-600 mt-1">Consultez les thèmes prioritaires à réviser cette année.</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-white rounded-lg shadow-sm">
                  <FileText className="h-5 w-5 text-amber-600 mt-0.5 mr-3" />
                  <div>
                    <h4 className="font-medium text-sm">Fiches de méthodologie</h4>
                    <p className="text-xs text-gray-600 mt-1">Des conseils pratiques pour optimiser vos révisions.</p>
                  </div>
                </div>
              </div>
              
              <Button variant="link" className="mt-2 text-amber-700 p-0 h-auto font-medium" asChild>
                <Link to="/methodologie">
                  Voir toutes les ressources <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HomeContent;
