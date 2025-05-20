export interface Product {
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
    XXL: boolean;
  };
  color: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "T-SHIRT FEMMES",
    price: "20 €",
    images: [
      "/boutique/tshirt/tshirt_femme1.jpg",
      "/boutique/tshirt/tshirt_femme2.jpg",
      "/boutique/tshirt/tshirt_femme3.jpg",
      "/boutique/tshirt/tshirt_femme4.jpg",
      "/boutique/tshirt/tshirt_femme6.jpg",
      "/boutique/tshirt/tshirt_femme7.jpg",
      "/boutique/tshirt/tshirt_femme8.jpg",
    ],
    description: "T-shirt exclusif avec le logo du Paris Reggaeton Festival 2024",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    color: ["#FFFFFF", "#000000", "#FFD600", "#FFA500"]
  },
  {
    id: 2,
    name: "DEBARDEUR FEMMES",
    price: "20 €",
    images: [
      "/boutique/debardeur/debardeur6.jpg",
      "/boutique/debardeur/debardeur12.jpg",
      "/boutique/debardeur/debardeur8.jpg",
      "/boutique/debardeur/debardeur7.jpg",
      "/boutique/debardeur/debardeur11.jpg",
      "/boutique/debardeur/debardeur9.jpg",
      "/boutique/debardeur/debardeur13.jpg",
    ],
    description: "Bucket hat stylé aux couleurs du festival",
    sizes: {
      S: true,
      M: true,
      L: true,
      XL: true,
      XXL: true
    },
    color: ["#000000","#FFC0CB", "#8A2BE2", "#FF0000"]
  },
  {
    id: 3,
    name: "TSHIRT MIXTES",
    price: "20 €",
    images: [
      "/boutique/mixtes/mixtes1.jpg",
      "/boutique/mixtes/mixtes2.jpg",
      "/boutique/mixtes/mixtes3.jpg",
      "/boutique/mixtes/mixtes4.jpg",
    ],
    description: "Poster collector avec la line-up complète du festival",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: true
    },
    color: [ "#FF0000", "#000000", "#FFD600", "#8A2BE2"]
  },
  {
    id: 4,
    name: "TOTE BAG",
    price: "Offert pour tout achat",
    images: [
      "/boutique/tote-bag1.jpg",
      "/boutique/tote-bag2.jpg",
      "/boutique/tote-bag3.jpg",
    ],
    description: "Tote bag écologique aux couleurs du festival",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: false
    },
    color: ["#000000", "#FFD600", "#FFC0CB", "#00B8D9"]
  },
]; 