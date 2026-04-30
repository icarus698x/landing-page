import { useState } from "react";
import { Link } from "react-router";
import { CheckCircle, Loader2, AlertCircle } from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// 🔧 SETUP REQUIRED
// Replace the placeholder below with your Google Apps Script Web App URL.
//
// HOW TO GET YOUR URL:
//   1. Open your Google Sheet.
//   2. Click Extensions → Apps Script.
//   3. Delete any existing code and paste the script from the README / docs.
//   4. Click Deploy → New deployment → Web app.
//      • Execute as: Me
//      • Who has access: Anyone
//   5. Copy the deployment URL and paste it below.
// ─────────────────────────────────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzUIOSD6T_GlOtAWKPwMgj1mooKCXXPsmiKqzgmZeadsqykf10F5LKlplTeAffg36BI/exec";

// ─────────────────────────────────────────────────────────────────────────────
// Google Apps Script code to paste in your Apps Script editor:
//
// function doPost(e) {
//   try {
//     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
//     var data = JSON.parse(e.postData.contents);
//
//     // Add header row if sheet is empty
//     if (sheet.getLastRow() === 0) {
//       sheet.appendRow(["Timestamp", "Full Name", "Email", "Designation", "LinkedIn", "Message"]);
//     }
//
//     sheet.appendRow([
//       new Date().toISOString(),
//       data.name    || "",
//       data.email   || "",
//       data.designation || "",
//       data.linkedin || "",
//       data.message  || "",
//     ]);
//
//     return ContentService
//       .createTextOutput(JSON.stringify({ result: "success" }))
//       .setMimeType(ContentService.MimeType.JSON);
//   } catch(err) {
//     return ContentService
//       .createTextOutput(JSON.stringify({ result: "error", error: err.toString() }))
//       .setMimeType(ContentService.MimeType.JSON);
//   }
// }
// ─────────────────────────────────────────────────────────────────────────────

const Logo = () => (
  <svg width="28" height="28" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 7 }}>
    <defs>
      <linearGradient id="bgGradContact" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#04c4b4"/>
        <stop offset="50%" stopColor="#0D9488"/>
        <stop offset="100%" stopColor="#045f5f"/>
      </linearGradient>
      <linearGradient id="lineGradContact" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="white" stopOpacity="0"/>
        <stop offset="30%" stopColor="white" stopOpacity="0.7"/>
        <stop offset="70%" stopColor="white" stopOpacity="0.7"/>
        <stop offset="100%" stopColor="white" stopOpacity="0"/>
      </linearGradient>
    </defs>
    <rect width="500" height="500" fill="url(#bgGradContact)"/>
    <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(45)"/>
    <rect x="-60" y="-8" width="120" height="16" rx="8" fill="white" transform="translate(185,250) rotate(-45)"/>
    <rect x="246" y="165" width="1.5" height="170" rx="0.75" fill="url(#lineGradContact)"/>
    <circle cx="315" cy="250" r="52" fill="none" stroke="white" strokeWidth="16"/>
  </svg>
);

const inputBase = {
  border: "1.5px solid rgba(0,0,0,0.1)",
  background: "#fafafa",
  borderRadius: 10,
} as React.CSSProperties;

type SubmitStatus = "idle" | "loading" | "success" | "error";

export function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    designation: "",
    linkedin: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const update = (field: string, val: string) => {
    setForm((p) => ({ ...p, [field]: val }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Full name is required.";
    if (!form.email.trim()) e.email = "Work email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.designation.trim()) e.designation = "Designation is required.";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("loading");
    setSubmitError("");

    try {
      // IMPORTANT: Content-Type must be "text/plain" — not "application/json".
      // In no-cors mode, application/json triggers a CORS preflight (OPTIONS) which
      // Google Apps Script silently drops, meaning the POST body never reaches doPost().
      // text/plain is a "simple" header that skips preflight and sends directly.
      // The body is still valid JSON that Apps Script parses with JSON.parse(e.postData.contents).
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          name:        form.name.trim(),
          email:       form.email.trim(),
          designation: form.designation.trim(),
          linkedin:    form.linkedin.trim(),
          message:     form.message.trim(),
        }),
      });
      setStatus("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setSubmitError(
        "Something went wrong sending your message. Please try again or email us directly."
      );
      setStatus("error");
    }
  };

  const isLoading = status === "loading";

  return (
    <div className="min-h-screen bg-white" style={{ paddingTop: 56 }}>
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left panel ─────────────────────────────────────────── */}
          <div className="space-y-8">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <Logo />
              <span className="font-semibold text-gray-900 text-sm tracking-tight">xOpsentia</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1
                className="text-4xl md:text-5xl text-gray-900 tracking-tight"
                style={{ fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em" }}
              >
                Let's talk about your environment.
              </h1>
              <p className="text-base text-gray-500" style={{ lineHeight: 1.8 }}>
                Tell us about your setup, your team, and what you're trying to solve.
                We'll come back with a conversation worth having.
              </p>
            </div>

            {/* Why teams reach out */}
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-widest" style={{ color: "#0D9488" }}>
                Why teams reach out
              </p>
              {[
                { label: "Exploring our deployment model", desc: "Scoping xOpsentia for a specific site, fleet, or field team." },
                { label: "Understanding how document ingestion works", desc: "Wanting to test the product in a real environment before committing." },
                { label: "Just want to understand the product", desc: "Curious about how it works, what it needs, and what it doesn't." },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-3 items-start rounded-xl px-4 py-3.5"
                  style={{ background: "rgba(13,148,136,0.03)", border: "1px solid rgba(13,148,136,0.09)" }}
                >
                  <div
                    className="shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ background: "#0D9488", marginTop: 6 }}
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust note */}
            <p className="text-gray-400 text-[10px] text-justify" style={{ lineHeight: 1.7 }}>
              Your information is only used to follow up on your request.
              We don't add you to marketing lists or share your details with third parties.
            </p>
          </div>

          {/* ── Right panel — form ─────────────────────────────────── */}
          <div>
            {status === "success" ? (
              <div
                className="rounded-3xl p-10 flex flex-col items-center text-center gap-6"
                style={{
                  border: "1px solid rgba(13,148,136,0.15)",
                  background: "rgba(13,148,136,0.03)",
                  boxShadow: "0 8px 40px rgba(13,148,136,0.08)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(13,148,136,0.1)" }}
                >
                  <CheckCircle size={32} color="#0D9488" strokeWidth={1.6} />
                </div>
                <div>
                  <p
                    className="text-gray-900 mb-2"
                    style={{ fontWeight: 700, fontSize: "22px", letterSpacing: "-0.02em" }}
                  >
                    Message received.
                  </p>
                  <p className="text-gray-500 text-sm" style={{ lineHeight: 1.75 }}>
                    Thanks, {form.name.split(" ")[0]}. We'll be in touch at{" "}
                    <span className="text-gray-700 font-medium">{form.email}</span>.
                  </p>
                </div>
                <Link
                  to="/"
                  className="mt-2 px-7 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "#0D9488" }}
                >
                  Back to home
                </Link>
              </div>
            ) : (
              <div
                className="rounded-3xl p-8 md:p-10"
                style={{
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 4px 40px rgba(0,0,0,0.06)",
                }}
              >
                {/* Top accent */}
                <div className="h-1 w-full rounded-full mb-8" style={{ background: "linear-gradient(90deg, #0D9488, #14b8a6)" }} />

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Full name <span style={{ color: "#0D9488" }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Jane Smith"
                      disabled={isLoading}
                      className="w-full px-4 py-3 text-sm text-gray-900 outline-none transition-all disabled:opacity-50"
                      style={{
                        ...inputBase,
                        borderColor: errors.name ? "#ef4444" : "rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "#0D9488")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.name ? "#ef4444" : "rgba(0,0,0,0.1)")}
                    />
                    {errors.name && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.name}</p>}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Email <span style={{ color: "#0D9488" }}>*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="jane@company.com"
                      disabled={isLoading}
                      className="w-full px-4 py-3 text-sm text-gray-900 outline-none transition-all disabled:opacity-50"
                      style={{
                        ...inputBase,
                        borderColor: errors.email ? "#ef4444" : "rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "#0D9488")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#ef4444" : "rgba(0,0,0,0.1)")}
                    />
                    {errors.email && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.email}</p>}
                  </div>

                  {/* Designation */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Designation <span style={{ color: "#0D9488" }}>*</span>
                    </label>
                    <input
                      type="text"
                      value={form.designation}
                      onChange={(e) => update("designation", e.target.value)}
                      placeholder="Head of Maintenance"
                      disabled={isLoading}
                      className="w-full px-4 py-3 text-sm text-gray-900 outline-none transition-all disabled:opacity-50"
                      style={{
                        ...inputBase,
                        borderColor: errors.designation ? "#ef4444" : "rgba(0,0,0,0.1)",
                      }}
                      onFocus={(e) => (e.currentTarget.style.borderColor = errors.designation ? "#ef4444" : "#0D9488")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = errors.designation ? "#ef4444" : "rgba(0,0,0,0.1)")}
                    />
                    {errors.designation && <p className="text-xs mt-1" style={{ color: "#ef4444" }}>{errors.designation}</p>}
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      LinkedIn profile{" "}
                      <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
                    </label>
                    <input
                      type="url"
                      value={form.linkedin}
                      onChange={(e) => update("linkedin", e.target.value)}
                      placeholder="https://linkedin.com/in/cooljane"
                      disabled={isLoading}
                      className="w-full px-4 py-3 text-sm text-gray-900 outline-none transition-all disabled:opacity-50"
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0D9488")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
                      Message{" "}
                      <span className="text-gray-400 normal-case font-normal tracking-normal">(optional)</span>
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => update("message", e.target.value)}
                      placeholder="How can we help?"
                      rows={4}
                      disabled={isLoading}
                      className="w-full px-4 py-3 text-sm text-gray-900 outline-none transition-all resize-none disabled:opacity-50"
                      style={inputBase}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#0D9488")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)")}
                    />
                  </div>

                  {/* Error banner */}
                  {status === "error" && (
                    <div
                      className="flex items-start gap-3 rounded-xl px-4 py-3"
                      style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.2)" }}
                    >
                      <AlertCircle size={16} color="#ef4444" className="shrink-0 mt-0.5" />
                      <p className="text-xs text-red-600" style={{ lineHeight: 1.6 }}>{submitError}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-[1.01] mt-2 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
                    style={{
                      background: "#0D9488",
                      boxShadow: "0 4px 20px rgba(13,148,136,0.3)",
                    }}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending…
                      </>
                    ) : (
                      "Send message"
                    )}
                  </button>
                </form>

              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}