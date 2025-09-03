import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

interface CallToActionSectionProps {
  onContactClick?: () => void;
  onLearnMoreClick?: () => void;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = ({ 
  onContactClick, 
  onLearnMoreClick 
}) => {
  const ctaContent = {
    headline: 'Ready to Transform Your Healthcare Operations?',
    subheadline: 'Partner with ProCare Group to access cutting-edge medical equipment solutions and exceptional support services.',
    primaryButton: 'Contact Our Team',
    secondaryButton: 'Learn More About Our Solutions'
  };

  return (
    <section className="bg-secondary py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          {ctaContent.headline}
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          {ctaContent.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={onContactClick}
            className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-lg"
          >
            <Phone className="mr-3 h-5 w-5" />
            <span>{ctaContent.primaryButton}</span>
          </button>
          <button 
            onClick={onLearnMoreClick}
            className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-secondary transition-colors duration-200"
          >
            <span>{ctaContent.secondaryButton}</span>
            <ArrowRight className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;