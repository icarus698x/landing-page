import React from 'react';
import { Check, X, Minus } from 'lucide-react';

const ComparisonRow: React.FC<{ feature: string; us: boolean; others: boolean; isLast?: boolean }> = ({ feature, us, others, isLast }) => (
  <div className={`grid grid-cols-12 gap-4 py-6 ${!isLast ? 'border-b border-slate-100' : ''} items-center hover:bg-slate-50/50 transition-colors`}>
    <div className="col-span-6 md:col-span-5 text-sm md:text-lg font-semibold text-slate-700 pl-4">{feature}</div>
    <div className="col-span-3 md:col-span-3 flex justify-center">
      {others ? 
        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
             <Check className="h-5 w-5 text-slate-500" /> 
        </div>
        : 
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center">
             <Minus className="h-4 w-4 text-slate-300" />
        </div>
      }
    </div>
    <div className="col-span-3 md:col-span-4 flex justify-center relative">
      {us ? 
        <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shadow-lg shadow-brand-500/30 transform hover:scale-110 transition-transform">
            <Check className="h-6 w-6 text-white stroke-[3]" />
        </div> 
        : 
        <X className="h-6 w-6 text-rose-400" />
      }
    </div>
  </div>
);

const Differentiation: React.FC = () => {
  return (
    <section id="differentiation" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-600 font-bold tracking-widest text-xs uppercase mb-2 block">Competitive Landscape</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">Why We Are Different</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Where competitors stop at search, <span className="font-semibold text-brand-600">we deliver discovery</span>.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 border border-slate-100 overflow-hidden relative">
          
          {/* Highlight Column Background */}
          <div className="absolute top-0 right-0 bottom-0 w-1/4 md:w-1/3 bg-brand-50/50 border-l border-brand-100/50 pointer-events-none z-0"></div>

          {/* Header */}
          <div className="grid grid-cols-12 gap-4 bg-white/80 backdrop-blur-sm p-8 border-b border-slate-200 relative z-10">
            <div className="col-span-6 md:col-span-5 font-bold text-slate-400 uppercase tracking-wider text-xs flex items-end pb-1 pl-4">Capability</div>
            <div className="col-span-3 md:col-span-3 text-center">
                <span className="block font-bold text-slate-500 text-sm mb-1">Standard Search</span>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider">Competitors</span>
            </div>
            <div className="col-span-3 md:col-span-4 text-center">
                <span className="block font-extrabold text-brand-600 text-xl mb-1">xOpsentia</span>
                <span className="text-[10px] text-brand-500 uppercase tracking-wider font-bold">Our Platform</span>
            </div>
          </div>
          
          {/* Body */}
          <div className="relative z-10 p-2">
            <ComparisonRow feature="Exact Keyword Match" us={true} others={true} />
            <ComparisonRow feature="Semantic Intent Understanding" us={true} others={false} />
            <ComparisonRow feature="True CAD Geometry Analysis" us={true} others={false} />
            <ComparisonRow feature="Tolerates Noisy/Dirty Data" us={true} others={false} />
            <ComparisonRow feature="Multi-Modal (Image + Text + Code)" us={true} others={false} />
            <ComparisonRow feature="Deep CAD Workflow Integration" us={true} others={false} isLast={true} />
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-20 bg-slate-900 rounded-[2rem] p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-600 opacity-20 rounded-full blur-3xl group-hover:opacity-30 transition-opacity"></div>
            <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-accent-500 opacity-10 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to optimize your BOM?</h3>
                <p className="text-slate-400 text-lg">Reduce duplicates and find parts faster today.</p>
            </div>
            <button className="relative z-10 mt-8 md:mt-0 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm hover:bg-brand-50 hover:scale-105 transition-all shadow-lg hover:shadow-white/20">
                Schedule a Demo
            </button>
        </div>
      </div>
    </section>
  );
};

export default Differentiation;