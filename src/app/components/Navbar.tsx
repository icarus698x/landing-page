import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { TalkToUsModal } from "./TalkToUsModal";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const transparent = isHomePage && !scrolled;

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <div
          className="relative flex items-center justify-center h-14 px-6"
          style={{
            boxShadow: "0 1px 0 rgba(15,23,41,0.12), 0 4px 8px rgba(15,23,41,0.07)",
          }}
        >
          {/* Logo — pinned left */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2">
            <Link to="/">
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
            </Link>
          </div>

          {/* Centered brand */}
          <Link to="/" className="flex items-center gap-2">
            <span
              className="font-semibold tracking-widest text-sm transition-colors duration-300 uppercase"
              style={{ color: "#111827" }}
            >
              xOpsentia
            </span>
          </Link>

          {/* Talk to us — pinned right */}
          <div className="absolute right-6 top-1/2 -translate-y-1/2">
            <button
              onClick={() => setModalOpen(true)}
              className="px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:opacity-90"
              style={{
                background: "#0D9488",
                color: "white",
                border: "none",
                borderRadius: 7,
              }}
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      <TalkToUsModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}