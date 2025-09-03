import React from 'react';
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';

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

interface JobCardProps {
  job: JobListing;
  isExpanded: boolean;
  onExpand: (jobId: string) => void;
  onApplyNow: (jobId: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, isExpanded, onExpand, onApplyNow }) => {
  const handleExpandClick = () => {
    onExpand(job.id);
  };

  const handleApplyClick = () => {
    onApplyNow(job.id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-all duration-300">
      {/* Job Header */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            {job.title}
          </h3>
          
          {/* Job Specs */}
          <div className="flex flex-wrap gap-3 mb-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-blue-50 text-secondary rounded-full">
              <Briefcase className="h-4 w-4" />
              <span className="text-sm font-medium">{job.workMode}</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">{job.location}</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="text-sm font-medium">{job.type}</span>
            </div>
          </div>
          
          {/* Job Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-6">
            {job.excerpt}
          </p>
        </div>

        {/* Apply Button */}
        <div className="lg:ml-8 flex-shrink-0">
          <button
            onClick={handleApplyClick}
            className="w-full lg:w-auto px-8 py-3 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-sm"
          >
            Apply Now
          </button>
        </div>
      </div>

      {/* Detailed Description Toggle */}
      <div className="border-t border-gray-200 pt-6">
        <button
          onClick={handleExpandClick}
          className="flex items-center justify-between w-full text-left"
        >
          <span className="text-lg font-semibold text-gray-900">
            Detailed Description
          </span>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        
        {/* Expanded Content */}
        {isExpanded && (
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-gray-600 leading-relaxed">
              {job.fullDescription}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;