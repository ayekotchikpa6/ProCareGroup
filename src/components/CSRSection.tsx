import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CSRSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const csrImages = [
    'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
    'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % csrImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + csrImages.length) % csrImages.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-16">
          <div className="mb-6 lg:mb-0">
            <p className="text-lg text-gray-600 max-w-md">
              Medical equipment Consumables at the highest quality medical
            </p>
          </div>
          <div className="lg:text-right">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              CSR and Sustainable Development
            </h2>
          </div>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            {csrImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`CSR initiative ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {csrImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content Below Slider */}
        <div className="text-center mt-12 max-w-3xl mx-auto">
          <p className="text-lg text-gray-600 leading-relaxed">
            Our commitment to corporate social responsibility extends beyond business operations. 
            We actively contribute to sustainable healthcare development through environmental initiatives, 
            community health programs, and ethical business practices that benefit society as a whole.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CSRSection;