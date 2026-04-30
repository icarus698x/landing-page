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

// ── Screenshot 1: Issue view with escalation button ───────────────────────────
function EscalationIssueScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Expert Escalation" />
      <div className="p-4 space-y-4" style={{ minHeight: 380 }}>
        {/* Issue header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xs font-semibold text-gray-800">Issue #047 — COMP-EX 220 Fault E-003</p>
              <Badge label="Active" color="teal" />
            </div>
            <p className="text-[10px] text-gray-400">Opened by James R. · 42 minutes ago · Field Site B</p>
          </div>
        </div>

        {/* Issue summary card */}
        <div
          className="rounded-xl p-4 space-y-3"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-[10px] text-gray-400 uppercase tracking-wider">Issue Summary</p>
          <p className="text-xs text-gray-700">
            Pressure sensor fault E-003 on COMP-EX 220. Voltage at pin A1 reading 4.1V (expected 5V ±0.25V). Sensor replacement attempted — fault persists. Pressure port inspected and cleared. Technician running Sensor Cal via Service Mode — still unresolved after 40 min.
          </p>
          <div className="flex gap-2 flex-wrap">
            <Badge label="High Priority" color="yellow" />
            <Badge label="Field Site B" color="gray" />
            <Badge label="Fault E-003" color="blue" />
          </div>
        </div>

        {/* Prior steps */}
        <div>
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-2">Steps Taken</p>
          <div className="space-y-1.5">
            {[
              { step: "Verified wiring at J7/J12 — no continuity issue found", done: true },
              { step: "Checked supply voltage at A1: 4.1V (below spec)", done: true },
              { step: "Replaced pressure sensor", done: true },
              { step: "Cleared pressure port blockage", done: true },
              { step: "Running Sensor Cal — fault still active", done: false },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2 text-[11px]">
                <div
                  className="w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: s.done ? "rgba(34,197,94,0.15)" : "rgba(234,179,8,0.15)",
                  }}
                >
                  {s.done ? (
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                      <path d="M1.5 4l2 2 3-3.5" stroke="#16a34a" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <div className="w-2 h-2 rounded-full" style={{ background: "#a16207" }} />
                  )}
                </div>
                <span className={s.done ? "text-gray-500" : "text-gray-700 font-medium"}>{s.step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Escalate button */}
        <div className="flex gap-3 pt-2">
          <button
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center justify-center gap-2"
            style={{ background: "#0D9488", boxShadow: "0 2px 12px rgba(13,148,136,0.3)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 9V3M3 6l3-3 3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Escalate to Expert
          </button>
          <button
            className="px-4 py-2.5 rounded-xl text-xs font-medium text-gray-600"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          >
            Continue Troubleshooting
          </button>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 2: Escalation modal ────────────────────────────────────────────
function EscalationModalScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Escalate Issue #047" />
      <div className="p-5 space-y-4" style={{ minHeight: 360 }}>
        <div>
          <p className="text-xs font-semibold text-gray-800 mb-1">Escalate Issue to Senior Expert</p>
          <p className="text-[10px] text-gray-400">A summary has been generated automatically. Add notes or media before escalating.</p>
        </div>

        {/* Auto-generated summary */}
        <div
          className="rounded-xl p-4 space-y-2"
          style={{ background: "rgba(13,148,136,0.04)", border: "1px solid rgba(13,148,136,0.15)" }}
        >
          <div className="flex items-center gap-2 mb-2">
            <div
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ background: "rgba(13,148,136,0.15)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5h6M5 2l3 3-3 3" stroke="#0D9488" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: "#0D9488" }}>Auto-Generated Handoff Summary</span>
          </div>
          <p className="text-[11px] text-gray-700 font-medium">Issue: COMP-EX 220 — Fault E-003 (Pressure Sensor)</p>
          <p className="text-[11px] text-gray-600" style={{ lineHeight: 1.65 }}>
            Technician James R. has been troubleshooting fault E-003 for 42 minutes. Wiring at J7/J12 confirmed intact. Supply voltage at A1 is 4.1V (below 5V spec). Sensor replaced — fault persists. Pressure port cleared. Sensor Cal running without resolution. Next action unclear — escalating for senior review.
          </p>
        </div>

        {/* Expert selector */}
        <div>
          <p className="text-[10px] text-gray-500 mb-1.5 uppercase tracking-wider">Assign Expert</p>
          <div
            className="flex items-center justify-between rounded-xl px-3.5 py-2.5"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)" }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                style={{ background: "#0D9488" }}
              >
                SP
              </div>
              <div>
                <p className="text-[11px] font-medium text-gray-700">Dr. S. Patel</p>
                <p className="text-[9px] text-gray-400">Sr. Systems Engineer · Available</p>
              </div>
            </div>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 5l3 3 3-3" stroke="#9ca3af" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Notes */}
        <div>
          <p className="text-[10px] text-gray-500 mb-1.5 uppercase tracking-wider">Additional Notes / Media</p>
          <div
            className="rounded-xl px-3.5 py-3 text-[11px] text-gray-400"
            style={{ background: "#fff", border: "1px dashed rgba(0,0,0,0.12)", minHeight: 56 }}
          >
            Add notes or attach photos of the unit...
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white"
            style={{ background: "#0D9488" }}
          >
            Escalate Issue
          </button>
          <button
            className="px-5 py-2.5 rounded-xl text-xs text-gray-500"
            style={{ border: "1px solid rgba(0,0,0,0.1)" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Screenshot 3: Expert view of escalated issue ───────────────────────────────
function ExpertViewScreenshot() {
  return (
    <ScreenshotFrame>
      <WindowChrome title="Expert View — Issue #047" />
      <div className="p-4 space-y-3" style={{ minHeight: 340 }}>
        {/* Issue header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-800">Issue #047 — COMP-EX 220 Fault E-003</p>
            <p className="text-[10px] text-gray-400">Assigned to you · Escalated 3 min ago</p>
          </div>
          <Badge label="Escalated" color="purple" />
        </div>

        {/* Summary for expert */}
        <div
          className="rounded-xl p-3"
          style={{ background: "rgba(139,92,246,0.05)", border: "1px solid rgba(139,92,246,0.15)" }}
        >
          <p className="text-[10px] text-gray-400 mb-1">Handoff Summary</p>
          <p className="text-[11px] text-gray-600" style={{ lineHeight: 1.6 }}>
            Supply voltage at A1 reading 4.1V. Sensor replaced — fault persists. Port cleared. Sensor Cal failed to resolve.
          </p>
        </div>

        {/* Chat thread */}
        <div className="space-y-2.5">
          {/* Technician message */}
          <div className="flex gap-2 items-start">
            <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white shrink-0 mt-0.5">JR</div>
            <div
              className="rounded-xl rounded-tl-sm px-3 py-2.5 text-[11px] text-gray-600 flex-1"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              Sensor Cal completed — still getting E-003. Could this be an upstream power supply issue?
            </div>
          </div>

          {/* Expert response */}
          <div className="flex gap-2 items-start flex-row-reverse">
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0 mt-0.5"
              style={{ background: "#0D9488" }}
            >
              SP
            </div>
            <div
              className="rounded-xl rounded-tr-sm px-3 py-2.5 text-[11px] text-white flex-1"
              style={{ background: "#0D9488" }}
            >
              Yes — trace the 5V supply back to the PSU rail. If rail is dropping under load, you have a PSU fault not a sensor fault. Check PSU output under full operational load. Share a reading.
            </div>
          </div>

          {/* Expert guidance note */}
          <div
            className="flex items-start gap-2 rounded-xl px-3 py-2.5 text-[11px]"
            style={{ background: "rgba(13,148,136,0.05)", border: "1px solid rgba(13,148,136,0.12)" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-0.5">
              <circle cx="6" cy="6" r="5" stroke="#0D9488" strokeWidth="1.2" />
              <path d="M6 4v3M6 8.5v.5" stroke="#0D9488" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-gray-600">Expert guidance visible in the same troubleshooting record — attached to the issue, not lost in a separate chat.</span>
          </div>
        </div>

        {/* Participants */}
        <div className="flex items-center gap-4 pt-1">
          {[
            { label: "JR", name: "James R.", role: "Technician", color: "#3b82f6" },
            { label: "SP", name: "Dr. S. Patel", role: "Sr. Engineer", color: "#0D9488" },
          ].map((p) => (
            <div key={p.name} className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[7px] font-bold text-white"
                style={{ background: p.color }}
              >
                {p.label}
              </div>
              <div>
                <p className="text-[10px] font-medium text-gray-600">{p.name}</p>
                <p className="text-[9px] text-gray-400">{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenshotFrame>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────────
export function ExpertEscalationPage() {
  const practiceItems = [
    "Less time lost during escalation",
    "Less repetition between technician and expert",
    "Faster entry into the real problem",
    "Expert guidance that stays tied to the issue",
    "A clearer support process when the assistant alone is not enough",
  ];

  const features = [
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M9 13V5M5 9l4-4 4 4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <rect x="2" y="13" width="14" height="3" rx="1.5" stroke="#0D9488" strokeWidth="1.5" />
        </svg>
      ),
      title: "Escalate the active issue directly",
      description:
        "The technician does not need to leave the workflow or start a separate support process. Escalation happens inside the same issue where troubleshooting is already in progress.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="2" y="4" width="14" height="10" rx="2" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M5 8h8M5 11h5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Create a structured handoff automatically",
      description:
        "xOpsentia generates a summary of the issue so the senior expert does not begin with a blank screen or a loose transcript. The handoff is organized enough to act on immediately.",
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <circle cx="9" cy="7" r="3" stroke="#0D9488" strokeWidth="1.5" />
          <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
      title: "Keep expert guidance inside the same issue",
      description:
        "Senior technicians can review the issue, use chat if needed, and add guidance in the same context. The technician sees that help without jumping into a different workflow.",
    },
  ];

  return (
    <div className="bg-white">
      <PageHeader
        category="Platform"
        title="Expert Escalation"
        tagline="Bring senior expertise in without restarting the issue."
        intro="xOpsentia's escalation flow helps technicians bring in senior support with the context already attached. Instead of forwarding a transcript or retelling the problem on a call, the technician escalates the active issue inside the same workflow."
        ctaLabel="Talk to us"
      />

      {/* Hero screenshot */}
      <div className="py-14" style={{ background: "rgba(248,250,252,0.6)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <EscalationIssueScreenshot />
        </div>
      </div>

      {/* Extended intro */}
      <div className="py-16 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="max-w-2xl space-y-5">
            <p className="text-base text-gray-600" style={{ lineHeight: 1.8 }}>
              The summary, prior steps, and supporting context move with it.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              In most troubleshooting environments, escalation is where time gets lost. A junior technician reaches the limit of what they can do alone. A senior engineer gets pulled in late. The issue has to be explained again, often across chat, calls, or informal messages. Important details get dropped between handoffs, and expert time gets spent reconstructing context instead of solving the problem.
            </p>
            <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
              xOpsentia is built to make that handoff cleaner. When an issue needs help, the technician can escalate it directly. The platform generates a structured handoff summary, allows additional notes or media to be attached, and keeps the escalated issue inside the same troubleshooting record. Senior experts step into the issue with the problem, prior actions, and current state already visible. That means support starts from context, not confusion.
            </p>
          </div>
        </div>
      </div>

      {/* Feature list */}
      <div className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Capabilities" title="What Expert Escalation helps you do" />

          <div className="grid md:grid-cols-3 gap-5 mb-16">
            {features.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>

          {/* Escalation modal with screenshot */}
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 max-w-md">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(13,148,136,0.08)" }}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <rect x="2" y="4" width="14" height="10" rx="2" stroke="#0D9488" strokeWidth="1.5" />
                  <path d="M6 9h6M9 6v6" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h3
                className="text-gray-900 mb-3"
                style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
              >
                Create a structured handoff automatically
              </h3>
              <p className="text-base text-gray-500 mb-4" style={{ lineHeight: 1.8 }}>
                xOpsentia generates a summary of the issue so the senior expert does not begin with a blank screen or a loose transcript.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                Technicians can attach notes, images, or other supporting media before escalation, making it easier for the expert to understand what is happening on the ground.
              </p>
            </div>
            <div className="flex-1 w-full">
              <EscalationModalScreenshot />
            </div>
          </div>
        </div>
      </div>

      {/* Expert view */}
      <div className="py-20 border-t border-gray-100" style={{ background: "rgba(248,250,252,0.5)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row-reverse items-start gap-12">
            <div className="flex-1 max-w-md">
              <SectionHeading label="Why it matters" title="Why this matters" />
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                The value of expert support is not only having the right person available. It is making sure they enter with enough context to act.
              </p>
              <p className="text-base text-gray-500 mb-5" style={{ lineHeight: 1.8 }}>
                When escalation is informal, expert time gets wasted on reconstruction. When escalation is structured, expert time gets spent on resolution. That difference matters in teams where senior expertise is limited, demand is high, and downtime is costly.
              </p>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                This also makes expert input more reusable. Guidance stays attached to the issue, visible to the technician, and available in history after the problem is resolved. The organization keeps the support value instead of losing it once the call ends.
              </p>
            </div>
            <div className="flex-1 w-full">
              <ExpertViewScreenshot />
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

      <PageCTA label="Ready to make escalation work properly?" buttonLabel="Talk to us" />
    </div>
  );
}
