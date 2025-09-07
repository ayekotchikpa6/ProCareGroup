import React from 'react';
import EventCard from '../components/EventCard';

interface MoreEventsSectionProps {
  onReadArticle: (articleId: string) => void;
}

const MoreEventsSection: React.FC<MoreEventsSectionProps> = ({ onReadArticle }) => {
  const eventArticles = [
    {
      id: 'event-1',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Community Outreach',
      title: 'Medical Equipment Donation Drive Reaches 50 Rural Clinics',
      date: 'March 15, 2024',
      readingTime: '5 min read'
    },
    {
      id: 'event-2',
      image: 'https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Environmental Impact',
      title: 'Achieving Carbon Neutral Operations: Our Sustainability Milestone',
      date: 'February 28, 2024',
      readingTime: '7 min read'
    },
    {
      id: 'event-3',
      image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'Education Initiative',
      title: 'Healthcare Training Program Graduates 200 Medical Professionals',
      date: 'January 20, 2024',
      readingTime: '4 min read'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            More Events & Initiatives
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay updated with our latest sustainability efforts and community impact stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {eventArticles.map((article) => (
            <EventCard 
              key={article.id} 
              article={article} 
              onReadArticle={onReadArticle}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreEventsSection;