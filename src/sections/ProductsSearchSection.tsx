import React from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCategoryList from '../components/ProductCategoryList';
import ProductGrid from '../components/ProductGrid';

interface Product {
  id: string;
  name: string;
  category: string;
  description?: string;
}

interface ProductsSearchSectionProps {
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  currentPage: number;
  onCategorySelect: (category: string) => void;
  onSearch: (query: string) => void;
  onPageChange: (direction: 'prev' | 'next') => void;
  products: Product[];
}

const ProductsSearchSection: React.FC<ProductsSearchSectionProps> = ({
  categories,
  selectedCategory,
  searchQuery,
  currentPage,
  onCategorySelect,
  onSearch,
  onPageChange,
  products
}) => {
  const itemsPerPage = 21; // 3x7 grid
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <section className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a Product"
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Two-Box Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Box - Categories */}
          <div className="lg:col-span-1">
            <ProductCategoryList
              categories={categories}
              selectedCategory={selectedCategory}
              onCategorySelect={onCategorySelect}
            />
          </div>

          {/* Right Box - Product Grid */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCategory}
                </h2>
                <div className="text-sm text-gray-500">
                  Showing {startIndex + 1}-{Math.min(endIndex, products.length)} of {products.length} products
                </div>
              </div>

              <ProductGrid products={currentProducts} />

              {/* Navigation Controls */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center space-x-4 mt-8">
                  <button
                    onClick={() => onPageChange('prev')}
                    disabled={currentPage === 0}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      currentPage === 0
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-secondary text-white hover:bg-blue-700'
                    }`}
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div className="flex items-center space-x-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => onPageChange(index > currentPage ? 'next' : 'prev')}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${
                          index === currentPage ? 'bg-secondary' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={() => onPageChange('next')}
                    disabled={currentPage === totalPages - 1}
                    className={`p-3 rounded-full transition-colors duration-200 ${
                      currentPage === totalPages - 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-secondary text-white hover:bg-blue-700'
                    }`}
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSearchSection;