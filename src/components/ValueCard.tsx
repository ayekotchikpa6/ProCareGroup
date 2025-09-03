import React from 'react';
import { Heart, Shield, Award, Users, DivideIcon as LucideIcon } from 'lucide-react';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface ValueCardProps {
  value: CoreValue;
  index: number;
}

// Icon mapping for dynamic icon rendering
const iconMap: Record<string, LucideIcon> = {
  Heart,
  Shield,
  Award,
  Users
};

const ValueCard: React.FC<ValueCardProps> = ({ value, index }) => {
  const IconComponent = iconMap[value.icon] || Heart;

  return (
    <div className="text-center p-8 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          <IconComponent className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {value.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;