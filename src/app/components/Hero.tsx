import { ScreenshotPlaceholder } from "./ScreenshotPlaceholder";
import { FloatingWindows } from "./FloatingWindows";

export function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: "100vh", backgroundColor: "#f8f9fa" }}>   

      {/* ── Floating background windows ────────────────────────────────────── */}
      <div className="hidden lg:block" style={{ position: "absolute", inset: 0, zIndex: 2 }}>
        <FloatingWindows />
      </div>

      {/* ── Hero text content ───────────────────────────────────────────────── */}
      <div
        className="relative flex flex-col items-center text-center max-w-3xl mx-auto px-6"
        style={{ paddingTop: "160px", zIndex: 10 }}
      >
        {/* Logo badge */}
        

        {/* Headline — white on teal */}

        <h1
          className="text-[46px] md:text-[58px] mb-5 tracking-tight"
          style={{
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: "-0.03em",
            textShadow: "0 2px 18px rgba(0,0,0,0.10)",
            color: '#0F1729',
          }}
        >
          Equip your technicians with the answers they need.{" "}
          <span style={{ color: "rgba(15, 23, 41,0.8)" }}>Instantly.</span>
        </h1>

        {/* CTA — white button so it pops off the teal */}
        <button
          className="px-7 py-3 rounded-full text-sm font-semibold mb-4 transition-all hover:scale-[1.02] hover:shadow-lg"
          style={{
            background: "#0D9488",
            color: "#ffffff",
            boxShadow: "0 4px 24px rgba(0,0,0,0.13)",
            borderRadius: 7,
          }}
        >
          Book a free demo
        </button>

        {/* Note */}
        <p className="text-xs" style={{ color: "rgba(15, 23, 41, 0.6)" }}>
          Built for regulated environment. No manuals sharing required.
        </p>
      </div>

      {/* ── Screenshot — sits in the teal→white transition zone ────────────── */}
      <div className="relative max-w-4xl mx-auto mt-14 px-6" style={{ zIndex: 10 }}>
        <div style={{ borderRadius: "16px", overflow: "hidden" }}>
          <ScreenshotPlaceholder label="AI Assistant" height="400px" />
        </div>
      </div>

      {/* ── Sub-headline — appears on the white zone ────────────────────────── */}
      <div className="relative max-w-2xl mx-auto mt-16 mb-20 px-6 text-center" style={{ zIndex: 10 }}>
        <p
          className="text-gray-500 text-[18px] font-normal"
          style={{ lineHeight: 1.75 }}
        >
          Bring xOpsentia into the field for the right fix, structured repair
          procedures, with easy manual discovery — all within your own environment.
        </p>
      </div>
    </section>
  );
}