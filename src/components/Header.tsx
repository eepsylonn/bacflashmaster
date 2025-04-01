
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <header className="bg-app-blue-dark text-white py-4">
      <div className="container px-4 mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link to="/" className="text-2xl font-bold mb-3 md:mb-0">BacFlashMaster</Link>
        <nav className="flex space-x-6">
          <NavLink to="/" currentPath={location.pathname}>Accueil</NavLink>
          <NavLink to="/entrainement" currentPath={location.pathname}>Entraînement</NavLink>
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
      className={`px-2 py-1 rounded transition-colors ${
        isActive 
          ? 'text-white font-medium border-b-2 border-app-blue-light' 
          : 'text-gray-200 hover:text-white'
      }`}
    >
      {children}
    </Link>
  );
};

export default Header;
