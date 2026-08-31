# Asset Extraction Notes

Source: `frame.png` (1536 x 864)

## Extracted Assets

The five hand-drawn room/floor-plan illustrations were extracted as transparent PNG layers. Role labels, gold icons, underlines, and routing-line overlays were removed so those elements can stay live in HTML/SVG.

- `assets/room-cpa.png` - 422 x 278, transparent PNG
- `assets/room-attorney.png` - 494 x 278, transparent PNG
- `assets/room-tpa.png` - 316 x 260, transparent PNG
- `assets/room-insurance-professional.png` - 388 x 261, transparent PNG
- `assets/room-financial-advisor.png` - 411 x 278, transparent PNG

No full-bleed background image was extracted. The page background is a flat warm paper field with ordinary grain/vignette and should be rebuilt in CSS.

No portrait or face asset was extracted. The neutral Michael A. Epps placeholder should remain a runtime/client-supplied image slot.

## Rebuild In Code

Use live HTML text for all copy:

- Brand: `THE CONSULT LEDGER`
- Eyebrow: `ORIENTATION: THE COORDINATION GAP`
- Headline: `Your financial life is too important to be managed in separate pieces.`
- Body paragraph and warning-callout copy
- Room labels: `CPA`, `Attorney`, `TPA`, `Insurance professional`, `Financial advisor`, and center label `Your priorities`

Suggested type recipe:

- Headline and room labels: high-contrast serif such as `Cormorant Garamond`, `Libre Baskerville`, or a close brand serif; navy `#081b46`.
- Body/callout: clean sans serif such as `Inter` or `Source Sans 3`; navy/ink `#162033`.
- Masthead: small caps serif with wide letter spacing; gold `#d19a19`.

Suggested color recipe:

- Page base: `#f6f2e7`
- Soft vignette: radial gradients in CSS, for example warm white near center fading to `rgba(211, 188, 126, 0.18)` at edges.
- Ordinary paper grain: CSS pseudo-element with low-opacity noise texture or layered tiny radial gradients; keep subtle.
- Navy: `#071b45`
- Gold: `#c99618`
- Room linework already lives inside the extracted transparent PNGs.

Build the geometric UI in code:

- Top-left navy masthead panel: absolutely positioned block with a CSS border-radius/notched right edge, or inline SVG if the curve needs exact control.
- Gold routing network: responsive inline SVG over the page, `stroke: #c99618`, `stroke-width: 2`, `fill: none`, rounded caps/joins.
- Routing nodes: SVG circles with white/page fill, gold stroke, small gold center dot.
- Center priority circle: CSS/SVG circle with double gold outline and live serif text.
- Role icons: inline SVG/lucide-style line icons in gold, sized around 32-38 px. Use calculator, scales, shield-plus, umbrella, and bar-chart icons.
- Room underlines: simple CSS/SVG gold strokes below labels.
- Left divider rule and bottom arrow line: CSS border/SVG line with gold stroke and arrow marker.
- Warning callout: CSS box with dashed border, rounded corners, live exclamation icon in a gold stroked circle, and live text.

Layering recommendation:

1. CSS page background and grain.
2. Navy masthead and live text blocks.
3. Transparent room PNGs positioned responsively.
4. Live room labels/icons/underlines over the room PNGs.
5. Gold routing SVG and center priority circle.
6. Callout and bottom arrow.

Keep the room PNGs under the live labels and icons. The extracted files intentionally leave the original label zones blank/transparent so the final site can render crisp, accessible text and scalable SVG icons.
