import React from 'react';
import SustainabilityHeroSection from '../sections/SustainabilityHeroSection';
import SustainabilityIntroSection from '../sections/SustainabilityIntroSection';
import SustainabilityCoreSection from '../sections/SustainabilityCoreSection';
import CSRCommunitiesSection from '../sections/CSRCommunitiesSection';
import ImpactEventsSection from '../sections/ImpactEventsSection';
import MoreEventsSection from '../sections/MoreEventsSection';

const Sustainability: React.FC = () => {
  const handleSeeMore = () => {
    console.log('Navigate to more sustainability initiatives');
  };

  const handleSeeGallery = () => {
    console.log('Navigate to events gallery');
  };

  const handleReadArticle = (articleId: string) => {
    console.log('Navigate to article:', articleId);
  };

  return (
    <div className="bg-background">
      <SustainabilityHeroSection />
      <SustainabilityIntroSection />
      <SustainabilityCoreSection />
      <CSRCommunitiesSection />
      <ImpactEventsSection 
        onSeeMore={handleSeeMore}
        onSeeGallery={handleSeeGallery}
      />
      <MoreEventsSection onReadArticle={handleReadArticle} />
    </div>
  );
};

export default Sustainability;