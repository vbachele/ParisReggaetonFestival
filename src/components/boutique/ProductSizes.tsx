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
      <div className="flex items-center gap-2">
        <span className="text-sm font-body whitespace-nowrap font-semibold">
          Tailles:
        </span>
        <div className="flex gap-2">
          {Object.entries(sizes).map(([size]) => (
            <div
              key={size}
              className={`rounded-lg flex items-center font justify-start font-body text-sm transition `}
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