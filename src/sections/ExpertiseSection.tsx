import React from 'react';
import ExpertiseCard from '../components/ExpertiseCard';

interface ExpertiseArea {
  title: string;
  description: string;
  image: string;
}

interface ExpertiseSectionProps {
  expertiseAreas: ExpertiseArea[];
}

const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertiseAreas }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Decades of specialized knowledge in medical technology and healthcare solutions
          </p>
        </div>

        <div className="space-y-20">
          {expertiseAreas.map((area, index) => (
            <ExpertiseCard 
              key={index} 
              expertise={area} 
              isReversed={index % 2 === 1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;