import { Layout } from '@/components/Layout';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
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

  return (
    <Layout>
      <div className="flex flex-col items-center min-h-[80vh] w-full py-8">
      <div className="md:block hidden relative w-full mt-6 h-[40vh] md:h-[400px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            
          </div>
        </div>
        <div className="md:hidden relative w-full mt-12 h-[48vh]">
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
                  Choisissez votre journée ou prenez le FullPass pour profiter de tout le festival !
                </p>
              
              </CardHeader>
              <div className="w-full mt-8">
              <a title="Logiciel billetterie en ligne"
   href="https://weezevent.com/?c=sys_widget"
   className="weezevent-widget-integration"
   data-src="https://widget.weezevent.com/ticket/E1239962/?code=56601&locale=fr-FR&width_auto=1&color_primary=00AEEF"
   data-width="650"
   data-height="600"
   data-id="1239962"
   data-resize="1"
   data-width_auto="1"
   data-noscroll="0"
   data-use-container="yes"
   data-type="neo"
   target="_blank">Billetterie Weezevent</a>
              </div>
              <p className="text-xs text-gray-600 py-4  text-center">
                L'association ne fait pas crédit et ne procède à aucun remboursement en cas de désistement, de retard ou d'absence.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets; 