Asset extraction notes for frame.png

Extracted bitmap assets:

- assets/physicians-specialists-consultation.jpg
- assets/surgeons-operating-room.jpg
- assets/dental-office-planning.jpg
- assets/practice-owner-meeting.jpg
- assets/healthcare-executive-hallway.jpg

Each photo asset was reconstructed from the masked quadrilateral in the screenshot by unwarping the photo area to a rectangular scene, removing the antialiased UI rim, and adding a small reflected bleed beyond the recovered bounds for `object-fit: cover`. These are not raw visible-pixel crops, and the gold connector lines, labels, and page background are not baked into the assets.

No full-bleed background image was extracted. The page background is a flat, CSS-reproducible pale blue field with subtle depth:

```css
body {
  background:
    radial-gradient(circle at 70% 20%, rgba(255,255,255,.8), transparent 36rem),
    radial-gradient(circle at 34% 55%, rgba(255,255,255,.5), transparent 42rem),
    linear-gradient(135deg, #f7fbff 0%, #edf7ff 48%, #e4f1fb 100%);
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  opacity: .08;
  background-image: radial-gradient(rgba(7, 28, 56, .65) .45px, transparent .45px);
  background-size: 3px 3px;
}
```

Photo presentation should stay in code. Use the JPGs as rectangular sources and apply the same geometric crop live:

```css
.path-photo {
  overflow: hidden;
  border-radius: 10px;
  clip-path: polygon(16% 0, 100% 0, 86% 100%, 0 100%);
}

.path-photo img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
}
```

Use minor per-card shape adjustments if needed:

- Top consultation: `polygon(17% 0, 100% 0, 87% 100%, 0 100%)`
- Surgeons: `polygon(7% 0, 100% 0, 84% 100%, 0 100%)`
- Dental: `polygon(16% 0, 100% 0, 87% 100%, 0 100%)`
- Practice owners: `polygon(10% 0, 100% 0, 91% 100%, 0 100%)`
- Healthcare executives: `polygon(8% 0, 100% 0, 86% 100%, 0 100%)`

All text remains semantic HTML. Approximate type recipe:

```css
:root {
  --navy: #061b3d;
  --body: #162238;
  --gold: #c59a2d;
}

.eyebrow {
  font: 600 15px/1.2 "Inter", system-ui, sans-serif;
  letter-spacing: .18em;
  color: var(--gold);
  text-transform: uppercase;
}

.eyebrow em {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-style: italic;
  font-weight: 500;
  letter-spacing: 0;
  text-transform: none;
}

h1,
.audience-title {
  font-family: "Cormorant Garamond", Georgia, serif;
  font-weight: 500;
  color: var(--navy);
}

h1 {
  font-size: clamp(3.2rem, 6.2vw, 5.25rem);
  line-height: .98;
}

.audience-title {
  font-size: clamp(1.6rem, 2.1vw, 2.1rem);
  line-height: 1;
}

p {
  font: 400 1rem/1.45 "Inter", system-ui, sans-serif;
  color: var(--body);
}
```

The gold connector network, dots, short divider, and arrow are geometric UI and should be rebuilt as responsive inline SVG or CSS borders, not exported as images. Use a single decorative SVG overlay with `viewBox="0 0 1536 864"`, `stroke="#c59a2d"`, `stroke-width="1"`, `fill="none"`, and `vector-effect="non-scaling-stroke"`. Place gold dots as SVG circles with `r="7"`.

Useful reference coordinates from the screenshot:

- Left top dot: `(37, 102)`, line continues to `(586, 102)`, then down behind the top photo cluster.
- Top audience dot: `(974, 100)`.
- Surgeons dot: `(1239, 271)`, vertical path descends to `(1239, 418)`, then turns left.
- Dental dot: `(957, 453)`.
- Practice owners dot: `(1212, 597)`, vertical path descends to `(1212, 817)`, then turns right to the arrow.
- Executives dot: `(845, 734)`.
- CTA/right-bottom arrow endpoint: `(1525, 818)`.
- Small divider under the hero headline: from `(58, 421)` to `(135, 421)`.

CTA button is CSS:

```css
.cta {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  min-height: 64px;
  padding: 0 28px;
  border: 0;
  border-radius: 4px;
  background: #061b3d;
  color: #d4a62e;
  font: 600 1.1rem/1 "Inter", system-ui, sans-serif;
}
```

The neutral Michael A. Epps placeholder portrait was not generated or extracted; the client portrait should be supplied separately at build time.
