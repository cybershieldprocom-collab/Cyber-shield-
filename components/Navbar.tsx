
import React from 'react';
import { Menu, X, Bell } from 'lucide-react';

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, activePage }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Compare', id: 'compare' },
    { name: 'About', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleSubscribeClick = () => {
    if (activePage !== 'home' && activePage !== 'contact') {
      onNavigate('home');
    }
    setTimeout(() => {
      const element = document.getElementById('newsletter');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center cursor-pointer group" onClick={() => onNavigate('home')}>
            <div className="h-10 w-10 rounded-lg overflow-hidden shadow-sm group-hover:shadow-md transition-shadow border border-slate-100 bg-slate-50 flex items-center justify-center">
               {/* Using a placeholder that represents the user's tech-focused logo */}
               <img 
                src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80&w=100" 
                alt="Cyber-Shield Logo"
                className="w-full h-full object-cover"
               />
            </div>
            <span className="ml-3 text-xl font-bold text-slate-900 tracking-tight">Cyber-Shield</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-8 mr-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-sm font-medium transition-colors ${
                    activePage === link.id ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1' : 'text-slate-600 hover:text-indigo-600'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button 
              onClick={handleSubscribeClick}
              className="flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white text-sm font-bold rounded-full hover:bg-indigo-700 transition-all shadow-md shadow-indigo-100 hover:scale-105 active:scale-95"
            >
              <Bell size={16} />
              Subscribe
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={handleSubscribeClick}
              className="p-2 bg-indigo-50 text-indigo-600 rounded-full"
            >
              <Bell size={20} />
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 space-y-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                onNavigate(link.id);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md ${
                activePage === link.id ? 'bg-indigo-50 text-indigo-600' : 'text-slate-700 hover:bg-gray-50'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={handleSubscribeClick}
            className="block w-full text-center px-3 py-3 mt-4 text-base font-bold text-white bg-indigo-600 rounded-xl"
          >
            Join Newsletter
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
