import {
  PageHeader,
  SectionHeading,
  PageCTA,
  PracticeBullets,
  ScreenshotFrame,
  WindowChrome,
  Badge,
} from "../components/PageShell";

// ── Screenshot: Citations ──────────────────────────────────────────────────────
function CitationsScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Citations — Source Preview" />
      <div className="flex" style={{ minHeight: 240 }}>
        {/* Chat pane */}
        <div
          className="flex-1 p-4 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
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
              <p className="text-gray-700">Check shaft seal integrity using dial indicator — max runout 0.05 mm...</p>
              <div
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] cursor-pointer"
                style={{ background: "rgba(13,148,136,0.08)", border: "1.5px solid #0D9488", color: "#0D9488" }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <rect x="1" y="1" width="8" height="8" rx="1.2" stroke="#0D9488" strokeWidth="1.2" />
                  <path d="M2.5 3.5h5M2.5 5h5M2.5 6.5h3" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="font-semibold">HYD-PRO_450 · §4.2.3 — Page 34</span>
                <span className="ml-auto text-[9px]">↗ Open</span>
              </div>
            </div>
          </div>
        </div>
        {/* Source pane */}
        <div className="flex-1 p-4" style={{ background: "rgba(248,250,252,0.8)" }}>
          <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-2">Source · §4.2.3</p>
          <div
            className="rounded-xl p-3 text-[10px]"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <p className="text-gray-500 leading-relaxed mb-2">Before inspection, confirm zero bar circuit pressure.</p>
            <div
              className="p-2 rounded-lg leading-relaxed"
              style={{ background: "rgba(250,204,21,0.18)", border: "1px solid rgba(234,179,8,0.35)" }}
            >
              <strong>Shaft seal integrity:</strong> Inspect for leakage or scoring. Check coupling alignment — maximum permissible runout <strong>0.05 mm</strong>. Misalignment will cause accelerated seal wear.
            </div>
            <p className="text-gray-400 mt-2 leading-relaxed">If misalignment detected, re-align before retorquing (see Table 4-7).</p>
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot: Role-based access ──────────────────────────────────────────────
function RoleAccessScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Role-Based Access" />
      <div className="grid grid-cols-2" style={{ minHeight: 220 }}>
        {/* Technician view */}
        <div
          className="p-4 space-y-3"
          style={{ borderRight: "1px solid rgba(0,0,0,0.06)" }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
              style={{ background: "#3b82f6" }}
            >
              JR
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-700">James R.</p>
              <Badge label="Technician" color="blue" />
            </div>
          </div>
          <div className="space-y-1.5">
            {[
              { label: "AI Assistant", on: true },
              { label: "Knowledge Base", on: true },
              { label: "Escalate Issue", on: true },
              { label: "Operations Dashboard", on: false },
              { label: "Admin — Documents", on: false },
              { label: "User Management", on: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-[10px] text-gray-600">{item.label}</span>
                <span
                  className="text-[8px] px-1.5 py-0.5 rounded font-medium"
                  style={
                    item.on
                      ? { background: "rgba(13,148,136,0.1)", color: "#0D9488" }
                      : { background: "#f1f5f9", color: "#94a3b8" }
                  }
                >
                  {item.on ? "✓ Access" : "No access"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Manager view */}
        <div className="p-4 space-y-3">
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
              style={{ background: "#0D9488" }}
            >
              AM
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-700">A. Malik</p>
              <Badge label="Manager" color="teal" />
            </div>
          </div>
          <div className="space-y-1.5">
            {[
              { label: "AI Assistant", on: true },
              { label: "Knowledge Base", on: true },
              { label: "Escalate Issue", on: true },
              { label: "Operations Dashboard", on: true },
              { label: "Admin — Documents", on: true },
              { label: "User Management", on: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-1 border-b border-gray-50">
                <span className="text-[10px] text-gray-600">{item.label}</span>
                <span
                  className="text-[8px] px-1.5 py-0.5 rounded font-medium"
                  style={
                    item.on
                      ? { background: "rgba(13,148,136,0.1)", color: "#0D9488" }
                      : { background: "#f1f5f9", color: "#94a3b8" }
                  }
                >
                  {item.on ? "✓ Access" : "No access"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot: Session recording + status ─────────────────────────────────────
function SessionHistoryScreenshot() {
  const events = [
    { time: "09:14", actor: "James R.", event: "Session started — COMP-EX 220 · Fault E-003", type: "open" },
    { time: "09:16", actor: "xOpsentia", event: "Answer returned — E-003 troubleshooting path · §6.3", type: "ai" },
    { time: "09:28", actor: "James R.", event: "Sensor replaced — fault still active", type: "note" },
    { time: "09:32", actor: "James R.", event: "Issue escalated to Dr. S. Patel", type: "escalate" },
    { time: "09:39", actor: "Dr. S. Patel", event: "Expert guidance: check PSU rail under load", type: "expert" },
    { time: "09:51", actor: "James R.", event: "PSU fault confirmed — unit referred for PSU replacement", type: "resolve" },
    { time: "09:56", actor: "James R.", event: "Session closed — Issue resolved", type: "close" },
  ];

  const typeStyle: Record<string, { dot: string; bg: string }> = {
    open: { dot: "#0D9488", bg: "rgba(13,148,136,0.06)" },
    ai: { dot: "#6366f1", bg: "rgba(99,102,241,0.05)" },
    note: { dot: "#94a3b8", bg: "transparent" },
    escalate: { dot: "#7c3aed", bg: "rgba(139,92,246,0.05)" },
    expert: { dot: "#0D9488", bg: "rgba(13,148,136,0.04)" },
    resolve: { dot: "#16a34a", bg: "rgba(34,197,94,0.05)" },
    close: { dot: "#16a34a", bg: "rgba(34,197,94,0.08)" },
  };

  return (
    <ScreenshotFrame>
      <WindowChrome title="Session History — Issue #047" />
      <div className="p-4" style={{ minHeight: 280 }}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-xs font-semibold text-gray-700">Issue #047 — COMP-EX 220</p>
            <p className="text-[10px] text-gray-400">Session duration: 42 min · 7 events</p>
          </div>
          <Badge label="Resolved" color="green" />
        </div>
        <div className="space-y-1">
          {events.map((e, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg px-3 py-2"
              style={{ background: typeStyle[e.type].bg }}
            >
              <div className="flex flex-col items-center shrink-0 pt-0.5">
                <div
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: typeStyle[e.type].dot }}
                />
                {i < events.length - 1 && (
                  <div className="w-px flex-1 mt-1" style={{ background: "rgba(0,0,0,0.06)", minHeight: 12 }} />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-[9px] text-gray-400">{e.time}</span>
                  <span className="text-[9px] font-medium text-gray-500">{e.actor}</span>
                </div>
                <p className="text-[10px] text-gray-600 mt-0.5">{e.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot: Report generation ──────────────────────────────────────────────
function ReportScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Issue Report — #047" />
      <div className="p-4 space-y-3" style={{ minHeight: 260 }}>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700">Completed Issue Report</p>
            <p className="text-[10px] text-gray-400">Auto-generated · Issue #047 · 25 Apr 2026</p>
          </div>
          <button
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] font-semibold text-white"
            style={{ background: "#0D9488" }}
          >
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 1v6M2.5 5l2.5 2.5L7.5 5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
              <path d="M1 8.5h8" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Export PDF
          </button>
        </div>

        <div
          className="rounded-xl p-4 space-y-4"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}
        >
          {/* Report sections */}
          {[
            {
              section: "Fault Summary",
              content: "COMP-EX 220 presented with fault E-003 (Pressure Sensor) at Field Site B. Technician confirmed below-spec supply voltage at pin A1 (4.1V). Sensor replacement did not resolve fault.",
            },
            {
              section: "Steps Taken",
              content: "Wiring check (J7/J12) → Voltage measurement → Sensor replacement → Port inspection → Sensor Cal → Expert escalation → PSU rail check",
            },
            {
              section: "Root Cause",
              content: "PSU rail voltage drop under full operational load — not a sensor fault. Unit referred for PSU replacement.",
            },
            {
              section: "Resolution",
              content: "PSU replacement scheduled. Issue closed after 42 minutes. First-time fix not achieved — escalation required.",
            },
          ].map((sec) => (
            <div key={sec.section} className="pb-3 border-b border-gray-50 last:border-0 last:pb-0">
              <p className="text-[9px] text-gray-400 uppercase tracking-wider mb-1">{sec.section}</p>
              <p className="text-[11px] text-gray-700 leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Duration", value: "42 min" },
            { label: "Escalated", value: "Yes" },
            { label: "Sources Used", value: "3 docs" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-lg px-3 py-2 text-center"
              style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.1)" }}
            >
              <p className="text-xs font-semibold text-gray-700">{m.value}</p>
              <p className="text-[9px] text-gray-400">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Feature sections ───────────────────────────────────────────────────────────
const featureSections = [
  {
    id: "citations",
    title: "Citations",
    body: [
      "Every answer can link back to the exact source used.",
      "That means technicians are not asked to trust an answer blindly. They can open the cited source, review the relevant section, and continue troubleshooting in the same workflow. In document-heavy environments, that matters because credibility comes from being able to verify the answer against the approved manual, not just receiving a fluent response.",
    ],
    screenshot: <CitationsScreenshot />,
    flip: false,
  },
  {
    id: "role-access",
    title: "Role-based access",
    body: [
      "Each user should see the screens and actions relevant to their job.",
      "xOpsentia supports role-specific access across the platform so technicians, senior technicians, managers, and admins do not all interact with the same controls in the same way. That keeps the frontline experience simpler while still giving support and admin teams the access they need for oversight, escalation, and document governance.",
    ],
    screenshot: <RoleAccessScreenshot />,
    flip: true,
  },
  {
    id: "session-recording",
    title: "Session recording & session status",
    body: [
      "Troubleshooting should not disappear once the issue is resolved.",
      "xOpsentia keeps a retained record of the session so teams can review what happened, what was tried, what sources were used, and how the issue moved toward resolution. That history supports traceability, follow-up, and stronger organizational memory over time.",
      "Each issue moves through a visible lifecycle — Active, Ongoing, Escalated, and Resolved — giving technicians, experts, and managers a shared view of where the issue stands.",
    ],
    screenshot: <SessionHistoryScreenshot />,
    flip: false,
  },
  {
    id: "report",
    title: "Report generation",
    body: [
      "Completed troubleshooting work should be easier to review and share.",
      "xOpsentia can turn completed issue activity into a structured summary so teams do not have to reconstruct the session manually after the fact. That makes it easier to document what happened, communicate the outcome, and retain the repair record in a more usable format.",
    ],
    screenshot: <ReportScreenshot />,
    flip: true,
  },
];

// ── Page ───────────────────────────────────────────────────────────────────────
export function MoreFeaturesPage() {
  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="More Features"
        tagline="The platform details that make troubleshooting usable in production."
        intro="xOpsentia's core value starts with grounded repair guidance, document discovery, expert support, and operational visibility. Around that core, the platform also includes the supporting features teams need once troubleshooting becomes part of real work."
        ctaLabel="See xOpsentia in action"
      />

      {/* Intro section */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              These are not the reason teams first pay attention to xOpsentia. They are the reason the system stays practical once people begin using it across technicians, experts, and managers.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              Source-linked answers, role-based access, retained session history, clear issue states, and structured reporting. Together, they are what make the platform usable beyond a single successful answer.
            </p>
          </div>
        </div>
      </div>

      {/* Feature sections with alternating screenshots */}
      <div className="divide-y divide-gray-100">
        {featureSections.map((feature, idx) => (
          <div
            key={feature.id}
            className="py-20"
            style={{ background: idx % 2 === 0 ? "#fff" : "rgba(248,250,252,0.4)" }}
          >
            <div className="max-w-5xl mx-auto px-6">
              <div
                className={`flex flex-col ${feature.flip ? "lg:flex-row-reverse" : "lg:flex-row"} items-start gap-12`}
              >
                {/* Text */}
                <div className="flex-1 max-w-md">
                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-5"
                    style={{ background: "rgba(13,148,136,0.08)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.15)" }}
                  >
                    Platform Feature
                  </div>
                  <h2
                    className="text-gray-900 mb-5 tracking-tight"
                    style={{ fontWeight: 700, fontSize: "24px", lineHeight: 1.3, letterSpacing: "-0.025em" }}
                  >
                    {feature.title}
                  </h2>
                  {feature.body.map((para, i) => (
                    <p
                      key={i}
                      className="text-base text-gray-500 mb-4 last:mb-0"
                      style={{ lineHeight: 1.8 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>

                {/* Screenshot */}
                <div className="flex-1 w-full">{feature.screenshot}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Why section */}
      <div className="py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="flex-1 max-w-sm">
              <SectionHeading
                label="Why these features matter"
                title="Why these features matter"
              />
            </div>
            <div className="flex-1">
              <div className="space-y-5">
                <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
                  On their own, these are supporting features.
                </p>
                <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                  Together, they are what make the platform usable beyond a single successful answer. They help keep troubleshooting verifiable, controlled, visible, and easier to retain after the immediate repair is over. That is what moves xOpsentia from a helpful interface to a system teams can actually operate with.
                </p>
                <PracticeBullets
                  items={[
                    "Citations keep answers verifiable against approved sources",
                    "Role-based access keeps the frontline experience focused",
                    "Session recording supports traceability and organizational memory",
                    "Issue status gives everyone a shared view of where work stands",
                    "Report generation makes completed work easier to review and retain",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <PageCTA label="See all of xOpsentia working together." buttonLabel="See xOpsentia in action" />
    </div>
  );
}
