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
      "/boutique/tshirt_femme1.jpg",
      "/boutique/tshirt_femme2.jpg",
      "/boutique/tshirt_femme3.jpg",
      "/boutique/tshirt_femme4.jpg",
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
      "/boutique/debardeur1.jpg",
      "/boutique/debardeur2.jpg",
      "/boutique/debardeur3.jpg",
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
      "/boutique/tshirt-mixte1.jpg",
      "/boutique/tshirt-mixte2.jpg",
    ],
    description: "Poster collector avec la line-up complète du festival",
    sizes: {
      S: false,
      M: false,
      L: false,
      XL: false,
      XXL: true
    },
    color: [ "#FF0000", "#000000", "#FFD600"]
  },
  {
    id: 4,
    name: "TOTE BAG",
    price: "Offert avec tout autre achat",
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