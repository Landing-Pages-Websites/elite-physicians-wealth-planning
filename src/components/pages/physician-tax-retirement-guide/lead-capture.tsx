import { NEXT_DECISION } from "@/lib/content";
import { GuideRequestForm } from "./guide-request-form";

const FORM_HEADLINE = "Request the guide.";

/**
 * 04-lead-capture-form — mist form surface: the ink-and-pen still life holds
 * the left field under the heading and the truthful availability note; the
 * live request form carries the right. Nothing claims instant access.
 */
export function LeadCapture(): React.JSX.Element {
  return (
    <section
      id="lead-capture-form"
      aria-labelledby="lead-capture-form-heading"
      className="ptg-form relative overflow-hidden"
    >
      <span aria-hidden="true" className="ptg-seam top-0 h-10" />
      <div className="relative z-10 va-shell grid gap-12 py-16 lg:grid-cols-[minmax(0,32%)_minmax(0,1fr)] lg:gap-16 lg:py-24">
        <div>
          <h2
            id="lead-capture-form-heading"
            className="text-display-m font-display leading-[1.1] font-medium tracking-[-0.02em] text-ink"
          >
            {FORM_HEADLINE}
          </h2>
          <p className="mt-4 max-w-[40ch] font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
            {NEXT_DECISION.guide.requestNote}
          </p>
          <img
            src="/images/design/physician-tax-retirement-guide/media/guide-form-ink-pen.jpg"
            alt=""
            aria-hidden="true"
            width={320}
            height={355}
            className="mt-10 hidden w-60 rounded-[3px] shadow-[0_20px_44px_-32px_rgba(11,31,58,0.6)] lg:block"
          />
        </div>

        <div className="rounded-sm border border-ink/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,31,58,0.55)] sm:p-9">
          <GuideRequestForm />
        </div>
      </div>
      <span aria-hidden="true" className="ptg-seam bottom-0 h-10" />
    </section>
  );
}
