Asset extraction notes for `frame.png`

Raster assets extracted

- `assets/physicians-specialists.jpg`
  - Medical consultation scene.
  - Use in the "Physicians & specialists" card.
  - Saved with perimeter bleed reconstructed from the embedded photo so the card can crop responsively.
- `assets/surgeons.jpg`
  - Surgeon tying cap in an operating room.
  - Use in the "Surgeons" card.
  - No label, card border, tint wash, or accent linework is baked in.
- `assets/dentists-dental-specialists.jpg`
  - Dental chair/equipment scene.
  - Use in the "Dentists & dental specialists" card.
  - Reconstructed as a wide scene with crop bleed.
- `assets/practice-owners-partners.jpg`
  - Financial planning paperwork/meeting scene.
  - Use in the "Practice owners & partners" card.
  - Text and card chrome stay live in HTML/CSS.
- `assets/healthcare-executives.jpg`
  - White-coat professional walking through a clinical office corridor.
  - Use in the "CRNAs, NPs, PAs & healthcare executives" card.
  - This is a back-facing figure only; no Michael A. Epps placeholder face was generated or extracted.

What should stay in code

- Page background: CSS, not an image. Use a pale blue/off-white layered background:
  - Base: `linear-gradient(110deg, #f3f9fc 0%, #eaf5f9 52%, #f8fbfd 100%)`.
  - Soft depth: add radial gradients such as `radial-gradient(circle at 18% 20%, rgba(255,255,255,.9), transparent 34rem)` and `radial-gradient(circle at 80% 70%, rgba(194,220,231,.34), transparent 30rem)`.
  - Grain: pseudo-element with low-opacity `repeating-radial-gradient(circle, rgba(8, 39, 76, .08) 0 1px, transparent 1px 4px)` at `opacity: .10-.16`.
- Diagonal path decorations: responsive inline SVG, not raster.
  - Stroke: navy `#0b2a52`, `stroke-width: 1.5`, no fill.
  - Gold nodes: `#c8952f` circles with white stroke.
  - Short perpendicular tick marks are simple SVG line segments rotated around the path.
  - Position one path from the top-left edge toward the top center and another from the lower-right edge toward the lower center.
- Card shells: semantic HTML and CSS.
  - White card background, square edges or `border-radius: 0`.
  - Very light border: `1px solid rgba(255,255,255,.86)`.
  - Subtle shadow only if needed: `0 14px 36px rgba(10, 34, 62, .08)`.
  - Card text remains live HTML.
- Gold rule beside each card label: CSS pseudo-elements.
  - Vertical line: `1px` wide, `#c8952f`, about `72px` tall.
  - Dot: `9px` circle centered on the rule near the heading baseline.
- CTA button and route callout: HTML/CSS/SVG.
  - Button fill: deep navy `#052a5c`.
  - Button text: white.
  - Arrow: inline SVG/lucide arrow in gold `#c8952f`.
  - Dashed connector and small dot are CSS border/SVG, not an image.
- Typography: live text.
  - A close system stack is `Inter, Avenir Next, Segoe UI, system-ui, sans-serif`.
  - Main navy: `#082650`.
  - Eyebrow: uppercase, letter spacing around `.22em`, font weight `800`.

Cropping recipe

- Treat the JPG files as bleed masters.
- For the closest match to `frame.png`, crop the images inside fixed-height media boxes and scale the image slightly so the reconstructed perimeter is available but not prominent:

```css
.audience-card__media {
  overflow: hidden;
  background: #dfeaf0;
}

.audience-card__media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
  transform: scale(1.16);
  transform-origin: center;
}
```

- Reference media aspect ratios from the frame:
  - Top consultation card: `aspect-ratio: 478 / 272`.
  - Top surgeon card: `aspect-ratio: 445 / 272`.
  - Dentist card: `aspect-ratio: 448 / 149`.
  - Practice owners card: `aspect-ratio: 545 / 213`.
  - Healthcare executives card: `aspect-ratio: 445 / 213`.
- If the responsive layout exposes an edge, reduce the scale toward `1.08` or tune `object-position`; the extracted files include extra perimeter for that purpose.
