import React from 'react';
import ServicesHeroSection from '../sections/ServicesHeroSection';
import ServicesCardsSection from '../sections/ServicesCardsSection';

const Services: React.FC = () => {
  return (
    <div className="bg-background">
      <ServicesHeroSection />
      <ServicesCardsSection />
    </div>
  );
};

export default Services;