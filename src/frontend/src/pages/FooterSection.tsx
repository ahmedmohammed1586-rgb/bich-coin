import { motion } from "motion/react";

const navLinks = ["Collections", "Campaign", "About", "Experience"];

export default function FooterSection() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: "#0a0508" }}
      data-ocid="footer"
    >
      {/* Rose-gold top border */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #B76E79 20%, #E8B4B8 50%, #C9856E 80%, transparent 100%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative z-10 max-w-7xl mx-auto px-8 md:px-14 py-10"
      >
        {/* Single-row desktop layout */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-0">
          {/* Logo */}
          <div className="flex items-center gap-4" data-ocid="footer.logo">
            <img
              src="/assets/logo-main.jpg"
              alt="Bitch Coin"
              className="w-14 h-14 rounded-full object-cover"
              style={{
                border: "1px solid rgba(183,110,121,0.35)",
                boxShadow: "0 0 16px rgba(183,110,121,0.2)",
              }}
            />
            <div>
              <p
                className="font-display font-black text-sm tracking-[0.12em] uppercase leading-none"
                style={{
                  background:
                    "linear-gradient(135deg, #E8B4B8 0%, #C9856E 60%, #B76E79 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bitch Coin
              </p>
              <p
                className="font-body text-[9px] tracking-[0.3em] uppercase mt-1"
                style={{ color: "rgba(183,110,121,0.4)" }}
              >
                Luxury Meets Power
              </p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-8" data-ocid="footer.nav">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-[10px] tracking-[0.3em] uppercase"
                style={{
                  color: "rgba(183,110,121,0.45)",
                  transition: "color 300ms ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(183,110,121,0.85)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(183,110,121,0.45)";
                }}
                data-ocid={`footer.nav.${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p
            className="font-body text-[9px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(183,110,121,0.3)" }}
            data-ocid="footer.copyright"
          >
            © {year} Bitch Coin. All Rights Reserved.
          </p>
        </div>

        {/* Caffeine branding */}
        <div
          className="mt-8 pt-6 text-center"
          style={{ borderTop: "1px solid rgba(183,110,121,0.08)" }}
        >
          <p
            className="font-body text-[10px]"
            style={{ color: "rgba(183,110,121,0.3)" }}
          >
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(183,110,121,0.55)",
                transition: "color 300ms ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(183,110,121,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(183,110,121,0.55)";
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
