Asset extraction notes for `frame.png`

Extracted image assets:

- `assets/office-background-reconstructed.png`
  - Master background asset.
  - 1728 x 576 RGB PNG.
  - Reconstructed from the underlying office/interior photo.
  - Text, gold timeline linework, dots, the bottom vertical rule, and the dark navy legibility treatment were removed from the bitmap.
  - The scene was extended by 96 px horizontally and 32 px vertically beyond the original 1536 x 512 crop so it can be used with `object-fit: cover` / `background-size: cover`.
- `assets/office-background-reconstructed.jpg`
  - Web-ready version of the same background, progressive JPG at quality 88.

Do not extract:

- Headline, stage labels, and all other copy. Rebuild as semantic HTML text.
- Gold timeline rule, tick marks, dots, right-side curve, and bottom vertical accent. Rebuild as responsive inline SVG or CSS-positioned SVG strokes.
- Dark blue washes, gradients, and text-legibility overlays. Rebuild with CSS pseudo-elements above the background image.
- Ordinary surface grain/noise. Rebuild with CSS noise/grain if needed.
- The neutral Michael A. Epps portrait placeholder. No face or portrait asset was generated or extracted.

Background implementation recipe:

```css
.career-hero {
  position: relative;
  min-height: clamp(480px, 66.67vw, 720px);
  overflow: hidden;
  background-image: url("assets/office-background-reconstructed.jpg");
  background-size: cover;
  background-position: center;
  color: #f7f3ec;
}

.career-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 12% 45%, rgba(0, 26, 54, 0.58), transparent 32%),
    linear-gradient(90deg, rgba(0, 20, 42, 0.92), rgba(0, 26, 55, 0.76) 52%, rgba(0, 22, 48, 0.88)),
    rgba(0, 18, 38, 0.42);
  pointer-events: none;
}

.career-hero::after {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.08;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 25% 30%, rgba(255,255,255,0.25) 0 1px, transparent 1.5px),
    radial-gradient(circle at 70% 65%, rgba(255,255,255,0.18) 0 1px, transparent 1.5px);
  background-size: 9px 9px, 13px 13px;
  mix-blend-mode: soft-light;
}
```

Typography recipe:

- Use live serif text, not image slices.
- A close web-font match is `Cormorant Garamond`; use a local brand serif if available.
- Headline position: about 6.2% from the left and 14.5% from the top on the 1536 x 512 reference frame.
- Headline size: `clamp(34px, 3.2vw, 48px)`, line-height about `1.05`, font weight 500.
- Gold text color: `#d0a04a`; white text color: `#f7f3ec`.
- The first line is gold, with the word `focused` in italic. The second line is white.

Timeline recipe:

- Rebuild with one inline SVG positioned over the hero content.
- Reference coordinate system: `viewBox="0 0 1536 512"` with `preserveAspectRatio="none"` if the full composition scales with the hero.
- Stroke: `#d0a04a`, `stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`.
- Main horizontal path starts near `(246,244)`, runs to `(1248,244)`, then curves up and right:

```svg
<path d="M246 244 H1248
         C1270 244 1282 232 1282 210
         V150
         C1282 92 1325 67 1364 56
         C1428 38 1498 27 1536 0" />
```

- Tick/drop points are at x positions `246`, `575`, `923`, and `1248`, from y `244` to y `272`, ending in a small round dot.
- The lower vertical gold accent is a separate live stroke at about `x=768`, from `y=455` to the bottom edge.
- Place each stage label in semantic text blocks centered below the corresponding tick:
  - `Resident to` / `established physician`
  - `Employed to` / `practice owner`
  - `Peak earning years` / `to retirement`
  - `One strategy,` / `reviewed as life changes`

Suggested layout approach:

- Use the extracted JPG/PNG only for the office background layer.
- Stack the CSS wash/noise, then live content, then the SVG timeline.
- Keep all label text selectable and responsive.
- On narrow viewports, replace the long horizontal timeline with a vertical or stacked timeline rather than scaling the full 1536 px composition until the labels collide.
