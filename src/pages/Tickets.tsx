import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Tickets = () => {
  useEffect(() => {
    // Load Weezevent script
    const script = document.createElement('script');
    script.src = 'https://widget.weezevent.com/weez.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  // Button click handler (for now, just scrolls to widget)
  const handleButtonClick = () => {
    const widget = document.querySelector('.weezevent-widget-integration');
    if (widget) {
      widget.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ticketButtonClass = "bg-text-primary text-white border-2 border-white font-bold px-6 py-3 rounded-lg text-base md:text-lg uppercase shadow hover:bg-white hover:text-text-primary transition";

  return (
    <Layout>
      <div className="flex flex-col items-center min-h-[80vh] w-full">
      <div className="md:block hidden relative w-full mt-14 h-[40vh] md:h-[400px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            
          </div>
        </div>
        <div className="md:hidden relative w-full mt-20 h-[48vh]">
          <img 
            src="/cover_Mobile_Raggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        
        </div>
        <div className="flex justify-center w-full">
          <Card className="w-full max-w-3xl border-0 shadow-2xl">
            <CardContent className="flex flex-col items-center py-0 mt-12 ">
              <CardHeader className="flex flex-col items-center py-12  bg-text-primary w-full rounded-xl gap-4">
                <p className="text-white text-2xl md:text-4xl font-bold text-center uppercase ">
                  BILLETTERIE
                </p>
                <p className="text-white text-sm md:text-lg text-center font-body">
                  Choisissez votre jour ou prenez le FullPass pour profiter de tout le festival !
                </p>
                <div className="flex flex-wrap md:flex-nowrap flex-col md:flex-row gap-4 justify-center mt-8">
                  <button onClick={handleButtonClick} className={ticketButtonClass}>Vendredi</button>
                  <button onClick={handleButtonClick} className={ticketButtonClass}>Samedi</button>
                  <button onClick={handleButtonClick} className={ticketButtonClass}>Dimanche</button>
                  <button onClick={handleButtonClick} className={ticketButtonClass}>Forfait FullPass</button>
                </div>
              </CardHeader>
              <div className="w-full mt-8">
                <a
                  title="Logiciel billetterie en ligne"
                  href="https://widget.weezevent.com/ticket/E123456/?code=12345&locale=fr-FR&width_auto=1&color_primary=0032FA&date=2024-03-15&date_end=2024-03-17&price_min=50&price_max=150"
                  className="weezevent-widget-integration"
                  data-src="https://widget.weezevent.com/ticket/E123456/?code=12345&locale=fr-FR&width_auto=1&color_primary=0032FA&date=2024-03-15&date_end=2024-03-17&price_min=50&price_max=150"
                  data-id="123456"
                  data-resize="1"
                  data-width_auto="1"
                  data-noscroll="0"
                  data-use-container="yes"
                  data-type="neo"
                  target="_blank"
                >
                  Billetterie Weezevent
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets; 