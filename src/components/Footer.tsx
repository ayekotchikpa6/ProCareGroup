import React from 'react';

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
    if (['home', 'products', 'services', 'contact'].includes(key)) {
      onNavigate(key);
    } else {
      // Handle other links (inquiry, quote, appointment, etc.)
      console.log(`Navigate to ${key}`);
    }
  };

  return (
    <footer className="bg-[#000080] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Desktop Layout */}
        <div className="hidden md:block">
          <div className="flex items-start justify-between mb-12">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img
                src="/src/assets/logo-icon-desktop-version.svg"
                alt="ProCare Group"
                className="h-12 w-auto"
              />
            </div>

            {/* Three Column Links */}
            <div className="flex space-x-16">
              {/* Column 1 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('home')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Home
                </button>
                <button
                  onClick={() => handleLinkClick('products')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Products
                </button>
                <button
                  onClick={() => handleLinkClick('services')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Services
                </button>
              </div>

              {/* Column 2 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('contact')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Contact
                </button>
                <button
                  onClick={() => handleLinkClick('inquiry')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Send Inquiry
                </button>
                <button
                  onClick={() => handleLinkClick('quote')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Request Quote
                </button>
              </div>

              {/* Column 3 */}
              <div className="space-y-3">
                <button
                  onClick={() => handleLinkClick('appointment')}
                  className="block text-white hover:text-gray-300 transition-colors duration-200 text-left"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex justify-between items-center pt-8 border-t border-blue-700">
            <p className="text-white text-sm">
              Procare Group All Rights Reserved © 2025
            </p>
            <div className="flex space-x-6">
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
            <img
              src="/src/assets/Procare-logo-mobile-version.svg"
              alt="ProCare Group"
              className="h-12 w-auto"
            />
          </div>

          {/* Stacked Link Groups */}
          <div className="space-y-6 text-left">
            {/* Group 1 */}
            <div className="space-y-2">
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
                onClick={() => handleLinkClick('blogs')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Blogs
              </button>
              <button
                onClick={() => handleLinkClick('pediatrics')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Pediatrics
              </button>
            </div>

            {/* Group 2 */}
            <div className="space-y-2">
              <button
                onClick={() => handleLinkClick('appointment')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Book Appointment
              </button>
              <button
                onClick={() => handleLinkClick('services')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('sustainability')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Sustainability & CSR
              </button>
              <button
                onClick={() => handleLinkClick('news')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                News
              </button>
            </div>

            {/* Group 3 */}
            <div className="space-y-2">
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
                onClick={() => handleLinkClick('general-medicine')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                General Medicine
              </button>
              <button
                onClick={() => handleLinkClick('articles')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Articles
              </button>
            </div>

            {/* Group 4 */}
            <div className="space-y-2">
              <button
                onClick={() => handleLinkClick('quote')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Request Quote
              </button>
              <button
                onClick={() => handleLinkClick('careers')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Careers
              </button>
              <button
                onClick={() => handleLinkClick('emergency-medicine')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Emergency Medicine
              </button>
              <button
                onClick={() => handleLinkClick('brands')}
                className="block text-white hover:text-gray-300 transition-colors duration-200"
              >
                Our Brands
              </button>
            </div>
          </div>

          {/* Bottom Legal & Copyright */}
          <div className="mt-8 pt-8 border-t border-blue-700 text-left space-y-2">
            <p className="text-white text-sm">
              Procare group © 2025
            </p>
            <div className="text-white text-sm">
              <button
                onClick={() => handleLinkClick('terms')}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Terms and Conditions
              </button>
              <span className="mx-2">•</span>
              <button
                onClick={() => handleLinkClick('privacy')}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;