import React from "react";

interface ProductTitlePriceProps {
  name: string;
  price: string;
}

const ProductTitlePrice: React.FC<ProductTitlePriceProps> = ({ name, price }) => (
  <div className="flex items-center flex-col justify-between mb-2 w-full">
    <h3 className="text-xl font-bold font-title text-black">{name}</h3>
    {/* <span className="text-xl font-bold text-text-primary ml-4">{price}</span> */}
  </div>
);

export default ProductTitlePrice; 