import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, XCircle } from 'lucide-react';
import { links } from '@/config/links';

export const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { label: 'Accueil', to: '/' },
    { label: 'Planning', to: '/planning' },
    { label: 'Infos', to: '/info' },
    { label: 'Boutique', to: '/boutique' },
    { label: 'Contact', to: '/contact' },
  ];

  // Animation variants for the menu container and items
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="md:hidden">
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 py-4 w-full bg-text-primary backdrop-blur-m">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/logos/logo_officiel.png"
            alt="Paris Reggaeton Festival"
            className="h-10 w-auto"
          />
        </Link>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? (
            <XCircle className="w-10 h-10  rounded-full" />
          ) : (
            <Menu className="w-10 h-10" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <motion.div
          key="mobile-menu"
          className="flex flex-col space-y-4 min-h-screen py-8 px-2 gap-4 mt-24"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
        >
          {menuItems.map((item ) => (
            <motion.div
              key={item.to}
              variants={itemVariants}
              transition={{ duration: 0.4 }}
            >
              <Link
                to={item.to}
                className={`px-4 py-4 text-2xl font-extrabold uppercase tracking-wide rounded-lg transition-all font-righteous ${
                  isActive(item.to) ? 'text-white' : 'text-white hover:text-amber-300'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            variants={itemVariants}
            transition={{ duration: 0.4 }}
          >
            <Link
              to={links.internal.tickets}
              className="px-4 py-4 text-2xl font-extrabold uppercase tracking-wide rounded-lg transition-all text-text-primary font-righteous bg-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Billetterie
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}; 