import React from 'react';
import ValueCard from '../components/ValueCard';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesSectionProps {
  values: CoreValue[];
}

const CoreValuesSection: React.FC<CoreValuesSectionProps> = ({ values }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles guide every aspect of our work and define our commitment 
            to excellence in healthcare solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;