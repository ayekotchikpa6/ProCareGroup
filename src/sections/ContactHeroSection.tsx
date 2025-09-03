import React from 'react';
import { Building2 } from 'lucide-react';

const ContactHeroSection: React.FC = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Company Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-3 bg-white bg-opacity-10 backdrop-blur-sm rounded-lg px-6 py-3">
            <Building2 className="h-10 w-10 text-white" />
            <span className="text-2xl font-bold text-white">ProCareGroup</span>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Contact <span className="text-blue-400">Us</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
          Get in touch with our healthcare experts to discuss your medical equipment needs, 
          request support, or explore partnership opportunities.
        </p>
      </div>
    </section>
  );
};

export default ContactHeroSection;