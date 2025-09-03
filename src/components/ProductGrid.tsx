import React from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // Fill empty slots to maintain 3x7 grid structure
  const gridSize = 21;
  const filledProducts = [...products];
  
  while (filledProducts.length < gridSize && filledProducts.length < products.length + gridSize) {
    filledProducts.push(...Array(Math.min(gridSize - filledProducts.length, gridSize)).fill(null));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {filledProducts.slice(0, gridSize).map((product, index) => (
        <div key={index} className="aspect-square">
          {product ? (
            <ProductCard product={product} />
          ) : (
            <div className="w-full h-full bg-gray-50 rounded-lg border-2 border-dashed border-gray-200"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;