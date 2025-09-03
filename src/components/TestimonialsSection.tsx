import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      title: 'Chief Medical Officer',
      testimonial: 'Procare has been instrumental in upgrading our medical equipment infrastructure. Their commitment to quality and exceptional customer service has made them our preferred partner for all medical equipment needs.',
      reviewerPhoto: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reviewerName: 'Dr. Sarah Johnson'
    },
    {
      title: 'Hospital Administrator',
      testimonial: 'The reliability and performance of Procare equipment has significantly improved our operational efficiency. Their technical support team is always responsive and knowledgeable.',
      reviewerPhoto: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reviewerName: 'Michael Chen'
    },
    {
      title: 'Department Head',
      testimonial: 'Working with Procare has transformed our diagnostic capabilities. The quality of their equipment and the comprehensive training they provide has elevated our patient care standards.',
      reviewerPhoto: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reviewerName: 'Dr. Emily Rodriguez'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Trusted by healthcare professionals worldwide
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full">
                  <div className="bg-white rounded-lg p-12 mx-4 text-center shadow-xl">
                    {/* Quote Icon */}
                    <div className="flex justify-center mb-8">
                      <div className="p-4 bg-blue-50 rounded-full">
                        <Quote className="h-8 w-8 text-secondary" />
                      </div>
                    </div>

                    {/* Customer Title */}
                    <h3 className="text-xl font-semibold text-secondary mb-6">
                      {testimonial.title}
                    </h3>

                    {/* Testimonial Text */}
                    <blockquote className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                      "{testimonial.testimonial}"
                    </blockquote>

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-center space-x-4">
                      <img
                        src={testimonial.reviewerPhoto}
                        alt={testimonial.reviewerName}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-gray-900">
                          {testimonial.reviewerName}
                        </p>
                        <p className="text-gray-600">
                          {testimonial.title}
                        </p>
                      </div>
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
        <div className="flex justify-center mt-8 space-x-3">
          {testimonials.map((_, index) => (
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
    </section>
  );
};

export default TestimonialsSection;