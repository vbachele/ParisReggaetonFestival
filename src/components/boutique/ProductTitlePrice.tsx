
interface ProductTitlePriceProps {
  name: string;
  price: string;
  id: number;
}

const ProductTitlePrice = ({ name, price, id }: ProductTitlePriceProps) => (
  <div className="flex items-center flex-col justify-between mb-2 w-full">
    <h3 className="text-xl font-bold font-title text-black">{name}</h3>
    {id === 4 ? (
      <span className="text-lg md:text-xl font-bold text-text-primary ml-4 mb-0  md:mb-7">Offert avec un achat</span>
    ) : (
      <span className="text-xl font-bold text-text-primary ml-4">{price}</span>
    )}
  </div>
);

export default ProductTitlePrice; 