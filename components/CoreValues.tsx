import React from 'react';
import { Camera, Brain, MessageSquareQuote } from 'lucide-react';

interface ValueCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon: Icon, title, description, delay }) => (
  <div className={`bg-white p-10 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center h-full group ${delay}`}>
    <div className="w-20 h-20 bg-brand-50 rounded-2xl flex items-center justify-center text-brand-600 mb-8 shadow-inner ring-1 ring-brand-100 group-hover:scale-110 group-hover:bg-brand-600 group-hover:text-white transition-all duration-300">
      <Icon strokeWidth={1.5} className="w-10 h-10" />
    </div>
    <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-base">{description}</p>
  </div>
);

const CoreValues: React.FC = () => {
  return (
    <section className="py-32 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 sm:text-5xl mb-6">Built for the <br/><span className="text-brand-600">Frontline Force</span></h2>
          <p className="text-xl text-slate-600">
            Our multi-modal engine understands the complexity of maintenance operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          <ValueCard 
            icon={Camera}
            title="Visual Recognition"
            description="Identify parts instantly from photos, even when dirty, worn, or in low light."
            delay=""
          />
          <ValueCard 
            icon={Brain}
            title="Semantic Understanding"
            description="Understands technical intent, not just keywords."
            delay="md:mt-8" 
          />
          <ValueCard 
            icon={MessageSquareQuote}
            title="Multi-modality"
            description="Seamlessly switch between text, speech, and images for a faster workflow."
            delay="md:mt-16" 
          />
        </div>
      </div>
    </section>
  );
};

export default CoreValues;