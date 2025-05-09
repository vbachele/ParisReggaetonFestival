import { motion } from "framer-motion";
import { MobileTopImageCrop } from "@/components/utils/MobileTopImageCrop";

const titleAnim = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const BoutiqueHeader = () => (
  <div className="relative w-full">
    <div className="md:block hidden relative w-full pt-20 h-[40vh] md:h-[480px]">
      <img 
        src="/cover_Reggaeton_Festival.png" 
        alt="Paris Reggaeton Festival Information" 
        className="w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
    </div>
    <MobileTopImageCrop />
    <div className="absolute bottom-0 left-0 right-0 px-8 md:py-4 text-white">
      <div className="container mx-auto">
        <motion.h1 {...titleAnim} className="text-4xl md:text-5xl font-bold mb-8 font-title">
          La boutique
        </motion.h1>
      </div>
    </div>
  </div>
);

export default BoutiqueHeader; 