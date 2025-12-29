
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ 
  onOpenModal,
  imageSrc
}) => {
  return (
    <div className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-50">
      {/* Dynamic Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-gradient-to-br from-brand-200/40 to-secondary-400/20 rounded-full blur-[100px] animate-pulse-slow"></div>
        <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-accent-200/40 to-brand-400/20 rounded-full blur-[80px] animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Animated Badge */}
        <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wide mb-8 shadow-sm hover:shadow-md transition-shadow cursor-default ring-1 ring-brand-50">
            <Sparkles className="w-3 h-3 mr-2 text-secondary-500" />
            Empowering field maintenance
            </div>
        </div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] opacity-0 animate-fade-in-up-delay max-w-5xl mx-auto">
          Reduce <span className="gradient-text">troubleshooting time</span> with photo-based answers. 
        </h1>
        
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-12 leading-relaxed opacity-0 animate-fade-in-up-delay-2">
          Stop wasting hours identifying broken parts and searching through PDF manuals. Just snap a photo or scan a barcode to instantly identify components and get guided repair steps from your own documentation.
        </p>

        <div className="opacity-0 animate-fade-in-up delay-[400ms] fill-mode-forwards flex flex-col sm:flex-row justify-center gap-4 mb-20">
            <button 
              onClick={onOpenModal}
              className="px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center justify-center hover:-translate-y-0.5"
            >
                Try Live Demo
                <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
        </div>

        {/* Product Image Display */}
        <div className="opacity-0 animate-fade-in-up delay-[600ms] fill-mode-forwards">
            <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-2 transform rotate-1 transition-transform hover:rotate-0 overflow-hidden">
                <div className="aspect-video bg-slate-100 rounded-xl flex items-center justify-center group relative overflow-hidden">
                    <img 
                        src={imageSrc} 
                        alt="Technician using tablet for part identification" 
                        className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 text-left text-white">
                        <div className="flex items-center space-x-2 mb-2">
                            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                            <span className="text-sm font-bold uppercase tracking-widest">Live Analysis</span>
                        </div>
                        <p className="text-2xl font-bold">Instantly identify over 500,000 components</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
