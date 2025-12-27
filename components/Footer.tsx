import React from 'react';
import { Layers } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-brand-600 p-1.5 rounded-lg">
                <Layers className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                xOpsentia
              </span>
            </div>
            <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            The AI co-pilot that turns any technician into a senior expert. Snap a photo or scan a barcode to instantly retrieve parts, manuals, and repair procedures.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Product</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-400 transition-colors">Visual Search</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">CAD Integration</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-6 text-lg">Company</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-brand-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-brand-400 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} xOpsentia. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;