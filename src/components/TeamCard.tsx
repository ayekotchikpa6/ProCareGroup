import React from 'react';

interface TeamCardData {
  id: string;
  name: string;
  title: string;
  image: string;
  description: string;
}

interface TeamCardProps {
  teamCard: TeamCardData;
}

const TeamCard: React.FC<TeamCardProps> = ({ teamCard }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 group">
      <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            src={teamCard.image}
            alt={teamCard.name}
            className="w-16 h-16 rounded-full object-cover shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-1">
            {teamCard.name}
          </h3>
          <p className="text-secondary font-medium mb-2">
            {teamCard.title}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {teamCard.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;