import React from 'react';
import { ArrowRight, Camera } from 'lucide-react';

interface ImpactEventsSectionProps {
  onSeeMore: () => void;
  onSeeGallery: () => void;
}

const ImpactEventsSection: React.FC<ImpactEventsSectionProps> = ({ onSeeMore, onSeeGallery }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Impact: Events and Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how our sustainability and CSR efforts are making a real difference 
            in communities and the environment through concrete actions and measurable results.
          </p>
        </div>

        {/* Image Box with Overlay */}
        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative h-96 rounded-lg overflow-hidden shadow-xl bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop')`
            }}
          >
            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white max-w-3xl px-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
                  Community Health Initiative 2024
                </h3>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={onSeeMore}
                    className="inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                  >
                    <span>See More</span>
                    <ArrowRight className="ml-3 h-5 w-5" />
                  </button>
                  
                  <button 
                    onClick={onSeeGallery}
                    className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-md hover:bg-white hover:text-gray-900 transition-colors duration-200"
                  >
                    <Camera className="mr-3 h-5 w-5" />
                    <span>See Gallery</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactEventsSection;