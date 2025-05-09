import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import ImageStepper from "./ImageStepper";
import ProductSizes from "./ProductSizes";

interface Product {
  id: number;
  name: string;
  price: string;
  images: string[];
  description: string;
  sizes: {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
  };
}

interface ProductCardDesktopProps {
  product: Product;
}

const ProductCardDesktop = ({ product }: ProductCardDesktopProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveringRef = useRef(false);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  useEffect(() => {
    if (isHovering) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
      }, 1500);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, product.images.length]);

  const handleMouseEnter = () => {
    if (!isHoveringRef.current) {
      goToNextImage();
      setIsHovering(true);
      isHoveringRef.current = true;
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    isHoveringRef.current = false;
  };

  return (
    <Card className="h-full flex flex-col border-0 shadow-none">
      <CardHeader className="p-4">
        <div
          className="aspect-square relative overflow-hidden rounded-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Vue ${currentImageIndex + 1}`}
            className="object-cover w-full h-full transition-transform duration-300"
          />
          <div className="absolute bottom-0 left-0 right-0 rounded-lg bg-white/60 backdrop-blur-sm md:mx-8 md:my-4 mx-2 my-2">
            <Button className="w-full" size="lg">
              <span className="text-sm">Ajouter</span>
            </Button>
          </div>
          <div className="absolute top-2 left-0 right-0 px-2 md:px-4">
            <div className="flex items-center justify-center gap-1 md:gap-2">
              <ImageStepper
                images={product.images}
                currentImageIndex={currentImageIndex}
                setCurrentImageIndex={setCurrentImageIndex}
                showLoadingBar={isHovering}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-8  mx-4 text-center bg-white rounded-lg">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="text-base font-body text-primary">{product.price}</p>
        <ProductSizes sizes={product.sizes} />
      </CardContent>
    </Card>
  );
};

export default ProductCardDesktop; 