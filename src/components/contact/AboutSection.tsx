import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';

interface AboutCard {
  cardClass: string;
  title: string;
  items: {
    title: string;
    description?: string;
  }[];
  img: string;
  imgAlt: string;
  className?: string;
}

const aboutCards: AboutCard[] = [
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-text-primary",
    title: "Nos Spécialités",
    items: [
      { title: "REGGAETON" },
      { title: "ZUMBA", description: "(version World Music)" },
      { title: "TECHNIQUES de DÉHANCHÉS", description: "(BOOTYSHAKE et BODYMOVE)" }
    ],
    img: "/contact/rg_booster.jpg",
    imgAlt: "Reggaeton dance",
    className: "w-full h-full rounded-lg shadow-lg object-cover"
  },
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-[#00b8c9]",
    title: "Activités",
    items: [
      { title: "Cours", description: "Tous niveaux et styles" },
      { title: "Stages", description: "Intensifs et thématiques" },
      { title: "Événements Multi-Danses", description: "Festivals et soirées" }
    ],
    img: "/contact/dancing_group.jpg",
    imgAlt: "Dance class",
    className: "w-full h-full rounded-lg shadow-lg object-cover"
  },
  {
    cardClass: "border-none relative overflow-hidden group rounded-xl bg-purple-800",
    title: "Localisation",
    items: [
      { title: "Paris", description: "Centre ville" },
      { title: "Ile-De-France", description: "Multiples lieux" },
      { title: "Événements", description: "Salles partenaires" }
    ],
    img: "/contact/raggaeton_tour.png",
    imgAlt: "Paris",
    className: "w-full h-full rounded-lg shadow-lsg "
  }
];

const AboutSection = () => {
  return (
    <div className="text-center mb-16">
      <motion.h1 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-4xl font-bold mb-4 text-text-primary font-title"
      >
        À propos de l'association
      </motion.h1>
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-xl mb-16 font-body font-title"
      >
        Créée en 2012, nous apportons la joie de la danse à Paris et en Ile-De-France
      </motion.p>

      <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4">
        {aboutCards.map((card, idx) => (
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
                    <h3 className="text-white text-2xl md:text-3xl font-bold font-title">
                      {card.title}
                    </h3>
                    <ul className="space-y-3 text-white/90">
                      {card.items.map((item, index) => (
                        <li 
                          key={index}
                          className="transform hover:translate-x-2 transition-transform duration-300"
                        >
                          <div className="font-semibold font-body">{item.title}</div>
                          {item.description && (
                            <div className="text-sm font-body">{item.description}</div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden md:block w-1/3 h-[200px] rounded-lg">
                    <img 
                      src={card.img} 
                      alt={card.imgAlt}
                      className={card.className}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection; 