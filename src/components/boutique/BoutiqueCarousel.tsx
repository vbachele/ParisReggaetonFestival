import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
import { products } from "./utils/BoutiqueProducts";
import { motion } from "framer-motion";

export const BoutiqueCarousel = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="flex flex-col md:flex-row">
          {products.map((product, idx) => (
            <CarouselItem key={product.id} className="basis-full md:basis-1/3 lg:basis-1/4">
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: 'easeOut' }}
              >
                <ProductCard product={product} />
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
       
      </Carousel>
    </div>
  );
};

export default BoutiqueCarousel; 