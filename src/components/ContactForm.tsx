import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  selectedFormType: string;
  onFormSubmit: (formData: any) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedFormType, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    equipmentType: '',
    budget: '',
    timeline: '',
    appointmentDate: '',
    appointmentTime: '',
    issueType: '',
    partnershipType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFormSubmit({ ...formData, formType: selectedFormType });
  };

  const getFormTitle = () => {
    const titles = {
      general: 'General Inquiry Form',
      quote: 'Request Quote Form',
      appointment: 'Book Appointment Form',
      support: 'Technical Support Form',
      partnership: 'Partnership Inquiry Form'
    };
    return titles[selectedFormType as keyof typeof titles] || 'Contact Form';
  };

  const renderFormFields = () => {
    const commonFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              placeholder="Enter your email address"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              placeholder="Enter your phone number"
            />
          </div>
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              placeholder="Enter your company name"
            />
          </div>
        </div>
      </>
    );

    switch (selectedFormType) {
      case 'quote':
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="equipmentType" className="block text-sm font-medium text-gray-700 mb-2">
                  Equipment Type *
                </label>
                <select
                  id="equipmentType"
                  name="equipmentType"
                  value={formData.equipmentType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Select equipment type</option>
                  <option value="diagnostic">Diagnostic Equipment</option>
                  <option value="monitoring">Patient Monitoring</option>
                  <option value="surgical">Surgical Instruments</option>
                  <option value="consumables">Medical Consumables</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Select budget range</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="over-100k">Over $100,000</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Equipment Requirements *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Please describe your equipment requirements and specifications..."
              />
            </div>
          </>
        );

      case 'appointment':
        return (
          <>
            {commonFields}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time *
                </label>
                <select
                  id="appointmentTime"
                  name="appointmentTime"
                  value={formData.appointmentTime}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                >
                  <option value="">Select time</option>
                  <option value="9:00">9:00 AM</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                  <option value="16:00">4:00 PM</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Purpose of Appointment *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Please describe the purpose of your appointment..."
              />
            </div>
          </>
        );

      case 'support':
        return (
          <>
            {commonFields}
            <div>
              <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-2">
                Issue Type *
              </label>
              <select
                id="issueType"
                name="issueType"
                value={formData.issueType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              >
                <option value="">Select issue type</option>
                <option value="equipment-malfunction">Equipment Malfunction</option>
                <option value="maintenance">Maintenance Request</option>
                <option value="training">Training Support</option>
                <option value="warranty">Warranty Claim</option>
                <option value="other">Other Technical Issue</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Issue Description *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Please describe the technical issue in detail..."
              />
            </div>
          </>
        );

      case 'partnership':
        return (
          <>
            {commonFields}
            <div>
              <label htmlFor="partnershipType" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Type *
              </label>
              <select
                id="partnershipType"
                name="partnershipType"
                value={formData.partnershipType}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
              >
                <option value="">Select partnership type</option>
                <option value="distributor">Distributor Partnership</option>
                <option value="supplier">Supplier Partnership</option>
                <option value="technology">Technology Partnership</option>
                <option value="strategic">Strategic Alliance</option>
                <option value="other">Other Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Partnership Proposal *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Please describe your partnership proposal and how we can work together..."
              />
            </div>
          </>
        );

      default: // general inquiry
        return (
          <>
            {commonFields}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                placeholder="Enter message subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors resize-none"
                placeholder="Enter your message here..."
              />
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">
        {getFormTitle()}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {renderFormFields()}

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-secondary text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          <Send className="h-5 w-5" />
          <span>Send Message</span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;