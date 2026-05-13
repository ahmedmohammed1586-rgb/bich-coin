import { r as reactExports, j as jsxRuntimeExports } from "./index-CDf9X8Zq.js";
import { m as motion } from "./proxy-CKv7ZjxT.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
      key: "pff0z6"
    }
  ]
];
const Twitter = createLucideIcon("twitter", __iconNode);
const socialLinks = [
  {
    id: "twitter",
    label: "Twitter / X",
    sub: "Follow the movement",
    href: "https://twitter.com",
    icon: Twitter
  },
  {
    id: "telegram",
    label: "Telegram",
    sub: "Join the inner circle",
    href: "https://t.me",
    icon: Send
  }
];
const marqueeText = "BITCH COIN · LUXURY MEETS POWER · GENESIS COLLECTION · LIMITED EDITION · DIAMOND SERIES · SS 2026 · ";
function MemberCard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 32 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true },
      transition: { duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] },
      className: "relative w-full max-w-xs mx-auto overflow-hidden",
      style: {
        aspectRatio: "85.6/53.98",
        borderRadius: "12px",
        background: "linear-gradient(135deg, #1a0c10 0%, #2d1520 30%, #3a1a25 55%, #1a0c10 100%)",
        border: "1px solid rgba(183,110,121,0.3)",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(183,110,121,0.1)"
      },
      "data-ocid": "community.member_card",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "linear-gradient(105deg, transparent 20%, rgba(183,110,121,0.07) 45%, rgba(245,213,197,0.12) 50%, rgba(183,110,121,0.07) 55%, transparent 80%)",
              animation: "shimmer-sweep 3s ease-in-out infinite"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute pointer-events-none",
            style: {
              top: "-30%",
              right: "-20%",
              width: "55%",
              height: "120%",
              background: "radial-gradient(ellipse at center, rgba(201,133,110,0.18) 0%, transparent 70%)"
            },
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 p-5 flex flex-col justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-body text-[7px] tracking-[0.4em] uppercase mb-1",
                  style: { color: "rgba(183,110,121,0.55)" },
                  children: "Member Card"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-display font-black text-xs tracking-widest uppercase",
                  style: {
                    background: "linear-gradient(135deg, #E8B4B8 0%, #C9856E 60%, #B76E79 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  },
                  children: "Bitch Coin"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-8 h-8 rounded-full overflow-hidden",
                style: { border: "1px solid rgba(183,110,121,0.4)" },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/assets/logo-main.jpg",
                    alt: "",
                    className: "w-full h-full object-cover",
                    "aria-hidden": "true"
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "w-8 h-6 rounded-sm",
              style: {
                background: "linear-gradient(135deg, #C9856E, #B76E79, #E8B4B8, #C9856E)",
                opacity: 0.7
              },
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-display font-black text-sm tracking-[0.2em] uppercase mb-1",
                style: {
                  background: "linear-gradient(135deg, #F5E0DC 0%, #C9856E 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                },
                children: "Inner Circle Member"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "p",
              {
                className: "font-body text-[8px] tracking-[0.3em] uppercase",
                style: { color: "rgba(183,110,121,0.4)" },
                children: "Genesis Edition · SS 2026"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
function CommunitySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "community",
      className: "relative w-full overflow-hidden",
      style: {
        background: "linear-gradient(180deg, #FBF5F2 0%, #F5ECE7 100%)",
        borderTop: "1px solid rgba(183,110,121,0.12)"
      },
      "data-ocid": "community.section",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none bg-circuit opacity-40",
            "aria-hidden": "true"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 pt-24 md:pt-36 px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 12 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
              className: "text-center font-body text-[10px] tracking-[0.5em] uppercase mb-8",
              style: { color: "rgba(183,110,121,0.6)" },
              "data-ocid": "community.label",
              children: "Join the Movement"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.h2,
            {
              initial: { opacity: 0, y: 28 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] },
              className: "font-display font-black leading-none tracking-tight text-center",
              style: {
                fontSize: "clamp(3.5rem, 10vw, 9rem)",
                background: "linear-gradient(135deg, #1a0c10 0%, #8B4A52 25%, #B76E79 50%, #C9856E 75%, #1a0c10 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                backgroundSize: "200% auto",
                animation: "diamond-shimmer 8s linear infinite"
              },
              "data-ocid": "community.headline",
              children: [
                "The Inner",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Circle"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 16 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: {
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94]
              },
              className: "font-display italic text-center mt-6 mb-16",
              style: {
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                color: "rgba(183,110,121,0.65)"
              },
              "data-ocid": "community.tagline",
              children: "Exclusive. Private. Powerful."
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center pb-24 md:pb-32", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                initial: { opacity: 0, x: -24 },
                whileInView: { opacity: 1, x: 0 },
                viewport: { once: true },
                transition: {
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94]
                },
                className: "flex flex-col gap-4",
                "data-ocid": "community.social_buttons",
                children: socialLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: link.href,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "group relative flex items-center justify-between px-7 py-5 overflow-hidden",
                    style: {
                      border: "1px solid rgba(183,110,121,0.22)",
                      transition: "border-color 400ms ease, background 400ms ease"
                    },
                    onMouseEnter: (e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(183,110,121,0.55)";
                      el.style.background = "rgba(183,110,121,0.04)";
                    },
                    onMouseLeave: (e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(183,110,121,0.22)";
                      el.style.background = "transparent";
                    },
                    "data-ocid": `community.social_btn.${link.id}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none",
                          style: {
                            background: "linear-gradient(105deg, transparent 30%, rgba(183,110,121,0.06) 50%, transparent 70%)",
                            animation: "shimmer-sweep 2s ease-in-out infinite",
                            transition: "opacity 400ms ease"
                          },
                          "aria-hidden": "true"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "w-9 h-9 rounded-full flex items-center justify-center",
                            style: {
                              background: "rgba(183,110,121,0.1)",
                              border: "1px solid rgba(183,110,121,0.2)"
                            },
                            children: /* @__PURE__ */ jsxRuntimeExports.jsx(link.icon, { size: 15, style: { color: "#B76E79" } })
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-display font-black text-sm tracking-[0.1em] uppercase",
                              style: {
                                background: "linear-gradient(135deg, #8B4A52, #B76E79, #C9856E)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text"
                              },
                              children: link.label
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "p",
                            {
                              className: "font-body text-[10px] tracking-[0.25em] uppercase",
                              style: { color: "rgba(183,110,121,0.5)" },
                              children: link.sub
                            }
                          )
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          width: "16",
                          height: "16",
                          viewBox: "0 0 16 16",
                          fill: "none",
                          className: "group-hover:translate-x-1 transition-transform duration-300",
                          "aria-hidden": "true",
                          style: { flexShrink: 0 },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "path",
                            {
                              d: "M3 8h10M9 4l4 4-4 4",
                              stroke: "#B76E79",
                              strokeWidth: "1",
                              strokeLinecap: "round",
                              strokeLinejoin: "round"
                            }
                          )
                        }
                      )
                    ]
                  },
                  link.id
                ))
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(MemberCard, {})
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "overflow-hidden py-3.5 relative",
            style: {
              background: "#0e0608",
              borderTop: "1px solid rgba(183,110,121,0.2)"
            },
            "data-ocid": "community.marquee",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "flex whitespace-nowrap",
                style: { animation: "marquee-scroll 28s linear infinite" },
                children: ["a", "b", "c", "d"].map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "font-body text-[9px] tracking-[0.4em] uppercase",
                    style: {
                      background: "linear-gradient(90deg, #B76E79, #E8B4B8, #C9856E, #B76E79)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    },
                    children: marqueeText
                  },
                  id
                ))
              }
            )
          }
        )
      ]
    }
  );
}
export {
  CommunitySection as default
};
