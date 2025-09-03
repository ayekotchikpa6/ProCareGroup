import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const BrandsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Mock brand data - in real implementation, these would be actual brand logos
  const brands = [
    { name: 'MedTech Solutions', logo: 'MT' },
    { name: 'HealthCare Plus', logo: 'HC' },
    { name: 'Medical Innovations', logo: 'MI' },
    { name: 'ProMed Systems', logo: 'PS' },
    { name: 'Advanced Care', logo: 'AC' },
    { name: 'MediCore', logo: 'MC' },
    { name: 'HealthTech Pro', logo: 'HT' },
    { name: 'CarePlus', logo: 'CP' }
  ];

  const brandsPerView = 4;
  const maxIndex = Math.max(0, brands.length - brandsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">Our Brands</h3>
          </div>
          <div className="lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg">
              Medical Equipment Consumables at the highest quality Medical
            </h2>
          </div>
        </div>

        {/* Brand Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / brandsPerView)}%)` }}
            >
              {brands.map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-1/4 px-4">
                  <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 h-32 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-secondary text-white rounded-lg flex items-center justify-center text-xl font-bold mb-3 mx-auto">
                        {brand.logo}
                      </div>
                      <p className="text-sm text-gray-600 font-medium">{brand.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 p-3 bg-white rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex ? 'bg-secondary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;