import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Root() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: "Inter, system-ui, sans-serif" }}
    >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
