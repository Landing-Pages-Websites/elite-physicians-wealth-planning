import type { AudiencePageContent } from "./content-types";
import { CareerScenario } from "./career-scenario";
import { CoordinationMap } from "./coordination-map";
import { DecisionPatterns } from "./decision-patterns";
import { QuestionsBeforeCall } from "./questions-before-call";
import { RelatedPaths } from "./related-paths";
import { RoleContext } from "./role-context";

/**
 * Assembles one audience/career page from its typed content object, in the
 * family's fixed section order (page_flow wins): role-context →
 * decision-patterns → career-scenario → coordination-map →
 * questions-before-call → related-paths.
 */
export function AudiencePage({
  content,
}: {
  content: AudiencePageContent;
}): React.JSX.Element {
  return (
    <main id="main">
      <RoleContext content={content.roleContext} />
      <DecisionPatterns content={content.decisionPatterns} />
      <CareerScenario content={content.careerScenario} />
      <CoordinationMap content={content.coordinationMap} />
      <QuestionsBeforeCall content={content.questionsBeforeCall} />
      <RelatedPaths content={content.relatedPaths} />
    </main>
  );
}
