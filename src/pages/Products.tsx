import React, { useState } from 'react';
import ProductsHeroSection from '../sections/ProductsHeroSection';
import ProductsSearchSection from '../sections/ProductsSearchSection';
import { productsData } from '../data/productsData';

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('General Medicine');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(0);
    setSearchQuery('');
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(0);
  };

  const handlePageChange = (direction: 'prev' | 'next') => {
    const filteredProducts = productsData.categories[selectedCategory] || [];
    const totalPages = Math.ceil(filteredProducts.length / 21); // 3x7 grid = 21 items per page
    
    if (direction === 'next' && currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="bg-background">
      <ProductsHeroSection />
      <ProductsSearchSection
        categories={productsData.categoryList}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
        currentPage={currentPage}
        onCategorySelect={handleCategorySelect}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        products={productsData.categories[selectedCategory] || []}
      />
    </div>
  );
};

export default Products;