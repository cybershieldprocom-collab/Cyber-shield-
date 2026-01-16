
import React from 'react';
import { Github, Twitter, Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center text-white mb-6">
              <div className="h-10 w-10 rounded-lg overflow-hidden border border-slate-700">
                <img 
                  src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=100" 
                  alt="Cyber-Shield Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="ml-3 text-xl font-bold tracking-tight">Cyber-Shield</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Helping you find the perfect, secure laptop through expert insights and AI-driven recommendations.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Pages</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-indigo-400 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-indigo-400 transition-colors">Reviews</button></li>
              <li><button onClick={() => onNavigate('compare')} className="hover:text-indigo-400 transition-colors">Compare</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-indigo-400 transition-colors">About Us</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Categories</h4>
            <ul className="space-y-4 text-sm">
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-indigo-400 transition-colors">Students</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-indigo-400 transition-colors">Creators</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-indigo-400 transition-colors">Ethical Hackers</button></li>
              <li><button onClick={() => onNavigate('reviews')} className="hover:text-indigo-400 transition-colors">Gaming</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-indigo-600 transition-colors"><Github size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} Cyber-Shield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
