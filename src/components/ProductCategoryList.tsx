import React from 'react';

interface ProductCategoryListProps {
  categories: string[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const ProductCategoryList: React.FC<ProductCategoryListProps> = ({
  categories,
  selectedCategory,
  onCategorySelect
}) => {
  return (
    <div className="bg-secondary rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold text-white mb-6">Product Categories</h3>
      <div className="space-y-2">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category)}
            className={`w-full text-left px-4 py-3 rounded-md font-medium transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-white text-secondary shadow-sm'
                : 'text-white hover:bg-blue-700 hover:bg-opacity-50'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategoryList;