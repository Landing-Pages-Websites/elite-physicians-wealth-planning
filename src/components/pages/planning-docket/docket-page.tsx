import { AdjacentPlanning } from "./adjacent-planning";
import type { DocketPageContent } from "./content-types";
import { CoordinationBoundary } from "./coordination-boundary";
import { DemandSituations } from "./demand-situations";
import { DocumentsNeeded } from "./documents-needed";
import { NextStep } from "./next-step";
import { OpeningDocket } from "./opening-docket";

/**
 * Composes the six docket sections in the contracted page_flow order.
 * Route files stay one-liners: metadata + <DocketPage content={...} />.
 */
export function DocketPage({
  content,
}: {
  content: DocketPageContent;
}): React.JSX.Element {
  return (
    <main id="main">
      <OpeningDocket content={content.opening} />
      <DemandSituations content={content.demand} />
      <DocumentsNeeded content={content.documents} />
      <CoordinationBoundary content={content.boundary} />
      <AdjacentPlanning content={content.adjacent} />
      <NextStep content={content.nextStep} />
    </main>
  );
}
