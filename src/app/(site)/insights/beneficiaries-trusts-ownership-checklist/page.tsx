import type { Metadata } from "next";
import { InsightsArticleSections } from "@/components/pages/insights-article/article-sections";
import { BENEFICIARIES_TRUSTS_OWNERSHIP } from "@/components/pages/insights-article/content/beneficiaries-trusts-ownership-checklist";
import { routeMetadata } from "@/lib/routes";
import "@/components/pages/insights-article/content/beneficiaries-trusts-ownership-checklist.css";

export const metadata: Metadata = routeMetadata(
  "insights--beneficiaries-trusts-ownership-checklist",
  "Beneficiaries, Trusts, and Account Ownership: A Physician Estate-Plan Coordination Checklist — where estate documents and account titling most often disconnect.",
);

/**
 * /insights/beneficiaries-trusts-ownership-checklist — a truthful held-article
 * editorial state built on the shared insights-article family grammar.
 */
export default function BeneficiariesTrustsOwnershipPage(): React.JSX.Element {
  return (
    <main id="main">
      <InsightsArticleSections content={BENEFICIARIES_TRUSTS_OWNERSHIP} />
    </main>
  );
}
