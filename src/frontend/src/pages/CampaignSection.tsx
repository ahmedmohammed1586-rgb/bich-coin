import { motion } from "motion/react";

export default function CampaignSection() {
  return (
    <section
      id="campaign"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "max(70vh, 600px)" }}
      data-ocid="campaign.section"
    >
      <div className="absolute inset-0">
        <img
          src="/assets/campaign-2.png"
          alt="Bitch Coin campaign — luxury crypto editorial with sequin and rose-gold aesthetics"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Heavy bottom gradient for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,3,6,0.96) 0%, rgba(8,3,6,0.75) 35%, rgba(8,3,6,0.2) 65%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Side vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(8,3,6,0.35) 0%, transparent 18%, transparent 82%, rgba(8,3,6,0.35) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Corner accent top-right */}
      <div
        className="absolute top-8 right-8 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="48"
            y1="0"
            x2="48"
            y2="24"
            stroke="#B76E79"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <line
            x1="24"
            y1="0"
            x2="48"
            y2="0"
            stroke="#B76E79"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      {/* Corner accent bottom-left */}
      <div
        className="absolute bottom-8 left-8 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <line
            x1="0"
            y1="48"
            x2="0"
            y2="24"
            stroke="#B76E79"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
          <line
            x1="0"
            y1="48"
            x2="24"
            y2="48"
            stroke="#B76E79"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      {/* Rotated side label */}
      <div
        className="absolute left-6 top-1/2 pointer-events-none select-none hidden md:block"
        style={{
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "center",
        }}
        aria-hidden="true"
      >
        <span
          className="font-body text-[9px] tracking-[0.45em] uppercase"
          style={{ color: "rgba(183,110,121,0.45)" }}
        >
          Campaign I — 2026
        </span>
      </div>

      {/* Text overlay bottom */}
      <div className="absolute left-0 right-0 bottom-0 px-10 md:px-20 pb-14 md:pb-20 z-10">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ originX: 0 }}
          className="mb-8"
        >
          <div
            className="h-px w-32"
            style={{
              background: "linear-gradient(90deg, #B76E79, #E8B4B8, #C9856E)",
            }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className="font-display font-black leading-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 9vw, 8rem)",
              color: "#FAF5F2",
              lineHeight: "0.95",
            }}
          >
            The Future
            <br />
            <span
              style={{
                background:
                  "linear-gradient(135deg, #F5E0DC 0%, #E8B4B8 40%, #C9856E 70%, #F5E0DC 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
                animation: "diamond-shimmer 6s linear infinite",
              }}
            >
              of Luxury Crypto
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-8 font-body text-xs tracking-[0.35em] uppercase"
          style={{ color: "rgba(245,224,220,0.55)" }}
        >
          Limited Edition · Genesis Collection · SS 2026
        </motion.p>
      </div>
    </section>
  );
}
