import React from 'react';
import SustainabilityCard from '../components/SustainabilityCard';

const SustainabilityCoreSection: React.FC = () => {
  const sustainabilityCards = [
    {
      icon: 'Leaf',
      title: 'Environmental Stewardship',
      description: 'Implementing eco-friendly practices in manufacturing, packaging, and operations to minimize our environmental footprint and promote sustainable healthcare solutions.'
    },
    {
      icon: 'Recycle',
      title: 'Circular Economy',
      description: 'Developing innovative recycling programs and sustainable product lifecycle management to reduce waste and promote resource efficiency across our operations.'
    },
    {
      icon: 'Zap',
      title: 'Energy Efficiency',
      description: 'Investing in renewable energy sources and energy-efficient technologies to reduce carbon emissions and promote sustainable energy consumption practices.'
    },
    {
      icon: 'Shield',
      title: 'Responsible Sourcing',
      description: 'Ensuring ethical and sustainable sourcing practices throughout our supply chain, partnering with suppliers who share our commitment to environmental responsibility.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sustainability at the Core
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our environmental initiatives focus on creating sustainable healthcare solutions 
            that protect both patient health and planetary well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sustainabilityCards.map((card, index) => (
            <SustainabilityCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilityCoreSection;