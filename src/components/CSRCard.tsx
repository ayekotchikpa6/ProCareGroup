import React from 'react';
import { Users, GraduationCap, Heart, LucideIcon } from 'lucide-react';

interface CSRCardData {
  icon: string;
  title: string;
  description: string;
}

interface CSRCardProps {
  card: CSRCardData;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Heart
};

const CSRCard: React.FC<CSRCardProps> = ({ card }) => {
  const IconComponent = iconMap[card.icon] || Heart;

  return (
    <div className="text-center p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          <IconComponent className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {card.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {card.description}
      </p>
    </div>
  );
};

export default CSRCard;