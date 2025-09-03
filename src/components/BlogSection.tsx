import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const blogPosts = [
    {
      category: 'Innovation',
      title: 'Latest Advances in Medical Imaging Technology',
      excerpt: 'Discover how cutting-edge imaging solutions are revolutionizing diagnostic capabilities and improving patient outcomes across healthcare facilities.',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'Industry News',
      title: 'Sustainable Practices in Medical Equipment Manufacturing',
      excerpt: 'Learn about the latest trends in eco-friendly medical equipment production and how sustainability is shaping the future of healthcare.',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'Best Practices',
      title: 'Optimizing Equipment Maintenance for Better Performance',
      excerpt: 'Essential strategies for maintaining medical equipment to ensure optimal performance, extend lifespan, and maintain safety standards.',
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    },
    {
      category: 'Technology',
      title: 'Digital Health Solutions and Remote Monitoring',
      excerpt: 'Explore how digital health technologies are transforming patient care delivery and enabling remote healthcare monitoring.',
      image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop'
    }
  ];

  const articlesPerView = 3;
  const maxIndex = Math.max(0, blogPosts.length - articlesPerView);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Headers */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16">
          <div className="mb-6 lg:mb-0">
            <h3 className="text-2xl font-semibold text-gray-700">Blog</h3>
          </div>
          <div className="lg:text-right">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 max-w-lg">
              Medical Equipment Consumables at the highest Quality Medical
            </h2>
          </div>
        </div>

        {/* Blog Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / articlesPerView)}%)` }}
            >
              {blogPosts.map((post, index) => (
                <div key={index} className="flex-shrink-0 w-1/3 px-4">
                  <article className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200 overflow-hidden">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 bg-blue-50 text-secondary text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <button className="inline-flex items-center text-secondary font-semibold hover:text-blue-700 transition-colors duration-200">
                        <span>Read More</span>
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </button>
                    </div>
                  </article>
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
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentSlide ? 'bg-secondary' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;