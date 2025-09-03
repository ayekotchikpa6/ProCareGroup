import React from 'react';

interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-full h-full bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-all duration-200 hover:transform hover:scale-105 group cursor-pointer">
      <div className="flex flex-col items-center justify-center h-full text-center">
        {/* Product Icon/Image Placeholder */}
        <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors duration-200">
          <div className="w-6 h-6 bg-secondary rounded-sm"></div>
        </div>
        
        {/* Product Name */}
        <h3 className="text-sm font-semibold text-gray-900 leading-tight group-hover:text-secondary transition-colors duration-200">
          {product.name}
        </h3>
        
        {/* Product Description */}
        {product.description && (
          <p className="text-xs text-gray-500 mt-2 line-clamp-2">
            {product.description}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;