import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative w-full">
      <div className="md:block hidden relative w-full mt-10 h-[60vh] md:h-[800px]">
        <img 
          src="/cover_Reggaeton_Festival.png" 
          alt="Paris Reggaeton Festival" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="md:hidden relative w-full mt-20 h-[100vh]">
        <img 
          src="/cover_Mobile_Raggaeton_Festival.png" 
          alt="Paris Reggaeton Festival" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute left-0 right-0 bottom-[18%] md:bottom-[12%] px-4 w-full">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:gap-4 gap-2 justify-center items-center max-w-2xl mx-auto">
            <Link 
              to="https://my.weezevent.com/paris-reggaeton-festival" 
              className="w-full md:w-auto bg-text-primary text-white text-xl md:text-2xl font-bold px-10 py-3 md:py-5 rounded-2xl transition-all inline-flex items-center justify-center gap-3 transform hover:scale-105"
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
  );
};

export default HeroSection; 