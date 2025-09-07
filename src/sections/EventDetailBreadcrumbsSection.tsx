import React from 'react';
import { ChevronRight, Calendar, Clock } from 'lucide-react';
import { eventDetailData } from '../data/eventDetailData';

interface EventDetailBreadcrumbsSectionProps {
  onNavigateHome: () => void;
  onNavigateBlog: () => void;
  onNavigateBlogWriting: () => void;
  eventId: string;
}

const EventDetailBreadcrumbsSection: React.FC<EventDetailBreadcrumbsSectionProps> = ({
  onNavigateHome,
  onNavigateBlog,
  onNavigateBlogWriting,
  eventId
}) => {
  const eventData = eventDetailData[eventId] || eventDetailData['event-1'];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-8">
          <button 
            onClick={onNavigateHome}
            className="hover:text-secondary transition-colors duration-200"
          >
            Home
          </button>
          <ChevronRight className="h-4 w-4" />
          <button 
            onClick={onNavigateBlog}
            className="hover:text-secondary transition-colors duration-200"
          >
            Blog
          </button>
          <ChevronRight className="h-4 w-4" />
          <button 
            onClick={onNavigateBlogWriting}
            className="hover:text-secondary transition-colors duration-200"
          >
            Blog writing
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="text-gray-900 font-medium">You are Here</span>
        </nav>

        {/* Article Header Box */}
        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Article Image */}
            <div className="aspect-w-16 aspect-h-9 lg:aspect-w-4 lg:aspect-h-3">
              <img
                src={eventData.image}
                alt={eventData.title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>

            {/* Article Info */}
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                  {eventData.category}
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {eventData.title}
              </h2>
              
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{eventData.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">{eventData.readingTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailBreadcrumbsSection;