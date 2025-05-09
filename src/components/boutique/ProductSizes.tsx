import React from "react";

interface ProductSizesProps {
  sizes: {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
  };
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes }) => {
  const hasSizes = Object.values(sizes).some(Boolean);
  if (!hasSizes) return null;

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-600 font-body mb-2">Tailles disponibles</p>
      <div className="flex justify-center gap-1">
        {Object.entries(sizes).map(([size, available]) => (
          <div
            key={size}
            className={`w-8 h-8 font-body flex items-center justify-center ${
              available
                ? 'border-primary text-primary'
                : 'border-gray-200 text-gray-300'
            }`}
          >
            {size}
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 italic mt-2 text-center font-body"> *Produit à récupérer lors du festival</p>
    </div>
  );
};

export default ProductSizes; 