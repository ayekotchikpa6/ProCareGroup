import React from 'react';

interface ExpertiseArea {
  title: string;
  description: string;
  image: string;
}

interface ExpertiseCardProps {
  expertise: ExpertiseArea;
  isReversed?: boolean;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ expertise, isReversed = false }) => {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}>
      {/* Content */}
      <div className={`space-y-6 ${isReversed ? 'lg:col-start-2' : ''}`}>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {expertise.title}
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          {expertise.description}
        </p>
      </div>

      {/* Image */}
      <div className={`relative ${isReversed ? 'lg:col-start-1' : ''}`}>
        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
          <img
            src={expertise.image}
            alt={expertise.title}
            className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* Decorative Element */}
        <div className={`absolute w-20 h-20 bg-secondary rounded-lg opacity-20 ${
          isReversed ? '-top-4 -left-4' : '-bottom-4 -right-4'
        }`}></div>
      </div>
    </div>
  );
};

export default ExpertiseCard;