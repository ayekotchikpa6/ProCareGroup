import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  return (
    <div className="text-center group">
      <div className="relative mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-48 h-48 mx-auto rounded-full object-cover shadow-lg group-hover:shadow-xl transition-all duration-300"
        />
        <div className="absolute inset-0 rounded-full bg-secondary bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {member.name}
      </h3>
      <p className="text-secondary font-medium mb-3">
        {member.title}
      </p>
      {member.bio && (
        <p className="text-sm text-gray-600 max-w-xs mx-auto leading-relaxed">
          {member.bio}
        </p>
      )}
    </div>
  );
};

export default TeamMemberCard;