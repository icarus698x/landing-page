
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import ProcessSteps from './components/ProcessSteps';
import FeatureGrid from './components/FeatureGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import DemoView from './components/demo/DemoView';
import AnalyticsPreview from './components/AnalyticsPreview';
import CallToAction from './components/CallToAction';

const LandingView: React.FC<{ onOpenDemo: () => void }> = ({ onOpenDemo }) => {
  const heroImage = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070';
  
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-50">
      <Navbar onOpenModal={onOpenDemo} />
      <main className="flex-grow">
        <Hero onOpenModal={onOpenDemo} imageSrc={heroImage} />
        
        <ScrollReveal>
          <CoreValues />
        </ScrollReveal>
        
        <ProcessSteps />

        <ScrollReveal>
          <FeatureGrid onOpenModal={onOpenDemo} />
        </ScrollReveal>

        <ScrollReveal>
          <AnalyticsPreview />
        </ScrollReveal>

        <ScrollReveal>
          <CallToAction onOpenModal={onOpenDemo} />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'demo'>('landing');

  const openDemo = () => setView('demo');
  const closeDemo = () => setView('landing');

  if (view === 'demo') {
    return <DemoView onClose={closeDemo} />;
  }

  return <LandingView onOpenDemo={openDemo} />;
};

export default App;
