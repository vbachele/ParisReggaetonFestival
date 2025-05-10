import React from "react";

interface ProductSizesProps {
  sizes: {
    S: boolean;
    M: boolean;
    L: boolean;
    XL: boolean;
    XXL: boolean;
  };
}

const ProductSizes: React.FC<ProductSizesProps> = ({ sizes }) => {
  const hasSizes = Object.values(sizes).some(Boolean);
  if (!hasSizes) return null;

  return (
    <div className="mt-2">
      <div className="flex items-center gap-3">
        <span className="text-sm font-semibold text-gray-700 font-body whitespace-nowrap">
          Tailles disponibles:
        </span>
        <div className="flex gap-1">
          {Object.entries(sizes).map(([size, available]) => (
            <div
              key={size}
              className={`w-4 h-4 rounded-lg flex items-center justify-center font-body text-sm transition
                ${available
                  ? 'border-gray-400 text-gray-800 bg-white'
                  : 'border-gray-200 text-gray-300 bg-gray-100'
                }`}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSizes; 