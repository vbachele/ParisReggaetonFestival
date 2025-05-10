import { BoutiqueCarousel } from "@/components/boutique/BoutiqueCarousel";
import { useEffect } from "react";
import WeezeventSection from "@/components/boutique/WeezeventSection";
import { Layout } from "@/components/Layout";

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
    <Layout>
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
          <video 
            src="/boutique/video_home.mp4" 
            className="w-full h-[50vh] object-cover object-center"
            autoPlay
            muted
            loop
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
      <WeezeventSection />
    </Layout>
  );
} 