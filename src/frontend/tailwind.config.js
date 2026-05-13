import typography from "@tailwindcss/typography";
import containerQueries from "@tailwindcss/container-queries";
import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["index.html", "src/**/*.{js,ts,jsx,tsx,html,css}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "oklch(var(--border))",
        input: "oklch(var(--input))",
        ring: "oklch(var(--ring) / <alpha-value>)",
        background: "oklch(var(--background))",
        foreground: "oklch(var(--foreground))",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "oklch(var(--popover))",
          foreground: "oklch(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "oklch(var(--card))",
          foreground: "oklch(var(--card-foreground))",
        },
        chart: {
          1: "oklch(var(--chart-1))",
          2: "oklch(var(--chart-2))",
          3: "oklch(var(--chart-3))",
          4: "oklch(var(--chart-4))",
          5: "oklch(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "oklch(var(--sidebar))",
          foreground: "oklch(var(--sidebar-foreground))",
          primary: "oklch(var(--sidebar-primary))",
          "primary-foreground": "oklch(var(--sidebar-primary-foreground))",
          accent: "oklch(var(--sidebar-accent))",
          "accent-foreground": "oklch(var(--sidebar-accent-foreground))",
          border: "oklch(var(--sidebar-border))",
          ring: "oklch(var(--sidebar-ring))",
        },
        /* Rose-gold / Diamond palette tokens */
        "rose-gold": "#C4878E",
        "rose-gold-2": "#D4956A",
        "rose-gold-light": "#E8B4B8",
        "rose-gold-dark": "#8B4A52",
        champagne: "#FAD7A0",
        "champagne-light": "#FEF3E2",
        "crystal-white": "#FDFCFB",
        "crystal-ice": "#F2EEF5",
        "diamond-blue": "#E8F4F8",
        "luxury-black": "#0a0608",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        editorial: ["Cormorant Garamond", "Fraunces", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgba(0,0,0,0.05)",
        cinematic: "0 20px 60px rgba(200, 100, 80, 0.15)",
        elevated: "0 8px 24px rgba(200, 100, 80, 0.1)",
        "rose-glow": "0 0 20px 4px rgba(196,135,142,0.4), 0 0 40px 10px rgba(196,135,142,0.18)",
        "rose-glow-sm": "0 0 10px 2px rgba(196,135,142,0.28), 0 0 20px 5px rgba(196,135,142,0.12)",
        "crystal": "0 4px 24px rgba(196,135,142,0.1), inset 0 1px 0 rgba(255,255,255,0.7)",
        "luxury-deep": "0 32px 80px rgba(10,6,8,0.6), 0 8px 32px rgba(196,135,142,0.2)",
        "editorial-glow": "0 0 0 1px rgba(196,135,142,0.3), 0 8px 40px rgba(196,135,142,0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slide-up": {
          from: { transform: "translateY(20px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-rise": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "rotate-slow": {
          from: { transform: "rotateZ(0deg)" },
          to: { transform: "rotateZ(360deg)" },
        },
        "sparkle": {
          "0%, 100%": { opacity: "0", transform: "scale(0.3) rotate(0deg)" },
          "20%": { opacity: "1", transform: "scale(1.2) rotate(15deg)" },
          "60%": { opacity: "1", transform: "scale(1.4) rotate(20deg)" },
          "80%": { opacity: "0.3", transform: "scale(0.6) rotate(-5deg)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "circuit-pulse": {
          "0%, 100%": { opacity: "0.06" },
          "50%": { opacity: "0.14" },
        },
        "diamond-float": {
          "0%, 100%": { transform: "translateY(0px) rotate(45deg) scale(1)", opacity: "0.7" },
          "50%": { transform: "translateY(-8px) rotate(45deg) scale(1.1)", opacity: "1" },
        },
        "particle-drift": {
          "0%": { transform: "translateY(0px) translateX(0px)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "0.6" },
          "100%": { transform: "translateY(-60px) translateX(20px)", opacity: "0" },
        },
        "logo-halo": {
          "0%, 100%": { boxShadow: "0 0 12px 2px rgba(183,110,121,0.3), 0 0 28px 6px rgba(201,133,110,0.15)" },
          "50%": { boxShadow: "0 0 20px 5px rgba(183,110,121,0.5), 0 0 44px 12px rgba(201,133,110,0.25)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out",
        "slide-up": "slide-up 0.6s ease-out",
        "float": "float 3s ease-in-out infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
        "sparkle": "sparkle 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
        "circuit-pulse": "circuit-pulse 6s ease-in-out infinite",
        "diamond-float": "diamond-float 4s ease-in-out infinite",
        "logo-halo": "logo-halo 3s ease-in-out infinite",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "fade-rise": "fade-rise 1.2s cubic-bezier(0.22,1,0.36,1) forwards",
        "particle-drift": "particle-drift 6s ease-in-out infinite",
      },
    },
  },
  plugins: [typography, containerQueries, animate],
};
