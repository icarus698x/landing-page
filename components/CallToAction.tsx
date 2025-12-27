
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenModal: () => void;
}

const CallToAction: React.FC<CallToActionProps> = ({ onOpenModal }) => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-900">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">
          Ready to modernize your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">maintenance operations?</span>
        </h2>
        
        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Join leading industrial teams who are reducing downtime and improving data accuracy with xOpsentia.
        </p>
        
        <button 
          onClick={onOpenModal}
          className="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 transform hover:-translate-y-0.5"
        >
          Request Demo
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
        
        <p className="mt-6 text-sm text-slate-500">
          No credit card required. Custom pilots available for enterprise teams.
        </p>
      </div>
    </section>
  );
};

export default CallToAction;
