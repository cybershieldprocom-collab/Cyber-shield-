
import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div id="newsletter" className="bg-white border border-indigo-100 rounded-3xl p-8 md:p-12 shadow-sm relative overflow-hidden scroll-mt-24">
      <div className="absolute -top-12 -right-12 w-48 h-48 bg-indigo-50 rounded-full opacity-50"></div>
      
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Don't Miss Latest Updates</h2>
          <p className="text-slate-600">Subscribe to our newsletter for new laptop reviews and exclusive tech deals.</p>
        </div>

        <div>
          {subscribed ? (
            <div className="flex items-center gap-3 text-emerald-600 font-bold bg-emerald-50 p-4 rounded-xl border border-emerald-100 animate-in zoom-in duration-300">
              <CheckCircle />
              <span>Thank you! You've been added to the list.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
