import React from 'react';
import { Search } from 'lucide-react';
import JobCard from '../components/JobCard';
import Pagination from '../components/Pagination';

interface OpeningsContent {
  headline: string;
  subheadline: string;
  searchPlaceholder: string;
}

interface JobListing {
  id: string;
  title: string;
  excerpt: string;
  fullDescription: string;
  location: string;
  type: string;
  workMode: string;
  department: string;
}

interface CurrentOpeningsSectionProps {
  openingsContent: OpeningsContent;
  jobListings: JobListing[];
  searchQuery: string;
  currentPage: number;
  expandedJob: string | null;
  onSearch: (query: string) => void;
  onPageChange: (page: number) => void;
  onJobExpand: (jobId: string) => void;
  onApplyNow: (jobId: string) => void;
}

const CurrentOpeningsSection: React.FC<CurrentOpeningsSectionProps> = ({
  openingsContent,
  jobListings,
  searchQuery,
  currentPage,
  expandedJob,
  onSearch,
  onPageChange,
  onJobExpand,
  onApplyNow
}) => {
  const jobsPerPage = 2;
  const totalPages = 4; // As specified in requirements
  
  // Filter jobs based on search query
  const filteredJobs = jobListings.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Paginate jobs
  const startIndex = (currentPage - 1) * jobsPerPage;
  const endIndex = startIndex + jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(e.target.value);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {openingsContent.headline}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {openingsContent.subheadline}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={openingsContent.searchPlaceholder}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors bg-white shadow-sm"
            />
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-6 mb-12">
          {currentJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              isExpanded={expandedJob === job.id}
              onExpand={onJobExpand}
              onApplyNow={onApplyNow}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default CurrentOpeningsSection;