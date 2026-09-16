import type { ArticleContent } from "./content-types";
import { EditorialStateHero } from "./editorial-state-hero";
import { ManuscriptGate } from "./manuscript-gate";
import { RelatedReading } from "./related-reading";
import { SourceAndReviewGate } from "./source-and-review-gate";
import { VerifiedTeaser } from "./verified-teaser";
import "./insights-article.css";

/**
 * The complete five-section body every /insights/* article shares, in the
 * approved page_flow order. Route files own <main>, metadata and the content
 * object; this component owns the grammar so all twelve articles stay
 * structurally identical.
 */
export function InsightsArticleSections({
  content,
}: {
  content: ArticleContent;
}): React.JSX.Element {
  return (
    <>
      <EditorialStateHero hero={content.hero} />
      <VerifiedTeaser teaser={content.verifiedTeaser} />
      <ManuscriptGate gate={content.manuscriptGate} />
      <SourceAndReviewGate gate={content.sourceReviewGate} />
      <RelatedReading related={content.relatedReading} />
    </>
  );
}
