import React from 'react';
import CSRCard from '../components/CSRCard';

const CSRCommunitiesSection: React.FC = () => {
  const csrCards = [
    {
      icon: 'Users',
      title: 'Community Health Programs',
      description: 'Supporting local healthcare initiatives, medical missions, and community health education programs to improve access to quality healthcare services in underserved areas.'
    },
    {
      icon: 'GraduationCap',
      title: 'Education & Training',
      description: 'Providing scholarships, training programs, and educational resources to healthcare professionals and students, fostering the next generation of medical experts.'
    },
    {
      icon: 'Heart',
      title: 'Healthcare Access',
      description: 'Partnering with non-profit organizations and healthcare institutions to improve medical equipment access and healthcare delivery in developing communities worldwide.'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Empowering Communities Through CSR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our corporate social responsibility initiatives focus on creating meaningful impact 
            in communities worldwide through healthcare access and education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {csrCards.map((card, index) => (
            <CSRCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CSRCommunitiesSection;