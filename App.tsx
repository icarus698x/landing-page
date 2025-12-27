
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoreValues from './components/CoreValues';
import ProcessSteps from './components/ProcessSteps';
import FeatureGrid from './components/FeatureGrid';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollReveal from './components/ScrollReveal';
import RequestDemoModal from './components/RequestDemoModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Path to the asset. 
  // Switched to external dummy image for reliability.
  const heroImage = 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=2070';
 
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden bg-slate-50">
      <Navbar onOpenModal={openModal} />
      <main className="flex-grow">
        <Hero onOpenModal={openModal} imageSrc={heroImage} />
        
        <ScrollReveal>
          <CoreValues />
        </ScrollReveal>
        
        <ProcessSteps />

        <ScrollReveal>
          <FeatureGrid onOpenModal={openModal} />
        </ScrollReveal>

        <ScrollReveal>
          <FAQ />
        </ScrollReveal>
      </main>
      <Footer />
      <RequestDemoModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
