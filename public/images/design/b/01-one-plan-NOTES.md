# Asset Extraction Notes

## Extracted image assets

- `assets/medical-office-scene.jpg`
  - Reconstructed from the upper-right medical-office photograph.
  - Delivered as a rectangular JPG with clipped polygon gaps removed and modest bleed added around the source crop for responsive `object-fit: cover` use.
  - Size: `642 x 405`.
  - No website text, CTA UI, portrait placeholder, blueprint accent linework, or tint/wash layer is baked into this asset.

Recommended placement:

```css
.medical-photo {
  aspect-ratio: 526 / 317;
  overflow: hidden;
  clip-path: polygon(13.7% 0, 58.4% 0, 60.3% 2.5%, 100% 2.5%, 100% 100%, 0 100%, 0 23.7%);
}

.medical-photo > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
```

## Do not extract; rebuild in code

- Top navy header band: CSS block with `#061f3f` / `#08264a` gradient. Keep the full title as live text: `Elite Physicians Wealth Planning™ — Powered by Fiscal Vision Financial`.
- Main off-white canvas: CSS background using `#f7f8f8` plus subtle radial/linear gradients. Ordinary paper/grain should be a CSS noise overlay or omitted.
- Blueprint guide lines, ticks, corner marks, dashed rectangles, and gold dots: simple absolutely positioned inline SVG or CSS borders. Use `stroke: rgba(17, 63, 112, .55)`, `stroke-dasharray: 4 4`, and accent gold `#bf861b`.
- Bottom technical ruler strip: CSS/SVG linework over the navy footer band. Rebuild the arrow, tick marks, dotted rule, and gold segment as live vector strokes.
- Hero typography and all copy: live HTML text. Approximate with a geometric sans such as Inter, Manrope, or a similar brand font. Primary text color is deep navy `#001b42`.
- Primary and secondary CTA buttons: semantic buttons/links. Use CSS borders/fills and inline SVG arrows; do not rasterize button text or arrows.
- Dark strategy card: CSS panel with a dark navy radial/linear gradient, thin border, corner ticks, and gold separator rules/dots. Keep labels live:
  - `Coordinated strategy`
  - `Physician-focused`
  - `Ongoing review`
- Bottom contour/topographic pattern: rebuild as a low-opacity inline SVG pattern of wavy contour paths. Suggested stroke: `rgba(104, 166, 214, .18)`, `fill: none`, `stroke-width: 1`.
- Michael A. Epps placeholder area: do not extract or generate a face. Rebuild the gray placeholder as a simple CSS or inline SVG silhouette only until the real portrait is supplied. Keep the label text live.
- Portrait frame outline and clipped corners: CSS/SVG geometry. Suggested frame shape:

```css
.portrait-frame {
  aspect-ratio: 270 / 315;
  clip-path: polygon(4% 0, 88% 0, 100% 12%, 100% 100%, 18% 100%, 0 84%, 0 4%, 4% 4%);
  border: 1px solid rgba(0, 27, 66, .75);
  background: linear-gradient(135deg, #eeeeee, #cfcfcf);
}
```

## Build layering

1. Render the off-white page canvas and navy top/bottom bands in CSS.
2. Add blueprint guide SVGs as decorative, non-interactive absolute layers.
3. Place the medical photo asset in a clipped container using the recipe above.
4. Render all text, CTAs, strategy card labels, portrait label, and legal note as live HTML.
5. Add the contour pattern as inline SVG behind the lower hero area.
6. Inject the real client portrait later into the portrait frame; keep the current silhouette as code only.
