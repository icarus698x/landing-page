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

// ── Screenshot 1: Full dashboard ──────────────────────────────────────────────
function DashboardFullScreenshot() {
  const issues = [
    { id: "#047", unit: "COMP-EX 220", tech: "James R.", status: "Escalated", time: "42 min" },
    { id: "#046", unit: "HYD-PRO 450", tech: "Maria L.", status: "Active", time: "18 min" },
    { id: "#045", unit: "VAL-SYS 88", tech: "Omar K.", status: "Ongoing", time: "1h 12m" },
    { id: "#044", unit: "COMP-EX 110", tech: "Priya M.", status: "Resolved", time: "—" },
    { id: "#043", unit: "HYD-PRO 320", tech: "Li W.", status: "Resolved", time: "—" },
  ];

  const statusStyle: Record<string, { bg: string; color: string }> = {
    Escalated: { bg: "rgba(139,92,246,0.1)", color: "#7c3aed" },
    Active: { bg: "rgba(13,148,136,0.1)", color: "#0D9488" },
    Ongoing: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
    Resolved: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
  };

  return (
    <ScreenshotFrame>
      <WindowChrome title="Operations Dashboard" />
      <div className="p-4 space-y-4" style={{ minHeight: 420 }}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700">Operations Overview</p>
            <p className="text-[10px] text-gray-400">Live · Updated just now · All sites</p>
          </div>
          <div className="flex gap-2">
            {["Today", "7 days", "30 days"].map((t, i) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[10px] font-medium cursor-pointer"
                style={
                  i === 0
                    ? { background: "rgba(13,148,136,0.1)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.2)" }
                    : { background: "#f1f5f9", color: "#94a3b8" }
                }
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Metric cards */}
        <div className="grid grid-cols-4 gap-3">
          {[
            { label: "Active Issues", value: "12", sub: "+3 this hour", color: "#0D9488", bg: "rgba(13,148,136,0.08)" },
            { label: "Avg. Resolution", value: "18m", sub: "↓ 4m vs last week", color: "#6366f1", bg: "rgba(99,102,241,0.08)" },
            { label: "First-Time Fix", value: "84%", sub: "↑ 6% this month", color: "#16a34a", bg: "rgba(34,197,94,0.08)" },
            { label: "Escalation Rate", value: "11%", sub: "↓ 2% vs last week", color: "#ea580c", bg: "rgba(234,88,12,0.08)" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-3"
              style={{ background: m.bg, border: `1px solid ${m.bg.replace("0.08", "0.2")}` }}
            >
              <p className="text-lg font-bold" style={{ color: m.color }}>{m.value}</p>
              <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">{m.label}</p>
              <p className="text-[8px] mt-1" style={{ color: m.color, opacity: 0.8 }}>{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2">
          {[
            { label: "All Issues", count: "48" },
            { label: "Active", count: "12" },
            { label: "Escalated", count: "3" },
            { label: "Resolved", count: "33" },
          ].map((tab, i) => (
            <div
              key={tab.label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg cursor-pointer"
              style={
                i === 0
                  ? { background: "#0D9488", color: "white" }
                  : { background: "#f1f5f9", color: "#6b7280" }
              }
            >
              <span className="text-[10px] font-medium">{tab.label}</span>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full"
                style={
                  i === 0
                    ? { background: "rgba(255,255,255,0.25)", color: "white" }
                    : { background: "rgba(0,0,0,0.06)", color: "#6b7280" }
                }
              >
                {tab.count}
              </span>
            </div>
          ))}
        </div>

        {/* Issues table */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div
            className="grid px-4 py-2"
            style={{
              gridTemplateColumns: "60px 1fr 100px 90px 70px",
              borderBottom: "1px solid rgba(0,0,0,0.06)",
              background: "#f8fafc",
            }}
          >
            {["Issue", "Unit / Fault", "Technician", "Status", "Open For"].map((h) => (
              <span key={h} className="text-[9px] text-gray-400 uppercase tracking-wider">{h}</span>
            ))}
          </div>
          {issues.map((issue, i) => (
            <div
              key={issue.id}
              className="grid px-4 py-2.5 items-center bg-white cursor-pointer hover:bg-gray-50 transition-colors"
              style={{
                gridTemplateColumns: "60px 1fr 100px 90px 70px",
                borderBottom: i < issues.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
              }}
            >
              <span className="text-[10px] font-semibold" style={{ color: "#0D9488" }}>{issue.id}</span>
              <div>
                <p className="text-[11px] text-gray-700">{issue.unit}</p>
              </div>
              <span className="text-[10px] text-gray-500">{issue.tech}</span>
              <span
                className="text-[9px] px-2 py-0.5 rounded-full w-fit font-medium"
                style={statusStyle[issue.status]}
              >
                {issue.status}
              </span>
              <span className="text-[10px] text-gray-400">{issue.time}</span>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 2: Metric cards close-up ──────────────────────────────────────
function DashboardMetricsScreenshot() {
  const metrics = [
    {
      label: "Active Issues",
      value: "12",
      trend: "+3 this hour",
      up: true,
      bad: false,
      color: "#0D9488",
      bg: "rgba(13,148,136,0.07)",
      bars: [6, 9, 7, 11, 8, 12, 10, 12],
    },
    {
      label: "Avg. Time to Resolution",
      value: "18m",
      trend: "↓ 4m vs last week",
      up: false,
      bad: false,
      color: "#6366f1",
      bg: "rgba(99,102,241,0.07)",
      bars: [28, 24, 22, 20, 19, 18, 18, 18],
    },
    {
      label: "First-Time Fix Rate",
      value: "84%",
      trend: "↑ 6% this month",
      up: true,
      bad: false,
      color: "#16a34a",
      bg: "rgba(34,197,94,0.07)",
      bars: [70, 72, 74, 76, 78, 80, 82, 84],
    },
    {
      label: "Escalation Rate",
      value: "11%",
      trend: "↓ 2% vs last week",
      up: false,
      bad: false,
      color: "#ea580c",
      bg: "rgba(234,88,12,0.07)",
      bars: [18, 17, 16, 15, 14, 13, 12, 11],
    },
  ];

  return (
    <ScreenshotFrame>
      <WindowChrome title="Operations Dashboard — Metrics" />
      <div className="p-5 grid grid-cols-2 gap-4" style={{ minHeight: 280 }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            className="rounded-xl p-4"
            style={{ background: m.bg, border: `1px solid ${m.color}22` }}
          >
            <p
              className="text-2xl font-bold mb-0.5"
              style={{ color: m.color }}
            >
              {m.value}
            </p>
            <p className="text-[10px] text-gray-500 mb-1">{m.label}</p>
            <p className="text-[9px] font-medium mb-3" style={{ color: m.color }}>
              {m.trend}
            </p>
            {/* Sparkline */}
            <div className="flex items-end gap-0.5 h-8">
              {m.bars.map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${Math.round((h / Math.max(...m.bars)) * 100)}%`,
                    background: idx === m.bars.length - 1 ? m.color : `${m.color}44`,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 3: Analytics breakdown ─────────────────────────────────────────
function DashboardAnalyticsScreenshot() {
  const byCategory = [
    { label: "Hydraulic Faults", count: 18, pct: 90 },
    { label: "Sensor Errors", count: 12, pct: 60 },
    { label: "Software Faults", count: 8, pct: 40 },
    { label: "Mechanical", count: 6, pct: 30 },
    { label: "Electrical", count: 4, pct: 20 },
  ];

  const byTech = [
    { name: "James R.", issues: 14, resolved: 11, rate: "79%" },
    { name: "Maria L.", issues: 11, resolved: 10, rate: "91%" },
    { name: "Omar K.", issues: 9, resolved: 8, rate: "89%" },
    { name: "Priya M.", issues: 8, resolved: 7, rate: "88%" },
  ];

  return (
    <ScreenshotFrame>
      <WindowChrome title="Operations Dashboard — Analytics" />
      <div className="p-4 grid grid-cols-2 gap-4" style={{ minHeight: 320 }}>
        {/* Left: By fault category */}
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-3">Issues by Fault Category</p>
          <div className="space-y-2.5">
            {byCategory.map((c) => (
              <div key={c.label}>
                <div className="flex justify-between mb-0.5">
                  <span className="text-[10px] text-gray-600">{c.label}</span>
                  <span className="text-[10px] font-semibold text-gray-700">{c.count}</span>
                </div>
                <div className="h-1.5 rounded-full bg-gray-100 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${c.pct}%`, background: "linear-gradient(90deg, #0D9488, #14b8a6)" }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Most referenced manuals */}
          <div className="mt-5">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Most Referenced Manuals</p>
            <div className="space-y-1.5">
              {[
                { name: "HYD-PRO_450_Service_Manual.pdf", refs: 34 },
                { name: "COMP-EX_220_Technical_Ref.pdf", refs: 21 },
                { name: "VAL-SYS_88_Procedures.pdf", refs: 14 },
              ].map((m) => (
                <div key={m.name} className="flex items-center justify-between">
                  <span className="text-[10px] text-gray-500 truncate max-w-[150px]">{m.name}</span>
                  <span
                    className="text-[9px] px-2 py-0.5 rounded-full font-medium shrink-0"
                    style={{ background: "rgba(13,148,136,0.08)", color: "#0D9488" }}
                  >
                    {m.refs} refs
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: By technician */}
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-3">By Technician</p>
          <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
            <div
              className="grid px-3 py-2"
              style={{ gridTemplateColumns: "1fr 50px 55px 45px", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#f8fafc" }}
            >
              {["Name", "Issues", "Resolved", "Rate"].map((h) => (
                <span key={h} className="text-[8px] text-gray-400 uppercase tracking-wider">{h}</span>
              ))}
            </div>
            {byTech.map((t, i) => (
              <div
                key={t.name}
                className="grid px-3 py-2 items-center bg-white"
                style={{
                  gridTemplateColumns: "1fr 50px 55px 45px",
                  borderBottom: i < byTech.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none",
                }}
              >
                <div className="flex items-center gap-1.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white shrink-0"
                    style={{ background: "#0D9488" }}
                  >
                    {t.name.split(" ").map(w => w[0]).join("")}
                  </div>
                  <span className="text-[10px] text-gray-700">{t.name}</span>
                </div>
                <span className="text-[10px] text-gray-500">{t.issues}</span>
                <span className="text-[10px] text-gray-500">{t.resolved}</span>
                <span className="text-[10px] font-semibold" style={{ color: "#16a34a" }}>{t.rate}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function OperationsDashboardPage() {
  const practiceItems = [
    "A live view of troubleshooting activity across teams",
    "Clear issue states from first prompt to resolution",
    "Better visibility into support load and escalation demand",
    "Metrics that show flow, speed, and quality",
    "Historical records that remain useful after the issue closes",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="9" r="6" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M9 5v4l3 2" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "See active issues as they happen",
      description:
        "Track live troubleshooting activity across the operation instead of waiting for updates through calls or end-of-day summaries. Each issue remains visible while the work is still in progress.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3 14l4-4 3 3 5-7" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      title: "Track the metrics that actually matter",
      description:
        "The dashboard is built around operational measures such as time to first useful response, time to resolution, first-time fix rate, escalation rate, and reopen rate.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="6" height="10" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
          <rect x="10" y="7" width="6" height="7" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M5 4V3M13 7V3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Review patterns across people, faults, and documents",
      description:
        "Surface breakdowns by status, technician, fault category, asset, and most referenced manuals. Understand where recurring friction is building and what kinds of issues are consuming support capacity.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="Operations Dashboard"
        tagline="Make troubleshooting visible across the operation."
        intro="xOpsentia's Operations Dashboard gives managers and senior teams a live view of what is happening across active, ongoing, escalated, and resolved issues."
        ctaLabel="Talk to us"
      />

      {/* Hero screenshot */}
      <div className="py-14" style={{ background: "rgba(248,250,252,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <DashboardFullScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              Instead of troubleshooting disappearing into individual chats, calls, or memory, the dashboard turns repair activity into visible operational records that can be tracked, reviewed, and acted on.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              A repair may begin with one technician and one machine, but the impact rarely stays there. Without visibility, support load builds quietly. Issues age without clear ownership. Escalations pile up. Repeated faults stay hidden inside scattered conversations. Managers are left reacting to symptoms instead of understanding what is happening across the system.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              The Operations Dashboard organizes work around issues, not raw chats. Each issue appears as a visible unit of work with its own title, summary, status, and owner. That gives teams a real-time picture of what is open, what is moving, what is stuck, and where expert support is being pulled in.
            </p>
          </div>
        </div>
      </div>

      {/* Features + metrics screenshot */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Capabilities" title="What the Operations Dashboard helps you do" />

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Metrics with screenshot */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14l4-4 3 3 5-7" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Track the metrics that actually matter
              </h3>
              <p className="text-base text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                The dashboard is built around operational measures such as time to first useful response, time to resolution, first-time fix rate, escalation rate, and reopen rate.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                These show whether troubleshooting is getting faster, cleaner, and less dependent on repeated support — not just whether issues are being closed.
              </p>
            </div>
            <div className="flex-1 w-full">
              <DashboardMetricsScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Why + analytics screenshot */}
      <div className="py-20 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading label="Why it matters" title="Why this matters" />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                The dashboard is what turns xOpsentia from a technician tool into an operational system.
              </p>
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                It gives management something they can actually open every day — a live view of fault activity, support load, and issue flow across the operation.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                That matters because troubleshooting is not only about fixing one machine. It is also about understanding what keeps breaking, where expertise is being consumed, and whether support is improving over time. When those signals become visible, troubleshooting starts to create operational intelligence instead of disappearing after the repair.
              </p>
            </div>
            <div className="flex-1 w-full">
              <DashboardAnalyticsScreenshot />
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

      <PageCTA label="See what operational visibility looks like in practice." buttonLabel="Talk to us" />
    </div>
  );
}
