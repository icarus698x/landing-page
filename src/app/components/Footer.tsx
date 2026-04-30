import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="border-t pt-14 pb-10 bg-white" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <div className="w-full px-6 mx-0">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-3 shrink-0 max-w-xs">
            <Link to="/" className="flex items-center gap-2">
              <svg width="28" height="28" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 7 }}>
                <defs>
                  <linearGradient id="bgGradF" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#04c4b4"/>
                    <stop offset="50%" stopColor="#0D9488"/>
                    <stop offset="100%" stopColor="#045f5f"/>
                  </linearGradient>
                  <linearGradient id="lineGradF" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="white" stopOpacity="0"/>
                    <stop offset="30%" stopColor="white" stopOpacity="0.7"/>
                    <stop offset="70%" stopColor="white" stopOpacity="0.7"/>
                    <stop offset="100%" stopColor="white" stopOpacity="0"/>
                  </linearGradient>
                </defs>
                <rect width="500" height="500" fill="url(#bgGradF)"/>
                <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(45)"/>
                <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(-45)"/>
                <rect x="246" y="165" width="1.5" height="170" rx="0.75" fill="url(#lineGradF)"/>
                <circle cx="315" cy="250" r="52" fill="none" stroke="white" strokeWidth="16"/>
              </svg>
              <span className="text-gray-900 font-semibold text-sm tracking-tight">xOpsentia</span>
            </Link>
            <p className="text-xs text-gray-400" style={{ lineHeight: 1.7 }}>Institutional Intelligence for Field operations.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12">
            {/* Company */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Company</p>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/about" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal / Privacy */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider">Privacy</p>
              <ul className="space-y-2.5">
                <li>
                  <Link to="/data-privacy" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">
                    Data Privacy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div style={{ height: "1px", background: "rgba(0,0,0,0.07)" }} />

        {/* Bottom bar */}
        <div className="w-full mt-8 flex flex-row items-center justify-between">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} xOpsentia. All rights reserved.
          </p>

          <a
            href="https://www.linkedin.com/company/xopsentia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0D9488] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}