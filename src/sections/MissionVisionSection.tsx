import React from 'react';

interface MissionVision {
  mission: {
    title: string;
    content: string;
  };
  vision: {
    title: string;
    content: string;
  };
}

interface MissionVisionSectionProps {
  missionVision: MissionVision;
}

const MissionVisionSection: React.FC<MissionVisionSectionProps> = ({ missionVision }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Advanced medical technology"
                className="w-full h-96 object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-lg opacity-50"></div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8 order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Our Mission & Vision
            </h2>
            
            <div className="space-y-8">
              <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-secondary">
                <h3 className="text-2xl font-bold text-secondary mb-4">
                  {missionVision.mission.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {missionVision.mission.content}
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm border-l-4 border-blue-300">
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  {missionVision.vision.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {missionVision.vision.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;