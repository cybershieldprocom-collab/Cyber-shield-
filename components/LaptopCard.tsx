
import React from 'react';
import { Laptop as LaptopType } from '../types';
import { Cpu, MemoryStick as Memory, HardDrive, Monitor, CheckCircle2, ExternalLink } from 'lucide-react';

interface LaptopCardProps {
  laptop: LaptopType;
}

const LaptopCard: React.FC<LaptopCardProps> = ({ laptop }) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={laptop.image} 
          alt={laptop.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          {laptop.category.slice(0, 2).map(cat => (
            <span key={cat} className="bg-white/90 backdrop-blur-sm text-xs font-bold text-indigo-700 px-2 py-1 rounded border border-indigo-100">
              {cat}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900">{laptop.name}</h3>
            <p className="text-sm text-slate-500">{laptop.brand}</p>
          </div>
          <div className="text-right">
            <span className="text-2xl font-bold text-indigo-600">${laptop.price}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-slate-600">
            <Cpu className="h-4 w-4 text-indigo-500" />
            <span className="text-xs truncate">{laptop.specs.cpu}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Memory className="h-4 w-4 text-indigo-500" />
            <span className="text-xs">{laptop.specs.ram}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <HardDrive className="h-4 w-4 text-indigo-500" />
            <span className="text-xs truncate">{laptop.specs.storage}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <Monitor className="h-4 w-4 text-indigo-500" />
            <span className="text-xs truncate">{laptop.specs.display}</span>
          </div>
        </div>

        <div className="mb-6">
          <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Key Pros</h4>
          <ul className="space-y-2">
            {laptop.pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{pro}</span>
              </li>
            ))}
          </ul>
        </div>

        <a 
          href={laptop.link}
          className="flex items-center justify-center gap-2 w-full py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all"
        >
          View More Details
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default LaptopCard;
