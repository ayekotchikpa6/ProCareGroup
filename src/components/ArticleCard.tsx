import React from 'react';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

interface Article {
  id: string;
  image: string;
  category: string;
  title: string;
  date: string;
  readingTime: string;
}

interface ArticleCardProps {
  article: Article;
  onReadArticle: (articleId: string) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, onReadArticle }) => {
  const handleReadClick = () => {
    onReadArticle(article.id);
  };

  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden group h-full">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 flex flex-col h-full">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full">
            {article.category}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-secondary transition-colors duration-200 flex-grow">
          {article.title}
        </h3>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>{article.readingTime}</span>
          </div>
        </div>
        
        <button 
          onClick={handleReadClick}
          className="inline-flex items-center text-secondary font-semibold hover:text-blue-700 transition-colors duration-200 mt-auto"
        >
          <span>Read Article</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </article>
  );
};

export default ArticleCard;