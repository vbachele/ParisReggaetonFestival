import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { links } from '@/config/links';

interface FeatureCard {
  cardClass: string;
  title: string;
  text: string;
  img: string;
  imgAlt: string;
  link: string;
  imgContainerClass?: string;
}

const featureCards: FeatureCard[] = [
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-[#00b8c9]",
    title: "Ouvert à toutes et à tous",
    text: "Trois jours de festival et plus de 15 heures de cours pour vivre une expérience unique en France, intense et 100% good vibes !",
    img: "/dancePhotos/cours_tous_niveaux.jpg",
    imgAlt: "Tous Niveaux",
    link: links.internal.planning,
    imgContainerClass: "w-full h-full rounded-lg shadow-lg object-cover"
  },
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-text-primary",
    title: "L'équipe de choc",
    text: "Les meilleurs professeurs internationaux pour partager leur passion, leur énergie et te faire vivre une aventure incroyable !",
    img: "/affiches/cover_profs.png",
    imgAlt: "Équipe qualifiée",
    link: links.internal.lineup,
    imgContainerClass: "w-full h-full rounded-lg shadow-lg object-fill"
  },
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-purple-800",
    title: "Dernières places !",
    text: "Dernières places, ne manque pas le plus grand événement de danse reggaeton jamais vu en France, réserve maintenant !",
    img: "/contact/rg_booster.jpg",
    imgAlt: "Places limitées",
    link: "/tickets",
    imgContainerClass: "w-full h-full rounded-lg shadow-lg object-cover"
  }
];

const FeatureCards = () => {
  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4">
      {featureCards.map((card, idx) => (
        <motion.div
          key={card.title}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 + idx * 0.2 }}
        >
          <Card className={card.cardClass}>
            <CardContent className="p-8">
              <div className="flex justify-between items-center">
                <div className="space-y-4 text-left flex-1">
                  <h3 className="text-white text-2xl md:text-3xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-white/90 text-md md:text-lg max-w-md font-body">
                    {card.text}
                  </p>
                  <div className="space-y-2 ">
                    {card.link.startsWith('#') && (
                      <a 
                        href={card.link} 
                        className="inline-flex items-center text-white hover:underline gap-2 border-[0.5px] rounded-lg  px-1"
                        
                      >
                        <span className="text-shadow-outline flex-row rounded-lg p-2 border-white gap-2">Découvrir</span> <ArrowRight className="w-4 h-4 text-white" />
                      </a>
                    )} 
                    {!card.link.startsWith('#') && (
                      <Link 
                        to={card.link} 
                        className="inline-flex items-center text-white hover:underline gap-2 border-[0.5px] rounded-lg  px-1"
                      >
                        <span className="text-shadow-outline flex-row rounded-lg p-2 border-white gap-2">Découvrir</span> <ArrowRight className="w-4 h-4 text-white" />
                        </Link>
                    )}
                  
                  </div>
                </div>
                <div className="hidden md:block w-1/3 h-[200px] rounded-lg">
                  <img 
                    src={card.img} 
                    alt={card.imgAlt}
                    className={card.imgContainerClass}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureCards; 