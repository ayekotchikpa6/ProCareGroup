import React, { useState } from 'react';
import './ResponsiveNavbar.css';

interface ResponsiveNavbarProps {
  onSendInquiry?: () => void;
  onLanguageToggle?: () => void;
  currentLanguage?: string;
}

const ResponsiveNavbar: React.FC<ResponsiveNavbarProps> = ({
  onSendInquiry,
  onLanguageToggle,
  currentLanguage = 'EN'
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSendInquiry = () => {
    if (onSendInquiry) {
      onSendInquiry();
    }
  };

  const handleLanguageToggle = () => {
    if (onLanguageToggle) {
      onLanguageToggle();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="responsive-navbar">
      {/* Mobile Version */}
      <div className="navbar-mobile">
        {/* Logo Container */}
        <div className="logo-container-mobile">
          <img 
            src="/src/assets/Procare-logo.svg" 
            alt="ProCare Logo" 
            className="logo-mobile"
          />
        </div>

        {/* Send Inquiry Button */}
        <button 
          className="send-inquiry-mobile"
          onClick={handleSendInquiry}
          type="button"
        >
          Send Inquiry
        </button>

        {/* Hamburger Menu */}
        <button 
          className="hamburger-menu"
          onClick={toggleMobileMenu}
          type="button"
          aria-label="Toggle mobile menu"
        >
          <img 
            src="/src/assets/navbar_icons/hamburger-menu-moblie-version.svg" 
            alt="Menu" 
            className="hamburger-icon"
          />
        </button>
      </div>

      {/* Desktop Version */}
      <div className="navbar-desktop">
        {/* Logo Container */}
        <div className="logo-container-desktop">
          <img 
            src="/src/assets/Procare-logo.svg" 
            alt="ProCare Logo" 
            className="logo-desktop"
          />
        </div>

        {/* Send Inquiry Button */}
        <button 
          className="send-inquiry-desktop"
          onClick={handleSendInquiry}
          type="button"
        >
          Send Inquiry
        </button>

        {/* Language Selector */}
        <div className="language-selector">
          <div className="language-highlight"></div>
          <span className="language-text">{currentLanguage}</span>
          <div className="language-icons">
            <img 
              src="/src/assets/navbar_icons/A-chinese-symbol-logo-desktop-version.svg" 
              alt="Language 1" 
              className="language-icon"
            />
            <img 
              src="/src/assets/navbar_icons/A-chinese-symbol-logo-2-desktop-version.svg" 
              alt="Language 2" 
              className="language-icon"
            />
          </div>
          <button 
            className="language-toggle"
            onClick={handleLanguageToggle}
            type="button"
            aria-label="Toggle language"
          />
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;