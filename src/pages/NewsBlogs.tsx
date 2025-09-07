import React, { useState } from 'react';
import NewsBlogsHeroSection from '../sections/NewsBlogsHeroSection';
import NewsSection from '../sections/NewsSection';
import ArticlesSection from '../sections/ArticlesSection';

const NewsBlogs: React.FC = () => {
  const [newsCurrentPage, setNewsCurrentPage] = useState(1);
  const [articlesCurrentPage, setArticlesCurrentPage] = useState(1);

  const handleNewsPageChange = (page: number) => {
    setNewsCurrentPage(page);
  };

  const handleArticlesPageChange = (page: number) => {
    setArticlesCurrentPage(page);
  };

  const handleReadMore = () => {
    console.log('Navigate to full article');
  };

  const handleReadArticle = (articleId: string) => {
    console.log('Navigate to article:', articleId);
  };

  return (
    <div className="bg-background">
      <NewsBlogsHeroSection onReadMore={handleReadMore} />
      <NewsSection 
        currentPage={newsCurrentPage}
        onPageChange={handleNewsPageChange}
        onReadArticle={handleReadArticle}
      />
      <ArticlesSection 
        currentPage={articlesCurrentPage}
        onPageChange={handleArticlesPageChange}
        onReadArticle={handleReadArticle}
      />
    </div>
  );
};

export default NewsBlogs;