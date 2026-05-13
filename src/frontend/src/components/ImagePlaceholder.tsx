interface ImagePlaceholderProps {
  label: string;
  aspectRatio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  label,
  aspectRatio = "4/5",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center ${className}`}
      style={{
        aspectRatio,
        background:
          "linear-gradient(155deg, #1a0c10 0%, #2a1218 30%, #1e0e14 60%, #160a0e 100%)",
      }}
      data-ocid="image-placeholder"
    >
      {/* Diagonal shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, rgba(183,110,121,0.06) 45%, rgba(245,213,197,0.1) 50%, rgba(183,110,121,0.06) 55%, transparent 80%)",
          animation: "shimmer-sweep 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />

      {/* Subtle rose-gold ambient glow center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(183,110,121,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Label */}
      <p
        className="relative z-10 text-[9px] font-body tracking-[0.4em] uppercase text-center px-6"
        style={{ color: "rgba(183,110,121,0.45)" }}
      >
        {label}
      </p>
    </div>
  );
}
