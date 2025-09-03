import React from 'react';
import BrandCard from '../components/BrandCard';

interface Brand {
  name: string;
  logo: string;
  description?: string;
}

interface BrandsSectionProps {
  brands: Brand[];
}

const BrandsSection: React.FC<BrandsSectionProps> = ({ brands }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Trusted Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with leading medical equipment manufacturers to bring you 
            the most reliable and innovative healthcare solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <BrandCard key={index} brand={brand} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;