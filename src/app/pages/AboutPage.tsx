import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const Logo = () => (
  <svg width="36" height="36" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 9 }}>
    <defs>
      <linearGradient id="bgGradAbout" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#04c4b4"/>
        <stop offset="50%" stopColor="#0D9488"/>
        <stop offset="100%" stopColor="#045f5f"/>
      </linearGradient>
      <linearGradient id="lineGradAbout" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0"/>
        <stop offset="30%" stopColor="white" stopOpacity="0.7"/>
        <stop offset="70%" stopColor="white" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="url(#bgGradAbout)"/>
    <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(45)"/>
    <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(-45)"/>
    <rect x="246" y="165" width="1.5" height="170" rx="0.75" fill="url(#lineGradAbout)"/>
    <circle cx="315" cy="250" r="52" fill="none" stroke="white" strokeWidth="16"/>
  </svg>
);

const values = [
  {
    title: "Built for field reality",
    desc: "Field technicians work under pressure, in noisy environments, with time constraints. Everything we build is tested against those conditions — not ideal lab scenarios.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L3 6v8l7 4 7-4V6L10 2z" stroke="#0D9488" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M10 2v14M3 6l7 4 7-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "On-premise first",
    desc: "We designed xOpsentia to run within customer environments — because in regulated industries, that's not a preference. It's a requirement.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2" y="10" width="16" height="8" rx="2" stroke="#0D9488" strokeWidth="1.5"/>
        <path d="M6 10V7a4 4 0 018 0v3" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="14" r="1.5" fill="#0D9488"/>
      </svg>
    ),
  },
  {
    title: "No shortcuts on data",
    desc: "We never process customer documentation on shared infrastructure. The knowledge layer lives entirely within what the customer controls and decides to share.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="7" stroke="#0D9488" strokeWidth="1.5"/>
        <path d="M7 10l2 2 4-4" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Useful, not impressive",
    desc: "AI for industrial operations should be judged by whether it helps resolve faults faster — not by whether it can answer trivia. We optimize for usefulness.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 3v2M10 15v2M3 10h2M15 10h2" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="10" cy="10" r="4" stroke="#0D9488" strokeWidth="1.5"/>
        <circle cx="10" cy="10" r="1.5" fill="#0D9488"/>
      </svg>
    ),
  },
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: 56 }}>
      {/* Back bar */}
      

      {/* Hero */}
      <div
        className="py-24 md:py-32 border-b border-gray-100"
        style={{ background: "rgba(248,250,252,0.6)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <Logo />
            <div>
              <span className="text-gray-900 font-semibold tracking-tight">xOpsentia</span>
              <p className="text-xs text-gray-400">Field-ready AI for industrial operations</p>
            </div>
          </div>

          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0D9488" }}>
            About us
          </p>

          <h1
            className="text-4xl md:text-5xl text-gray-900 tracking-tight mb-7 max-w-3xl"
            style={{ fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
          >
            We build AI for the people who keep things running.
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl" style={{ lineHeight: 1.8 }}>
            xOpsentia is a field technician support platform built for industrial and regulated environments —
            where manuals are dense, faults are urgent, and the tools available rarely match the complexity of the work.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0D9488" }}>
                Why we exist
              </p>
              <h2
                className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-6"
                style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
              >
                The knowledge gap in the field is real — and it's expensive.
              </h2>
              <div className="space-y-4 text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                <p>
                  In complex industrial operations, the difference between a 20-minute fix and a 4-hour outage is often just access to the right information at the right time. A technician standing in front of a fault doesn't need a document portal. They need the answer.
                </p>
                <p>
                  Most organizations have the knowledge locked inside manuals, SOPs, and service documents — thousands of pages that are technically accessible but practically unusable during live troubleshooting.
                </p>
                <p>
                  xOpsentia exists to close that gap. Not by replacing the technician's judgment, but by making the knowledge that supports that judgment instantly reachable.
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {[
                { label: "Faster fault resolution", value: "Reduces mean time to repair when technicians can access exact procedures instantly" },
                { label: "On-prem deployment", value: "Designed from the ground up for regulated, air-gapped, and on-premise environments" },
                { label: "No manual sharing", value: "Technical documentation stays within your infrastructure — xOpsentia never sees your content" },
                { label: "Built for real teams", value: "Tested against field conditions, not ideal lab scenarios. Works on mobile and in low-connectivity environments" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 rounded-xl"
                  style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
                >
                  <p className="text-sm font-semibold text-gray-800 mb-1">{item.label}</p>
                  <p className="text-sm text-gray-500" style={{ lineHeight: 1.65 }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* What xOpsentia does */}
      <div className="py-20 border-b border-gray-100" style={{ background: "rgba(248,250,252,0.4)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0D9488" }}>
            The platform
          </p>
          <h2
            className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-10"
            style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
          >
            What xOpsentia does
          </h2>

          <div className="space-y-6 text-base text-gray-500 max-w-2xl" style={{ lineHeight: 1.85 }}>
            <p>
              xOpsentia is a modular AI platform that connects field technicians with the knowledge they need to troubleshoot and repair equipment — delivered through an intelligent assistant, a searchable knowledge base, an expert escalation layer, and an operations dashboard.
            </p>
            <p>
              The platform runs within the customer's own environment. Documents, manuals, and SOPs are ingested and served from within the customer's infrastructure. Nothing is transmitted externally. The intelligence layer queries what the customer has uploaded — no more, no less.
            </p>
            <p>
              Admins control what knowledge is available, who can access it, and how it gets updated. Technicians get the answers they need, formatted for the field. Operations teams get visibility into how faults are being resolved across the team.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "#0D9488" }}>
            How we work
          </p>
          <h2
            className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-12"
            style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
          >
            What guides our decisions
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-7 rounded-2xl"
                style={{ border: "1px solid rgba(0,0,0,0.07)", background: "#fff" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "rgba(13,148,136,0.08)" }}
                >
                  {v.icon}
                </div>
                <h3 className="text-gray-900 mb-2" style={{ fontWeight: 600, fontSize: "16px" }}>
                  {v.title}
                </h3>
                <p className="text-sm text-gray-500" style={{ lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-2xl md:text-3xl text-gray-900 tracking-tight mb-4"
            style={{ fontWeight: 700, letterSpacing: "-0.025em" }}
          >Interested?</h2>
          <p className="text-base text-gray-500 mb-8 max-w-lg mx-auto" style={{ lineHeight: 1.75 }}>
            We're happy to talk through your environment, your team's challenges, and how xOpsentia might fit.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-white text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{
              background: "#0D9488",
              boxShadow: "0 6px 28px rgba(13,148,136,0.32)",
            }}
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M2 7h10M7 2l5 5-5 5"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
