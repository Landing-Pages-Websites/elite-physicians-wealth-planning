# Audience/career page family

Family layer for the five audience routes. All five are built and attested
(see `public/design/pages/<slug>/section_implementation.json`):

| slug                                         | route                                         | status |
| -------------------------------------------- | --------------------------------------------- | ------ |
| physicians-specialists                       | /physicians-specialists                       | built  |
| financial-planning-for-surgeons              | /financial-planning-for-surgeons              | built  |
| financial-planning-for-dentists              | /financial-planning-for-dentists              | built  |
| financial-planning-for-crnas-nps-pas         | /financial-planning-for-crnas-nps-pas         | built  |
| financial-planning-for-healthcare-executives | /financial-planning-for-healthcare-executives | built  |

## Section grammar (fixed, page_flow wins)

Every page renders exactly these sections, in DOM order, each `<section>` id =
frame name without the numeric prefix:

1. `role-context` — loud navy image-canvas hero (h1 lives here)
2. `decision-patterns` — quiet ivory ledger, five decision rows
3. `career-scenario` — loud mist spread
4. `coordination-map` — quiet white diagram, the five pillars
5. `questions-before-call` — ivory strip + navy exit band
6. `related-paths` — loud navy close over the approved consult-room plate

## How to build a remaining page

1. Read the page's `_design_inputs/pages/<slug>/` inputs in brief order
   (manifest → refs → extraction plan → composition map → NOTES). Refs win for
   visual language; the manifest wins for every string.
2. Create `src/components/pages/audience/content/<slug>.ts` exporting a
   `<CONST>_CONTENT: AudiencePageContent` object (see `content-types.ts`; copy
   an existing content file as the template). Transcribe copy exactly — never
   invent. Image paths point at `public/images/design/<slug>/elements/` (that
   page's own namespace only).
3. Create `src/app/(site)/<slug>/page.tsx` mirroring an existing page file:
   `routeMetadata("<slug>", "<140–160-char description assembled from the
   manifest's visible copy>")`, import `audience.css`, render
   `<AudiencePage content={…} />`.
4. Inspect every extracted raster at full resolution first. If a raster
   carries baked website copy, seam lines, or band fills, trim them (PIL crop)
   — those layers must be live code. Record the trim in the page's
   `public/design/pages/<slug>/section_implementation.json`.
5. Write that section_implementation.json (six frames, honest fidelity
   grades), then run `npx tsc --noEmit` and eslint on your dirs, and
   browser-verify 1440×900 and 390×844.

## Variant knobs (use only what the page's refs actually show)

- `roleContext.eyebrowStyle`: `"rule"` (caps beside a gold rule) | `"tab"`
  (gold underline tab) | `"display"` (eyebrow at display scale over a gold
  headline subhead — dentists). `boundaryStyle`: `"plain"` | `"framed"` (info
  mark box) | `"sweep"` (dark caption on an ivory plate — execs).
  `panel` adds the live hero ledger/table (CRNAs light, execs dark); heading
  and rows MUST be lifted verbatim from the manifest body. `seamSweep` draws
  the ivory curved seam under the live gold exit line (dentists, execs).
- `decisionPatterns.stripPhoto`: optional second raster stacked under the
  portrait counterweight (surgeons uses the OR strip); `stripPlacement:
  "full"` runs it the full section width instead (CRNAs). `rowStyle:
  "staircase"` steps the rows right with gold elbows (dentists);
  `photoPlacement: "top"` bleeds a tall plate to the top/right edges
  (dentists); `photoAspect: "landscape"` for 5:4 sources (CRNAs).
- `careerScenario.variant`: `"paths"` (copy-left, translucent chip stack over
  a document sheet, image holding the right edge) | `"board"` (image bleeding
  left, overlapping navy copy panel, live checklist paper right) | `"desk"`
  (image bleeding left with chips over the paperwork, copy right — CRNAs) |
  `"canvas"` (full-bleed scene under a mist veil, copy lower-left, drawn
  calendar sheet, no second live route — execs).
  `overlays` are the chip/checklist labels — they MUST be phrases lifted from
  that section's manifest body, never new claims.
- `coordinationMap.variant`: `"vignette-row"` (five extracted room vignettes
  on one gold route) | `"floor-plan"` (drawn SVG rooms around a live hub;
  needs `hubLabel` + `stillLife`, and each pillar gets a `plan` key from
  `FloorPlanKey`) | `"vignette-loop"` (copy-left, vignettes scattered on one
  looping route — dentists) | `"edge-rail"` (labels on one horizontal rail —
  CRNAs) | `"hub-spokes"` (labels around a gold hub ring — execs); the last
  two take `edges` (the edge-touching plates). Pillar array order must match
  the manifest exactly.
- `questionsBeforeCall.style`: `"cards"` (white cards) | `"rail"` (open
  gold-ruled columns) | `"navy-band"` (questions in white on a navy band,
  note at its right — dentists) | `"material-band"` (still-life band
  top-right, note in the navy exit band — CRNAs) | `"centered-rail"`
  (centred rail, pen plate right, note in the exit band — execs).
- `relatedPaths.variant`: `"route-row"` (branch over five cards) | `"split"`
  (strategy panel + route table; needs `panelLabel`, the body's first clause)
  | `"ladder"` (CTA left of a vertical route ladder — dentists) | `"two-path"`
  (copy + CTA left of two labelled panels; needs `groups`, labels lifted from
  the body — CRNAs) | `"columns"` (two centred route columns — execs).
  Build links with `relatedLink(slug)` from `content/shared.ts` so href, label
  and accessible name come from the route registry — real routes only.

If a new page's refs genuinely differ from every existing variant, extend the
family (new variant value + component branch + CSS), don't fork a page-local
copy — but keep it faithful to that page's frames; refs win over reuse.

## Conventions already handled by the family layer

- Fixed header offset (`pt-[calc(var(--header-h)+3rem)]`) and the dark hero
  seam; exactly one `<h1>`; `<main id="main">` via `AudiencePage`.
- Background progression navy → ivory → mist → white → ivory → navy, and the
  sparse page-local gold line with its seam crossings (each section draws its
  own entry/exit gesture; it ends at the close's CTA, never into the footer).
- CTAs: `/schedule` via `va-btn va-btn-gold`; process link via `va-link`;
  hover/focus-visible states inherit from globals (`data-dark-band` sections
  get the gold focus ring).
- Family CSS lives in `audience.css` (`aud-` prefix), imported by each
  page.tsx. `aud-bleed-left/right` implement the declared edge-touching media.
- Mobile: sections recompose to single-column rails in source order; media is
  re-cropped around the declared focal points via `objectPosition`, never
  hidden or blurred.
