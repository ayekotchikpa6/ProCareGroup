import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center">
      <div className="flex items-center space-x-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-12 h-12 rounded-lg font-semibold transition-all duration-200 ${
              page === currentPage
                ? 'bg-secondary text-white shadow-lg'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400'
            }`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;