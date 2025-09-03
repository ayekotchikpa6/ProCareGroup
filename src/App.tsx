import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [language, setLanguage] = useState('EN');

  const navigationItems = [
    { name: 'Home', key: 'home', hasDropdown: false },
    { name: 'About Us', key: 'about', hasDropdown: true },
    { name: 'Products', key: 'products', hasDropdown: true },
    { name: 'Services', key: 'services', hasDropdown: false },
    { name: 'Contact', key: 'contact', hasDropdown: false },
    { name: 'Careers', key: 'careers', hasDropdown: false },
  ];

  const footerLinks = [
    { name: 'Home', key: 'home' },
    { name: 'Products', key: 'products' },
    { name: 'Services', key: 'services' },
    { name: 'Contact', key: 'contact' },
    { name: 'Send Inquiry', key: 'inquiry' },
    { name: 'Request Quote', key: 'quote' },
    { name: 'Book Appointment', key: 'appointment' },
    { name: 'FAQ', key: 'faq' },
    { name: 'Terms and Conditions', key: 'terms' },
    { name: 'Privacy Policy', key: 'privacy' },
  ];

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'services':
        return <Services />;
      case 'contact':
        return <Contact />;
      case 'careers':
        return <Careers />;
      default:
        return <Home />;
    }
  };

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const handleLanguageToggle = () => {
    setLanguage(language === 'EN' ? 'FR' : 'EN');
  };

  const handleSendInquiry = () => {
    setCurrentPage('contact');
  };

  const handleNewsletterSubscribe = (email: string) => {
    console.log('Newsletter subscription:', email);
    // Handle newsletter subscription logic here
  };

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar
        navigationItems={navigationItems}
        currentPage={currentPage}
        language={language}
        onNavigate={handleNavigation}
        onLanguageToggle={handleLanguageToggle}
        onSendInquiry={handleSendInquiry}
      />
      
      <main>
        {renderCurrentPage()}
      </main>
      
      <Newsletter onSubscribe={handleNewsletterSubscribe} />
      <Footer
        footerLinks={footerLinks}
        onNavigate={handleNavigation}
      />
    </div>
  );
}

export default App;