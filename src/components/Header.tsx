
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-gradient-to-r from-app-blue-dark to-indigo-800 text-white py-5 shadow-md">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-3xl font-bold mb-3 md:mb-0 flex items-center gap-2 group">
          <BookOpen className="h-8 w-8 text-yellow-300 group-hover:rotate-12 transition-transform" />
          <span className="text-gradient-title font-extrabold">
            <span className="animate-pulse inline-block">F</span>
            <span className="animate-pulse inline-block delay-75">l</span>
            <span className="animate-pulse inline-block delay-100">a</span>
            <span className="animate-pulse inline-block delay-125">s</span>
            <span className="animate-pulse inline-block delay-150">h</span>
            <span className="animate-pulse inline-block delay-175">B</span>
            <span className="animate-pulse inline-block delay-200">a</span>
            <span className="animate-pulse inline-block delay-225">c</span>
            <span className="animate-pulse inline-block delay-250">'</span>
          </span>
        </Link>
        <nav className="flex space-x-1 sm:space-x-2 md:space-x-6">
          <NavLink to="/" currentPath={location.pathname}>Accueil</NavLink>
          <NavLink to="/entrainement" currentPath={location.pathname}>Entraînement</NavLink>
          <NavLink to="/examen" currentPath={location.pathname}>Examen</NavLink>
          <NavLink to="/historique" currentPath={location.pathname}>Historique</NavLink>
          <NavLink to="/statistiques" currentPath={location.pathname}>Statistiques</NavLink>
        </nav>
      </div>
    </header>
  );
};

interface NavLinkProps {
  to: string;
  currentPath: string;
  children: React.ReactNode;
}

const NavLink = ({ to, currentPath, children }: NavLinkProps) => {
  const isActive = currentPath === to;
  
  return (
    <Link 
      to={to} 
      className={`px-2 py-1 rounded-lg transition-all hover:bg-white/10 ${
        isActive 
          ? 'bg-white/20 text-white font-medium scale-105' 
          : 'text-gray-200 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;
