import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import { newsData } from '../data/newsBlogsData';

interface NewsSectionProps {
  currentPage: number;
  onPageChange: (page: number) => void;
  onReadArticle: (articleId: string) => void;
}

const NewsSection: React.FC<NewsSectionProps> = ({ currentPage, onPageChange, onReadArticle }) => {
  const articlesPerPage = 7;
  const totalPages = 4;
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentNews = newsData.slice(startIndex, startIndex + articlesPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            News
          </h2>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {/* Navigation Controls */}
          <button
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full shadow-lg transition-colors duration-200 ${
              currentPage === 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-600 hover:text-secondary'
            }`}
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full shadow-lg transition-colors duration-200 ${
              currentPage === totalPages 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-white text-gray-600 hover:text-secondary'
            }`}
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Horizontal Scroll Bar */}
          <div className="overflow-hidden">
            <div className="flex space-x-6 transition-transform duration-500 ease-in-out">
              {currentNews.map((article) => (
                <div key={article.id} className="flex-shrink-0 w-80">
                  <NewsCard article={article} onReadArticle={onReadArticle} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
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
      </div>
    </section>
  );
};

export default NewsSection;