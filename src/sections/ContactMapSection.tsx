import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

const ContactMapSection: React.FC = () => {
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus";

  const locationInfo = {
    address: '123 Healthcare Boulevard',
    city: 'Medical District, City 12345',
    phone: '+1 (555) 123-4567',
    email: 'info@procaregroup.com',
    hours: 'Monday - Friday: 8:00 AM - 6:00 PM'
  };

  const handleGetDirections = () => {
    const address = encodeURIComponent(`${locationInfo.address}, ${locationInfo.city}`);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Visit Our Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find us at our headquarters or schedule a visit to see our equipment demonstrations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Map */}
          <div className="lg:col-span-2">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProCareGroup Location"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
                <h3 className="text-xl font-bold text-gray-900">Our Address</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>{locationInfo.address}</p>
                <p>{locationInfo.city}</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
              <div className="space-y-2 text-gray-600">
                <p><span className="font-medium">Phone:</span> {locationInfo.phone}</p>
                <p><span className="font-medium">Email:</span> {locationInfo.email}</p>
                <p><span className="font-medium">Hours:</span> {locationInfo.hours}</p>
              </div>
            </div>

            <button
              onClick={handleGetDirections}
              className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <Navigation className="h-5 w-5" />
              <span>Get Directions</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMapSection;