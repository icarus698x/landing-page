import {
  PageHeader,
  SectionHeading,
  FeatureCard,
  PracticeBullets,
  PageCTA,
  ScreenshotFrame,
  WindowChrome,
  Badge,
} from "../components/PageShell";

// ── Screenshot 1: Full chat workspace ─────────────────────────────────────────
function AIFullChatScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="AI Assistant" />
      <div className="flex" style={{ minHeight: 400 }}>
        {/* Sidebar */}
        <div
          className="hidden sm:flex w-[140px] shrink-0 flex-col p-3 gap-1"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)" }}
        >
          {[
            { icon: "💬", name: "AI Assistant", active: true },
            { icon: "📚", name: "Knowledge Base", active: false },
            { icon: "👥", name: "Expert Hub", active: false },
            { icon: "📊", name: "Operations", active: false },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-2 px-2 py-2 rounded-lg"
              style={{ background: item.active ? "rgba(13,148,136,0.1)" : "transparent" }}
            >
              <span className="text-xs">{item.icon}</span>
              <span
                className="text-[10px] font-medium"
                style={{ color: item.active ? "#0D9488" : "#9ca3af" }}
              >
                {item.name}
              </span>
            </div>
          ))}
          <div className="mt-auto pt-4">
            <div
              className="h-px mb-3"
              style={{ background: "rgba(0,0,0,0.06)" }}
            />
            <div className="flex items-center gap-2 px-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: "#0D9488" }}
              >
                JR
              </div>
              <div>
                <p className="text-[9px] font-medium text-gray-600">James R.</p>
                <p className="text-[8px] text-gray-400">Technician</p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 flex flex-col p-4 gap-3">
          {/* Header */}
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-xs font-semibold text-gray-700">New Troubleshooting Session</p>
              <p className="text-[10px] text-gray-400">Session #047 · Started just now</p>
            </div>
            <Badge label="Active" color="teal" />
          </div>

          {/* Messages */}
          <div className="flex justify-end">
            <div
              className="max-w-[75%] rounded-2xl rounded-tr-sm px-4 py-3 text-xs text-white"
              style={{ background: "#0D9488" }}
            >
              COMP-EX 220 is throwing fault code E-003 on startup. Pressure sensor readings are inconsistent. What's the troubleshooting path?
            </div>
          </div>

          <div className="flex gap-2.5">
            <div
              className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
              style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
            >
              xO
            </div>
            <div
              className="rounded-2xl rounded-tl-sm px-4 py-3 text-xs space-y-3 flex-1"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}
            >
              <p className="text-gray-700 font-medium">Fault E-003 — Pressure Sensor Fault: Troubleshooting Path</p>
              <div className="space-y-2">
                {[
                  "Verify sensor wiring harness for continuity — check connectors at J7 and J12.",
                  "Check sensor supply voltage at pin A1 (expected: 5V ±0.25V). Replace sensor if outside range.",
                  "Inspect pressure port for blockage or contamination. Clear and retest.",
                  "If fault persists after sensor replacement, run diagnostics via Service Mode → Sensor Cal.",
                ].map((step, i) => (
                  <div key={i} className="flex gap-2">
                    <span
                      className="text-[10px] font-bold shrink-0 mt-0.5"
                      style={{ color: "#0D9488" }}
                    >
                      0{i + 1}
                    </span>
                    <span className="text-gray-600" style={{ lineHeight: 1.6 }}>{step}</span>
                  </div>
                ))}
              </div>
              {/* Citation */}
              <div
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-[10px] cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  background: "rgba(13,148,136,0.06)",
                  border: "1px solid rgba(13,148,136,0.18)",
                  color: "#0D9488",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <rect x="1.5" y="1" width="9" height="10" rx="1.5" stroke="#0D9488" strokeWidth="1.2" />
                  <path d="M3.5 4h5M3.5 6.5h5M3.5 9h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="font-medium">Source: COMP-EX_220_Service_Manual.pdf · §6.3, Table 12 — Error Code Reference</span>
                <span className="ml-auto opacity-60">Open ↗</span>
              </div>
            </div>
          </div>

          {/* Follow-up */}
          <div className="flex justify-end">
            <div
              className="max-w-[65%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-xs text-white"
              style={{ background: "#0D9488", opacity: 0.85 }}
            >
              Voltage at A1 is reading 4.1V. Should I replace the sensor or check further upstream?
            </div>
          </div>

          {/* Input */}
          <div
            className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-auto"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
              <rect x="2" y="2" width="10" height="10" rx="2" stroke="#d1d5db" strokeWidth="1.2" />
              <path d="M5 7h4M7 5v4" stroke="#d1d5db" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] text-gray-300 flex-1">Ask a follow-up question or describe what you see...</span>
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
              style={{ background: "#0D9488" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 5h8M5.5 1.5L9 5l-3.5 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 2: Citation side-by-side panel ──────────────────────────────────
function AICitationScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="AI Assistant — Source Preview" />
      <div className="flex" style={{ minHeight: 320 }}>
        {/* Chat pane */}
        <div
          className="flex-1 p-4 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-3">Active Session</p>
          <div className="flex gap-2">
            <div
              className="w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[8px] font-bold text-white"
              style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
            >
              xO
            </div>
            <div
              className="rounded-xl px-3 py-2.5 text-[11px] flex-1 space-y-2"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p className="text-gray-700">Check shaft seal integrity and coupling alignment per §4.2.3...</p>
              {/* Highlighted citation chip */}
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] ring-1"
                style={{
                  background: "rgba(13,148,136,0.08)",
                  color: "#0D9488",
                  ringColor: "#0D9488",
                  border: "1.5px solid #0D9488",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="1" width="8" height="8" rx="1.2" stroke="#0D9488" strokeWidth="1.2" />
                  <path d="M2.5 3.5h5M2.5 5h5M2.5 6.5h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="font-semibold">HYD-PRO_450_Service_Manual.pdf · Page 34, §4.2.3</span>
                <span className="ml-auto">↗ Viewing</span>
              </div>
            </div>
          </div>
          <div
            className="rounded-xl p-3 text-[11px] text-gray-500 mt-2"
            style={{ background: "rgba(13,148,136,0.03)", border: "1px solid rgba(13,148,136,0.1)" }}
          >
            Source opened beside chat. Relevant passage highlighted.
          </div>
        </div>

        {/* Document preview pane */}
        <div className="flex-1 p-4 flex flex-col gap-3" style={{ background: "rgba(248,250,252,0.8)" }}>
          <div className="flex items-center justify-between mb-1">
            <div>
              <p className="text-[10px] font-semibold text-gray-700">HYD-PRO_450_Service_Manual.pdf</p>
              <p className="text-[9px] text-gray-400">Page 34 of 218 · §4.2.3 Shaft Seal Inspection</p>
            </div>
            <div className="flex gap-1.5">
              <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "#f1f5f9" }}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5h6M5 2l3 3-3 3" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          {/* Document content with highlight */}
          <div
            className="rounded-xl p-4 space-y-2 flex-1"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)", fontSize: 10, lineHeight: 1.65, color: "#374151" }}
          >
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wider mb-2">§4.2.3 Shaft Seal Inspection</p>
            <p className="text-gray-500">Before performing any inspection, ensure the hydraulic circuit is fully depressurized and the unit is locked out.</p>
            {/* Highlighted passage */}
            <div
              className="rounded-lg p-2.5 my-2"
              style={{ background: "rgba(250,204,21,0.2)", border: "1.5px solid rgba(234,179,8,0.4)" }}
            >
              <p>
                <strong>Shaft seal integrity check:</strong> Inspect the shaft seal for visible leakage or scoring marks. Check coupling alignment using a dial indicator — maximum permissible runout is 0.05 mm. Misalignment exceeding this value will cause accelerated seal wear and pressure drop under peak load conditions.
              </p>
            </div>
            <p className="text-gray-500">If misalignment is detected, loosen coupling fasteners and re-align before retorquing to specified values (see Table 4-7).</p>
            <div className="mt-3 p-2 rounded-lg" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
              <p className="text-[9px] font-semibold" style={{ color: "#dc2626" }}>⚠ Safety Note</p>
              <p className="text-gray-500 mt-0.5">Do not operate the unit with misaligned coupling. Risk of seal failure and pressurised fluid release.</p>
            </div>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 3: Generic AI vs xOpsentia comparison ──────────────────────────
function AIComparisonScreenshot() {
  return (
    <ScreenshotFrame>
      <div
        className="px-4 py-3 flex items-center gap-2"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.9)" }}
      >
        <span className="text-[10px] font-semibold text-gray-500">Answer Quality Comparison · Error Code E-003</span>
      </div>
      <div className="grid grid-cols-2" style={{ minHeight: 300 }}>
        {/* Generic AI side */}
        <div
          className="p-5 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)", background: "rgba(254,242,242,0.4)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: "#ef4444" }}
            >
              ✕
            </div>
            <span className="text-xs font-semibold text-gray-600">Generic AI Tool</span>
          </div>
          <div
            className="p-3 rounded-xl text-[11px] space-y-2"
            style={{ background: "#fff", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <p className="text-gray-600">"E-003 indicates a pressure sensor fault. Check the sensor wiring and replace if necessary..."</p>
          </div>
          <div
            className="flex items-start gap-2 p-2.5 rounded-lg text-[10px]"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px dashed rgba(239,68,68,0.3)" }}
          >
            <span style={{ color: "#dc2626" }}>⚠</span>
            <span className="text-gray-500">Troubleshooting table split — decision path incomplete</span>
          </div>
          <div
            className="flex items-start gap-2 p-2.5 rounded-lg text-[10px]"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px dashed rgba(239,68,68,0.3)" }}
          >
            <span style={{ color: "#dc2626" }}>⚠</span>
            <span className="text-gray-500">Safety warning detached from step — not returned</span>
          </div>
          <div
            className="flex items-start gap-2 p-2.5 rounded-lg text-[10px]"
            style={{ background: "rgba(239,68,68,0.06)", border: "1px dashed rgba(239,68,68,0.3)" }}
          >
            <span style={{ color: "#dc2626" }}>⚠</span>
            <span className="text-gray-500">No source reference — cannot verify answer against manual</span>
          </div>
        </div>

        {/* xOpsentia side */}
        <div
          className="p-5 space-y-3"
          style={{ background: "rgba(240,253,250,0.4)" }}
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
              style={{ background: "#0D9488" }}
            >
              ✓
            </div>
            <span className="text-xs font-semibold text-gray-600">xOpsentia</span>
          </div>
          <div
            className="p-3 rounded-xl text-[11px] space-y-2.5"
            style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.15)" }}
          >
            <p className="text-gray-700 font-medium">E-003 — Full troubleshooting path:</p>
            {["Check wiring at J7/J12 for continuity", "Verify 5V supply at pin A1 ±0.25V", "Clear pressure port if blocked", "Run Sensor Cal via Service Mode"].map((s, i) => (
              <div key={i} className="flex gap-1.5 text-gray-600">
                <span className="font-bold text-[10px] shrink-0" style={{ color: "#0D9488" }}>0{i + 1}</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
          <div
            className="flex items-start gap-2 p-2.5 rounded-lg text-[10px]"
            style={{ background: "rgba(250,204,21,0.1)", border: "1px solid rgba(234,179,8,0.2)" }}
          >
            <span>⚠</span>
            <span className="text-gray-600 font-medium">Safety: Depressurise circuit before sensor removal</span>
          </div>
          <div
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-[10px]"
            style={{ background: "rgba(13,148,136,0.06)", border: "1px solid rgba(13,148,136,0.15)", color: "#0D9488" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="1.2" stroke="#0D9488" strokeWidth="1.2" />
              <path d="M2.5 3.5h5M2.5 5h5M2.5 6.5h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <span className="font-medium">Source: §6.3, Table 12 — Page 89</span>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function AIAssistantPage() {
  const practiceItems = [
    "Less time spent digging through manuals",
    "More confidence in the next step",
    "Answers that can be checked against the source",
    "Better continuity when the issue gets more specific",
    "A clearer path to escalation when expert help is needed",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="7" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M6 9l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Start from the problem",
      description:
        "Ask in plain language, describe the symptom, or add an image to show what is happening. The interaction begins where the work begins.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="3" width="14" height="12" rx="2" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M5 7h8M5 10h5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Get grounded guidance",
      description:
        "Answers are based on approved manuals and procedures, not generic model output. The goal is to return usable repair guidance, not something that only sounds plausible.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 9h12M9 3v12" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="9" r="3" stroke="#0D9488" strokeWidth="1.5" />
        </svg>
      ),
      title: "Continue without starting over",
      description:
        "Troubleshooting rarely ends in one question. Follow-up questions stay in context, so the assistant can help move the issue forward instead of resetting every time.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="AI Assistant"
        tagline="Get the right next step when the machine is down."
        intro="Ask a question, describe the issue, or add an image. xOpsentia returns step-by-step guidance grounded in approved manuals and keeps the troubleshooting context intact as the issue evolves."
        ctaLabel="See xOpsentia in action"
      />

      {/* Hero screenshot */}
      <div className="py-14" style={{ background: "rgba(248,250,252,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <AIFullChatScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          {/* Lead paragraph — full width, prominent */}
          <div
            className="rounded-2xl px-8 py-7 mb-8"
            style={{ background: "rgba(13,148,136,0.05)", borderLeft: "3px solid #0D9488" }}
          >
            <p className="text-gray-700" style={{ lineHeight: 1.85, fontSize: "15px" }}>
              xOpsentia's AI Assistant helps technicians troubleshoot faults using the company's own approved manuals and procedures. Ask a question, describe what you are seeing, or add an image for context. The assistant returns grounded repair guidance with the source attached, so the answer can be used and verified in the same workflow.
            </p>
          </div>

          {/* Two supporting paragraphs side-by-side */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-gray-50 px-7 py-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(13,148,136,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6.5" stroke="#0D9488" strokeWidth="1.4"/>
                  <path d="M8 5v3.5l2 2" stroke="#0D9488" strokeWidth="1.4" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="text-gray-500" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                When equipment fails, the problem is rarely a total lack of information. The problem is getting to the right information fast enough to act. Manuals are long. Procedures are buried. Senior experts are not always available when the issue starts. xOpsentia is built for that moment.
              </p>
            </div>
            <div className="rounded-2xl bg-gray-50 px-7 py-6">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: "rgba(13,148,136,0.08)" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#0D9488" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-500" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                The assistant gives technicians a direct way to move from fault to next step without digging through documentation first. It keeps the interaction simple, but the answer grounded. That means less time spent searching, less guesswork at the point of repair, and less dependence on memory or side conversations to move the work forward.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Feature list + citation screenshot */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            label="Capabilities"
            title="What the assistant helps you do"
          />

          {/* Feature cards grid */}
          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Citation feature with screenshot */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#0D9488" strokeWidth="1.5" />
                  <path d="M5 6h8M5 9h8M5 12h5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="14" cy="14" r="3.5" fill="#0D9488" />
                  <path d="M13 14h2M14 13v2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Check the source without leaving the screen
              </h3>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                Citations open beside the chat, with the relevant section highlighted. Technicians can validate the answer and keep moving in the same workflow.
              </p>
              <p className="text-base text-gray-500 mt-4" style={{ lineHeight: 1.8 }}>
                In document-heavy environments, credibility comes from being able to verify the answer against the approved manual — not just receiving a fluent response.
              </p>
            </div>

            {/* Compact focused citation mock */}
            <div className="flex-1 w-full">
              <div
                className="rounded-2xl overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.08)", background: "#fff", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
              >
                {/* Mini chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(248,250,252,0.9)" }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <span className="ml-3 text-[10px] text-gray-400">AI Assistant — Source Preview</span>
                </div>

                <div className="p-5 space-y-3">
                  {/* AI answer bubble */}
                  <div className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-md shrink-0 flex items-center justify-center text-[8px] font-bold text-white mt-0.5" style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}>
                      xO
                    </div>
                    <div className="rounded-xl px-3.5 py-3 flex-1 space-y-2.5" style={{ background: "rgba(248,250,252,0.8)", border: "1px solid rgba(0,0,0,0.07)" }}>
                      <p className="text-[11px] text-gray-700">Check shaft seal integrity and coupling alignment per §4.2.3 before retorquing to spec values.</p>
                      {/* Citation chip */}
                      <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[10px] font-medium" style={{ background: "rgba(13,148,136,0.07)", border: "1.5px solid rgba(13,148,136,0.3)", color: "#0D9488" }}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <rect x="1" y="1" width="8" height="8" rx="1.2" stroke="#0D9488" strokeWidth="1.2" />
                          <path d="M2.5 3.5h5M2.5 5h5M2.5 6.5h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                        <span>HYD-PRO_450_Service_Manual.pdf · §4.2.3, Page 34</span>
                        <span className="ml-auto opacity-70">↗ Open</span>
                      </div>
                    </div>
                  </div>

                  {/* Source preview card */}
                  <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(13,148,136,0.15)" }}>
                    <div className="flex items-center justify-between px-4 py-2" style={{ background: "rgba(13,148,136,0.04)", borderBottom: "1px solid rgba(13,148,136,0.1)" }}>
                      <div>
                        <span className="text-[9px] font-semibold text-gray-600">HYD-PRO_450_Service_Manual.pdf</span>
                        <span className="text-[9px] text-gray-400 ml-2">Page 34 · §4.2.3 Shaft Seal Inspection</span>
                      </div>
                      <span className="text-[9px] font-medium" style={{ color: "#0D9488" }}>Viewing source</span>
                    </div>
                    <div className="px-4 py-3 space-y-2" style={{ fontSize: 10, color: "#374151", lineHeight: 1.6 }}>
                      <p className="text-gray-400 text-[9px]">Before performing any inspection, ensure the hydraulic circuit is fully depressurised...</p>
                      {/* Highlighted passage */}
                      <div className="rounded-lg px-3 py-2.5" style={{ background: "rgba(250,204,21,0.18)", border: "1.5px solid rgba(234,179,8,0.35)" }}>
                        <p><strong>Shaft seal integrity check:</strong> Inspect for visible leakage or scoring. Check coupling alignment using a dial indicator — max permissible runout 0.05 mm.</p>
                      </div>
                      <div className="flex items-start gap-1.5 px-2.5 py-2 rounded-lg" style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.12)" }}>
                        <span className="text-[9px] font-semibold shrink-0" style={{ color: "#dc2626" }}>⚠</span>
                        <p className="text-[9px] text-gray-500">Do not operate with misaligned coupling. Risk of seal failure.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why different */}
      <div className="py-20 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <SectionHeading
              label="Why it's different"
              title="Why this is different from a generic AI tool"
            />
          </div>

          {/* Redesigned text blocks */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            {/* Left col — two stacked cards */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white px-7 py-6 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>The problem</p>
                <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                  Most AI systems treat technical manuals like plain text. That works badly in the real world.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-7 py-6 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>What breaks</p>
                <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                  Troubleshooting tables get split apart. Safety warnings lose the steps they belong to. Multi-column layouts get flattened. Diagrams and captions drift away from each other. The result is an answer that may look fluent but loses the structure a technician actually needs.
                </p>
              </div>
            </div>

            {/* Right col — two stacked cards */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-white px-7 py-6 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>How xOpsentia is different</p>
                <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                  xOpsentia is built for technical documentation, not flat text. Its document intelligence layer is designed to preserve the structure of real manuals so that procedures, warnings, tables, and supporting context stay usable when answers are returned.
                </p>
              </div>
              <div className="rounded-2xl bg-white px-7 py-6 border border-gray-100">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>The result</p>
                <p className="text-gray-600" style={{ lineHeight: 1.8, fontSize: "14px" }}>
                  That is why a technician can ask about an error code and get the troubleshooting path, not a fragment. Or ask how to replace a component and get the procedure with the context that belongs to it.
                </p>
              </div>
            </div>
          </div>

          {/* Closing statement — full width highlight */}
          <div
            className="rounded-2xl px-8 py-6 mb-14"
            style={{ background: "rgba(13,148,136,0.05)", borderLeft: "3px solid #0D9488" }}
          >
            <p className="text-gray-800" style={{ fontSize: "15px", lineHeight: 1.75, fontWeight: 500 }}>
              Other tools search your manuals. xOpsentia is built to understand them.
            </p>
          </div>

          <AIComparisonScreenshot />
        </div>
      </div>

      {/* Practice bullets */}
      <div className="py-16 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 max-w-sm">
              <SectionHeading
                label="In practice"
                title="What this means in practice"
              />
            </div>
            <div className="flex-1">
              <PracticeBullets items={practiceItems} />
            </div>
          </div>
        </div>
      </div>

      <PageCTA
        label="Ready to see it working on your manuals?"
        buttonLabel="See xOpsentia in action"
      />
    </div>
  );
}