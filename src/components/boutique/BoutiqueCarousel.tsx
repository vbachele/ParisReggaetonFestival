import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";
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

const products: Product[] = [
  {
    id: 1,
    name: "T-shirt Collection 2024",
    price: "29.99€",
    images: [
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    ],
    description: "T-shirt exclusif avec le logo du Paris Reggaeton Festival 2024",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true
    }
  },
  {
    id: 2,
    name: "Bucket Hat Festival",
    price: "24.99€",
    images: [
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    ],
    description: "Bucket hat stylé aux couleurs du festival",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true
    }
  },
  {
    id: 3,
    name: "Poster Collector",
    price: "19.99€",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    ],
    description: "Poster collector avec la line-up complète du festival",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false
    }
  },
  {
    id: 4,
    name: "Tote Bag Festival",
    price: "15.99€",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Tote bag écologique aux couleurs du festival",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false
    }
  },
  {
    id: 5,
    name: "Hoodie Festival",
    price: "49.99€",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Hoodie confortable avec le design exclusif du festival",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true
    }
  },
  {
    id: 6,
    name: "Bracelet LED",
    price: "9.99€",
    images: [
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1000&auto=format&fit=crop"
    ],
    description: "Bracelet LED aux couleurs du festival",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true
    }
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
        <CarouselContent className="flex flex-col md:flex-row">
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-full md:basis-1/3 lg:basis-1/4">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center mt-4 md:hidden">
          <CarouselPrevious className="bg-white" />
          <CarouselNext className="bg-white" />
        </div>
        <CarouselPrevious className="hidden md:flex bg-white" />
        <CarouselNext className="hidden md:flex bg-white" />
      </Carousel>
    </div>
  );
};

export default BoutiqueCarousel; 