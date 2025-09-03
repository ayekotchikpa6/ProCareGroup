import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ContactCard {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
}

interface ContactInfoCardProps {
  card: ContactCard;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ card }) => {
  const IconComponent = card.icon;

  return (
    <div className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          <IconComponent className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {card.title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed">
        {card.description}
      </p>
      
      <div className="space-y-2">
        {card.details.map((detail, index) => (
          <p key={index} className="text-gray-700 font-medium">
            {detail}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoCard;