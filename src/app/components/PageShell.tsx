import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

// Shared window chrome for all mock screenshots
export function WindowChrome({ title }: { title: string }) {
  return (
    <div
      className="flex items-center gap-1.5 px-4 py-2.5 shrink-0"
      style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.9)" }}
    >
      <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
      <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
      <div
        className="ml-3 h-4 rounded-full flex items-center px-3"
        style={{ background: "rgba(0,0,0,0.05)", minWidth: 160 }}
      >
        <span className="text-[9px] text-gray-400">{title} · xOpsentia</span>
      </div>
    </div>
  );
}

// Shared screenshot wrapper
export function ScreenshotFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`xo-screenshot-frame w-full rounded-2xl overflow-hidden ${className}`}
      style={{
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.09), 0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {children}
    </div>
  );
}

// Page header component
interface PageHeaderProps {
  category: string;
  title: string;
  tagline: string;
  intro: string;
  ctaLabel: string;
}

export function PageHeader({ category, title, tagline, intro, ctaLabel }: PageHeaderProps) {
  return (
    <div className="pt-28 pb-14 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
          <span>/</span>
          <span className="text-gray-500">Platform</span>
          <span>/</span>
          <span className="text-gray-700">{title}</span>
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
          style={{
            background: "rgba(13,148,136,0.08)",
            color: "#0D9488",
            border: "1px solid rgba(13,148,136,0.18)",
          }}
        >
          {category}
        </div>

        {/* Headline */}
        <h1
          className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-5"
          style={{ fontWeight: 700, lineHeight: 1.12, letterSpacing: "-0.03em" }}
        >
          {tagline}
        </h1>

        {/* Intro */}
        <p className="text-lg text-gray-500 mb-8 max-w-2xl" style={{ lineHeight: 1.75 }}>
          {intro}
        </p>

        {/* CTA */}
        
      </div>
    </div>
  );
}

// Section heading
export function SectionHeading({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      {label && (
        <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#0D9488" }}>
          {label}
        </p>
      )}
      <h2
        className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-4"
        style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="text-base text-gray-500 max-w-2xl" style={{ lineHeight: 1.75 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Feature card
export function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className="p-6 rounded-2xl"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        background: "#fff",
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
        style={{ background: "rgba(13,148,136,0.08)" }}
      >
        {icon}
      </div>
      <h3
        className="text-gray-900 mb-2"
        style={{ fontWeight: 600, fontSize: "15px" }}
      >
        {title}
      </h3>
      <p className="text-sm text-gray-500" style={{ lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  );
}

// Practice bullets
export function PracticeBullets({ items }: { items: string[] }) {
  return (
    <div
      className="rounded-2xl p-8"
      style={{ background: "rgba(13,148,136,0.03)", border: "1px solid rgba(13,148,136,0.1)" }}
    >
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <div
              className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
              style={{ background: "rgba(13,148,136,0.12)" }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M2 5l2.5 2.5L8 2.5" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm text-gray-700" style={{ lineHeight: 1.7 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Page CTA banner
export function PageCTA({ label, buttonLabel }: { label: string; buttonLabel: string }) {
  return (
    <div className="py-16 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p
          className="text-xl text-gray-900 tracking-tight"
          style={{ fontWeight: 600, letterSpacing: "-0.02em" }}
        >
          {label}
        </p>
        <button
          className="shrink-0 inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
          style={{ background: "#0D9488", boxShadow: "0 4px 20px rgba(13,148,136,0.3)" }}
        >
          {buttonLabel}
          <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

// Teal status badge
export function Badge({
  label,
  color = "teal",
}: {
  label: string;
  color?: "teal" | "green" | "yellow" | "red" | "gray" | "blue" | "purple";
}) {
  const colorMap = {
    teal: { bg: "rgba(13,148,136,0.1)", color: "#0D9488" },
    green: { bg: "rgba(34,197,94,0.1)", color: "#16a34a" },
    yellow: { bg: "rgba(234,179,8,0.12)", color: "#a16207" },
    red: { bg: "rgba(239,68,68,0.1)", color: "#dc2626" },
    gray: { bg: "#f1f5f9", color: "#64748b" },
    blue: { bg: "rgba(59,130,246,0.1)", color: "#2563eb" },
    purple: { bg: "rgba(139,92,246,0.1)", color: "#7c3aed" },
  };
  const s = colorMap[color];
  return (
    <span
      className="text-[10px] px-2.5 py-1 rounded-full font-semibold"
      style={{ background: s.bg, color: s.color }}
    >
      {label}
    </span>
  );
}