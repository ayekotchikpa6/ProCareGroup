import React from 'react';
import FormTypeSelector from '../components/FormTypeSelector';
import ContactForm from '../components/ContactForm';

interface ContactFormSectionProps {
  selectedFormType: string;
  onFormTypeChange: (formType: string) => void;
  onFormSubmit: (formData: any) => void;
  onDownloadCatalogue: () => void;
}

const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  selectedFormType,
  onFormTypeChange,
  onFormSubmit,
  onDownloadCatalogue
}) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the type of inquiry that best matches your needs and fill out the corresponding form
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Box - Form Type Selector */}
          <FormTypeSelector 
            selectedFormType={selectedFormType}
            onFormTypeChange={onFormTypeChange}
            onDownloadCatalogue={onDownloadCatalogue}
          />

          {/* Right Box - Dynamic Form */}
          <ContactForm 
            selectedFormType={selectedFormType}
            onFormSubmit={onFormSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;