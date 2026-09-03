import { StrategyCallForm } from "@/components/shared/strategy-call-form";
import { BRAND, NEXT_DECISION } from "@/lib/content";

/**
 * The atlas closes on its own bright ground: white field, navy rails, the
 * form panel sitting on mist so it reads as an instrument rather than a
 * dropped-in card.
 */
export default function StrategyCall(): React.JSX.Element {
  return (
    <section
      id="form"
      aria-labelledby="form-heading"
      className="relative overflow-hidden border-t border-ink/10 bg-white"
    >
      <div className="relative z-10 mx-auto grid max-w-[1100px] gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16 lg:py-28">
        <div>
          <h2
            id="form-heading"
            className="max-w-md font-body text-display-m tracking-[-0.02em] leading-[1.15] font-bold tracking-tight text-ink"
          >
            Start with a conversation, not a proposal.
          </h2>
          <p className="mt-5 max-w-sm font-body text-[15px] leading-relaxed text-charcoal">
            {NEXT_DECISION.strategyCall.summary}
          </p>
          <p className="mt-6 border-l-2 border-gold pl-4 font-body text-[13px] leading-relaxed text-charcoal">
            {NEXT_DECISION.strategyCall.expectation}
          </p>
          <dl className="mt-10 grid gap-4 border-t border-ink/10 pt-8 font-body text-[13px] text-charcoal">
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-charcoal/55">Call</dt>
              <dd>
                <a
                  className="-my-2 inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-ink focus-visible:text-ink"
                  href={`tel:${BRAND.phone.replace(/\D/g, "")}`}
                >
                  {BRAND.phone}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-charcoal/55">Email</dt>
              <dd>
                <a
                  className="-my-2 inline-flex min-h-11 items-center underline underline-offset-4 transition-colors hover:text-ink focus-visible:text-ink"
                  href={`mailto:${BRAND.email}`}
                >
                  {BRAND.email}
                </a>
              </dd>
            </div>
            <div className="flex gap-3">
              <dt className="w-16 shrink-0 text-charcoal/55">Hours</dt>
              <dd>{BRAND.hours}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-sm border border-ink/12 bg-mist/35 p-6 sm:p-8">
          <StrategyCallForm tone="atlas" />
        </div>
      </div>
    </section>
  );
}
