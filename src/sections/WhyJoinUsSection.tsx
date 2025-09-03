import React from 'react';
import BenefitCard from '../components/BenefitCard';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface WhyJoinUsSectionProps {
  benefits: Benefit[];
}

const WhyJoinUsSection: React.FC<WhyJoinUsSectionProps> = ({ benefits }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Join Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer more than just a job – we provide a platform for professional growth, 
            personal fulfillment, and the opportunity to make a meaningful impact in healthcare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} benefit={benefit} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUsSection;