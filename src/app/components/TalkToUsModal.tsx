import { useState, useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

interface TalkToUsModalProps {
  open: boolean;
  onClose: () => void;
}

export function TalkToUsModal({ open, onClose }: TalkToUsModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Reset on open
  useEffect(() => {
    if (open) {
      setName("");
      setEmail("");
      setSubmitted(false);
    }
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center px-4"
      style={{ background: "rgba(0,0,0,0.38)", backdropFilter: "blur(6px)" }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="relative w-full max-w-md rounded-3xl bg-white overflow-hidden"
        style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.18)" }}
      >
        {/* Teal accent strip */}
        <div
          className="h-1.5 w-full"
          style={{ background: "linear-gradient(90deg, #0D9488, #14b8a6)" }}
        />

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="px-8 pt-7 pb-8">
          {submitted ? (
            /* ── Success state ── */
            <div className="flex flex-col items-center text-center py-6 gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center"
                style={{ background: "rgba(13,148,136,0.1)" }}
              >
                <CheckCircle size={28} color="#0D9488" strokeWidth={1.8} />
              </div>
              <div>
                <p
                  className="text-gray-900 mb-1"
                  style={{ fontWeight: 700, fontSize: "18px", letterSpacing: "-0.02em" }}
                >
                  We'll be in touch soon.
                </p>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.7 }}>
                  Thanks, {name.split(" ")[0]}. Our team will reach out to{" "}
                  <span className="text-gray-700 font-medium">{email}</span> within one business day.
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all hover:opacity-90"
                style={{ background: "#0D9488" }}
              >
                Done
              </button>
            </div>
          ) : (
            /* ── Form state ── */
            <>
              {/* Header */}
              <div className="mb-7">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #0D9488, #065f46)" }}
                  >
                    <span className="text-white text-[10px] font-bold">xO</span>
                  </div>
                  <span className="text-gray-900 font-semibold text-sm">xOpsentia</span>
                </div>
                <p
                  className="text-gray-900 mb-1.5"
                  style={{ fontWeight: 700, fontSize: "20px", letterSpacing: "-0.02em" }}
                >
                  Let's talk.
                </p>
                <p className="text-gray-500 text-sm" style={{ lineHeight: 1.7 }}>
                  Leave your details and our team will reach out to schedule a conversation around your environment.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Full name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Smith"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition-all"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.1)",
                      background: "#fafafa",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0D9488")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                    Work email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@yourcompany.com"
                    required
                    className="w-full rounded-xl px-4 py-3 text-sm text-gray-900 outline-none transition-all"
                    style={{
                      border: "1.5px solid rgba(0,0,0,0.1)",
                      background: "#fafafa",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#0D9488")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01]"
                  style={{
                    background: "#0D9488",
                    boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
                  }}
                >
                  Send message
                </button>
              </form>

              <p className="text-center text-[11px] text-gray-400 mt-4">
                No spam. We'll only reach out about your request.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
