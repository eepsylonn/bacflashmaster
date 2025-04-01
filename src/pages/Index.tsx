
import { useEffect } from 'react';
import Header from '@/components/Header';
import HomeContent from '@/components/HomeContent';
import { useDiplome } from '@/contexts/DiplomeContext';

const Index = () => {
  const { isFirstOpen } = useDiplome();
  
  useEffect(() => {
    // Initialiser les réglages utilisateur s'ils n'existent pas
    if (localStorage.getItem('fontSize') === null) {
      localStorage.setItem('fontSize', '100');
    }
    
    if (localStorage.getItem('darkMode') === null) {
      localStorage.setItem('darkMode', 'false');
    }
    
    if (localStorage.getItem('writeAnswers') === null) {
      localStorage.setItem('writeAnswers', 'false');
    }
    
    // Appliquer les réglages utilisateur
    const fontSize = localStorage.getItem('fontSize') || '100';
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    document.documentElement.style.fontSize = `${fontSize}%`;
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 dark:text-white relative">
      <Header />
      <main className="flex-grow flex flex-col justify-center pb-20">
        <HomeContent />
      </main>
    </div>
  );
};

export default Index;
