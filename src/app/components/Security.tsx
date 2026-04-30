import { Link } from "react-router";

export function Security() {
  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "#f8f9fa" }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Lock icon */}
        <div
          className="w-14 h-14 rounded-2xl mx-auto flex items-center justify-center mb-8"
          style={{
            background: "rgba(13,148,136,0.1)",
            border: "1px solid rgba(13,148,136,0.2)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#0D9488" }}>
          You're in control
        </p>

        <h2
          className="text-3xl md:text-4xl text-gray-900 mb-6 tracking-tight"
          style={{ fontWeight: 700, lineHeight: 1.2, letterSpacing: "-0.025em" }}
        >
          Your data stays where it belongs.
        </h2>

        <div className="space-y-4 text-gray-500 text-base mb-10" style={{ lineHeight: 1.8 }}>
          <p>
            Your manuals, SOPs, and service procedures never leave your environment.
          </p>
          <p>
            They're ingested, processed, and served within your own infrastructure
            — not sent to shared systems, not used to train external models, not
            exposed outside your control.
          </p>
          <p className="text-gray-700">
            We provide the intelligence layer.
            <br />
            You own the knowledge, end to end.
          </p>
        </div>

        <Link
          to="/data-privacy"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{
            background: "#0D9488",
            boxShadow: "0 4px 20px rgba(13,148,136,0.35)",
            borderRadius: 7,
          }}
        >
          See how
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 7h10M7 2l5 5-5 5" />
          </svg>
        </Link>
      </div>
    </section>
  );
}