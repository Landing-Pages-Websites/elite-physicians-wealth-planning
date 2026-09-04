# Image brief — plates that must be generated

Hand this to whatever tool produces the imagery. Everything here is measured or
quoted from the build's own contracts, not invented.

Two of Direction A's bands need a photograph that does not exist in the repo.
Every other band has been fixed by cropping an existing asset; these two cannot
be, and the reason is recorded under each.

---

## Why cropping cannot solve these

Every dark plate Direction A ships is unusable, measured on the actual pixels:

| Asset | Mean luminance | Pixels above near-black |
|---|---|---|
| `a/01-one-plan/hero-office-reconstructed.jpg` | 0.0127 | 1.1% |
| `a/08-next-decision/office-background-reconstructed.jpg` | 0.0098 | **0.0%** |
| `a/02-career-signal/office-background-reconstructed.jpg` | 0.0283 | 4.8% |

The hero plate is not underexposed. Brightened 6× it resolves into a hard-edged
rectangular patch of horizontal smear bands across the right-centre and heavy
vertical banding down the left — a failed composite. No exposure or scrim
adjustment recovers it, and lightening only exposes the damage.

The light plates were salvageable and have been salvaged by cropping out their
fabricated regions:

- `04-blueprint-rounds/desk-stethoscope-crop.jpg` — from the still-life, below
  and right of the three invented book titles and the handwritten checklist that
  misspells "Tax Efficency".
- `07-accountable-planner/desk-notepad-crop.jpg` — from the desk scene, below
  the invented spines "The Physician's Guide to Financial Lifecycles", "TAX
  STRATEGIES" and "RETIREMENT PLANNING".

---

## Plate 1 — hero (required)

**Slot:** `#one-plan`, full-bleed behind a navy band. Copy occupies the left
~44%; a portrait card sits right of centre.
**Deliver:** 2560 × 1440 minimum, JPEG.

**Scene.** A private physician-consultation office at low key. A walnut desk,
a desk lamp throwing one warm pool of light, a chair, shelving falling into
shadow. The register is "the room where this gets decided" — not a clinic, not
a trading floor.

**Light.** Low-key, one dominant warm source from the right of frame, deep
falloff to the left so the copy column stays dark enough for ivory text at 4.5:1.
Target mean luminance **0.05–0.12** — dark, but with real detail. The current
plate reads 0.0127, which is why it appears empty.

**Composition.** Keep the right third the most lit; that is where the portrait
card sits and it needs something behind it. Leave the left 44% quiet.

**Must not contain**
- Any legible text: no book spines, no certificates, no signage, no screens with
  readable UI. This build has already shipped invented publications twice.
- Any person, any face, any hands. Named staff are never generated
  (`hard_rules`), and an unnamed figure in the founder's office implies staff.
- Diplomas, seals, award plaques, framed certificates — credential theater is
  banned outright regardless of subject.
- Coins, handshakes, skyscrapers, market charts, stock tickers.
- Any composite seam. Inspect the output at 6× brightness before accepting it;
  that is how the current defect became visible.

---

## Plate 2 — blueprint band (optional, an upgrade)

**Slot:** `#blueprint-rounds`, right side of an ivory band, behind a six-step
process rail. Currently served by `desk-stethoscope-crop.jpg`, which is clean and
adequate but small (480 × 435) and carries a single object.

**Deliver:** 2000 × 1200 minimum, JPEG.

**Scene.** A physician's desk still-life on warm ivory. A stethoscope, a fountain
pen, a closed notebook, a cup. Soft daylight from the upper left, long shallow
shadows, generous empty surface.

**Composition.** Objects clustered in the right third, the left two-thirds clean
and near-empty — the process rail and its labels run across the left and centre.

**Must not contain**
- Book spines, printed titles, handwriting, labels, or any other legible text.
  This is the exact failure in the asset it replaces.
- Charts, graphs or data of any kind.
- People or body parts.

---

## Acceptance check

Before wiring any new plate in, run these:

1. **Brightness probe.** View at 6× brightness. Any hard-edged rectangular patch,
   banding, or smear means the render failed — reject it.
2. **Legibility probe.** Zoom to 100% and read every surface. If a word can be
   made out anywhere, reject it.
3. **Luminance.** For the hero, mean luminance must land in 0.05–0.12.
4. **Contrast gate.** `npm run check:contrast` must stay at 0 regions below AA
   with the new plate in place.
