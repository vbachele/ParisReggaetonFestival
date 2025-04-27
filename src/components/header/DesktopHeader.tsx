import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { links } from '@/config/links';

export const DesktopHeader = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="hidden md:flex items-center w-full">
      <div className="flex items-center ">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logos/logo_officiel.png"
            alt="Paris Reggaeton Festival"
            className="h-12 md:h-20 py-3 w-auto"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4 ml-auto">
        <Link to="/" className={`px-4 py-2 rounded-lg transition-all ${isActive('/') ? 'text-white font-bold' : 'text-white font-semibold hover:text-[#9964FF]'}`}>Accueil</Link>
        <Link to="/info" className={`px-4 py-2 rounded-lg transition-all ${isActive('/info') ? 'text-white font-bold' : 'text-white font-semibold hover:text-[#9964FF]'}`}>Infos</Link>
        <Link to="/planning" className={`px-4 py-2 rounded-lg transition-all ${isActive('/planning') ? 'text-white font-bold' : 'text-white font-semibold hover:text-[#9964FF]'}`}>Planning</Link>
        <Link to="/contact" className={`px-4 py-2 rounded-lg transition-all ${isActive('/contact') ? 'text-white font-bold' : 'text-white font-semibold hover:text-[#9964FF]'}`}>Contact</Link>
        <Link 
          to={links.internal.tickets} 
          className="ml-4 mr-2 px-4 py-1.5 bg-white text-text-primary font-bold rounded-lg hover:bg-amber-300 transition-colors"
        >
          Billetterie
        </Link>
      </div>
    </div>
  );
}; 