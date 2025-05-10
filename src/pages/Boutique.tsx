import { BoutiqueCarousel } from "@/components/boutique/BoutiqueCarousel";
import { useEffect } from "react";
export default function Boutique() {

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
    <main className="min-h-screen bg-background">
      <div className="relative w-full">
        <div className="md:block hidden relative w-full pt-20 h-[40vh] md:h-[480px]">
          <img 
            src="/cover_Reggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>
        <div className="md:hidden relative w-full pt-20 h-[50vh] overflow-hidden">
          <img 
            src="/cover_Mobile_Raggaeton_Festival.png" 
            alt="Paris Reggaeton Festival Information" 
            className="w-full h-[50vh] object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 font-title">
              La boutique
            </h1>
          </div>
        </div>
      </div>
      <BoutiqueCarousel />
        <div className="w-full mx-auto md:px-40 px-4 md:py-8 py-4">
        <a title="Logiciel billetterie en ligne"
   href="https://weezevent.com/?c=sys_widget"
   className="weezevent-widget-integration"
   data-src="https://widget.weezevent.com/ticket/E1330076/?code=49172&locale=fr-FR&width_auto=1&color_primary=00AEEF"
   data-width="650"
   data-height="600"
   data-id="1330076"
   data-resize="1"
   data-width_auto="1"
   data-noscroll="0"
   data-use-container="yes"
   data-type="neo"
   target="_blank">Billetterie Weezevent</a>
   </div>
    </main>
  );
} 