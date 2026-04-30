// Placeholder screenshot — replace with actual product screenshots later.
// Styled to look like a real app screenshot.

interface ScreenshotPlaceholderProps {
  label?: string;
  height?: string;
}

export function ScreenshotPlaceholder({
  label = "Product Screenshot",
  height = "360px",
}: ScreenshotPlaceholderProps) {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden relative flex flex-col"
      style={{
        height,
        background: "linear-gradient(160deg, #f0fdfa 0%, #f8fafc 60%, #f1f5f9 100%)",
        border: "1px solid rgba(13,148,136,0.12)",
        boxShadow: "0 4px 40px rgba(13,148,136,0.08), 0 1px 3px rgba(0,0,0,0.06)",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 shrink-0"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.8)" }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-red-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-300" />
        <div
          className="ml-4 flex-1 h-5 rounded-full px-3 flex items-center"
          style={{ background: "rgba(0,0,0,0.05)", maxWidth: "200px" }}
        >
          <span className="text-[10px] text-gray-400 truncate">app.xopsentia.com</span>
        </div>
      </div>

      {/* Sidebar + content layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div
          className="w-[120px] shrink-0 flex flex-col gap-1 p-2"
          style={{ borderRight: "1px solid rgba(0,0,0,0.05)", background: "rgba(255,255,255,0.5)" }}
        >
          {[
            { icon: "💬", name: "AI Assistant", active: true },
            { icon: "📚", name: "Knowledge Base", active: false },
            { icon: "🗃️", name: "Records", active: false },
            { icon: "📊", name: "Operations", active: false },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg"
              style={{
                background: item.active ? "rgba(13,148,136,0.1)" : "transparent",
              }}
            >
              <span className="text-xs">{item.icon}</span>
              <span
                className="text-[9px] font-medium leading-tight"
                style={{ color: item.active ? "#0D9488" : "#6b7280" }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 p-3 space-y-2 overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between mb-3">
            <div className="h-4 rounded-md w-32" style={{ background: "rgba(0,0,0,0.07)" }} />
            <div
              className="h-6 rounded-full px-3 flex items-center text-[9px] font-semibold text-white"
              style={{ background: "#0D9488", minWidth: 60 }}
            >
              + New
            </div>
          </div>

          {/* Content rows */}
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex items-center gap-2 p-2.5 rounded-xl"
              style={{
                background: i === 1 ? "rgba(13,148,136,0.06)" : "rgba(255,255,255,0.7)",
                border: `1px solid ${i === 1 ? "rgba(13,148,136,0.15)" : "rgba(0,0,0,0.05)"}`,
              }}
            >
              <div
                className="w-6 h-6 rounded-md shrink-0"
                style={{
                  background: i === 1 ? "rgba(13,148,136,0.15)" : "rgba(0,0,0,0.06)",
                }}
              />
              <div className="flex-1 space-y-1">
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    background: i === 1 ? "rgba(13,148,136,0.3)" : "rgba(0,0,0,0.08)",
                    width: `${60 + i * 8}%`,
                  }}
                />
                <div
                  className="h-2 rounded-full"
                  style={{ background: "rgba(0,0,0,0.05)", width: `${40 + i * 5}%` }}
                />
              </div>
              {i === 1 && (
                <div
                  className="text-[9px] px-2 py-0.5 rounded-full font-medium"
                  style={{ background: "rgba(13,148,136,0.1)", color: "#0D9488" }}
                >
                  Active
                </div>
              )}
            </div>
          ))}

          {/* Bottom chart-like element */}
          <div
            className="mt-2 p-3 rounded-xl"
            style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-end gap-1.5 h-10">
              {[40, 65, 45, 80, 55, 70, 60, 90, 50, 75].map((h, idx) => (
                <div
                  key={idx}
                  className="flex-1 rounded-sm"
                  style={{
                    height: `${h}%`,
                    background:
                      idx === 7
                        ? "#0D9488"
                        : `rgba(13,148,136,${0.15 + idx * 0.02})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo label */}
      <div
        className="absolute bottom-3 right-3 text-[9px] px-2 py-0.5 rounded-full font-medium"
        style={{
          background: "rgba(13,148,136,0.08)",
          color: "#0D9488",
          border: "1px solid rgba(13,148,136,0.15)",
        }}
      >
        Demo · {label}
      </div>
    </div>
  );
}
