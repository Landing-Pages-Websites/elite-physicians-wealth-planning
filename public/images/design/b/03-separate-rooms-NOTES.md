# Extracted Assets

## `assets/map-islands-overlay.png`

- Transparent PNG, `1039x781`.
- Source frame was `1536x864`; place this overlay at `left: 480px; top: 31px` in that coordinate system.
- Contains only the six irregular paper/map islands with reconstructed interiors. The island labels, target/crosshair marks, route pins, and the clipped route fragment at the TPA edge were removed so those stay live in HTML/SVG.
- Use one overlay rather than six separate object crops unless the final responsive layout needs independent island motion.

Suggested placement in a `1536x864` stage:

```css
.map-stage {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: #fbfaf6;
}

.map-islands {
  position: absolute;
  left: calc(480 / 1536 * 100%);
  top: calc(31 / 864 * 100%);
  width: calc(1039 / 1536 * 100%);
  height: auto;
  filter:
    drop-shadow(10px 12px 10px rgba(8, 37, 72, 0.16))
    drop-shadow(0 3px 0 rgba(0, 38, 86, 0.18));
}
```

# Rebuild In Code

Do not extract a full-bleed background. The background is flat paper color, light topographic linework, route dashes, compass marks, and UI text; rebuild it with CSS and responsive inline SVG.

- Page shell: cream base `#fbfaf6`, navy ink `#061f4f`, muted map blue `#9fc8e6`, gold accent `#bf9236`.
- Top and bottom blue map bands: CSS/SVG clipped bands with pale blue fill and thin contour paths; keep the navy border path live.
- Main typography: live text, heavy sans-serif for the headline, regular sans-serif body copy. Use responsive clamps for the left text block; do not bake text into images.
- Compass rose, tick marks, crosshair icons, and small plus signs: inline SVG strokes.
- Dashed routes: one absolute SVG over the map with `viewBox="0 0 1536 864"`, `fill="none"`, navy stroke, round caps, and `stroke-dasharray`. Gold nodes are live SVG circles with cream/white centers.
- Island labels: live positioned text over the overlay. Approximate label centers in source coordinates:
  - CPA: `(728, 243)`
  - Attorney: `(1160, 217)`
  - TPA: `(1364, 428)`
  - Insurance professional: `(660, 570)`
  - Your priorities: `(974, 407)`
  - Financial advisor: `(1020, 670)`
- Island target/crosshair marks: live SVG, centered approximately at:
  - CPA `(728, 192)`
  - Attorney `(1166, 164)`
  - TPA `(1364, 381)`
  - Insurance `(655, 520)`
  - Financial advisor `(1012, 617)`
- Bottom callout: CSS border box with live text, an inline SVG compass icon, and a vertical gold divider. Do not crop it as an image.
- Fine grain and dot fields: CSS radial gradients or SVG patterns at low opacity.
- Portrait placeholder: no face was generated or extracted. Leave a neutral container/slot for the real client portrait to be supplied at build time.
