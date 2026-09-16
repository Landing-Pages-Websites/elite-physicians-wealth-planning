/**
 * Typed content contract for the insights-article family.
 *
 * All twelve /insights/* articles share the same five-section grammar
 * (editorial-state-hero → verified-teaser → manuscript-gate →
 * source-and-review-gate → related-reading). Every visitor-facing string in an
 * ArticleContent object must come from that article's section manifest —
 * content files carry manifest copy, never invented editorial copy.
 */

/** One extracted raster placed in a family media frame. */
export interface ArticleImage {
  readonly src: string;
  /** Meaningful description of the actual photograph, or "" when decorative. */
  readonly alt: string;
  /**
   * Family CSS frame recipe (`art-frame--*` in insights-article.css). The
   * class sets the slot's aspect ratio and, where the extraction carries baked
   * artifacts near an edge, the exact overflow crop that excludes them.
   */
  readonly frameClass: string;
}

/** Which side of the copy the media frame sits on at desktop widths. */
export type MediaSide = "left" | "right";

export interface ArticleHero {
  readonly eyebrow: string;
  readonly headline: string;
  readonly body: string;
  /** Full-bleed navy hero plate; blended into the field by family veils. */
  readonly image: ArticleImage;
}

export interface VerifiedTeaser {
  readonly headline: string;
  readonly body: string;
  readonly items: readonly string[];
  readonly image: ArticleImage;
  readonly mediaSide: MediaSide;
}

export interface ManuscriptGate {
  readonly headline: string;
  readonly items: readonly string[];
  readonly image: ArticleImage;
  readonly mediaSide: MediaSide;
}

export interface SourceReviewGate {
  readonly headline: string;
  readonly items: readonly string[];
  readonly image: ArticleImage;
  /** Which side the documentary crop sits on at lg; defaults to "right". */
  readonly mediaSide?: MediaSide;
}

export interface RelatedLink {
  /** Real route from the site route table — never an external or dead path. */
  readonly href: string;
  /** Human label (navLabel from @/lib/routes) exposed to assistive tech. */
  readonly label: string;
}

export interface RelatedReading {
  readonly headline: string;
  readonly body: string;
  readonly links: readonly RelatedLink[];
  readonly image: ArticleImage;
  /** Which side the closing plate sits on at lg; defaults to "right". */
  readonly mediaSide?: MediaSide;
}

export interface ArticleContent {
  readonly hero: ArticleHero;
  readonly verifiedTeaser: VerifiedTeaser;
  readonly manuscriptGate: ManuscriptGate;
  readonly sourceReviewGate: SourceReviewGate;
  readonly relatedReading: RelatedReading;
}

/**
 * The one customer-facing publication-state line, shared by every article.
 * Descriptive form of the manifests' visibility note; no internal production
 * vocabulary may replace it.
 */
export const HELD_NOTE =
  "The complete article will be published here once its manuscript and attribution are approved.";

/** The editorial boundary the manifests place on every gated article. */
export const ARTICLE_BOUNDARY =
  "Educational information only. Not individualized tax, legal, or investment advice.";
