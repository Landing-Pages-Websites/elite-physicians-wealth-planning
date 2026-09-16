import { NEXT_DECISION } from "@/lib/content";
import { FileLockIcon } from "@/components/site/icons";

/**
 * 05-delivery-gate — the manifest holds this page behind a content gate until
 * the customer supplies the final guide and its delivery process. This strip
 * renders that state in the reader's terms: a person answers every request;
 * there is no automatic download. The educational boundary sits here too.
 */
const GATE = {
  headline: "Every request is answered personally.",
  boundary:
    "Educational information only. Not individualized tax, legal, or investment advice.",
} as const;

export function DeliveryGate(): React.JSX.Element {
  return (
    <section
      id="delivery-gate"
      aria-labelledby="delivery-gate-heading"
      className="ptg-gate relative overflow-hidden"
    >
      <span aria-hidden="true" className="ptg-seam top-0 h-8" />
      <div className="relative z-10 va-shell flex flex-col items-start gap-7 py-16 sm:flex-row sm:items-center sm:justify-center sm:gap-10 lg:py-24">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold text-gold-text">
          <FileLockIcon className="h-7 w-7" />
        </span>
        <span
          aria-hidden="true"
          className="hidden h-16 w-px bg-gold/60 sm:block"
        />
        <div className="max-w-xl">
          <h2
            id="delivery-gate-heading"
            className="text-display-s font-display leading-[1.2] font-medium tracking-[-0.01em] text-ink"
          >
            {GATE.headline}
          </h2>
          <p className="mt-3 font-body text-body-m leading-[1.62] text-charcoal/85 text-pretty">
            {NEXT_DECISION.guide.requestNote}
          </p>
          <p className="mt-3 font-body text-body-s leading-[1.5] text-charcoal/65">
            {GATE.boundary}
          </p>
        </div>
      </div>
      <span aria-hidden="true" className="ptg-seam bottom-0 h-8" />
    </section>
  );
}
