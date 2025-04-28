import { Phone, Mail, Facebook, Instagram, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { links } from '@/config/links';

const ContactCard = () => {
  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-text-primary/90 to-text-primary">
      <CardContent className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-title"> Association Ambiance Zumba Reggaeton</h2>
        </div>

        {/* Team Section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center font-title">Notre Équipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Philippe */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src="/contact/farah.jpg" 
                    alt="Philippe" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-title">PHILIPPE</h4>
                  <p className="text-white/80 text-sm font-body">Président</p>
                </div>
              </div>
            </div>

            {/* Farah */}
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src="/contact/farah.jpg" 
                    alt="Farah" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white font-title">FARAH</h4>
                  <p className="text-white/80 text-sm font-body">Directrice Artistique</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-body">Téléphone</p>
                <a href="tel:0670423211" className="text-white hover:text-white/80 transition-colors">
                  +33 6 70 42 32 11
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-body">Email</p>
                <a href={links.social.email} className="text-white hover:text-white/80 transition-colors">
                  ambiance-zumba@hotmail.fr
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-body">Facebook</p>
                <a href={links.social.facebook} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Ambiance Zumba Reggaeton
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Instagram className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-body">Instagram</p>
                <a href={links.social.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  @farah_alwayswannadance
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-white/10 p-3 rounded-full">
                <Facebook className="h-6 w-6 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-sm font-body">Facebook Farah</p>
                <a href="https://www.facebook.com/farah.alwayswannadance" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors">
                  Farah Always Wanna Dance
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Website - Full Width */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <div className="bg-white/10 p-3 rounded-full">
            <Globe className="h-6 w-6 text-white" />
          </div>
          <div>
            <p className="text-white/60 text-sm font-body">Site Web</p>
            <a href="https://farahalwayswannadance.podia.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/80 transition-colors whitespace-nowrap">
              farahalwayswannadance.podia.com
            </a>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default ContactCard; 