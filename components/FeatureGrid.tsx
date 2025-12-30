
import React from 'react';
import { 
  ScanEye, 
  QrCode, 
  Type, 
  Filter, 
  Languages, 
  Sparkles, 
  MessageSquare, 
  Brain, 
  Layers, 
  ShieldCheck, 
  Box, 
  Check, 
  X, 
  HelpCircle,
  ArrowRight
} from 'lucide-react';

interface FeatureRow {
  icon: React.ElementType;
  label: string;
  ourSolution: string;
  legacy: string;
  legacyType: 'danger' | 'warning'; // danger = Red X, warning = Orange ?
  isUpcoming?: boolean;
}

interface FeatureGridProps {
  onOpenModal: () => void;
}

const features: FeatureRow[] = [
  {
    icon: ScanEye,
    label: "Visual Part Search",
    ourSolution: "AI-based visual search",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: QrCode,
    label: "Code Scanner",
    ourSolution: "QR, barcode, data matrix",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: Type,
    label: "Text Recognition",
    ourSolution: "YES",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: Filter,
    label: "Filters",
    ourSolution: "Category, attributes, bill of materials",
    legacy: "Some",
    legacyType: "warning"
  },
  {
    icon: Languages,
    label: "Multi Language",
    ourSolution: "Yes, even if language is not present in master data",
    legacy: "Only if language is present in master data",
    legacyType: "warning"
  },
  {
    icon: Sparkles,
    label: "Fuzzy Logic",
    ourSolution: "Handles variations, abbreviations and typos",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: MessageSquare,
    label: "Natural Language Processing",
    ourSolution: "Uses descriptions and context",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: Brain,
    label: "Semantic Capabilities",
    ourSolution: "Understands the meaning and relationships between words, considers users intent",
    legacy: "NONE",
    legacyType: "danger"
  },
  {
    icon: Layers,
    label: "Multi-Modality",
    ourSolution: "Uses image, text, categories, filters and codes",
    legacy: "Exact text search only",
    legacyType: "warning"
  },
  {
    icon: ShieldCheck,
    label: "Role-based Access",
    ourSolution: "Granular permission controls",
    legacy: "Basic or None",
    legacyType: "warning"
  },
  {
    icon: Box,
    label: "3D CAD-Based Search",
    ourSolution: "Search by 3D similarity",
    legacy: "NONE",
    legacyType: "danger",
    isUpcoming: true
  }
];

const FeatureGrid: React.FC<FeatureGridProps> = ({ onOpenModal }) => {
  return (
    <section id="features" className="py-24 bg-white relative scroll-mt-28">
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2563eb 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-50 border border-brand-100 text-brand-600 text-xs font-bold uppercase tracking-widest shadow-sm mb-6">
            Direct Comparison
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Why We Lead the Industry
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
             See exactly how our intelligent platform outperforms legacy search methods.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden mb-16">
          
          {/* Table Header - Hidden on small screens, shown on md+ */}
          <div className="hidden md:grid grid-cols-12 bg-slate-50 border-b border-slate-200 text-sm font-bold text-slate-500 uppercase tracking-wider">
            <div className="col-span-4 py-6 px-8">Feature</div>
            <div className="col-span-4 py-6 px-8 text-brand-700">Our Solution</div>
            <div className="col-span-4 py-6 px-8">Legacy Approaches</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-slate-100">
            {features.map((item, index) => (
              <div 
                key={index} 
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-slate-50/50 transition-colors duration-200 group"
              >
                
                {/* Feature Name Column */}
                <div className="md:col-span-4 p-6 md:px-8 flex items-center md:border-r border-slate-50 md:border-transparent">
                  <div className="mr-4 p-2 bg-slate-100 rounded-lg text-slate-600 group-hover:bg-brand-50 group-hover:text-brand-600 transition-colors">
                    <item.icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <span className="font-bold text-slate-900 text-lg md:text-base">{item.label}</span>
                  {item.isUpcoming && (
                     <span className="ml-3 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800">
                       Upcoming
                     </span>
                  )}
                </div>

                {/* Our Solution Column */}
                <div className="md:col-span-4 p-6 md:px-8 bg-brand-50/10 flex items-start space-x-4 border-l-4 border-brand-500 md:border-l-0 md:border-r md:border-slate-100 relative">
                   {/* Mobile Label */}
                   <span className="md:hidden absolute top-6 right-6 text-xs font-bold text-brand-600 uppercase tracking-wider opacity-50">Our Solution</span>
                   
                   <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 rounded bg-emerald-500 flex items-center justify-center shadow-sm">
                        <Check className="w-4 h-4 text-white stroke-[3]" />
                      </div>
                   </div>
                   <span className="text-slate-800 font-medium leading-snug pt-0.5">
                     {item.ourSolution}
                   </span>
                </div>

                {/* Legacy Column */}
                <div className="md:col-span-4 p-6 md:px-8 flex items-start space-x-4 border-l-4 border-slate-200 md:border-l-0">
                    {/* Mobile Label */}
                   <span className="md:hidden absolute top-6 right-6 text-xs font-bold text-slate-400 uppercase tracking-wider opacity-50">Legacy</span>

                   <div className="flex-shrink-0 mt-0.5">
                      {item.legacyType === 'danger' ? (
                        <div className="w-6 h-6 rounded bg-rose-600 flex items-center justify-center shadow-sm">
                           <X className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded bg-amber-500 flex items-center justify-center shadow-sm">
                           <HelpCircle className="w-4 h-4 text-white stroke-[3]" />
                        </div>
                      )}
                   </div>
                   <span className="text-slate-500 leading-snug pt-0.5">
                     {item.legacy}
                   </span>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
            <button 
              onClick={onOpenModal}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5"
            >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default FeatureGrid;
