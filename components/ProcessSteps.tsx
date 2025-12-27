
import React from 'react';
import { Camera, MessageSquare, Zap, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const StepCard = ({ number, icon, title, description, isLast }: any) => (
  <div className="relative flex flex-col items-center text-center flex-1 min-w-[200px] group">
    {!isLast && (
      <div className="hidden lg:block absolute top-10 left-1/2 w-full h-0.5 bg-slate-700 -z-10">
        <div className="h-full bg-gradient-to-r from-brand-500 to-accent-500 w-0 group-hover:w-full transition-all duration-1000 origin-left"></div>
      </div>
    )}

    <div className="w-20 h-20 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:shadow-accent-500/30 group-hover:border-accent-500/50 group-hover:-translate-y-2 transition-all duration-300 relative z-10">
        <div className="text-slate-400 group-hover:text-accent-400 transition-colors">
            {React.cloneElement(icon, { size: 32, strokeWidth: 1.5 })}
        </div>
        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-white group-hover:border-accent-500 group-hover:bg-accent-600 transition-all">
            {number}
        </div>
    </div>

    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed max-w-[280px]">
        {description}
    </p>
    
    {!isLast && (
        <ArrowRight className="lg:hidden w-6 h-6 text-slate-700 my-4 transform rotate-90" />
    )}
  </div>
);

const ProcessSteps: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-brand-900/40 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[0%] right-[0%] w-[50%] h-[50%] bg-accent-900/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal>
            <div className="text-center mb-16">
            <span className="text-accent-400 font-bold tracking-widest text-xs uppercase mb-3 block">Three steps to success</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                How it works
            </h2>
            </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-12">
            <StepCard 
                number="01"
                icon={<Camera />}
                title="Take a photo or scan"
                description="Use your mobile device to snap a photo of the component or scan its barcode instantly."
            />
            <StepCard 
                number="02"
                icon={<MessageSquare />}
                title="Type or speak question"
                description="Ask the AI naturally: 'What is this part?' or 'How do I replace this valve safely?'"
            />
            <StepCard 
                number="03"
                icon={<Zap />}
                title="Get actionable steps"
                description="Receive guided repair instructions, safety warnings, and manual references in seconds."
                isLast={true}
            />
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
