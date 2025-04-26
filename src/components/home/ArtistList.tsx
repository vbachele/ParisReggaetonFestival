import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion } from 'framer-motion';


interface Artist {
  name: string;
  location: string;
  image: string;
}

const artists: Artist[] = [
  { name: "Alicia", location: "Toulouse", image: "/dancers/alicia.png" },
  { name: "Melissa", location: "Paris", image: "/dancers/melissa.png" },
  { name: "Jennifer", location: "Belgique", image: "/dancers/jennifer.png" },
  { name: "Luis-Carlos", location: "Paris", image: "/dancers/luis-carlos.png" },
  { name: "Dayeline", location: "Bordeaux", image: "/dancers/dayeline.png" },
  { name: "Memo", location: "Paris", image: "/dancers/memo.png" },
  { name: "Dj Giorgio Rod", location: "Paris", image: "/dancers/dj_giorgio_rod.png" },
  { name: "Gwenn", location: "Paris", image: "/dancers/gwenn.png" },
  { name: "Laetitia", location: "Montpellier", image: "/dancers/laetitia.png" },
  { name: "Audrey", location: "Paris", image: "/dancers/audrey.png" },
  { name: "Farah", location: "Paris", image: "/dancers/farah.png" },
  { name: "Roberto Burgos", location: "Paris", image: "/dancers/roberto_burgos.png" }
];

const ArtistList = () => {
  const plugin = Autoplay({ 
    delay: 0,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });

  return (
    <div className="w-full overflow-hidden py-12">
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
            {[...artists, ...artists, ...artists].map((artist, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-2/3 md:basis-1/2 lg:basis-1/3">
                <div className="relative rounded-[2rem] overflow-hidden group">
                  <div className="aspect-[3/4] w-full">
                    <img 
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-full object-cover transition-transform duration-300 scale-110 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-text-primary">
                    <div className="p-4 md:p-6 text-center">
                      <p className="text-white/90 mb-1 text-base md:text-lg font-body">
                        {artist.location}
                      </p>
                      <h3 className="text-white text-xl md:text-2xl font-bold">{artist.name}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default ArtistList; 