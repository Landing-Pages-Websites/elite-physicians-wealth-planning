import type { Metadata } from "next";
import { CommunicationsPrivacy } from "@/components/pages/privacy-disclosures/communications-privacy";
import { ContactForQuestions } from "@/components/pages/privacy-disclosures/contact-for-questions";
import { EducationalUse } from "@/components/pages/privacy-disclosures/educational-use";
import { RelationshipBoundaries } from "@/components/pages/privacy-disclosures/relationship-boundaries";
import { UtilityTitle } from "@/components/pages/privacy-disclosures/utility-title";
import { routeMetadata } from "@/lib/routes";
import "./privacy-disclosures.css";

export const metadata: Metadata = routeMetadata(
  "privacy-disclosures",
  "Website content is provided for educational purposes only and should not be treated as individualized tax, legal, investment, insurance, or financial advice.",
);

/**
 * /privacy-disclosures — restrained utility page. Section order and the
 * alternating white/ivory/navy bands follow the approved page_flow; all
 * disclosure copy is manifest-verbatim and live.
 */
export default function PrivacyDisclosuresPage(): React.JSX.Element {
  return (
    <main id="main">
      <UtilityTitle />
      <EducationalUse />
      <RelationshipBoundaries />
      <CommunicationsPrivacy />
      <ContactForQuestions />
    </main>
  );
}
