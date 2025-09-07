import React, { useState } from 'react';
import EventDetailHeroSection from '../sections/EventDetailHeroSection';
import EventDetailBreadcrumbsSection from '../sections/EventDetailBreadcrumbsSection';
import EventDetailArticleSection from '../sections/EventDetailArticleSection';
import EventDetailGallerySection from '../sections/EventDetailGallerySection';
import EventDetailRelatedSection from '../sections/EventDetailRelatedSection';

interface EventDetailProps {
  eventId?: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ eventId = 'event-1' }) => {
  const handleNavigateHome = () => {
    console.log('Navigate to home');
  };

  const handleNavigateBlog = () => {
    console.log('Navigate to blog');
  };

  const handleNavigateBlogWriting = () => {
    console.log('Navigate to blog writing');
  };

  const handleReadRelatedArticle = (articleId: string) => {
    console.log('Navigate to related article:', articleId);
  };

  return (
    <div className="bg-background">
      <EventDetailHeroSection />
      
      <EventDetailBreadcrumbsSection 
        onNavigateHome={handleNavigateHome}
        onNavigateBlog={handleNavigateBlog}
        onNavigateBlogWriting={handleNavigateBlogWriting}
        eventId={eventId}
      />
      
      <EventDetailArticleSection eventId={eventId} />
      
      <EventDetailGallerySection eventId={eventId} />
      
      <EventDetailRelatedSection 
        currentEventId={eventId}
        onReadArticle={handleReadRelatedArticle}
      />
    </div>
  );
};

export default EventDetail;