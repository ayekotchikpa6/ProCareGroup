import React from 'react';
import { Leaf, Recycle, Zap, Shield, DivideIcon as LucideIcon } from 'lucide-react';

interface SustainabilityCardData {
  icon: string;
  title: string;
  description: string;
}

interface SustainabilityCardProps {
  card: SustainabilityCardData;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
  Leaf,
  Recycle,
  Zap,
  Shield
};

const SustainabilityCard: React.FC<SustainabilityCardProps> = ({ card }) => {
  const IconComponent = iconMap[card.icon] || Leaf;

  return (
    <div className="text-center p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-green-50 rounded-full group-hover:bg-green-100 transition-colors duration-300">
          <IconComponent className="h-10 w-10 text-green-600 group-hover:scale-110 transition-transform duration-300" />
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

export default SustainabilityCard;