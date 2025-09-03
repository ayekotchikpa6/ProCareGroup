import React, { useState } from 'react';
import { Mail } from 'lucide-react';

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
    <section className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-secondary rounded-full">
            <Mail className="h-8 w-8 text-primary" />
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Subscribe to our Newsletter
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Stay updated with our latest news, updates, and exclusive offers. 
          Get valuable insights delivered directly to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-8 py-3 bg-secondary text-primary font-medium rounded-md transition-colors ${
                isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-blue-700 focus:ring-2 focus:ring-secondary focus:ring-offset-2'
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

        <p className="text-sm text-gray-500 mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;