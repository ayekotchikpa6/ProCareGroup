import React, { useState } from 'react';
import { ChevronDown, Menu, Building2 } from 'lucide-react';

interface NavigationItem {
  name: string;
  key: string;
  hasDropdown: boolean;
}

interface NavbarProps {
  navigationItems: NavigationItem[];
  currentPage: string;
  language: string;
  onNavigate: (page: string) => void;
  onLanguageToggle: () => void;
  onSendInquiry: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  navigationItems,
  currentPage,
  language,
  onNavigate,
  onLanguageToggle,
  onSendInquiry
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setMobileOpenDropdown(null);
  };

  const handleDropdownToggle = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleMobileDropdownToggle = (key: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === key ? null : key);
  };

  const handleNavigationClick = (key: string) => {
    onNavigate(key);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  };

  const handleMobileSubNavClick = (key: string) => {
    onNavigate(key);
    setIsMobileMenuOpen(false);
    setMobileOpenDropdown(null);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm hidden md:block">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavigationClick('home')}
                className="flex items-center space-x-2 text-secondary hover:opacity-80 transition-opacity"
              >
                <Building2 className="h-8 w-8" />
                <span className="text-xl font-bold">ProCareGroup</span>
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.key} className="relative">
                  <button
                    onClick={() => item.hasDropdown ? handleDropdownToggle(item.key) : handleNavigationClick(item.key)}
                    className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                      currentPage === item.key
                        ? 'text-secondary border-b-2 border-secondary'
                        : 'text-gray-700 hover:text-secondary'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform ${openDropdown === item.key ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Dropdown Menu */}
                  {item.hasDropdown && openDropdown === item.key && (
                    <div className={`absolute top-full left-0 mt-2 bg-primary border border-gray-200 rounded-md shadow-lg ${
                      item.key === 'about' ? 'w-96' : item.key === 'products' ? 'w-[600px]' : 'w-48'
                    }`}>
                      <div className="p-4">
                        {item.key === 'about' && (
                          <div className="grid grid-cols-2 gap-4">
                            <button
                              onClick={() => handleNavigationClick('about')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Who We Are
                            </button>
                            <button
                              onClick={() => handleNavigationClick('sustainability')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Sustainability & CSR
                            </button>
                            <button
                              onClick={() => handleNavigationClick('about')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Our Brands
                            </button>
                            <button
                             onClick={() => handleNavigationClick('news-blogs')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              News & Blogs
                            </button>
                          </div>
                        )}
                        {item.key === 'products' && (
                          <div className="grid grid-cols-3 gap-4">
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              General Care
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Ophtalmology
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Otolaryngology
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Urology, gynecology-obstetrics
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Laboratory
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Dental
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Gastroenterology
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Furniture and Logistics
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Comfort and Wellbeing
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Podology, dermatology
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Re-education
                            </button>
                            <button
                              onClick={() => handleNavigationClick('products')}
                              className="text-left p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md"
                            >
                              Medical consumables
                            </button>
                          </div>
                        )}
                        {item.key !== 'about' && item.key !== 'products' && (
                          <div className="py-2">
                            <button
                              onClick={() => handleNavigationClick(item.key)}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                            >
                              {item.name} Overview
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={onLanguageToggle}
                className="px-3 py-1 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                {language}
              </button>
              <button
                onClick={onSendInquiry}
                className="px-6 py-2 bg-secondary text-primary text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Primary Mobile Navigation Bar */}
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <button
              onClick={() => handleNavigationClick('home')}
              className="flex items-center space-x-2 text-secondary hover:opacity-80 transition-opacity"
            >
              <Building2 className="h-8 w-8" />
              <span className="text-xl font-bold">ProCareGroup</span>
            </button>

            {/* Send Inquiry Button */}
            <button
              onClick={onSendInquiry}
              className="px-4 py-2 bg-secondary text-primary text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Inquiry
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-gray-700 hover:text-secondary transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Secondary Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="bg-[#000080]">
            {/* 1x6 Grid Navigation */}
            <div className="grid grid-cols-6 gap-1 p-2">
              {navigationItems.map((item) => (
                <div key={item.key} className="relative">
                  <button
                    onClick={() => item.hasDropdown ? handleMobileDropdownToggle(item.key) : handleNavigationClick(item.key)}
                    className="w-full flex flex-col items-center justify-center p-3 text-white hover:bg-blue-700 transition-colors duration-200 rounded-md"
                  >
                    <span className="text-xs font-medium text-center leading-tight">
                      {item.name}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDown className={`h-3 w-3 mt-1 transition-transform duration-200 ${
                        mobileOpenDropdown === item.key ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                </div>
              ))}
            </div>

            {/* Mobile Dropdowns */}
            {mobileOpenDropdown === 'about' && (
              <div className="bg-white border-t border-blue-300 p-4">
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleMobileSubNavClick('about')}
                    className="p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Who We Are
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('sustainability')}
                    className="p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Sustainability & CSR
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('about')}
                    className="p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Our Brands
                  </button>
                  <button
                   onClick={() => handleMobileSubNavClick('news-blogs')}
                    className="p-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    News & Blogs
                  </button>
                </div>
              </div>
            )}

            {mobileOpenDropdown === 'products' && (
              <div className="bg-white border-t border-blue-300 p-4">
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    General Care
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Ophthalmology
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Otolaryngology
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Urology, gynecology-obstetrics
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Laboratory
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Dental
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Gastroenterology
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Furniture and Logistics
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Comfort and Wellbeing
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Podology, dermatology
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Re-education
                  </button>
                  <button
                    onClick={() => handleMobileSubNavClick('products')}
                    className="p-2 text-xs text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors rounded-md text-left"
                  >
                    Medical consumables
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
