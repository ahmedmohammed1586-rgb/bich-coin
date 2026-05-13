import SectionWrapper from "@/components/SectionWrapper";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "motion/react";
import { useCallback, useRef } from "react";
import type * as THREE from "three";

function CoinScene({
  mouseRef,
}: { mouseRef: React.RefObject<{ x: number; y: number }> }) {
  const coinRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!coinRef.current) return;
    coinRef.current.rotation.y += 0.003;
    if (mouseRef.current) {
      const targetX = mouseRef.current.y * 0.3;
      const targetZ = mouseRef.current.x * 0.3;
      coinRef.current.rotation.x +=
        (targetX - coinRef.current.rotation.x) * 0.04;
      coinRef.current.rotation.z +=
        (-targetZ - coinRef.current.rotation.z) * 0.04;
    }
  });

  const roseGoldProps = {
    color: "#C9856E" as const,
    metalness: 1.0,
    roughness: 0.04,
    envMapIntensity: 2.5,
  };

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[6, 6, 6]} intensity={4} color="#F5D5C5" />
      <pointLight position={[-6, -4, 4]} intensity={2} color="#B76E79" />
      <pointLight position={[0, -6, 3]} intensity={1} color="#ffffff" />
      <pointLight position={[4, 3, 5]} intensity={1.5} color="#E8B4B8" />
      <pointLight position={[-3, 4, 2]} intensity={0.8} color="#F5E0DC" />

      <group ref={coinRef}>
        <mesh>
          <cylinderGeometry args={[2.2, 2.2, 0.18, 80]} />
          <meshStandardMaterial {...roseGoldProps} />
        </mesh>
        <mesh>
          <cylinderGeometry args={[1.9, 1.9, 0.21, 80]} />
          <meshStandardMaterial
            color="#8B4A52"
            metalness={1.0}
            roughness={0.06}
            envMapIntensity={1.5}
          />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.65, 0.07, 16, 120]} />
          <meshStandardMaterial {...roseGoldProps} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2.85, 0.025, 8, 120]} />
          <meshStandardMaterial
            color="#E8B4B8"
            metalness={0.95}
            roughness={0.1}
          />
        </mesh>
      </group>
    </>
  );
}

const STATS = [
  { value: "∞", label: "Total Supply" },
  { value: "100%", label: "On-Chain" },
  { value: "2026", label: "Genesis Year" },
] as const;

export default function ExperienceSection() {
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((e.clientY - rect.top) / rect.height) * 2 + 1,
    };
  }, []);

  const handleMouseLeave = useCallback(() => {
    mouseRef.current = { x: 0, y: 0 };
  }, []);

  return (
    <SectionWrapper id="experience" className="relative">
      {/* Deep luxury dark background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #070306 0%, #0e060a 40%, #07040a 70%, #060308 100%)",
        }}
        aria-hidden="true"
      />
      {/* Ambient rose-gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 55% 55% at 50% 40%, rgba(183,110,121,0.12) 0%, transparent 70%)",
        }}
      />
      {/* Circuit texture */}
      <div
        className="absolute inset-0 pointer-events-none bg-circuit opacity-20"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-36">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p
            className="mb-5 font-body text-[10px] tracking-[0.5em] uppercase"
            style={{ color: "rgba(183,110,121,0.55)" }}
          >
            Interact With the Future
          </p>
          <h2
            className="font-display font-black uppercase leading-none tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              background:
                "linear-gradient(135deg, #8B4A52 0%, #B76E79 35%, #E8B4B8 55%, #C9856E 75%, #8B4A52 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              backgroundSize: "200% auto",
              animation: "diamond-shimmer 7s linear infinite",
            }}
          >
            The Experience
          </h2>
          <p
            className="mt-5 font-body text-xs tracking-[0.2em]"
            style={{ color: "rgba(183,110,121,0.45)" }}
          >
            A fully decentralized luxury artifact on the Internet Computer
          </p>
        </motion.div>

        {/* Canvas — much larger */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto overflow-hidden"
          style={{
            height: "clamp(450px, 60vh, 680px)",
            border: "1px solid rgba(183,110,121,0.2)",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          data-ocid="experience.canvas"
        >
          {(
            [
              "top-3 left-3 border-l border-t",
              "top-3 right-3 border-r border-t",
              "bottom-3 left-3 border-b border-l",
              "bottom-3 right-3 border-b border-r",
            ] as const
          ).map((pos) => (
            <div
              key={pos}
              aria-hidden="true"
              className={`pointer-events-none absolute h-8 w-8 ${pos}`}
              style={{ borderColor: "rgba(183,110,121,0.5)" }}
            />
          ))}

          <Canvas
            camera={{ position: [0, 0, 7], fov: 40 }}
            style={{ background: "transparent" }}
            gl={{ antialias: true, alpha: true }}
          >
            <CoinScene mouseRef={mouseRef} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate={false}
            />
          </Canvas>

          <p
            className="absolute bottom-5 left-1/2 -translate-x-1/2 font-body text-[9px] tracking-[0.5em] uppercase"
            style={{ color: "rgba(183,110,121,0.45)" }}
          >
            Drag to Interact
          </p>
        </motion.div>

        {/* Stats — borderless, minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 gap-0"
          data-ocid="experience.stats"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className="flex flex-col items-center gap-3 px-4 py-8 text-center"
              style={{
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid rgba(183,110,121,0.12)"
                    : "none",
              }}
            >
              <div
                className="w-8 h-px mb-1"
                style={{
                  background: "linear-gradient(90deg, #B76E79, #C9856E)",
                }}
              />
              <span
                className="font-display font-black uppercase leading-none"
                style={{
                  fontSize: "clamp(1.6rem, 4vw, 2.8rem)",
                  background:
                    "linear-gradient(135deg, #B76E79 0%, #E8B4B8 50%, #C9856E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </span>
              <span
                className="font-body text-[10px] tracking-[0.3em] uppercase"
                style={{ color: "rgba(183,110,121,0.45)" }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
