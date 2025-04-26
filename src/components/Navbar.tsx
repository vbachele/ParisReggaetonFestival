import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-primary/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-text-primary">
            PRF
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text-primary hover:text-white transition-colors">
              Accueil
            </Link>
            <Link to="/planning" className="text-text-primary hover:text-white transition-colors">
              Planning
            </Link>
            <Link to="/info" className="text-text-primary hover:text-white transition-colors">
              Infos
            </Link>
            <Link to="/contact" className="text-text-primary hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-text-primary hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Accueil
              </Link>
              <Link
                to="/planning"
                className="block px-3 py-2 text-text-primary hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Planning
              </Link>
              <Link
                to="/info"
                className="block px-3 py-2 text-text-primary hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Infos
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-text-primary hover:text-white transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}; 