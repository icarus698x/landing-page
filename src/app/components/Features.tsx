import { useState } from "react";
import { ChatScreenshot, DocSearchScreenshot, ExpertScreenshot, DashboardScreenshot } from "./FeatureScreenshots";

const features = [
  {
    headline: "Get the exact answer. Not a fragment.",
    body: "Ask a question, describe the issue, or snap a photo to get the full repair procedure — with the right steps, tools, and context from your approved manuals.",
    bullets: ["No digging through manuals.", "No guessing for next step.", "No back-and-forth calls."],
    Screenshot: ChatScreenshot,
  },
  {
    headline: "Find the right manual fast.",
    body: "Search across hundreds of documents to locate the exact manual you need — by keyword, system name, or context.",
    bullets: ["No searching across scattered files.", "No opening the wrong manual.", "Just the right source, when the work begins."],
    Screenshot: DocSearchScreenshot,
  },
  {
    headline: "Every repair becomes visible.",
    body: "Track live troubleshooting sessions across your operations, review how issues are being resolved, and step in when support is needed.",
    bullets: ["See active faults.", "Review progress.", "Guide resolution in real time."],
    Screenshot: DashboardScreenshot,
  },
];

const screenshotMaskStyle: React.CSSProperties = {
  maskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 52%, transparent 100%)",
  WebkitMaskImage: "radial-gradient(ellipse 92% 88% at 50% 50%, black 52%, transparent 100%)",
  borderRadius: "16px",
  overflow: "hidden",
};

export function Features() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(i);

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-4xl text-gray-900 tracking-tight"
            style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
          >
            Built for how field work actually happens.
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">

          {/* Left — Accordion */}
          <div className="flex-[1.1] flex flex-col gap-4">
            {features.map((f, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={f.headline}
                  onClick={() => toggle(i)}
                  className="rounded-xl px-7 py-5 transition-all duration-200 cursor-pointer"
                  style={{
                    border: isOpen ? "1px solid rgba(13,148,136,0.25)" : "1px solid rgba(0,0,0,0.07)",
                    background: "#f8f9fa",
                    boxShadow: isOpen ? "0 4px 20px rgba(13,148,136,0.08)" : "none",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "#f0f2f4";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLDivElement).style.background = "#f8f9fa";
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-6 text-left"
                  >
                    <span
                      className="text-xl text-gray-900"
                      style={{
                        fontWeight: isOpen ? 500 : 500,
                        color: isOpen ? "#0f172a" : "#374151",
                      }}
                    >
                      {f.headline}
                    </span>

                    {/* Plus / Cross icon */}
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
                      style={{
                        background: isOpen ? "rgba(13,148,136,0.12)" : "#f0f0f0",
                      }}
                    >
                      {isOpen ? (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#0D9488" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M1 1l10 10M11 1L1 11" />
                        </svg>
                      ) : (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="#adb5bd" strokeWidth="2.2" strokeLinecap="round">
                          <path d="M6 1v10M1 6h10" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {/* Expandable body */}
                  <div
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{ maxHeight: isOpen ? "500px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <div className="pt-4 pb-1">
                      <p className="text-gray-500 mb-6" style={{ lineHeight: 1.8, fontSize: "0.9375rem" }}>
                        {f.body}
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {f.bullets.map((b) => (
                          <div key={b} className="flex items-center gap-3">
                            <span
                              className="shrink-0 flex items-center justify-center rounded-md"
                              style={{
                                width: 22,
                                height: 22,
                                background: "rgba(13,148,136,0.1)",
                              }}
                            >
                              <svg width="11" height="9" viewBox="0 0 11 9" fill="none">
                                <path d="M1 4.5L4 7.5L10 1" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </span>
                            <span className="text-gray-600" style={{ fontSize: "0.875rem" }}>{b}</span>
                          </div>
                        ))}
                      </div>

                      {/* Screenshot — mobile only */}
                      <div className="mt-7 md:hidden feature-screenshot-mobile" style={screenshotMaskStyle}>
                        <f.Screenshot />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right — Screenshot panel (desktop only) */}
          <div className="hidden md:flex flex-[1.2] items-center justify-center">
            {openIndex !== null ? (
              <div
                key={openIndex}
                style={{
                  ...screenshotMaskStyle,
                  width: "100%",
                  animation: "fadeIn 0.25s ease",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04), 0 4px 20px rgba(13,148,136,0.15)",
                }}
              >
                {(() => { const S = features[openIndex].Screenshot; return <S />; })()}
              </div>
            ) : (
              <div
                className="w-full flex items-center justify-center rounded-2xl"
                style={{
                  border: "1.5px dashed rgba(13,148,136,0.2)",
                  background: "rgba(13,148,136,0.03)",
                  minHeight: "320px",
                }}
              >
                <p className="text-sm text-gray-400" style={{ letterSpacing: "0.01em" }}>
                  Select a feature to preview
                </p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}