import { motion } from "motion/react";

const drops = [
  { id: "DROP 01", label: "THE SOVEREIGN", edition: "SS 2026 · EDITION I/III" },
  { id: "DROP 02", label: "THE OBSIDIAN", edition: "SS 2026 · EDITION II/III" },
  {
    id: "DROP 03",
    label: "THE CELESTIAL",
    edition: "SS 2026 · EDITION III/III",
  },
];

type Drop = (typeof drops)[number];

function DropCard({ drop, index }: { drop: Drop; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group cursor-pointer"
      data-ocid={`collection.item.${index + 1}`}
    >
      <div
        className="relative overflow-hidden flex flex-col"
        style={{
          background: "#12080c",
          border: "1px solid rgba(183,110,121,0.14)",
          transition:
            "border-color 600ms ease, box-shadow 600ms ease, transform 600ms ease",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(183,110,121,0.55)";
          el.style.boxShadow =
            "0 0 40px rgba(183,110,121,0.12), 0 20px 60px rgba(10,4,8,0.5)";
          el.style.transform = "scale(1.02)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement;
          el.style.borderColor = "rgba(183,110,121,0.14)";
          el.style.boxShadow = "none";
          el.style.transform = "scale(1)";
        }}
      >
        <div className="relative overflow-hidden">
          <div
            style={{ aspectRatio: "3/4" }}
            className="w-full overflow-hidden"
          >
            <img
              src={`/assets/model-${index + 1}.jpg`}
              alt={`${drop.label} — luxury fashion editorial`}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, transparent 20%, rgba(183,110,121,0.08) 50%, transparent 80%)",
              transition: "opacity 600ms ease",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute top-4 left-4 font-body uppercase"
            style={{
              color: "rgba(183,110,121,0.5)",
              fontSize: "9px",
              letterSpacing: "0.4em",
            }}
          >
            {drop.id}
          </div>
        </div>

        <div
          className="px-5 py-5 flex flex-col gap-2"
          style={{ borderTop: "1px solid rgba(183,110,121,0.12)" }}
        >
          <div
            className="w-6 h-px mb-1"
            style={{ background: "linear-gradient(90deg, #B76E79, #C9856E)" }}
          />
          <p
            className="font-display italic leading-none"
            style={{
              fontSize: "1.15rem",
              background:
                "linear-gradient(135deg, #F5E0DC 0%, #E8B4B8 40%, #C9856E 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {drop.label}
          </p>
          <p
            className="font-body text-[9px] tracking-[0.35em] uppercase"
            style={{ color: "rgba(183,110,121,0.45)" }}
          >
            {drop.edition}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function CollectionSection() {
  return (
    <section
      id="collections"
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #FBF5F2 0%, #F5ECE7 60%, #FBF5F2 100%)",
        padding: "clamp(5rem, 10vw, 9rem) 0 clamp(5rem, 10vw, 9rem)",
      }}
      data-ocid="collection.section"
    >
      <div
        className="absolute inset-0 pointer-events-none bg-circuit opacity-40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-14">
        <motion.div
          className="mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-4">
            <p
              className="font-body text-[10px] tracking-[0.5em] uppercase"
              style={{ color: "rgba(183,110,121,0.65)" }}
            >
              Season I
            </p>
            <h2
              className="font-display font-black uppercase leading-none tracking-tight"
              style={{
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                background:
                  "linear-gradient(135deg, #1a0c10 0%, #8B4A52 40%, #C9856E 70%, #5c2d35 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Genesis
              <br />
              Collection
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end gap-2">
            <span
              className="font-body text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(183,110,121,0.55)" }}
            >
              SS 2026
            </span>
            <span
              className="font-body text-[10px] tracking-[0.4em] uppercase"
              style={{ color: "rgba(183,110,121,0.4)" }}
            >
              Vol. I — Three Pieces
            </span>
          </div>
        </motion.div>

        <motion.div
          className="mb-16 h-px w-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(183,110,121,0.35), transparent)",
            transformOrigin: "left",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {drops.map((drop, index) => (
            <DropCard key={drop.id} drop={drop} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
