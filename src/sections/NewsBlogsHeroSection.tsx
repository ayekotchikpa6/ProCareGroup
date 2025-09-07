import React from 'react';
import { ArrowRight } from 'lucide-react';

interface NewsBlogsHeroSectionProps {
  onReadMore: () => void;
}

const NewsBlogsHeroSection: React.FC<NewsBlogsHeroSectionProps> = ({ onReadMore }) => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`
      }}
    >
      <div className="text-center text-white max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
          Blog CSR and Sustainable Development 
          <span className="block">CSR and Sustainable Development</span>
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12">
          Stay informed about our latest sustainability initiatives, corporate social responsibility efforts, 
          and industry insights that shape the future of healthcare. Discover stories of impact, innovation, 
          and our commitment to building a healthier world.
        </p>

        {/* Read More Button */}
        <button 
          onClick={onReadMore}
          className="inline-flex items-center px-10 py-4 bg-white text-gray-900 font-semibold text-lg rounded-md hover:bg-gray-100 transition-colors duration-200 shadow-lg"
        >
          <span>Read More</span>
          <ArrowRight className="ml-3 h-6 w-6" />
        </button>
      </div>
    </section>
  );
};

export default NewsBlogsHeroSection;