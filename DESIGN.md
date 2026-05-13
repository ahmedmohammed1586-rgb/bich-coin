# Design Brief

**Purpose & Tone:** Ultra-premium luxury fashion brand applied to crypto. Dark, cinematic, editorial, exclusive. Zero meme energy — pure elegance.

**Color Palette (Dark Mode):**

| Role | OKLCH | Usage |
|------|-------|-------|
| Background | 0.08 0 0 | Deep black foundation, hero & main sections |
| Foreground | 0.95 0 0 | Clean white text on dark |
| Primary (Gold) | 0.62 0.16 65 | CTA buttons, key accents, headlines |
| Accent (Chrome) | 0.88 0.06 286 | Interactive states, secondary highlights, borders |
| Card | 0.12 0 0 | Elevated surfaces, collection cards, modals |
| Muted | 0.25 0 0 | Secondary content, disabled states |
| Border | 0.2 0 0 | Subtle dividers, minimal structural lines |

**Typography:**

- **Display:** Fraunces (serif, bold) — headlines, hero title, section headers. Ultra-distinctive luxury feel.
- **Body:** Plus Jakarta Sans (sans-serif, regular) — body copy, descriptions, UI labels. Refined, geometric, modern.
- **Mono:** JetBrains Mono — technical/code content, captions.

**Elevation & Depth:**

- Shadow hierarchy: `shadow-elevated` (0 8px 24px), `shadow-cinematic` (0 20px 60px)
- Card backgrounds at `0.12 0 0` sit above base `0.08 0 0` for subtle depth
- Border usage minimal — depth via layering and shadow, not stroke weight

**Structural Zones:**

| Zone | Background | Border | Shadow | Intent |
|------|-----------|--------|--------|--------|
| Header | 0.12 0 0 | border-border subtle | none | Navigation floating above content |
| Hero | 0.08 0 0 | none | none | Fullscreen cinematic stage |
| Content Sections | 0.08 0 0 alternating 0.1 0 0 | border-border on cards | elevated on cards | Clean rhythm, layered depth |
| Footer | 0.1 0 0 | border-t border-border | none | Grounded closure |

**Spacing & Rhythm:**

- Base unit: 4px. Cards: 2rem gap, section padding: 4rem vertical / 2rem horizontal mobile, 6rem vertical / 4rem horizontal desktop.
- Generous whitespace around typography — anti-cramped, editorial.

**Component Patterns:**

- Buttons: Gold primary (0.62 0.16 65) on dark, white text, minimal radii (0.25rem). Hover: lighter gold (0.65 0.16 65) with smooth transition.
- Cards: Thin border (1px border-border), subtle shadow-elevated, hover: slight glow via accent color overlay or transform scale (1.02).
- Links: Gold underline on hover, smooth 0.4s transition.
- Image placeholders: 1px border-border, centered "UPLOAD X" label in light grey text.

**Motion & Interaction:**

- Fade-ins on scroll: `animate-fade-in` (0.6s ease-out)
- Parallax: subtle Y-offset on scroll (10–20px range)
- Hover effects: `scale-105` on cards, gold glow on buttons, smooth 0.4s transitions
- Floating 3D coin: `animate-float` continuous loop, `animate-rotate-slow` for rotation
- No bounce or flashy spring effects — luxury is restrained motion

**Signature Detail:**

- Gold metallics used sparingly: CTA buttons, accent borders on hero section, link hovers. Restraint over saturation.
- Cinematic shadows create depth without visual noise. Editorial typography with refined letterspacing (0.05em).
- Minimal UI chrome — navigation, icons in neutral colors, reserve gold for action states.

**Constraints & Guardrails:**

- No rainbow gradients. Only gold and chrome gradients (linear 135deg).
- Never use bright, saturated colors outside gold/chrome palette.
- Borders stay minimal (0.2 0 0) — depth via shadow and layering, not stroke.
- Animation durations: 0.4–0.6s default, 20s for idle rotation. No jarring instant transitions.
- Mobile: single-column layout, cards full-width, preserve all spacing and typography hierarchy.
- Accessibility: maintain 7:1 contrast (white text on 0.08 0 0 background), keyboard navigation on all interactive elements.
