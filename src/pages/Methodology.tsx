
import { useState } from 'react';
import Header from '@/components/Header';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpenText, FileText, Book, ChevronRight } from 'lucide-react';
import { useDiplome } from '@/contexts/DiplomeContext';
import { motion } from 'framer-motion';

const methodologiesMatieres = {
  'baccalaureat': [
    { id: 'maths', name: 'Mathématiques', icon: <Book className="h-5 w-5 text-blue-600" /> },
    { id: 'francais', name: 'Français', icon: <Book className="h-5 w-5 text-red-600" /> },
    { id: 'histoire', name: 'Histoire-Géographie', icon: <Book className="h-5 w-5 text-amber-600" /> },
    { id: 'philo', name: 'Philosophie', icon: <Book className="h-5 w-5 text-purple-600" /> },
    { id: 'sciences', name: 'Sciences', icon: <Book className="h-5 w-5 text-green-600" /> },
  ],
  'toeic': [
    { id: 'listening', name: 'Listening', icon: <Book className="h-5 w-5 text-blue-600" /> },
    { id: 'reading', name: 'Reading', icon: <Book className="h-5 w-5 text-indigo-600" /> },
    { id: 'grammar', name: 'Grammar', icon: <Book className="h-5 w-5 text-violet-600" /> },
    { id: 'vocabulary', name: 'Vocabulary', icon: <Book className="h-5 w-5 text-pink-600" /> },
  ],
  'tage-mage': [
    { id: 'calcul', name: 'Calcul', icon: <Book className="h-5 w-5 text-green-600" /> },
    { id: 'logique', name: 'Logique', icon: <Book className="h-5 w-5 text-orange-600" /> },
    { id: 'verbal', name: 'Verbal', icon: <Book className="h-5 w-5 text-purple-600" /> },
  ]
};

type FicheInfo = {
  title: string;
  content: string[];
}

// Contenu fictif pour les fiches méthodologiques
const fichesMatieres: Record<string, Record<string, FicheInfo[]>> = {
  'baccalaureat': {
    'maths': [
      {
        title: "Comment aborder un problème de géométrie",
        content: [
          "1. Lisez attentivement l'énoncé et identifiez ce qui est demandé.",
          "2. Faites un schéma clair et précis.",
          "3. Notez toutes les données fournies sur le schéma.",
          "4. Identifiez les théorèmes qui pourraient être utiles.",
          "5. Procédez étape par étape en justifiant chaque affirmation."
        ]
      },
      {
        title: "Méthode pour résoudre une équation différentielle",
        content: [
          "1. Identifiez le type d'équation différentielle.",
          "2. Pour une équation du premier ordre à variables séparables: y' = f(x)g(y), réarrangez pour obtenir dy/g(y) = f(x)dx puis intégrez.",
          "3. Pour une équation linéaire du premier ordre: y' + a(x)y = b(x), utilisez un facteur intégrant.",
          "4. N'oubliez pas de déterminer la constante d'intégration en utilisant les conditions initiales."
        ]
      }
    ],
    'francais': [
      {
        title: "Structure d'une dissertation littéraire",
        content: [
          "1. Introduction: présentez le sujet, la problématique et annoncez le plan.",
          "2. Développement: organisez en 2 ou 3 parties, chacune divisée en sous-parties avec exemples.",
          "3. Conclusion: résumez votre argumentation et élargissez la réflexion.",
          "4. Utilisez des connecteurs logiques pour assurer la fluidité du texte.",
          "5. Citez précisément les œuvres avec auteur, titre, date et extrait pertinent."
        ]
      }
    ],
    // ... autres matières
  },
  'toeic': {
    'listening': [
      {
        title: "Techniques d'écoute efficaces",
        content: [
          "1. Lisez les questions avant l'écoute pour savoir quoi chercher.",
          "2. Concentrez-vous sur les mots-clés et les chiffres.",
          "3. Notez rapidement les informations importantes pendant l'écoute.",
          "4. Entraînez-vous à comprendre différents accents.",
          "5. Ne restez pas bloqué sur une question, passez à la suivante si nécessaire."
        ]
      }
    ],
    // ... autres matières
  },
  'tage-mage': {
    'calcul': [
      {
        title: "Astuces de calcul mental rapide",
        content: [
          "1. Pour multiplier par 11: pour 11 × 25, additionnez les chiffres (2+5=7) et insérez entre eux: 275.",
          "2. Pour calculer un pourcentage: 15% de 40 = 10% de 40 + 5% de 40 = 4 + 2 = 6.",
          "3. Pour diviser par 5: divisez par 10 puis multipliez par 2.",
          "4. Mémorisez les carrés des nombres de 1 à 20.",
          "5. Apprenez à décomposer les calculs complexes en étapes simples."
        ]
      }
    ],
    // ... autres matières
  }
};

const Methodology = () => {
  const { diplome } = useDiplome();
  const [selectedMatiere, setSelectedMatiere] = useState<string | null>(null);
  
  const diplomeName = {
    'baccalaureat': 'Baccalauréat',
    'toeic': 'TOEIC',
    'tage-mage': 'TAGE MAGE'
  }[diplome || 'baccalaureat'] || 'votre diplôme';
  
  const matieres = methodologiesMatieres[diplome as keyof typeof methodologiesMatieres] || methodologiesMatieres.baccalaureat;
  
  const fiches = selectedMatiere && fichesMatieres[diplome as keyof typeof fichesMatieres]?.[selectedMatiere];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50 to-orange-50">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-2xl sm:text-3xl font-bold text-amber-800 mb-2">
              Fiches de méthodologie
            </h1>
            <p className="text-amber-700">
              Découvrez nos fiches méthodologiques pour vous aider à réussir {diplomeName}.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Matières</CardTitle>
                  <CardDescription>Sélectionnez une matière</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {matieres.map((matiere) => (
                      <li key={matiere.id}>
                        <button
                          onClick={() => setSelectedMatiere(matiere.id)}
                          className={`w-full text-left p-3 flex items-center hover:bg-amber-50 transition-colors ${
                            selectedMatiere === matiere.id ? 'bg-amber-100 font-medium' : ''
                          }`}
                        >
                          <span className="mr-3">{matiere.icon}</span>
                          {matiere.name}
                          <ChevronRight className="h-4 w-4 ml-auto" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div className="md:col-span-3">
              {selectedMatiere ? (
                fiches && fiches.length > 0 ? (
                  <div className="space-y-6">
                    {fiches.map((fiche, index) => (
                      <Card key={index} className="bg-white border-amber-200">
                        <CardHeader className="bg-gradient-to-r from-amber-100 to-amber-50">
                          <CardTitle className="text-amber-800 flex items-center">
                            <FileText className="h-5 w-5 mr-2 text-amber-600" />
                            {fiche.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="pt-4">
                          <ul className="space-y-2">
                            {fiche.content.map((point, idx) => (
                              <li key={idx} className="text-gray-700">
                                {point}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <Card className="bg-amber-50">
                    <CardContent className="p-6 text-center">
                      <BookOpenText className="h-12 w-12 mx-auto text-amber-400 mb-3" />
                      <p className="text-amber-800">
                        Les fiches pour cette matière seront bientôt disponibles.
                      </p>
                    </CardContent>
                  </Card>
                )
              ) : (
                <Card className="bg-amber-50">
                  <CardContent className="p-6 text-center">
                    <BookOpenText className="h-12 w-12 mx-auto text-amber-400 mb-3" />
                    <p className="text-amber-800">
                      Sélectionnez une matière pour voir les fiches de méthodologie associées.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Methodology;
