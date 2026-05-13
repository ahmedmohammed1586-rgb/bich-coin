import { motion } from "motion/react";

const paragraphs = [
  {
    id: "statement",
    text: "Bitch Coin is not a currency. It is a statement — a declaration of power, elegance, and dominance in the digital age.",
  },
  {
    id: "intersection",
    text: "Where Wall Street meets the runway. Where blockchain meets couture. This is the intersection of luxury and the limitless future.",
  },
  {
    id: "genesis",
    text: "The genesis collection is limited. The movement is not.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden"
      style={{
        background: "oklch(0.97 0.01 50)",
        padding: "clamp(5rem, 10vw, 10rem) 0 clamp(5rem, 10vw, 10rem)",
      }}
      data-ocid="about.section"
    >
      {/* Background decorative numeral */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          right: "-2%",
          top: "50%",
          transform: "translateY(-55%)",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(12rem, 28vw, 26rem)",
          fontWeight: "900",
          lineHeight: "1",
          background:
            "linear-gradient(135deg, rgba(183,110,121,0.04) 0%, rgba(201,133,110,0.07) 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
        aria-hidden="true"
      >
        I
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="flex flex-col gap-7"
          >
            <span
              className="font-body text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "rgba(183,110,121,0.6)" }}
              data-ocid="about.label"
            >
              About
            </span>

            <h2
              className="font-display font-black leading-none uppercase"
              style={{
                fontSize: "clamp(3.5rem, 8vw, 7rem)",
                background:
                  "linear-gradient(160deg, #1a0d0f 0%, #8B4A52 35%, #C9856E 65%, #1a0d0f 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
              data-ocid="about.headline"
            >
              Born From
              <br />
              Power
            </h2>

            {/* Pull quote */}
            <div
              className="mt-4 pl-5"
              style={{ borderLeft: "2px solid #B76E79" }}
            >
              <p
                className="font-display italic leading-snug"
                style={{
                  fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                  background:
                    "linear-gradient(135deg, #B76E79 0%, #C9856E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                "Power wears no logo — until now."
              </p>
            </div>

            <span
              className="font-body text-[10px] tracking-[0.35em] uppercase mt-2"
              style={{ color: "rgba(183,110,121,0.5)" }}
              data-ocid="about.edition"
            >
              001 / Genesis — SS 2026
            </span>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="flex flex-col gap-8 pt-0 md:pt-12"
          >
            {paragraphs.map(({ id, text }, i) => (
              <motion.p
                key={id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + i * 0.15,
                  ease: "easeOut",
                }}
                className="font-body text-base md:text-lg"
                style={{ lineHeight: "1.9", color: "oklch(0.38 0.05 38)" }}
                data-ocid={`about.para.${id}`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* Bottom full-width luxury divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
          className="mt-24 h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #B76E79 20%, #E8B4B8 50%, #C9856E 80%, transparent 100%)",
            transformOrigin: "left",
          }}
          data-ocid="about.divider"
        />
      </div>
    </section>
  );
}
