# Extracted Assets

## `assets/background-desk-fullscene.jpg`

- 2048 x 1152 JPG.
- Use as the full-bleed hero/background plate.
- Reconstructed from `frame.png` with the website UI removed: portrait placeholder/card, text, CTA button, borders, gold connector linework, and text-legibility overlays are not baked into the asset.
- The neutral center/right area has been filled as a natural continuation of the warm paper/photo field so live HTML can sit on top.
- No Michael A. Epps face or portrait placeholder asset was extracted. The real client portrait should be supplied at build time.

Suggested usage:

```css
.planner-hero {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: #f7f0e5;
}

.planner-hero__background {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: left center;
  z-index: 0;
}

.planner-hero__content {
  position: relative;
  z-index: 2;
}
```

# Build In Code

Do not extract these from the screenshot:

- All headline/body/name/credential/CTA text.
- The dark navy CTA button and arrow.
- The portrait frame and inset border.
- The neutral Michael A. Epps placeholder silhouette.
- The gold connector lines, short eyebrow rule, long headline rule, and dots.
- The warm paper field, ordinary grain, and simple geometric layout.

Approximate design tokens:

```css
:root {
  --planner-cream: #f7f0e5;
  --planner-navy: #071b3d;
  --planner-gold: #b5872b;
  --planner-border: #c8bea9;
  --planner-body: #111827;
}
```

Use live type. A close web-font pairing is `Cormorant Garamond` or `Playfair Display` for the large serif display text, and `Inter` or `Helvetica Neue` for the body/button text. The eyebrow label is small uppercase sans-serif with wide letter spacing.

Portrait frame recipe:

```css
.planner-card {
  aspect-ratio: 405 / 620;
  border: 1px solid var(--planner-border);
  outline: 1px solid color-mix(in srgb, var(--planner-border), white 35%);
  outline-offset: -7px;
  background: rgba(236, 232, 224, 0.72);
}

.planner-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
```

Gold linework can be rebuilt as one absolutely positioned inline SVG over a `1536 864` viewBox and scaled with the hero:

```html
<svg class="planner-lines" viewBox="0 0 1536 864" aria-hidden="true">
  <g fill="none" stroke="#b5872b" stroke-width="2">
    <path d="M686 112 C686 82 710 62 746 62 H876 C916 62 940 38 940 0" />
    <path d="M188 408 H310" />
    <path d="M677 733 V807" />
    <path d="M809 193 H876" />
    <path d="M809 432 H1379" />
  </g>
  <circle cx="677" cy="807" r="4" fill="#b5872b" />
  <circle cx="1379" cy="432" r="4" fill="#b5872b" />
</svg>
```

The paper/grain effect should remain CSS, not an extracted image:

```css
.planner-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background:
    radial-gradient(circle at 63% 43%, rgba(255,255,255,0.26), transparent 34%),
    linear-gradient(90deg, rgba(247,240,229,0) 0 22%, rgba(247,240,229,0.22) 44%, rgba(247,240,229,0.08) 100%);
}
```
