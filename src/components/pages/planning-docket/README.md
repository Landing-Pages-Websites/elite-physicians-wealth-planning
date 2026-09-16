# planning-docket family

Shared section grammar for the five planning-service dockets:
`/tax-planning-for-physicians`, `/wealth-management-for-physicians`,
`/retirement-planning-for-physicians`, `/practice-owner-planning`,
`/legacy-estate-planning`. All five are built. This is a matching family
grammar per the approved refs — NOT a generic page renderer. Refs win over
family reuse: when a page's ref genuinely differs, add a variant, don't
force a fit.

## Files

- `content-types.ts` — `DocketPageContent` and per-section interfaces. Every
  string and image path lives in the content object; components own only
  composition/visual mechanics.
- `docket.css` — shared family surfaces, `dkt-` prefix. Imported BY EACH
  ROUTE FILE (`import "@/components/pages/planning-docket/docket.css";`),
  never by a layout.
- `docket-ext.css` — variant surfaces added for the retirement/practice/
  legacy refs (`ambient`/`card`/`mirror` demand fields, `flank` documents,
  `plan`/`niches`/`cards` boundary diagrams, `ledger`/`cascade` adjacent
  fields, arc seam, exit bands). Route files using those variants import it
  after docket.css.
- `docket-glyphs.tsx` — family-local stroke glyphs (legacy trigger ledger,
  plan boundary cards) in the site icon conventions.
- `docket-page.tsx` — `<DocketPage content={...} />` renders
  `<main id="main">` with the six sections in page_flow order.
- `opening-docket.tsx`, `demand-situations.tsx`, `documents-needed.tsx`,
  `coordination-boundary.tsx`, `adjacent-planning.tsx`, `next-step.tsx` — one
  section component per file, section ids = frame name minus numeric prefix.
- `content/<slug>.ts` — per-page `DocketPageContent` const. Copy verbatim from
  that page's `section_manifest.json`; images ONLY from
  `/images/design/<slug>/elements/`.

## Building a new docket route

```tsx
// src/app/(site)/<route>/page.tsx
import type { Metadata } from "next";
import { MY_DOCKET } from "@/components/pages/planning-docket/content/<slug>";
import { DocketPage } from "@/components/pages/planning-docket/docket-page";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/planning-docket/docket.css";

export const metadata: Metadata = routeMetadata("<slug>", MY_DOCKET.metaDescription);
export default function XPage(): React.JSX.Element {
  return <DocketPage content={MY_DOCKET} />;
}
```

## Variant axes (choose per YOUR ref, per section)

| Section | Axis | Options (built exemplar) |
| --- | --- | --- |
| 01 opening | `variant` | `"split"` hard photo pane + boxed eyebrow (tax) / `"canvas"` photo dissolves into navy, 62% wide (wealth, retirement, legacy) |
| 01 opening | `veil` | `"deep"` near-solid navy left edge on canvas (legacy) |
| 01 opening | `seam` | `"arc"` curved ivory exit sweep with gold hairline (practice) |
| 02 demand | `variant` | `"stacked"` (tax) / `"columns"` (wealth) / `"ambient"` warm kicker ledger right + lower-left ambience crop (retirement) / `"card"` framed check-row card + right photo canvas (practice) / `"mirror"` left edge-bleeding portrait + circled-glyph ledger (legacy, needs `itemGlyphs`) |
| 03 documents | `mediaPosition` | `"bottom"` strip under checklist (tax, practice) / `"top"` right-anchored strip (wealth, legacy) / `"flank"` paired edge panels, needs `secondImage` (retirement) |
| 03 documents | `itemIcon` | `"document"` (tax) / `"check"` (wealth) / `"circled-check"` (retirement, practice, legacy) |
| 03 documents | `itemStyle` | `"inline"` (default) / `"stacked"` mark above gold rule (practice) / `"thread"` marks on one gold hairline (legacy) |
| 04 boundary | `layout` | `"rooms"` photographic room map (tax) / `"hub"` navy node + abstract panels (wealth) / `"plan"` blueprint glyph cards, roles carry `glyph` (retirement) / `"niches"` horizontal labelled niche band, roles carry `image` (practice) / `"cards"` double-framed label cards (legacy) |
| 05 adjacent | `layout` | `"stair"` down-right rows (tax; legacy adds `exploreAlign:"end"` + `exitNode:"dot"`) / `"shelf"` plates beside `edgeImage` (wealth) / `"ledger"` aligned arrow rows, explore in navy band (retirement) / `"cascade"` plates step down-right, explore in navy band (practice) |
| 06 next-step | `mediaSide` | `"right"` (tax, retirement, legacy) / `"left"` (wealth, practice) |

## Contracts the family already honors (don't re-implement)

- Fixed header: section 01 reserves `calc(var(--header-h) + 3.5rem)` on the
  navy ground that matches the header seam.
- Gold motif is sparse and section-local, seams per page_flow: 01 exits
  lower-right → 02 spine drops → 03 mist band hands off lower-left → 04
  element-anchored connectors + exit → 05 descends into navy (stair: circled
  node; shelf: dot terminal) → 06 corner rule TERMINATES the line. Never
  continue into the footer.
- Exactly one `h1` (opening headline). `data-dark-band` on 01/06 flips the
  focus ring to gold. Buttons are global `va-btn va-btn-gold`; text links
  `va-link`. Icons from `@/components/site/icons`.
- Mobile: 01/06 recompose via flex `order` so the decision group leads where
  the ref demands; 04 becomes a gold vertical rail; 05 stair rows keep
  thumb+link rows, shelf edge image becomes a full-width band.
- Adjacent routes render the LITERAL path as the visible link text (per refs);
  give each an accessible `name`. Link only routes from `@/lib/routes`.
- `aspectRatio` on `DocketImage` sizes room panels/thumbnails from the source
  crop's intentional rectangle; full-bleed slots are CSS-owned.

## Truth rails for the three remaining dockets

- Copy verbatim from the manifest. If a manifest string leaks production
  jargon ("design reference", "content gate", "pending"…), drop the clause —
  never render it and never invent replacement copy (see wealth 04 note in
  its section_implementation.json).
- Boundary line: "Educational information only. Not individualized tax,
  legal, or investment advice." exactly where the manifest places it.
- Never reuse another slug's rasters; if a frame ships no raster (like wealth
  04), use the code-native panels — do not substitute photos.
- Write `public/design/pages/<slug>/section_implementation.json` attesting
  only what you actually built.
