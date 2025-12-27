import React from 'react';
import { Settings, Copy, Clock, Network, TrendingUp } from 'lucide-react';

const UseCaseItem: React.FC<{ icon: React.ReactNode; text: string }> = ({ icon, text }) => (
  <div className="flex items-center space-x-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-lg hover:shadow-brand-500/5 hover:bg-white transition-all duration-300 group">
    <div className="p-3 bg-white rounded-xl shadow-sm text-brand-600 ring-1 ring-slate-100 group-hover:bg-brand-600 group-hover:text-white transition-colors">
      {icon}
    </div>
    <span className="font-semibold text-slate-800 group-hover:text-slate-900">{text}</span>
  </div>
);

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12 text-center">Ideal Use Cases</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <UseCaseItem icon={<Settings className="h-6 w-6"/>} text="Engineering Part Reuse & Standardization" />
          <UseCaseItem icon={<Copy className="h-6 w-6"/>} text="BOM Optimization & Duplication Reduction" />
          <UseCaseItem icon={<Clock className="h-6 w-6"/>} text="Faster CAD Design Cycles" />
          <UseCaseItem icon={<Network className="h-6 w-6"/>} text="Supplier & Alternative Discovery" />
          <UseCaseItem icon={<TrendingUp className="h-6 w-6"/>} text="Manufacturing & Procurement Efficiency" />
          <UseCaseItem icon={<Settings className="h-6 w-6"/>} text="Legacy Data Migration & Cleaning" />
        </div>
      </div>
    </section>
  );
};

export default UseCases;