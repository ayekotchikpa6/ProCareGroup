import React from 'react';
import { ChevronDown } from 'lucide-react';

interface Service {
  title: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      {/* Service Title */}
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
        {service.title}
      </h3>
      
      {/* Service Description */}
      <p className="text-lg text-gray-600 leading-relaxed mb-8">
        {service.description}
      </p>
      
      {/* Arrow Down Icon */}
      <div className="flex justify-center">
        <div className="p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
          <ChevronDown className="h-6 w-6 text-secondary group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;