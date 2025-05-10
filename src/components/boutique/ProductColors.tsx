import React from 'react';

interface ProductColorsProps {
  colors: string[];
}

const ProductColors: React.FC<ProductColorsProps> = ({ colors }) => {
  return (
    <div className="flex items-center gap-2 mt-2">
      <span className="text-sm font-medium font-body">Couleurs:</span>
      {colors.map((color) => (
        <div
          key={color}
          className="w-6 h-6 rounded-full border border-gray-300"
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
};

export default ProductColors; 