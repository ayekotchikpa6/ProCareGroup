import React from 'react';
import { Building2 } from 'lucide-react';

const SustainabilityHeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
            <Building2 className="h-10 w-10 text-white" />
            <span className="text-2xl font-bold text-white">ProCareGroup</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Our Commitment to <span className="text-green-400">Sustainability</span> and 
          <span className="block">Corporate Social Responsibility (CSR)</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Building a healthier future through responsible business practices, environmental stewardship, 
          and meaningful community engagement that creates lasting positive impact.
        </p>
      </div>
    </section>
  );
};

export default SustainabilityHeroSection;