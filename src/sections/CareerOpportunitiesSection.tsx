import React from 'react';
import { ArrowRight } from 'lucide-react';
import TeamCard from '../components/TeamCard';

interface OpportunitiesContent {
  headline: string;
  subheadline: string;
  buttonText: string;
}

interface TeamCard {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

interface CareerOpportunitiesSectionProps {
  opportunitiesContent: OpportunitiesContent;
  teamCards: TeamCard[];
  onJoinTeam: () => void;
}

const CareerOpportunitiesSection: React.FC<CareerOpportunitiesSectionProps> = ({
  opportunitiesContent,
  teamCards,
  onJoinTeam
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              {opportunitiesContent.headline}
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {opportunitiesContent.subheadline}
            </p>

            <button 
              onClick={onJoinTeam}
              className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              <span>{opportunitiesContent.buttonText}</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Right Column - Team Cards */}
          <div className="grid grid-cols-1 gap-6">
            {teamCards.map((card) => (
              <TeamCard key={card.id} teamCard={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunitiesSection;