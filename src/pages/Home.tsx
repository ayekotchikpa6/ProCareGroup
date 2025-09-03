import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import HeroSlideshow from '../components/HeroSlideshow';
import AboutSection from '../components/AboutSection';
import ServicesGrid from '../components/ServicesGrid';
import BrandsSection from '../components/BrandsSection';
import CSRSection from '../components/CSRSection';
import BlogSection from '../components/BlogSection';
import TestimonialsSection from '../components/TestimonialsSection';

const Home: React.FC = () => {
  return (
    <div className="bg-background">
      <HeroSlideshow />
      <AboutSection />
      <ServicesGrid />
      <BrandsSection />
      <CSRSection />
      <BlogSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;