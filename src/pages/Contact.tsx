import React, { useState } from 'react';
import ContactHeroSection from '../sections/ContactHeroSection';
import ContactInfoSection from '../sections/ContactInfoSection';
import ContactFormSection from '../sections/ContactFormSection';
import ContactMapSection from '../sections/ContactMapSection';

const Contact: React.FC = () => {
  const [selectedFormType, setSelectedFormType] = useState('general');

  const handleFormTypeChange = (formType: string) => {
    setSelectedFormType(formType);
  };

  const handleFormSubmit = (formData: any) => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleDownloadCatalogue = () => {
    console.log('Download catalogue requested');
    // Handle catalogue download logic here
  };

  return (
    <div className="bg-background">
      <ContactHeroSection />
      <ContactInfoSection />
      <ContactFormSection 
        selectedFormType={selectedFormType}
        onFormTypeChange={handleFormTypeChange}
        onFormSubmit={handleFormSubmit}
        onDownloadCatalogue={handleDownloadCatalogue}
      />
      <ContactMapSection />
    </div>
  );
};

export default Contact;