import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { eventDetailData } from '../data/eventDetailData';

interface EventDetailGallerySectionProps {
  eventId: string;
}

const EventDetailGallerySection: React.FC<EventDetailGallerySectionProps> = ({ eventId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const eventData = eventDetailData[eventId] || eventDetailData['event-1'];
  const galleryImages = eventData.gallery;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Event Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore moments from our sustainability and community impact initiatives
          </p>
        </div>

        {/* Image Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image.url}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                {/* Image Caption Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                  <p className="text-lg font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls - Bottom Right */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button
              onClick={prevSlide}
              className="p-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button
              onClick={nextSlide}
              className="p-3 bg-white bg-opacity-90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:text-secondary transition-colors duration-200"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {galleryImages.map((_, index) => (
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
      </div>
    </section>
  );
};

export default EventDetailGallerySection;