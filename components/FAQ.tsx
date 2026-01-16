
import React, { useState } from 'react';
import { FAQS } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, index) => (
        <div key={index} className="border border-slate-200 rounded-xl bg-white overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors"
          >
            <span>{faq.question}</span>
            {openIndex === index ? <ChevronUp className="text-indigo-600" /> : <ChevronDown className="text-slate-400" />}
          </button>
          {openIndex === index && (
            <div className="p-5 pt-0 text-slate-600 border-t border-slate-50 animate-in fade-in slide-in-from-top-2 duration-300">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
