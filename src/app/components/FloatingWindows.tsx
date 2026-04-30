import { motion, useMotionValue, animate } from "motion/react";

// ─── Shared styles ─────────────────────────────────────────────────────────────
const glassStyle: React.CSSProperties = {
  borderRadius: 13,
  overflow: "hidden",
  background: "rgba(255,255,255,0.82)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.95)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)",
};

const teal         = "#0D9488";
const labelColor   = "#0f172a";
const headerBorder = "1px solid rgba(0,0,0,0.07)";

// ─── Skeleton primitives ──────────────────────────────────────────────────────
function SkBar({ w = "100%", h = 8, className = "" }: { w?: string | number; h?: number; className?: string }) {
  return (
    <div
      className={`rounded-full animate-pulse ${className}`}
      style={{ width: w, height: h, background: "rgba(0,0,0,0.08)" }}
    />
  );
}

function SkCircle({ size = 28 }: { size?: number }) {
  return (
    <div
      className="rounded-full shrink-0 animate-pulse"
      style={{ width: size, height: size, background: "rgba(0,0,0,0.08)" }}
    />
  );
}

function SkRect({ w = "100%", h = 32 }: { w?: string | number; h?: number }) {
  return (
    <div
      className="rounded-lg animate-pulse"
      style={{ width: w, height: h, background: "rgba(0,0,0,0.07)" }}
    />
  );
}

// ─── Window headers ───────────────────────────────────────────────────────────
function WindowHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ borderBottom: headerBorder }}>
      {icon}
      <span className="text-xs font-semibold" style={{ color: labelColor }}>{title}</span>
      <div className="ml-auto flex gap-1">
        {["#fc5c5c", "#fbbf24", "#34d399"].map(c => (
          <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

// ─── Window 1: AI Assistant ───────────────────────────────────────────────────
function AIAssistantWindow() {
  return (
    <div style={{ width: 240 }}>
      <WindowHeader
        title="AI Assistant"
        icon={
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold shrink-0"
            style={{ background: "rgba(13,148,136,0.08)", border: "1px solid rgba(13,148,136,0.18)", color: teal }}>
            xO
          </div>
        }
      />
      <div className="px-3.5 py-3 space-y-3">
        {/* User bubble skeleton */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm px-3 py-2 space-y-1.5"
            style={{ background: "rgba(13,148,136,0.07)", border: "1px solid rgba(13,148,136,0.14)", width: "78%" }}>
            <SkBar w="90%" />
            <SkBar w="60%" />
          </div>
        </div>
        {/* AI reply skeleton */}
        <div className="flex gap-2 items-start">
          <SkCircle size={20} />
          <div className="flex-1 space-y-1.5 pt-1">
            <SkBar w="100%" />
            <SkBar w="82%" />
            <SkBar w="55%" />
          </div>
        </div>
        {/* Second user bubble */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-tr-sm px-3 py-2"
            style={{ background: "rgba(13,148,136,0.07)", border: "1px solid rgba(13,148,136,0.14)", width: "60%" }}>
            <SkBar w="80%" />
          </div>
        </div>
        {/* Typing dots */}
        <div className="flex gap-1 px-1 items-center h-4">
          {[0, 150, 300].map(d => (
            <div key={d} className="w-1.5 h-1.5 rounded-full animate-bounce"
              style={{ background: "rgba(13,148,136,0.35)", animationDelay: `${d}ms` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Window 2: Knowledge Base ─────────────────────────────────────────────────
function KnowledgeBaseWindow() {
  return (
    <div style={{ width: 230 }}>
      <WindowHeader
        title="Knowledge Base"
        icon={
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        }
      />
      <div className="px-3.5 py-3 space-y-2.5">
        {/* Search bar skeleton */}
        <SkRect w="100%" h={26} />
        {/* Result rows */}
        {[0.9, 0.75, 0.6].map((opacity, i) => (
          <div key={i} className="rounded-lg p-2.5" style={{ background: "rgba(0,0,0,0.03)", border: "1px solid rgba(0,0,0,0.06)", opacity }}>
            <div className="flex items-start gap-2">
              <SkRect w={28} h={28} />
              <div className="flex-1 space-y-1.5 pt-0.5">
                <SkBar w="85%" />
                <SkBar w="55%" h={6} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Window 3: Repair Procedure ───────────────────────────────────────────────
function RepairStepsWindow() {
  return (
    <div style={{ width: 236 }}>
      <WindowHeader
        title="Repair Procedure"
        icon={
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
          </svg>
        }
      />
      <div className="px-3.5 py-3 space-y-3">
        {/* Steps */}
        {[true, true, false, false].map((done, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-4 h-4 rounded-full shrink-0 flex items-center justify-center"
              style={{ background: done ? "rgba(13,148,136,0.1)" : "transparent", border: `1.5px solid ${done ? teal : "rgba(0,0,0,0.15)"}` }}>
              {done && (
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none" stroke={teal} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2 5 4 7 8 3"/>
                </svg>
              )}
            </div>
            <SkBar w={`${75 - i * 10}%`} className={done ? "opacity-40" : ""} />
          </div>
        ))}
        {/* Progress bar */}
        <div className="mt-1 h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(0,0,0,0.07)" }}>
          <div className="h-full rounded-full" style={{ width: "50%", background: teal }} />
        </div>
      </div>
    </div>
  );
}

// ─── Window 4: Expert Escalation ─────────────────────────────────────────────
function ExpertEscalationWindow() {
  return (
    <div style={{ width: 228 }}>
      <WindowHeader
        title="Expert Escalation"
        icon={
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
          </svg>
        }
      />
      <div className="px-3.5 py-3 space-y-2.5">
        {/* Issue summary box */}
        <SkRect w="100%" h={44} />
        {/* Expert rows */}
        {[1, 2].map(i => (
          <div key={i} className="flex items-center gap-2.5">
            <SkCircle size={28} />
            <div className="flex-1 space-y-1.5">
              <SkBar w="65%" />
              <SkBar w="45%" h={6} />
            </div>
            <div className="space-y-1 items-end flex flex-col">
              <div className="w-2 h-2 rounded-full" style={{ background: i === 1 ? "#34d399" : "#cbd5e1" }} />
              <SkBar w={32} h={6} />
            </div>
          </div>
        ))}
        {/* CTA */}
        <SkRect w="100%" h={28} />
      </div>
    </div>
  );
}

// ─── Window 5: Issues ────────────────────────────────────────────────────────
function IssuesWindow() {
  return (
    <div style={{ width: 244 }}>
      <WindowHeader
        title="Issues"
        icon={
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={teal} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        }
      />
      <div className="px-3.5 py-3 space-y-2.5">
        {/* Filter bar */}
        <div className="flex gap-1.5">
          <SkRect w={56} h={22} />
          <SkRect w={56} h={22} />
          <SkRect w={56} h={22} />
        </div>
        {/* Issue rows */}
        {[1, 2, 3].map(i => (
          <div key={i} className="rounded-lg p-2.5 flex items-start gap-2.5"
            style={{ background: i === 1 ? "rgba(13,148,136,0.05)" : "rgba(0,0,0,0.03)", border: `1px solid ${i === 1 ? "rgba(13,148,136,0.12)" : "rgba(0,0,0,0.06)"}` }}>
            <div className="w-1.5 self-stretch rounded-full shrink-0"
              style={{ background: i === 1 ? teal : i === 2 ? "#f59e0b" : "#cbd5e1" }} />
            <div className="flex-1 space-y-1.5">
              <SkBar w="80%" />
              <SkBar w="55%" h={6} />
            </div>
            <SkCircle size={20} />
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Individual floating window (bob only, draggable) ─────────────────────────
interface WindowProps {
  children: React.ReactNode;
  x: string | number;
  y: string | number;
  bobY: number;
  duration: number;
  delay: number;
}

function FloatingWindow({ children, x, y, bobY, duration, delay }: WindowProps) {
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  function handleDragEnd() {
    animate(dragX, 0, { type: "spring", stiffness: 55, damping: 18 });
    animate(dragY, 0, { type: "spring", stiffness: 55, damping: 18 });
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0.06}
      onDragEnd={handleDragEnd}
      whileDrag={{ zIndex: 30, cursor: "grabbing" }}
      style={{
        x: dragX,
        y: dragY,
        position: "absolute",
        left: x,
        top: y,
        zIndex: 5,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, -bobY, 0] }}
        transition={{
          opacity: { duration: 0.7, delay },
          y: { duration, repeat: Infinity, ease: "easeInOut", delay },
        }}
        style={{ ...glassStyle, cursor: "grab" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

// ─── Exported layout ──────────────────────────────────────────────────────────
export function FloatingWindows() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      <div style={{ position: "relative", width: "100%", height: "100%", pointerEvents: "auto" }}>

        {/* AI Assistant — upper left */}
        <FloatingWindow x="10%" y="50%" bobY={10} duration={8} delay={10}>
          <AIAssistantWindow />
        </FloatingWindow>

        {/* Knowledge Base — upper right */}
        <FloatingWindow x="78%" y="59%" bobY={12} duration={9.5} delay={0.6}>
          <KnowledgeBaseWindow />
        </FloatingWindow>

        {/* Issues — mid left, slightly inset */}
        <FloatingWindow x="2%" y="67%" bobY={9} duration={10} delay={1.9}>
          <IssuesWindow />
        </FloatingWindow>

        {/* Repair Procedure — lower right */}
        <FloatingWindow x="73%" y="40%" bobY={10} duration={8.5} delay={1}>
          <RepairStepsWindow />
        </FloatingWindow>

        {/* Expert Escalation — bottom center-right, offset */}
        <FloatingWindow x="56%" y="68%" bobY={14} duration={11} delay={0.8}>
          <ExpertEscalationWindow />
        </FloatingWindow>

      </div>
    </div>
  );
}
