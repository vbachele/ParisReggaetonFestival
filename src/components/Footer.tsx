import { Mail, Facebook, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className={`w-full bg-text-primary text-white mt-auto`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/80">
            © 2024 Paris Reggaeton Festival. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:ambiance-zumba@hotmail.fr"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a 
              href="#" 
              className="text-white/80 hover:text-white transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="#"
              className="text-white/80 hover:text-white transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          <div className="text-sm text-white/80">
            <a 
              href="mailto:ambiance-zumba@hotmail.fr" 
              className="hover:text-white transition-colors"
            >
              ambiance-zumba@hotmail.fr
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 