import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect, useRef } from "react";
import ImageStepper from "./ImageStepper";
import ProductSizes from "./ProductSizes";
import ProductTitlePrice from "./ProductTitlePrice";
import { Product } from "./utils/BoutiqueProducts";
import ProductColors from "./ProductColors";

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
    <Card className="h-full flex flex-col border-0 shadow-none ">
      <CardHeader className=" p-0">
        <div
          className="aspect-square relative overflow-hidden rounded-t-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={product.images[currentImageIndex]}
            alt={`${product.name} - Vue ${currentImageIndex + 1}`}
            className="object-cover w-full h-full transition-transform duration-300"
          />
        
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
      <CardContent className="flex flex-col justify-between h-full min-h-[220px] py-6 px-6 bg-white rounded-b-lg">
        <div>
          <ProductTitlePrice name={product.name} price={product.price} id={product.id} />
          <ProductColors colors={product.color} />
          <ProductSizes sizes={product.sizes} />
        </div>
        <div>
          <Button
            asChild
            className="w-full mt-2 bg-text-primary text-white"
            size="lg"
          >
            <a href="#weezevent-section">Ajouter au panier</a>
          </Button>
          <p className="text-xs text-gray-500 italic text-left font-body mt-2">
            *Produit à récupérer lors du festival
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardDesktop; 