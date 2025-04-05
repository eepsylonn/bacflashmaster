
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Methodology from '@/pages/Methodology';
import Training from '@/pages/Training';
import Exam from '@/pages/Exam';
import History from '@/pages/History';
import HistoryDetail from '@/pages/HistoryDetail';
import Statistics from '@/pages/Statistics';
import Settings from '@/pages/Settings';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import Profile from '@/pages/Profile';
import Admin from '@/pages/Admin';
import Subscription from '@/pages/Subscription';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/contexts/AuthContext';
import { DiplomeProvider } from '@/contexts/DiplomeContext';
import { UserPreferencesProvider } from '@/contexts/UserPreferencesContext';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <DiplomeProvider>
          <UserPreferencesProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/methodologie" element={<Methodology />} />
              <Route path="/entrainement" element={<Training />} />
              <Route path="/examen" element={<Exam />} />
              <Route path="/historique" element={<History />} />
              <Route path="/historique/:id" element={<HistoryDetail />} />
              <Route path="/statistiques" element={<Statistics />} />
              <Route path="/reglages" element={<Settings />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/subscription" element={<Subscription />} />
              {/* Remove the separate route for TrainingResult since it's managed within Training page */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Toaster />
          </UserPreferencesProvider>
        </DiplomeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
