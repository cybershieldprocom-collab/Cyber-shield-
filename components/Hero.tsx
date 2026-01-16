
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            <span>Best Picks for 2024</span>
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-6 leading-tight">
            Find the Perfect Laptop for Your <span className="text-indigo-600">Career.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Whether you're a student, creator, or ethical hacker, we provide honest reviews and modern comparisons to help you decide.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={onStart}
              className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 group"
            >
              Browse Laptops 
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-white text-slate-700 font-semibold border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-10 pointer-events-none">
        <div className="h-64 w-64 rounded-full bg-indigo-400 blur-3xl"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 opacity-10 pointer-events-none">
        <div className="h-64 w-64 rounded-full bg-blue-400 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
