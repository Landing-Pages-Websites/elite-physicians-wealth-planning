Asset extraction notes for `frame.png`

Extracted image asset:

- `assets/hero-office-reconstructed.jpg`
  - 1920 x 1080 JPG.
  - Full-bleed reconstructed dark physician-office background.
  - The reference frame corresponds to the centered 1536 x 864 crop, inset 192px from the left/right and 108px from the top/bottom.
  - Website UI, typography, connector linework, buttons, the neutral portrait placeholder, and text-legibility overlays were removed/rebuilt as scene continuation. No Michael A. Epps face or portrait placeholder asset was extracted.

Recommended background CSS:

```css
.hero {
  position: relative;
  min-height: 100svh;
  overflow: hidden;
  background: #031625;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("./assets/hero-office-reconstructed.jpg");
  background-size: 125% auto; /* matches the source-frame center crop */
  background-position: center;
  background-repeat: no-repeat;
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    linear-gradient(90deg, rgba(2, 14, 27, 0.94) 0%, rgba(2, 14, 27, 0.76) 42%, rgba(2, 14, 27, 0.45) 100%),
    radial-gradient(70% 80% at 36% 55%, rgba(255,255,255,0.03), rgba(0,0,0,0.34));
}
```

For responsive crops, switch `background-size` to `cover` and use `background-position: 58% center` when the live portrait card is still covering the reconstructed card footprint.

Keep these elements in HTML/CSS/SVG, not image assets:

- Logo text: live type. Use a high-contrast serif such as `Cormorant Garamond`, `Playfair Display`, or the production brand font; white text with a small superscript trademark.
- Gold powered-by line: live uppercase sans text with `letter-spacing: 0.16em`, color `#d7a94a`.
- Hero headline: live high-contrast serif, off-white `#f5f0e8`, tight line-height around `0.94`.
- Body copy, disclosure copy, and all CTA labels: live sans text, color `#f3f6fb` / muted `#aeb8c6`.
- CTA buttons: CSS rectangles with 6-8px radius. Primary fill `#d7aa45`; secondary transparent with `1px solid rgba(214,232,255,0.82)`.
- Icons: inline SVG or icon library strokes; calendar, document, shield, stethoscope, refresh, and compass are all simple geometric line icons.
- Connector linework: inline SVG over the hero with `viewBox="0 0 1536 864"`, `stroke: #d7aa45`, `stroke-width: 2`, `fill: none`, rounded caps/joins. Recreate the top stepped path and right lower path in code so it can respond to layout.
- Portrait card: live CSS layer. Use the real client portrait at build time. If a temporary placeholder is needed, use a neutral CSS/SVG silhouette only, not a raster face asset.
- Card surface: CSS off-white radial gradients plus subtle noise/paper texture generated in CSS; do not export the flat paper field as an image.
- Grain/vignette: CSS pseudo-elements. Ordinary grain and legibility washes should remain code overlays, not baked into the JPG.
