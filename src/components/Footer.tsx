import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

interface FooterLink {
  name: string;
  key: string;
}

interface FooterProps {
  footerLinks: FooterLink[];
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ footerLinks, onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (key: string) => {
    if (['home', 'products', 'services', 'contact'].includes(key)) {
      onNavigate(key);
    } else {
      // Handle other links (inquiry, quote, appointment, etc.)
      console.log(`Navigate to ${key}`);
    }
  };

  // Group links into columns for better organization
  const navigationLinks = footerLinks.filter(link => 
    ['home', 'products', 'services', 'contact'].includes(link.key)
  );
  
  const serviceLinks = footerLinks.filter(link => 
    ['inquiry', 'quote', 'appointment', 'faq'].includes(link.key)
  );
  
  const legalLinks = footerLinks.filter(link => 
    ['terms', 'privacy'].includes(link.key)
  );

  return (
    <footer className="bg-gray-900 text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold">ProCareGroup</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Leading provider of professional healthcare solutions, 
              committed to excellence in service and innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-5 w-5 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-5 w-5 text-secondary" />
                <span>info@procaregroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>123 Healthcare Blvd, Medical District</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleLinkClick(link.key)}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleLinkClick(link.key)}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleLinkClick(link.key)}
                    className="text-gray-300 hover:text-secondary transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} ProCareGroup. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                Professional Healthcare Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;