import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Link } from 'react-router-dom';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from "@/components/ui/card"

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
  { name: "Alicia", location: "Toulouse", image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=800&auto=format&fit=crop&q=60" },
  { name: "Melissa", location: "Paris", image: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=800&auto=format&fit=crop&q=6" },
  { name: "Jennifer", location: "Belgique", image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=800&auto=format&fit=crop&q=60" },
  { name: "Luis-Carlos", location: "Paris", image: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=800&auto=format&fit=crop&q=60" },
  { name: "Dayeline", location: "Bordeaux", image: "https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?w=800&auto=format&fit=crop&q=60" },
  { name: "Gwenn", location: "Paris", image: "https://images.unsplash.com/photo-1547153760-18fc86324498?w=800&auto=format&fit=crop&q=60" },
  { name: "Laetitia", location: "Montpellier", image: "https://images.unsplash.com/photo-1601643157091-ce5c665179ab?w=800&auto=format&fit=crop&q=6" },
  { name: "Audrey", location: "Paris", image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=800&auto=format&fit=crop&q=600" },
  { name: "Farah", location: "Paris", image: "https://images.unsplash.com/photo-1604514628550-37477afdf4e3?w=800&auto=format&fit=crop&q=60" }
];

const specialGuests: SpecialGuest[] = [
  { name: "Memo", location: "Lille", type: "Super Guest", image: "https://images.unsplash.com/photo-1559294824-d5fd5e1a0127?w=800&auto=format&fit=crop&q=60" },
  { name: "DJ Giorgio Rod", type: "DJ", image: "https://images.unsplash.com/photo-1571935441005-07e8e3ba1eef?w=800&auto=format&fit=crop&q=60" },
  { name: "Roberto Burgos", type: "Radio Latina", image: "https://images.unsplash.com/photo-1516873240891-4bf014598ab4?w=800&auto=format&fit=crop&q=60" }
];

const Home = () => {
  const plugin = Autoplay({ 
    delay: 2000, 
    stopOnInteraction: false,
    stopOnMouseEnter: false,
    stopOnLastSnap: false,
    rootNode: (emblaRoot) => emblaRoot.parentElement,
  });
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Overlay Buttons */}
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
        <div className="md:hidden relative w-full  mt-12 h-[100vh]">
          <img 
            src="/cover_Mobile_Raggaeton_Festival.png" 
            alt="Paris Reggaeton Festival" 
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Overlay Buttons */}
        <div className="absolute left-0 right-0  bottom-[8%] px-4 w-full">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row md:gap-4 gap-2 justify-center items-center max-w-2xl mx-auto">
              <Link 
                to="https://my.weezevent.com/paris-reggaeton-festival
" 
                className="w-full md:w-auto bg-[#4323FC] text-white text-xl md:text-2xl font-bold px-10 py-3 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105"
              >
                 Billeterie
              </Link>
              <Link 
                to="/planning" 
                className="w-full md:w-auto bg-white  text-black text-xl md:text-2xl font-bold px-10 py-3 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105"
              >
                Planning
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#1269cb]/10">
        <div className="container mx-auto px-4 py-8">
          {/* Main Content */}
          <div className="text-white space-y-6 text-center">
             {/* Features - Desktop Only */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
              <Card className="bg-[#4323FC] border-none relative overflow-hidden group h-[400px]">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?w=800&auto=format&fit=crop&q=60" 
                    alt="Tous Niveaux" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4323FC]/30 to-[#4323FC]/10"></div>
                </div>
                <CardContent className="h-full flex flex-col justify-end pb-8 relative z-10">
                  <div className="text-center space-y-4">
                    <div className="text-white text-5xl flex justify-center">
                     
                    </div>
                    <h3 className="text-white text-2xl font-bold">Tous Niveaux</h3>
                    <p className="text-white/80 text-lg">Des cours adaptés pour débutants et avancés</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#4323FC] border-none relative overflow-hidden group h-[400px]">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=800&auto=format&fit=crop&q=60" 
                    alt="Équipe Qualifiée" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4323FC]/30 to-[#4323FC]/10"></div>
                </div>
                <CardContent className="h-full flex flex-col justify-end pb-8 relative z-10">
                  <div className="text-center space-y-4">
                    <div className="text-white text-5xl flex justify-center">
                     
                    </div>
                    <h3 className="text-white text-2xl font-bold">Équipe Qualifiée</h3>
                    <p className="text-white/80 text-lg">Les meilleurs professeurs internationaux</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-[#4323FC] border-none relative overflow-hidden group h-[400px]">
                <div className="absolute inset-0">
                  <img 
                    src="https://images.unsplash.com/photo-1546427660-eb346c344ba5?w=800&auto=format&fit=crop&q=60" 
                    alt="Places Limitées" 
                    className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4323FC]/30 to-[#4323FC]/10"></div>
                </div>
                <CardContent className="h-full flex flex-col justify-end pb-8 relative z-10">
                  <div className="text-center space-y-4">
                    <div className="text-white text-5xl flex justify-center">
                    
                    </div>
                    <h3 className="text-white text-2xl font-bold">Places Limitées</h3>
                    <p className="text-white/80 text-lg">Réservez vite votre place</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Artists List */}
            <div className="w-full overflow-hidden py-12">
              <div className="container mx-auto">
                <h2 className="text-2xl md:text-5xl font-bold text-center mb-12 text-[#4323FC]">
                  LES PROFESSEURS
                </h2>
                <Carousel
                  opts={{
                    align: "center",
                    loop: true,
                    dragFree: true,
                    skipSnaps: true,
                  }}
                  plugins={[plugin]}
                  className="w-full max-w-6xl mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {[...artists, ...specialGuests, ...artists].map((artist, index) => (
                      <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                        <div className="relative rounded-[2rem] overflow-hidden group">
                          <div className="aspect-[3/4] w-full">
                            <img 
                              src={artist.image}
                              alt={artist.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute bottom-0 left-0 right-0">
                            <svg
                              className="w-full h-auto"
                              viewBox="0 0 400 150"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              preserveAspectRatio="none"
                            >
                              <path
                                d="M0 0C0 0 40 30 100 30C160 30 200 0 200 0C200 0 240 30 300 30C360 30 400 0 400 0V150H0V0Z"
                                className="fill-[#4323FC]"
                              />
                            </svg>
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                              <p className="text-white/90 mb-1 text-lg">
                                {'type' in artist ? artist.type : artist.location}
                              </p>
                              <h3 className="text-white text-2xl font-bold">{artist.name}</h3>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden bg-[#4323FC] backdrop-blur-sm rounded-full p-5  md:flex" />
                  <CarouselNext className="hidden md:flex bg-[#4323FC] p-5" />
                </Carousel>
              </div>
            </div>
            


            {/* CTA Section */}
            <div className="max-w-xl mx-auto space-y-6">
              <Link 
                to="https://my.weezevent.com/paris-reggaeton-festival" 
                className="bg-[#4323FC] hover:bg-[#4323FC]/80 text-white font-semibold px-8 py-3 rounded-lg transition-all w-full inline-block"
              >
                Billeterie
              </Link>
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
