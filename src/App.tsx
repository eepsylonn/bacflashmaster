
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DiplomeProvider } from "@/contexts/DiplomeContext";
import Index from "./pages/Index";
import Training from "./pages/Training";
import Exam from "./pages/Exam";
import History from "./pages/History";
import HistoryDetail from "./pages/HistoryDetail";
import Statistics from "./pages/Statistics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Methodology from "./pages/Methodology";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <DiplomeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entrainement" element={<Training />} />
            <Route path="/examen" element={<Exam />} />
            <Route path="/historique" element={<History />} />
            <Route path="/historique/:id" element={<HistoryDetail />} />
            <Route path="/statistiques" element={<Statistics />} />
            <Route path="/reglages" element={<Settings />} />
            <Route path="/methodologie" element={<Methodology />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </DiplomeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
