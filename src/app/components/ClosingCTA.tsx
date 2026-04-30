import { Link } from "react-router";

const pills = [
  { icon: "🔒", text: "On-premise deployment" },
  { icon: "📄", text: "No manual sharing" },
  { icon: "⚡", text: "Instant answers" },
  { icon: "🛠️", text: "Built for field use" },
];

export function ClosingCTA() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{
        background: "linear-gradient(135deg, #0F1729 0%, #0a1520 50%, #0D2B28 100%)",
      }}
    >
      {/* Decorative teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(13,148,136,0.22) 0%, transparent 70%)",
        }}
      />

      {/* Top edge fade */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(13,148,136,0.4), transparent)" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8"
          style={{
            background: "rgba(13,148,136,0.15)",
            border: "1px solid rgba(13,148,136,0.3)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "#0D9488", boxShadow: "0 0 6px #0D9488" }}
          />
          <span className="text-xs font-semibold tracking-wider" style={{ color: "#4fd1c5" }}>
            Ready when your team is
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-6"
          style={{ fontWeight: 700, lineHeight: 1.05, letterSpacing: "-0.03em" }}
        >
          Put the right answer in every
          <br />
          <span style={{ color: "#2dd4bf" }}>technician's hands.</span>
        </h2>

        {/* Sub */}
        <p
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.75 }}
        >
          xOpsentia runs inside your environment. You bring the manuals.
          We deliver the intelligence. Your data never leaves your control.
        </p>

        {/* Feature pills */}
        {/* <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {pills.map((p) => (
            <div
              key={p.text}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "rgba(255,255,255,0.7)",
              }}
            >
              <span>{p.icon}</span>
              <span>{p.text}</span>
            </div>
          ))}
        </div> */}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "#0D9488",
              boxShadow: "0 8px 32px rgba(13,148,136,0.45), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            Contact us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 2l5 5-5 5"/>
            </svg>
          </Link>

          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-semibold transition-all hover:bg-white/10"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            Learn about us
          </Link>
        </div>

        {/* Trust footnote */}
        <p className="text-xs mt-8" style={{ color: "rgba(255,255,255,0.4)" }}> Designed for regulated environments.</p>
      </div>
    </section>
  );
}
