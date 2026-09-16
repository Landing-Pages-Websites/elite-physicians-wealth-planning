# insights-article family

Shared layer for **all twelve** `/insights/*` article pages. Every article is a
truthful held-publication editorial state built from the exact same 5-section
grammar; per-article variation lives ONLY in a typed content file plus a few
frame-crop CSS recipes. Nine articles remain to be built — follow this API and
do not fork the section components.

## The grammar (fixed order, fixed section ids)

| # | Frame                     | Section id               | Component                    |
|---|---------------------------|--------------------------|------------------------------|
| 1 | 01-editorial-state-hero   | `editorial-state-hero`   | `editorial-state-hero.tsx`   |
| 2 | 02-verified-teaser        | `verified-teaser`        | `verified-teaser.tsx`        |
| 3 | 03-manuscript-gate        | `manuscript-gate`        | `manuscript-gate.tsx`        |
| 4 | 04-source-and-review-gate | `source-and-review-gate` | `source-and-review-gate.tsx` |
| 5 | 05-related-reading        | `related-reading`        | `related-reading.tsx`        |

`article-sections.tsx` composes the five in order and imports the family CSS.

## Building one more article (checklist)

1. **Content file** — `content/<route-segment>.ts` exporting a single
   `ArticleContent` const (see `content-types.ts`). Every string is verbatim
   manifest copy from that article's
   `…design_refs/revision-2026-09-15-image-first/pages/<slug>/section_manifest.json`
   `required_sections[].content`. Related-reading `label`s are the navLabels
   from `@/lib/routes` for the manifest's link routes. Do not write new
   editorial copy, authors, dates, or review claims.
2. **Images** — use ONLY `public/images/design/<slug>/elements/*` (the page's
   own namespace). Inspect every raster at full resolution first. If it
   carries baked website copy, annotation strips, internal-jargon labels, or
   stray motif fragments near an edge, add an `art-frame--<short>-<section>`
   recipe to `insights-article.css` that crops them out deterministically
   (the class sets the slot `aspect-ratio` and the img width/left/top
   percentages; the math is documented in the CSS). Clean images still get a
   frame class that pins the slot to the image's intrinsic aspect ratio.
3. **Media sides** — set `mediaSide` on `verifiedTeaser` and `manuscriptGate`
   to match that article's ref frames (the composition mirrors per article;
   the grammar does not change).
4. **Route file** — `src/app/(site)/insights/<route-segment>/page.tsx`:
   `routeMetadata("<design-slug>", "<140–160 chars assembled only from that
   manifest's visible copy>")`, then
   `<main id="main"><InsightsArticleSections content={…} /></main>`.
5. **Contract** — write
   `public/design/pages/<design-slug>/section_implementation.json` attesting
   per-frame fidelity honestly.

## Truth contract (ship-blockers)

- The ONLY publication-state lines a visitor sees are `HELD_NOTE` and
  `ARTICLE_BOUNDARY` from `content-types.ts` plus manifest section copy.
  Never render internal production vocabulary ("content gate", "pending",
  "source page", "build-time", "placeholder", "TBD", "unresolved",
  "diagnostic") or the manifests' `review_gates` metadata.
- No invented authors, dates, reviewers, citations, or article body text.
  The teaser section carries only the verified teaser items.
- Links go to real routes from the route table only.

## Styling

- Family CSS: `insights-article.css`, prefix `art-`. Backgrounds follow the
  shared article page_flow: navy hero → ivory teaser → white gate → mist
  strip → ivory related-reading.
- The page-local gold line is the `art-seam-top` / `art-seam-bottom` stubs
  (hero exits, related-reading ends on a node). Do not add extra motif.
- Buttons/links use the site system (`va-btn*`, `va-link`); icons come from
  `@/components/site/icons` plus the family's `icons.tsx` additions.
