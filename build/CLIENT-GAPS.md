# Client gaps — Elite Physicians Wealth Planning

Everything the build cannot supply for itself. This is a deliverable: each item is a
blocker held open on purpose rather than filled with plausible content. Nothing below has
been invented, substituted, or worked around.

---

## 1. Blockers — the site cannot launch without these

### 1.1 Portrait provenance — highest priority
`public/images/design/shared/hero-founder.png` renders as **Michael A. Epps** in the hero
and again in the planner section, with alt text asserting he is the named person.

The approved reference frames `public/design/a/refs/01-one-plan.png` and
`07-accountable-planner.png` show a **neutral placeholder card** reading "REAL MICHAEL A.
EPPS PORTRAIT — BUILD-TIME CLIENT ASSET; NEUTRAL PLACEHOLDER IN FRAME". `extraction_plan.json`
states repeatedly that no Epps likeness may be generated or extracted. `hard_rules`: *"Michael
A. Epps and all named staff are never generated."*

At full resolution the image's background contains a **framed diploma and an award plaque** —
credential theater, which `hard_rules` ban outright regardless of who the subject is.

Three ways out; the choice is yours, and the image is untouched until you make it:
- **(a)** Confirm it is a genuine client photo and send provenance — the diploma and plaque
  still need addressing.
- **(b)** Send the real photograph and we swap it.
- **(c)** Revert to the approved neutral placeholder. This *increases* fidelity to the
  approved artifact, but ships a visible "portrait pending" state.

### 1.2 Real logo
`hard_rules`: the existing logo is a fixed asset, never redesigned, and *"the outdated
Fiscal Vision logo"* must not become the final identity without explicit approval. No logo
file exists in the repo. The header and footer currently set the wordmark as **type**.
Blocks favicon, apple-icon, `themeColor` and OG images — all currently absent.

### 1.3 Google Calendar scheduling embed
`customer_asks`: *"Include direct Google Calendar scheduling using the supplied embed."*
Not supplied. "Schedule a strategy call" currently points at the legacy singular domain
via `LINKS.schedule`. `/schedule` cannot be built honestly without it.

### 1.4 Guide file + approved delivery workflow
`hard_rules`: the tax-planning guide *"remains gated and contingent on the customer
supplying the final guide and approved delivery workflow; never show it as immediately
downloadable."* Neither supplied. No agency-owned email pipeline has been stood up to
paper over this — doing so would invent the very workflow the rule reserves to you.

### 1.5 Form submit destination
`NEXT_PUBLIC_LEAD_ENDPOINT` is unset. The form validates and falls back to `mailto:`, and
says so rather than reporting a success that did not happen. Name the CRM or endpoint.

### 1.6 Analytics / GTM container
The mandatory `window.dataLayer.push({ event: 'form_submission' })` fires into no
container. Supply the GTM or GA4 ID.

### 1.7 Street address
`hard_rules`: no public address *"until the White Plains versus Waldorf discrepancy is
authoritatively resolved."* Unresolved, so the footer carries no NAP block and
`LocalBusiness` JSON-LD has not been emitted.

### 1.8 Legal pages
`/privacy`, `/terms`, `/disclosures` are **not drafted**. This is a regulated
financial-services site; the ship-gate agents check craft, not regulatory exposure.
Supply client- or compliance-reviewed text, or instruct us to launch without the routes.
They are deliberately unlinked from the footer — linking to routes that 404 is worse.

---

## 2. Decisions needed

### 2.1 Error colour is off-contract
`palette_contract.json` defines no error/validation state. The strategy-call form needs
one and uses `#9a2c2c`, now declared as `--color-danger` and flagged in `globals.css`.
It is **not** a brand colour. Confirm it, or supply one.

### 2.2 The two removed section mastheads
"The Consult Ledger" tabs are gone from `03-separate-rooms` and `04-blueprint-rounds`
(see the ledger). Those sections now open on their orientation line like every other
section. If you want a real label in that slot, supply the wording — we will not invent
practice branding.

### 2.3 Compliance-reviewed source copy
`customer_asks` promises to *"preserve accurate, compliance-reviewed source information
while improving structure and expanding thin pages."* That is an instruction to reuse the
existing approved copy, not to write fresh copy in its voice. **The source has not been
captured**, and no interior copy has been written. Confirm the legacy site
(`elitephysicianwealthplanning.com`) is the source of record before interior pages begin.

### 2.4 Review scaffolding
The `app.gomega.ai/review-bridge` script and `public/review-routes.json` are still live in
the build. Keep them for post-launch review, or strip them? Related: `public/design/**` is
the only copy of the approved design in the repo and is currently **publicly served**.
Moving it out of `public/` (keeping it in git) is recommended — confirm.

### 2.5 Cormorant Garamond 700
`typography_contract.json` declares display weights 400/500/600/**700**; `public/fonts/`
ships 400/500/600 only, so any 700 display weight is being synthesised by the browser.
Supply the file or amend the contract.

---

## 3. Quarantined

`public/images/design/shared/services-pillars-team.png` — 1.9 MB, referenced by nothing in
`src/`, but still deployed and publicly fetchable. It shows a suited figure surrounded by
fabricated white-coated "staff" in front of a wall-mounted chart: three `hard_rules`
violations in one file (fabricated staff, market-chart imagery, an unnamed principal
presented as the planner).

**Not yet moved** — quarantining it is a `public/` change and is bundled into decision 2.4
above so you rule on the whole scaffolding question at once.
