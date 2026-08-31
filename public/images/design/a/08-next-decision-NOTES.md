# Asset Extraction Notes

## Extracted assets

- `assets/office-background-reconstructed.jpg`
  - Full-bleed photographic office background reconstructed from `frame.png`.
  - Exported at `1920x1080`.
  - Removed baked-in headline, body copy, CTA buttons, gold connector/divider linework, icons, footer text, guide placeholder, and portrait/face placeholder.
  - Inpainted UI-covered areas and added a soft crop buffer beyond the original frame so the image can be used with `object-fit: cover`.

## Do not extract

- Headline/body/footer text: live HTML.
- Gold connector lines, divider rules, dots, icon circles, and dashed guide placeholder border: CSS or responsive inline SVG.
- Calendar, document-lock, info, chat, mail, and arrow icons: inline SVG/lucide-style stroke icons.
- CTA buttons: CSS gradients and shadows.
- Navy legibility wash, edge vignette, and ordinary grain: CSS pseudo-elements.
- Michael A. Epps/client portrait or placeholder face: no image asset was extracted or generated. Use the supplied real client portrait at build time.

## Background recipe

Use the reconstructed photo as the only raster background layer, then rebuild the page treatment in CSS:

```css
.decision-page {
  min-height: 100svh;
  position: relative;
  overflow: hidden;
  color: #f5efe4;
  background: #00152c;
}

.decision-page::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 50% 36%, rgba(0, 29, 61, 0.22), transparent 34%),
    linear-gradient(90deg, rgba(0, 12, 31, 0.84), rgba(0, 22, 48, 0.62) 50%, rgba(0, 12, 31, 0.86)),
    url("assets/office-background-reconstructed.jpg") center / cover no-repeat;
  z-index: -2;
}

.decision-page::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.07;
  background-image:
    repeating-radial-gradient(circle at 20% 30%, rgba(255,255,255,.7) 0 1px, transparent 1px 3px);
  mix-blend-mode: soft-light;
  z-index: -1;
}
```

## UI rebuild recipe

- Type:
  - Headline and card titles: high-contrast serif such as `Cormorant Garamond`, `Libre Baskerville`, or a similar editorial serif.
  - Body/buttons/footer: clean sans such as `Inter`, `Avenir`, or system UI.
- Approximate colors:
  - Navy base: `#00152c`
  - Deep navy overlay: `rgba(0, 12, 31, 0.84)`
  - Gold stroke/accent: `#d7a84a`
  - Button light: `#f0cb6c`
  - Button dark: `#bd862f`
  - Cream text: `#f5efe4`
- Buttons:
  - Height around `60px`, radius `6px`, uppercase sans, letter spacing `0.04em`.
  - Use `linear-gradient(180deg, #f0cb6c, #bd862f)`, `box-shadow: inset 0 1px rgba(255,255,255,.35), 0 10px 24px rgba(0,0,0,.22)`.
- Connector artwork:
  - Use one absolutely positioned inline SVG over the desktop layout.
  - Stroke: `#d7a84a`, `stroke-width: 2`, `fill: none`, `stroke-linecap: round`, `stroke-linejoin: round`.
  - Keep dots as SVG circles or CSS pseudo-elements using the same gold.
  - Make the SVG `viewBox="0 0 100 60"` and scale it with the content container.
- Icons:
  - Use circular gold-outline buttons/badges with inline stroke SVG inside.
  - Calendar-clock for the strategy call, file-lock for guide, info circle for warning, chat bubble for the note, mail for footer.
- Guide placeholder:
  - Build as a semantic image slot with dashed gold border.
  - Until the supplied guide/portrait asset exists, render a blank neutral placeholder or upload state in CSS/HTML. Do not use an extracted/generated face.

## Suggested structure

```html
<main class="decision-page">
  <h1>Choose the next step<br>that fits where you are.</h1>
  <section class="decision-grid">
    <article class="decision-option decision-option--call">...</article>
    <svg class="decision-connector" aria-hidden="true">...</svg>
    <article class="decision-option decision-option--guide">...</article>
  </section>
  <footer>...</footer>
</main>
```
