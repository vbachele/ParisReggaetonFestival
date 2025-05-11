import { motion } from 'framer-motion';

const FestivalPersonnalizePhoto = () => {
  return (
    <section className="py-4 md:py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-2xl md:text-4xl font-bold mb-6 text-center font-title text-text-primary"
        >
          FAIS TA PHOTO PERSONNALISÉE !
        </motion.h2>
      
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center mb-10"
        >
          {/* First image */}
          <div className="relative w-full aspect-square max-w-md">
            <a
              href="https://www.twibbonize.com/prf2025jyserai"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src="/affiches/personnalized_photo.jpg"
                alt="Photo template 1"
                className="object-cover rounded-lg w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>
          </div>
          
          {/* Second image */}
          <div className="relative w-full aspect-square max-w-md">
            <a
              href="https://www.twibbonize.com/prf2025jyserai"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <img
                src="/affiches/personnalized_photo2.jpg"
                alt="Photo template 2"
                className="object-cover rounded-lg w-full h-full"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </a>
          </div>
        </motion.div>

        {/* Call to action button */}
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-center"
        >
          <a 
            href="https://www.twibbonize.com/prf2025jyserai" 
            className="inline-block bg-text-primary text-white text-2xl font-bold px-12 py-4 rounded-2xl transform hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
          >
            CLIQUE ICI
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FestivalPersonnalizePhoto; 