import { j as jsxRuntimeExports, r as reactExports } from "./index-CDf9X8Zq.js";
import { m as motion } from "./proxy-CKv7ZjxT.js";
function DiamondStar({
  size = 10,
  className = "",
  id
}) {
  const gradId = id ?? `sg-${size}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      width: size,
      height: size,
      viewBox: "0 0 20 20",
      fill: "none",
      className,
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: "M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z",
            fill: `url(#${gradId})`
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: gradId, x1: "0%", y1: "0%", x2: "100%", y2: "100%", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "#B76E79" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "50%", stopColor: "#F5E0DC" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "#C9856E" })
        ] }) })
      ]
    }
  );
}
const FLOAT_DIAMONDS = [
  { top: "14%", left: "7%", size: 12, cls: "sparkle-1", id: "fd1" },
  { top: "72%", left: "12%", size: 8, cls: "sparkle-3", id: "fd2" },
  { top: "38%", left: "48%", size: 6, cls: "sparkle-5", id: "fd3" },
  { top: "88%", left: "60%", size: 10, cls: "sparkle-2", id: "fd4" }
];
function FloatingDiamonds() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "diamond-dust z-10", "aria-hidden": "true", children: FLOAT_DIAMONDS.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `absolute ${d.cls}`,
      style: { top: d.top, left: d.left },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiamondStar, { size: d.size, id: d.id })
    },
    d.id
  )) });
}
function GrainOverlay() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute inset-0 pointer-events-none z-10 opacity-[0.022]",
      style: {
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
        mixBlendMode: "multiply"
      },
      "aria-hidden": "true"
    }
  );
}
function FadeUp({
  children,
  delay = 0,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className,
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.9, ease: "easeOut", delay },
      children
    }
  );
}
function HeroVideoPanel() {
  const videoRef = reactExports.useRef(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      className: "absolute inset-0",
      initial: { opacity: 0, x: 60 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 1.1, ease: "easeOut", delay: 0.35 },
      "data-ocid": "hero-video-panel",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(160deg, #2a0e14 0%, #4a1a24 30%, #6b2d3a 55%, #8B4A52 75%, #C9856E 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "video",
          {
            ref: videoRef,
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            preload: "auto",
            src: "/assets/hero-bg.mp4",
            className: "absolute inset-0 w-full h-full object-cover",
            style: { display: "block" },
            "data-ocid": "hero-video"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-y-0 left-0 w-32 pointer-events-none z-10",
            style: {
              background: "linear-gradient(to right, oklch(0.97 0.015 48) 0%, oklch(0.97 0.015 48 / 0.7) 35%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-0 right-0 h-28 pointer-events-none z-10",
            style: {
              background: "linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 right-0 h-36 pointer-events-none z-10",
            style: {
              background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-y-0 left-0 w-px pointer-events-none z-20",
            style: {
              background: "linear-gradient(to bottom, transparent 0%, #B76E79 20%, #E8B4B8 50%, #C9856E 80%, transparent 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-6 right-6 sparkle-2 pointer-events-none z-20",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiamondStar, { size: 16, id: "vpc1" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-6 right-8 sparkle-4 pointer-events-none z-20",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(DiamondStar, { size: 11, id: "vpc2" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-4 right-4 w-10 h-10 pointer-events-none z-20",
            style: {
              borderTop: "1.5px solid rgba(232,180,184,0.7)",
              borderRight: "1.5px solid rgba(232,180,184,0.7)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-4 right-4 w-10 h-10 pointer-events-none z-20",
            style: {
              borderBottom: "1.5px solid rgba(232,180,184,0.7)",
              borderRight: "1.5px solid rgba(232,180,184,0.7)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-6 left-0 right-0 flex justify-center pointer-events-none z-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px w-10",
              style: {
                background: "linear-gradient(to right, transparent, rgba(232,180,184,0.6))"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "font-mono uppercase tracking-[0.35em] text-[9px]",
              style: { color: "rgba(232,180,184,0.75)" },
              children: "BITCH COIN EXCLUSIVE"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "h-px w-10",
              style: {
                background: "linear-gradient(to left, transparent, rgba(232,180,184,0.6))"
              }
            }
          )
        ] }) })
      ]
    }
  );
}
const STATS = [
  { value: "$4.2B", label: "Market Cap" },
  { value: "2.1M", label: "Holders" },
  { value: "Top 10", label: "Exchange" }
];
function HeroSection() {
  const handleScroll = () => {
    var _a;
    (_a = document.getElementById("collection")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "hero",
      className: "relative w-full overflow-hidden",
      style: { height: "100dvh", minHeight: "600px" },
      "data-ocid": "hero-section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 z-0",
            style: {
              background: "linear-gradient(135deg, oklch(0.99 0.008 55) 0%, oklch(0.97 0.02 48) 50%, oklch(0.96 0.025 45) 100%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 bg-circuit opacity-40 z-0",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute z-0 pointer-events-none",
            style: {
              top: "20%",
              left: "0",
              width: "40%",
              height: "60%",
              background: "radial-gradient(ellipse at left, rgba(183,110,121,0.13) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GrainOverlay, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingDiamonds, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col md:flex-row z-20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative flex flex-col justify-center z-20",
              style: {
                flex: "0 0 55%",
                paddingLeft: "clamp(2rem, 6vw, 6rem)",
                paddingRight: "clamp(1.5rem, 3vw, 3rem)"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "logo-halo rounded-full overflow-hidden shrink-0",
                      style: { width: 64, height: 64 },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: "/assets/logo-main.jpg",
                          alt: "Bitch Coin",
                          className: "w-full h-full object-cover"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    DiamondStar,
                    {
                      size: 8,
                      className: "absolute -top-2 -right-3 sparkle-1",
                      id: "logo-spark"
                    }
                  ) })
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.22, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 mb-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-px w-8 shrink-0",
                      style: {
                        background: "linear-gradient(to right, transparent, #B76E79)"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "p",
                    {
                      className: "font-mono uppercase tracking-[0.38em] text-[10px]",
                      style: { color: "#B76E79" },
                      children: "SS 2026 — Limited Edition"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.38, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "h1",
                  {
                    className: "font-display font-black leading-[0.88] uppercase mb-1",
                    style: {
                      fontSize: "clamp(4.5rem, 9vw, 11rem)",
                      letterSpacing: "-0.03em",
                      background: "linear-gradient(160deg, #6b2d3a 0%, #B76E79 28%, #E8C4A8 48%, #C9856E 65%, #B76E79 82%, #8B4A52 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "220% auto",
                      animation: "diamond-shimmer 6s linear infinite"
                    },
                    "data-ocid": "hero-title",
                    children: [
                      "BITCH",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                      "COIN"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.52, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "my-5 h-px",
                    style: {
                      width: "clamp(3rem, 8vw, 6rem)",
                      background: "linear-gradient(90deg, #B76E79, #E8B4B8, #C9856E)"
                    }
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.62, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-display italic leading-snug mb-5",
                    style: {
                      fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)",
                      color: "oklch(0.38 0.08 38)",
                      letterSpacing: "0.01em"
                    },
                    "data-ocid": "hero-tagline",
                    children: "Luxury Meets Power."
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.74, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: "font-body text-sm leading-loose max-w-xs mb-8",
                    style: { color: "oklch(0.48 0.04 50)", lineHeight: "1.85" },
                    children: "Where blockchain sovereignty meets haute couture. An asset as rare as a cut diamond — forged for those who set the market, never follow it."
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 0.88, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex flex-wrap items-center gap-4 mb-10",
                    "data-ocid": "hero-ctas",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: handleScroll,
                          className: "shimmer-rose-gold font-body text-[10px] tracking-[0.3em] uppercase px-8 py-4 transition-smooth",
                          style: {
                            background: "linear-gradient(135deg, #8B4A52 0%, #B76E79 45%, #C9856E 100%)",
                            backgroundSize: "200% auto",
                            color: "#fff",
                            letterSpacing: "0.28em",
                            boxShadow: "0 6px 28px rgba(139,74,82,0.38), 0 2px 8px rgba(183,110,121,0.2)"
                          },
                          "data-ocid": "cta-enter",
                          children: "ENTER THE VAULT"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          onClick: () => {
                            var _a;
                            return (_a = document.getElementById("collections")) == null ? void 0 : _a.scrollIntoView({ behavior: "smooth" });
                          },
                          className: "crystal-card crystal-card-hover font-body text-[10px] tracking-[0.28em] uppercase px-8 py-4 transition-smooth",
                          style: { color: "#B76E79", letterSpacing: "0.28em" },
                          "data-ocid": "cta-collection",
                          children: "VIEW COLLECTION"
                        }
                      )
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(FadeUp, { delay: 1.04, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: "flex gap-8 pt-5 border-t",
                    style: { borderColor: "rgba(183,110,121,0.2)" },
                    children: STATS.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-display font-bold",
                          style: {
                            fontSize: "clamp(1rem, 1.8vw, 1.4rem)",
                            background: "linear-gradient(135deg, #B76E79 0%, #C9856E 60%, #8B4A52 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: stat.value
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "span",
                        {
                          className: "font-mono text-[9px] tracking-[0.2em] uppercase",
                          style: { color: "oklch(0.58 0.04 50)" },
                          children: stat.label
                        }
                      )
                    ] }, stat.label))
                  }
                ) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden", style: { flex: "0 0 45%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVideoPanel, {}) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @media (max-width: 767px) {
          [data-ocid="hero-section"] > div.absolute.inset-0.flex {
            flex-direction: column;
          }
          [data-ocid="hero-section"] > div.absolute.inset-0.flex > div:first-child {
            flex: 0 0 55% !important;
            padding-top: 2rem;
            padding-bottom: 1rem;
          }
          [data-ocid="hero-section"] > div.absolute.inset-0.flex > div:last-child {
            flex: 1 1 auto !important;
            min-height: 220px;
          }
        }
      ` }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.button,
          {
            type: "button",
            onClick: handleScroll,
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2.2, duration: 0.8 },
            className: "absolute bottom-6 left-[27.5%] -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer transition-smooth hover:opacity-60",
            "data-ocid": "hero-scroll-indicator",
            "aria-label": "Scroll to content",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "font-mono text-[8px] tracking-[0.4em] uppercase",
                  style: { color: "oklch(0.58 0.04 50)" },
                  children: "Scroll"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "w-px h-7 overflow-hidden",
                  style: { background: "rgba(183,110,121,0.18)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.div,
                    {
                      className: "w-full h-full",
                      style: { background: "#B76E79" },
                      animate: { y: ["-100%", "100%"] },
                      transition: {
                        duration: 1.4,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear"
                      }
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
}
function PeachCoin() {
  return null;
}
function CoinRing() {
  return null;
}
function CoinScene() {
  return null;
}
export {
  CoinRing,
  CoinScene,
  GrainOverlay as DiamondDust,
  DiamondStar,
  GrainOverlay,
  HeroVideoPanel,
  PeachCoin,
  HeroSection as default
};
