import React from 'react';
import { ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Excellence in Medical Equipment Solutions
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              With over two decades of experience in the medical equipment industry, Procare has established 
              itself as a trusted partner for healthcare institutions worldwide. We specialize in providing 
              high-quality medical equipment, consumables, and comprehensive support services that enable 
              healthcare professionals to deliver exceptional patient care.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to innovation, quality, and customer satisfaction drives everything we do. 
              From cutting-edge diagnostic equipment to essential medical consumables, we ensure that 
              healthcare providers have access to the tools they need to save lives and improve patient outcomes.
            </p>

            <button className="inline-flex items-center px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200">
              <span>More About Us</span>
              <ArrowRight className="ml-3 h-5 w-5" />
            </button>
          </div>

          {/* Right Column - Featured Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Medical professionals using advanced equipment"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-secondary rounded-lg opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;