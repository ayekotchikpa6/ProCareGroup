import React from 'react';
import AboutHeroSection from '../sections/AboutHeroSection';
import CompanyOverviewSection from '../sections/CompanyOverviewSection';
import MissionVisionSection from '../sections/MissionVisionSection';
import CoreValuesSection from '../sections/CoreValuesSection';
import StatisticsSection from '../sections/StatisticsSection';
import TeamSection from '../sections/TeamSection';
import ExpertiseSection from '../sections/ExpertiseSection';
import BrandsSection from '../sections/BrandsSection';
import CallToActionSection from '../sections/CallToActionSection';

// Import data
import {
  companyInfo,
  coreValues,
  teamMembers,
  partnerBrands,
  companyStats,
  missionVision,
  heroContent,
  expertiseAreas
} from '../data/aboutData';

const About: React.FC = () => {
  // Event handlers for CTA actions
  const handleContactClick = () => {
    console.log('Navigate to contact page');
    // This would typically trigger navigation to contact page
  };

  const handleLearnMoreClick = () => {
    console.log('Navigate to services page');
    // This would typically trigger navigation to services page
  };

  const handleViewMoreTeam = () => {
    console.log('View more team members');
    // This would typically show more team members or navigate to team page
  };

  return (
    <div className="bg-background">
      <AboutHeroSection 
        heroContent={heroContent} 
        companyInfo={companyInfo} 
      />
      
      <CompanyOverviewSection 
        companyInfo={companyInfo} 
      />
      
      <MissionVisionSection 
        missionVision={missionVision} 
      />
      
      <CoreValuesSection 
        values={coreValues} 
      />
      
      <StatisticsSection 
        statistics={companyStats} 
      />
      
      <TeamSection 
        teamMembers={teamMembers}
        onViewMore={handleViewMoreTeam}
      />
      
      <ExpertiseSection 
        expertiseAreas={expertiseAreas} 
      />
      
      <BrandsSection 
        brands={partnerBrands} 
      />
      
      <CallToActionSection 
        onContactClick={handleContactClick}
        onLearnMoreClick={handleLearnMoreClick}
      />
    </div>
  );
};

export default About;