// Placeholder product screenshot components
// These mimic real product UI — replace with actual screenshots later

export function MockChatUI() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "#0c0c0f", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <span className="text-white/80 text-xs font-medium">AI Assistant</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      {/* Chat area */}
      <div className="p-4 space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div
            className="max-w-[75%] rounded-2xl rounded-tr-sm px-3 py-2 text-xs text-white"
            style={{ background: "#0D9488" }}
          >
            Hydraulic pump showing pressure drop. Unit: HYD-PRO 450. What's the repair procedure?
          </div>
        </div>

        {/* Assistant response */}
        <div className="flex gap-2">
          <div
            className="w-5 h-5 rounded-md shrink-0 flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <div className="rounded-2xl rounded-tl-sm px-3 py-2 bg-white/5 text-xs text-white/80 space-y-1.5">
            <p className="text-white/90">Here is the full repair procedure for pressure drop on HYD-PRO 450:</p>
            <div className="space-y-1 text-white/60">
              <div className="flex gap-2"><span className="text-[#0D9488] font-semibold shrink-0">01</span><span>Shut down unit and depressurise the hydraulic circuit completely.</span></div>
              <div className="flex gap-2"><span className="text-[#0D9488] font-semibold shrink-0">02</span><span>Inspect the pressure relief valve for debris or wear.</span></div>
              <div className="flex gap-2"><span className="text-[#0D9488] font-semibold shrink-0">03</span><span>Check pump inlet strainer — clean or replace if clogged.</span></div>
              <div className="flex gap-2"><span className="text-[#0D9488] font-semibold shrink-0">04</span><span>Verify shaft seal integrity and coupling alignment.</span></div>
            </div>
            <div
              className="mt-2 flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[10px] text-[#0D9488]"
              style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.2)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/></svg>
              Source: HYD-PRO_450_Service_Manual.pdf · Page 34
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 mt-2">
          <div
            className="flex-1 flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white/30"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span>Ask a question or describe the issue...</span>
          </div>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
            style={{ background: "#0D9488" }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6H11M11 6L6.5 1.5M11 6L6.5 10.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MockDocSearchUI() {
  const docs = [
    { name: "HYD-PRO_450_Service_Manual.pdf", pages: "218 pages", match: "High match" },
    { name: "Hydraulic_Systems_SOP_v3.pdf", pages: "64 pages", match: "Medium match" },
    { name: "Pump_Maintenance_Guide_2024.pdf", pages: "91 pages", match: "Medium match" },
    { name: "Valve_Inspection_Procedures.pdf", pages: "33 pages", match: "Low match" },
  ];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "#0c0c0f" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <span className="text-white/80 text-xs font-medium">Knowledge Base</span>
        </div>
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Search bar */}
        <div
          className="flex items-center gap-2 rounded-xl px-3 py-2.5"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(13,148,136,0.3)" }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="5.5" cy="5.5" r="4" stroke="#0D9488" strokeWidth="1.5"/><path d="M9 9L11.5 11.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/></svg>
          <span className="text-xs text-white/60">hydraulic pump pressure drop</span>
          <span className="ml-auto text-[10px] text-white/30">247 documents</span>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2">
          {["All", "Manuals", "SOPs", "Guides"].map((f, i) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium"
              style={
                i === 0
                  ? { background: "rgba(13,148,136,0.15)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.3)" }
                  : { background: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.4)", border: "1px solid rgba(255,255,255,0.08)" }
              }
            >
              {f}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-2">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer group"
              style={{ background: i === 0 ? "rgba(13,148,136,0.07)" : "rgba(255,255,255,0.03)", border: i === 0 ? "1px solid rgba(13,148,136,0.2)" : "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-8 rounded-md flex items-center justify-center" style={{ background: "rgba(255,255,255,0.05)" }}>
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none"><rect x="1" y="1" width="10" height="12" rx="2" stroke={i === 0 ? "#0D9488" : "rgba(255,255,255,0.3)"} strokeWidth="1.2"/><path d="M3.5 4.5H8.5M3.5 7H8.5M3.5 9.5H6.5" stroke={i === 0 ? "#0D9488" : "rgba(255,255,255,0.3)"} strokeWidth="1" strokeLinecap="round"/></svg>
                </div>
                <div>
                  <p className="text-xs text-white/80 truncate max-w-[180px]">{doc.name}</p>
                  <p className="text-[10px] text-white/30">{doc.pages}</p>
                </div>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full"
                style={
                  i === 0
                    ? { background: "rgba(13,148,136,0.15)", color: "#0D9488" }
                    : i === 1 || i === 2
                    ? { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.4)" }
                    : { background: "rgba(255,255,255,0.03)", color: "rgba(255,255,255,0.25)" }
                }
              >
                {doc.match}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function MockExpertUI() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "#0c0c0f" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <span className="text-white/80 text-xs font-medium">Expert Escalation</span>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium"
          style={{ background: "rgba(13,148,136,0.12)", color: "#0D9488", border: "1px solid rgba(13,148,136,0.2)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          Live Session
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Participants */}
        <div className="flex gap-3">
          {[
            { label: "Tech", name: "James R.", role: "Technician", color: "#1d4ed8" },
            { label: "SE", name: "Dr. Patel", role: "Sr. Engineer", color: "#0D9488" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex-1 flex items-center gap-2 rounded-xl p-2.5"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                style={{ background: p.color }}
              >
                {p.label}
              </div>
              <div>
                <p className="text-xs text-white/80 font-medium">{p.name}</p>
                <p className="text-[10px] text-white/40">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Issue context */}
        <div
          className="rounded-xl p-3 space-y-1.5"
          style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-[10px] text-white/40 uppercase tracking-wider">Current Issue</p>
          <p className="text-xs text-white/70">Unit HYD-PRO 450 — pressure drop during peak load. Relief valve suspected.</p>
          <div className="flex gap-2 pt-1">
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(234,179,8,0.1)", color: "#eab308", border: "1px solid rgba(234,179,8,0.2)" }}>High Priority</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.4)" }}>Field Site B</span>
          </div>
        </div>

        {/* Chat */}
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <div className="w-5 h-5 rounded-full bg-[#1d4ed8] flex items-center justify-center text-[8px] font-bold text-white shrink-0">JR</div>
            <div className="rounded-xl rounded-tl-sm px-2.5 py-1.5 bg-white/5 text-[11px] text-white/70 max-w-[80%]">
              Relief valve replaced but pressure still dropping. Should I check the pump shaft?
            </div>
          </div>
          <div className="flex gap-2 items-start flex-row-reverse">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0" style={{ background: "#0D9488" }}>SP</div>
            <div className="rounded-xl rounded-tr-sm px-2.5 py-1.5 text-[11px] text-white max-w-[80%]" style={{ background: "#0D9488" }}>
              Yes — check shaft seal and coupling alignment first. Share a photo of the coupling area.
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex gap-2">
          <div
            className="flex-1 flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-white/30"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
          >
            <span>Type a message...</span>
          </div>
          <button
            className="px-3 py-1.5 rounded-full text-xs text-white font-medium"
            style={{ background: "#0D9488" }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export function MockDashboardUI() {
  const sessions = [
    { id: "SES-001", unit: "HYD-PRO 450", tech: "James R.", status: "Active", time: "12m ago" },
    { id: "SES-002", unit: "COMP-X 200", tech: "Maria L.", status: "Resolved", time: "34m ago" },
    { id: "SES-003", unit: "VAL-SYS 88", tech: "Omar K.", status: "Ongoing", time: "1h ago" },
    { id: "SES-004", unit: "HYD-PRO 320", tech: "Priya M.", status: "Active", time: "2h ago" },
  ];

  const statusColor: Record<string, string> = {
    Active: "#0D9488",
    Resolved: "#22c55e",
    Ongoing: "#eab308",
  };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/10"
      style={{ background: "#0c0c0f" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold text-white"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <span className="text-white/80 text-xs font-medium">Operations Dashboard</span>
        </div>
        <span className="text-[10px] text-white/30">Live · Updated just now</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Metrics row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Sessions", value: "12", color: "#0D9488" },
            { label: "Resolved Today", value: "47", color: "#22c55e" },
            { label: "Avg. Resolution", value: "18m", color: "#6366f1" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-2.5 text-center"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-base font-semibold" style={{ color: m.color }}>{m.value}</p>
              <p className="text-[9px] text-white/40 mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Sessions table */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="grid grid-cols-4 px-3 py-1.5 bg-white/3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
            {["Session", "Unit", "Technician", "Status"].map((h) => (
              <span key={h} className="text-[9px] text-white/30 uppercase tracking-wider">{h}</span>
            ))}
          </div>
          {sessions.map((s, i) => (
            <div
              key={s.id}
              className="grid grid-cols-4 px-3 py-2 items-center"
              style={{ borderBottom: i < sessions.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
            >
              <span className="text-[10px] text-[#0D9488]">{s.id}</span>
              <span className="text-[10px] text-white/70">{s.unit}</span>
              <span className="text-[10px] text-white/50">{s.tech}</span>
              <span
                className="text-[9px] px-1.5 py-0.5 rounded-full w-fit"
                style={{ background: `${statusColor[s.status]}18`, color: statusColor[s.status], border: `1px solid ${statusColor[s.status]}30` }}
              >
                {s.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
