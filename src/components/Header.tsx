import { useState, useEffect } from 'react';
import { DesktopHeader } from './header/DesktopHeader';
import { MobileHeader } from './header/MobileHeader';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-text-primary backdrop-blur-md' : 'bg-text-primary backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between ">
          <DesktopHeader />
          <MobileHeader />
        </div>
      </div>
    </nav>
  );
}; 