import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import {
  SectionHeading,
  FeatureCard,
  PracticeBullets,
  ScreenshotFrame,
  WindowChrome,
} from "../components/PageShell";

// ── Upload flow screenshot ────────────────────────────────────────────────────
function UploadScreenshot() {
  const files = [
    { name: "HYD-PRO_450_Service_Manual.pdf", size: "14.2 MB", status: "Done", pages: "218 pages" },
    { name: "Hydraulic_Systems_SOP_v3.pdf", size: "3.8 MB", status: "Done", pages: "64 pages" },
    { name: "COMP-EX_220_Technical_Ref.pdf", size: "9.1 MB", status: "Processing", pages: "142 pages" },
    { name: "VAL-SYS_88_Procedures.pdf", size: "2.4 MB", status: "Queued", pages: "44 pages" },
  ];

  const statusStyle: Record<string, { bg: string; color: string }> = {
    Done: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
    Processing: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
    Queued: { bg: "rgba(0,0,0,0.05)", color: "#6b7280" },
  };

  return (
    <ScreenshotFrame>
      <WindowChrome title="Knowledge Base — Upload Documents" />
      <div className="p-5 space-y-4" style={{ minHeight: 340 }}>
        {/* Drop zone */}
        <div
          className="rounded-xl p-6 text-center flex flex-col items-center gap-3"
          style={{
            border: "2px dashed rgba(13,148,136,0.35)",
            background: "rgba(13,148,136,0.03)",
          }}
        >
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(13,148,136,0.1)" }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 12V4M9 4L6 7M9 4l3 3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 14h12" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-700">Drop your documents here</p>
            <p className="text-[10px] text-gray-400 mt-0.5">PDF, DOCX, XLSX — all processed locally within your environment</p>
          </div>
          <button
            className="px-4 py-1.5 rounded-lg text-[10px] font-semibold text-white"
            style={{ background: "#0D9488" }}
          >
            Browse files
          </button>
        </div>

        {/* File list */}
        <div>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Uploading to your environment</p>
          <div className="space-y-1.5">
            {files.map((f, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
                style={{
                  background: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-7 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: "#f8fafc" }}
                  >
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <rect x="1" y="1" width="10" height="12" rx="2" stroke="#94a3b8" strokeWidth="1.2"/>
                      <path d="M3.5 4.5H8.5M3.5 7H8.5M3.5 9.5H6.5" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-700 truncate max-w-[210px]">{f.name}</p>
                    <p className="text-[9px] text-gray-400">{f.size} · {f.pages}</p>
                  </div>
                </div>
                <span
                  className="text-[9px] px-2 py-0.5 rounded-full shrink-0 font-medium"
                  style={statusStyle[f.status]}
                >
                  {f.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy note */}
        <div
          className="flex items-start gap-2 px-3.5 py-2.5 rounded-xl"
          style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.12)" }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="shrink-0 mt-0.5">
            <rect x="1.5" y="6" width="10" height="6" rx="1.5" stroke="#0D9488" strokeWidth="1.2"/>
            <path d="M4 6V4.5a2.5 2.5 0 015 0V6" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round"/>
          </svg>
          <p className="text-[9px] text-gray-500" style={{ lineHeight: 1.5 }}>
            All documents are processed locally within your infrastructure. Nothing leaves your environment.
          </p>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Data residency diagram ────────────────────────────────────────────────────
function DataResidencyScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Data Residency — Your Environment" />
      <div className="p-5" style={{ minHeight: 320 }}>
        <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-4">How your data flows</p>

        {/* Environment box */}
        <div
          className="rounded-2xl p-4"
          style={{ border: "2px solid rgba(13,148,136,0.2)", background: "rgba(13,148,136,0.03)" }}
        >
          <div
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full mb-4"
            style={{ background: "rgba(13,148,136,0.12)", border: "1px solid rgba(13,148,136,0.2)" }}
          >
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <rect x="0.5" y="4" width="8" height="4.5" rx="1" stroke="#0D9488" strokeWidth="0.9"/>
              <path d="M2.5 4V3a2 2 0 014 0v1" stroke="#0D9488" strokeWidth="0.9" strokeLinecap="round"/>
            </svg>
            <span className="text-[9px] font-semibold" style={{ color: "#0D9488" }}>Your Environment (On-Prem)</span>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "📄", label: "Your Manuals", sub: "Uploaded by you" },
              { icon: "🧠", label: "AI Engine", sub: "Runs locally" },
              { icon: "🔍", label: "Knowledge Base", sub: "Stays internal" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-xl p-3 text-center"
                style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.12)" }}
              >
                <div className="text-lg mb-1">{item.icon}</div>
                <p className="text-[10px] font-semibold text-gray-700">{item.label}</p>
                <p className="text-[9px] text-gray-400 mt-0.5">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Flow arrows */}
          <div className="flex items-center justify-center gap-2 mt-3">
            <span className="text-[9px] text-gray-400">Technician query</span>
            <svg width="20" height="8" viewBox="0 0 20 8" fill="none">
              <path d="M0 4h16M13 1l3 3-3 3" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span
              className="text-[9px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}
            >
              Answer from your docs
            </span>
          </div>
        </div>

        {/* Blocked */}
        <div className="mt-3 flex items-center gap-2">
          <div
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px dashed rgba(239,68,68,0.2)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#ef4444" strokeWidth="1.2"/>
              <path d="M2 2l8 8" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <p className="text-[9px] font-semibold" style={{ color: "#ef4444" }}>No data sent to xOpsentia</p>
          </div>
          <div
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px dashed rgba(239,68,68,0.2)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="#ef4444" strokeWidth="1.2"/>
              <path d="M2 2l8 8" stroke="#ef4444" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <p className="text-[9px] font-semibold" style={{ color: "#ef4444" }}>No external model training</p>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Admin control screenshot ──────────────────────────────────────────────────
function AdminControlScreenshot() {
  const docs = [
    { name: "HYD-PRO_450_Service_Manual.pdf", type: "Service Manual", status: "Active", date: "12 Apr 2026" },
    { name: "COMP-EX_220_Technical_Ref.pdf", type: "Reference", status: "Active", date: "10 Apr 2026" },
    { name: "Pump_Guide_2024_DRAFT.pdf", type: "Guide", status: "Restricted", date: "08 Apr 2026" },
    { name: "Hydraulic_SOP_v3.pdf", type: "SOP", status: "Active", date: "07 Apr 2026" },
  ];

  const statusStyle: Record<string, { bg: string; color: string }> = {
    Active: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
    Restricted: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
  };

  return (
    <ScreenshotFrame>
      <WindowChrome title="Admin — Document Control" />
      <div className="p-4" style={{ minHeight: 300 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-gray-700">Document Access Control</p>
            <p className="text-[10px] text-gray-400">You decide what technicians can access</p>
          </div>
          <div className="flex gap-2">
            <button
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[10px] font-semibold"
              style={{ background: "rgba(13,148,136,0.08)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.15)" }}
            >
              + Upload
            </button>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div
            className="grid px-4 py-2"
            style={{
              gridTemplateColumns: "1fr 90px 80px 80px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "#f8fafc",
            }}
          >
            {["Document", "Type", "Status", "Added"].map((h) => (
              <span key={h} className="text-[9px] text-gray-400 uppercase tracking-wider">{h}</span>
            ))}
          </div>
          {docs.map((doc, i) => (
            <div
              key={i}
              className="grid px-4 py-2.5 items-center bg-white"
              style={{
                gridTemplateColumns: "1fr 90px 80px 80px",
                borderBottom: i < docs.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              <p className="text-[11px] text-gray-700 truncate max-w-[200px]">{doc.name}</p>
              <span className="text-[10px] text-gray-500">{doc.type}</span>
              <span
                className="text-[9px] px-2 py-0.5 rounded-full w-fit font-medium"
                style={statusStyle[doc.status]}
              >
                {doc.status}
              </span>
              <span className="text-[9px] text-gray-400">{doc.date}</span>
            </div>
          ))}
        </div>

        <div
          className="mt-3 flex items-center gap-2 px-3.5 py-2.5 rounded-xl"
          style={{ background: "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.1)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="#0D9488" strokeWidth="1.1"/>
            <path d="M6 4v3M6 8.5v.1" stroke="#0D9488" strokeWidth="1.1" strokeLinecap="round"/>
          </svg>
          <p className="text-[9px] text-gray-500">
            Only admin users can add, remove, or restrict documents. Technicians see only what you approve.
          </p>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function DataPrivacyPage() {
  const practiceItems = [
    "Upload your own manuals — they never leave your infrastructure",
    "Processed and served entirely within your on-premise environment",
    "xOpsentia never receives, views, or stores your documents",
    "Admins control what knowledge is available and to whom",
    "Remove or restrict any document at any time without contacting us",
    "No model training on your proprietary content. Ever.",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 12V4M9 4L6 7M9 4l3 3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M3 15h12" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "You upload. You control.",
      description:
        "Your technical documentation — manuals, SOPs, procedures — is uploaded by you into your own environment. xOpsentia ingests it locally. No copies are made externally. No content is transmitted to us.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="9" width="14" height="8" rx="2" stroke="#0D9488" strokeWidth="1.5"/>
          <path d="M6 9V6a3 3 0 016 0v3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "On-premise by design",
      description:
        "xOpsentia is built to run within your infrastructure. The AI engine, knowledge base, and all document processing happen inside your environment — not in a shared cloud. This isn't an add-on. It's the architecture.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="6" stroke="#0D9488" strokeWidth="1.5"/>
          <path d="M6 9l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Admin-level document governance",
      description:
        "Admins decide which documents are ingested, which are visible to technicians, and which are restricted. Updates happen immediately within your environment. No support tickets. No waiting.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Back bar */}
      {/* <div className="border-b border-gray-100 py-3 px-6" style={{ marginTop: 56 }}>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-700 transition-colors"
        >
          <ArrowLeft size={14} />
          Back to home
        </Link>
      </div> */}

      {/* Header */}
      <div className="pt-14 pb-14 border-b border-gray-100" style={{ marginTop: 56 }}>
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: "rgba(13,148,136,0.08)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.18)" }}
          >
            Data Privacy
          </div>

          <h1
            className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-5"
            style={{ fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em" }}
          >
            Your data never leaves your hands.
          </h1>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl" style={{ lineHeight: 1.75 }}>
            xOpsentia gives you a powerful AI assistant for field operations — without asking you to share a single document. You upload. You own. Everything runs in your environment.
          </p>
        </div>
      </div>

      {/* Hero screenshot — upload flow */}
      <div className="py-14" >
        <div className="max-w-5xl mx-auto px-6">
          <UploadScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              In industrial and regulated environments, technical documentation is sensitive. Manuals contain proprietary process information, service IP, and equipment-specific procedures that organizations cannot afford to share externally.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              Most AI tools require you to upload your documents to a shared cloud. xOpsentia doesn't. When you upload a manual, it goes directly into your on-premise environment. The AI engine runs where your data lives. xOpsentia provides the intelligence layer — you bring the knowledge.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              That means no data transit, no shared model training on your content, and no dependency on an external platform to keep your AI assistant working. If your network is air-gapped, it still works. If your compliance team says the data can't leave the premises, it won't.
            </p>
          </div>
        </div>
      </div>

      {/* Three feature cards */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading
            label="How it works"
            title="The privacy model, explained"
          />

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Upload feature deep-dive */}
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 12V4M9 4L6 7M9 4l3 3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 15h12" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              {/* <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Upload your documents. That's it.
              </h3> */}
              <p className="text-base text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                Admins drag and drop manuals, SOPs, and service documents directly into xOpsentia's upload interface. The files are received and processed within your own infrastructure — not routed through any external service.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                Once ingested, your documents become searchable by technicians and queryable by the AI assistant — all from within your environment. You can add, update, or remove documents at any time without involving xOpsentia.
              </p>
            </div>
            <div className="flex-1 w-full">
              <UploadScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Data residency */}
      <div className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading
                label="Data residency"
                title="Everything stays inside your boundary"
              />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                xOpsentia's architecture is designed so that no document content, no query, and no AI response ever leaves your network perimeter. The intelligence layer runs where your data lives — full stop.
              </p>
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                This matters in regulated environments where data classification rules, audit requirements, or network segmentation prevent external transmission. xOpsentia is built for exactly those environments.
              </p>

              {/* Key commitments */}
              <div className="space-y-3">
                {[
                  "No document content sent to xOpsentia servers",
                  "No external model training on your data",
                  "Works in air-gapped and restricted networks",
                  "Full data residency within your infrastructure",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div
                      className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(13,148,136,0.12)" }}
                    >
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5L3.5 6.5L7.5 2" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span className="text-sm text-gray-600" style={{ lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full">
              <DataResidencyScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Admin control */}
      <div className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading
                label="Governance"
                title="Your admins control the knowledge layer"
              />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                Access to documents isn't managed by xOpsentia — it's managed by your admin users. They decide what gets ingested, what technicians can query, and what gets restricted or removed.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                Document governance within xOpsentia is a direct reflection of the controls your organization already maintains. There's no shadow knowledge layer, no cached content on external servers, and no dependency on us to keep your knowledge base up to date.
              </p>
            </div>
            <div className="flex-1 w-full">
              <AdminControlScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Practice bullets */}
      <div className="py-16 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.4)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 max-w-sm">
              <SectionHeading label="In practice" title="What data privacy looks like in xOpsentia" />
            </div>
            <div className="flex-1">
              <PracticeBullets items={practiceItems} />
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="text-xl text-gray-900 tracking-tight"
            style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
          >
            Want to see how it works in your environment?
          </p>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: "#0D9488", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}
          >
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 2l5 5-5 5"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}