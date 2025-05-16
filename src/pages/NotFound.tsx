import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-background-primary text-white">
      <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold mb-6">Oops! Page non trouvée.</h2>
      <p className="text-lg mb-8">
        Il semble que la page que vous cherchez n'existe pas ou a été déplacée.
      </p>
     
        <Link 
          to="/"
          className="w-full md:w-auto bg-text-primary text-white text-xl md:text-2xl font-bold px-10 py-4 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105"
        >
          Retourner à l'accueil
      </Link>
    </div>
  );
};

export default NotFound; 