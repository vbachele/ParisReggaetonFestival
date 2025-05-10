import { Product } from "./utils/BoutiqueProducts";
import ProductCardDesktop from "./ProductCardDesktop";
import ProductCardMobile from "./ProductCardMobile";


interface ProductCardProps {
  product: Product;
}



const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      {<div className="hidden md:block"><ProductCardDesktop product={product} /></div>}
      {<div className="md:hidden"><ProductCardMobile product={product} /></div>}
    </>
  );
};

export default ProductCard; 