import React from 'react';

interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  foundedYear: number;
  experience: number;
}

interface CompanyOverviewSectionProps {
  companyInfo: CompanyInfo;
}

const CompanyOverviewSection: React.FC<CompanyOverviewSectionProps> = ({ companyInfo }) => {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - companyInfo.foundedYear;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Who We Are
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyInfo.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our expertise spans across diagnostic equipment, patient monitoring systems, surgical instruments, 
              and medical consumables. We pride ourselves on understanding the unique challenges faced by 
              healthcare providers and delivering tailored solutions that enhance operational efficiency 
              while improving patient outcomes.
            </p>
            
            {/* Company Stats */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">{yearsInBusiness}+</div>
                <div className="text-sm text-gray-600">Years in Business</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-secondary mb-2">Founded</div>
                <div className="text-sm text-gray-600">{companyInfo.foundedYear}</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Medical professionals collaborating"
                className="w-full h-96 object-cover"
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

export default CompanyOverviewSection;