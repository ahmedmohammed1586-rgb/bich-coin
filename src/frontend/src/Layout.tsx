// SETUP: Copy video asset before running dev server:
// cp /home/ubuntu/workspace/.platform/attachments/1000110601-019dcacd-6948-75ba-ae01-55291565128e.mp4 src/frontend/public/assets/hero-bg.mp4

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const navLinks = [
  { label: "The Coin", href: "#coin" },
  { label: "Collections", href: "#collection" },
  { label: "Campaigns", href: "#campaign" },
  { label: "About", href: "#about" },
  { label: "Explore", href: "#experience" },
];

// 12 ambient floating particles with deterministic positions & delays
const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${8 + ((i * 7.3) % 84)}%`,
  left: `${5 + ((i * 8.1) % 90)}%`,
  delay: `${(i * 0.55) % 5.5}s`,
  size: i % 3 === 0 ? 5 : i % 2 === 0 ? 3 : 4,
  opacity: 0.25 + (i % 4) * 0.12,
}));

export default function Layout({ children }: LayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Force video play on mount (autoplay may be deferred)
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        /* silently fail if autoplay blocked */
      });
    }
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen text-foreground font-body relative"
      style={{ background: "#0a0608" }}
    >
      {/* ── Global video background ─────────────────────────────────────── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src="/assets/hero-bg.mp4"
        className="fixed inset-0 w-full h-full object-cover pointer-events-none"
        style={{ zIndex: 0, display: "block", opacity: 0.38 }}
      />

      {/* Dark luxury overlay — lets video breathe through */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 1,
          background:
            "linear-gradient(160deg, rgba(10,6,8,0.72) 0%, rgba(20,10,13,0.65) 45%, rgba(13,5,8,0.78) 100%)",
        }}
      />

      {/* Rose-gold ambient radial glow */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          background:
            "radial-gradient(ellipse 55% 55% at 80% 20%, rgba(196,135,142,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(212,149,106,0.1) 0%, transparent 60%)",
          animation: "luxury-breathe 8s ease-in-out infinite",
        }}
      />

      {/* Circuit overlay */}
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none bg-circuit"
        style={{
          zIndex: 2,
          opacity: 0.04,
          animation: "circuit-pulse 6s ease-in-out infinite",
        }}
      />

      {/* Ambient floating particles */}
      <div
        aria-hidden="true"
        className="floating-particles"
        style={{ zIndex: 3 }}
      >
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="ambient-particle"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              opacity: p.opacity,
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header
        data-ocid="site-header"
        className={`
          fixed top-0 left-0 right-0 z-50 transition-smooth
          ${scrolled ? "border-b" : "bg-transparent"}
        `}
        style={{
          zIndex: 50,
          background: scrolled
            ? "linear-gradient(135deg, rgba(10,6,8,0.92) 0%, rgba(20,10,13,0.95) 100%)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottomColor: scrolled ? "rgba(196,135,142,0.2)" : "transparent",
          borderBottomWidth: "1px",
        }}
      >
        {/* Rose-gold gradient border bottom */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #C4878E 25%, #FAD7A0 50%, #C4878E 75%, transparent 100%)",
            opacity: scrolled ? 0.55 : 0.25,
          }}
        />

        <div className="container mx-auto px-6 lg:px-14 flex items-center justify-between h-14 md:h-[68px]">
          {/* Logo */}
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group"
            data-ocid="nav-logo"
            aria-label="Bitch Coin — scroll to top"
          >
            <div
              className="relative rounded-full overflow-hidden logo-halo transition-smooth group-hover:scale-105"
              style={{ width: 52, height: 52 }}
            >
              <img
                src="/assets/logo-main.jpg"
                alt="Bitch Coin Logo"
                className="w-full h-full object-cover rounded-full"
                style={{ display: "block" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 0 1.5px rgba(196,135,142,0.55)",
                }}
              />
            </div>
            <span
              className="font-display text-base md:text-lg tracking-[0.12em] uppercase hidden sm:block"
              style={{
                background:
                  "linear-gradient(135deg, #C4878E 0%, #FAD7A0 50%, #C4878E 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bitch Coin
            </span>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-9 lg:gap-11"
            data-ocid="nav-desktop"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="relative group transition-luxury"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 400,
                  color: "rgba(253,252,251,0.65)",
                }}
              >
                {link.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 group-hover:w-full h-px transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, #C4878E, #FAD7A0, #C4878E)",
                  }}
                />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              onClick={() => handleNavClick("#coin")}
              data-ocid="nav-cta"
              className="relative group overflow-hidden transition-luxury shimmer-rose-gold"
              style={{
                padding: "9px 22px",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background:
                  "linear-gradient(135deg, rgba(196,135,142,0.15) 0%, rgba(212,149,106,0.1) 100%)",
                color: "#FAD7A0",
                borderRadius: "var(--radius)",
                border: "1px solid rgba(196,135,142,0.35)",
                boxShadow:
                  "0 0 0 1px rgba(196,135,142,0.15), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              Collect Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            data-ocid="nav-mobile-toggle"
          >
            <span
              className={`block w-5 h-px transition-smooth ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
              style={{ background: "#C4878E" }}
            />
            <span
              className={`block w-5 h-px transition-smooth ${menuOpen ? "opacity-0" : ""}`}
              style={{ background: "#C4878E" }}
            />
            <span
              className={`block w-5 h-px transition-smooth ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              style={{ background: "#C4878E" }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="md:hidden border-t px-6 py-7 flex flex-col gap-5"
            style={{
              background:
                "linear-gradient(160deg, rgba(10,6,8,0.98) 0%, rgba(20,10,13,1) 100%)",
              backdropFilter: "blur(24px)",
              borderTopColor: "rgba(196,135,142,0.2)",
            }}
            data-ocid="nav-mobile-menu"
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className="text-left transition-luxury"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "rgba(253,252,251,0.65)",
                }}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNavClick("#coin")}
              className="mt-2 shimmer-rose-gold transition-luxury"
              style={{
                padding: "12px 22px",
                fontSize: "10px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                background:
                  "linear-gradient(135deg, rgba(196,135,142,0.18) 0%, rgba(212,149,106,0.12) 100%)",
                color: "#FAD7A0",
                border: "1px solid rgba(196,135,142,0.35)",
                borderRadius: "var(--radius)",
              }}
            >
              Collect Now
            </button>
          </div>
        )}
      </header>

      {/* Main content */}
      <main style={{ position: "relative", zIndex: 10 }}>{children}</main>
    </div>
  );
}
