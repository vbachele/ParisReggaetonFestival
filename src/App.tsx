import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Info from './pages/Info';
import { Planning } from './pages/Planning';
import Contact from './pages/Contact';
import { colors } from './styles/designSystem';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#4323FC]/80 backdrop-blur-md' : 'bg-[#4323FC]/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl md:text-2xl font-bold text-white flex items-center gap-2"
          >
            <span className=" text-white bg-clip-text">
              Paris Reggaeton Festival
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'text-white font-bold' 
                  : 'text-white font-semibold hover:text-[#9964FF]'
              }`} 
              // from-[#9964FF] to-[#4323FC]
            >
              Accueil
            </Link>
            <Link
              to="/info"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/info') 
                  ? 'text-white font-bold' 
                  : 'text-white font-semibold hover:text-white'
              }`}
            >
              Infos
            </Link>
            <Link
              to="/planning"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/planning') 
                  ? 'text-white font-bold' 
                  : 'text-white font-semibold hover:text-white'
              }`}
            >
              Planning
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/contact') 
                  ? 'text-white font-bold' 
                  : 'text-white font-semibold hover:text-[#9964FF]'
              }`}
            >
              Contact
            </Link>
            <a
              href="https://my.weezevent.com/paris-reggaeton-festival"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 mr-2 px-4 py-1.5 bg-white text-[#4323FC] font-bold rounded-lg hover:bg-amber-300 transition-colors"
            >
              Billetterie
            </a>
          
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden py-4`}>
          <div className="flex flex-col space-y-2">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/') 
                  ? 'text-white font-semibold' 
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/info"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/info') 
                  ? 'text-amber-400 font-semibold' 
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Infos
            </Link>
            <Link
              to="/planning"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/planning') 
                  ? 'text-white font-semibold' 
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Planning
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/contact') 
                  ? 'text-white font-semibold' 
                  : 'text-white hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a
              href="https://my.weezevent.com/paris-reggaeton-festival"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1.5 bg-white text-[#4323FC] font-bold rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Billetterie
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div className={`min-h-screen bg-[${colors.background.primary}]`}>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<Info />} />
            <Route path="/planning" element={<Planning />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
