import React from 'react';
import ContactInfoCard from '../components/ContactInfoCard';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactInfoSection: React.FC = () => {
  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our healthcare specialists for immediate assistance and expert guidance.',
      details: ['+1 (555) 123-4567', 'Monday - Friday: 8 AM - 6 PM']
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Send us your inquiries and we will respond within 24 hours with detailed information.',
      details: ['info@procaregroup.com', 'support@procaregroup.com']
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      description: 'Schedule a visit to our facilities to see our equipment demonstrations and meet our team.',
      details: ['123 Healthcare Boulevard', 'Medical District, City 12345']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Multiple ways to connect with our team for all your healthcare equipment needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <ContactInfoCard key={index} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;