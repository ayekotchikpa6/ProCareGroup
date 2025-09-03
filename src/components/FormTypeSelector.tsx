import React from 'react';
import { Download, MessageSquare, ShoppingCart, Calendar, HelpCircle, Briefcase } from 'lucide-react';

interface FormTypeSelectorProps {
  selectedFormType: string;
  onFormTypeChange: (formType: string) => void;
  onDownloadCatalogue: () => void;
}

const FormTypeSelector: React.FC<FormTypeSelectorProps> = ({
  selectedFormType,
  onFormTypeChange,
  onDownloadCatalogue
}) => {
  const formTypes = [
    {
      key: 'general',
      icon: MessageSquare,
      title: 'General Inquiry',
      description: 'Ask questions about our services, products, or company'
    },
    {
      key: 'quote',
      icon: ShoppingCart,
      title: 'Request Quote',
      description: 'Get pricing information for specific medical equipment'
    },
    {
      key: 'appointment',
      icon: Calendar,
      title: 'Book Appointment',
      description: 'Schedule a consultation or equipment demonstration'
    },
    {
      key: 'support',
      icon: HelpCircle,
      title: 'Technical Support',
      description: 'Get help with existing equipment or technical issues'
    },
    {
      key: 'partnership',
      icon: Briefcase,
      title: 'Partnership Inquiry',
      description: 'Explore business partnership and collaboration opportunities'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        Select Inquiry Type
      </h3>
      
      <div className="space-y-4 mb-8">
        {formTypes.map((type) => {
          const IconComponent = type.icon;
          return (
            <button
              key={type.key}
              onClick={() => onFormTypeChange(type.key)}
              className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedFormType === type.key
                  ? 'border-secondary bg-blue-50'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-2 rounded-lg ${
                  selectedFormType === type.key ? 'bg-secondary text-white' : 'bg-gray-100 text-gray-600'
                }`}>
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h4 className={`font-semibold mb-1 ${
                    selectedFormType === type.key ? 'text-secondary' : 'text-gray-900'
                  }`}>
                    {type.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {type.description}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Download Catalogue Button */}
      <div className="pt-6 border-t border-gray-200">
        <button
          onClick={onDownloadCatalogue}
          className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          <Download className="h-5 w-5" />
          <span>Download Catalogue</span>
        </button>
      </div>
    </div>
  );
};

export default FormTypeSelector;