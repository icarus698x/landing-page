import { useState } from "react";
import { TalkToUsModal } from "./TalkToUsModal";

export function ClosingCTA() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative py-28 md:py-36 bg-white"
        style={{ background: "#f8f9fa" }}
      >
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-7">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <svg width="28" height="28" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 7 }}>
                <defs>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#04c4b4"/>
                    <stop offset="50%" stopColor="#0D9488"/>
                    <stop offset="100%" stopColor="#045f5f"/>
                  </linearGradient>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0"/>
                    <stop offset="30%" stopColor="white" stopOpacity="0.7"/>
                    <stop offset="70%" stopColor="white" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="500" height="500" fill="url(#bgGrad)"/>
                <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(45)"/>
                <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(-45)"/>
                <rect x="246" y="165" width="1.5" height="170" rx="0.75" fill="url(#lineGrad)"/>
                <circle cx="315" cy="250" r="52" fill="none" stroke="white" strokeWidth="16"/>
              </svg>
          </div>

          <h2
            className="text-4xl md:text-5xl text-gray-900 tracking-tight"
            style={{ fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            xOpsentia
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="px-8 py-3.5 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
              style={{
                background: "#0D9488",
                boxShadow: "0 6px 28px rgba(13,148,136,0.32)",
                borderRadius: 7,
              }}
            >
              Talk to us
            </button>
          </div>

          <p className="text-xs text-gray-400 pt-2">
            Built for regulated environment. No manuals sharing required.
          </p>
        </div>
      </section>

      <TalkToUsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
