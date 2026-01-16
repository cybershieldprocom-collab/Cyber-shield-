
import React from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const ContactForm: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600">We're here to answer any questions you have about choosing the right laptop.</p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-slate-600">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-indigo-600">
              <Mail />
            </div>
            <div>
              <p className="font-bold text-slate-900">Email</p>
              <p>info@laptophub.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-indigo-600">
              <Phone />
            </div>
            <div>
              <p className="font-bold text-slate-900">Phone</p>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-slate-600">
            <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center text-indigo-600">
              <MapPin />
            </div>
            <div>
              <p className="font-bold text-slate-900">Location</p>
              <p>Tech District, San Francisco</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-slate-900 mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Facebook size={20} /></a>
            <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Instagram size={20} /></a>
            <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Twitter size={20} /></a>
            <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      <form className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Your Name" />
          </div>
          <div className="space-y-1">
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Your Email" />
          </div>
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Subject</label>
          <input type="text" className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="What is your inquiry about?" />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-slate-700">Message</label>
          <textarea rows={4} className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Type your message here..."></textarea>
        </div>
        <button className="w-full py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-100">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
