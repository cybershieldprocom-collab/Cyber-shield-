
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaptopCard from './components/LaptopCard';
import ComparisonTable from './components/ComparisonTable';
import AISuggestion from './components/AISuggestion';
import ContactForm from './components/ContactForm';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { LAPTOPS } from './constants';
import { Category } from './types';
import { Search, X } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const featuredLaptops = useMemo(() => LAPTOPS.filter(l => l.featured), []);

  const filteredLaptops = useMemo(() => {
    return LAPTOPS.filter(laptop => {
      const matchesCategory = selectedCategory === 'All' || laptop.category.includes(selectedCategory as Category);
      const matchesSearch = laptop.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          laptop.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className="space-y-24 pb-20 animate-in fade-in duration-700">
            <Hero onStart={() => setCurrentPage('reviews')} />
            
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-xl">
                  <h2 className="text-3xl font-bold text-slate-900">Trending Laptops</h2>
                  <p className="text-slate-600 mt-2 text-lg">Top picks tested and recommended by our experts this month.</p>
                </div>
                <button 
                  onClick={() => setCurrentPage('reviews')}
                  className="text-indigo-600 font-bold hover:text-indigo-700 flex items-center gap-1 group"
                >
                  View All <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredLaptops.map(laptop => (
                  <LaptopCard key={laptop.id} laptop={laptop} />
                ))}
              </div>
            </section>

            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <AISuggestion />
            </section>

            <section className="bg-white py-24 border-y border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl font-bold text-slate-900">Choose by Your Needs</h2>
                  <p className="text-slate-600 mt-2">We've categorized devices to perfectly match your specific workflow.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { 
                      title: 'Students', 
                      cat: Category.STUDENT, 
                      desc: 'Affordable laptops with long battery life and lightweight builds for the classroom.',
                      color: 'bg-blue-50 border-blue-100 text-blue-600'
                    },
                    { 
                      title: 'Creators', 
                      cat: Category.CREATOR, 
                      desc: 'High-performance machines for video editing, 3D modeling, and professional design.',
                      color: 'bg-purple-50 border-purple-100 text-purple-600'
                    },
                    { 
                      title: 'Ethical Hackers', 
                      cat: Category.HACKER, 
                      desc: 'Robust devices with native Linux support and power for virtualization.',
                      color: 'bg-emerald-50 border-emerald-100 text-emerald-600'
                    }
                  ].map((item) => (
                    <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.color}`}>
                        <span className="font-bold">💻</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">{item.desc}</p>
                      <button 
                        onClick={() => { setSelectedCategory(item.cat); setCurrentPage('reviews'); }} 
                        className="text-indigo-600 font-bold flex items-center gap-2 group"
                      >
                        Explore Category 
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <Newsletter />
            </section>
          </div>
        );
      case 'reviews':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-bold text-slate-900">Expert Laptop Reviews</h1>
              <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
                Browse our comprehensive list of laptops, carefully tested for quality, value, and performance.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white p-4 md:p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-20 z-40 backdrop-blur-md bg-white/90">
              <div className="flex flex-wrap justify-center gap-2">
                {['All', ...Object.values(Category)].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat as any)}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                      selectedCategory === cat 
                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-100' 
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search name or brand..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none text-sm bg-slate-50/50"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {filteredLaptops.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredLaptops.map(laptop => (
                  <LaptopCard key={laptop.id} laptop={laptop} />
                ))}
              </div>
            ) : (
              <div className="text-center py-32 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
                <div className="text-6xl mb-4">🔍</div>
                <p className="text-slate-500 text-xl font-medium">Sorry, we couldn't find any laptops matching your criteria.</p>
                <button 
                  onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                  className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        );
      case 'compare':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 animate-in fade-in duration-500">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-slate-900">Compare Laptops</h1>
              <p className="text-slate-600 mt-4 text-lg">
                View side-by-side technical specifications to make the best decision for your budget.
              </p>
            </div>
            <ComparisonTable laptops={LAPTOPS.slice(0, 4)} />
          </div>
        );
      case 'about':
        return (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 animate-in fade-in duration-500">
            <div className="text-center space-y-6">
              <h1 className="text-5xl font-extrabold text-slate-900 tracking-tight">Our Mission</h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                We are a team of tech experts dedicated to bringing transparency and deep insights to the laptop market through Cyber-Shield.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" alt="Team" />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Why Cyber-Shield?</h2>
                <p className="text-slate-600 leading-relaxed">
                  Choosing a laptop can be overwhelming with hundreds of specs to consider. Our goal at Cyber-Shield is to filter out the noise and present you with the best options for your specific career path—be it coding, design, or cybersecurity.
                </p>
                <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100">
                  <h4 className="font-bold text-indigo-900 mb-2">100% Independent</h4>
                  <p className="text-sm text-indigo-700">We are not sponsored by any specific brand. Every review is based on real-world testing and benchmarks.</p>
                </div>
              </div>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-32 animate-in fade-in duration-500">
            <ContactForm />
            <section id="faq">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
                <p className="text-slate-600 mt-3 text-lg">Everything you need to know about our recommendations.</p>
              </div>
              <FAQ />
            </section>
            <Newsletter />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar onNavigate={setCurrentPage} activePage={currentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
};

export default App;
