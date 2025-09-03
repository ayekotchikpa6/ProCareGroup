import React from 'react';
import { ChevronDown } from 'lucide-react';
import TeamMemberCard from '../components/TeamMemberCard';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
  onViewMore?: () => void;
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamMembers, onViewMore }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Leadership Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the experienced professionals who lead ProCare Group with vision, 
            expertise, and unwavering commitment to healthcare excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} member={member} />
          ))}
        </div>

        {onViewMore && (
          <div className="text-center">
            <button 
              onClick={onViewMore}
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <span>View All Team Members</span>
              <ChevronDown className="ml-3 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;