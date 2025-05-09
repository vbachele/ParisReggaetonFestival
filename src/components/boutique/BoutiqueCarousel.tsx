import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "T-shirt Collection 2024",
    price: "29.99€",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
    description: "T-shirt exclusif avec le logo du Paris Reggaeton Festival 2024"
  },
  {
    id: 2,
    name: "Bucket Hat Festival",
    price: "24.99€",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
    description: "Bucket hat stylé aux couleurs du festival"
  },
  {
    id: 3,
    name: "Poster Collector",
    price: "19.99€",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    description: "Poster collector avec la line-up complète du festival"
  },
  {
    id: 4,
    name: "Tote Bag Festival",
    price: "15.99€",
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
    description: "Tote bag écologique aux couleurs du festival"
  },
  {
    id: 5,
    name: "Hoodie Festival",
    price: "49.99€",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
    description: "Hoodie confortable avec le design exclusif du festival"
  },
  {
    id: 6,
    name: "Bracelet LED",
    price: "9.99€",
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
    description: "Bracelet LED aux couleurs du festival"
  }
];

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
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-1/2 md:basis-1/3 lg:basis-1/4">
              <Card className="h-full flex flex-col">
                <CardHeader className="p-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </CardContent>
                <CardFooter className="p-4">
                  <Button className="w-full" size="lg">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    Ajouter au panier
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default BoutiqueCarousel; 