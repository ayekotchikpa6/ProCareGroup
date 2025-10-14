import React from 'react';
import { Building2 } from 'lucide-react';

interface FooterLink {
  name: string;
  key: string;
}

interface FooterProps {
  footerLinks: FooterLink[];
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ footerLinks, onNavigate }) => {
  const handleLinkClick = (key: string) => {
    if (['home', 'products', 'services', 'contact', 'careers', 'news-blogs', 'sustainability'].includes(key)) {
      onNavigate(key);
    } else {
      // Handle other links (inquiry, quote, appointment, etc.)
      console.log(`Navigate to ${key}`);
    }
  };

  return (
    <footer style={{ backgroundColor: '#000080' }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between">
            {/* Logo - Far Left */}
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">ProCareGroup</span>
            </div>

            {/* Three Column Layout */}
            <div className="flex space-x-16">
              {/* Column 1 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('home')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Home
                </button>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Products
                </button>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Services
                </button>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Contact
                </button>
                <button
                  onClick={() => handleLinkClick('inquiry')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Send Inquiry
                </button>
                <button
                  onClick={() => handleLinkClick('quote')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Request Quote
                </button>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('appointment')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row - Legal & Copyright */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-blue-700">
            <p className="text-white text-sm">
              Procare Group All Rights Reserved © 2025
            </p>
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleLinkClick('faq')}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                FAQ
              </button>
              <button
                onClick={() => handleLinkClick('terms')}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                Terms and Conditions
              </button>
              <button
                onClick={() => handleLinkClick('privacy')}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Centered Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-white" />
              <span className="text-2xl font-bold text-white">ProCareGroup</span>
            </div>
          </div>

          {/* Four Column Grid - Left Aligned */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
            {/* Column 1 */}
            <div className="space-y-3">
              <button
                onClick={() => handleLinkClick('home')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Home
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Products
              </button>
              <button
                onClick={() => handleLinkClick('news-blogs')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Blogs
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Pediatrics
              </button>
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              <button
                onClick={() => handleLinkClick('appointment')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Book Appointment
              </button>
              <button
                onClick={() => handleLinkClick('services')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('sustainability')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Sustainability & CSR
              </button>
              <button
                onClick={() => handleLinkClick('news-blogs')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                News
              </button>
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              <button
                onClick={() => handleLinkClick('contact')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Contact
              </button>
              <button
                onClick={() => handleLinkClick('inquiry')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Send Inquiry
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                General Medicine
              </button>
              <button
                onClick={() => handleLinkClick('news-blogs')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Articles
              </button>
            </div>

            {/* Column 4 */}
            <div className="space-y-3">
              <button
                onClick={() => handleLinkClick('quote')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Request Quote
              </button>
              <button
                onClick={() => handleLinkClick('careers')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Careers
              </button>
              <button
                onClick={() => handleLinkClick('products')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Emergency Medicine
              </button>
              <button
                onClick={() => handleLinkClick('about')}
                className="block text-white hover:text-gray-300 transition-colors duration-200 text-left text-sm"
              >
                Our Brands
              </button>
            </div>
          </div>

          {/* Bottom Row - Legal & Copyright (Left Aligned) */}
          <div className="pt-8 border-t border-blue-700 space-y-2">
            <div className="text-left">
              <button
                onClick={() => handleLinkClick('terms')}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                Terms and Conditions
              </button>
              <span className="text-white text-sm mx-2">•</span>
              <button
                onClick={() => handleLinkClick('privacy')}
                className="text-white hover:text-gray-300 transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </button>
            </div>
            <p className="text-white text-sm text-left">
              Procare group © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;