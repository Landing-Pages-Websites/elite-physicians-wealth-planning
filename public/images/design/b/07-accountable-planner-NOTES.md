# Asset Extraction Notes

## Extracted bitmap assets

- `assets/medical-finance-desk-background.jpg`
  - 1920x1080 reconstructed background based on the source photograph/collage at the left of `frame.png`.
  - Use as the organic background layer behind the HTML composition. Recommended CSS:
    ```css
    .hero-bg {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(235, 243, 248, 0) 0 36%, #f5f2ec 78%),
        url("assets/medical-finance-desk-background.jpg") left center / cover no-repeat;
    }
    ```
  - The planner UI, dotted guides, crosshair accents, button/badge text, placeholder portrait, and card overlays were not preserved in this bitmap. The right/center area is neutral reconstructed desk/paper continuation so the card can be laid on top without baked-in UI.

## Do not extract

- Main planner card: build with HTML/CSS. Use an off-white panel (`#f8f9f7`) with a thin gray border, deep but soft shadow, and a clipped/notched shape:
  ```css
  clip-path: polygon(
    4% 0, 96% 0, 100% 8%, 100% 86%,
    96% 100%, 4% 100%, 0 86%, 0 8%
  );
  ```
  Add the pale blue backing sheet as a larger absolutely positioned pseudo-element behind it, slightly offset down/right, using the same `clip-path`, `#d7e7f4`, and `filter: drop-shadow(...)`.

- Portrait placeholder: keep live. Do not ship a face or silhouette image. Build the frame with CSS/SVG and insert the real client portrait at build time. For the temporary placeholder, use a neutral gray block or CSS silhouette only if needed:
  ```css
  background: radial-gradient(ellipse at 50% 24%, #dedede 0 20%, transparent 21%),
              radial-gradient(ellipse at 50% 78%, #dedede 0 44%, transparent 45%),
              #f3f3f1;
  ```

- Portrait border: inline SVG or CSS `clip-path` octagon with a 1px gray stroke. Keep placeholder warning text as live HTML, not an image.

- Headings and body copy: live HTML text. Approximate type with `Inter`, `Avenir Next`, or `Helvetica Neue`. Use dark navy `#071f45`; uppercase kicker text with letter spacing around `0.18em`; main headline weight `800`.

- Credential badge and CTA button: live HTML/CSS. Use a navy gradient (`#001b3d` to `#052d5f`), `clip-path` notched ends, white text, and gold accent rules/dots (`#c58d2c`). Use text content, not a bitmap, for `ChFC®`, `RICP®`, and `Meet Michael`.

- Credential callout pill: live HTML/CSS. Use pale blue `#dcebf5`, 6px radius, black/navy body text, and a small inline SVG gold/navy target icon.

- Decorative guide system: inline SVG or CSS pseudo-elements. Dotted lines are ordinary 1px borders with `border-style: dotted` and low opacity. Crosshairs/targets are simple responsive SVG strokes using navy `#071f45` and gold `#c58d2c`.

- Outer ivory page background, ordinary grain, and subtle legibility washes: CSS only. Use layered radial/linear gradients and optional low-opacity noise; do not bake these into additional image assets.

## Layout recipe

- Place the reconstructed background as the first absolute layer.
- Position the white notched planner panel over it, roughly centered/right with max width around 74rem and generous responsive padding.
- Use a two-column layout on desktop: portrait/credentials column at about 36%, content column at about 64%. Stack on mobile.
- The original frame shows the photo collage peeking from the left edge; keep the card covering the transition between photo and reconstructed neutral desk so no asset edge is exposed.
