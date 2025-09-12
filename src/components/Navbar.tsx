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
      <nav className="navbar-desktop bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm hidden md:block">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <button
              onClick={() => handleNavigationClick('home')}
              className="logo-button"
            >
              <img 
                src="/src/assets/Procare-logo.svg" 
                alt="ProCareGroup" 
                className="logo-image"
              />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="nav-items-container">
            {navigationItems.map((item) => (
              <div key={item.key} className="relative">
                <button
                  onClick={() => item.hasDropdown ? handleDropdownToggle(item.key) : handleNavigationClick(item.key)}
                  className={`nav-item-button ${
                    currentPage === item.key
                      ? 'text-secondary border-b-2 border-secondary'
                      : 'text-gray-700 hover:text-secondary'
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && (
                    <ChevronDown className={`nav-chevron ${openDropdown === item.key ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {/* Dropdown Menu */}
                {item.hasDropdown && openDropdown === item.key && (
                  <div className={`dropdown-menu ${
                    item.key === 'about' ? 'dropdown-about' : item.key === 'products' ? 'dropdown-products' : 'dropdown-default'
                  }`}>
                    <div className="dropdown-content">
                      {item.key === 'about' && (
                        <div className="dropdown-grid-2">
                          <button
                            onClick={() => handleNavigationClick('about')}
                            className="dropdown-item"
                          >
                            Who We Are
                          </button>
                          <button
                            onClick={() => handleNavigationClick('sustainability')}
                            className="dropdown-item"
                          >
                            Sustainability & CSR
                          </button>
                          <button
                            onClick={() => handleNavigationClick('about')}
                            className="dropdown-item"
                          >
                            Our Brands
                          </button>
                          <button
                           onClick={() => handleNavigationClick('news-blogs')}
                            className="dropdown-item"
                          >
                            News & Blogs
                          </button>
                        </div>
                      )}
                      {item.key === 'products' && (
                        <div className="dropdown-grid-3">
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            General Care
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Ophthalmology
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Otolaryngology
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Urology, gynecology-obstetrics
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Laboratory
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Dental
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Gastroenterology
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Furniture and Logistics
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Comfort and Wellbeing
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Podology, dermatology
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
                          >
                            Re-education
                          </button>
                          <button
                            onClick={() => handleNavigationClick('products')}
                            className="dropdown-item"
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
          <div className="action-buttons-container">
            <button
              onClick={onSendInquiry}
              className="send-inquiry-button"
            >
              Send Inquiry
            </button>
            
            <div className="language-container">
              <div className="language-button-container">
                <span className="language-text">{language}</span>
                <div className="language-overlay" onClick={onLanguageToggle}>
                  <img 
                    src="/src/assets/navbar_icons/A-chinese-symbol-logo-desktop-version.svg" 
                    alt="Language" 
                    className="language-icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="navbar-mobile bg-primary border-b border-gray-100 sticky top-0 z-50 shadow-sm md:hidden">
        <div className="mobile-navbar-container">
          {/* Logo */}
          <div className="mobile-logo-container">
            <button
              onClick={() => handleNavigationClick('home')}
              className="mobile-logo-button"
            >
              <img 
                src="/src/assets/Procare-logo.svg" 
                alt="ProCareGroup" 
                className="mobile-logo-image"
              />
            </button>
          </div>

          {/* Send Inquiry Button */}
          <button
            onClick={onSendInquiry}
            className="mobile-send-inquiry-button"
          >
            Send Inquiry
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="mobile-hamburger-button"
          >
            <img 
              src="/src/assets/navbar_icons/hamburger-menu-moblie-version.svg" 
              alt="Menu" 
              className="mobile-hamburger-icon"
            />
          </button>
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

      <style jsx>{`
        /* CSS Custom Properties */
        :root {
          --navbar-bg: #00000047;
          --navbar-height-mobile: 9vh;
          --navbar-height-desktop: 6rem;
          --logo-width-mobile: 19.5vw;
          --logo-height-mobile: 3vh;
          --logo-width-desktop: 13rem;
          --logo-height-desktop: 2rem;
          --button-width: 9.5rem;
          --button-height: 3rem;
          --hamburger-size: 2rem;
          --language-container-width: 5.9375rem;
          --language-container-height: 2.5rem;
          --language-overlay-size: 2.5rem;
          --border-radius-small: 0.3125rem;
        }

        /* Desktop Navbar */
        .navbar-desktop {
          background: var(--navbar-bg);
          height: var(--navbar-height-desktop);
        }

        .navbar-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .logo-container {
          position: absolute;
          top: 1.9375rem;
          left: 4rem;
          width: var(--logo-width-desktop);
          height: var(--logo-height-desktop);
        }

        .logo-button {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .logo-button:hover {
          opacity: 0.8;
        }

        .logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .nav-items-container {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 2rem;
          height: 100%;
        }

        .nav-item-button {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.75rem 0.5rem;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .nav-chevron {
          width: 1rem;
          height: 1rem;
          transition: transform 0.2s ease;
        }

        .action-buttons-container {
          position: absolute;
          right: 4rem;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .send-inquiry-button {
          width: var(--button-width);
          height: var(--button-height);
          background: #0000FF;
          color: white;
          border: none;
          border-radius: var(--border-radius-small);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .send-inquiry-button:hover {
          background: #0000CC;
        }

        .language-container {
          position: relative;
        }

        .language-button-container {
          position: relative;
          width: var(--language-container-width);
          height: var(--language-container-height);
          display: flex;
          align-items: center;
          background: transparent;
          border-radius: var(--border-radius-small);
          overflow: hidden;
        }

        .language-text {
          position: absolute;
          left: 1.125rem;
          top: 50%;
          transform: translateY(-50%);
          width: 1.375rem;
          height: 1.25rem;
          font-family: 'Instrument Sans', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .language-overlay {
          position: absolute;
          right: 0;
          top: 0;
          width: var(--language-overlay-size);
          height: var(--language-overlay-size);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0 var(--border-radius-small) var(--border-radius-small) 0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .language-overlay:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .language-icon {
          width: 1.5rem;
          height: 1.5rem;
          object-fit: contain;
        }

        /* Mobile Navbar */
        .navbar-mobile {
          background: var(--navbar-bg);
          height: var(--navbar-height-mobile);
        }

        .mobile-navbar-container {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .mobile-logo-container {
          position: absolute;
          top: 3vh;
          left: 4vw;
          width: var(--logo-width-mobile);
          height: var(--logo-height-mobile);
        }

        .mobile-logo-button {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .mobile-logo-button:hover {
          opacity: 0.8;
        }

        .mobile-logo-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .mobile-send-inquiry-button {
          position: absolute;
          top: 1.5vh;
          right: 12vw;
          width: var(--button-width);
          height: var(--button-height);
          background: #0000FF;
          color: white;
          border: none;
          border-radius: var(--border-radius-small);
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .mobile-send-inquiry-button:hover {
          background: #0000CC;
        }

        .mobile-hamburger-button {
          position: absolute;
          top: 2.5vh;
          right: 4vw;
          width: var(--hamburger-size);
          height: var(--hamburger-size);
          background: transparent;
          border: none;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .mobile-hamburger-button:hover {
          opacity: 0.8;
        }

        .mobile-hamburger-icon {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        /* Dropdown Styles */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 0.5rem;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.375rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
          z-index: 50;
        }

        .dropdown-about {
          width: 24rem;
        }

        .dropdown-products {
          width: 37.5rem;
        }

        .dropdown-default {
          width: 12rem;
        }

        .dropdown-content {
          padding: 1rem;
        }

        .dropdown-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        .dropdown-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .dropdown-item {
          text-align: left;
          padding: 0.75rem;
          font-size: 0.875rem;
          color: #374151;
          background: transparent;
          border: none;
          border-radius: 0.375rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .dropdown-item:hover {
          background: #f9fafb;
          color: #0000FF;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .mobile-logo-container {
            width: 20vw;
            height: 3.5vh;
          }
          
          .mobile-send-inquiry-button {
            width: 18vw;
            height: 2.5rem;
            font-size: 0.75rem;
            right: 14vw;
          }
          
          .mobile-hamburger-button {
            right: 6vw;
          }
        }

        @media (max-width: 480px) {
          .mobile-logo-container {
            width: 25vw;
            height: 4vh;
          }
          
          .mobile-send-inquiry-button {
            width: 20vw;
            height: 2.2rem;
            font-size: 0.7rem;
            right: 16vw;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;