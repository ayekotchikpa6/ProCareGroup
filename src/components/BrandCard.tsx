import React from 'react';

interface Brand {
  name: string;
  logo: string;
  description?: string;
}

interface BrandCardProps {
  brand: Brand;
}

const BrandCard: React.FC<BrandCardProps> = ({ brand }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-lg p-6 w-full h-32 flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
        <div className="text-center">
          <div className="w-16 h-16 bg-secondary text-white rounded-lg flex items-center justify-center text-xl font-bold mb-3 mx-auto group-hover:bg-blue-700 transition-colors duration-300">
            {brand.logo}
          </div>
          <p className="text-sm text-gray-600 font-medium">{brand.name}</p>
          {brand.description && (
            <p className="text-xs text-gray-500 mt-1">{brand.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandCard;