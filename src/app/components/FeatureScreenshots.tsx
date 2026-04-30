// Feature-specific screenshot placeholders
// Replace with actual product screenshots when ready

export function ChatScreenshot() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.09), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {/* Chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.85)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div
          className="ml-3 h-4 rounded-full flex items-center px-3"
          style={{ background: "rgba(0,0,0,0.05)", minWidth: 150 }}
        >
          <span className="text-[9px] text-gray-400">AI Assistant · xOpsentia</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div
            className="max-w-[78%] rounded-2xl rounded-tr-sm px-3.5 py-2.5 text-xs text-white"
            style={{ background: "#0D9488" }}
          >
            Hydraulic pump showing pressure drop on HYD-PRO 450. What's the repair procedure?
          </div>
        </div>

        {/* AI response */}
        <div className="flex gap-2.5">
          <div
            className="w-6 h-6 rounded-lg shrink-0 flex items-center justify-center text-[9px] font-bold text-white mt-0.5"
            style={{ background: "linear-gradient(135deg,#0D9488,#065f46)" }}
          >
            xO
          </div>
          <div
            className="rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-xs space-y-2 max-w-[85%]"
            style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
          >
            <p className="text-gray-700">Full repair procedure for HYD-PRO 450 pressure drop:</p>
            <div className="space-y-1.5 text-gray-500">
              {[
                "Shut down unit and depressurise the hydraulic circuit.",
                "Inspect the pressure relief valve for debris or wear.",
                "Check pump inlet strainer — clean or replace if clogged.",
                "Verify shaft seal integrity and coupling alignment.",
              ].map((step, i) => (
                <div key={i} className="flex gap-2">
                  <span className="text-[10px] font-bold shrink-0" style={{ color: "#0D9488" }}>
                    0{i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            {/* Citation */}
            <div
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px]"
              style={{
                background: "rgba(13,148,136,0.06)",
                border: "1px solid rgba(13,148,136,0.15)",
                color: "#0D9488",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="2" y="2" width="6" height="6" rx="1" stroke="#0D9488" strokeWidth="1.2" />
                <path d="M3.5 4h3M3.5 6h2" stroke="#0D9488" strokeWidth="1" strokeLinecap="round" />
              </svg>
              Source: HYD-PRO_450_Service_Manual.pdf · Page 34
            </div>
          </div>
        </div>

        {/* Input */}
        <div
          className="flex items-center gap-2 rounded-full px-4 py-2.5 mt-2"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.1)" }}
        >
          <span className="text-xs text-gray-300 flex-1">Ask a question or describe the issue...</span>
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
  );
}

export function DocSearchScreenshot() {
  const docs = [
    { name: "HYD-PRO_450_Service_Manual.pdf", pages: "218 pages", match: "Best match", active: true },
    { name: "Hydraulic_Systems_SOP_v3.pdf", pages: "64 pages", match: "Good match", active: false },
    { name: "Pump_Maintenance_Guide_2024.pdf", pages: "91 pages", match: "Related", active: false },
    { name: "Valve_Inspection_Procedures.pdf", pages: "33 pages", match: "Related", active: false },
  ];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.09), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.85)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div
          className="ml-3 h-4 rounded-full flex items-center px-3"
          style={{ background: "rgba(0,0,0,0.05)", minWidth: 150 }}
        >
          <span className="text-[9px] text-gray-400">Knowledge Base · xOpsentia</span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Search */}
        <div
          className="flex items-center gap-2 rounded-xl px-3.5 py-2.5"
          style={{ background: "#fff", border: "1px solid rgba(13,148,136,0.3)", boxShadow: "0 0 0 3px rgba(13,148,136,0.06)" }}
        >
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="5.5" cy="5.5" r="4" stroke="#0D9488" strokeWidth="1.5" />
            <path d="M9 9L11.5 11.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="text-xs text-gray-500">hydraulic pump pressure drop</span>
          <span className="ml-auto text-[10px] text-gray-300">247 docs</span>
        </div>

        {/* Filters */}
        <div className="flex gap-2">
          {["All", "Manuals", "SOPs", "Guides"].map((f, i) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-full text-[10px] font-medium cursor-pointer"
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

        {/* Results */}
        <div className="space-y-2">
          {docs.map((doc, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl px-3 py-2.5 cursor-pointer"
              style={{
                background: doc.active ? "rgba(13,148,136,0.05)" : "#fff",
                border: doc.active ? "1px solid rgba(13,148,136,0.18)" : "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-7 h-8 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: doc.active ? "rgba(13,148,136,0.08)" : "#f1f5f9" }}
                >
                  <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                    <rect x="1" y="1" width="10" height="12" rx="2" stroke={doc.active ? "#0D9488" : "#94a3b8"} strokeWidth="1.2" />
                    <path d="M3.5 4.5H8.5M3.5 7H8.5M3.5 9.5H6.5" stroke={doc.active ? "#0D9488" : "#94a3b8"} strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-700 truncate max-w-[180px]">{doc.name}</p>
                  <p className="text-[10px] text-gray-400">{doc.pages}</p>
                </div>
              </div>
              <span
                className="text-[10px] px-2 py-0.5 rounded-full shrink-0"
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
      </div>
    </div>
  );
}

export function ExpertScreenshot() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.09), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.85)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
          <span className="text-[9px] text-gray-400 ml-2">Expert Escalation · xOpsentia</span>
        </div>
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold"
          style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] animate-pulse" />
          Live Issue
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* Participants */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "JR", name: "James R.", role: "Technician", color: "#3b82f6" },
            { label: "SP", name: "Dr. Patel", role: "Sr. Engineer", color: "#0D9488" },
          ].map((p) => (
            <div
              key={p.name}
              className="flex items-center gap-2 rounded-xl p-2.5"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0"
                style={{ background: p.color }}
              >
                {p.label}
              </div>
              <div>
                <p className="text-xs text-gray-700 font-medium">{p.name}</p>
                <p className="text-[10px] text-gray-400">{p.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Issue tag */}
        <div
          className="rounded-xl p-3"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
        >
          <p className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Current Issue</p>
          <p className="text-xs text-gray-600">Unit HYD-PRO 450 — pressure drop during peak load. Relief valve suspected.</p>
          <div className="flex gap-2 mt-2">
            <span className="text-[10px] px-2 py-0.5 rounded-full" style={{ background: "#fef9c3", color: "#a16207" }}>High Priority</span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Field Site B</span>
          </div>
        </div>

        {/* Chat */}
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-bold text-white shrink-0">JR</div>
            <div
              className="rounded-xl rounded-tl-sm px-2.5 py-2 text-[11px] text-gray-600 max-w-[80%]"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              Relief valve replaced but pressure still dropping. Should I check the pump shaft?
            </div>
          </div>
          <div className="flex gap-2 items-start flex-row-reverse">
            <div className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shrink-0" style={{ background: "#0D9488" }}>SP</div>
            <div className="rounded-xl rounded-tr-sm px-2.5 py-2 text-[11px] text-white max-w-[80%]" style={{ background: "#0D9488" }}>
              Yes — check shaft seal and coupling alignment. Share a photo of the coupling area.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function DashboardScreenshot() {
  const Issues = [
    { id: "#001", unit: "HYD-PRO 450", tech: "James R.", status: "Active" },
    { id: "#002", unit: "COMP-X 200", tech: "Maria L.", status: "Resolved" },
    { id: "#003", unit: "VAL-SYS 88", tech: "Omar K.", status: "Ongoing" },
    { id: "#004", unit: "HYD-PRO 320", tech: "Priya M.", status: "Active" },
  ];

  const statusStyle: Record<string, { bg: string; color: string }> = {
    Active: { bg: "rgba(13,148,136,0.1)", color: "#0D9488" },
    Resolved: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
    Ongoing: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
  };

  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.09), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="flex items-center justify-between px-4 py-2.5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.85)" }}
      >
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
          <span className="text-[9px] text-gray-400 ml-2">Operations Dashboard · xOpsentia</span>
        </div>
        <span className="text-[9px] text-gray-300">Live · Updated now</span>
      </div>

      <div className="p-4 space-y-3">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: "Active Issues", value: "12", color: "#0D9488" },
            { label: "Resolved Today", value: "47", color: "#16a34a" },
            { label: "Avg. Resolution", value: "18m", color: "#6366f1" },
          ].map((m) => (
            <div
              key={m.label}
              className="rounded-xl p-3 text-center"
              style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.07)" }}
            >
              <p className="text-base font-bold" style={{ color: m.color }}>{m.value}</p>
              <p className="text-[9px] text-gray-400 mt-0.5 leading-tight">{m.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="rounded-xl overflow-hidden" style={{ border: "1px solid rgba(0,0,0,0.07)" }}>
          <div className="grid grid-cols-4 px-3 py-2 bg-gray-50" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            {["Issue", "Unit", "Technician", "Status"].map((h) => (
              <span key={h} className="text-[9px] text-gray-400 uppercase tracking-wider">{h}</span>
            ))}
          </div>
          {Issues.map((s, i) => (
            <div
              key={s.id}
              className="grid grid-cols-4 px-3 py-2 items-center bg-white"
              style={{ borderBottom: i < Issues.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}
            >
              <span className="text-[10px] font-medium" style={{ color: "#0D9488" }}>{s.id}</span>
              <span className="text-[10px] text-gray-600">{s.unit}</span>
              <span className="text-[10px] text-gray-400">{s.tech}</span>
              <span
                className="text-[9px] px-2 py-0.5 rounded-full w-fit font-medium"
                style={{ background: statusStyle[s.status].bg, color: statusStyle[s.status].color }}
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