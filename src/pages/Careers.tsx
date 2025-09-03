import React, { useState } from 'react';
import CareersHeroSection from '../sections/CareersHeroSection';
import CareerOpportunitiesSection from '../sections/CareerOpportunitiesSection';
import WhyJoinUsSection from '../sections/WhyJoinUsSection';
import CurrentOpeningsSection from '../sections/CurrentOpeningsSection';
import { careersData } from '../data/careersData';

const Careers: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleJobExpand = (jobId: string) => {
    setExpandedJob(expandedJob === jobId ? null : jobId);
  };

  const handleJoinTeam = () => {
    console.log('Navigate to application form');
  };

  const handleApplyNow = (jobId: string) => {
    console.log('Apply for job:', jobId);
  };

  return (
    <div className="bg-background">
      <CareersHeroSection heroContent={careersData.heroContent} />
      
      <CareerOpportunitiesSection 
        opportunitiesContent={careersData.opportunitiesContent}
        teamCards={careersData.teamCards}
        onJoinTeam={handleJoinTeam}
      />
      
      <WhyJoinUsSection benefits={careersData.benefits} />
      
      <CurrentOpeningsSection
        openingsContent={careersData.openingsContent}
        jobListings={careersData.jobListings}
        searchQuery={searchQuery}
        currentPage={currentPage}
        expandedJob={expandedJob}
        onSearch={handleSearch}
        onPageChange={handlePageChange}
        onJobExpand={handleJobExpand}
        onApplyNow={handleApplyNow}
      />
    </div>
  );
};

export default Careers;