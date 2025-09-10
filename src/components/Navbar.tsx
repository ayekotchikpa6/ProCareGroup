import React, { useState } from 'react';
import { ChevronDown, Menu, Building2 } from 'lucide-react';
import ProcareLogo from '../assets/Procare-logo.svg';
import HamburgerIcon from '../assets/navbar_icons/hamburger-menu-moblie-version.svg';
import ChineseSymbol1 from '../assets/navbar_icons/A-chinese-symbol-logo-desktop-version.svg';
import ChineseSymbol2 from '../assets/navbar_icons/A-chinese-symbol-logo-2-desktop-version.svg';

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
      <nav className="navbar-desktop hidden md:block sticky top-0 z-50">
        <div className="navbar-container">
          {/* Logo */}
          <div className="logo-container">
            <button
              onClick={() => handleNavigationClick('home')}
              className="logo-button"
            >
              <img src={ProcareLogo} alt="ProCareGroup" className="logo-image" />
            </button>
          </div>

          {/* Navigation Items */}
          <div className="nav-items-container">
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

          {/* Language Selector */}
          <div className="language-selector">
            <div className="language-highlight"></div>
            <button
              onClick={onLanguageToggle}
              className="language-text"
            >
              EN
            </button>
            <div className="language-icons">
              <img src={ChineseSymbol1} alt="Chinese Symbol 1" className="language-icon" />
              <img src={ChineseSymbol2} alt="Chinese Symbol 2" className="language-icon" />
            </div>
          </div>

          {/* Send Inquiry Button */}
          <div className="send-inquiry-container">
            <button
              onClick={onSendInquiry}
              className="send-inquiry-button"
            >
              Send Inquiry
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="navbar-mobile md:hidden sticky top-0 z-50">
        <div className="navbar-mobile-container">
          {/* Logo */}
          <div className="mobile-logo-container">
            <button
              onClick={() => handleNavigationClick('home')}
              className="mobile-logo-button"
            >
              <img src={ProcareLogo} alt="ProCareGroup" className="mobile-logo-image" />
            </button>
          </div>

          {/* Send Inquiry Button */}
          <div className="mobile-send-inquiry-container">
            <button
              onClick={onSendInquiry}
              className="mobile-send-inquiry-button"
            >
              Send Inquiry
            </button>
          </div>

          {/* Hamburger Menu */}
          <div className="hamburger-container">
            <button
              onClick={toggleMobileMenu}
              className="hamburger-button"
            >
              <img src={HamburgerIcon} alt="Menu" className="hamburger-icon" />
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

// Add CSS styles
const styles = `
  :root {
    --navbar-bg: rgba(0, 0, 0, 0.28);
    --navbar-transition: all 0.3s ease;
  }

  /* Desktop Styles */
  .navbar-desktop {
    background: var(--navbar-bg);
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  }

  .navbar-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .logo-container {
    position: absolute;
    width: 14.44vw;
    height: 4.01vh;
    top: 3.88vh;
    left: 4.44vw;
  }

  .logo-button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--navbar-transition);
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .language-selector {
    position: absolute;
    width: 6.6vw;
    height: 5vh;
    left: 88.96vw;
    top: 3.5vh;
    background: transparent;
    border-radius: 0.3125rem;
    overflow: hidden;
  }

  .language-highlight {
    position: absolute;
    width: 40%;
    height: 100%;
    right: 0;
    top: 0;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0 0.3125rem 0.3125rem 0;
  }

  .language-text {
    position: absolute;
    left: 18.95%;
    top: 25%;
    font-family: 'Instrument Sans', sans-serif;
    font-weight: 600;
    font-size: 1rem;
    color: white;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--navbar-transition);
  }

  .language-text:hover {
    opacity: 0.8;
  }

  .language-icons {
    position: absolute;
    width: 25.26%;
    height: 60%;
    left: 66.32%;
    top: 25%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .language-icon {
    width: auto;
    height: 100%;
    object-fit: contain;
  }

  .send-inquiry-container {
    position: absolute;
    width: 10.56vw;
    height: 6vh;
    top: 3vh;
    left: 76.81vw;
  }

  .send-inquiry-button {
    width: 100%;
    height: 100%;
    background: #0000FF;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    cursor: pointer;
    transition: var(--navbar-transition);
  }

  .send-inquiry-button:hover {
    background: #0000CC;
  }

  /* Mobile Styles */
  .navbar-mobile {
    background: var(--navbar-bg);
    height: 10vh;
    width: 100vw;
  }

  .navbar-mobile-container {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .mobile-logo-container {
    position: absolute;
    width: 21.67vw;
    height: 3.33vh;
    top: 3.33vh;
    left: 4.44vw;
  }

  .mobile-logo-button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--navbar-transition);
  }

  .mobile-logo-button:hover {
    opacity: 0.8;
  }

  .mobile-logo-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  .mobile-send-inquiry-container {
    position: absolute;
    width: 21.11vw;
    height: 6.67vh;
    top: 1.67vh;
    left: 72.22vw;
  }

  .mobile-send-inquiry-button {
    width: 100%;
    height: 100%;
    background: #0000FF;
    color: white;
    border: none;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 0.875rem;
    cursor: pointer;
    transition: var(--navbar-transition);
  }

  .mobile-send-inquiry-button:hover {
    background: #0000CC;
  }

  .hamburger-container {
    position: absolute;
    width: 4.44vw;
    height: 4.44vh;
    left: 97.78vw;
    top: 2.78vh;
    transform: translateX(-100%);
  }

  .hamburger-button {
    width: 100%;
    height: 100%;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: var(--navbar-transition);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger-button:hover {
    opacity: 0.8;
  }

  .hamburger-icon {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .navbar-desktop {
      display: none;
    }
  }

  @media (min-width: 769px) {
    .navbar-mobile {
      display: none;
    }
  }
`;

// Inject styles
if (typeof document !== 'undefined') {
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}

export default Navbar;
