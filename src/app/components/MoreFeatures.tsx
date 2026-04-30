import { useState, useEffect } from "react";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 4h14M3 8h10M3 12h7" />
        <circle cx="16" cy="14" r="2.5" />
        <path d="M16 12.5v1.5l1 1" strokeWidth="1.2" />
      </svg>
    ),
    title: "Citations",
    description: "Every answer links back to the exact source used — the manual, page, and section that informed the response.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="10" cy="10" r="7" />
        <path d="M10 6v4l2.5 2.5" />
      </svg>
    ),
    title: "Session recording",
    description: "Each troubleshooting session is stored for review and traceability — a full record of every action taken.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="16" height="13" rx="2" />
        <path d="M6 9h8M6 13h5" />
        <circle cx="15" cy="13" r="1.5" fill="#0D9488" stroke="none" />
      </svg>
    ),
    title: "Issue status",
    description: "Track whether a troubleshooting case is active, ongoing, or resolved — across all sites and teams.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="12" height="16" rx="2" />
        <path d="M7 7h6M7 10.5h6M7 14h4" />
      </svg>
    ),
    title: "Report generation",
    description: "Generate structured summaries from completed troubleshooting sessions — ready to share or archive.",
  },
];

// Unique mock UI shapes per card so each screenshot looks distinct
const mockScreenshots = [
  // Citations — table-like rows
  (
    <div style={{ width: "88%", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ height: 7, borderRadius: 4, background: "rgba(13,148,136,0.4)", width: "60%" }} />
      {[1, 0.75, 0.9, 0.65, 0.8].map((w, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, padding: "6px 10px", borderRadius: 8, background: i === 0 ? "rgba(13,148,136,0.12)" : "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.08)" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: i === 0 ? "#0D9488" : "rgba(13,148,136,0.25)", flexShrink: 0 }} />
          <div style={{ height: 5, borderRadius: 3, background: "rgba(13,148,136,0.25)", width: `${w * 100}%` }} />
        </div>
      ))}
    </div>
  ),
  // Session recording — timeline
  (
    <div style={{ width: "88%", display: "flex", flexDirection: "column", gap: 10 }}>
      <div style={{ height: 6, borderRadius: 3, background: "rgba(13,148,136,0.35)", width: "45%" }} />
      <div style={{ position: "relative", paddingLeft: 16 }}>
        <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 2, background: "rgba(13,148,136,0.15)", borderRadius: 2 }} />
        {[1, 0.8, 0.65, 0.75].map((w, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, position: "relative" }}>
            <div style={{ position: "absolute", left: -13, width: 10, height: 10, borderRadius: "50%", background: i === 0 ? "#0D9488" : "rgba(13,148,136,0.2)", border: `2px solid ${i === 0 ? "#0D9488" : "rgba(13,148,136,0.1)"}` }} />
            <div style={{ height: 28, flex: 1, borderRadius: 8, background: i === 0 ? "rgba(13,148,136,0.1)" : "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.08)", display: "flex", alignItems: "center", paddingLeft: 10, gap: 6 }}>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(13,148,136,0.3)", width: `${w * 70}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
  // Session status — kanban columns
  (
    <div style={{ width: "92%", display: "flex", gap: 8 }}>
      {[
        { label: "Active", count: 3, color: "#0D9488" },
        { label: "Ongoing", count: 2, color: "#f59e0b" },
        { label: "Resolved", count: 4, color: "#6366f1" },
      ].map((col) => (
        <div key={col.label} style={{ flex: 1, display: "flex", flexDirection: "column", gap: 5 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 2 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: col.color }} />
            <div style={{ height: 4, borderRadius: 2, background: "rgba(13,148,136,0.3)", width: "60%" }} />
          </div>
          {Array.from({ length: col.count }).map((_, i) => (
            <div key={i} style={{ height: 22, borderRadius: 6, background: "rgba(13,148,136,0.06)", border: `1px solid rgba(13,148,136,0.1)`, display: "flex", alignItems: "center", paddingLeft: 6 }}>
              <div style={{ height: 4, borderRadius: 2, background: "rgba(13,148,136,0.2)", width: `${50 + i * 10}%` }} />
            </div>
          ))}
        </div>
      ))}
    </div>
  ),
  // Report generation — document preview
  (
    <div style={{ width: "80%", background: "rgba(255,255,255,0.7)", borderRadius: 10, padding: "14px 16px", border: "1px solid rgba(13,148,136,0.12)", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ height: 7, borderRadius: 3, background: "rgba(13,148,136,0.45)", width: "55%" }} />
      <div style={{ height: 1, background: "rgba(13,148,136,0.1)", margin: "2px 0" }} />
      {[0.9, 0.7, 0.85, 0.6, 0.75, 0.5].map((w, i) => (
        <div key={i} style={{ height: 5, borderRadius: 3, background: "rgba(13,148,136,0.18)", width: `${w * 100}%` }} />
      ))}
      <div style={{ marginTop: 4, alignSelf: "flex-end", height: 22, width: 70, borderRadius: 6, background: "rgba(13,148,136,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ height: 4, width: 40, borderRadius: 2, background: "#0D9488" }} />
      </div>
    </div>
  ),
];

function MockScreenshot({ index }: { index: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        borderRadius: 14,
        background: "linear-gradient(140deg, rgba(13,148,136,0.06) 0%, rgba(13,148,136,0.13) 100%)",
        border: "1px solid rgba(13,148,136,0.1)",
        maskImage:
          "radial-gradient(ellipse 88% 88% at 50% 50%, black 48%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 88% 88% at 50% 50%, black 48%, transparent 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        position: "relative" as const,
      }}
    >
      {mockScreenshots[index % mockScreenshots.length]}
    </div>
  );
}

function useWindowWidth() {
  const [w, setW] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setW(window.innerWidth);
    window.addEventListener("resize", handler, { passive: true });
    return () => window.removeEventListener("resize", handler);
  }, []);
  return w;
}

// Slot styles: 0 = front, 1 = mid, 2 = back
const SLOT_STYLES = [
  {
    transform: "translateX(0px) translateY(0px) scale(1)",
    opacity: 1,
    zIndex: 10,
    boxShadow: "0 12px 48px rgba(0,0,0,0.10)",
  },
  {
    transform: "translateX(18px) translateY(-18px) scale(0.96)",
    opacity: 0.65,
    zIndex: 9,
    boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
  },
  {
    transform: "translateX(36px) translateY(-36px) scale(0.92)",
    opacity: 0.35,
    zIndex: 8,
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  },
];

export function MoreFeatures() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = features.length;
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 640;

  const prev = () => setActive((a) => (a - 1 + n) % n);
  const next = () => setActive((a) => (a + 1) % n);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % n);
    }, 2000);
    return () => clearInterval(timer);
  }, [paused, n]);

  // Determine the visual slot (0=front,1=mid,2=back,null=hidden) for card index i
  const getSlot = (i: number): number | null => {
    const offset = (i - active + n) % n;
    if (offset < 3) return offset;
    return null;
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-gray-900 tracking-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
          >
            Everything your operations need.
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto text-base" style={{ lineHeight: 1.7 }}>
            Built-in capabilities for field teams, operations managers, and the engineers who support them.
          </p>
        </div>

        {/* Stack carousel */}
        <div
          style={{ position: "relative", maxWidth: 860, margin: "0 auto" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Card stack container */}
          <div style={{ position: "relative", height: isMobile ? "auto" : 300, marginBottom: 48 }}>
            {features.map((f, i) => {
              const slot = getSlot(i);
              // On mobile: only render the active card (slot 0)
              if (isMobile && slot !== 0) return null;
              if (!isMobile && slot === null) return null;

              const s = SLOT_STYLES[slot ?? 0];
              const isActive = slot === 0;

              return (
                <div
                  key={i}
                  onClick={isActive ? undefined : next}
                  style={{
                    position: isMobile ? "relative" : "absolute",
                    top: isMobile ? 0 : 36,
                    left: 0,
                    right: 0,
                    height: isMobile ? "auto" : 264,
                    transform: isMobile ? "none" : s.transform,
                    opacity: isMobile ? 1 : s.opacity,
                    zIndex: s.zIndex,
                    boxShadow: isMobile
                      ? "0 4px 24px rgba(0,0,0,0.08)"
                      : s.boxShadow,
                    transition:
                      "transform 0.45s cubic-bezier(0.4,0,0.2,1), opacity 0.45s cubic-bezier(0.4,0,0.2,1), box-shadow 0.45s",
                    borderRadius: 20,
                    background: "#fff",
                    border: "1px solid rgba(0,0,0,0.07)",
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    overflow: "hidden",
                    cursor: isActive ? "default" : "pointer",
                  }}
                >
                  {/* Left / top: text */}
                  <div
                    style={{
                      width: isMobile ? "100%" : "42%",
                      flexShrink: 0,
                      padding: isMobile ? "28px 24px" : "36px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      gap: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "rgba(13,148,136,0.07)",
                        border: "1px solid rgba(13,148,136,0.13)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        flexShrink: 0,
                      }}
                    >
                      {f.icon}
                    </div>
                    <h3
                      style={{
                        fontSize: isMobile ? 18 : 20,
                        fontWeight: 700,
                        color: "#111827",
                        marginBottom: 10,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p style={{ fontSize: 14, color: "#9ca3af", lineHeight: 1.75 }}>
                      {f.description}
                    </p>
                  </div>

                  {/* Right: screenshot placeholder — desktop only */}
                  {!isMobile && (
                    <div
                      style={{
                        flex: 1,
                        padding: "24px 24px 24px 12px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <MockScreenshot index={i} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Navigation row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 16,
            }}
          >
            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Previous"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#0D9488";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(13,148,136,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 12L6 8l4-4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div style={{ display: "flex", gap: 6 }}>
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to ${features[i].title}`}
                  style={{
                    width: i === active ? 20 : 7,
                    height: 7,
                    borderRadius: 99,
                    background: i === active ? "#0D9488" : "rgba(13,148,136,0.2)",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "width 0.3s cubic-bezier(0.4,0,0.2,1), background 0.3s",
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Next"
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                border: "1px solid rgba(0,0,0,0.1)",
                background: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "border-color 0.2s, box-shadow 0.2s",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#0D9488";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 2px 8px rgba(13,148,136,0.15)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 4px rgba(0,0,0,0.06)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M6 4l4 4-4 4" stroke="#374151" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}