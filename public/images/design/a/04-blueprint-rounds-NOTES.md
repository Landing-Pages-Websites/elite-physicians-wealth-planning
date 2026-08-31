# Extraction Notes

## Extracted Assets

- `assets/desk-still-life-background.jpg`
  - Reconstructed full-bleed still-life background.
  - Size: `1600x900`.
  - Source UI overlays removed: logo, headline, body copy, process rail, step labels, icons, CTA, bottom rule, and the small geometric book stamp.
  - The asset includes a narrow crop extension beyond the original `1536x864` frame: `32px` left/right and `18px` top/bottom before scaling.
  - Use as a background image with live HTML/CSS layered above it.

No face or portrait asset was extracted. The neutral Michael A. Epps placeholder should remain a live placeholder/container and be replaced by the real client portrait at build time.

## Background Recipe

Use the extracted still-life as the only raster background.

```css
.hero {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: #f6f1e7;
}

.hero__bg {
  position: absolute;
  inset: -2.083%;
  width: 104.166%;
  height: 104.166%;
  object-fit: fill;
  object-position: center;
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background:
    linear-gradient(90deg, rgba(248,244,235,.94) 0%, rgba(248,244,235,.72) 39%, rgba(248,244,235,.18) 64%, rgba(248,244,235,0) 82%),
    linear-gradient(0deg, rgba(248,244,235,.92) 0%, rgba(248,244,235,.42) 27%, rgba(248,244,235,0) 55%);
}
```

The `-2.083%` inset crops away the added extension for a close match to the supplied frame. If the page needs looser responsive cropping, use `inset: 0; width: 100%; height: 100%; object-fit: cover;`.

Add ordinary grain in CSS, not as an extracted image:

```css
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: .045;
  z-index: 2;
  background-image:
    radial-gradient(circle at 20% 10%, rgba(5,22,42,.18) 0 1px, transparent 1px),
    radial-gradient(circle at 70% 60%, rgba(160,126,47,.12) 0 1px, transparent 1px);
  background-size: 5px 5px, 7px 7px;
}
```

## Live UI Recipe

Do not extract these as images.

- Palette:
  - Navy: `#001f3f`
  - Ink: `#101820`
  - Gold: `#b88a1d`
  - Light cream: `#f8f4eb`
- Typography:
  - Logo and headline: high-contrast serif such as `Cormorant Garamond`, `Libre Baskerville`, or a licensed editorial serif.
  - Body/UI: `Inter`, `Avenir`, or a similar neutral sans.
  - Logo: uppercase, `letter-spacing: .34em`, `font-size: 17px`, navy, with a `1px` gold rule underneath.
  - Eyebrow: uppercase, `letter-spacing: .17em`, `font-size: 16px`, gold.
  - Headline: serif, `font-size: clamp(48px, 4.4vw, 68px)`, `line-height: 1.05`, navy.
  - Body copy: sans, `font-size: 16px`, `line-height: 1.55`, ink.

## Process Rail

Build the rail as responsive inline SVG or absolutely positioned SVG. Use live text for all labels and descriptions.

```svg
<svg viewBox="0 0 1536 864" aria-hidden="true" class="process-rail">
  <g fill="none" stroke="#b88a1d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
    <path d="M0 716 H104 Q132 716 132 688 V535" />
    <path d="M342 650 V620 Q342 582 380 582 H572 V505" />
    <path d="M762 655 V620 Q762 582 800 582 H1023 V486" />
    <path d="M1274 675 V734 Q1274 759 1300 759 H1502" />
    <path d="M1489 747 L1502 759 L1489 771" />
  </g>
  <g fill="#f8f4eb" stroke="#b88a1d" stroke-width="3">
    <circle cx="132" cy="556" r="6" />
    <circle cx="342" cy="620" r="6" />
    <circle cx="572" cy="505" r="6" />
    <circle cx="762" cy="620" r="6" />
    <circle cx="1023" cy="505" r="6" />
    <circle cx="1274" cy="675" r="6" />
  </g>
</svg>
```

For each numbered icon, use an inline SVG component:

- Container: `78px` circle, navy fill, double gold/cream ring.
- Icon strokes: gold `#d3a32b`, `2px`, round caps.
- Step icons: compass, magnifier, connected nodes/arrow, clipboard checklist, bar chart with arrow, calendar. These are geometric and should remain inline SVG or icon-library components.
- Step numbers: gold serif, `38px`, line-height `1`.
- Step headings: serif, navy, `28px`.
- Step descriptions: sans, ink, `14px`, line-height `1.35`.

## CTA Button

Build live:

```css
.process-cta {
  display: inline-flex;
  align-items: center;
  gap: 18px;
  height: 56px;
  padding: 0 28px;
  border: 2px solid #b88a1d;
  border-radius: 6px;
  color: #fffaf0;
  background: linear-gradient(180deg, #062b54 0%, #001f3f 100%);
  font-family: "Cormorant Garamond", serif;
  font-size: 26px;
  line-height: 1;
}
```

Use a live arrow glyph or inline SVG for the arrow.
