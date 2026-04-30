import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center pt-20 pb-32">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-8"
        style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.18)" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0D9488" }}>
        Page not found
      </p>
      <h1
        className="text-4xl text-gray-900 tracking-tight mb-5"
        style={{ fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.03em" }}
      >
        This page doesn't exist.
      </h1>
      <p className="text-base text-gray-400 mb-10 max-w-sm" style={{ lineHeight: 1.75 }}>
        The URL you followed may be outdated or the page may have moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
        style={{ background: "#0D9488", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}
      >
        Back to home
      </Link>
    </div>
  );
}
