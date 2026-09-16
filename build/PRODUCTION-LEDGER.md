# Production ledger — Elite Physicians Wealth Planning

Stage 2: approved homepage mockup → production website.
Branch `build/production-direction-a`, off `main` at `f5be6b7` + `143f572`.

---

## Direction

**Direction A, "The Consult Ledger", promoted to `/`.**

Chosen by the **operator**, who replied "execute" to a recommendation of A. Recorded
honestly: the recommendation came from a design audit (below), *not* from evidence in
this repo. There is none — `public/design/a/section_manifest.json` and
`public/design/b/section_manifest.json` are byte-identical, and both palette contracts
self-report `"verdict": "APPROVED"`. Nothing in the clone records which direction the
client approved.

**Direction B is intact on disk** (`/variant-b`, `src/components/variant-b/`,
`public/design/b/`, `public/images/design/b/`) and stays there until A ships. Reverting
to B is a one-line change in `src/app/page.tsx` plus its CSS import.

---

## Inherited commit — provenance unknown

`143f572` "feat: add strategy-call capture to both directions, rebalance the ledger"
landed on local `main` at 01:05 on 3 Sep 2026, authored as Hyder Shah, **during this
session and not by this agent**. It has never been pushed.

It adds `src/components/shared/strategy-call-form.tsx` (a shared, `tone`-prop lead form),
a `#form` section on both directions, `NEXT_PUBLIC_LEAD_ENDPOINT` with a `mailto:`
fallback, and rebalances the five-decisions ledger 46% → 72%.

**Retained, not reverted.** It is coherent, it matches the audit's own finding about the
five-decisions dead space, and it is authored under the operator's identity. Flagged here
because it modifies approved composition (five-decisions width) and appends a new section
after the approved closing section — both of which need the operator's confirmation that
they were intended.

---

## Design audit → the professional pass

The approved mockups are AI-generated. A frame-by-frame review of all 16 reference frames
(8 sections × 2 directions) by 11 independent reviewers raised **300 findings, 72 of them
blockers**; 10 of 11 reviewers rated Direction A the stronger board. Full report:
`https://claude.ai/code/artifact/1f46cf54-e542-40fd-9e97-e177e2a8e379`

Deviations applied to the build, each classed per the skill's taxonomy. Defect classes are
fixed on the builder's authority; `taste` is not, and none was taken.

| Frame | Change | Class | Justification |
|---|---|---|---|
| 05-five-decisions | Dropped literal `Orientation: ` prefix from the eyebrow | spec-text-as-ui | `orientation` is a manifest *field name*. The copy after it is real; the prefix is build spec |
| 03-separate-rooms | Same prefix removed | spec-text-as-ui | as above |
| 06-white-coat-paths | Same prefix removed; kept the italic display treatment the frame shows | spec-text-as-ui | as above |
| 03-separate-rooms | **Removed the navy notch tab reading "The Consult Ledger"** | spec-text-as-ui | Internal A/B codename published as the practice's brand. Removed rather than refilled — inventing replacement brand furniture is not ours to do |
| 04-blueprint-rounds | **Removed the "The Consult Ledger" logo lockup** over the invented tagline "PHYSICIAN WEALTH ADVISORY"; the section's own orientation line now opens it, gold rule kept | spec-text-as-ui | as above. Two build artifacts, neither client copy |
| 08-next-decision | **Removed the dashed guide-cover slot** rendering `guide.availability` | spec-text-as-ui + ai-tell + legibility | Three defects in one element: "CUSTOMER INPUT REQUIRED…" as reader-facing copy, a wireframe dashed border shipped as UI, and 9px type. `guide.requestNote` below already states the truth the hard rule requires |
| 05, 03, 06, 04, 07 | Gold eyebrows on light bands → navy | accessibility | Gold `#C8A65A` on ivory `#F6F2E8` measures **2.07:1**; on white **2.32:1**. AA failure at any size. Gold retained for rules, nodes and CTA fills, where it passes on navy (~6.5:1) |
| whole build | 8 bare hex literals promoted to documented derived tokens in `globals.css @theme` | grid-alignment | Each is a tint/shade of a contract token, not a new hue. Naming them makes the palette gate meaningful |

**Not applied.** The audit's `taste` findings (5 of 300) and every finding scoped to
Direction B were left alone. Findings that describe the *mockup* but do not reproduce in
the *code* — the placeholder-caption text, the "Outcome: Navigate to…" captions — were
verified absent from Direction A's source and needed no change.

---

## New unapproved surfaces

The client approved a homepage. They have not seen either of these.

- **`SiteHeader`** — `src/components/site/site-header.tsx`. The wordmark is **lifted**
  from the hero, not duplicated: `one-plan.tsx` previously rendered that lockup as its
  first child and has been given a height-reserving spacer in its place. `fixed`, not
  `sticky`, so it takes no space in flow and the `composition_map` fold requirement
  (brand + headline + actions + portrait card + proof row together inside 1536×864)
  survives. Nav points at on-page anchors because those are the destinations that exist
  today; they become the contracted `/our-process`, `/who-we-serve` and
  `/meet-michael-epps` paths when those pages ship.
- **`SiteFooter`** — `src/components/site/site-footer.tsx`. Deliberately *not* a copy of
  `ContactClose`, which lives inside approved section 08 and already carries contact
  details. The footer does a different job — navigation plus the compliance lines that
  must appear on every route. The disclaimer therefore appears twice on the homepage;
  that is a compliance line repeating, not duplication to remove.

---

## Rulings recorded

- **`hard_rules` over repo `CLAUDE.md`.** `CLAUDE.md` "Conversion" requires *"named
  testimonials (with faces), metrics, ratings"* and the `design-review` rubric scores the
  same. `hard_rules` forbid inventing testimonials, ratings, awards and credentials
  outright. **The hard rule wins.** A `CHANGES_REQUIRED` finding demanding proof elements
  is answered with this row, not fixed.
- **`≥6 kebab-case section anchors per LP`** — satisfied without manufacturing anything:
  the homepage ships 9 in DOM order. The floor is **not** to be forced onto `/privacy` or
  `/disclosures` when those arrive; manufacturing structure there manufactures copy.
- **Standing data-viz default suspended.** The global "render first-party data as an
  original build-time chart image wired to `og:image`" default is void here —
  `hard_rules` ban market-chart imagery outright.
- **Legacy domain.** `elitephysicianwealthplanning.com` (singular) → the plural launch
  domain is a **DNS cutover on the client side**, not a `next.config.ts` edit. Flagged,
  not executed. `metadataBase`, canonical and sitemap already use the plural domain.

---

## Routing

- `/` is the approved homepage (was the A/B chooser).
- `/variant-a` → `/` permanent redirect. Those review links may already be shared; a 404
  would be worse.
- `/variant-b` still live for comparison.
- `sitemap.ts` emits only routes that exist — currently `/` alone.

---

## Verification — 3 Sep 2026

| Gate | Result |
|---|---|
| `npm run build` | pass, 6 static pages |
| `npm run lint` | pass, 0 problems |
| `npm run check:palette` | pass — 6 contract tokens, 8 documented derived shades, 0 bare literals |
| `npm run verify` (browser, 1536/1440/390) | pass on `/` and `/variant-b`: 0 overflow, 0 broken images, exactly 1 `h1`, 9 anchors |

Not yet run: `design-review` and `code-review` agents; section-by-section fidelity read of
the built page against `public/design/a/refs/*.png`.

---

## Open — needs the operator

1. **Scaffolding decision.** `bridgeCount: 1` — the `app.gomega.ai/review-bridge` script
   is still in `layout.tsx`, and `public/review-routes.json` still lists the old review
   routes. Neither has been touched: the skill treats scaffolding removal as a checkpoint,
   and `review-routes.json` is fetched by the bridge from the deployed origin, so
   "unreferenced in `src/`" does not mean unused.
2. **Sitemap approval** — proposed below, not built.
3. Everything in `CLIENT-GAPS.md`.

---

## Review round 1 — both ship gates run, 3 Sep 2026

`code-review` and `design-review` both returned **CHANGES_REQUESTED**. Fixed:

**Correctness / layout**
- Header height was a hardcoded `h-[52px]` spacer duplicating a height it could not
  see; measured 109px at 375px. Now a single `--header-h` token consumed by the header's
  `min-height`, the hero spacer and anchor offsets, so the three cannot drift.
- Wordmark wrapped to two lines under 334px available width, which is what drove the
  109px. `whitespace-nowrap` + `shrink-0`, and `poweredBy` is hidden below `sm` (it still
  appears in the hero identity line and the footer).
- Desktop nav itself wrapped at 1024–1279px; moved to the `xl:` breakpoint.
- Every anchor landed its target *under* the fixed header. `scroll-margin-top:
  var(--header-h)` on `section[id]`/`main[id]`.
- The mobile menu was a `<details>` in the persistent layout, so `open` survived hash
  navigation and the panel sat over the destination. Now the Popover API — Escape and
  light-dismiss for free, still zero client JS.
- `/variant-b` was inheriting Direction A's chrome, covering its own wordmark bar. The
  homepage moved into a `(site)` route group; variant-b renders bare.

**Rendering defects the mockup review could not see**
- `white-coat-paths` route stub `M58 421 H135` rendered **as a strikethrough through the
  word "ownership"** in the lead paragraph. Moved into the gutter at `M32 470 H72`.
- `five-decisions` spine was painted over by the `relative` rows — the motif rendered as
  unattached fragments, breaking `page_flow`'s continuous-route rule. `z-10` on the spine.
- `strategy-call` repeated two paragraphs verbatim from `next-decision` ~1,100px above.
  Removed. **Nothing replaced them**: writing a fresh sentence would be inventing
  reader-facing copy on a regulated site.

**Accessibility**
- Focus ring was gold — 2.07:1 on ivory, below the 3:1 floor of WCAG 1.4.11. Navy is now
  the default ring; gold only inside the dark bands.
- Footer links were ~20px tap targets → `min-h-11`.
- `text-charcoal/70` (4.46:1) and `text-mist/50` (4.43:1) at 11px both missed AA → `/80`, `/70`.
- Menu button border 2.38:1 → `/45`.
- Added a skip link and `id="main"`.

**Links** — every in-content CTA pointed at the legacy singular domain that `sitemap.ts`
declares reference-only, so each one ejected the visitor off-site past the form. All now
use on-site anchors (`LINKS.*Onsite`), which become the contracted `/our-process`,
`/who-we-serve` and `/meet-michael-epps` routes as those pages ship.

**Gate hardening** — `check-palette.mjs` passed `#f0f`, `#ff00ffcc` and
`font-family: "Winterlude"`, mis-reported every line number (comment stripping collapsed
newlines), stripped `//` inside CSS and inside `https://` URLs, and never checked
`rgba()`. All fixed, plus a try/catch around the contract read.

**Also deduplicated**: two `splitNameCredentials` implementations, two `tel:` href
builders (now `telHref()` in `content.ts`), the orphaned `.va-notch` rule, and a dead
`sitemap.ts` branch.

### Open design findings NOT fixed — operator or client call

- **Surgeons photo has malformed hands** at 4x (fused digits, detached thumb). Asset
  problem; added to CLIENT-GAPS.
- **Mobile `white-coat-paths` collapses to five identical rounded cards** — the desktop
  diagonal collage has no mobile equivalent. Restructuring it changes an approved
  composition, so it is a `taste` call, not craft.
- **Two CTA finishes** ship on one page: flat `bg-gold` (header, form) vs the glossy
  `.va-gold-btn` bevel (hero, next-decision). Unifying means changing the approved hero
  button. `taste`.
- **Same portrait, same crop, twice** on one page. Resolve when the real asset lands.
- **`five-decisions` still leaves ~430px of empty field** at 1440 even after the 46%→72%
  rebalance.
- **Mobile hero H1 breaks to a one-word orphan** ("More,") because `headlineLines()`
  forces the desktop three-line break at every width. Fixing it changes the approved
  line-break invariant in `typography_contract.json`. `taste`.
- **Photo bleed shows ghost lettering** behind copy at 390px in `blueprint-rounds` and
  `accountable-planner`.
- **Gold at 2.07:1 on ivory** is the manifest's mandated structural motif; on light bands
  the route is barely perceptible. Darkening it for light grounds departs from the
  palette contract, so it needs a ruling.

### Verification after fixes

| Gate | Result |
|---|---|
| `npm run build` | pass |
| `npm run lint` | pass, 0 problems |
| `npm run check:palette` | pass |
| `npm run verify` 1536/1440/390 | pass on `/` and `/variant-b`: 0 overflow, 0 broken images, 1 `h1`, 10 anchors |
