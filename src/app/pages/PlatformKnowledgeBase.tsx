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

// ── Screenshot 1: Full Knowledge Base screen ──────────────────────────────────
function KBFullScreenshot() {
  const docs = [
    { name: "HYD-PRO_450_Service_Manual.pdf", type: "Service Manual", pages: "218 pages", match: "Best match", active: true },
    { name: "Hydraulic_Systems_SOP_v3.pdf", type: "SOP", pages: "64 pages", match: "Good match", active: false },
    { name: "Pump_Maintenance_Guide_2024.pdf", type: "Guide", pages: "91 pages", match: "Related", active: false },
    { name: "Valve_Inspection_Procedures.pdf", type: "Procedure", pages: "33 pages", match: "Related", active: false },
    { name: "COMP-EX_220_Technical_Ref.pdf", type: "Reference", pages: "142 pages", match: "Related", active: false },
  ];

  return (
    <ScreenshotFrame>
      <WindowChrome title="Knowledge Base" />
      <div className="flex" style={{ minHeight: 400 }}>
        {/* Sidebar */}
        <div
          className="hidden sm:flex w-[140px] shrink-0 flex-col p-3 gap-1"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.6)" }}
        >
          {[
            { icon: "💬", name: "AI Assistant", active: false },
            { icon: "📚", name: "Knowledge Base", active: true },
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
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col p-4 gap-3">
          {/* Search */}
          <div
            className="flex items-center gap-2 rounded-xl px-3.5 py-2.5"
            style={{
              background: "#fff",
              border: "1.5px solid rgba(13,148,136,0.4)",
              boxShadow: "0 0 0 3px rgba(13,148,136,0.06)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
              <circle cx="5.5" cy="5.5" r="4" stroke="#0D9488" strokeWidth="1.5" />
              <path d="M9 9L11.5 11.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs text-gray-600 flex-1">hydraulic pump pressure drop</span>
            <span className="text-[10px] text-gray-400">247 documents</span>
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {["All", "Manuals", "SOPs", "Guides", "Procedures"].map((f, i) => (
              <span
                key={f}
                className="px-3 py-1 rounded-full text-[10px] font-medium cursor-pointer"
                style={
                  i === 0
                    ? { background: "rgba(13,148,136,0.1)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.2)" }
                    : { background: "#f1f5f9", color: "#94a3b8", border: "1px solid transparent" }
                }
              >
                {f}
              </span>
            ))}
          </div>

          <div className="flex gap-3 flex-1">
            {/* Document list */}
            <div className="flex-1 space-y-1.5">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider px-1 mb-2">Results — 24 documents</p>
              {docs.map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer"
                  style={{
                    background: doc.active ? "rgba(13,148,136,0.06)" : "#fff",
                    border: doc.active ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-7 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: doc.active ? "rgba(13,148,136,0.1)" : "#f8fafc" }}
                    >
                      <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                        <rect x="1" y="1" width="10" height="12" rx="2" stroke={doc.active ? "#0D9488" : "#94a3b8"} strokeWidth="1.2" />
                        <path d="M3.5 4.5H8.5M3.5 7H8.5M3.5 9.5H6.5" stroke={doc.active ? "#0D9488" : "#94a3b8"} strokeWidth="1" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-700 truncate max-w-[200px]">{doc.name}</p>
                      <p className="text-[9px] text-gray-400">{doc.type} · {doc.pages}</p>
                    </div>
                  </div>
                  <span
                    className="text-[9px] px-2 py-0.5 rounded-full shrink-0"
                    style={
                      doc.active
                        ? { background: "rgba(13,148,136,0.1)", color: "#0D9488" }
                        : { background: "#f1f5f9", color: "#94a3b8" }
                    }
                  >
                    {doc.match}
                  </span>
                </div>
              ))}
            </div>

            {/* Preview pane */}
            <div
              className="hidden lg:flex w-[200px] shrink-0 flex-col rounded-xl overflow-hidden"
              style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
            >
              <div
                className="px-3 py-2"
                style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#f8fafc" }}
              >
                <p className="text-[9px] font-semibold text-gray-600">HYD-PRO_450_Service_Manual.pdf</p>
                <p className="text-[8px] text-gray-400">Page 1 of 218</p>
              </div>
              <div className="p-3 space-y-1.5 flex-1">
                <div className="h-2 rounded w-full bg-gray-200" />
                <div className="h-2 rounded w-5/6 bg-gray-200" />
                <div className="h-2 rounded w-4/6 bg-gray-200" />
                <div className="h-px my-2 bg-gray-100" />
                <div
                  className="p-2 rounded-lg space-y-1"
                  style={{ background: "rgba(250,204,21,0.15)", border: "1px solid rgba(234,179,8,0.3)" }}
                >
                  <div className="h-2 rounded w-full bg-yellow-300/60" />
                  <div className="h-2 rounded w-5/6 bg-yellow-300/60" />
                </div>
                <div className="h-2 rounded w-full bg-gray-200" />
                <div className="h-2 rounded w-4/6 bg-gray-200" />
              </div>
              <div className="p-2" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <button
                  className="w-full py-1.5 rounded-lg text-[9px] font-semibold text-white"
                  style={{ background: "#0D9488" }}
                >
                  Open in Assistant →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 2: Filtered search results ─────────────────────────────────────
function KBSearchResultsScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Knowledge Base — Search" />
      <div className="p-5 space-y-4" style={{ minHeight: 280 }}>
        {/* Search active */}
        <div
          className="flex items-center gap-2 rounded-xl px-3.5 py-2.5"
          style={{
            background: "#fff",
            border: "1.5px solid rgba(13,148,136,0.5)",
            boxShadow: "0 0 0 3px rgba(13,148,136,0.08)",
          }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="5.5" cy="5.5" r="4" stroke="#0D9488" strokeWidth="1.5" />
            <path d="M9 9L11.5 11.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-gray-700 flex-1">pressure relief valve inspection</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}>18 results</span>
        </div>

        {/* Active filters */}
        <div className="flex gap-2 flex-wrap">
          {[
            { label: "Manuals", active: true },
            { label: "All docs", active: false },
            { label: "SOPs", active: false },
          ].map((f) => (
            <span
              key={f.label}
              className="px-3 py-1 rounded-full text-[10px] font-medium"
              style={
                f.active
                  ? { background: "rgba(13,148,136,0.12)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.25)" }
                  : { background: "#f1f5f9", color: "#94a3b8" }
              }
            >
              {f.label}
            </span>
          ))}
          <span
            className="px-3 py-1 rounded-full text-[10px] font-medium"
            style={{ background: "#f1f5f9", color: "#94a3b8" }}
          >
            Equipment: HYD-PRO ✕
          </span>
        </div>

        {/* Results */}
        <div className="space-y-2">
          {[
            { name: "HYD-PRO_450_Service_Manual.pdf", section: "§5.4 Relief Valve Inspection", pages: "218 pages", selected: true },
            { name: "Hydraulic_Systems_SOP_v3.pdf", section: "§3.1 Valve Maintenance", pages: "64 pages", selected: false },
            { name: "Relief_Valve_Spec_Sheet_v2.pdf", section: "Technical specifications", pages: "8 pages", selected: false },
          ].map((doc, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer"
              style={{
                background: doc.selected ? "rgba(13,148,136,0.06)" : "#fff",
                border: doc.selected ? "1.5px solid rgba(13,148,136,0.22)" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: doc.selected ? "rgba(13,148,136,0.1)" : "#f8fafc" }}
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" fill="none">
                    <rect x="1" y="1" width="12" height="14" rx="2.5" stroke={doc.selected ? "#0D9488" : "#94a3b8"} strokeWidth="1.3" />
                    <path d="M4 5h6M4 8h6M4 11h4" stroke={doc.selected ? "#0D9488" : "#94a3b8"} strokeWidth="1.1" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-700">{doc.name}</p>
                  <p className="text-[10px] text-gray-400">{doc.section} · {doc.pages}</p>
                </div>
              </div>
              {doc.selected && <Badge label="Selected" color="teal" />}
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 3: Admin document management ────────────────────────────────────
function KBAdminScreenshot() {
  const docs = [
    { name: "HYD-PRO_450_Service_Manual.pdf", type: "Service Manual", pages: 218, status: "Processed", date: "12 Apr 2026" },
    { name: "COMP-EX_220_Technical_Ref.pdf", type: "Reference", pages: 142, status: "Processed", date: "10 Apr 2026" },
    { name: "VAL-SYS_88_Procedures.pdf", type: "Procedure", pages: 44, status: "Failed", date: "09 Apr 2026", error: "Scan quality too low" },
    { name: "Pump_Guide_2024_DRAFT.pdf", type: "Guide", pages: 91, status: "Processing", date: "Just now" },
    { name: "Hydraulic_SOP_v3.pdf", type: "SOP", pages: 64, status: "Processed", date: "08 Apr 2026" },
  ];

  const statusStyle: Record<string, { bg: string; color: string }> = {
    Processed: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
    Failed: { bg: "rgba(239,68,68,0.1)", color: "#dc2626" },
    Processing: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
  };

  return (
    <ScreenshotFrame>
      <WindowChrome title="Knowledge Base — Admin: Documents" />
      <div className="p-4" style={{ minHeight: 300 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-gray-700">Document Management</p>
            <p className="text-[10px] text-gray-400">247 total · 241 processed · 3 failed · 3 pending</p>
          </div>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-white"
            style={{ background: "#0D9488" }}
          >
            <span>+</span> Upload Document
          </button>
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div
            className="grid px-4 py-2"
            style={{
              gridTemplateColumns: "1fr 90px 60px 90px 90px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "#f8fafc",
            }}
          >
            {["Document", "Type", "Pages", "Status", "Ingested"].map((h) => (
              <span key={h} className="text-[9px] text-gray-400 uppercase tracking-wider">{h}</span>
            ))}
          </div>

          {docs.map((doc, i) => (
            <div key={i}>
              <div
                className="grid px-4 py-2.5 items-center bg-white"
                style={{
                  gridTemplateColumns: "1fr 90px 60px 90px 90px",
                  borderBottom: i < docs.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                }}
              >
                <div>
                  <p className="text-[11px] text-gray-700 truncate max-w-[200px]">{doc.name}</p>
                  {doc.error && (
                    <p className="text-[9px] mt-0.5" style={{ color: "#dc2626" }}>{doc.error}</p>
                  )}
                </div>
                <span className="text-[10px] text-gray-500">{doc.type}</span>
                <span className="text-[10px] text-gray-400">{doc.pages}</span>
                <span
                  className="text-[9px] px-2 py-0.5 rounded-full w-fit font-medium"
                  style={statusStyle[doc.status]}
                >
                  {doc.status}
                </span>
                <span className="text-[9px] text-gray-400">{doc.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3">
          <p className="text-[9px] text-gray-400">Showing 5 of 247 documents</p>
          <div className="flex gap-1.5">
            <button className="px-2.5 py-1 rounded-md text-[9px] text-gray-500" style={{ border: "1px solid rgba(0,0,0,0.08)" }}>← Prev</button>
            <button className="px-2.5 py-1 rounded-md text-[9px] text-white" style={{ background: "#0D9488" }}>Next →</button>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function KnowledgeBasePage() {
  const practiceItems = [
    "Search across approved documentation from one place",
    "Preview the right manual before troubleshooting begins",
    "Reduce time lost before the first repair step",
    "Keep document management in admin hands",
    "Maintain a knowledge layer that stays aligned with your environment",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="7.5" cy="7.5" r="5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M12 12L15.5 15.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Search across approved documentation",
      description:
        "Find manuals and source documents using keyword search, semantic search, or metadata filters across the ingested knowledge base. Reduce time spent hunting for the right source before troubleshooting begins.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="2" width="14" height="14" rx="2.5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M6 6h6M6 9h6M6 12h4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Preview the document before acting on it",
      description:
        "Open the document inside the Knowledge Base and review it directly, without needing to leave the workflow or guess whether the result is the right source.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 2v14M2 9h14" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="9" cy="9" r="4" stroke="#0D9488" strokeWidth="1.5" />
        </svg>
      ),
      title: "Keep the right documents in scope",
      description:
        "The system works from approved manuals and procedures, not ad hoc file collections. That makes the knowledge layer more usable for technicians and more acceptable for regulated environments.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="Knowledge Base"
        tagline="Find the right manual before the search becomes the work."
        intro="xOpsentia's Knowledge Base gives teams a dedicated way to search, review, and manage approved technical documentation inside their own environment."
        ctaLabel="See xOpsentia in action"
      />

      {/* Hero screenshot */}
      <div className="py-14" style={{ background: "rgba(248,250,252,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <KBFullScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              Instead of relying only on chat, users can search across ingested manuals, filter by metadata, and preview documents directly to get to the right source faster.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              In document-heavy environments, troubleshooting often slows down before the first repair step is even taken. The issue is not always the fault itself. It is finding the right manual, the right version, or the right procedure inside a large body of documentation. xOpsentia's Knowledge Base is built for that part of the workflow.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              It gives technicians and support teams a separate discovery layer for approved documents, so they can locate the right source before digging through scattered files or opening the wrong PDF. For organizations, it also keeps document control visible. The manuals stay inside the customer's environment, the approved knowledge stays in scope, and the system works from what the customer chooses to ingest and manage.
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Capabilities" title="What the Knowledge Base helps you do" />

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Search feature with screenshot */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9h12" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="5" y="5" width="8" height="8" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
                </svg>
              </div>
              <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Search across approved documentation
              </h3>
              <p className="text-base text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                Find manuals and source documents using keyword search, semantic search, or metadata filters across the ingested knowledge base.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                The goal is to reduce time spent hunting for the right source before troubleshooting begins — not to surface ten loosely related results and leave the decision to the user.
              </p>
            </div>
            <div className="flex-1 w-full">
              <KBSearchResultsScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Admin control section */}
      <div className="py-20 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading
                label="Governance layer"
                title="Manage documentation without giving up control"
              />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                Admin users can handle document ingestion and knowledge-base management directly within the customer-controlled environment. Routine document updates stay manageable without turning the knowledge layer into a black box.
              </p>
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                A troubleshooting assistant is only as useful as the documentation it can rely on.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                In real environments, manuals are numerous, versions change, and different teams need different levels of access. That is why the Knowledge Base matters so much. It is not just a document library. It is the control layer that makes the rest of the platform usable and trustworthy.
              </p>
            </div>
            <div className="flex-1 w-full">
              <KBAdminScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Why matters */}
      <div className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              For technicians, that means faster access to the right source. For admins and documentation teams, it means clearer control over what is ingested, what is available, and what needs attention when a document fails to process correctly. xOpsentia keeps those controls available to the people who need them without pushing that complexity onto frontline users.
            </p>
          </div>
        </div>
      </div>

      {/* Practice bullets */}
      <div className="py-16 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.4)" }}>
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

      <PageCTA label="See how the Knowledge Base works in your environment." buttonLabel="See xOpsentia in action" />
    </div>
  );
}
