import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface Artist {
  name: string;
  location: string;
  image: string;
  explanation: string;
}

const artists: Artist[] = [
  { name: "Alicia", location: "Toulouse", image: "/dancers/alicia.png", explanation: "Alicia est une danseuse passionnée de Toulouse, connue pour son énergie et sa créativité sur scène." },
  { name: "Melissa", location: "Paris", image: "/dancers/melissa.png", explanation: "Melissa partage sa passion du reggaeton à Paris et inspire de nombreux élèves chaque année." },
  { name: "Jennifer", location: "Belgique", image: "/dancers/jennifer.png", explanation: "Jennifer vient de Belgique et apporte une touche internationale et innovante à chaque performance." },
  { name: "Luis-Carlos", location: "Paris", image: "/dancers/luis-carlos.png", explanation: "Luis-Carlos est reconnu pour ses chorégraphies dynamiques et son sourire communicatif." },
  { name: "Dayeline", location: "Bordeaux", image: "/dancers/dayeline.png", explanation: "Dayeline, originaire de Bordeaux, transmet sa passion du mouvement et de la musique latine." },
  { name: "Memo", location: "Lille", image: "/dancers/memo.png", explanation: "Memo est un danseur polyvalent de Paris, apprécié pour son style unique et sa pédagogie." },
  { name: "Dj Giorgio Rod", location: "Paris", image: "/dancers/dj_giorgio_rod.png", explanation: "DJ Giorgio Rod fait vibrer les foules avec ses mix reggaeton et son sens du rythme inégalé." },
  { name: "Gwenn", location: "Paris", image: "/dancers/gwenn.png", explanation: "Gwenn illumine la scène parisienne par sa technique et sa bonne humeur contagieuse." },
  { name: "Laetitia", location: "Montpellier", image: "/dancers/laetitia.png", explanation: "Laetitia, venue de Montpellier, est une référence du reggaeton dans le sud de la France." },
  { name: "Audrey", location: "Paris", image: "/dancers/audrey.png", explanation: "Audrey partage son amour de la danse à Paris et encourage chacun à s'exprimer librement." },
  { name: "Farah", location: "Paris", image: "/dancers/farah.png", explanation: "Farah est la directrice artistique du festival, passionnée par la transmission et la création." },
  { name: "Roberto Burgos", location: "Radio Latina", image: "/dancers/roberto_burgos.png", explanation: "Roberto Burgos est un pilier de la scène reggaeton parisienne, reconnu pour son charisme." }
];

const ArtistList = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const plugin = Autoplay({ 
    delay: 0,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  return (
    <div className="w-full overflow-hidden py-12" id="lineup">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-5xl font-bold text-center mb-12 text-text-primary"
        >
          LINE UP
        </motion.h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            skipSnaps: true,
            containScroll: "trimSnaps",
            duration: 50000,
          }}
          plugins={[plugin]}
          className="w-full max-w-2xl md:max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {[...artists, ...artists, ...artists].map((artist, idx) => {
              const uniqueId = `${artist.name}-${idx}`;
              return (
                <CarouselItem key={uniqueId} className="pl-2 md:pl-4 basis-2/3 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="relative rounded-[2rem] overflow-hidden group perspective aspect-[3/4] cursor-pointer"
                    style={{ perspective: "1000px" }}
                    onClick={() => setFlippedCard(flippedCard === uniqueId ? null : uniqueId)}
                  >
                    <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${flippedCard === uniqueId ? "rotate-y-180" : ""}`}> 
                      {/* Front */}
                      <div className="absolute w-full h-full backface-hidden">
                        <img 
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-105 rounded-[2rem]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-text-primary rounded-b-[2rem]">
                          <div className="p-4 md:p-6 text-center">
                            <p className="text-white/90 mb-1 text-base md:text-lg font-body">
                              {artist.location}
                            </p>
                            <h3 className="text-white text-xl md:text-2xl font-bold">{artist.name}</h3>
                          </div>
                        </div>
                      </div>
                      {/* Back */}
                      <div className="absolute w-full h-full backface-hidden rotate-y-180 flex flex-col items-center justify-center bg-text-primary p-6 rounded-lg">
                        <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">{artist.name}</h3>
                        <p className="text-white/80 text-base md:text-lg font-body mb-4">{artist.location}</p>
                        <p className="text-white text-center font-body">{artist.explanation}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ArtistList; 