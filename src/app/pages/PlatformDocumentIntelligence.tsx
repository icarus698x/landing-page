import {
  PageHeader,
  SectionHeading,
  FeatureCard,
  PracticeBullets,
  PageCTA,
  ScreenshotFrame,
} from "../components/PageShell";

// ── Screenshot 1: Generic chunking vs xOpsentia hierarchy ────────────────────
function DocIntelComparisonScreenshot() {
  return (
    <ScreenshotFrame>
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.9)" }}
      >
        <span className="text-[10px] font-semibold text-gray-500">Document Processing Approach — Technical Manual</span>
      </div>
      <div className="grid grid-cols-2" style={{ minHeight: 340 }}>
        {/* Generic AI left */}
        <div
          className="p-5 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)", background: "rgba(254,242,242,0.3)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
              style={{ background: "#ef4444" }}
            >
              ✕
            </div>
            <span className="text-[11px] font-semibold text-gray-600">Generic AI — Flat Chunking</span>
          </div>

          {/* Chunked blocks */}
          <div className="space-y-2">
            {[
              { label: "Chunk 1", content: "…pressure relief valve must be set to…", warn: false },
              { label: "Chunk 2", content: "⚠ WARNING — risk of pressurised fluid release if…", warn: true, detached: true },
              { label: "Chunk 3", content: "Col 2: torque spec 45 Nm | Col 1: tool requirement…", warn: false, flattened: true },
              { label: "Chunk 4", content: "Figure 4.2 [diagram embedded — caption missing]", warn: false, broken: true },
              { label: "Chunk 5", content: "…step 4 of 7: replace shaft seal before...", warn: false },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-lg p-2.5 text-[10px] space-y-1"
                style={{
                  background: c.warn ? "rgba(239,68,68,0.08)" : "#fff",
                  border: c.warn ? "1px dashed rgba(239,68,68,0.3)" : "1px solid rgba(0,0,0,0.07)",
                }}
              >
                <p className="text-[8px] text-gray-400 uppercase tracking-wider">{c.label}</p>
                <p className="text-gray-600">{c.content}</p>
                {c.detached && (
                  <p className="text-[8px]" style={{ color: "#dc2626" }}>⚠ Detached from step — context lost</p>
                )}
                {c.flattened && (
                  <p className="text-[8px]" style={{ color: "#dc2626" }}>⚠ Multi-column flattened — wrong reading order</p>
                )}
                {c.broken && (
                  <p className="text-[8px]" style={{ color: "#dc2626" }}>⚠ Diagram disconnected from caption</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* xOpsentia right */}
        <div
          className="p-5 space-y-3"
          style={{ background: "rgba(240,253,250,0.4)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white"
              style={{ background: "#0D9488" }}
            >
              ✓
            </div>
            <span className="text-[11px] font-semibold text-gray-600">xOpsentia — Structural Preservation</span>
          </div>

          {/* Hierarchy tree */}
          <div
            className="rounded-xl p-3 space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.15)" }}
          >
            {/* Section */}
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded flex items-center justify-center shrink-0"
                style={{ background: "#0D9488" }}
              >
                <span className="text-[7px] text-white font-bold">§</span>
              </div>
              <span className="text-[10px] font-semibold text-gray-700">§4.2 Valve Replacement Procedure</span>
            </div>

            {/* Steps */}
            <div className="pl-6 space-y-1.5">
              {[
                { step: "Step 1–7 (complete sequence)", icon: "▷", color: "#0D9488" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-1.5">
                  <span className="text-[8px]" style={{ color: s.color }}>{s.icon}</span>
                  <span className="text-[10px] text-gray-600">{s.step}</span>
                </div>
              ))}

              {/* Warning attached */}
              <div
                className="flex items-start gap-1.5 rounded-lg p-1.5"
                style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(234,179,8,0.2)" }}
              >
                <span className="text-[9px]">⚠</span>
                <span className="text-[10px] text-gray-600 font-medium">Safety warning — attached to Step 3 (depressurise first)</span>
              </div>

              {/* Table intact */}
              <div
                className="flex items-center gap-1.5 rounded-lg p-1.5"
                style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.12)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="1" width="8" height="8" rx="1" stroke="#0D9488" strokeWidth="1.1" />
                  <path d="M1 4h8M4 1v8" stroke="#0D9488" strokeWidth="1" />
                </svg>
                <span className="text-[10px] text-gray-600">Table 4-7 (torque specs, tools) — intact</span>
              </div>

              {/* Diagram with caption */}
              <div
                className="flex items-center gap-1.5 rounded-lg p-1.5"
                style={{ background: "rgba(99,102,241,0.05)", border: "1px solid rgba(99,102,241,0.12)" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="2" width="8" height="6" rx="1" stroke="#6366f1" strokeWidth="1.1" />
                  <circle cx="5" cy="5" r="1.5" stroke="#6366f1" strokeWidth="1" />
                </svg>
                <span className="text-[10px] text-gray-600">Fig 4.2 + caption — linked and preserved</span>
              </div>
            </div>
          </div>

          <div
            className="rounded-lg p-2.5 text-[10px]"
            style={{ background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.12)", color: "#0D9488" }}
          >
            Structure preserved → answer stays operational
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 2: Answer quality comparison ────────────────────────────────────
function DocIntelAnswerScreenshot() {
  return (
    <ScreenshotFrame>
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.9)" }}
      >
        <span className="text-[10px] font-semibold text-gray-500">Query: "How do I replace the shaft seal on HYD-PRO 450?"</span>
      </div>
      <div className="grid grid-cols-2" style={{ minHeight: 280 }}>
        {/* Generic left */}
        <div
          className="p-5 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)", background: "rgba(254,242,242,0.2)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full bg-red-400 flex items-center justify-center text-[8px] font-bold text-white">✕</div>
            <span className="text-[10px] font-semibold text-gray-500">Generic AI</span>
          </div>
          <div
            className="rounded-xl p-3 text-[11px] space-y-2 text-gray-600"
            style={{ background: "#fff", border: "1px solid rgba(239,68,68,0.12)" }}
          >
            <p>"To replace the shaft seal on HYD-PRO 450, first remove the end cap and extract the old seal using a seal puller. Install the new seal ensuring correct orientation…"</p>
          </div>
          <div className="space-y-1.5">
            {[
              "Step 4 of 7 only — rest of procedure missing",
              "No safety warning about depressurising first",
              "No tool list or torque specifications",
              "No source reference to verify against",
            ].map((issue) => (
              <div key={issue} className="flex items-start gap-1.5 text-[10px] text-gray-500">
                <span style={{ color: "#ef4444" }} className="shrink-0">✕</span>
                {issue}
              </div>
            ))}
          </div>
        </div>

        {/* xOpsentia right */}
        <div
          className="p-5 space-y-3"
          style={{ background: "rgba(240,253,250,0.3)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white" style={{ background: "#0D9488" }}>✓</div>
            <span className="text-[10px] font-semibold text-gray-500">xOpsentia</span>
          </div>
          <div
            className="rounded-xl p-3 text-[11px] space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.15)" }}
          >
            <p className="text-gray-700 font-medium">Shaft Seal Replacement — HYD-PRO 450 (Steps 1–7):</p>
            <div className="space-y-1 text-gray-600">
              {[
                "Depressurise hydraulic circuit (see §3.1)",
                "Remove end cap assembly (×4 M10 bolts)",
                "Extract seal using seal puller tool P/N 4450-22",
                "Clean seal housing, inspect for scoring",
                "Install new seal — lip facing inward",
                "Torque end cap to 45 Nm (see Table 4-7)",
                "Pressurise and check for leakage",
              ].map((s, i) => (
                <div key={i} className="flex gap-1.5">
                  <span className="text-[9px] font-bold shrink-0" style={{ color: "#0D9488" }}>0{i + 1}</span>
                  <span>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div
            className="flex items-start gap-1.5 rounded-lg p-2 text-[10px]"
            style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(234,179,8,0.2)" }}
          >
            <span>⚠</span>
            <span className="text-gray-700 font-medium">Safety: Depressurise before removal — risk of pressurised fluid release</span>
          </div>
          <div
            className="flex items-center gap-1.5 text-[10px] px-2.5 py-1.5 rounded-lg"
            style={{ background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.15)", color: "#0D9488" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1.2" stroke="#0D9488" strokeWidth="1.2" />
              <path d="M2.5 3.5h5M2.5 5h5M2.5 6.5h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
            </svg>
            Source: HYD-PRO_450_Service_Manual.pdf · §4.2.3, Table 4-7
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 3: Complex manual page ─────────────────────────────────────────
function DocIntelLayoutScreenshot() {
  return (
    <ScreenshotFrame>
      <div
        className="px-4 py-3 flex items-center justify-between"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.9)" }}
      >
        <span className="text-[10px] font-semibold text-gray-500">Real industrial manual layout — what xOpsentia preserves</span>
        <span
          className="text-[9px] px-2 py-0.5 rounded-full font-medium"
          style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}
        >
          HYD-PRO_450 · Page 34
        </span>
      </div>
      <div className="p-5" style={{ minHeight: 280 }}>
        <div className="grid grid-cols-3 gap-3" style={{ fontSize: 9 }}>
          {/* Left column — procedure text */}
          <div className="col-span-2 space-y-2">
            <div
              className="font-bold text-gray-600 px-2 py-1 rounded"
              style={{ background: "rgba(13,148,136,0.08)", fontSize: 10, color: "#0D9488" }}
            >
              ✓ Multi-column layout preserved
            </div>
            <p className="text-[9px] font-bold text-gray-600">§4.2.3 Shaft Seal Inspection & Replacement</p>
            <p className="text-gray-500 leading-relaxed">Before performing any inspection, ensure the hydraulic circuit is fully depressurised and the unit is locked out per §3.1 Lockout Procedure.</p>

            <div
              className="p-2 rounded-lg"
              style={{ background: "rgba(250,204,21,0.12)", border: "1px solid rgba(234,179,8,0.3)" }}
            >
              <p className="font-semibold" style={{ color: "#92400e" }}>⚠ WARNING</p>
              <p className="text-gray-600 leading-relaxed">Depressurise the hydraulic circuit before removing any seals or fittings. Pressurised fluid release may cause serious injury.</p>
              <div
                className="mt-1 text-[8px] font-medium px-1.5 py-0.5 rounded inline-block"
                style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}
              >
                ✓ Warning preserved — attached to Step 1
              </div>
            </div>

            <div className="space-y-1 text-gray-600 leading-relaxed">
              <p><strong>Step 1:</strong> Depressurise system (see §3.1). Confirm circuit pressure = 0 bar.</p>
              <p><strong>Step 2:</strong> Remove end cap assembly. Use 17mm socket. Torque: see Table 4-7.</p>
              <p><strong>Step 3:</strong> Extract shaft seal using puller P/N 4450-22. Do not score housing.</p>
            </div>
          </div>

          {/* Right column — table + diagram */}
          <div className="space-y-2">
            <div
              className="font-bold text-gray-600 px-2 py-1 rounded text-center"
              style={{ background: "rgba(13,148,136,0.08)", color: "#0D9488" }}
            >
              ✓ Table intact
            </div>
            {/* Table */}
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.1)" }}>
              <div className="grid grid-cols-2 px-2 py-1" style={{ background: "#f8fafc", borderBottom: "1px solid rgba(0,0,0,0.07)" }}>
                <span className="text-gray-400">Fastener</span>
                <span className="text-gray-400">Torque</span>
              </div>
              {[["End cap M10", "45 Nm"], ["Seal retainer", "22 Nm"], ["Housing bolt", "68 Nm"]].map(([a, b]) => (
                <div key={a} className="grid grid-cols-2 px-2 py-1 bg-white" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <span className="text-gray-600">{a}</span>
                  <span className="font-medium text-gray-700">{b}</span>
                </div>
              ))}
            </div>

            {/* Diagram */}
            <div
              className="rounded-lg p-3 flex flex-col items-center"
              style={{ background: "#f8fafc", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <div
                className="rounded-lg flex items-center justify-center mb-2"
                style={{ width: "100%", height: 60, background: "#e2e8f0" }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <circle cx="20" cy="20" r="14" stroke="#94a3b8" strokeWidth="2" />
                  <circle cx="20" cy="20" r="8" stroke="#0D9488" strokeWidth="2" strokeDasharray="4 2" />
                  <circle cx="20" cy="20" r="3" fill="#0D9488" />
                  <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p className="text-center leading-tight text-gray-500">Fig 4.2 — Shaft seal cross-section</p>
              <div
                className="mt-1 text-[7px] font-medium px-1.5 py-0.5 rounded"
                style={{ background: "rgba(99,102,241,0.1)", color: "#6366f1" }}
              >
                ✓ Caption linked to diagram
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function DocumentIntelligencePage() {
  const practiceItems = [
    "Fewer broken answers from split tables or detached warnings",
    "More complete repair guidance at the moment it is needed",
    "Better alignment between the answer and the source document",
    "A safer and more reliable troubleshooting experience in document-heavy environments",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M5 6h8M5 9h8M5 12h5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Preserve the structure of the manual",
      description:
        "xOpsentia does not treat a technical manual as a pile of text. It preserves the relationships inside the document: sections, procedures, steps, warnings, tables, and diagrams.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 5h10M4 8.5h10M4 12h7" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="14" cy="12" r="2.5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M13.2 11.2l1.5 1.5" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
      title: "Keep procedures complete",
      description:
        "A technician asking about an error code should get the troubleshooting path, not part of a decision tree. The answer stays operational, not partial.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="6" height="8" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
          <rect x="10" y="3" width="6" height="8" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M4 13h10" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Handle real layouts, not idealized text",
      description:
        "Industrial documentation is full of multi-column pages, troubleshooting matrices, annotated diagrams, and nested tables. xOpsentia is designed for those formats.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2L3 6v6l6 4 6-4V6L9 2z" stroke="#0D9488" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 8v4M9 7v.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Keep safety context attached",
      description:
        "Repair steps should not appear without the warnings that protect them. In technical environments, safety context is part of the answer, not a footnote.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="Document Intelligence"
        tagline="Built for technical manuals, not flat text."
        intro="xOpsentia's document intelligence layer is designed for the way real industrial documentation is written and used — preserving the structure of procedures, warnings, tables, diagrams, and decision paths."
        ctaLabel="Read more in Resources"
      />

      {/* Hero screenshot — comparison visual */}
      <div className="py-14" style={{ background: "rgba(248,250,252,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <DocIntelComparisonScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              Most AI tools fail on technical manuals for a simple reason: they treat them like ordinary text.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              A large PDF gets broken into chunks, embedded, and searched as if every part of the document were equally independent. That approach may work for generic content. It breaks down quickly in regulated, procedure-heavy environments. Troubleshooting matrices get split apart. Safety warnings drift away from the steps they protect. Multi-column pages flatten into the wrong reading order. Diagrams lose the captions and references that make them useful. What comes back may look fluent, but it is no longer the procedure as the manual intended it.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              For xOpsentia, that is not just a retrieval problem. It is a field problem. Technicians do not need a sentence from page 347. They need the full troubleshooting path, the warning that belongs to the step, the tool requirement, the supporting table, and the diagram that helps the action make sense. That is what xOpsentia is built to preserve.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="What makes it different" title="What makes xOpsentia different" />

          <div className="grid md:grid-cols-2 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Answer quality with screenshot */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 5h10M4 8.5h10M4 12h7" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Keep procedures complete
              </h3>
              <p className="text-base text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                A technician asking how to replace a part should get the procedure with the warning, tools, and supporting context that belong to it.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                xOpsentia is built so the answer stays operational, not partial. The difference matters most when incomplete guidance leads to a missed step — or a missed safety precaution.
              </p>
            </div>
            <div className="flex-1 w-full">
              <DocIntelAnswerScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Real layouts section */}
      <div className="py-20 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading label="Why it matters in the field" title="Why this matters in the field" />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                The difference between a generic AI tool and xOpsentia is not just about better parsing. It changes what the technician actually receives.
              </p>
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                With a typical AI tool, an error-code query may return a fragment of a troubleshooting table with half the decision path missing. A repair question may return a paragraph with no safety context attached. A diagram may be disconnected from the procedure it is supposed to support.
              </p>
              <p className="text-base text-gray-700 font-medium" style={{ lineHeight: 1.8 }}>
                Other tools search your manuals. xOpsentia is built to understand them.
              </p>
            </div>
            <div className="flex-1 w-full">
              <DocIntelLayoutScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Practice bullets */}
      <div className="py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 max-w-sm">
              <SectionHeading label="In practice" title="What this means in practice" />
            </div>
            <div className="flex-1">
              <PracticeBullets items={practiceItems} />
            </div>
          </div>
        </div>
      </div>

      <PageCTA label="See how xOpsentia handles your manuals." buttonLabel="Read more in Resources" />
    </div>
  );
}
