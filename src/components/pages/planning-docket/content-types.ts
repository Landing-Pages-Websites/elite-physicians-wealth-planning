/**
 * Content contract for the planning-service "docket" family.
 *
 * All five service dockets (/tax-planning-for-physicians,
 * /wealth-management-for-physicians, /retirement-planning-for-physicians,
 * /practice-owner-planning, /legacy-estate-planning) share one section
 * grammar: 01-opening-docket, 02-demand-situations, 03-documents-needed,
 * 04-coordination-boundary, 05-adjacent-planning, 06-next-step.
 *
 * The family components own composition and visual mechanics; a per-page
 * content object (content/<slug>.ts) owns every string and image path.
 * Copy comes verbatim from the page's section_manifest.json — never invent.
 * Variant fields exist because the approved refs genuinely differ per page;
 * pick the variant that matches YOUR page's ref, not a favourite.
 */

export interface DocketImage {
  readonly src: string;
  readonly alt: string;
  /** CSS object-position for the declared focal crop, e.g. "62% 40%". */
  readonly objectPosition?: string;
  /**
   * CSS aspect-ratio (e.g. "340 / 155") for slots the family sizes from the
   * source crop's intentional rectangle (room panels, route thumbnails, and
   * the documents strip, whose slot height follows this clean-crop rectangle
   * when declared). Other full-bleed slots ignore it — CSS geometry owns those.
   */
  readonly aspectRatio?: string;
}

export interface DocketLink {
  readonly label: string;
  readonly href: string;
}

export interface OpeningDocketContent {
  /**
   * "split": hard navy text field with the photograph as a discrete right
   * pane (tax ref). "canvas": the photograph reads as one full-bleed desk
   * scene the navy field dissolves into (wealth ref).
   */
  readonly variant: "split" | "canvas";
  /**
   * "deep": strengthens the canvas veil's left edge to near-solid navy where
   * the ref dissolves the photograph completely behind the headline (legacy).
   */
  readonly veil?: "standard" | "deep";
  /**
   * "arc": the section exits on the ref's curved ivory sweep with a gold
   * hairline instead of the straight navy seam (practice-owner ref).
   */
  readonly seam?: "line" | "arc";
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  readonly primaryCta: DocketLink;
  readonly secondaryLink: DocketLink;
  readonly boundary: string;
  readonly image: DocketImage;
}

/** Circled trigger glyphs drawn by the "mirror" demand ledger (legacy ref). */
export type DemandGlyph =
  | "beneficiary"
  | "trust"
  | "giving"
  | "property"
  | "family";

export interface DemandSituationsContent {
  /**
   * "stacked": headline/body sit directly above the trigger ledger in one
   * left column (tax ref). "columns": headline/body form their own ivory
   * column, divided from the ledger by a hairline rule (wealth ref).
   * "ambient": intro top-left over a wide lower-left ambience photograph;
   * the kicker-titled ledger holds a warm right column (retirement ref).
   * "card": intro above a framed check-row ledger card on the left; the
   * photograph fills the right field to the section edges (practice ref).
   * "mirror": edge-bleeding portrait photograph left; intro and a circled-
   * glyph ledger on the right (legacy ref).
   */
  readonly variant: "stacked" | "columns" | "ambient" | "card" | "mirror";
  /** Small-caps ledger title, from the manifest's interaction label. */
  readonly ledgerKicker?: string;
  readonly headline: string;
  readonly body: string;
  readonly items: readonly string[];
  /** Parallel to `items`; required by the "mirror" circled-glyph ledger. */
  readonly itemGlyphs?: readonly DemandGlyph[];
  readonly image: DocketImage;
}

export interface DocumentsNeededContent {
  /**
   * Where the owner-specific document photography sits: "bottom" = full-width
   * strip under the checklist (tax ref); "top" = right-anchored strip beside
   * the heading (wealth ref); "flank" = two framed panels bracketing the
   * checklist from the left and right edges (retirement ref — `secondImage`
   * holds the right panel).
   */
  readonly mediaPosition: "top" | "bottom" | "flank";
  /**
   * Checklist item mark per ref: document glyph (tax), bare check (wealth),
   * or gold-circled check (retirement/practice/legacy refs).
   */
  readonly itemIcon: "document" | "check" | "circled-check";
  /**
   * Item arrangement per ref: "inline" mark-beside-text with hairline
   * dividers (tax/wealth/retirement); "stacked" mark above a short gold rule
   * above text (practice); "thread" marks seated on one continuous gold
   * hairline with text below (legacy).
   */
  readonly itemStyle?: "inline" | "stacked" | "thread";
  /** Small-caps checklist title, from the manifest's interaction label. */
  readonly kicker?: string;
  readonly headline: string;
  readonly body: string;
  readonly items: readonly string[];
  readonly image: DocketImage;
  /** Right-edge framed panel, required by the "flank" media position. */
  readonly secondImage?: DocketImage;
}

/** Partner-role glyphs for the code-native "plan" diagram (retirement ref). */
export type BoundaryGlyph = "cpa" | "attorney" | "tpa";

export interface BoundaryRole {
  readonly label: string;
  /** Exactly one role per page is the "hub" (Elite Physicians Wealth Planning). */
  readonly kind: "hub" | "partner";
  /**
   * Owner-specific room crop, when the page's extraction plan ships one
   * (tax "rooms", practice "niches"). Omit when no raster ships (wealth,
   * retirement, legacy) — the family renders a code-native panel instead.
   * Never borrow another page's.
   */
  readonly image?: DocketImage;
  /**
   * Stroke glyph drawn on the role card by the "plan" layout; also keys the
   * code-native abstract room composition when no raster ships ("hub").
   */
  readonly glyph?: BoundaryGlyph;
}

export interface CoordinationBoundaryContent {
  /**
   * "rooms": staggered photographic room map, hub carries its own room crop
   * (tax ref). "hub": navy hub node centred between code-native partner
   * panels (wealth ref). "plan": floor-plan icon cards around a navy hub
   * node on a blueprint field, no raster (retirement ref). "niches": one
   * horizontal band of labelled photographic niches, hub first (practice
   * ref). "cards": double-framed label cards around a navy hub card, no
   * raster (legacy ref).
   */
  readonly layout: "rooms" | "hub" | "plan" | "niches" | "cards";
  /**
   * Small-caps diagram title, from the manifest's interaction label. The
   * "plan" layout renders it on the in-diagram annotation plate, which also
   * carries `body` (the header then shows the headline only).
   */
  readonly kicker?: string;
  readonly headline: string;
  readonly body: string;
  readonly roles: readonly BoundaryRole[];
}

export interface AdjacentRoute {
  /** Real site route; the ref renders the literal path as the visible label. */
  readonly href: string;
  /** Human name for assistive tech (the visible label is the path itself). */
  readonly name: string;
  readonly image: DocketImage;
}

export interface AdjacentPlanningContent {
  /**
   * "stair": rows step down-right across an ivory field and the gold line
   * drops into a navy exit band (tax/legacy refs). "shelf": plates stack
   * against a right edge with an edge-touching ambience photo on the left
   * (wealth ref). "ledger": aligned full-width rows with gold rules running
   * to arrow terminals; the explore link sits inside the navy exit band
   * (retirement ref). "cascade": ivory plates step down-right and the
   * explore link sits inside the navy exit band (practice ref).
   */
  readonly layout: "stair" | "shelf" | "ledger" | "cascade";
  /** Stair only: which side the field explore link aligns (legacy: "end"). */
  readonly exploreAlign?: "start" | "end";
  /** Stair exit-band terminal: sealed circle (tax) or plain dot (legacy). */
  readonly exitNode?: "seal" | "dot";
  readonly headline: string;
  readonly body: string;
  readonly explore: DocketLink;
  readonly routes: readonly AdjacentRoute[];
  /** Required by the "shelf" layout only: the left edge-touching ambience crop. */
  readonly edgeImage?: DocketImage;
}

export interface NextStepContent {
  /** Which side the closing office photograph anchors (tax: right; wealth: left). */
  readonly mediaSide: "left" | "right";
  readonly headline: string;
  readonly body: string;
  readonly primaryCta: DocketLink;
  readonly boundary: string;
  readonly image: DocketImage;
}

export interface DocketPageContent {
  /** Design-input slug; also the images namespace under /images/design/. */
  readonly slug: string;
  /** 140–160 chars assembled only from the manifest's visible copy. */
  readonly metaDescription: string;
  readonly opening: OpeningDocketContent;
  readonly demand: DemandSituationsContent;
  readonly documents: DocumentsNeededContent;
  readonly boundary: CoordinationBoundaryContent;
  readonly adjacent: AdjacentPlanningContent;
  readonly nextStep: NextStepContent;
}
