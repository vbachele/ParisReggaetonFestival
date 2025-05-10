import { links } from "@/config/links";
import { Instagram, CheckCircle, Sparkles, Lock, CheckCheck, Shirt, Ruler, ArrowBigUp } from "lucide-react";

const WeezeventSection = () => {
  return (
    <div className="w-full mx-auto md:px-40 px-4 md:py-8 py-4" id="weezevent-section">
      <div className="bg-text-primary text-background-primary rounded-2xl px-6 py-6 mb-6 text-center ">
        <span className="block text-2xl md:text-3xl font-extrabold font-title tracking-wide mb-4">
          BIENVENUE SUR LES PRÉ-VENTES DU PARIS REGGAETON FESTIVAL
        </span>
        <div className="flex flex-col gap-4 text-lg font-body text-center text-white whitespace-pre-line">
          
          <div className="flex  font-semibold items-center flex-row justify-center gap-2">
            <span className="flex items-center gap-2 justify-center">
              Tu peux accéder à la boutique, en avant première, 24h avant tout le monde !
            </span>
          </div>
          {/* Bullet points in colored box */}
          <div className=" rounded-2xl px-2 md:px-8 py-4 max-w-4xl mx-auto">
            <ul className="flex flex-col gap-6 text-white text-left font-semibold text-sm md:text-base font-body">
              <li className="flex items-start gap-4">
                <Shirt className="w-7 h-7 text-yellow-300 twe flex-shrink-0 mt-1" />
                <span>
                  Ici, tu peux nous montrer tes articles, tailles et styles préférés : t-shirts (que tu peux choisir de porter en mode crop-top), débardeurs, tote-bags… tout y est ! Le + dur sera de choisir ;-)
                </span>
              </li>
              <li className="flex items-start text-sm md:text-base gap-4">
                <Ruler className="w-7 h-7 text-yellow-300 flex-shrink-0 mt-1" />
                <span>
                  Tu veux plusieurs tailles d'un même modèle ? Pense à les sélectionner séparément.
                </span>
              </li>
              <li className="flex items-start text-sm md:text-base gap-4">
                <ArrowBigUp className="w-7 h-7 text-yellow-300 flex-shrink-0 mt-1" />
                <span>
                  Si tu hésites entre 2 tailles, prends la + grande.
                </span>
              </li>
            </ul>
          </div>
          {/* Attention box */}
          <div className="bg-[#fff7e6] text-[#a16207] rounded-xl px-4 py-4 text-center max-w-4xl mx-auto">
            <span className="font-bold">Attention : ce n'est pas encore un achat définitif.</span>
            <br />
            <span>Seule la commande lors de l'ouverture officielle de la boutique validera ton article.</span>
          </div>
          {/* Final info */}
        
          {/* Instagram call to action */}
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center gap-2">
              <p className="text-white text-lg font-body text-center">
                Envie de donner ton avis, de poser des questions ou de faire des suggestions sur cette toute nouvelle collection ?
              </p>
              <a
                href={links.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white font-bold text-lg hover:text-pink-400 transition-colors duration-200"
              >
                <Instagram className="w-6 h-6" />
                <span className="tracking-wide underline underline-offset-4">@farah_alwayswannadance</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Weezevent widget */}
      <a
        title="Logiciel billetterie en ligne"
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
        target="_blank"
      >
        Billetterie Weezevent
      </a>
    </div>
  );
};

export default WeezeventSection; 