import React from 'react';
import EventCard from '../components/EventCard';

interface EventDetailRelatedSectionProps {
  currentEventId: string;
  onReadArticle: (articleId: string) => void;
}

const EventDetailRelatedSection: React.FC<EventDetailRelatedSectionProps> = ({
  currentEventId,
  onReadArticle
}) => {
  // Related events data - excluding current event
  const relatedEvents = [
    {
      id: 'related-1',
      image: 'https://images.pexels.com/photos/6647019/pexels-photo-6647019.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Environmental Impact',
      title: 'Achieving Carbon Neutral Operations: Our Sustainability Milestone',
      date: 'February 28, 2024',
      readingTime: '7 min read'
    },
    {
      id: 'related-2',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Education Initiative',
      title: 'Healthcare Training Program Graduates 200 Medical Professionals',
      date: 'January 20, 2024',
      readingTime: '4 min read'
    },
    {
      id: 'related-3',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Community Outreach',
      title: 'Global Health Initiative Expands to 15 New Countries',
      date: 'December 15, 2023',
      readingTime: '6 min read'
    }
  ].filter(event => event.id !== currentEventId);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Other Events and Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover more of our sustainability efforts and community impact stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedEvents.slice(0, 3).map((event) => (
            <EventCard 
              key={event.id} 
              article={event} 
              onReadArticle={onReadArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDetailRelatedSection;