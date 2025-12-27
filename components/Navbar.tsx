
import React, { useState, useEffect } from 'react';
import { Layers } from 'lucide-react';

interface NavbarProps {
  onOpenModal: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-3 border-b border-slate-100' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-gradient-to-br from-brand-600 to-brand-700 p-1.5 rounded-lg shadow-lg shadow-brand-500/20 group-hover:scale-105 transition-transform">
            <Layers className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
            xOpsentia
          </span>
        </div>
        <div className="flex space-x-8 items-center">
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="hidden sm:block text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors"
          >
            Features
          </a>
          <button 
            onClick={onOpenModal}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-brand-600 transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-brand-500/40"
          >
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
