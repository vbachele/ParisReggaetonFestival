import { Phone, Mail, Facebook, Instagram, Globe } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { links } from '@/config/links';
import { ContactItem } from './ContactItem';

const ContactCard = () => {
  const contactItems = [
    {
      icon: <Phone className="h-6 w-6 text-white" />,
      label: "Téléphone",
      content: "+33 6 70 42 32 11",
      href: "tel:0670423211"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      label: "Email",
      content: "ambiance-zumba@hotmail.fr",
      href: links.social.email
    }
  ];

  const socialItems = [
    {
      icon: <Instagram className="h-6 w-6 text-white" />,
      label: "Instagram",
      content: "@farah_alwayswannadance",
      href: links.social.instagram,
      isExternal: true
    },
    {
      icon: <Facebook className="h-6 w-6 text-white" />,
      label: "Facebook Farah",
      content: "Farah Always Wanna Dance",
      href: "https://www.facebook.com/farah.alwayswannadance",
      isExternal: true
    }
  ];

  return (
    <Card className="max-w-2xl mx-auto bg-gradient-to-br from-text-primary/90 to-text-primary">
      <CardContent className="py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2 font-title">Association Ambiance Zumba Reggaeton</h2>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center font-title">Notre Équipe</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 rounded-xl p-4">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-white/10">
                  <img 
                    src="/contact/philippe.jpg" 
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
            {contactItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            {socialItems.map((item, index) => (
              <ContactItem key={index} {...item} />
            ))}
          </div>
        </div>

        {/* Website - Full Width */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <ContactItem
            icon={<Globe className="h-6 w-6 text-white" />}
            label="Site Web"
            content="farahalwayswannadance.podia.com"
            href="https://farahalwayswannadance.podia.com/"
            isExternal={true}
            className="text-sm md:text-base break-all"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactCard; 