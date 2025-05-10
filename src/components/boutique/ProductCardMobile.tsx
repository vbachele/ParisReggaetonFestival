import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ImageStepper from "./ImageStepper";
import ProductSizes from "./ProductSizes";
import ProductTitlePrice from "./ProductTitlePrice";
import { Product } from "./utils/BoutiqueProducts";
import ProductColors from "./ProductColors";

interface ProductCardMobileProps {
  product: Product;
}

const ProductCardMobile = ({ product }: ProductCardMobileProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <Card className="h-full flex flex-col border-0 shadow-none mb-6">
      <CardHeader className=" rounded-b-none p-0">
        <div
          className="aspect-square relative overflow-hidden rounded-t-lg"
          onTouchStart={goToNextImage}
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
                showLoadingBar={false}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col justify-between h-full min-h-[240px] py-6 px-6 bg-white rounded-b-lg">
        <div>
          <ProductTitlePrice name={product.name} price={product.price} />
          <ProductColors colors={product.color} />
          <ProductSizes sizes={product.sizes} />
        </div>
        <div>
          <Button className="w-full mt-2 bg-text-primary text-white" size="lg">
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

export default ProductCardMobile; 