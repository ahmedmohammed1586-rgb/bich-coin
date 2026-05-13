import { j as jsxRuntimeExports } from "./index-CDf9X8Zq.js";
import { m as motion } from "./proxy-CKv7ZjxT.js";
const paragraphs = [
  {
    id: "statement",
    text: "Bitch Coin is not a currency. It is a statement — a declaration of power, elegance, and dominance in the digital age."
  },
  {
    id: "intersection",
    text: "Where Wall Street meets the runway. Where blockchain meets couture. This is the intersection of luxury and the limitless future."
  },
  {
    id: "genesis",
    text: "The genesis collection is limited. The movement is not."
  }
];
function AboutSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "about",
      className: "relative w-full overflow-hidden",
      style: {
        background: "oklch(0.97 0.01 50)",
        padding: "clamp(5rem, 10vw, 10rem) 0 clamp(5rem, 10vw, 10rem)"
      },
      "data-ocid": "about.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute pointer-events-none select-none",
            style: {
              right: "-2%",
              top: "50%",
              transform: "translateY(-55%)",
              fontFamily: "var(--font-display)",
              fontSize: "clamp(12rem, 28vw, 26rem)",
              fontWeight: "900",
              lineHeight: "1",
              background: "linear-gradient(135deg, rgba(183,110,121,0.04) 0%, rgba(201,133,110,0.07) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            },
            "aria-hidden": "true",
            children: "I"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-6 md:px-14", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-16 md:gap-24 items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.3 },
                transition: { duration: 0.9, ease: "easeOut" },
                className: "flex flex-col gap-7",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] tracking-[0.5em] uppercase",
                      style: { color: "rgba(183,110,121,0.6)" },
                      "data-ocid": "about.label",
                      children: "About"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "h2",
                    {
                      className: "font-display font-black leading-none uppercase",
                      style: {
                        fontSize: "clamp(3.5rem, 8vw, 7rem)",
                        background: "linear-gradient(160deg, #1a0d0f 0%, #8B4A52 35%, #C9856E 65%, #1a0d0f 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      },
                      "data-ocid": "about.headline",
                      children: [
                        "Born From",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                        "Power"
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "mt-4 pl-5",
                      style: { borderLeft: "2px solid #B76E79" },
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "p",
                        {
                          className: "font-display italic leading-snug",
                          style: {
                            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                            background: "linear-gradient(135deg, #B76E79 0%, #C9856E 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text"
                          },
                          children: '"Power wears no logo — until now."'
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: "font-body text-[10px] tracking-[0.35em] uppercase mt-2",
                      style: { color: "rgba(183,110,121,0.5)" },
                      "data-ocid": "about.edition",
                      children: "001 / Genesis — SS 2026"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 40 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true, amount: 0.2 },
                transition: { duration: 0.9, ease: "easeOut", delay: 0.15 },
                className: "flex flex-col gap-8 pt-0 md:pt-12",
                children: paragraphs.map(({ id, text }, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 16 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: {
                      duration: 0.7,
                      delay: 0.2 + i * 0.15,
                      ease: "easeOut"
                    },
                    className: "font-body text-base md:text-lg",
                    style: { lineHeight: "1.9", color: "oklch(0.38 0.05 38)" },
                    "data-ocid": `about.para.${id}`,
                    children: text
                  },
                  id
                ))
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scaleX: 0 },
              whileInView: { scaleX: 1 },
              viewport: { once: true, amount: 0.8 },
              transition: { duration: 1.4, ease: "easeOut", delay: 0.2 },
              className: "mt-24 h-px w-full",
              style: {
                background: "linear-gradient(90deg, transparent 0%, #B76E79 20%, #E8B4B8 50%, #C9856E 80%, transparent 100%)",
                transformOrigin: "left"
              },
              "data-ocid": "about.divider"
            }
          )
        ] })
      ]
    }
  );
}
export {
  AboutSection as default
};
