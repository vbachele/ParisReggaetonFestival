import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card"
import { Layout } from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Types
interface Artist {
  name: string;
  location: string;
  image: string;
}

interface SpecialGuest {
  name: string;
  type: string;
  image: string;
  location?: string;
}

// Artist data
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


const Home = () => {
  const plugin = Autoplay({ 
    delay: 0,
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });
  
  return (
    <Layout>
      <div className="min-h-screen">
        <div className="relative w-full">
          {/* Desktop Image */}
          <div className="md:block hidden relative w-full mt-10 h-[60vh] md:h-[800px]">
            <img 
              src="/cover_Reggaeton_Festival.png" 
              alt="Paris Reggaeton Festival" 
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Mobile Image */}
          <div className="md:hidden relative w-full  mt-20 h-[100vh]">
            <img 
              src="/cover_Mobile_Raggaeton_Festival.png" 
              alt="Paris Reggaeton Festival" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Overlay Buttons */}
          <div className="absolute left-0 right-0  bottom-[18%] md:bottom-[12%] px-4 w-full">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:gap-4 gap-2 justify-center items-center max-w-2xl mx-auto">
                <Link 
                  to="https://my.weezevent.com/paris-reggaeton-festival" 
                  className={`w-full md:w-auto bg-text-primary text-white text-xl md:text-2xl font-bold px-10 py-3 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105`}
                >
                   BILLETTERIE
                </Link>
                <Link 
                  to="/planning" 
                  className="w-full md:w-auto bg-white text-black text-xl md:text-2xl font-bold px-10 py-3 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  PLANNING
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className={`bg-background-primary`}>
          <div className="container mx-auto px-4 py-8">
            <div className="text-white space-y-12 text-center">
              <div className="flex flex-col gap-6 max-w-6xl mx-auto px-4">
                {[
                  {
                    cardClass: "border-none relative overflow-hidden group rounded-xl bg-[#00b8c9]",
                    title: "Ouvert à Tous",
                    text: "3 jours de festival et plus de 15 heures de cours pour vivre une expérience unique et intense !",
                    img: "/dancePhotos/cours_tous_niveaux.jpg",
                    imgAlt: "Tous Niveaux",
                    link: "/planning"
                  },
                  {
                    cardClass: "border-none relative overflow-hidden group rounded-xl bg-text-primary ",
                    title: "L'équipe de Choc",
                    text: "Les meilleurs professeurs internationaux réunis pour partager leur passion, leur énergie et vous faire vivre une expérience unique !",
                    img: "/affiches/cover_profs.png",
                    imgAlt: "Équipe Qualifiée",
                    link: "/planning"
                  },
                  {
                    cardClass: "border-none relative overflow-hidden group rounded-xl bg-purple-800",
                    title: "Places Limitées",
                    text: "Réservez vite votre place",
                    img: "https://images.unsplash.com/photo-1546427660-eb346c344ba5?w=800&auto=format&fit=crop&q=60",
                    imgAlt: "Places Limitées",
                    link: "https://my.weezevent.com/paris-reggaeton-festival"
                  }
                ].map((card, idx) => (
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
                            <h3
                        
                              className="text-white text-2xl md:text-3xl font-bold"
                            >
                              {card.title}
                            </h3>
                            <p className="text-white/90 text-md md:text-lg max-w-md">
                              {card.text}
                            </p>
                            <div className="space-y-2">
                              <Link 
                                to={card.link} 
                                className="inline-flex items-center text-white hover:underline gap-2"
                              >
                                Découvrir <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                          <div className="hidden md:block w-1/3 h-[200px]">
                            <img 
                              src={card.img} 
                              alt={card.imgAlt}
                              className="w-full h-full rounded-lg shadow-lg object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Artists List */}
              <div className="w-full overflow-hidden py-12">
                <div className="container mx-auto">
                  <motion.h2 
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className={`text-2xl md:text-5xl font-bold text-center mb-12 text-text-primary`}
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
                                <p className="text-white/90 mb-1 text-base md:text-lg">
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
              
             
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
