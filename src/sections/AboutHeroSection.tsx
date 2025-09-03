import React from 'react';
import { Building2 } from 'lucide-react';

interface HeroContent {
  badge: string;
  headline: string;
  subheadline: string;
  backgroundImage: string;
}

interface CompanyInfo {
  name: string;
}

interface AboutHeroSectionProps {
  heroContent: HeroContent;
  companyInfo: CompanyInfo;
}

const AboutHeroSection: React.FC<AboutHeroSectionProps> = ({ heroContent, companyInfo }) => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${heroContent.backgroundImage}')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
            <Building2 className="h-10 w-10 text-white" />
            <span className="text-2xl font-bold text-white">{companyInfo.name}</span>
          </div>
        </div>

        {/* Welcome Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-8">
          <span className="text-white font-medium">{heroContent.badge}</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {heroContent.headline.split(' ').map((word, index) => (
            <span key={index} className={word === 'ProCare' || word === 'Group' ? 'text-blue-400' : ''}>
              {word}{' '}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          {heroContent.subheadline}
        </p>
      </div>
    </section>
  );
};

export default AboutHeroSection;