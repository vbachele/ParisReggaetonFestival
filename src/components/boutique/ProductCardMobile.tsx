import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
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

interface ProductCardMobileProps {
  product: Product;
}

const ProductCardMobile = ({ product }: ProductCardMobileProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Card className="h-full flex flex-col border-0 shadow-none">
      <CardHeader className="p-4">
        <div
          className="aspect-square relative overflow-hidden rounded-lg"
          onTouchStart={goToNextImage}
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
                showLoadingBar={false}
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

export default ProductCardMobile; 