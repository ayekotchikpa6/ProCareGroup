import React, { useState } from 'react';

interface NewsletterProps {
  onSubscribe: (email: string) => void;
}

const Newsletter: React.FC<NewsletterProps> = ({ onSubscribe }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      await onSubscribe(email);
      setMessage('Thank you for subscribing to our newsletter!');
      setEmail('');
    } catch (error) {
      setMessage('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }

    // Clear message after 5 seconds
    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <section className="bg-[#000080] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-16 md:items-center">
          {/* Left Column - Text & Form */}
          <div className="text-left">
            <h2 className="text-4xl font-bold text-white mb-4">
              Subscribe To Our Newsletter
            </h2>
            
            <p className="text-lg text-white mb-8">
              Medical Equipment Consumables at The highest Quality Medical
            </p>

            <form onSubmit={handleSubmit} className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3 bg-[#0000FF] text-white font-medium rounded-md transition-colors ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            
            {message && (
              <div className={`mt-4 p-3 rounded-md text-sm ${
                message.includes('Thank you')
                  ? 'bg-green-100 text-green-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {message}
              </div>
            )}
          </div>

          {/* Right Column - Graphic */}
          <div className="flex justify-center">
            <img
              src="/src/assets/newsletter-airplane-desktop-version.svg"
              alt="Newsletter subscription"
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Subscribe To Our Newsletter
          </h2>
          
          <p className="text-lg text-white mb-8">
            Medical Equipment Consumables at The highest Quality Medical
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email Address"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-colors text-gray-900"
              required
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-3 bg-[#0000FF] text-white font-medium rounded-md transition-colors ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
              }`}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {message && (
            <div className={`mt-4 p-3 rounded-md text-sm ${
              message.includes('Thank you')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;