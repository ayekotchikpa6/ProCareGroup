import React from 'react';
import { Building2 } from 'lucide-react';

const SustainabilityIntroSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Company Logo */}
          <div className="flex justify-center lg:justify-start">
            <div className="flex items-center space-x-4 p-8 bg-gray-50 rounded-lg">
              <Building2 className="h-16 w-16 text-secondary" />
              <div>
                <span className="text-3xl font-bold text-gray-900">ProCareGroup</span>
                <p className="text-gray-600 mt-1">Healthcare Solutions</p>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              At ProCare Group, we believe that sustainable business practices and corporate social responsibility 
              are not just ethical imperatives, but essential components of delivering exceptional healthcare solutions. 
              Our commitment extends beyond providing quality medical equipment to encompass environmental stewardship, 
              community empowerment, and ethical business conduct.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We recognize that the healthcare industry has a unique responsibility to protect and promote the 
              well-being of communities and the environment. Through our comprehensive sustainability and CSR initiatives, 
              we strive to create positive impact that extends far beyond our immediate business operations, 
              contributing to a healthier, more sustainable future for all.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilityIntroSection;