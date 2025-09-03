import React from 'react';
import { Stethoscope, Heart, Shield, Zap, ChevronDown } from 'lucide-react';

const ServicesGrid: React.FC = () => {
  const services = [
    {
      icon: Stethoscope,
      title: 'Diagnostic Equipment'
    },
    {
      icon: Heart,
      title: 'Patient Monitoring'
    },
    {
      icon: Shield,
      title: 'Safety Solutions'
    },
    {
      icon: Zap,
      title: 'Emergency Care'
    }
  ];

  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Comprehensive medical equipment solutions tailored to meet the diverse needs of healthcare providers
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center p-8 bg-white bg-opacity-95 backdrop-blur-sm rounded-lg hover:bg-opacity-100 transition-all duration-200 hover:transform hover:scale-105">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-50 rounded-full">
                  <service.icon className="h-10 w-10 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-4 bg-white text-secondary font-semibold rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            <span>See More</span>
            <ChevronDown className="ml-3 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;