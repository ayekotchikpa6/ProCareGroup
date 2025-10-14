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
    <section style={{ backgroundColor: '#000080' }} className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Text & Form */}
          <div className="flex-1 text-center lg:text-left mb-8 lg:mb-0 lg:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Subscribe To Our Newsletter
            </h2>
            
            <p className="text-lg text-white mb-8 max-w-lg">
              Medical Equipment Consumables at The highest Quality Medical
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto lg:mx-0">
              {/* Desktop: Horizontal Layout */}
              <div className="hidden md:flex gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="flex-1 px-4 py-3 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#0000FF' }}
                  className={`px-8 py-3 text-white font-medium rounded-md transition-colors ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>

              {/* Mobile: Vertical Layout */}
              <div className="md:hidden space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Address"
                  className="w-full px-4 py-3 bg-white text-gray-900 rounded-md focus:ring-2 focus:ring-blue-300 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{ backgroundColor: '#0000FF' }}
                  className={`w-full px-8 py-3 text-white font-medium rounded-md transition-colors ${
                    isSubmitting
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </div>
              
              {message && (
                <div className={`mt-4 p-3 rounded-md text-sm ${
                  message.includes('Thank you')
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {message}
                </div>
              )}
            </form>
          </div>

          {/* Right Side - Graphic (Desktop Only) */}
          <div className="hidden lg:block flex-shrink-0">
            <img
              src="/src/assets/newsletter-airplane-desktop-version.svg"
              alt="Newsletter graphic"
              className="w-64 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;