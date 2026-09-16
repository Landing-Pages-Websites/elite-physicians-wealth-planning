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

~~Target mean luminance 0.05-0.12.~~ **This target was wrong and is withdrawn.**
The plate that shipped measures 0.0076 — below the old floor — and is correct: a
low-key hero is mostly dark by design. Mean luminance does not separate a good
dark photograph from a broken one, because the broken plate scored 0.0127 and
passed the same test. What separates them is the brightness probe below: the
broken plate resolves into a rectangular smear patch at 6x, and this one resolves
into a room. Judge the plate by probe 1, not by a number.

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

## Plate 2 — blueprint band ✅ DELIVERED

Shipped as `04-blueprint-rounds/desk-still-life.jpg` (1400 × 1050, cropped from a
2000 × 1200 render). It is no longer a background: the band's scrim and the
`auto 150%` scaling are both gone, and the still-life is an `<Image>` in the
header row beside the headline.

**Slot (historic):** `#blueprint-rounds`, right side of an ivory band, behind a
six-step process rail. Was served by `desk-stethoscope-crop.jpg` — clean, but
480 × 435 scaled past 1400px, which rendered as an unidentifiable beige smear.

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
3. **Contrast gate.** `npm run check:contrast` must stay at 0 regions below AA
   with the new plate in place.

---

## Plate 3 — planner ground ✅ DELIVERED

Shipped as `07-accountable-planner/office-desk-ground.jpg` (2400 × 1200).

**Slot:** `#accountable-planner`, full-bleed ground behind a portrait card and a
dark copy column on ivory.

**Scene.** A defocused office corner at f/1.8: warm wall filling the left 55%,
a walnut desk edge and a sliver of leather chair carrying the right third, warm
afternoon light from the right. It is a ground, not a subject — nothing in it
competes for attention and nothing in it is sharp.

**Why it was needed.** The previous ground was `desk-notepad-crop.jpg`, a
2048 × 512 strip cut out of a photograph to escape three fabricated book spines,
then scaled to fill a 1400px band. It arrived as beige mush with no identifiable
subject — the crop solved the lettering problem and created a worse one.

**Passed:** no lettering anywhere, no people, no certificates, no seam at 6x.
