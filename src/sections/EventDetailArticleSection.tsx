import React from 'react';
import { eventDetailData } from '../data/eventDetailData';

interface EventDetailArticleSectionProps {
  eventId: string;
}

const EventDetailArticleSection: React.FC<EventDetailArticleSectionProps> = ({ eventId }) => {
  const eventData = eventDetailData[eventId] || eventDetailData['event-1'];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="prose prose-lg max-w-none">
          {eventData.content.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === 'heading' && (
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {section.text}
                </h3>
              )}
              {section.type === 'paragraph' && (
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {section.text}
                </p>
              )}
              {section.type === 'subheading' && (
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 mt-8">
                  {section.text}
                </h4>
              )}
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};

export default EventDetailArticleSection;