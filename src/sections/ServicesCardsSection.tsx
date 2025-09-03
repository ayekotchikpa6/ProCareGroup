import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { servicesData } from '../data/servicesData';

const ServicesCardsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-5xl mx-auto">
            Medical Equipment Consumables at The highest Quality Medical Equipment Consumables
          </h2>
        </div>

        {/* Services Grid - 2 cards per row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCardsSection;