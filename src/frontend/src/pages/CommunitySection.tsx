import { Send, Twitter } from "lucide-react";
import { motion } from "motion/react";

const socialLinks = [
  {
    id: "twitter",
    label: "Twitter / X",
    sub: "Follow the movement",
    href: "https://twitter.com",
    icon: Twitter,
  },
  {
    id: "telegram",
    label: "Telegram",
    sub: "Join the inner circle",
    href: "https://t.me",
    icon: Send,
  },
];

const marqueeText =
  "BITCH COIN · LUXURY MEETS POWER · GENESIS COLLECTION · LIMITED EDITION · DIAMOND SERIES · SS 2026 · ";

function MemberCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-xs mx-auto overflow-hidden"
      style={{
        aspectRatio: "85.6/53.98",
        borderRadius: "12px",
        background:
          "linear-gradient(135deg, #1a0c10 0%, #2d1520 30%, #3a1a25 55%, #1a0c10 100%)",
        border: "1px solid rgba(183,110,121,0.3)",
        boxShadow:
          "0 24px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(183,110,121,0.1)",
      }}
      data-ocid="community.member_card"
    >
      {/* Shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, rgba(183,110,121,0.07) 45%, rgba(245,213,197,0.12) 50%, rgba(183,110,121,0.07) 55%, transparent 80%)",
          animation: "shimmer-sweep 3s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      {/* Glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          right: "-20%",
          width: "55%",
          height: "120%",
          background:
            "radial-gradient(ellipse at center, rgba(201,133,110,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 p-5 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <p
              className="font-body text-[7px] tracking-[0.4em] uppercase mb-1"
              style={{ color: "rgba(183,110,121,0.55)" }}
            >
              Member Card
            </p>
            <p
              className="font-display font-black text-xs tracking-widest uppercase"
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
          </div>
          <div
            className="w-8 h-8 rounded-full overflow-hidden"
            style={{ border: "1px solid rgba(183,110,121,0.4)" }}
          >
            <img
              src="/assets/logo-main.jpg"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>
        </div>

        <div
          className="w-8 h-6 rounded-sm"
          style={{
            background:
              "linear-gradient(135deg, #C9856E, #B76E79, #E8B4B8, #C9856E)",
            opacity: 0.7,
          }}
          aria-hidden="true"
        />

        <div>
          <p
            className="font-display font-black text-sm tracking-[0.2em] uppercase mb-1"
            style={{
              background: "linear-gradient(135deg, #F5E0DC 0%, #C9856E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Inner Circle Member
          </p>
          <p
            className="font-body text-[8px] tracking-[0.3em] uppercase"
            style={{ color: "rgba(183,110,121,0.4)" }}
          >
            Genesis Edition · SS 2026
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #FBF5F2 0%, #F5ECE7 100%)",
        borderTop: "1px solid rgba(183,110,121,0.12)",
      }}
      data-ocid="community.section"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-circuit opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 pt-24 md:pt-36 px-6">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center font-body text-[10px] tracking-[0.5em] uppercase mb-8"
          style={{ color: "rgba(183,110,121,0.6)" }}
          data-ocid="community.label"
        >
          Join the Movement
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black leading-none tracking-tight text-center"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            background:
              "linear-gradient(135deg, #1a0c10 0%, #8B4A52 25%, #B76E79 50%, #C9856E 75%, #1a0c10 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            backgroundSize: "200% auto",
            animation: "diamond-shimmer 8s linear infinite",
          }}
          data-ocid="community.headline"
        >
          The Inner
          <br />
          Circle
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="font-display italic text-center mt-6 mb-16"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "rgba(183,110,121,0.65)",
          }}
          data-ocid="community.tagline"
        >
          Exclusive. Private. Powerful.
        </motion.p>

        {/* Two-column: social + card */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center pb-24 md:pb-32">
          {/* Social buttons */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="flex flex-col gap-4"
            data-ocid="community.social_buttons"
          >
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between px-7 py-5 overflow-hidden"
                style={{
                  border: "1px solid rgba(183,110,121,0.22)",
                  transition: "border-color 400ms ease, background 400ms ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(183,110,121,0.55)";
                  el.style.background = "rgba(183,110,121,0.04)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = "rgba(183,110,121,0.22)";
                  el.style.background = "transparent";
                }}
                data-ocid={`community.social_btn.${link.id}`}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(183,110,121,0.06) 50%, transparent 70%)",
                    animation: "shimmer-sweep 2s ease-in-out infinite",
                    transition: "opacity 400ms ease",
                  }}
                  aria-hidden="true"
                />

                <div className="flex items-center gap-4">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(183,110,121,0.1)",
                      border: "1px solid rgba(183,110,121,0.2)",
                    }}
                  >
                    <link.icon size={15} style={{ color: "#B76E79" }} />
                  </div>
                  <div>
                    <p
                      className="font-display font-black text-sm tracking-[0.1em] uppercase"
                      style={{
                        background:
                          "linear-gradient(135deg, #8B4A52, #B76E79, #C9856E)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {link.label}
                    </p>
                    <p
                      className="font-body text-[10px] tracking-[0.25em] uppercase"
                      style={{ color: "rgba(183,110,121,0.5)" }}
                    >
                      {link.sub}
                    </p>
                  </div>
                </div>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                  style={{ flexShrink: 0 }}
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="#B76E79"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
          </motion.div>

          <MemberCard />
        </div>
      </div>

      {/* Marquee — dark strip with rose-gold text */}
      <div
        className="overflow-hidden py-3.5 relative"
        style={{
          background: "#0e0608",
          borderTop: "1px solid rgba(183,110,121,0.2)",
        }}
        data-ocid="community.marquee"
      >
        <div
          className="flex whitespace-nowrap"
          style={{ animation: "marquee-scroll 28s linear infinite" }}
        >
          {(["a", "b", "c", "d"] as const).map((id) => (
            <span
              key={id}
              className="font-body text-[9px] tracking-[0.4em] uppercase"
              style={{
                background:
                  "linear-gradient(90deg, #B76E79, #E8B4B8, #C9856E, #B76E79)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {marqueeText}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
